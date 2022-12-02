/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { OrgUnitActions } from '../actions/index';
export const orgUnitInitialState = undefined;
export const orgUnitsInitialState = undefined;
export function orgUnitEntitiesReducer(state = orgUnitInitialState, action) {
    switch (action.type) {
        case OrgUnitActions.LOAD_ORG_UNIT_SUCCESS:
        case OrgUnitActions.CREATE_ORG_UNIT_SUCCESS:
            return action.payload;
        case OrgUnitActions.UPDATE_ORG_UNIT_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
    }
    return state;
}
export function orgUnitListReducer(state = orgUnitsInitialState, action) {
    switch (action.type) {
    }
    return state;
}
export function orgUnitUserListReducer(state = orgUnitsInitialState, action) {
    switch (action.type) {
        case OrgUnitActions.LOAD_ASSIGNED_USERS_SUCCESS:
            return action.payload.page;
    }
    return state;
}
export function orgUnitAddressListReducer(state = orgUnitsInitialState, action) {
    switch (action.type) {
        case OrgUnitActions.LOAD_ADDRESSES_SUCCESS:
            return action.payload.page;
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnLXVuaXQucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmdhbml6YXRpb24vYWRtaW5pc3RyYXRpb24vY29yZS9zdG9yZS9yZWR1Y2Vycy9vcmctdW5pdC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFJSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFbEQsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQTRCLFNBQVMsQ0FBQztBQUN0RSxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBMEIsU0FBUyxDQUFDO0FBRXJFLE1BQU0sVUFBVSxzQkFBc0IsQ0FDcEMsS0FBSyxHQUFHLG1CQUFtQixFQUMzQixNQUErQjtJQUUvQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxjQUFjLENBQUMscUJBQXFCLENBQUM7UUFDMUMsS0FBSyxjQUFjLENBQUMsdUJBQXVCO1lBQ3pDLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUN4QixLQUFLLGNBQWMsQ0FBQyx1QkFBdUI7WUFDekMsT0FBTztnQkFDTCxHQUFHLEtBQUs7Z0JBQ1IsR0FBRyxNQUFNLENBQUMsT0FBTzthQUNsQixDQUFDO0tBQ0w7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxNQUFNLFVBQVUsa0JBQWtCLENBQ2hDLEtBQUssR0FBRyxvQkFBb0IsRUFDNUIsTUFBK0I7SUFFL0IsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO0tBQ3BCO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQsTUFBTSxVQUFVLHNCQUFzQixDQUNwQyxLQUFLLEdBQUcsb0JBQW9CLEVBQzVCLE1BQStCO0lBRS9CLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGNBQWMsQ0FBQywyQkFBMkI7WUFDN0MsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztLQUM5QjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVELE1BQU0sVUFBVSx5QkFBeUIsQ0FDdkMsS0FBSyxHQUFHLG9CQUFvQixFQUM1QixNQUErQjtJQUUvQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxjQUFjLENBQUMsc0JBQXNCO1lBQ3hDLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7S0FDOUI7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBMaXN0TW9kZWwsIFN0YXRlVXRpbHMgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQjJCVW5pdE5vZGUgfSBmcm9tICcuLi8uLi9tb2RlbC91bml0LW5vZGUubW9kZWwnO1xuaW1wb3J0IHsgT3JnVW5pdEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IG9yZ1VuaXRJbml0aWFsU3RhdGU6IEIyQlVuaXROb2RlIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuZXhwb3J0IGNvbnN0IG9yZ1VuaXRzSW5pdGlhbFN0YXRlOiBMaXN0TW9kZWwgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBvcmdVbml0RW50aXRpZXNSZWR1Y2VyKFxuICBzdGF0ZSA9IG9yZ1VuaXRJbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogU3RhdGVVdGlscy5Mb2FkZXJBY3Rpb25cbik6IEIyQlVuaXROb2RlIHwgdW5kZWZpbmVkIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgT3JnVW5pdEFjdGlvbnMuTE9BRF9PUkdfVU5JVF9TVUNDRVNTOlxuICAgIGNhc2UgT3JnVW5pdEFjdGlvbnMuQ1JFQVRFX09SR19VTklUX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgY2FzZSBPcmdVbml0QWN0aW9ucy5VUERBVEVfT1JHX1VOSVRfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3JnVW5pdExpc3RSZWR1Y2VyKFxuICBzdGF0ZSA9IG9yZ1VuaXRzSW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IFN0YXRlVXRpbHMuTG9hZGVyQWN0aW9uXG4pOiBhbnkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3JnVW5pdFVzZXJMaXN0UmVkdWNlcihcbiAgc3RhdGUgPSBvcmdVbml0c0luaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBTdGF0ZVV0aWxzLkxvYWRlckFjdGlvblxuKTogYW55IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgT3JnVW5pdEFjdGlvbnMuTE9BRF9BU1NJR05FRF9VU0VSU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLnBhZ2U7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3JnVW5pdEFkZHJlc3NMaXN0UmVkdWNlcihcbiAgc3RhdGUgPSBvcmdVbml0c0luaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBTdGF0ZVV0aWxzLkxvYWRlckFjdGlvblxuKTogTGlzdE1vZGVsIHwgdW5kZWZpbmVkIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgT3JnVW5pdEFjdGlvbnMuTE9BRF9BRERSRVNTRVNfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5wYWdlO1xuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==