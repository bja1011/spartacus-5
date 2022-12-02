/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { createSelector } from '@ngrx/store';
import { getProductsState } from './feature.selector';
export const getProductReferencesState = createSelector(getProductsState, (state) => state.references);
export const getSelectedProductReferencesFactory = (productCode, referenceType) => {
    return createSelector(getProductReferencesState, (referenceTypeData) => {
        if (referenceTypeData.productCode === productCode) {
            if (!!referenceTypeData.list) {
                if (referenceType) {
                    return referenceTypeData.list.filter((item) => item.referenceType === referenceType);
                }
                return referenceTypeData.list;
            }
        }
        return [];
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3Byb2R1Y3Qvc3RvcmUvc2VsZWN0b3JzL3Byb2R1Y3QtcmVmZXJlbmNlcy5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBTy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRELE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUdsQyxjQUFjLENBQ2hCLGdCQUFnQixFQUNoQixDQUFDLEtBQW9CLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQzNDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxtQ0FBbUMsR0FBRyxDQUNqRCxXQUFtQixFQUNuQixhQUFxQixFQUNtQyxFQUFFO0lBQzFELE9BQU8sY0FBYyxDQUFDLHlCQUF5QixFQUFFLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtRQUNyRSxJQUFJLGlCQUFpQixDQUFDLFdBQVcsS0FBSyxXQUFXLEVBQUU7WUFDakQsSUFBSSxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFO2dCQUM1QixJQUFJLGFBQWEsRUFBRTtvQkFDakIsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUNsQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsS0FBSyxhQUFhLENBQy9DLENBQUM7aUJBQ0g7Z0JBQ0QsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7YUFDL0I7U0FDRjtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7XG4gIFByb2R1Y3RSZWZlcmVuY2VzU3RhdGUsXG4gIFByb2R1Y3RzU3RhdGUsXG4gIFN0YXRlV2l0aFByb2R1Y3QsXG59IGZyb20gJy4uL3Byb2R1Y3Qtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0UHJvZHVjdHNTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0UmVmZXJlbmNlc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhQcm9kdWN0LFxuICBQcm9kdWN0UmVmZXJlbmNlc1N0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFByb2R1Y3RzU3RhdGUsXG4gIChzdGF0ZTogUHJvZHVjdHNTdGF0ZSkgPT4gc3RhdGUucmVmZXJlbmNlc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkUHJvZHVjdFJlZmVyZW5jZXNGYWN0b3J5ID0gKFxuICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICByZWZlcmVuY2VUeXBlOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoUHJvZHVjdCwgUHJvZHVjdFJlZmVyZW5jZVtdPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihnZXRQcm9kdWN0UmVmZXJlbmNlc1N0YXRlLCAocmVmZXJlbmNlVHlwZURhdGEpID0+IHtcbiAgICBpZiAocmVmZXJlbmNlVHlwZURhdGEucHJvZHVjdENvZGUgPT09IHByb2R1Y3RDb2RlKSB7XG4gICAgICBpZiAoISFyZWZlcmVuY2VUeXBlRGF0YS5saXN0KSB7XG4gICAgICAgIGlmIChyZWZlcmVuY2VUeXBlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlZmVyZW5jZVR5cGVEYXRhLmxpc3QuZmlsdGVyKFxuICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0ucmVmZXJlbmNlVHlwZSA9PT0gcmVmZXJlbmNlVHlwZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlZmVyZW5jZVR5cGVEYXRhLmxpc3Q7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfSk7XG59O1xuIl19