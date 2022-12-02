/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { createSelector } from '@ngrx/store';
import { StateUtils } from '@spartacus/core';
import { getOrderState } from './feature.selector';
export const getOrderReturnRequestState = createSelector(getOrderState, (state) => state.orderReturn);
export const getOrderReturnRequest = createSelector(getOrderReturnRequestState, (state) => StateUtils.loaderValueSelector(state));
export const getOrderReturnRequestLoading = createSelector(getOrderReturnRequestState, (state) => StateUtils.loaderLoadingSelector(state));
export const getOrderReturnRequestSuccess = createSelector(getOrderReturnRequestState, (state) => StateUtils.loaderSuccessSelector(state) &&
    !StateUtils.loaderLoadingSelector(state));
export const getOrderReturnRequestListState = createSelector(getOrderState, (state) => state.orderReturnList);
export const getOrderReturnRequestList = createSelector(getOrderReturnRequestListState, (state) => StateUtils.loaderValueSelector(state));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLXJlcXVlc3Quc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL29yZGVyL2NvcmUvc3RvcmUvc2VsZWN0b3JzL29yZGVyLXJldHVybi1yZXF1ZXN0LnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FHbkMsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQWlCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUU1RSxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FHOUIsY0FBYyxDQUNoQiwwQkFBMEIsRUFDMUIsQ0FBQyxLQUE0QyxFQUFFLEVBQUUsQ0FDL0MsVUFBVSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUN4QyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBR3JDLGNBQWMsQ0FDaEIsMEJBQTBCLEVBQzFCLENBQUMsS0FBNEMsRUFBRSxFQUFFLENBQy9DLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDMUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLDRCQUE0QixHQUdyQyxjQUFjLENBQ2hCLDBCQUEwQixFQUMxQixDQUFDLEtBQTRDLEVBQUUsRUFBRSxDQUMvQyxVQUFVLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO0lBQ3ZDLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUMzQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sOEJBQThCLEdBR3ZDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFpQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFaEYsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBR2xDLGNBQWMsQ0FDaEIsOEJBQThCLEVBQzlCLENBQUMsS0FBZ0QsRUFBRSxFQUFFLENBQ25ELFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FDeEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgU3RhdGVVdGlscyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBSZXR1cm5SZXF1ZXN0LCBSZXR1cm5SZXF1ZXN0TGlzdCB9IGZyb20gJ0BzcGFydGFjdXMvb3JkZXIvcm9vdCc7XG5pbXBvcnQgeyBPcmRlclN0YXRlLCBTdGF0ZVdpdGhPcmRlciB9IGZyb20gJy4uL29yZGVyLXN0YXRlJztcbmltcG9ydCB7IGdldE9yZGVyU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0T3JkZXJSZXR1cm5SZXF1ZXN0U3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aE9yZGVyLFxuICBTdGF0ZVV0aWxzLkxvYWRlclN0YXRlPFJldHVyblJlcXVlc3Q+XG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0T3JkZXJTdGF0ZSwgKHN0YXRlOiBPcmRlclN0YXRlKSA9PiBzdGF0ZS5vcmRlclJldHVybik7XG5cbmV4cG9ydCBjb25zdCBnZXRPcmRlclJldHVyblJlcXVlc3Q6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aE9yZGVyLFxuICBSZXR1cm5SZXF1ZXN0XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldE9yZGVyUmV0dXJuUmVxdWVzdFN0YXRlLFxuICAoc3RhdGU6IFN0YXRlVXRpbHMuTG9hZGVyU3RhdGU8UmV0dXJuUmVxdWVzdD4pID0+XG4gICAgU3RhdGVVdGlscy5sb2FkZXJWYWx1ZVNlbGVjdG9yKHN0YXRlKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldE9yZGVyUmV0dXJuUmVxdWVzdExvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aE9yZGVyLFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldE9yZGVyUmV0dXJuUmVxdWVzdFN0YXRlLFxuICAoc3RhdGU6IFN0YXRlVXRpbHMuTG9hZGVyU3RhdGU8UmV0dXJuUmVxdWVzdD4pID0+XG4gICAgU3RhdGVVdGlscy5sb2FkZXJMb2FkaW5nU2VsZWN0b3Ioc3RhdGUpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0T3JkZXJSZXR1cm5SZXF1ZXN0U3VjY2VzczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoT3JkZXIsXG4gIGJvb2xlYW5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0T3JkZXJSZXR1cm5SZXF1ZXN0U3RhdGUsXG4gIChzdGF0ZTogU3RhdGVVdGlscy5Mb2FkZXJTdGF0ZTxSZXR1cm5SZXF1ZXN0PikgPT5cbiAgICBTdGF0ZVV0aWxzLmxvYWRlclN1Y2Nlc3NTZWxlY3RvcihzdGF0ZSkgJiZcbiAgICAhU3RhdGVVdGlscy5sb2FkZXJMb2FkaW5nU2VsZWN0b3Ioc3RhdGUpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0T3JkZXJSZXR1cm5SZXF1ZXN0TGlzdFN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhPcmRlcixcbiAgU3RhdGVVdGlscy5Mb2FkZXJTdGF0ZTxSZXR1cm5SZXF1ZXN0TGlzdD5cbj4gPSBjcmVhdGVTZWxlY3RvcihnZXRPcmRlclN0YXRlLCAoc3RhdGU6IE9yZGVyU3RhdGUpID0+IHN0YXRlLm9yZGVyUmV0dXJuTGlzdCk7XG5cbmV4cG9ydCBjb25zdCBnZXRPcmRlclJldHVyblJlcXVlc3RMaXN0OiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhPcmRlcixcbiAgUmV0dXJuUmVxdWVzdExpc3Rcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0T3JkZXJSZXR1cm5SZXF1ZXN0TGlzdFN0YXRlLFxuICAoc3RhdGU6IFN0YXRlVXRpbHMuTG9hZGVyU3RhdGU8UmV0dXJuUmVxdWVzdExpc3Q+KSA9PlxuICAgIFN0YXRlVXRpbHMubG9hZGVyVmFsdWVTZWxlY3RvcihzdGF0ZSlcbik7XG4iXX0=