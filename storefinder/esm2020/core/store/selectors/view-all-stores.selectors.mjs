/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { createSelector } from '@ngrx/store';
import { getStoreFinderState } from './feature.selector';
import { StateUtils } from '@spartacus/core';
export const getViewAllStoresState = createSelector(getStoreFinderState, (storesState) => storesState.viewAllStores);
export const getViewAllStoresEntities = createSelector(getViewAllStoresState, (state) => StateUtils.loaderValueSelector(state));
export const getViewAllStoresLoading = createSelector(getViewAllStoresState, (state) => StateUtils.loaderLoadingSelector(state));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hbGwtc3RvcmVzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9zdG9yZWZpbmRlci9jb3JlL3N0b3JlL3NlbGVjdG9ycy92aWV3LWFsbC1zdG9yZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQU0vRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBRzlCLGNBQWMsQ0FDaEIsbUJBQW1CLEVBQ25CLENBQUMsV0FBd0IsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FDeEQsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUdqQyxjQUFjLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNsRCxVQUFVLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQ3RDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FHaEMsY0FBYyxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDbEQsVUFBVSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUN4QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1xuICBTdGF0ZVdpdGhTdG9yZUZpbmRlcixcbiAgU3RvcmVzU3RhdGUsXG4gIFZpZXdBbGxTdG9yZXNTdGF0ZSxcbn0gZnJvbSAnLi4vc3RvcmUtZmluZGVyLXN0YXRlJztcbmltcG9ydCB7IGdldFN0b3JlRmluZGVyU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuaW1wb3J0IHsgU3RhdGVVdGlscyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBnZXRWaWV3QWxsU3RvcmVzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFN0b3JlRmluZGVyLFxuICBTdGF0ZVV0aWxzLkxvYWRlclN0YXRlPFZpZXdBbGxTdG9yZXNTdGF0ZT5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0U3RvcmVGaW5kZXJTdGF0ZSxcbiAgKHN0b3Jlc1N0YXRlOiBTdG9yZXNTdGF0ZSkgPT4gc3RvcmVzU3RhdGUudmlld0FsbFN0b3Jlc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldFZpZXdBbGxTdG9yZXNFbnRpdGllczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoU3RvcmVGaW5kZXIsXG4gIFZpZXdBbGxTdG9yZXNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKGdldFZpZXdBbGxTdG9yZXNTdGF0ZSwgKHN0YXRlKSA9PlxuICBTdGF0ZVV0aWxzLmxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Vmlld0FsbFN0b3Jlc0xvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFN0b3JlRmluZGVyLFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0Vmlld0FsbFN0b3Jlc1N0YXRlLCAoc3RhdGUpID0+XG4gIFN0YXRlVXRpbHMubG9hZGVyTG9hZGluZ1NlbGVjdG9yKHN0YXRlKVxuKTtcbiJdfQ==