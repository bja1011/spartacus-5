/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { createSelector } from '@ngrx/store';
import { StateUtils } from '../../../state/utils/index';
import { getProductsState } from './feature.selector';
export const getProductState = createSelector(getProductsState, (state) => state.details);
export const getSelectedProductStateFactory = (code, scope = '') => {
    return createSelector(getProductState, (details) => StateUtils.entityLoaderStateSelector(details, code)[scope] ||
        StateUtils.initialLoaderState);
};
export const getSelectedProductFactory = (code, scope = '') => {
    return createSelector(getSelectedProductStateFactory(code, scope), (productState) => StateUtils.loaderValueSelector(productState));
};
export const getSelectedProductLoadingFactory = (code, scope = '') => {
    return createSelector(getSelectedProductStateFactory(code, scope), (productState) => StateUtils.loaderLoadingSelector(productState));
};
export const getSelectedProductSuccessFactory = (code, scope = '') => {
    return createSelector(getSelectedProductStateFactory(code, scope), (productState) => StateUtils.loaderSuccessSelector(productState));
};
export const getSelectedProductErrorFactory = (code, scope = '') => {
    return createSelector(getSelectedProductStateFactory(code, scope), (productState) => StateUtils.loaderErrorSelector(productState));
};
export const getAllProductCodes = createSelector(getProductState, (details) => {
    return Object.keys(details.entities);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9wcm9kdWN0L3N0b3JlL3NlbGVjdG9ycy9wcm9kdWN0LnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRELE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FHeEIsY0FBYyxDQUFDLGdCQUFnQixFQUFFLENBQUMsS0FBb0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTlFLE1BQU0sQ0FBQyxNQUFNLDhCQUE4QixHQUFHLENBQzVDLElBQVksRUFDWixLQUFLLEdBQUcsRUFBRSxFQUMyRCxFQUFFO0lBQ3ZFLE9BQU8sY0FBYyxDQUNuQixlQUFlLEVBQ2YsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUNULFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFTLENBQUMsS0FBSyxDQUFDO1FBQ25FLFVBQVUsQ0FBQyxrQkFBa0IsQ0FDaEMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUFHLENBQ3ZDLElBQVksRUFDWixLQUFLLEdBQUcsRUFBRSxFQUNtQyxFQUFFO0lBQy9DLE9BQU8sY0FBYyxDQUNuQiw4QkFBOEIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQzNDLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQy9ELENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxnQ0FBZ0MsR0FBRyxDQUM5QyxJQUFZLEVBQ1osS0FBSyxHQUFHLEVBQUUsRUFDbUMsRUFBRTtJQUMvQyxPQUFPLGNBQWMsQ0FDbkIsOEJBQThCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUMzQyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxDQUNqRSxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sZ0NBQWdDLEdBQUcsQ0FDOUMsSUFBWSxFQUNaLEtBQUssR0FBRyxFQUFFLEVBQ21DLEVBQUU7SUFDL0MsT0FBTyxjQUFjLENBQ25CLDhCQUE4QixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFDM0MsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FDakUsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLDhCQUE4QixHQUFHLENBQzVDLElBQVksRUFDWixLQUFLLEdBQUcsRUFBRSxFQUNtQyxFQUFFO0lBQy9DLE9BQU8sY0FBYyxDQUNuQiw4QkFBOEIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQzNDLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQy9ELENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FDN0IsY0FBYyxDQUFDLGVBQWUsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFO0lBQzFDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFN0YXRlVXRpbHMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBFbnRpdHlTY29wZWRMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL3Njb3BlZC1sb2FkZXIvc2NvcGVkLWxvYWRlci5zdGF0ZSc7XG5pbXBvcnQgeyBQcm9kdWN0c1N0YXRlLCBTdGF0ZVdpdGhQcm9kdWN0IH0gZnJvbSAnLi4vcHJvZHVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRQcm9kdWN0c1N0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoUHJvZHVjdCxcbiAgRW50aXR5U2NvcGVkTG9hZGVyU3RhdGU8UHJvZHVjdD5cbj4gPSBjcmVhdGVTZWxlY3RvcihnZXRQcm9kdWN0c1N0YXRlLCAoc3RhdGU6IFByb2R1Y3RzU3RhdGUpID0+IHN0YXRlLmRldGFpbHMpO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0U3RhdGVGYWN0b3J5ID0gKFxuICBjb2RlOiBzdHJpbmcsXG4gIHNjb3BlID0gJydcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgU3RhdGVVdGlscy5Mb2FkZXJTdGF0ZTxQcm9kdWN0Pj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0UHJvZHVjdFN0YXRlLFxuICAgIChkZXRhaWxzKSA9PlxuICAgICAgKFN0YXRlVXRpbHMuZW50aXR5TG9hZGVyU3RhdGVTZWxlY3RvcihkZXRhaWxzLCBjb2RlKSBhcyBhbnkpW3Njb3BlXSB8fFxuICAgICAgU3RhdGVVdGlscy5pbml0aWFsTG9hZGVyU3RhdGVcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFByb2R1Y3RGYWN0b3J5ID0gKFxuICBjb2RlOiBzdHJpbmcsXG4gIHNjb3BlID0gJydcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgUHJvZHVjdD4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0U2VsZWN0ZWRQcm9kdWN0U3RhdGVGYWN0b3J5KGNvZGUsIHNjb3BlKSxcbiAgICAocHJvZHVjdFN0YXRlKSA9PiBTdGF0ZVV0aWxzLmxvYWRlclZhbHVlU2VsZWN0b3IocHJvZHVjdFN0YXRlKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvZHVjdExvYWRpbmdGYWN0b3J5ID0gKFxuICBjb2RlOiBzdHJpbmcsXG4gIHNjb3BlID0gJydcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgYm9vbGVhbj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0U2VsZWN0ZWRQcm9kdWN0U3RhdGVGYWN0b3J5KGNvZGUsIHNjb3BlKSxcbiAgICAocHJvZHVjdFN0YXRlKSA9PiBTdGF0ZVV0aWxzLmxvYWRlckxvYWRpbmdTZWxlY3Rvcihwcm9kdWN0U3RhdGUpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRQcm9kdWN0U3VjY2Vzc0ZhY3RvcnkgPSAoXG4gIGNvZGU6IHN0cmluZyxcbiAgc2NvcGUgPSAnJ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBib29sZWFuPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkoY29kZSwgc2NvcGUpLFxuICAgIChwcm9kdWN0U3RhdGUpID0+IFN0YXRlVXRpbHMubG9hZGVyU3VjY2Vzc1NlbGVjdG9yKHByb2R1Y3RTdGF0ZSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZFByb2R1Y3RFcnJvckZhY3RvcnkgPSAoXG4gIGNvZGU6IHN0cmluZyxcbiAgc2NvcGUgPSAnJ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhQcm9kdWN0LCBib29sZWFuPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRTZWxlY3RlZFByb2R1Y3RTdGF0ZUZhY3RvcnkoY29kZSwgc2NvcGUpLFxuICAgIChwcm9kdWN0U3RhdGUpID0+IFN0YXRlVXRpbHMubG9hZGVyRXJyb3JTZWxlY3Rvcihwcm9kdWN0U3RhdGUpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsUHJvZHVjdENvZGVzOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aFByb2R1Y3QsIHN0cmluZ1tdPiA9XG4gIGNyZWF0ZVNlbGVjdG9yKGdldFByb2R1Y3RTdGF0ZSwgKGRldGFpbHMpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGV0YWlscy5lbnRpdGllcyk7XG4gIH0pO1xuIl19