/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { PROCESS_FEATURE, StateUtils } from '@spartacus/core';
import { CANCEL_ORDER_PROCESS_ID, ORDER_DETAILS } from '../order-state';
export const LOAD_ORDER_DETAILS = '[Order] Load Order Details';
export const LOAD_ORDER_DETAILS_FAIL = '[Order] Load Order Details Fail';
export const LOAD_ORDER_DETAILS_SUCCESS = '[Order] Load Order Details Success';
export const CLEAR_ORDER_DETAILS = '[Order] Clear Order Details';
export const CANCEL_ORDER = '[Order] Cancel Order';
export const CANCEL_ORDER_FAIL = '[Order] Cancel Order Fail';
export const CANCEL_ORDER_SUCCESS = '[Order] Cancel Order Success';
export const RESET_CANCEL_ORDER_PROCESS = '[Order] Reset Cancel Order Process';
export class LoadOrderDetails extends StateUtils.LoaderLoadAction {
    constructor(payload) {
        super(ORDER_DETAILS);
        this.payload = payload;
        this.type = LOAD_ORDER_DETAILS;
    }
}
export class LoadOrderDetailsFail extends StateUtils.LoaderFailAction {
    constructor(payload) {
        super(ORDER_DETAILS, payload);
        this.payload = payload;
        this.type = LOAD_ORDER_DETAILS_FAIL;
    }
}
export class LoadOrderDetailsSuccess extends StateUtils.LoaderSuccessAction {
    constructor(payload) {
        super(ORDER_DETAILS);
        this.payload = payload;
        this.type = LOAD_ORDER_DETAILS_SUCCESS;
    }
}
export class ClearOrderDetails extends StateUtils.LoaderResetAction {
    constructor() {
        super(ORDER_DETAILS);
        this.type = CLEAR_ORDER_DETAILS;
    }
}
export class CancelOrder extends StateUtils.EntityLoadAction {
    constructor(payload) {
        super(PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID);
        this.payload = payload;
        this.type = CANCEL_ORDER;
    }
}
export class CancelOrderFail extends StateUtils.EntityFailAction {
    constructor(payload) {
        super(PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID, payload);
        this.payload = payload;
        this.type = CANCEL_ORDER_FAIL;
    }
}
export class CancelOrderSuccess extends StateUtils.EntitySuccessAction {
    constructor() {
        super(PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID);
        this.type = CANCEL_ORDER_SUCCESS;
    }
}
export class ResetCancelOrderProcess extends StateUtils.EntityLoaderResetAction {
    constructor() {
        super(PROCESS_FEATURE, CANCEL_ORDER_PROCESS_ID);
        this.type = RESET_CANCEL_ORDER_PROCESS;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvb3JkZXIvY29yZS9zdG9yZS9hY3Rpb25zL29yZGVyLWRldGFpbHMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RSxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRyw0QkFBNEIsQ0FBQztBQUMvRCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBRyxpQ0FBaUMsQ0FBQztBQUN6RSxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBRyxvQ0FBb0MsQ0FBQztBQUMvRSxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyw2QkFBNkIsQ0FBQztBQUVqRSxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsc0JBQXNCLENBQUM7QUFDbkQsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsMkJBQTJCLENBQUM7QUFDN0QsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsOEJBQThCLENBQUM7QUFDbkUsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQUcsb0NBQW9DLENBQUM7QUFFL0UsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFVBQVUsQ0FBQyxnQkFBZ0I7SUFFL0QsWUFDUyxPQUdOO1FBRUQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBTGQsWUFBTyxHQUFQLE9BQU8sQ0FHYjtRQUxNLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztJQVFuQyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsVUFBVSxDQUFDLGdCQUFnQjtJQUVuRSxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEYixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyx1QkFBdUIsQ0FBQztJQUd4QyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsVUFBVSxDQUFDLG1CQUFtQjtJQUV6RSxZQUFtQixPQUFjO1FBQy9CLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQURKLFlBQU8sR0FBUCxPQUFPLENBQU87UUFEeEIsU0FBSSxHQUFHLDBCQUEwQixDQUFDO0lBRzNDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUFVLENBQUMsaUJBQWlCO0lBRWpFO1FBQ0UsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRmQsU0FBSSxHQUFHLG1CQUFtQixDQUFDO0lBR3BDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxXQUFZLFNBQVEsVUFBVSxDQUFDLGdCQUFnQjtJQUUxRCxZQUNTLE9BSU47UUFFRCxLQUFLLENBQUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFOekMsWUFBTyxHQUFQLE9BQU8sQ0FJYjtRQU5NLFNBQUksR0FBRyxZQUFZLENBQUM7SUFTN0IsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsVUFBVSxDQUFDLGdCQUFnQjtJQUU5RCxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxlQUFlLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEeEMsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsaUJBQWlCLENBQUM7SUFHbEMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFVBQVUsQ0FBQyxtQkFBbUI7SUFFcEU7UUFDRSxLQUFLLENBQUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFGekMsU0FBSSxHQUFHLG9CQUFvQixDQUFDO0lBR3JDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxVQUFVLENBQUMsdUJBQXVCO0lBRTdFO1FBQ0UsS0FBSyxDQUFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1FBRnpDLFNBQUksR0FBRywwQkFBMEIsQ0FBQztJQUczQyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBQUk9DRVNTX0ZFQVRVUkUsIFN0YXRlVXRpbHMgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FuY2VsbGF0aW9uUmVxdWVzdEVudHJ5SW5wdXRMaXN0LFxuICBPcmRlcixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9vcmRlci9yb290JztcbmltcG9ydCB7IENBTkNFTF9PUkRFUl9QUk9DRVNTX0lELCBPUkRFUl9ERVRBSUxTIH0gZnJvbSAnLi4vb3JkZXItc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9PUkRFUl9ERVRBSUxTID0gJ1tPcmRlcl0gTG9hZCBPcmRlciBEZXRhaWxzJztcbmV4cG9ydCBjb25zdCBMT0FEX09SREVSX0RFVEFJTFNfRkFJTCA9ICdbT3JkZXJdIExvYWQgT3JkZXIgRGV0YWlscyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX09SREVSX0RFVEFJTFNfU1VDQ0VTUyA9ICdbT3JkZXJdIExvYWQgT3JkZXIgRGV0YWlscyBTdWNjZXNzJztcbmV4cG9ydCBjb25zdCBDTEVBUl9PUkRFUl9ERVRBSUxTID0gJ1tPcmRlcl0gQ2xlYXIgT3JkZXIgRGV0YWlscyc7XG5cbmV4cG9ydCBjb25zdCBDQU5DRUxfT1JERVIgPSAnW09yZGVyXSBDYW5jZWwgT3JkZXInO1xuZXhwb3J0IGNvbnN0IENBTkNFTF9PUkRFUl9GQUlMID0gJ1tPcmRlcl0gQ2FuY2VsIE9yZGVyIEZhaWwnO1xuZXhwb3J0IGNvbnN0IENBTkNFTF9PUkRFUl9TVUNDRVNTID0gJ1tPcmRlcl0gQ2FuY2VsIE9yZGVyIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX0NBTkNFTF9PUkRFUl9QUk9DRVNTID0gJ1tPcmRlcl0gUmVzZXQgQ2FuY2VsIE9yZGVyIFByb2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgTG9hZE9yZGVyRGV0YWlscyBleHRlbmRzIFN0YXRlVXRpbHMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX09SREVSX0RFVEFJTFM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIG9yZGVyQ29kZTogc3RyaW5nO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoT1JERVJfREVUQUlMUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRPcmRlckRldGFpbHNGYWlsIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfT1JERVJfREVUQUlMU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoT1JERVJfREVUQUlMUywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRPcmRlckRldGFpbHNTdWNjZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfT1JERVJfREVUQUlMU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogT3JkZXIpIHtcbiAgICBzdXBlcihPUkRFUl9ERVRBSUxTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xlYXJPcmRlckRldGFpbHMgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlclJlc2V0QWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX09SREVSX0RFVEFJTFM7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE9SREVSX0RFVEFJTFMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYW5jZWxPcmRlciBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQU5DRUxfT1JERVI7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIG9yZGVyQ29kZTogc3RyaW5nO1xuICAgICAgY2FuY2VsUmVxdWVzdElucHV0OiBDYW5jZWxsYXRpb25SZXF1ZXN0RW50cnlJbnB1dExpc3Q7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihQUk9DRVNTX0ZFQVRVUkUsIENBTkNFTF9PUkRFUl9QUk9DRVNTX0lEKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FuY2VsT3JkZXJGYWlsIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENBTkNFTF9PUkRFUl9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBDQU5DRUxfT1JERVJfUFJPQ0VTU19JRCwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhbmNlbE9yZGVyU3VjY2VzcyBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDQU5DRUxfT1JERVJfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBDQU5DRUxfT1JERVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0Q2FuY2VsT3JkZXJQcm9jZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlMb2FkZXJSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRVNFVF9DQU5DRUxfT1JERVJfUFJPQ0VTUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUFJPQ0VTU19GRUFUVVJFLCBDQU5DRUxfT1JERVJfUFJPQ0VTU19JRCk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgT3JkZXJEZXRhaWxzQWN0aW9uID1cbiAgfCBMb2FkT3JkZXJEZXRhaWxzXG4gIHwgTG9hZE9yZGVyRGV0YWlsc0ZhaWxcbiAgfCBMb2FkT3JkZXJEZXRhaWxzU3VjY2Vzc1xuICB8IENsZWFyT3JkZXJEZXRhaWxzXG4gIHwgQ2FuY2VsT3JkZXJcbiAgfCBDYW5jZWxPcmRlckZhaWxcbiAgfCBDYW5jZWxPcmRlclN1Y2Nlc3M7XG4iXX0=