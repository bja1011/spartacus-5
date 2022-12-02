/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ConfiguratorModelUtils } from '@spartacus/product-configurator/common';
import { ConfiguratorTextfieldActions } from '../actions/index';
export const initialState = {
    configurationInfos: [],
    owner: ConfiguratorModelUtils.createInitialOwner(),
};
export function reducer(state = initialState, action) {
    switch (action.type) {
        case ConfiguratorTextfieldActions.CREATE_CONFIGURATION_SUCCESS:
        case ConfiguratorTextfieldActions.READ_CART_ENTRY_CONFIGURATION_SUCCESS:
        case ConfiguratorTextfieldActions.READ_ORDER_ENTRY_CONFIGURATION_SUCCESS:
        case ConfiguratorTextfieldActions.UPDATE_CONFIGURATION: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case ConfiguratorTextfieldActions.REMOVE_CONFIGURATION: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdG9yLXRleHRmaWVsZC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL3Byb2R1Y3QtY29uZmlndXJhdG9yL3RleHRmaWVsZC9jb3JlL3N0YXRlL3JlZHVjZXJzL2NvbmZpZ3VyYXRvci10ZXh0ZmllbGQucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHaEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFaEUsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUF3QztJQUMvRCxrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLEtBQUssRUFBRSxzQkFBc0IsQ0FBQyxrQkFBa0IsRUFBRTtDQUNuRCxDQUFDO0FBRUYsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBSyxHQUFHLFlBQVksRUFDcEIsTUFBMkI7SUFFM0IsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssNEJBQTRCLENBQUMsNEJBQTRCLENBQUM7UUFDL0QsS0FBSyw0QkFBNEIsQ0FBQyxxQ0FBcUMsQ0FBQztRQUN4RSxLQUFLLDRCQUE0QixDQUFDLHNDQUFzQyxDQUFDO1FBQ3pFLEtBQUssNEJBQTRCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUN0RCxPQUFPO2dCQUNMLEdBQUcsS0FBSztnQkFDUixHQUFHLE1BQU0sQ0FBQyxPQUFPO2FBQ2xCLENBQUM7U0FDSDtRQUNELEtBQUssNEJBQTRCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUN0RCxPQUFPLFlBQVksQ0FBQztTQUNyQjtLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgQ29uZmlndXJhdG9yTW9kZWxVdGlscyB9IGZyb20gJ0BzcGFydGFjdXMvcHJvZHVjdC1jb25maWd1cmF0b3IvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ3VyYXRvclRleHRmaWVsZCB9IGZyb20gJy4uLy4uL21vZGVsL2NvbmZpZ3VyYXRvci10ZXh0ZmllbGQubW9kZWwnO1xuaW1wb3J0IHsgQ29uZmlndXJhdG9yQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvY29uZmlndXJhdG9yLXRleHRmaWVsZC5hY3Rpb24nO1xuaW1wb3J0IHsgQ29uZmlndXJhdG9yVGV4dGZpZWxkQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBDb25maWd1cmF0b3JUZXh0ZmllbGQuQ29uZmlndXJhdGlvbiA9IHtcbiAgY29uZmlndXJhdGlvbkluZm9zOiBbXSxcbiAgb3duZXI6IENvbmZpZ3VyYXRvck1vZGVsVXRpbHMuY3JlYXRlSW5pdGlhbE93bmVyKCksXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogQ29uZmlndXJhdG9yQWN0aW9uc1xuKTogQ29uZmlndXJhdG9yVGV4dGZpZWxkLkNvbmZpZ3VyYXRpb24ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDb25maWd1cmF0b3JUZXh0ZmllbGRBY3Rpb25zLkNSRUFURV9DT05GSUdVUkFUSU9OX1NVQ0NFU1M6XG4gICAgY2FzZSBDb25maWd1cmF0b3JUZXh0ZmllbGRBY3Rpb25zLlJFQURfQ0FSVF9FTlRSWV9DT05GSUdVUkFUSU9OX1NVQ0NFU1M6XG4gICAgY2FzZSBDb25maWd1cmF0b3JUZXh0ZmllbGRBY3Rpb25zLlJFQURfT1JERVJfRU5UUllfQ09ORklHVVJBVElPTl9TVUNDRVNTOlxuICAgIGNhc2UgQ29uZmlndXJhdG9yVGV4dGZpZWxkQWN0aW9ucy5VUERBVEVfQ09ORklHVVJBVElPTjoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBDb25maWd1cmF0b3JUZXh0ZmllbGRBY3Rpb25zLlJFTU9WRV9DT05GSUdVUkFUSU9OOiB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=