/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { getUrl, isHttpOrHttps } from '../util/url-utils';
export function epdVisualizationConfigValidator(epdVisualizationConfig) {
    // -- epdVisualization
    const epdVisualization = epdVisualizationConfig.epdVisualization;
    if (!epdVisualization) {
        return unconfiguredPropertyMessage('epdVisualization');
    }
    // -- apis section
    if (!epdVisualization.apis) {
        return unconfiguredPropertyMessage('epdVisualization.apis');
    }
    const configApisBaseUrlProperty = 'epdVisualization.apis.baseUrl';
    if (!epdVisualization.apis.baseUrl) {
        return unconfiguredPropertyMessage(configApisBaseUrlProperty);
    }
    const apiBaseUrl = getUrl(epdVisualization.apis.baseUrl);
    if (!apiBaseUrl) {
        return invalidUrlMessage(configApisBaseUrlProperty, epdVisualization.apis.baseUrl);
    }
    if (!isHttpOrHttps(apiBaseUrl)) {
        return invalidUrlProtocolMessage(configApisBaseUrlProperty);
    }
    // -- ui5 section
    if (!epdVisualization.ui5) {
        return unconfiguredPropertyMessage('epdVisualization.ui5');
    }
    const configUi5BootstrapUrlProperty = 'epdVisualization.ui5.bootstrapUrl';
    if (!epdVisualization.ui5.bootstrapUrl) {
        return unconfiguredPropertyMessage(configUi5BootstrapUrlProperty);
    }
    const ui5BootStrapUrl = getUrl(epdVisualization.ui5.bootstrapUrl);
    if (!ui5BootStrapUrl) {
        return invalidUrlMessage(configUi5BootstrapUrlProperty, epdVisualization.ui5.bootstrapUrl);
    }
    if (!isHttpOrHttps(ui5BootStrapUrl)) {
        return invalidUrlProtocolMessage(configUi5BootstrapUrlProperty);
    }
    // -- usageIds section
    if (!epdVisualization.usageIds) {
        return unconfiguredPropertyMessage('epdVisualization.usageIds');
    }
    if (!epdVisualization.usageIds.folderUsageId.name) {
        return unconfiguredPropertyMessage('epdVisualization.usageIds.folderUsageId.name');
    }
    if (!epdVisualization.usageIds.folderUsageId.keys ||
        !epdVisualization.usageIds.folderUsageId.keys.length) {
        return unconfiguredPropertyMessage('epdVisualization.usageIds.folderUsageId.keys');
    }
    for (let i = 0; i < epdVisualization.usageIds.folderUsageId.keys.length; i++) {
        if (!epdVisualization.usageIds.folderUsageId.keys[i].name) {
            return unconfiguredPropertyMessage(`epdVisualization.usageIds.folderUsageId.keys[${i}].name`);
        }
        if (!epdVisualization.usageIds.folderUsageId.keys[i].value) {
            return unconfiguredPropertyMessage(`epdVisualization.usageIds.folderUsageId.keys[${i}].value`);
        }
    }
    if (!epdVisualization.usageIds.productUsageId.source) {
        return unconfiguredPropertyMessage('epdVisualization.usageIds.productUsageId.source');
    }
    if (!epdVisualization.usageIds.productUsageId.category) {
        return unconfiguredPropertyMessage('epdVisualization.usageIds.productUsageId.category');
    }
    if (!epdVisualization.usageIds.productUsageId.keyName) {
        return unconfiguredPropertyMessage('epdVisualization.usageIds.productUsageId.keyName');
    }
    // -- visualPicking section
    if (!epdVisualization.visualPicking) {
        return unconfiguredPropertyMessage('epdVisualization.visualPicking');
    }
    if (!epdVisualization.visualPicking.productReferenceType) {
        return unconfiguredPropertyMessage('epdVisualization.visualPicking.productReferenceType');
    }
}
function unconfiguredPropertyMessage(propertyName) {
    return `No value configured for ${propertyName} in the EPD Visualization library configuration.`;
}
function invalidUrlMessage(propertyName, url) {
    return `URL value '${url}' configured for ${propertyName} in the EPD Visualization library configuration is not valid.`;
}
function invalidUrlProtocolMessage(propertyName) {
    return `URL for ${propertyName} must use HTTPS or HTTP protocol.`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXBkLXZpc3VhbGl6YXRpb24tY29uZmlnLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2ludGVncmF0aW9uLWxpYnMvZXBkLXZpc3VhbGl6YXRpb24vcm9vdC9jb25maWcvZXBkLXZpc3VhbGl6YXRpb24tY29uZmlnLXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcxRCxNQUFNLFVBQVUsK0JBQStCLENBQzdDLHNCQUE4QztJQUU5QyxzQkFBc0I7SUFFdEIsTUFBTSxnQkFBZ0IsR0FBRyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7UUFDckIsT0FBTywyQkFBMkIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0tBQ3hEO0lBRUQsa0JBQWtCO0lBRWxCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUU7UUFDMUIsT0FBTywyQkFBMkIsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0tBQzdEO0lBRUQsTUFBTSx5QkFBeUIsR0FBRywrQkFBK0IsQ0FBQztJQUNsRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNsQyxPQUFPLDJCQUEyQixDQUFDLHlCQUF5QixDQUFDLENBQUM7S0FDL0Q7SUFFRCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pELElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDZixPQUFPLGlCQUFpQixDQUN0Qix5QkFBeUIsRUFDekIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FDOUIsQ0FBQztLQUNIO0lBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUM5QixPQUFPLHlCQUF5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QixDQUFDLFlBQW9CO0lBQ3ZELE9BQU8sMkJBQTJCLFlBQVksa0RBQWtELENBQUM7QUFDbkcsQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQUMsWUFBb0IsRUFBRSxHQUFXO0lBQzFELE9BQU8sY0FBYyxHQUFHLG9CQUFvQixZQUFZLCtEQUErRCxDQUFDO0FBQzFILENBQUM7QUFFRCxTQUFTLHlCQUF5QixDQUFDLFlBQW9CO0lBQ3JELE9BQU8sV0FBVyxZQUFZLG1DQUFtQyxDQUFDO0FBQ3BFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBnZXRVcmwsIGlzSHR0cE9ySHR0cHMgfSBmcm9tICcuLi91dGlsL3VybC11dGlscyc7XG5pbXBvcnQgeyBFcGRWaXN1YWxpemF0aW9uQ29uZmlnIH0gZnJvbSAnLi9lcGQtdmlzdWFsaXphdGlvbi1jb25maWcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZXBkVmlzdWFsaXphdGlvbkNvbmZpZ1ZhbGlkYXRvcihcbiAgZXBkVmlzdWFsaXphdGlvbkNvbmZpZzogRXBkVmlzdWFsaXphdGlvbkNvbmZpZ1xuKTogc3RyaW5nIHwgdm9pZCB7XG4gIC8vIC0tIGVwZFZpc3VhbGl6YXRpb25cblxuICBjb25zdCBlcGRWaXN1YWxpemF0aW9uID0gZXBkVmlzdWFsaXphdGlvbkNvbmZpZy5lcGRWaXN1YWxpemF0aW9uO1xuICBpZiAoIWVwZFZpc3VhbGl6YXRpb24pIHtcbiAgICByZXR1cm4gdW5jb25maWd1cmVkUHJvcGVydHlNZXNzYWdlKCdlcGRWaXN1YWxpemF0aW9uJyk7XG4gIH1cblxuICAvLyAtLSBhcGlzIHNlY3Rpb25cblxuICBpZiAoIWVwZFZpc3VhbGl6YXRpb24uYXBpcykge1xuICAgIHJldHVybiB1bmNvbmZpZ3VyZWRQcm9wZXJ0eU1lc3NhZ2UoJ2VwZFZpc3VhbGl6YXRpb24uYXBpcycpO1xuICB9XG5cbiAgY29uc3QgY29uZmlnQXBpc0Jhc2VVcmxQcm9wZXJ0eSA9ICdlcGRWaXN1YWxpemF0aW9uLmFwaXMuYmFzZVVybCc7XG4gIGlmICghZXBkVmlzdWFsaXphdGlvbi5hcGlzLmJhc2VVcmwpIHtcbiAgICByZXR1cm4gdW5jb25maWd1cmVkUHJvcGVydHlNZXNzYWdlKGNvbmZpZ0FwaXNCYXNlVXJsUHJvcGVydHkpO1xuICB9XG5cbiAgY29uc3QgYXBpQmFzZVVybCA9IGdldFVybChlcGRWaXN1YWxpemF0aW9uLmFwaXMuYmFzZVVybCk7XG4gIGlmICghYXBpQmFzZVVybCkge1xuICAgIHJldHVybiBpbnZhbGlkVXJsTWVzc2FnZShcbiAgICAgIGNvbmZpZ0FwaXNCYXNlVXJsUHJvcGVydHksXG4gICAgICBlcGRWaXN1YWxpemF0aW9uLmFwaXMuYmFzZVVybFxuICAgICk7XG4gIH1cbiAgaWYgKCFpc0h0dHBPckh0dHBzKGFwaUJhc2VVcmwpKSB7XG4gICAgcmV0dXJuIGludmFsaWRVcmxQcm90b2NvbE1lc3NhZ2UoY29uZmlnQXBpc0Jhc2VVcmxQcm9wZXJ0eSk7XG4gIH1cblxuICAvLyAtLSB1aTUgc2VjdGlvblxuXG4gIGlmICghZXBkVmlzdWFsaXphdGlvbi51aTUpIHtcbiAgICByZXR1cm4gdW5jb25maWd1cmVkUHJvcGVydHlNZXNzYWdlKCdlcGRWaXN1YWxpemF0aW9uLnVpNScpO1xuICB9XG5cbiAgY29uc3QgY29uZmlnVWk1Qm9vdHN0cmFwVXJsUHJvcGVydHkgPSAnZXBkVmlzdWFsaXphdGlvbi51aTUuYm9vdHN0cmFwVXJsJztcbiAgaWYgKCFlcGRWaXN1YWxpemF0aW9uLnVpNS5ib290c3RyYXBVcmwpIHtcbiAgICByZXR1cm4gdW5jb25maWd1cmVkUHJvcGVydHlNZXNzYWdlKGNvbmZpZ1VpNUJvb3RzdHJhcFVybFByb3BlcnR5KTtcbiAgfVxuXG4gIGNvbnN0IHVpNUJvb3RTdHJhcFVybCA9IGdldFVybChlcGRWaXN1YWxpemF0aW9uLnVpNS5ib290c3RyYXBVcmwpO1xuICBpZiAoIXVpNUJvb3RTdHJhcFVybCkge1xuICAgIHJldHVybiBpbnZhbGlkVXJsTWVzc2FnZShcbiAgICAgIGNvbmZpZ1VpNUJvb3RzdHJhcFVybFByb3BlcnR5LFxuICAgICAgZXBkVmlzdWFsaXphdGlvbi51aTUuYm9vdHN0cmFwVXJsXG4gICAgKTtcbiAgfVxuXG4gIGlmICghaXNIdHRwT3JIdHRwcyh1aTVCb290U3RyYXBVcmwpKSB7XG4gICAgcmV0dXJuIGludmFsaWRVcmxQcm90b2NvbE1lc3NhZ2UoY29uZmlnVWk1Qm9vdHN0cmFwVXJsUHJvcGVydHkpO1xuICB9XG5cbiAgLy8gLS0gdXNhZ2VJZHMgc2VjdGlvblxuXG4gIGlmICghZXBkVmlzdWFsaXphdGlvbi51c2FnZUlkcykge1xuICAgIHJldHVybiB1bmNvbmZpZ3VyZWRQcm9wZXJ0eU1lc3NhZ2UoJ2VwZFZpc3VhbGl6YXRpb24udXNhZ2VJZHMnKTtcbiAgfVxuICBpZiAoIWVwZFZpc3VhbGl6YXRpb24udXNhZ2VJZHMuZm9sZGVyVXNhZ2VJZC5uYW1lKSB7XG4gICAgcmV0dXJuIHVuY29uZmlndXJlZFByb3BlcnR5TWVzc2FnZShcbiAgICAgICdlcGRWaXN1YWxpemF0aW9uLnVzYWdlSWRzLmZvbGRlclVzYWdlSWQubmFtZSdcbiAgICApO1xuICB9XG4gIGlmIChcbiAgICAhZXBkVmlzdWFsaXphdGlvbi51c2FnZUlkcy5mb2xkZXJVc2FnZUlkLmtleXMgfHxcbiAgICAhZXBkVmlzdWFsaXphdGlvbi51c2FnZUlkcy5mb2xkZXJVc2FnZUlkLmtleXMubGVuZ3RoXG4gICkge1xuICAgIHJldHVybiB1bmNvbmZpZ3VyZWRQcm9wZXJ0eU1lc3NhZ2UoXG4gICAgICAnZXBkVmlzdWFsaXphdGlvbi51c2FnZUlkcy5mb2xkZXJVc2FnZUlkLmtleXMnXG4gICAgKTtcbiAgfVxuICBmb3IgKFxuICAgIGxldCBpID0gMDtcbiAgICBpIDwgZXBkVmlzdWFsaXphdGlvbi51c2FnZUlkcy5mb2xkZXJVc2FnZUlkLmtleXMubGVuZ3RoO1xuICAgIGkrK1xuICApIHtcbiAgICBpZiAoIWVwZFZpc3VhbGl6YXRpb24udXNhZ2VJZHMuZm9sZGVyVXNhZ2VJZC5rZXlzW2ldLm5hbWUpIHtcbiAgICAgIHJldHVybiB1bmNvbmZpZ3VyZWRQcm9wZXJ0eU1lc3NhZ2UoXG4gICAgICAgIGBlcGRWaXN1YWxpemF0aW9uLnVzYWdlSWRzLmZvbGRlclVzYWdlSWQua2V5c1ske2l9XS5uYW1lYFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFlcGRWaXN1YWxpemF0aW9uLnVzYWdlSWRzLmZvbGRlclVzYWdlSWQua2V5c1tpXS52YWx1ZSkge1xuICAgICAgcmV0dXJuIHVuY29uZmlndXJlZFByb3BlcnR5TWVzc2FnZShcbiAgICAgICAgYGVwZFZpc3VhbGl6YXRpb24udXNhZ2VJZHMuZm9sZGVyVXNhZ2VJZC5rZXlzWyR7aX1dLnZhbHVlYFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWVwZFZpc3VhbGl6YXRpb24udXNhZ2VJZHMucHJvZHVjdFVzYWdlSWQuc291cmNlKSB7XG4gICAgcmV0dXJuIHVuY29uZmlndXJlZFByb3BlcnR5TWVzc2FnZShcbiAgICAgICdlcGRWaXN1YWxpemF0aW9uLnVzYWdlSWRzLnByb2R1Y3RVc2FnZUlkLnNvdXJjZSdcbiAgICApO1xuICB9XG4gIGlmICghZXBkVmlzdWFsaXphdGlvbi51c2FnZUlkcy5wcm9kdWN0VXNhZ2VJZC5jYXRlZ29yeSkge1xuICAgIHJldHVybiB1bmNvbmZpZ3VyZWRQcm9wZXJ0eU1lc3NhZ2UoXG4gICAgICAnZXBkVmlzdWFsaXphdGlvbi51c2FnZUlkcy5wcm9kdWN0VXNhZ2VJZC5jYXRlZ29yeSdcbiAgICApO1xuICB9XG4gIGlmICghZXBkVmlzdWFsaXphdGlvbi51c2FnZUlkcy5wcm9kdWN0VXNhZ2VJZC5rZXlOYW1lKSB7XG4gICAgcmV0dXJuIHVuY29uZmlndXJlZFByb3BlcnR5TWVzc2FnZShcbiAgICAgICdlcGRWaXN1YWxpemF0aW9uLnVzYWdlSWRzLnByb2R1Y3RVc2FnZUlkLmtleU5hbWUnXG4gICAgKTtcbiAgfVxuXG4gIC8vIC0tIHZpc3VhbFBpY2tpbmcgc2VjdGlvblxuXG4gIGlmICghZXBkVmlzdWFsaXphdGlvbi52aXN1YWxQaWNraW5nKSB7XG4gICAgcmV0dXJuIHVuY29uZmlndXJlZFByb3BlcnR5TWVzc2FnZSgnZXBkVmlzdWFsaXphdGlvbi52aXN1YWxQaWNraW5nJyk7XG4gIH1cblxuICBpZiAoIWVwZFZpc3VhbGl6YXRpb24udmlzdWFsUGlja2luZy5wcm9kdWN0UmVmZXJlbmNlVHlwZSkge1xuICAgIHJldHVybiB1bmNvbmZpZ3VyZWRQcm9wZXJ0eU1lc3NhZ2UoXG4gICAgICAnZXBkVmlzdWFsaXphdGlvbi52aXN1YWxQaWNraW5nLnByb2R1Y3RSZWZlcmVuY2VUeXBlJ1xuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5jb25maWd1cmVkUHJvcGVydHlNZXNzYWdlKHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBgTm8gdmFsdWUgY29uZmlndXJlZCBmb3IgJHtwcm9wZXJ0eU5hbWV9IGluIHRoZSBFUEQgVmlzdWFsaXphdGlvbiBsaWJyYXJ5IGNvbmZpZ3VyYXRpb24uYDtcbn1cblxuZnVuY3Rpb24gaW52YWxpZFVybE1lc3NhZ2UocHJvcGVydHlOYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nKSB7XG4gIHJldHVybiBgVVJMIHZhbHVlICcke3VybH0nIGNvbmZpZ3VyZWQgZm9yICR7cHJvcGVydHlOYW1lfSBpbiB0aGUgRVBEIFZpc3VhbGl6YXRpb24gbGlicmFyeSBjb25maWd1cmF0aW9uIGlzIG5vdCB2YWxpZC5gO1xufVxuXG5mdW5jdGlvbiBpbnZhbGlkVXJsUHJvdG9jb2xNZXNzYWdlKHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBgVVJMIGZvciAke3Byb3BlcnR5TmFtZX0gbXVzdCB1c2UgSFRUUFMgb3IgSFRUUCBwcm90b2NvbC5gO1xufVxuIl19