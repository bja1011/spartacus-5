import { Injectable } from '@angular/core';
import { CART_NORMALIZER } from '@spartacus/cart/base/root';
import { CHECKOUT_PAYMENT_TYPE_NORMALIZER, } from '@spartacus/checkout/b2b/core';
import { backOff, isJaloError, normalizeHttpError, } from '@spartacus/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@spartacus/core";
export class OccCheckoutPaymentTypeAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    getPaymentTypes() {
        return this.http
            .get(this.getPaymentTypesEndpoint())
            .pipe(catchError((error) => throwError(normalizeHttpError(error))), backOff({ shouldRetry: isJaloError }), map((paymentTypeList) => paymentTypeList.paymentTypes ?? []), this.converter.pipeableMany(CHECKOUT_PAYMENT_TYPE_NORMALIZER));
    }
    getPaymentTypesEndpoint() {
        return this.occEndpoints.buildUrl('paymentTypes');
    }
    setPaymentType(userId, cartId, paymentType, purchaseOrderNumber) {
        return this.http
            .put(this.getSetCartPaymentTypeEndpoint(userId, cartId, paymentType, purchaseOrderNumber), {})
            .pipe(catchError((error) => throwError(normalizeHttpError(error))), backOff({ shouldRetry: isJaloError }), this.converter.pipeable(CART_NORMALIZER));
    }
    getSetCartPaymentTypeEndpoint(userId, cartId, paymentType, purchaseOrderNumber) {
        const queryParams = { paymentType, purchaseOrderNumber };
        return this.occEndpoints.buildUrl('setCartPaymentType', {
            urlParams: { userId, cartId },
            queryParams,
        });
    }
}
OccCheckoutPaymentTypeAdapter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: OccCheckoutPaymentTypeAdapter, deps: [{ token: i1.HttpClient }, { token: i2.OccEndpointsService }, { token: i2.ConverterService }], target: i0.ɵɵFactoryTarget.Injectable });
OccCheckoutPaymentTypeAdapter.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: OccCheckoutPaymentTypeAdapter });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: OccCheckoutPaymentTypeAdapter, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.OccEndpointsService }, { type: i2.ConverterService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNoZWNrb3V0LXBheW1lbnQtdHlwZS5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL2NoZWNrb3V0L2IyYi9vY2MvYWRhcHRlcnMvb2NjLWNoZWNrb3V0LXBheW1lbnQtdHlwZS5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFRLGVBQWUsRUFBZSxNQUFNLDJCQUEyQixDQUFDO0FBQy9FLE9BQU8sRUFFTCxnQ0FBZ0MsR0FDakMsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QyxPQUFPLEVBQ0wsT0FBTyxFQUVQLFdBQVcsRUFDWCxrQkFBa0IsR0FHbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFHakQsTUFBTSxPQUFPLDZCQUE2QjtJQUd4QyxZQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7SUFFSixlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBc0IsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7YUFDeEQsSUFBSSxDQUNILFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDNUQsT0FBTyxDQUFDLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQ3JDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsZUFBZSxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUMsRUFDNUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsZ0NBQWdDLENBQUMsQ0FDOUQsQ0FBQztJQUNOLENBQUM7SUFFUyx1QkFBdUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsY0FBYyxDQUNaLE1BQWMsRUFDZCxNQUFjLEVBQ2QsV0FBbUIsRUFDbkIsbUJBQTRCO1FBRTVCLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQ0YsSUFBSSxDQUFDLDZCQUE2QixDQUNoQyxNQUFNLEVBQ04sTUFBTSxFQUNOLFdBQVcsRUFDWCxtQkFBbUIsQ0FDcEIsRUFDRCxFQUFFLENBQ0g7YUFDQSxJQUFJLENBQ0gsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUM1RCxPQUFPLENBQUMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQ3pDLENBQUM7SUFDTixDQUFDO0lBRVMsNkJBQTZCLENBQ3JDLE1BQWMsRUFDZCxNQUFjLEVBQ2QsV0FBbUIsRUFDbkIsbUJBQTRCO1FBRTVCLE1BQU0sV0FBVyxHQUFHLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLENBQUM7UUFDekQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtZQUN0RCxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO1lBQzdCLFdBQVc7U0FDWixDQUFDLENBQUM7SUFDTCxDQUFDOzswSEExRFUsNkJBQTZCOzhIQUE3Qiw2QkFBNkI7MkZBQTdCLDZCQUE2QjtrQkFEekMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0LCBDQVJUX05PUk1BTElaRVIsIFBheW1lbnRUeXBlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jYXJ0L2Jhc2Uvcm9vdCc7XG5pbXBvcnQge1xuICBDaGVja291dFBheW1lbnRUeXBlQWRhcHRlcixcbiAgQ0hFQ0tPVVRfUEFZTUVOVF9UWVBFX05PUk1BTElaRVIsXG59IGZyb20gJ0BzcGFydGFjdXMvY2hlY2tvdXQvYjJiL2NvcmUnO1xuaW1wb3J0IHtcbiAgYmFja09mZixcbiAgQ29udmVydGVyU2VydmljZSxcbiAgaXNKYWxvRXJyb3IsXG4gIG5vcm1hbGl6ZUh0dHBFcnJvcixcbiAgT2NjLFxuICBPY2NFbmRwb2ludHNTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ2hlY2tvdXRQYXltZW50VHlwZUFkYXB0ZXJcbiAgaW1wbGVtZW50cyBDaGVja291dFBheW1lbnRUeXBlQWRhcHRlclxue1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIGdldFBheW1lbnRUeXBlcygpOiBPYnNlcnZhYmxlPFBheW1lbnRUeXBlW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5QYXltZW50VHlwZUxpc3Q+KHRoaXMuZ2V0UGF5bWVudFR5cGVzRW5kcG9pbnQoKSlcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4gdGhyb3dFcnJvcihub3JtYWxpemVIdHRwRXJyb3IoZXJyb3IpKSksXG4gICAgICAgIGJhY2tPZmYoeyBzaG91bGRSZXRyeTogaXNKYWxvRXJyb3IgfSksXG4gICAgICAgIG1hcCgocGF5bWVudFR5cGVMaXN0KSA9PiBwYXltZW50VHlwZUxpc3QucGF5bWVudFR5cGVzID8/IFtdKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KENIRUNLT1VUX1BBWU1FTlRfVFlQRV9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRQYXltZW50VHlwZXNFbmRwb2ludCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5idWlsZFVybCgncGF5bWVudFR5cGVzJyk7XG4gIH1cblxuICBzZXRQYXltZW50VHlwZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwYXltZW50VHlwZTogc3RyaW5nLFxuICAgIHB1cmNoYXNlT3JkZXJOdW1iZXI/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnB1dChcbiAgICAgICAgdGhpcy5nZXRTZXRDYXJ0UGF5bWVudFR5cGVFbmRwb2ludChcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgY2FydElkLFxuICAgICAgICAgIHBheW1lbnRUeXBlLFxuICAgICAgICAgIHB1cmNoYXNlT3JkZXJOdW1iZXJcbiAgICAgICAgKSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4gdGhyb3dFcnJvcihub3JtYWxpemVIdHRwRXJyb3IoZXJyb3IpKSksXG4gICAgICAgIGJhY2tPZmYoeyBzaG91bGRSZXRyeTogaXNKYWxvRXJyb3IgfSksXG4gICAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlKENBUlRfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U2V0Q2FydFBheW1lbnRUeXBlRW5kcG9pbnQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgcGF5bWVudFR5cGU6IHN0cmluZyxcbiAgICBwdXJjaGFzZU9yZGVyTnVtYmVyPzogc3RyaW5nXG4gICk6IHN0cmluZyB7XG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSB7IHBheW1lbnRUeXBlLCBwdXJjaGFzZU9yZGVyTnVtYmVyIH07XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmJ1aWxkVXJsKCdzZXRDYXJ0UGF5bWVudFR5cGUnLCB7XG4gICAgICB1cmxQYXJhbXM6IHsgdXNlcklkLCBjYXJ0SWQgfSxcbiAgICAgIHF1ZXJ5UGFyYW1zLFxuICAgIH0pO1xuICB9XG59XG4iXX0=