import * as fs from 'fs';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { SERVER_REQUEST_URL, SERVER_REQUEST_ORIGIN } from '@spartacus/core';

/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
function getRequestOrigin(req) {
    // If express is resolving and trusting X-Forwarded-Host, we want to take it
    // into an account to properly generate request origin.
    const trustProxyFn = req.app.get('trust proxy fn');
    let forwardedHost = req.get('X-Forwarded-Host');
    if (forwardedHost && trustProxyFn(req.connection.remoteAddress, 0)) {
        if (forwardedHost.indexOf(',') !== -1) {
            // Note: X-Forwarded-Host is normally only ever a
            //       single value, but this is to be safe.
            forwardedHost = forwardedHost
                .substring(0, forwardedHost.indexOf(','))
                .trimRight();
        }
        return req.protocol + '://' + forwardedHost;
    }
    else {
        return req.protocol + '://' + req.get('host');
    }
}

/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
function getRequestUrl(req) {
    return getRequestOrigin(req) + req.originalUrl;
}

/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
class RenderingCache {
    constructor(options) {
        this.options = options;
        this.renders = new Map();
    }
    setAsRendering(key) {
        this.renders.set(key, { rendering: true });
    }
    isRendering(key) {
        var _a;
        return !!((_a = this.renders.get(key)) === null || _a === void 0 ? void 0 : _a.rendering);
    }
    store(key, err, html) {
        var _a, _b;
        const entry = { err, html };
        if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.ttl) {
            entry.time = Date.now();
        }
        if ((_b = this.options) === null || _b === void 0 ? void 0 : _b.cacheSize) {
            this.renders.delete(key);
            if (this.renders.size >= this.options.cacheSize) {
                this.renders.delete(this.renders.keys().next().value);
            }
        }
        this.renders.set(key, entry);
    }
    get(key) {
        return this.renders.get(key);
    }
    clear(key) {
        this.renders.delete(key);
    }
    isReady(key) {
        const entry = this.renders.get(key);
        const isRenderPresent = (entry === null || entry === void 0 ? void 0 : entry.html) || (entry === null || entry === void 0 ? void 0 : entry.err);
        return isRenderPresent && this.isFresh(key);
    }
    isFresh(key) {
        var _a, _b, _c, _d;
        if (!((_a = this.options) === null || _a === void 0 ? void 0 : _a.ttl)) {
            return true;
        }
        return Date.now() - ((_c = (_b = this.renders.get(key)) === null || _b === void 0 ? void 0 : _b.time) !== null && _c !== void 0 ? _c : 0) < ((_d = this.options) === null || _d === void 0 ? void 0 : _d.ttl);
    }
}

/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
var RenderingStrategy;
(function (RenderingStrategy) {
    RenderingStrategy[RenderingStrategy["ALWAYS_CSR"] = -1] = "ALWAYS_CSR";
    RenderingStrategy[RenderingStrategy["DEFAULT"] = 0] = "DEFAULT";
    RenderingStrategy[RenderingStrategy["ALWAYS_SSR"] = 1] = "ALWAYS_SSR";
})(RenderingStrategy || (RenderingStrategy = {}));

/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Returns the full url for the given SSR Request.
 */
const getDefaultRenderKey = getRequestUrl;
/**
 * The rendered pages are kept in memory to be served on next request. If the `cache` is set to `false`, the
 * response is evicted as soon as the first successful response is successfully returned.
 */
