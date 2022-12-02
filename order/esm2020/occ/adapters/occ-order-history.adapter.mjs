/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterceptorUtil, OCC_USER_ID_ANONYMOUS, OCC_USER_ID_CURRENT, USE_CLIENT_TOKEN, } from '@spartacus/core';
import { CONSIGNMENT_TRACKING_NORMALIZER, ORDER_HISTORY_NORMALIZER, ORDER_NORMALIZER, ORDER_RETURNS_NORMALIZER, ORDER_RETURN_REQUEST_INPUT_SERIALIZER, ORDER_RETURN_REQUEST_NORMALIZER, } from '@spartacus/order/root';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@spartacus/core";
export class OccOrderHistoryAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    load(userId, orderCode) {
        const url = this.occEndpoints.buildUrl('orderDetail', {
            urlParams: { userId, orderId: orderCode },
        });
        let headers = new HttpHeaders();
        if (userId === OCC_USER_ID_ANONYMOUS) {
            headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        }
        return this.http
            .get(url, { headers })
            .pipe(this.converter.pipeable(ORDER_NORMALIZER));
    }
    loadHistory(userId, pageSize, currentPage, sort) {
        const params = {};
        if (pageSize) {
            params['pageSize'] = pageSize.toString();
        }
        if (currentPage) {
            params['currentPage'] = currentPage.toString();
        }
        if (sort) {
            params['sort'] = sort.toString();
        }
        const url = this.occEndpoints.buildUrl('orderHistory', {
            urlParams: { userId },
            queryParams: params,
        });
        return this.http
            .get(url)
            .pipe(this.converter.pipeable(ORDER_HISTORY_NORMALIZER));
    }
    getConsignmentTracking(orderCode, consignmentCode, userId = OCC_USER_ID_CURRENT) {
        const url = this.occEndpoints.buildUrl('consignmentTracking', {
            urlParams: { userId, orderCode, consignmentCode },
        });
        return this.http
            .get(url)
            .pipe(this.converter.pipeable(CONSIGNMENT_TRACKING_NORMALIZER));
    }
    cancel(userId, orderCode, cancelRequestInput) {
        const url = this.occEndpoints.buildUrl('cancelOrder', {
            urlParams: { userId, orderId: orderCode },
        });
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .post(url, cancelRequestInput, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    createReturnRequest(userId, returnRequestInput) {
        const url = this.occEndpoints.buildUrl('returnOrder', {
            urlParams: { userId },
        });
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        returnRequestInput = this.converter.convert(returnRequestInput, ORDER_RETURN_REQUEST_INPUT_SERIALIZER);
        return this.http.post(url, returnRequestInput, { headers }).pipe(catchError((error) => throwError(error)), this.converter.pipeable(ORDER_RETURN_REQUEST_NORMALIZER));
    }
    loadReturnRequestList(userId, pageSize, currentPage, sort) {
        const params = {};
        if (pageSize) {
            params['pageSize'] = pageSize.toString();
        }
        if (currentPage) {
            params['currentPage'] = currentPage.toString();
        }
        if (sort) {
            params['sort'] = sort.toString();
        }
        const url = this.occEndpoints.buildUrl('orderReturns', {
            urlParams: { userId },
            queryParams: params,
        });
        return this.http
            .get(url)
            .pipe(this.converter.pipeable(ORDER_RETURNS_NORMALIZER));
    }
    loadReturnRequestDetail(userId, returnRequestCode) {
        const url = this.occEndpoints.buildUrl('orderReturnDetail', {
            urlParams: { userId, returnRequestCode },
        });
        return this.http
            .get(url)
            .pipe(this.converter.pipeable(ORDER_RETURN_REQUEST_NORMALIZER));
    }
    cancelReturnRequest(userId, returnRequestCode, returnRequestModification) {
        const url = this.occEndpoints.buildUrl('cancelReturn', {
            urlParams: { userId, returnRequestCode },
        });
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .patch(url, returnRequestModification, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
}
OccOrderHistoryAdapter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: OccOrderHistoryAdapter, deps: [{ token: i1.HttpClient }, { token: i2.OccEndpointsService }, { token: i2.ConverterService }], target: i0.ɵɵFactoryTarget.Injectable });
OccOrderHistoryAdapter.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: OccOrderHistoryAdapter });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: OccOrderHistoryAdapter, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.OccEndpointsService }, { type: i2.ConverterService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLW9yZGVyLWhpc3RvcnkuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmRlci9vY2MvYWRhcHRlcnMvb2NjLW9yZGVyLWhpc3RvcnkuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUVMLGVBQWUsRUFHZixxQkFBcUIsRUFDckIsbUJBQW1CLEVBQ25CLGdCQUFnQixHQUNqQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFHTCwrQkFBK0IsRUFHL0Isd0JBQXdCLEVBQ3hCLGdCQUFnQixFQUNoQix3QkFBd0IsRUFDeEIscUNBQXFDLEVBQ3JDLCtCQUErQixHQUtoQyxNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRzVDLE1BQU0sT0FBTyxzQkFBc0I7SUFDakMsWUFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQjtRQUYzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDO0lBRUcsSUFBSSxDQUFDLE1BQWMsRUFBRSxTQUFpQjtRQUMzQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUU7WUFDcEQsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUU7U0FDMUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxPQUFPLEdBQUcsSUFBSSxXQUFX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QztJQUM3RCxDQUFDO0lBRU0sdUJBQXVCLENBQzVCLE1BQWMsRUFDZCxpQkFBeUI7UUFFekIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUU7WUFDMUQsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFO1NBQ3pDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQWdCLEdBQUcsQ0FBQzthQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSxtQkFBbUIsQ0FDeEIsTUFBYyxFQUNkLGlCQUF5QixFQUN6Qix5QkFBb0Q7UUFFcEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFO1lBQ3JELFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRTtTQUN6QyxDQUFDLENBQUM7UUFDSCxNQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM5QixjQUFjLEVBQUUsa0JBQWtCO1NBQ25DLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixLQUFLLENBQUMsR0FBRyxFQUFFLHlCQUF5QixFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDOzttSEE1SlUsc0JBQXNCO3VIQUF0QixzQkFBc0I7MkZBQXRCLHNCQUFzQjtrQkFEbEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29udmVydGVyU2VydmljZSxcbiAgSW50ZXJjZXB0b3JVdGlsLFxuICBPY2MsXG4gIE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gIE9DQ19VU0VSX0lEX0FOT05ZTU9VUyxcbiAgT0NDX1VTRVJfSURfQ1VSUkVOVCxcbiAgVVNFX0NMSUVOVF9UT0tFTixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9yZGVySGlzdG9yeUFkYXB0ZXIgfSBmcm9tICdAc3BhcnRhY3VzL29yZGVyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FuY2VsbGF0aW9uUmVxdWVzdEVudHJ5SW5wdXRMaXN0LFxuICBDb25zaWdubWVudFRyYWNraW5nLFxuICBDT05TSUdOTUVOVF9UUkFDS0lOR19OT1JNQUxJWkVSLFxuICBPcmRlcixcbiAgT3JkZXJIaXN0b3J5TGlzdCxcbiAgT1JERVJfSElTVE9SWV9OT1JNQUxJWkVSLFxuICBPUkRFUl9OT1JNQUxJWkVSLFxuICBPUkRFUl9SRVRVUk5TX05PUk1BTElaRVIsXG4gIE9SREVSX1JFVFVSTl9SRVFVRVNUX0lOUFVUX1NFUklBTElaRVIsXG4gIE9SREVSX1JFVFVSTl9SRVFVRVNUX05PUk1BTElaRVIsXG4gIFJldHVyblJlcXVlc3QsXG4gIFJldHVyblJlcXVlc3RFbnRyeUlucHV0TGlzdCxcbiAgUmV0dXJuUmVxdWVzdExpc3QsXG4gIFJldHVyblJlcXVlc3RNb2RpZmljYXRpb24sXG59IGZyb20gJ0BzcGFydGFjdXMvb3JkZXIvcm9vdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjT3JkZXJIaXN0b3J5QWRhcHRlciBpbXBsZW1lbnRzIE9yZGVySGlzdG9yeUFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyBsb2FkKHVzZXJJZDogc3RyaW5nLCBvcmRlckNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5idWlsZFVybCgnb3JkZXJEZXRhaWwnLCB7XG4gICAgICB1cmxQYXJhbXM6IHsgdXNlcklkLCBvcmRlcklkOiBvcmRlckNvZGUgfSxcbiAgICB9KTtcblxuICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XG4gICAgaWYgKHVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICBoZWFkZXJzID0gSW50ZXJjZXB0b3JVdGlsLmNyZWF0ZUhlYWRlcihVU0VfQ0xJRU5UX1RPS0VOLCB0cnVlLCBoZWFkZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5PcmRlcj4odXJsLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKE9SREVSX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkSGlzdG9yeShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwYWdlU2l6ZT86IG51bWJlcixcbiAgICBjdXJyZW50UGFnZT86IG51bWJlcixcbiAgICBzb3J0Pzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8T3JkZXJIaXN0b3J5TGlzdD4ge1xuICAgIGNvbnN0IHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICAgIGlmIChwYWdlU2l6ZSkge1xuICAgICAgcGFyYW1zWydwYWdlU2l6ZSddID0gcGFnZVNpemUudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRQYWdlKSB7XG4gICAgICBwYXJhbXNbJ2N1cnJlbnRQYWdlJ10gPSBjdXJyZW50UGFnZS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAoc29ydCkge1xuICAgICAgcGFyYW1zWydzb3J0J10gPSBzb3J0LnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuYnVpbGRVcmwoJ29yZGVySGlzdG9yeScsIHtcbiAgICAgIHVybFBhcmFtczogeyB1c2VySWQgfSxcbiAgICAgIHF1ZXJ5UGFyYW1zOiBwYXJhbXMsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5PcmRlckhpc3RvcnlMaXN0Pih1cmwpXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShPUkRFUl9ISVNUT1JZX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25zaWdubWVudFRyYWNraW5nKFxuICAgIG9yZGVyQ29kZTogc3RyaW5nLFxuICAgIGNvbnNpZ25tZW50Q29kZTogc3RyaW5nLFxuICAgIHVzZXJJZDogc3RyaW5nID0gT0NDX1VTRVJfSURfQ1VSUkVOVFxuICApOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50VHJhY2tpbmc+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5idWlsZFVybCgnY29uc2lnbm1lbnRUcmFja2luZycsIHtcbiAgICAgIHVybFBhcmFtczogeyB1c2VySWQsIG9yZGVyQ29kZSwgY29uc2lnbm1lbnRDb2RlIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxDb25zaWdubWVudFRyYWNraW5nPih1cmwpXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShDT05TSUdOTUVOVF9UUkFDS0lOR19OT1JNQUxJWkVSKSk7XG4gIH1cblxuICBwdWJsaWMgY2FuY2VsKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9yZGVyQ29kZTogc3RyaW5nLFxuICAgIGNhbmNlbFJlcXVlc3RJbnB1dDogQ2FuY2VsbGF0aW9uUmVxdWVzdEVudHJ5SW5wdXRMaXN0XG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5idWlsZFVybCgnY2FuY2VsT3JkZXInLCB7XG4gICAgICB1cmxQYXJhbXM6IHsgdXNlcklkLCBvcmRlcklkOiBvcmRlckNvZGUgfSxcbiAgICB9KTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdCh1cmwsIGNhbmNlbFJlcXVlc3RJbnB1dCwgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZVJldHVyblJlcXVlc3QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcmV0dXJuUmVxdWVzdElucHV0OiBSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dExpc3RcbiAgKTogT2JzZXJ2YWJsZTxSZXR1cm5SZXF1ZXN0PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuYnVpbGRVcmwoJ3JldHVybk9yZGVyJywge1xuICAgICAgdXJsUGFyYW1zOiB7IHVzZXJJZCB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcblxuICAgIHJldHVyblJlcXVlc3RJbnB1dCA9IHRoaXMuY29udmVydGVyLmNvbnZlcnQoXG4gICAgICByZXR1cm5SZXF1ZXN0SW5wdXQsXG4gICAgICBPUkRFUl9SRVRVUk5fUkVRVUVTVF9JTlBVVF9TRVJJQUxJWkVSXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIHJldHVyblJlcXVlc3RJbnB1dCwgeyBoZWFkZXJzIH0pLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSksXG4gICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZShPUkRFUl9SRVRVUk5fUkVRVUVTVF9OT1JNQUxJWkVSKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgbG9hZFJldHVyblJlcXVlc3RMaXN0KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHBhZ2VTaXplPzogbnVtYmVyLFxuICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyLFxuICAgIHNvcnQ/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxSZXR1cm5SZXF1ZXN0TGlzdD4ge1xuICAgIGNvbnN0IHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICAgIGlmIChwYWdlU2l6ZSkge1xuICAgICAgcGFyYW1zWydwYWdlU2l6ZSddID0gcGFnZVNpemUudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRQYWdlKSB7XG4gICAgICBwYXJhbXNbJ2N1cnJlbnRQYWdlJ10gPSBjdXJyZW50UGFnZS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAoc29ydCkge1xuICAgICAgcGFyYW1zWydzb3J0J10gPSBzb3J0LnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuYnVpbGRVcmwoJ29yZGVyUmV0dXJucycsIHtcbiAgICAgIHVybFBhcmFtczogeyB1c2VySWQgfSxcbiAgICAgIHF1ZXJ5UGFyYW1zOiBwYXJhbXMsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PFJldHVyblJlcXVlc3RMaXN0Pih1cmwpXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShPUkRFUl9SRVRVUk5TX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkUmV0dXJuUmVxdWVzdERldGFpbChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICByZXR1cm5SZXF1ZXN0Q29kZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8UmV0dXJuUmVxdWVzdD4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmJ1aWxkVXJsKCdvcmRlclJldHVybkRldGFpbCcsIHtcbiAgICAgIHVybFBhcmFtczogeyB1c2VySWQsIHJldHVyblJlcXVlc3RDb2RlIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PFJldHVyblJlcXVlc3Q+KHVybClcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKE9SREVSX1JFVFVSTl9SRVFVRVNUX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHB1YmxpYyBjYW5jZWxSZXR1cm5SZXF1ZXN0KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHJldHVyblJlcXVlc3RDb2RlOiBzdHJpbmcsXG4gICAgcmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvbjogUmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvblxuICApOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuYnVpbGRVcmwoJ2NhbmNlbFJldHVybicsIHtcbiAgICAgIHVybFBhcmFtczogeyB1c2VySWQsIHJldHVyblJlcXVlc3RDb2RlIH0sXG4gICAgfSk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBhdGNoKHVybCwgcmV0dXJuUmVxdWVzdE1vZGlmaWNhdGlvbiwgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG59XG4iXX0=