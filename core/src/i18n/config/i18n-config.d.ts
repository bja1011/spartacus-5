import { TranslationResources } from '../translation-resources';
import * as i0 from "@angular/core";
export declare abstract class I18nConfig {
    i18n?: {
        /**
         * When there are missing translation resources for the active language, the fallback language will be used.
         */
        fallbackLang?: string | false;
        /**
         * Configuration for lazy loading of translation files.
         * For eager loading of translations please use config option `i18n.resources`
         */
        backend?: {
            /**
             * The path to JSON translations. It should contain placeholders:
             * - `{{lng}}` for language
             * - `{{ns}}` for the name of chunk.
             *
             * Example:
             * `assets/i18n-assets/{{lng}}/{{ns}}.json`
             */
            loadPath?: string;
        };
        /**
         * Reference to translation resources that are eagerly bundled with JS app.
         * For lazy loading of translations please use config option `i18n.backend` instead.
         */
        resources?: TranslationResources;
        /**
         * Logs i18n events (like loading translation resources) to the console. Don't use in production!
         */
        debug?: boolean;
        /**
         * Mapping that assigns keys' namespaces to specific chunks. The main purpose of chunks is to lazy load them.
         */
        chunks?: {
            [chunk: string]: string[];
        };
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<I18nConfig, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<I18nConfig>;
}
declare module '../../config/config-tokens' {
    interface Config extends I18nConfig {
    }
}
