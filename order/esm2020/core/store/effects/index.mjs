/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ConsignmentTrackingEffects } from './consignment-tracking.effect';
import { OrderDetailsEffect } from './order-details.effect';
import { OrderReturnRequestEffect } from './order-return-request.effect';
import { OrdersEffect } from './orders.effect';
import { ReplenishmentOrderDetailsEffect } from './replenishment-order-details.effect';
import { ReplenishmentOrdersEffect } from './replenishment-orders.effect';
export const effects = [
    OrdersEffect,
    OrderDetailsEffect,
    ConsignmentTrackingEffects,
    OrderReturnRequestEffect,
    ReplenishmentOrderDetailsEffect,
    ReplenishmentOrdersEffect,
];
export * from './consignment-tracking.effect';
export * from './order-details.effect';
export * from './order-return-request.effect';
export * from './orders.effect';
export * from './replenishment-order-details.effect';
export * from './replenishment-orders.effect';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvb3JkZXIvY29yZS9zdG9yZS9lZmZlY3RzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFMUUsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFVO0lBQzVCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QiwrQkFBK0I7SUFDL0IseUJBQXlCO0NBQzFCLENBQUM7QUFFRixjQUFjLCtCQUErQixDQUFDO0FBQzlDLGNBQWMsd0JBQXdCLENBQUM7QUFDdkMsY0FBYywrQkFBK0IsQ0FBQztBQUM5QyxjQUFjLGlCQUFpQixDQUFDO0FBQ2hDLGNBQWMsc0NBQXNDLENBQUM7QUFDckQsY0FBYywrQkFBK0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmdFZmZlY3RzIH0gZnJvbSAnLi9jb25zaWdubWVudC10cmFja2luZy5lZmZlY3QnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxzRWZmZWN0IH0gZnJvbSAnLi9vcmRlci1kZXRhaWxzLmVmZmVjdCc7XG5pbXBvcnQgeyBPcmRlclJldHVyblJlcXVlc3RFZmZlY3QgfSBmcm9tICcuL29yZGVyLXJldHVybi1yZXF1ZXN0LmVmZmVjdCc7XG5pbXBvcnQgeyBPcmRlcnNFZmZlY3QgfSBmcm9tICcuL29yZGVycy5lZmZlY3QnO1xuaW1wb3J0IHsgUmVwbGVuaXNobWVudE9yZGVyRGV0YWlsc0VmZmVjdCB9IGZyb20gJy4vcmVwbGVuaXNobWVudC1vcmRlci1kZXRhaWxzLmVmZmVjdCc7XG5pbXBvcnQgeyBSZXBsZW5pc2htZW50T3JkZXJzRWZmZWN0IH0gZnJvbSAnLi9yZXBsZW5pc2htZW50LW9yZGVycy5lZmZlY3QnO1xuXG5leHBvcnQgY29uc3QgZWZmZWN0czogYW55W10gPSBbXG4gIE9yZGVyc0VmZmVjdCxcbiAgT3JkZXJEZXRhaWxzRWZmZWN0LFxuICBDb25zaWdubWVudFRyYWNraW5nRWZmZWN0cyxcbiAgT3JkZXJSZXR1cm5SZXF1ZXN0RWZmZWN0LFxuICBSZXBsZW5pc2htZW50T3JkZXJEZXRhaWxzRWZmZWN0LFxuICBSZXBsZW5pc2htZW50T3JkZXJzRWZmZWN0LFxuXTtcblxuZXhwb3J0ICogZnJvbSAnLi9jb25zaWdubWVudC10cmFja2luZy5lZmZlY3QnO1xuZXhwb3J0ICogZnJvbSAnLi9vcmRlci1kZXRhaWxzLmVmZmVjdCc7XG5leHBvcnQgKiBmcm9tICcuL29yZGVyLXJldHVybi1yZXF1ZXN0LmVmZmVjdCc7XG5leHBvcnQgKiBmcm9tICcuL29yZGVycy5lZmZlY3QnO1xuZXhwb3J0ICogZnJvbSAnLi9yZXBsZW5pc2htZW50LW9yZGVyLWRldGFpbHMuZWZmZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vcmVwbGVuaXNobWVudC1vcmRlcnMuZWZmZWN0JztcbiJdfQ==