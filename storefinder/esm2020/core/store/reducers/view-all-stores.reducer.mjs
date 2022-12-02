/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { StoreFinderActions } from '../actions/index';
export const initialState = {
    viewAllStoresEntities: {},
};
export function viewAllStoresReducer(state = initialState, action) {
    switch (action.type) {
        case StoreFinderActions.VIEW_ALL_STORES_SUCCESS: {
            const viewAllStoresEntities = action.payload;
            return {
                ...state,
                viewAllStoresEntities,
            };
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hbGwtc3RvcmVzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvc3RvcmVmaW5kZXIvY29yZS9zdG9yZS9yZWR1Y2Vycy92aWV3LWFsbC1zdG9yZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHdEQsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUF1QjtJQUM5QyxxQkFBcUIsRUFBRSxFQUFFO0NBQzFCLENBQUM7QUFFRixNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQThDO0lBRTlDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDL0MsTUFBTSxxQkFBcUIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBRTdDLE9BQU87Z0JBQ0wsR0FBRyxLQUFLO2dCQUNSLHFCQUFxQjthQUN0QixDQUFDO1NBQ0g7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IFN0b3JlRmluZGVyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVmlld0FsbFN0b3Jlc1N0YXRlIH0gZnJvbSAnLi4vc3RvcmUtZmluZGVyLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogVmlld0FsbFN0b3Jlc1N0YXRlID0ge1xuICB2aWV3QWxsU3RvcmVzRW50aXRpZXM6IHt9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHZpZXdBbGxTdG9yZXNSZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBTdG9yZUZpbmRlckFjdGlvbnMuVmlld0FsbFN0b3Jlc0FjdGlvblxuKTogVmlld0FsbFN0b3Jlc1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU3RvcmVGaW5kZXJBY3Rpb25zLlZJRVdfQUxMX1NUT1JFU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCB2aWV3QWxsU3RvcmVzRW50aXRpZXMgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZpZXdBbGxTdG9yZXNFbnRpdGllcyxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19