/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { OrderActions } from '../actions/index';
export const initialState = { tracking: {} };
export function reducer(state = initialState, action) {
    switch (action.type) {
        case OrderActions.LOAD_CONSIGNMENT_TRACKING_SUCCESS: {
            const tracking = action.payload;
            return {
                tracking,
            };
        }
        case OrderActions.CLEAR_CONSIGNMENT_TRACKING: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2lnbm1lbnQtdHJhY2tpbmcucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmRlci9jb3JlL3N0b3JlL3JlZHVjZXJzL2NvbnNpZ25tZW50LXRyYWNraW5nLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUdILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdoRCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQTZCLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBRXZFLE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQThDO0lBRTlDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFlBQVksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBQ25ELE1BQU0sUUFBUSxHQUF3QixNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ3JELE9BQU87Z0JBQ0wsUUFBUTthQUNULENBQUM7U0FDSDtRQUNELEtBQUssWUFBWSxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDNUMsT0FBTyxZQUFZLENBQUM7U0FDckI7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmcgfSBmcm9tICdAc3BhcnRhY3VzL29yZGVyL3Jvb3QnO1xuaW1wb3J0IHsgT3JkZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDb25zaWdubWVudFRyYWNraW5nU3RhdGUgfSBmcm9tICcuLi9vcmRlci1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IENvbnNpZ25tZW50VHJhY2tpbmdTdGF0ZSA9IHsgdHJhY2tpbmc6IHt9IH07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBPcmRlckFjdGlvbnMuQ29uc2lnbm1lbnRUcmFja2luZ0FjdGlvblxuKTogQ29uc2lnbm1lbnRUcmFja2luZ1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgT3JkZXJBY3Rpb25zLkxPQURfQ09OU0lHTk1FTlRfVFJBQ0tJTkdfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgdHJhY2tpbmc6IENvbnNpZ25tZW50VHJhY2tpbmcgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRyYWNraW5nLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBPcmRlckFjdGlvbnMuQ0xFQVJfQ09OU0lHTk1FTlRfVFJBQ0tJTkc6IHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==