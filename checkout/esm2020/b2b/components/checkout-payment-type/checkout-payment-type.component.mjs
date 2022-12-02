/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component, ViewChild, } from '@angular/core';
import { B2BPaymentTypeEnum, } from '@spartacus/checkout/b2b/root';
import { getLastValueSync, isNotUndefined } from '@spartacus/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/checkout/b2b/root";
import * as i2 from "@spartacus/checkout/base/components";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
import * as i5 from "@spartacus/storefront";
import * as i6 from "@spartacus/core";
export class CheckoutPaymentTypeComponent {
    constructor(checkoutPaymentTypeFacade, checkoutStepService, activatedRoute) {
        this.checkoutPaymentTypeFacade = checkoutPaymentTypeFacade;
        this.checkoutStepService = checkoutStepService;
        this.activatedRoute = activatedRoute;
        this.busy$ = new BehaviorSubject(false);
        this.isUpdating$ = combineLatest([
            this.busy$,
            this.checkoutPaymentTypeFacade
                .getSelectedPaymentTypeState()
                .pipe(map((state) => state.loading)),
        ]).pipe(map(([busy, loading]) => busy || loading), distinctUntilChanged());
        this.paymentTypes$ = this.checkoutPaymentTypeFacade.getPaymentTypes();
        this.typeSelected$ = this.checkoutPaymentTypeFacade
            .getSelectedPaymentTypeState()
            .pipe(filter((state) => !state.loading), map((state) => state.data), filter(isNotUndefined), distinctUntilChanged(), tap((selected) => {
            this.typeSelected = selected?.code;
            this.checkoutStepService.resetSteps();
            this.checkoutStepService.disableEnableStep("paymentDetails" /* CheckoutStepType.PAYMENT_DETAILS */, selected?.code === B2BPaymentTypeEnum.ACCOUNT_PAYMENT);
        }));
        this.cartPoNumber$ = this.checkoutPaymentTypeFacade
            .getPurchaseOrderNumberState()
            .pipe(filter((state) => !state.loading), map((state) => state.data), filter(isNotUndefined), distinctUntilChanged());
    }
    changeType(code) {
        this.busy$.next(true);
        this.typeSelected = code;
        this.checkoutPaymentTypeFacade
            .setPaymentType(code, this.poNumberInputElement.nativeElement.value)
            .subscribe({
            complete: () => this.onSuccess(),
            error: () => this.onError(),
        });
    }
    next() {
        if (!this.typeSelected) {
            return;
        }
        const poNumberInput = this.poNumberInputElement.nativeElement.value;
        // if the PO number didn't change
        if (poNumberInput === getLastValueSync(this.cartPoNumber$)) {
            this.checkoutStepService.next(this.activatedRoute);
            return;
        }
        this.busy$.next(true);
        this.checkoutPaymentTypeFacade
            .setPaymentType(this.typeSelected, poNumberInput)
            .subscribe({
            // we don't call onSuccess here, because it can cause a spinner flickering
            complete: () => this.checkoutStepService.next(this.activatedRoute),
            error: () => this.onError(),
        });
    }
    back() {
        this.checkoutStepService.back(this.activatedRoute);
    }
    onSuccess() {
        this.busy$.next(false);
    }
    onError() {
        this.busy$.next(false);
    }
}
CheckoutPaymentTypeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: CheckoutPaymentTypeComponent, deps: [{ token: i1.CheckoutPaymentTypeFacade }, { token: i2.CheckoutStepService }, { token: i3.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
CheckoutPaymentTypeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: CheckoutPaymentTypeComponent, selector: "cx-payment-type", viewQueries: [{ propertyName: "poNumberInputElement", first: true, predicate: ["poNumber"], descendants: true }], ngImport: i0, template: "<h2 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n  {{ 'checkoutB2B.methodOfPayment.paymentType' | cxTranslate }}\n</h2>\n\n<ng-container *ngIf=\"paymentTypes$ | async as paymentTypes\">\n  <ng-container\n    *ngIf=\"\n      !!paymentTypes.length &&\n        (typeSelected$ | async) &&\n        !(isUpdating$ | async);\n      else loading\n    \"\n  >\n    <div role=\"status\" [attr.aria-label]=\"'common.loaded' | cxTranslate\"></div>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-6\">\n        <label>\n          <span class=\"label-content\">{{\n            'checkoutB2B.poNumber' | cxTranslate\n          }}</span>\n          <input\n            #poNumber\n            class=\"form-control\"\n            formControlName=\"poNumber\"\n            type=\"text\"\n            placeholder=\"{{ 'checkoutB2B.placeholder' | cxTranslate }}\"\n            value=\"{{ cartPoNumber$ | async }}\"\n          />\n        </label>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-6\">\n        <label class=\"cx-payment-type-container\">\n          <span class=\"label-content\">{{\n            'paymentTypes.title' | cxTranslate\n          }}</span>\n          <div class=\"form-check\" *ngFor=\"let type of paymentTypes\">\n            <input\n              id=\"paymentType-{{ type.code }}\"\n              class=\"form-check-input\"\n              role=\"radio\"\n              type=\"radio\"\n              aria-checked=\"true\"\n              (change)=\"changeType(type.code)\"\n              [value]=\"type.code\"\n              [checked]=\"type.code === typeSelected\"\n              formControlName=\"paymentType\"\n            />\n            <label\n              class=\"cx-payment-type-label form-check-label form-radio-label\"\n              for=\"paymentType-{{ type.code }}\"\n            >\n              <div class=\"cx-payment-type\">\n                {{ 'paymentTypes.paymentType_' + type?.code | cxTranslate }}\n              </div>\n            </label>\n          </div>\n        </label>\n      </div>\n    </div>\n\n    <div class=\"cx-checkout-btns row\">\n      <div class=\"col-md-12 col-lg-6\">\n        <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n          {{ 'checkout.backToCart' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-12 col-lg-6\">\n        <button class=\"btn btn-block btn-primary\" (click)=\"next()\">\n          {{ 'common.continue' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i5.SpinnerComponent, selector: "cx-spinner" }, { kind: "pipe", type: i4.AsyncPipe, name: "async" }, { kind: "pipe", type: i6.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: CheckoutPaymentTypeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-payment-type', changeDetection: ChangeDetectionStrategy.OnPush, template: "<h2 class=\"cx-checkout-title d-none d-lg-block d-xl-block\">\n  {{ 'checkoutB2B.methodOfPayment.paymentType' | cxTranslate }}\n</h2>\n\n<ng-container *ngIf=\"paymentTypes$ | async as paymentTypes\">\n  <ng-container\n    *ngIf=\"\n      !!paymentTypes.length &&\n        (typeSelected$ | async) &&\n        !(isUpdating$ | async);\n      else loading\n    \"\n  >\n    <div role=\"status\" [attr.aria-label]=\"'common.loaded' | cxTranslate\"></div>\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-6\">\n        <label>\n          <span class=\"label-content\">{{\n            'checkoutB2B.poNumber' | cxTranslate\n          }}</span>\n          <input\n            #poNumber\n            class=\"form-control\"\n            formControlName=\"poNumber\"\n            type=\"text\"\n            placeholder=\"{{ 'checkoutB2B.placeholder' | cxTranslate }}\"\n            value=\"{{ cartPoNumber$ | async }}\"\n          />\n        </label>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12 col-lg-6\">\n        <label class=\"cx-payment-type-container\">\n          <span class=\"label-content\">{{\n            'paymentTypes.title' | cxTranslate\n          }}</span>\n          <div class=\"form-check\" *ngFor=\"let type of paymentTypes\">\n            <input\n              id=\"paymentType-{{ type.code }}\"\n              class=\"form-check-input\"\n              role=\"radio\"\n              type=\"radio\"\n              aria-checked=\"true\"\n              (change)=\"changeType(type.code)\"\n              [value]=\"type.code\"\n              [checked]=\"type.code === typeSelected\"\n              formControlName=\"paymentType\"\n            />\n            <label\n              class=\"cx-payment-type-label form-check-label form-radio-label\"\n              for=\"paymentType-{{ type.code }}\"\n            >\n              <div class=\"cx-payment-type\">\n                {{ 'paymentTypes.paymentType_' + type?.code | cxTranslate }}\n              </div>\n            </label>\n          </div>\n        </label>\n      </div>\n    </div>\n\n    <div class=\"cx-checkout-btns row\">\n      <div class=\"col-md-12 col-lg-6\">\n        <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n          {{ 'checkout.backToCart' | cxTranslate }}\n        </button>\n      </div>\n      <div class=\"col-md-12 col-lg-6\">\n        <button class=\"btn btn-block btn-primary\" (click)=\"next()\">\n          {{ 'common.continue' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.CheckoutPaymentTypeFacade }, { type: i2.CheckoutStepService }, { type: i3.ActivatedRoute }]; }, propDecorators: { poNumberInputElement: [{
                type: ViewChild,
                args: ['poNumber', { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGF5bWVudC10eXBlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9jaGVja291dC9iMmIvY29tcG9uZW50cy9jaGVja291dC1wYXltZW50LXR5cGUvY2hlY2tvdXQtcGF5bWVudC10eXBlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9jaGVja291dC9iMmIvY29tcG9uZW50cy9jaGVja291dC1wYXltZW50LXR5cGUvY2hlY2tvdXQtcGF5bWVudC10eXBlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUNMLGtCQUFrQixHQUVuQixNQUFNLDhCQUE4QixDQUFDO0FBR3RDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7QUFPeEUsTUFBTSxPQUFPLDRCQUE0QjtJQStDdkMsWUFDWSx5QkFBb0QsRUFDcEQsbUJBQXdDLEVBQ3hDLGNBQThCO1FBRjlCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUE5Q2hDLFVBQUssR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUl0RCxnQkFBVyxHQUFHLGFBQWEsQ0FBQztZQUMxQixJQUFJLENBQUMsS0FB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USxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUNsRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtTQUM1QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFUyxTQUFTO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFUyxPQUFPO1FBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7eUhBakdVLDRCQUE0Qjs2R0FBNUIsNEJBQTRCLHlLQzdCekMsa3BGQW1GQTsyRkR0RGEsNEJBQTRCO2tCQUx4QyxTQUFTOytCQUNFLGlCQUFpQixtQkFFVix1QkFBdUIsQ0FBQyxNQUFNOytLQUl2QyxvQkFBb0I7c0JBRDNCLFNBQVM7dUJBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYXltZW50VHlwZSB9IGZyb20gJ0BzcGFydGFjdXMvY2FydC9iYXNlL3Jvb3QnO1xuaW1wb3J0IHtcbiAgQjJCUGF5bWVudFR5cGVFbnVtLFxuICBDaGVja291dFBheW1lbnRUeXBlRmFjYWRlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NoZWNrb3V0L2IyYi9yb290JztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NoZWNrb3V0L2Jhc2UvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDaGVja291dFN0ZXBUeXBlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jaGVja291dC9iYXNlL3Jvb3QnO1xuaW1wb3J0IHsgZ2V0TGFzdFZhbHVlU3luYywgaXNOb3RVbmRlZmluZWQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGF5bWVudC10eXBlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrb3V0LXBheW1lbnQtdHlwZS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dFBheW1lbnRUeXBlQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgncG9OdW1iZXInLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgcHJpdmF0ZSBwb051bWJlcklucHV0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBwcm90ZWN0ZWQgYnVzeSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICB0eXBlU2VsZWN0ZWQ/OiBzdHJpbmc7XG5cbiAgaXNVcGRhdGluZyQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICB0aGlzLmJ1c3kkLFxuICAgIHRoaXMuY2hlY2tvdXRQYXltZW50VHlwZUZhY2FkZVxuICAgICAgLmdldFNlbGVjdGVkUGF5bWVudFR5cGVTdGF0ZSgpXG4gICAgICAucGlwZShtYXAoKHN0YXRlKSA9PiBzdGF0ZS5sb2FkaW5nKSksXG4gIF0pLnBpcGUoXG4gICAgbWFwKChbYnVzeSwgbG9hZGluZ10pID0+IGJ1c3kgfHwgbG9hZGluZyksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICApO1xuXG4gIHBheW1lbnRUeXBlcyQ6IE9ic2VydmFibGU8UGF5bWVudFR5cGVbXT4gPVxuICAgIHRoaXMuY2hlY2tvdXRQYXltZW50VHlwZUZhY2FkZS5nZXRQYXltZW50VHlwZXMoKTtcblxuICB0eXBlU2VsZWN0ZWQkOiBPYnNlcnZhYmxlPFBheW1lbnRUeXBlPiA9IHRoaXMuY2hlY2tvdXRQYXltZW50VHlwZUZhY2FkZVxuICAgIC5nZXRTZWxlY3RlZFBheW1lbnRUeXBlU3RhdGUoKVxuICAgIC5waXBlKFxuICAgICAgZmlsdGVyKChzdGF0ZSkgPT4gIXN0YXRlLmxvYWRpbmcpLFxuICAgICAgbWFwKChzdGF0ZSkgPT4gc3RhdGUuZGF0YSksXG4gICAgICBmaWx0ZXIoaXNOb3RVbmRlZmluZWQpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIHRhcCgoc2VsZWN0ZWQpID0+IHtcbiAgICAgICAgdGhpcy50eXBlU2VsZWN0ZWQgPSBzZWxlY3RlZD8uY29kZTtcbiAgICAgICAgdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLnJlc2V0U3RlcHMoKTtcbiAgICAgICAgdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLmRpc2FibGVFbmFibGVTdGVwKFxuICAgICAgICAgIENoZWNrb3V0U3RlcFR5cGUuUEFZTUVOVF9ERVRBSUxTLFxuICAgICAgICAgIHNlbGVjdGVkPy5jb2RlID09PSBCMkJQYXltZW50VHlwZUVudW0uQUNDT1VOVF9QQVlNRU5UXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgY2FydFBvTnVtYmVyJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5jaGVja291dFBheW1lbnRUeXBlRmFjYWRlXG4gICAgLmdldFB1cmNoYXNlT3JkZXJOdW1iZXJTdGF0ZSgpXG4gICAgLnBpcGUoXG4gICAgICBmaWx0ZXIoKHN0YXRlKSA9PiAhc3RhdGUubG9hZGluZyksXG4gICAgICBtYXAoKHN0YXRlKSA9PiBzdGF0ZS5kYXRhKSxcbiAgICAgIGZpbHRlcihpc05vdFVuZGVmaW5lZCksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRQYXltZW50VHlwZUZhY2FkZTogQ2hlY2tvdXRQYXltZW50VHlwZUZhY2FkZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTdGVwU2VydmljZTogQ2hlY2tvdXRTdGVwU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICkge31cblxuICBjaGFuZ2VUeXBlKGNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYnVzeSQubmV4dCh0cnVlKTtcbiAgICB0aGlzLnR5cGVTZWxlY3RlZCA9IGNvZGU7XG5cbiAgICB0aGlzLmNoZWNrb3V0UGF5bWVudFR5cGVGYWNhZGVcbiAgICAgIC5zZXRQYXltZW50VHlwZShjb2RlLCB0aGlzLnBvTnVtYmVySW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUpXG4gICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHRoaXMub25TdWNjZXNzKCksXG4gICAgICAgIGVycm9yOiAoKSA9PiB0aGlzLm9uRXJyb3IoKSxcbiAgICAgIH0pO1xuICB9XG5cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudHlwZVNlbGVjdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcG9OdW1iZXJJbnB1dCA9IHRoaXMucG9OdW1iZXJJbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgICAvLyBpZiB0aGUgUE8gbnVtYmVyIGRpZG4ndCBjaGFuZ2VcbiAgICBpZiAocG9OdW1iZXJJbnB1dCA9PT0gZ2V0TGFzdFZhbHVlU3luYyh0aGlzLmNhcnRQb051bWJlciQpKSB7XG4gICAgICB0aGlzLmNoZWNrb3V0U3RlcFNlcnZpY2UubmV4dCh0aGlzLmFjdGl2YXRlZFJvdXRlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmJ1c3kkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5jaGVja291dFBheW1lbnRUeXBlRmFjYWRlXG4gICAgICAuc2V0UGF5bWVudFR5cGUodGhpcy50eXBlU2VsZWN0ZWQsIHBvTnVtYmVySW5wdXQpXG4gICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgLy8gd2UgZG9uJ3QgY2FsbCBvblN1Y2Nlc3MgaGVyZSwgYmVjYXVzZSBpdCBjYW4gY2F1c2UgYSBzcGlubmVyIGZsaWNrZXJpbmdcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHRoaXMuY2hlY2tvdXRTdGVwU2VydmljZS5uZXh0KHRoaXMuYWN0aXZhdGVkUm91dGUpLFxuICAgICAgICBlcnJvcjogKCkgPT4gdGhpcy5vbkVycm9yKCksXG4gICAgICB9KTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja291dFN0ZXBTZXJ2aWNlLmJhY2sodGhpcy5hY3RpdmF0ZWRSb3V0ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25TdWNjZXNzKCk6IHZvaWQge1xuICAgIHRoaXMuYnVzeSQubmV4dChmYWxzZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25FcnJvcigpOiB2b2lkIHtcbiAgICB0aGlzLmJ1c3kkLm5leHQoZmFsc2UpO1xuICB9XG59XG4iLCI8aDIgY2xhc3M9XCJjeC1jaGVja291dC10aXRsZSBkLW5vbmUgZC1sZy1ibG9jayBkLXhsLWJsb2NrXCI+XG4gIHt7ICdjaGVja291dEIyQi5tZXRob2RPZlBheW1lbnQucGF5bWVudFR5cGUnIHwgY3hUcmFuc2xhdGUgfX1cbjwvaDI+XG5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJwYXltZW50VHlwZXMkIHwgYXN5bmMgYXMgcGF5bWVudFR5cGVzXCI+XG4gIDxuZy1jb250YWluZXJcbiAgICAqbmdJZj1cIlxuICAgICAgISFwYXltZW50VHlwZXMubGVuZ3RoICYmXG4gICAgICAgICh0eXBlU2VsZWN0ZWQkIHwgYXN5bmMpICYmXG4gICAgICAgICEoaXNVcGRhdGluZyQgfCBhc3luYyk7XG4gICAgICBlbHNlIGxvYWRpbmdcbiAgICBcIlxuICA+XG4gICAgPGRpdiByb2xlPVwic3RhdHVzXCIgW2F0dHIuYXJpYS1sYWJlbF09XCInY29tbW9uLmxvYWRlZCcgfCBjeFRyYW5zbGF0ZVwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgY29sLWxnLTZcIj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwtY29udGVudFwiPnt7XG4gICAgICAgICAgICAnY2hlY2tvdXRCMkIucG9OdW1iZXInIHwgY3hUcmFuc2xhdGVcbiAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICNwb051bWJlclxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicG9OdW1iZXJcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyAnY2hlY2tvdXRCMkIucGxhY2Vob2xkZXInIHwgY3hUcmFuc2xhdGUgfX1cIlxuICAgICAgICAgICAgdmFsdWU9XCJ7eyBjYXJ0UG9OdW1iZXIkIHwgYXN5bmMgfX1cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgY29sLWxnLTZcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3gtcGF5bWVudC10eXBlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwtY29udGVudFwiPnt7XG4gICAgICAgICAgICAncGF5bWVudFR5cGVzLnRpdGxlJyB8IGN4VHJhbnNsYXRlXG4gICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIiAqbmdGb3I9XCJsZXQgdHlwZSBvZiBwYXltZW50VHlwZXNcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD1cInBheW1lbnRUeXBlLXt7IHR5cGUuY29kZSB9fVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgIHJvbGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgIGFyaWEtY2hlY2tlZD1cInRydWVcIlxuICAgICAgICAgICAgICAoY2hhbmdlKT1cImNoYW5nZVR5cGUodHlwZS5jb2RlKVwiXG4gICAgICAgICAgICAgIFt2YWx1ZV09XCJ0eXBlLmNvZGVcIlxuICAgICAgICAgICAgICBbY2hlY2tlZF09XCJ0eXBlLmNvZGUgPT09IHR5cGVTZWxlY3RlZFwiXG4gICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBheW1lbnRUeXBlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgY2xhc3M9XCJjeC1wYXltZW50LXR5cGUtbGFiZWwgZm9ybS1jaGVjay1sYWJlbCBmb3JtLXJhZGlvLWxhYmVsXCJcbiAgICAgICAgICAgICAgZm9yPVwicGF5bWVudFR5cGUte3sgdHlwZS5jb2RlIH19XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN4LXBheW1lbnQtdHlwZVwiPlxuICAgICAgICAgICAgICAgIHt7ICdwYXltZW50VHlwZXMucGF5bWVudFR5cGVfJyArIHR5cGU/LmNvZGUgfCBjeFRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjeC1jaGVja291dC1idG5zIHJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBjb2wtbGctNlwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tYWN0aW9uXCIgKGNsaWNrKT1cImJhY2soKVwiPlxuICAgICAgICAgIHt7ICdjaGVja291dC5iYWNrVG9DYXJ0JyB8IGN4VHJhbnNsYXRlIH19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGNvbC1sZy02XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cIm5leHQoKVwiPlxuICAgICAgICAgIHt7ICdjb21tb24uY29udGludWUnIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICNsb2FkaW5nPlxuICA8ZGl2IGNsYXNzPVwiY3gtc3Bpbm5lclwiPlxuICAgIDxjeC1zcGlubmVyPjwvY3gtc3Bpbm5lcj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuIl19