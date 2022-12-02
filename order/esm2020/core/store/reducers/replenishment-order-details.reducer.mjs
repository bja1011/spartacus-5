/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { OrderActions } from '../actions/index';
export const initialState = {};
export function reducer(state = initialState, action) {
    switch (action.type) {
        case OrderActions.LOAD_REPLENISHMENT_ORDER_DETAILS_SUCCESS:
        case OrderActions.CANCEL_REPLENISHMENT_ORDER_SUCCESS: {
            return action.payload ? action.payload : initialState;
        }
        default: {
            return state;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGVuaXNobWVudC1vcmRlci1kZXRhaWxzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvb3JkZXIvY29yZS9zdG9yZS9yZWR1Y2Vycy9yZXBsZW5pc2htZW50LW9yZGVyLWRldGFpbHMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBR0gsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWhELE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBdUIsRUFBRSxDQUFDO0FBRW5ELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQW9EO0lBRXBELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFlBQVksQ0FBQyx3Q0FBd0MsQ0FBQztRQUMzRCxLQUFLLFlBQVksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ3BELE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1NBQ3ZEO1FBRUQsT0FBTyxDQUFDLENBQUM7WUFDUCxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgUmVwbGVuaXNobWVudE9yZGVyIH0gZnJvbSAnQHNwYXJ0YWN1cy9vcmRlci9yb290JztcbmltcG9ydCB7IE9yZGVyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBSZXBsZW5pc2htZW50T3JkZXIgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IE9yZGVyQWN0aW9ucy5SZXBsZW5pc2htZW50T3JkZXJEZXRhaWxzQWN0aW9uXG4pOiBSZXBsZW5pc2htZW50T3JkZXIge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBPcmRlckFjdGlvbnMuTE9BRF9SRVBMRU5JU0hNRU5UX09SREVSX0RFVEFJTFNfU1VDQ0VTUzpcbiAgICBjYXNlIE9yZGVyQWN0aW9ucy5DQU5DRUxfUkVQTEVOSVNITUVOVF9PUkRFUl9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQgPyBhY3Rpb24ucGF5bG9hZCA6IGluaXRpYWxTdGF0ZTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG59XG4iXX0=