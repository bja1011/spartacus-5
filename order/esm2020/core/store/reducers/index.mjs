/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { InjectionToken } from '@angular/core';
import { StateUtils } from '@spartacus/core';
import { ORDERS, ORDER_DETAILS, REPLENISHMENT_ORDERS, REPLENISHMENT_ORDER_DETAILS, RETURN_REQUESTS, RETURN_REQUEST_DETAILS, } from '../order-state';
import * as fromConsignmentTrackingReducer from './consignment-tracking.reducer';
import * as fromOrderDetailsReducer from './order-details.reducer';
import * as fromOrderReturnRequestReducer from './order-return-request.reducer';
import * as fromUserOrdersReducer from './orders.reducer';
import * as fromReplenishmentOrderDetailsReducer from './replenishment-order-details.reducer';
import * as fromUserReplenishmentOrdersReducer from './replenishment-orders.reducer';
export function getReducers() {
    return {
        orders: StateUtils.loaderReducer(ORDERS, fromUserOrdersReducer.reducer),
        orderDetail: StateUtils.loaderReducer(ORDER_DETAILS, fromOrderDetailsReducer.reducer),
        replenishmentOrders: StateUtils.loaderReducer(REPLENISHMENT_ORDERS, fromUserReplenishmentOrdersReducer.reducer),
        orderReturn: StateUtils.loaderReducer(RETURN_REQUEST_DETAILS),
        orderReturnList: StateUtils.loaderReducer(RETURN_REQUESTS, fromOrderReturnRequestReducer.reducer),
        consignmentTracking: fromConsignmentTrackingReducer.reducer,
        replenishmentOrder: StateUtils.loaderReducer(REPLENISHMENT_ORDER_DETAILS, fromReplenishmentOrderDetailsReducer.reducer),
    };
}
export const reducerToken = new InjectionToken('OrderReducers');
export const reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvb3JkZXIvY29yZS9zdG9yZS9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTN0MsT0FBTyxFQUNMLE1BQU0sRUFFTixhQUFhLEVBQ2Isb0JBQW9CLEVBQ3BCLDJCQUEyQixFQUMzQixlQUFlLEVBQ2Ysc0JBQXNCLEdBQ3ZCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxLQUFLLDhCQUE4QixNQUFNLGdDQUFnQyxDQUFDO0FBQ2pGLE9BQU8sS0FBSyx1QkFBdUIsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRSxPQUFPLEtBQUssNkJBQTZCLE1BQU0sZ0NBQWdDLENBQUM7QUFDaEYsT0FBTyxLQUFLLHFCQUFxQixNQUFNLGtCQUFrQixDQUFDO0FBQzFELE9BQU8sS0FBSyxvQ0FBb0MsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RixPQUFPLEtBQUssa0NBQWtDLE1BQU0sZ0NBQWdDLENBQUM7QUFFckYsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTztRQUNMLE1BQU0sRUFBRSxVQUFVLENBQUMsYUFBYSxDQUM5QixNQUFNLEVBQ04scUJBQXFCLENBQUMsT0FBTyxDQUM5QjtRQUNELFdBQVcsRUFBRSxVQUFVLENBQUMsYUFBYSxDQUNuQyxhQUFhLEVBQ2IsdUJBQXVCLENBQUMsT0FBTyxDQUNoQztRQUNELG1CQUFtQixFQUFFLFVBQVUsQ0FBQyxhQUFhLENBQzNDLG9CQUFvQixFQUNwQixrQ0FBa0MsQ0FBQyxPQUFPLENBQzNDO1FBQ0QsV0FBVyxFQUFFLFVBQVUsQ0FBQyxhQUFhLENBQ25DLHNCQUFzQixDQUN2QjtRQUNELGVBQWUsRUFBRSxVQUFVLENBQUMsYUFBYSxDQUN2QyxlQUFlLEVBQ2YsNkJBQTZCLENBQUMsT0FBTyxDQUN0QztRQUNELG1CQUFtQixFQUFFLDhCQUE4QixDQUFDLE9BQU87UUFDM0Qsa0JBQWtCLEVBQUUsVUFBVSxDQUFDLGFBQWEsQ0FDMUMsMkJBQTJCLEVBQzNCLG9DQUFvQyxDQUFDLE9BQU8sQ0FDN0M7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FDdkIsSUFBSSxjQUFjLENBQStCLGVBQWUsQ0FBQyxDQUFDO0FBRXBFLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBYTtJQUN2QyxPQUFPLEVBQUUsWUFBWTtJQUNyQixVQUFVLEVBQUUsV0FBVztDQUN4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25SZWR1Y2VyTWFwIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgU3RhdGVVdGlscyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQge1xuICBPcmRlcixcbiAgT3JkZXJIaXN0b3J5TGlzdCxcbiAgUmVwbGVuaXNobWVudE9yZGVyLFxuICBSZXBsZW5pc2htZW50T3JkZXJMaXN0LFxuICBSZXR1cm5SZXF1ZXN0LFxuICBSZXR1cm5SZXF1ZXN0TGlzdCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9vcmRlci9yb290JztcbmltcG9ydCB7XG4gIE9SREVSUyxcbiAgT3JkZXJTdGF0ZSxcbiAgT1JERVJfREVUQUlMUyxcbiAgUkVQTEVOSVNITUVOVF9PUkRFUlMsXG4gIFJFUExFTklTSE1FTlRfT1JERVJfREVUQUlMUyxcbiAgUkVUVVJOX1JFUVVFU1RTLFxuICBSRVRVUk5fUkVRVUVTVF9ERVRBSUxTLFxufSBmcm9tICcuLi9vcmRlci1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tQ29uc2lnbm1lbnRUcmFja2luZ1JlZHVjZXIgZnJvbSAnLi9jb25zaWdubWVudC10cmFja2luZy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21PcmRlckRldGFpbHNSZWR1Y2VyIGZyb20gJy4vb3JkZXItZGV0YWlscy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21PcmRlclJldHVyblJlcXVlc3RSZWR1Y2VyIGZyb20gJy4vb3JkZXItcmV0dXJuLXJlcXVlc3QucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tVXNlck9yZGVyc1JlZHVjZXIgZnJvbSAnLi9vcmRlcnMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tUmVwbGVuaXNobWVudE9yZGVyRGV0YWlsc1JlZHVjZXIgZnJvbSAnLi9yZXBsZW5pc2htZW50LW9yZGVyLWRldGFpbHMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tVXNlclJlcGxlbmlzaG1lbnRPcmRlcnNSZWR1Y2VyIGZyb20gJy4vcmVwbGVuaXNobWVudC1vcmRlcnMucmVkdWNlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWR1Y2VycygpOiBBY3Rpb25SZWR1Y2VyTWFwPE9yZGVyU3RhdGUsIGFueT4ge1xuICByZXR1cm4ge1xuICAgIG9yZGVyczogU3RhdGVVdGlscy5sb2FkZXJSZWR1Y2VyPE9yZGVySGlzdG9yeUxpc3QsIGFueT4oXG4gICAgICBPUkRFUlMsXG4gICAgICBmcm9tVXNlck9yZGVyc1JlZHVjZXIucmVkdWNlclxuICAgICksXG4gICAgb3JkZXJEZXRhaWw6IFN0YXRlVXRpbHMubG9hZGVyUmVkdWNlcjxPcmRlciwgYW55PihcbiAgICAgIE9SREVSX0RFVEFJTFMsXG4gICAgICBmcm9tT3JkZXJEZXRhaWxzUmVkdWNlci5yZWR1Y2VyXG4gICAgKSxcbiAgICByZXBsZW5pc2htZW50T3JkZXJzOiBTdGF0ZVV0aWxzLmxvYWRlclJlZHVjZXI8UmVwbGVuaXNobWVudE9yZGVyTGlzdCwgYW55PihcbiAgICAgIFJFUExFTklTSE1FTlRfT1JERVJTLFxuICAgICAgZnJvbVVzZXJSZXBsZW5pc2htZW50T3JkZXJzUmVkdWNlci5yZWR1Y2VyXG4gICAgKSxcbiAgICBvcmRlclJldHVybjogU3RhdGVVdGlscy5sb2FkZXJSZWR1Y2VyPFJldHVyblJlcXVlc3Q+KFxuICAgICAgUkVUVVJOX1JFUVVFU1RfREVUQUlMU1xuICAgICksXG4gICAgb3JkZXJSZXR1cm5MaXN0OiBTdGF0ZVV0aWxzLmxvYWRlclJlZHVjZXI8UmV0dXJuUmVxdWVzdExpc3QsIGFueT4oXG4gICAgICBSRVRVUk5fUkVRVUVTVFMsXG4gICAgICBmcm9tT3JkZXJSZXR1cm5SZXF1ZXN0UmVkdWNlci5yZWR1Y2VyXG4gICAgKSxcbiAgICBjb25zaWdubWVudFRyYWNraW5nOiBmcm9tQ29uc2lnbm1lbnRUcmFja2luZ1JlZHVjZXIucmVkdWNlcixcbiAgICByZXBsZW5pc2htZW50T3JkZXI6IFN0YXRlVXRpbHMubG9hZGVyUmVkdWNlcjxSZXBsZW5pc2htZW50T3JkZXIsIGFueT4oXG4gICAgICBSRVBMRU5JU0hNRU5UX09SREVSX0RFVEFJTFMsXG4gICAgICBmcm9tUmVwbGVuaXNobWVudE9yZGVyRGV0YWlsc1JlZHVjZXIucmVkdWNlclxuICAgICksXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyVG9rZW46IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8T3JkZXJTdGF0ZT4+ID1cbiAgbmV3IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8T3JkZXJTdGF0ZT4+KCdPcmRlclJlZHVjZXJzJyk7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiByZWR1Y2VyVG9rZW4sXG4gIHVzZUZhY3Rvcnk6IGdldFJlZHVjZXJzLFxufTtcbiJdfQ==