class OptimizedSsrEngine {
    constructor(expressEngine, ssrOptions) {
        this.expressEngine = expressEngine;
        this.ssrOptions = ssrOptions;
        this.currentConcurrency = 0;
        this.renderingCache = new RenderingCache(this.ssrOptions);
        this.templateCache = new Map();
        /**
         * When the config `reuseCurrentRendering` is enabled, we want perform
         * only one render for one rendering key and reuse the html result
         * for all the pending requests for the same rendering key.
         * Therefore we need to store the callbacks for all the pending requests
         * and invoke them with the html after the render completes.
         *
         * This Map should be used only when `reuseCurrentRendering` config is enabled.
         * It's indexed by the rendering keys.
         */
        this.renderCallbacks = new Map();
    }
    get engineInstance() {
        return this.renderResponse.bind(this);
    }
    /**
     * When SSR page can not be returned in time, we're returning index.html of
     * the CSR application.
     * The CSR application is returned with the "Cache-Control: no-store" response-header. This notifies external cache systems to not use the CSR application for the subsequent request.
     */
    fallbackToCsr(response, filePath, callback) {
        response.set('Cache-Control', 'no-store');
        callback(undefined, this.getDocument(filePath));
    }
    getRenderingKey(request) {
        var _a;
        return ((_a = this.ssrOptions) === null || _a === void 0 ? void 0 : _a.renderKeyResolver)
            ? this.ssrOptions.renderKeyResolver(request)
            : getDefaultRenderKey(request);
    }
    getRenderingStrategy(request) {
        var _a;
        return ((_a = this.ssrOptions) === null || _a === void 0 ? void 0 : _a.renderingStrategyResolver)
            ? this.ssrOptions.renderingStrategyResolver(request)
            : RenderingStrategy.DEFAULT;
    }
    /**
     * When returns true, the server side rendering should be performed.
     * When returns false, the CSR fallback should be returned.
     *
     * We should not render, when there is already
     * a pending rendering for the same rendering key
     * (unless the `reuseCurrentRendering` config option is enabled)
     * OR when the concurrency limit is exceeded.
     */
    shouldRender(request) {
        var _a, _b;
        const renderingKey = this.getRenderingKey(request);
        const concurrencyLimitExceeded = this.isConcurrencyLimitExceeded(renderingKey);
        const fallBack = this.renderingCache.isRendering(renderingKey) &&
            !((_a = this.ssrOptions) === null || _a === void 0 ? void 0 : _a.reuseCurrentRendering);
        if (fallBack) {
            this.log(`CSR fallback: rendering in progress (${request === null || request === void 0 ? void 0 : request.originalUrl})`);
        }
        else if (concurrencyLimitExceeded) {
            this.log(`CSR fallback: Concurrency limit exceeded (${(_b = this.ssrOptions) === null || _b === void 0 ? void 0 : _b.concurrency})`);
        }
        return ((!fallBack &&
            !concurrencyLimitExceeded &&
            this.getRenderingStrategy(request) !== RenderingStrategy.ALWAYS_CSR) ||
            this.getRenderingStrategy(request) === RenderingStrategy.ALWAYS_SSR);
    }
    /**
     * Checks for the concurrency limit
     *
     * @returns true if rendering this request would exceed the concurrency limit
     */
    isConcurrencyLimitExceeded(renderingKey) {
        var _a, _b;
        // If we can reuse a pending render for this request, we don't take up a new concurrency slot.
        // In that case we don't exceed the concurrency limit even if the `currentConcurrency`
        // already reaches the limit.
        if (((_a = this.ssrOptions) === null || _a === void 0 ? void 0 : _a.reuseCurrentRendering) &&
            this.renderingCache.isRendering(renderingKey)) {
            return false;
        }
        return ((_b = this.ssrOptions) === null || _b === void 0 ? void 0 : _b.concurrency)
            ? this.currentConcurrency >= this.ssrOptions.concurrency
            : false;
    }
    /**
     * Returns true, when the `timeout` option has been configured to non-zero value OR
     * when the rendering strategy for the given request is ALWAYS_SSR.
     * Otherwise, it returns false.
     */
    shouldTimeout(request) {
        var _a;
        return (!!((_a = this.ssrOptions) === null || _a === void 0 ? void 0 : _a.timeout) ||
            this.getRenderingStrategy(request) === RenderingStrategy.ALWAYS_SSR);
    }
    /**
     * Returns the timeout value.
     *
     * In case of the rendering strategy ALWAYS_SSR, it returns the config `forcedSsrTimeout`.
     * Otherwise, it returns the config `timeout`.
     */
    getTimeout(request) {
        var _a, _b, _c, _d;
        return this.getRenderingStrategy(request) === RenderingStrategy.ALWAYS_SSR
            ? (_b = (_a = this.ssrOptions) === null || _a === void 0 ? void 0 : _a.forcedSsrTimeout) !== null && _b !== void 0 ? _b : 60000
            : (_d = (_c = this.ssrOptions) === null || _c === void 0 ? void 0 : _c.timeout) !== null && _d !== void 0 ? _d : 0;
    }
    /**
     * If there is an available cached response for this rendering key,
     * it invokes the given render callback with the response and returns true.
     *
     * Otherwise, it returns false.
     */
    returnCachedRender(request, callback) {
        var _a;
        const key = this.getRenderingKey(request);
        if (this.renderingCache.isReady(key)) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const cached = this.renderingCache.get(key);
            callback(cached.err, cached.html);
            if (!((_a = this.ssrOptions) === null || _a === void 0 ? void 0 : _a.cache)) {
                // we drop cached rendering if caching is disabled
                this.renderingCache.clear(key);
            }
            return true;
        }
        return false;
    }
    /**
     * Handles the request and invokes the given `callback` with the result html / error.
     *
     * The result might be ether:
     * - a CSR fallback with a basic `index.html` content
     * - a result rendered by the original Angular Universal express engine
     * - a result from the in-memory cache (which was previously rendered by Angular Universal express engine).
     */
    renderResponse(filePath, options, callback) {
        const request = options.req;
        const response = options.res || options.req.res;
        if (this.returnCachedRender(request, callback)) {
            this.log(`Render from cache (${request === null || request === void 0 ? void 0 : request.originalUrl})`);
            return;
        }
        if (!this.shouldRender(request)) {
            this.fallbackToCsr(response, filePath, callback);
            return;
        }
        let requestTimeout;
        if (this.shouldTimeout(request)) {
            // establish timeout for rendering
            const timeout = this.getTimeout(request);
            requestTimeout = setTimeout(() => {
                requestTimeout = undefined;
                this.fallbackToCsr(response, filePath, callback);
                this.log(`SSR rendering exceeded timeout ${timeout}, fallbacking to CSR for ${request === null || request === void 0 ? void 0 : request.originalUrl}`, false);
            }, timeout);
        }
        else {
            // Here we respond with the fallback to CSR, but we don't `return`.
            // We let the actual rendering task to happen in the background
            // to eventually store the rendered result in the cache.
            this.fallbackToCsr(response, filePath, callback);
        }
        const renderingKey = this.getRenderingKey(request);
        const renderCallback = (err, html) => {
            var _a;
            if (requestTimeout) {
                // if request is still waiting for render, return it
                clearTimeout(requestTimeout);
                callback(err, html);
                this.log(`Request is resolved with the SSR rendering result (${request === null || request === void 0 ? void 0 : request.originalUrl})`);
                // store the render only if caching is enabled
                if ((_a = this.ssrOptions) === null || _a === void 0 ? void 0 : _a.cache) {
                    this.renderingCache.store(renderingKey, err, html);
                }
                else {
                    this.renderingCache.clear(renderingKey);
                }
            }
            else {
                // store the render for future use
                this.renderingCache.store(renderingKey, err, html);
            }
        };
        this.handleRender({
            filePath,
            options,
            renderCallback,
            request,
        });
    }
    log(message, debug = true) {
        var _a;
        if (!debug || ((_a = this.ssrOptions) === null || _a === void 0 ? void 0 : _a.debug)) {
            console.log(message);
        }
    }
    /** Retrieve the document from the cache or the filesystem */
    getDocument(filePath) {
        let doc = this.templateCache.get(filePath);
        if (!doc) {
            // fs.readFileSync could be missing in a browser, specifically
            // in a unit tests with { node: { fs: 'empty' } } webpack configuration
            doc = (fs === null || fs === void 0 ? void 0 : fs.readFileSync) ? fs.readFileSync(filePath, 'utf-8') : '';
            this.templateCache.set(filePath, doc);
        }
        return doc;
    }
    /**
     * Delegates the render to the original _Angular Universal express engine_.
     *
     * In case when the config `reuseCurrentRendering` is enabled and **if there is already a pending
     * render task for the same rendering key**, it doesn't delegate a new render to Angular Universal.
     * Instead, it waits for the current rendering to complete and then reuse the result for all waiting requests.
     */
    handleRender({ filePath, options, renderCallback, request, }) {
        var _a, _b;
        if (!((_a = this.ssrOptions) === null || _a === void 0 ? void 0 : _a.reuseCurrentRendering)) {
            this.startRender({
                filePath,
                options,
                renderCallback,
                request,
            });
            return;
        }
        const renderingKey = this.getRenderingKey(request);
        if (!this.renderCallbacks.has(renderingKey)) {
            this.renderCallbacks.set(renderingKey, []);
        }
        (_b = this.renderCallbacks.get(renderingKey)) === null || _b === void 0 ? void 0 : _b.push(renderCallback);
        if (!this.renderingCache.isRendering(renderingKey)) {
            this.startRender({
                filePath,
                options,
                request,
                renderCallback: (err, html) => {
                    var _a;
                    // Share the result of the render with all awaiting requests for the same key:
                    // Note: we access the Map at the moment of the render finished (don't store value in a local variable),
                    //       because in the meantime something might have deleted the value (i.e. when `maxRenderTime` passed).
                    (_a = this.renderCallbacks
                        .get(renderingKey)) === null || _a === void 0 ? void 0 : _a.forEach((cb) => cb(err, html)); // pass the shared result to all waiting rendering callbacks
                    this.renderCallbacks.delete(renderingKey);
                },
            });
        }
        this.log(`Request is waiting for the SSR rendering to complete (${request === null || request === void 0 ? void 0 : request.originalUrl})`);
    }
    /**
     * Delegates the render to the original _Angular Universal express engine_.
     *
     * There is no way to abort the running render of Angular Universal.
     * So if the render doesn't complete in the configured `maxRenderTime`,
     * we just consider the render task as hanging (note: it's a potential memory leak!).
     * Later on, even if the render completes somewhen in the future, we will ignore
     * its result.
     */
    startRender({ filePath, options, renderCallback, request, }) {
        var _a, _b;
        const renderingKey = this.getRenderingKey(request);
        // Setting the timeout for hanging renders that might not ever finish due to various reasons.
        // After the configured `maxRenderTime` passes, we consider the rendering task as hanging,
        // and release the concurrency slot and forget all callbacks waiting for the render's result.
        let maxRenderTimeout = setTimeout(() => {
            var _a;
            this.renderingCache.clear(renderingKey);
            maxRenderTimeout = undefined;
            this.currentConcurrency--;
            if ((_a = this.ssrOptions) === null || _a === void 0 ? void 0 : _a.reuseCurrentRendering) {
                this.renderCallbacks.delete(renderingKey);
            }
            this.log(`Rendering of ${request === null || request === void 0 ? void 0 : request.originalUrl} was not able to complete. This might cause memory leaks!`, false);
        }, (_b = (_a = this.ssrOptions) === null || _a === void 0 ? void 0 : _a.maxRenderTime) !== null && _b !== void 0 ? _b : 300000); // 300000ms == 5 minutes
        this.log(`Rendering started (${request === null || request === void 0 ? void 0 : request.originalUrl})`);
        this.renderingCache.setAsRendering(renderingKey);
        this.currentConcurrency++;
        this.expressEngine(filePath, options, (err, html) => {
            if (!maxRenderTimeout) {
                // ignore this render's result because it exceeded maxRenderTimeout
                this.log(`Rendering of ${request.originalUrl} completed after the specified maxRenderTime, therefore it was ignored.`, false);
                return;
            }
            clearTimeout(maxRenderTimeout);
            this.log(`Rendering completed (${request === null || request === void 0 ? void 0 : request.originalUrl})`);
            this.currentConcurrency--;
            renderCallback(err, html);
        });
    }
}

