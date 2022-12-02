import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CommonConfiguratorUtilsService } from '@spartacus/product-configurator/common';
import { Observable } from 'rxjs';
import { RulebasedConfiguratorConnector } from '../../connectors/rulebased-configurator.connector';
import { ConfiguratorGroupStatusService } from '../../facade/configurator-group-status.service';
import { ConfiguratorUtilsService } from '../../facade/utils/configurator-utils.service';
import { ConfiguratorActions } from '../actions/index';
import { StateWithConfigurator } from '../configurator-state';
import { ConfiguratorBasicEffectService } from './configurator-basic-effect.service';
import * as i0 from "@angular/core";
export declare class ConfiguratorBasicEffects {
    protected actions$: Actions;
    protected configuratorCommonsConnector: RulebasedConfiguratorConnector;
    protected commonConfigUtilsService: CommonConfiguratorUtilsService;
    protected configuratorGroupUtilsService: ConfiguratorUtilsService;
    protected configuratorGroupStatusService: ConfiguratorGroupStatusService;
    protected store: Store<StateWithConfigurator>;
    protected configuratorBasicEffectService: ConfiguratorBasicEffectService;
    createConfiguration$: Observable<ConfiguratorActions.CreateConfigurationSuccess | ConfiguratorActions.CreateConfigurationFail>;
    readConfiguration$: Observable<ConfiguratorActions.ReadConfigurationSuccess | ConfiguratorActions.ReadConfigurationFail>;
    updateConfiguration$: Observable<ConfiguratorActions.UpdateConfigurationSuccess | ConfiguratorActions.UpdateConfigurationFail>;
    updatePriceSummary$: Observable<ConfiguratorActions.UpdatePriceSummarySuccess | ConfiguratorActions.UpdatePriceSummaryFail>;
    getOverview$: Observable<ConfiguratorActions.GetConfigurationOverviewSuccess | ConfiguratorActions.GetConfigurationOverviewFail>;
    updateConfigurationSuccess$: Observable<ConfiguratorActions.UpdateConfigurationFinalizeSuccess | ConfiguratorActions.UpdatePriceSummary | ConfiguratorActions.ChangeGroup>;
    updateConfigurationFail$: Observable<ConfiguratorActions.UpdateConfigurationFinalizeFail>;
    handleErrorOnUpdate$: Observable<ConfiguratorActions.ReadConfiguration>;
    groupChange$: Observable<ConfiguratorActions.SetCurrentGroup | ConfiguratorActions.SetMenuParentGroup | ConfiguratorActions.ReadConfigurationFail | ConfiguratorActions.ReadConfigurationSuccess | ConfiguratorActions.UpdatePriceSummary>;
    constructor(actions$: Actions, configuratorCommonsConnector: RulebasedConfiguratorConnector, commonConfigUtilsService: CommonConfiguratorUtilsService, configuratorGroupUtilsService: ConfiguratorUtilsService, configuratorGroupStatusService: ConfiguratorGroupStatusService, store: Store<StateWithConfigurator>, configuratorBasicEffectService: ConfiguratorBasicEffectService);
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfiguratorBasicEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConfiguratorBasicEffects>;
}