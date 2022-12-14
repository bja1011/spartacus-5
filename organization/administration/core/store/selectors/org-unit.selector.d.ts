import { MemoizedSelector } from '@ngrx/store';
import { Address, B2BApprovalProcess, B2BUnit, B2BUser, EntitiesModel, SearchConfig, StateUtils } from '@spartacus/core';
import { B2BUnitNode } from '../../model/unit-node.model';
import { OrgUnits, StateWithOrganization } from '../organization-state';
export declare const getB2BOrgUnitState: MemoizedSelector<StateWithOrganization, OrgUnits>;
export declare const getOrgUnitsNodeListState: MemoizedSelector<StateWithOrganization, StateUtils.EntityLoaderState<B2BUnitNode[]>>;
export declare const getOrgUnitsState: MemoizedSelector<StateWithOrganization, StateUtils.EntityLoaderState<B2BUnitNode>>;
export declare const getOrgUnitsTreeState: MemoizedSelector<StateWithOrganization, StateUtils.EntityLoaderState<B2BUnitNode>>;
export declare const getAddressesState: MemoizedSelector<StateWithOrganization, StateUtils.EntityLoaderState<Address>>;
export declare const getApprovalProcessesState: MemoizedSelector<StateWithOrganization, StateUtils.EntityLoaderState<B2BApprovalProcess[]>>;
export declare const getOrgUnit: (orgUnitId: string) => MemoizedSelector<StateWithOrganization, StateUtils.LoaderState<B2BUnit>>;
export declare const getOrgUnitValue: (orgUnitId: string) => MemoizedSelector<StateWithOrganization, B2BUnit>;
export declare const getOrgUnitState: (orgUnitId: string) => MemoizedSelector<StateWithOrganization, StateUtils.LoaderState<B2BUnit>>;
export declare const getOrgUnitList: () => MemoizedSelector<StateWithOrganization, StateUtils.LoaderState<B2BUnitNode[]>>;
export declare const getOrgUnitTree: () => MemoizedSelector<StateWithOrganization, StateUtils.LoaderState<B2BUnitNode>>;
export declare const getApprovalProcesses: () => MemoizedSelector<StateWithOrganization, StateUtils.LoaderState<B2BApprovalProcess[]>>;
export declare const getAssignedUsers: (orgUnitId: string, roleId: string, params: SearchConfig) => MemoizedSelector<StateWithOrganization, StateUtils.LoaderState<EntitiesModel<B2BUser>>>;
export declare const getB2BAddresses: (orgUnitId: string, params?: SearchConfig) => MemoizedSelector<StateWithOrganization, StateUtils.LoaderState<EntitiesModel<Address>>>;
export declare const getB2BAddress: (addressId: string) => MemoizedSelector<StateWithOrganization, StateUtils.LoaderState<Address>>;
