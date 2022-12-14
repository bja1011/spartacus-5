/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Injectable } from '@angular/core';
import { facadeFactory } from '@spartacus/core';
import { ORDER_CORE_FEATURE } from '../feature-name';
import * as i0 from "@angular/core";
export function orderHistoryFacadeFactory() {
    return facadeFactory({
        facade: OrderHistoryFacade,
        feature: ORDER_CORE_FEATURE,
        methods: [
            'getOrderDetails',
            'loadOrderDetails',
            'clearOrderDetails',
            'getOrderHistoryList',
            'getOrderHistoryListLoaded',
            'loadOrderList',
            'clearOrderList',
            'getConsignmentTracking',
            'loadConsignmentTracking',
            'clearConsignmentTracking',
            'cancelOrder',
            'getCancelOrderLoading',
            'getCancelOrderSuccess',
            'resetCancelOrderProcessState',
        ],
        async: true,
    });
}
export class OrderHistoryFacade {
}
OrderHistoryFacade.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: OrderHistoryFacade, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
OrderHistoryFacade.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: OrderHistoryFacade, providedIn: 'root', useFactory: orderHistoryFacadeFactory });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: OrderHistoryFacade, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                    useFactory: orderHistoryFacadeFactory,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaGlzdG9yeS5mYWNhZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvb3JkZXIvcm9vdC9mYWNhZGUvb3JkZXItaGlzdG9yeS5mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWhELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQVFyRCxNQUFNLFVBQVUseUJBQXlCO0lBQ3ZDLE9BQU8sYUFBYSxDQUFDO1FBQ25CLE1BQU0sRUFBRSxrQkFBa0I7UUFDMUIsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixPQUFPLEVBQUU7WUFDUCxpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLG1CQUFtQjtZQUNuQixxQkFBcUI7WUFDckIsMkJBQTJCO1lBQzNCLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsd0JBQXdCO1lBQ3hCLHlCQUF5QjtZQUN6QiwwQkFBMEI7WUFDMUIsYUFBYTtZQUNiLHVCQUF1QjtZQUN2Qix1QkFBdUI7WUFDdkIsOEJBQThCO1NBQy9CO1FBQ0QsS0FBSyxFQUFFLElBQUk7S0FDWixDQUFDLENBQUM7QUFDTCxDQUFDO0FBTUQsTUFBTSxPQUFnQixrQkFBa0I7OytHQUFsQixrQkFBa0I7bUhBQWxCLGtCQUFrQixjQUgxQixNQUFNLGNBQ04seUJBQXlCOzJGQUVqQixrQkFBa0I7a0JBSnZDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07b0JBQ2xCLFVBQVUsRUFBRSx5QkFBeUI7aUJBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFjYWRlRmFjdG9yeSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPUkRFUl9DT1JFX0ZFQVRVUkUgfSBmcm9tICcuLi9mZWF0dXJlLW5hbWUnO1xuaW1wb3J0IHsgQ29uc2lnbm1lbnRUcmFja2luZyB9IGZyb20gJy4uL21vZGVsL2NvbnNpZ25tZW50LXRyYWNraW5nLm1vZGVsJztcbmltcG9ydCB7XG4gIENhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0TGlzdCxcbiAgT3JkZXIsXG4gIE9yZGVySGlzdG9yeUxpc3QsXG59IGZyb20gJy4uL21vZGVsL29yZGVyLm1vZGVsJztcblxuZXhwb3J0IGZ1bmN0aW9uIG9yZGVySGlzdG9yeUZhY2FkZUZhY3RvcnkoKSB7XG4gIHJldHVybiBmYWNhZGVGYWN0b3J5KHtcbiAgICBmYWNhZGU6IE9yZGVySGlzdG9yeUZhY2FkZSxcbiAgICBmZWF0dXJlOiBPUkRFUl9DT1JFX0ZFQVRVUkUsXG4gICAgbWV0aG9kczogW1xuICAgICAgJ2dldE9yZGVyRGV0YWlscycsXG4gICAgICAnbG9hZE9yZGVyRGV0YWlscycsXG4gICAgICAnY2xlYXJPcmRlckRldGFpbHMnLFxuICAgICAgJ2dldE9yZGVySGlzdG9yeUxpc3QnLFxuICAgICAgJ2dldE9yZGVySGlzdG9yeUxpc3RMb2FkZWQnLFxuICAgICAgJ2xvYWRPcmRlckxpc3QnLFxuICAgICAgJ2NsZWFyT3JkZXJMaXN0JyxcbiAgICAgICdnZXRDb25zaWdubWVudFRyYWNraW5nJyxcbiAgICAgICdsb2FkQ29uc2lnbm1lbnRUcmFja2luZycsXG4gICAgICAnY2xlYXJDb25zaWdubWVudFRyYWNraW5nJyxcbiAgICAgICdjYW5jZWxPcmRlcicsXG4gICAgICAnZ2V0Q2FuY2VsT3JkZXJMb2FkaW5nJyxcbiAgICAgICdnZXRDYW5jZWxPcmRlclN1Y2Nlc3MnLFxuICAgICAgJ3Jlc2V0Q2FuY2VsT3JkZXJQcm9jZXNzU3RhdGUnLFxuICAgIF0sXG4gICAgYXN5bmM6IHRydWUsXG4gIH0pO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgdXNlRmFjdG9yeTogb3JkZXJIaXN0b3J5RmFjYWRlRmFjdG9yeSxcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgT3JkZXJIaXN0b3J5RmFjYWRlIHtcbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb3JkZXIncyBkZXRhaWxcbiAgICovXG4gIGFic3RyYWN0IGdldE9yZGVyRGV0YWlscygpOiBPYnNlcnZhYmxlPE9yZGVyPjtcblxuICAvKipcbiAgICogUmV0cmlldmVzIG9yZGVyJ3MgZGV0YWlsc1xuICAgKlxuICAgKiBAcGFyYW0gb3JkZXJDb2RlIGFuIG9yZGVyIGNvZGVcbiAgICovXG4gIGFic3RyYWN0IGxvYWRPcmRlckRldGFpbHMob3JkZXJDb2RlOiBzdHJpbmcpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBDbGVhcnMgb3JkZXIncyBkZXRhaWxzXG4gICAqL1xuICBhYnN0cmFjdCBjbGVhck9yZGVyRGV0YWlscygpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIG9yZGVyIGhpc3RvcnkgbGlzdFxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0T3JkZXJIaXN0b3J5TGlzdChcbiAgICBwYWdlU2l6ZTogbnVtYmVyXG4gICk6IE9ic2VydmFibGU8T3JkZXJIaXN0b3J5TGlzdCB8IHVuZGVmaW5lZD47XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsb2FkZWQgZmxhZyBmb3Igb3JkZXIgaGlzdG9yeSBsaXN0XG4gICAqL1xuICBhYnN0cmFjdCBnZXRPcmRlckhpc3RvcnlMaXN0TG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhbiBvcmRlciBsaXN0XG4gICAqIEBwYXJhbSBwYWdlU2l6ZSBwYWdlIHNpemVcbiAgICogQHBhcmFtIGN1cnJlbnRQYWdlIGN1cnJlbnQgcGFnZVxuICAgKiBAcGFyYW0gc29ydCBzb3J0XG4gICAqL1xuICBhYnN0cmFjdCBsb2FkT3JkZXJMaXN0KFxuICAgIHBhZ2VTaXplOiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZ1xuICApOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBDbGVhbmluZyBvcmRlciBsaXN0XG4gICAqL1xuICBhYnN0cmFjdCBjbGVhck9yZGVyTGlzdCgpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiAgUmV0dXJucyBhIGNvbnNpZ25tZW50IHRyYWNraW5nIGRldGFpbFxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0Q29uc2lnbm1lbnRUcmFja2luZygpOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50VHJhY2tpbmc+O1xuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgY29uc2lnbm1lbnQgdHJhY2tpbmcgZGV0YWlsc1xuICAgKiBAcGFyYW0gb3JkZXJDb2RlIGFuIG9yZGVyIGNvZGVcbiAgICogQHBhcmFtIGNvbnNpZ25tZW50Q29kZSBhIGNvbnNpZ25tZW50IGNvZGVcbiAgICovXG4gIGFic3RyYWN0IGxvYWRDb25zaWdubWVudFRyYWNraW5nKFxuICAgIG9yZGVyQ29kZTogc3RyaW5nLFxuICAgIGNvbnNpZ25tZW50Q29kZTogc3RyaW5nXG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENsZWFuaW5nIGNvbnNpZ25tZW50IHRyYWNraW5nXG4gICAqL1xuICBhYnN0cmFjdCBjbGVhckNvbnNpZ25tZW50VHJhY2tpbmcoKTogdm9pZDtcblxuICAvKlxuICAgKiBDYW5jZWwgYW4gb3JkZXJcbiAgICovXG4gIGFic3RyYWN0IGNhbmNlbE9yZGVyKFxuICAgIG9yZGVyQ29kZTogc3RyaW5nLFxuICAgIGNhbmNlbFJlcXVlc3RJbnB1dDogQ2FuY2VsbGF0aW9uUmVxdWVzdEVudHJ5SW5wdXRMaXN0XG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNhbmNlbCBvcmRlciBsb2FkaW5nIGZsYWdcbiAgICovXG4gIGFic3RyYWN0IGdldENhbmNlbE9yZGVyTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjYW5jZWwgb3JkZXIgc3VjY2VzcyBmbGFnXG4gICAqL1xuICBhYnN0cmFjdCBnZXRDYW5jZWxPcmRlclN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBjYW5jZWwgb3JkZXIgcHJvY2VzcyBmbGFnc1xuICAgKi9cbiAgYWJzdHJhY3QgcmVzZXRDYW5jZWxPcmRlclByb2Nlc3NTdGF0ZSgpOiB2b2lkO1xufVxuIl19