/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Returns Spartacus providers to be passed to the Angular express engine (in SSR)
 *
 * @param options
 */
function getServerRequestProviders() {
    return [
        {
            provide: SERVER_REQUEST_URL,
            useFactory: getRequestUrl,
            deps: [REQUEST],
        },
        {
            provide: SERVER_REQUEST_ORIGIN,
            useFactory: getRequestOrigin,
            deps: [REQUEST],
        },
    ];
}

/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The wrapper over the standard ngExpressEngine, that provides tokens for Spartacus
 * @param ngExpressEngine
 */
class NgExpressEngineDecorator {
    /**
     * Returns the higher order ngExpressEngine with provided tokens for Spartacus
     *
     * @param ngExpressEngine
     */
    static get(ngExpressEngine, optimizationOptions) {
        return decorateExpressEngine(ngExpressEngine, optimizationOptions);
    }
}
function decorateExpressEngine(ngExpressEngine, optimizationOptions = {
    concurrency: 20,
    timeout: 3000,
}) {
    return function (setupOptions) {
        var _a;
        const engineInstance = ngExpressEngine(Object.assign(Object.assign({}, setupOptions), { providers: [
                // add spartacus related providers
                ...getServerRequestProviders(),
                ...((_a = setupOptions.providers) !== null && _a !== void 0 ? _a : []),
            ] }));
        // apply optimization wrapper if optimization options were defined
        return optimizationOptions
            ? new OptimizedSsrEngine(engineInstance, optimizationOptions)
                .engineInstance
            : engineInstance;
    };
}

/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgExpressEngineDecorator, OptimizedSsrEngine, RenderingCache, RenderingStrategy, getDefaultRenderKey, getServerRequestProviders };
//# sourceMappingURL=spartacus-setup-ssr.mjs.map
