/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { AsmActions } from '../actions/index';
export const initialState = { collapsed: false };
export function reducer(state = initialState, action) {
    switch (action.type) {
        case AsmActions.ASM_UI_UPDATE: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default: {
            return state;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLXVpLnJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvYXNtL2NvcmUvc3RvcmUvcmVkdWNlcnMvYXNtLXVpLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUlILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5QyxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDO0FBRS9ELE1BQU0sVUFBVSxPQUFPLENBQUMsUUFBZSxZQUFZLEVBQUUsTUFBYztJQUNqRSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0IsT0FBTztnQkFDTCxHQUFHLEtBQUs7Z0JBQ1IsR0FBSSxNQUFpQyxDQUFDLE9BQU87YUFDOUMsQ0FBQztTQUNIO1FBQ0QsT0FBTyxDQUFDLENBQUM7WUFDUCxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQXNtVWkgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXNtLm1vZGVscyc7XG5pbXBvcnQgeyBBc21BY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IEFzbVVpID0gPEFzbVVpPnsgY29sbGFwc2VkOiBmYWxzZSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZTogQXNtVWkgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogQWN0aW9uKTogQXNtVWkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBc21BY3Rpb25zLkFTTV9VSV9VUERBVEU6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi4oYWN0aW9uIGFzIEFzbUFjdGlvbnMuQXNtVWlVcGRhdGUpLnBheWxvYWQsXG4gICAgICB9O1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG59XG4iXX0=