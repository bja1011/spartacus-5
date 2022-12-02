/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { createSelector } from '@ngrx/store';
import { StateUtils } from '@spartacus/core';
import { BUDGET_FEATURE, } from '../organization-state';
import { getOrganizationState } from './feature.selector';
export const getBudgetManagementState = createSelector(getOrganizationState, (state) => state[BUDGET_FEATURE]);
export const getBudgetsState = createSelector(getBudgetManagementState, (state) => state && state.entities);
export const getBudget = (budgetCode) => createSelector(getBudgetsState, (state) => StateUtils.entityLoaderStateSelector(state, budgetCode));
export const getBudgetValue = (budgetCode) => {
    return createSelector(getBudget(budgetCode), (budgetState) => StateUtils.loaderValueSelector(budgetState));
};
export const getBudgetList = (params) => createSelector(getBudgetManagementState, (state) => StateUtils.denormalizeSearch(state, params));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LnNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL29yZ2FuaXphdGlvbi9hZG1pbmlzdHJhdGlvbi9jb3JlL3N0b3JlL3NlbGVjdG9ycy9idWRnZXQuc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBQy9ELE9BQU8sRUFBK0IsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFMUUsT0FBTyxFQUNMLGNBQWMsR0FJZixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTFELE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUdqQyxjQUFjLENBQ2hCLG9CQUFvQixFQUNwQixDQUFDLEtBQXdCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FDcEQsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FHeEIsY0FBYyxDQUNoQix3QkFBd0IsRUFDeEIsQ0FBQyxLQUF1QixFQUFFLEVBQUUsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FDckQsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxDQUN2QixVQUFrQixFQUN1RCxFQUFFLENBQzNFLGNBQWMsQ0FDWixlQUFlLEVBQ2YsQ0FBQyxLQUEyQyxFQUFFLEVBQUUsQ0FDOUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FDMUQsQ0FBQztBQUVKLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxDQUM1QixVQUFrQixFQUMrQixFQUFFO0lBQ25ELE9BQU8sY0FBYyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQzNELFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FDNUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxDQUMzQixNQUFvQixFQUlwQixFQUFFLENBQ0YsY0FBYyxDQUFDLHdCQUF3QixFQUFFLENBQUMsS0FBdUIsRUFBRSxFQUFFLENBQ25FLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBUyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQ3BELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVudGl0aWVzTW9kZWwsIFNlYXJjaENvbmZpZywgU3RhdGVVdGlscyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCdWRnZXQgfSBmcm9tICcuLi8uLi9tb2RlbC9idWRnZXQubW9kZWwnO1xuaW1wb3J0IHtcbiAgQlVER0VUX0ZFQVRVUkUsXG4gIEJ1ZGdldE1hbmFnZW1lbnQsXG4gIE9yZ2FuaXphdGlvblN0YXRlLFxuICBTdGF0ZVdpdGhPcmdhbml6YXRpb24sXG59IGZyb20gJy4uL29yZ2FuaXphdGlvbi1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRPcmdhbml6YXRpb25TdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBnZXRCdWRnZXRNYW5hZ2VtZW50U3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aE9yZ2FuaXphdGlvbixcbiAgQnVkZ2V0TWFuYWdlbWVudFxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRPcmdhbml6YXRpb25TdGF0ZSxcbiAgKHN0YXRlOiBPcmdhbml6YXRpb25TdGF0ZSkgPT4gc3RhdGVbQlVER0VUX0ZFQVRVUkVdXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0QnVkZ2V0c1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhPcmdhbml6YXRpb24sXG4gIFN0YXRlVXRpbHMuRW50aXR5TG9hZGVyU3RhdGU8QnVkZ2V0PlxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRCdWRnZXRNYW5hZ2VtZW50U3RhdGUsXG4gIChzdGF0ZTogQnVkZ2V0TWFuYWdlbWVudCkgPT4gc3RhdGUgJiYgc3RhdGUuZW50aXRpZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRCdWRnZXQgPSAoXG4gIGJ1ZGdldENvZGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhPcmdhbml6YXRpb24sIFN0YXRlVXRpbHMuTG9hZGVyU3RhdGU8QnVkZ2V0Pj4gPT5cbiAgY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0QnVkZ2V0c1N0YXRlLFxuICAgIChzdGF0ZTogU3RhdGVVdGlscy5FbnRpdHlMb2FkZXJTdGF0ZTxCdWRnZXQ+KSA9PlxuICAgICAgU3RhdGVVdGlscy5lbnRpdHlMb2FkZXJTdGF0ZVNlbGVjdG9yKHN0YXRlLCBidWRnZXRDb2RlKVxuICApO1xuXG5leHBvcnQgY29uc3QgZ2V0QnVkZ2V0VmFsdWUgPSAoXG4gIGJ1ZGdldENvZGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhPcmdhbml6YXRpb24sIEJ1ZGdldD4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoZ2V0QnVkZ2V0KGJ1ZGdldENvZGUpLCAoYnVkZ2V0U3RhdGUpID0+XG4gICAgU3RhdGVVdGlscy5sb2FkZXJWYWx1ZVNlbGVjdG9yKGJ1ZGdldFN0YXRlKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEJ1ZGdldExpc3QgPSAoXG4gIHBhcmFtczogU2VhcmNoQ29uZmlnXG4pOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhPcmdhbml6YXRpb24sXG4gIFN0YXRlVXRpbHMuTG9hZGVyU3RhdGU8RW50aXRpZXNNb2RlbDxCdWRnZXQ+PlxuPiA9PlxuICBjcmVhdGVTZWxlY3RvcihnZXRCdWRnZXRNYW5hZ2VtZW50U3RhdGUsIChzdGF0ZTogQnVkZ2V0TWFuYWdlbWVudCkgPT5cbiAgICBTdGF0ZVV0aWxzLmRlbm9ybWFsaXplU2VhcmNoPEJ1ZGdldD4oc3RhdGUsIHBhcmFtcylcbiAgKTtcbiJdfQ==