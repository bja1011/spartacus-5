import { StateUtils } from '@spartacus/core';
import { Configurator } from '../model/configurator.model';
export declare const CONFIGURATOR_FEATURE = "productConfigurator";
export declare const CONFIGURATOR_DATA = "[Configurator] Configuration Data";
export interface StateWithConfigurator {
    [CONFIGURATOR_FEATURE]: ConfiguratorState;
}
export interface ConfiguratorState {
    configurations: StateUtils.EntityProcessesLoaderState<Configurator.Configuration>;
}
