/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../my-coupons.component.service";
import * as i2 from "../../../../layout/index";
import * as i3 from "@angular/common";
import * as i4 from "@spartacus/core";
export class CouponCardComponent {
    constructor(myCouponsComponentService, launchDialogService, vcr) {
        this.myCouponsComponentService = myCouponsComponentService;
        this.launchDialogService = launchDialogService;
        this.vcr = vcr;
        this.notificationChanged = new EventEmitter();
    }
    onSubscriptionChange() {
        this.notificationChanged.emit({
            couponId: this.coupon.couponId ?? '',
            notification: !this.coupon.notificationOn,
        });
    }
    readMore() {
        const dialog = this.launchDialogService.openDialog("COUPON" /* LAUNCH_CALLER.COUPON */, this.element, this.vcr, { coupon: this.coupon });
        if (dialog) {
            dialog.pipe(take(1)).subscribe();
        }
    }
    findProducts() {
        this.myCouponsComponentService.launchSearchPage(this.coupon);
    }
}
CouponCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: CouponCardComponent, deps: [{ token: i1.MyCouponsComponentService }, { token: i2.LaunchDialogService }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component });
CouponCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: CouponCardComponent, selector: "cx-coupon-card", inputs: { coupon: "coupon", couponSubscriptionLoading$: "couponSubscriptionLoading$" }, outputs: { notificationChanged: "notificationChanged" }, viewQueries: [{ propertyName: "element", first: true, predicate: ["element"], descendants: true }], ngImport: i0, template: "<div class=\"card\">\n  <div class=\"card-body cx-card-body\">\n    <div class=\"cx-coupon-data\">\n      <div class=\"cx-coupon-card-row top\">\n        <div class=\"cx-coupon-card-head\">\n          <span class=\"card-label-bold cx-coupon-card-id\">{{\n            coupon?.couponId\n          }}</span>\n          <span>: {{ coupon?.name }}</span>\n        </div>\n\n        <div class=\"cx-coupon-status {{ coupon?.status | lowercase }}\">\n          {{ 'myCoupons.' + coupon?.status | cxTranslate }}\n        </div>\n      </div>\n\n      <div class=\"cx-coupon-card-date\">\n        <p>{{ 'myCoupons.effectiveTitle' | cxTranslate }}</p>\n        <div class=\"cx-coupon-date\">\n          <div class=\"cx-coupon-date-start\">\n            {{ coupon?.startDate | cxDate: 'medium' }} -&nbsp;\n          </div>\n          <div class=\"cx-coupon-date-end\">\n            {{ coupon?.endDate | cxDate: 'medium' }}\n          </div>\n        </div>\n      </div>\n\n      <a (click)=\"readMore()\" class=\"cx-card-read-more\">{{\n        'myCoupons.readMore' | cxTranslate\n      }}</a>\n\n      <div class=\"cx-coupon-card-row bottom\">\n        <div class=\"cx-coupon-notification form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              [checked]=\"coupon?.notificationOn\"\n              [class.disabled]=\"couponSubscriptionLoading$ | async\"\n              [disabled]=\"couponSubscriptionLoading$ | async\"\n              (change)=\"onSubscriptionChange()\"\n            />\n            <span class=\"form-check-label\">\n              {{ 'myCoupons.notification' | cxTranslate }}\n            </span>\n          </label>\n        </div>\n\n        <div class=\"cx-coupon-find-product col-lg-6 col-md-12 col-sm-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"findProducts()\">\n            {{ 'myCoupons.findProducts' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", dependencies: [{ kind: "pipe", type: i3.AsyncPipe, name: "async" }, { kind: "pipe", type: i3.LowerCasePipe, name: "lowercase" }, { kind: "pipe", type: i4.TranslatePipe, name: "cxTranslate" }, { kind: "pipe", type: i4.CxDatePipe, name: "cxDate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: CouponCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-coupon-card', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"card\">\n  <div class=\"card-body cx-card-body\">\n    <div class=\"cx-coupon-data\">\n      <div class=\"cx-coupon-card-row top\">\n        <div class=\"cx-coupon-card-head\">\n          <span class=\"card-label-bold cx-coupon-card-id\">{{\n            coupon?.couponId\n          }}</span>\n          <span>: {{ coupon?.name }}</span>\n        </div>\n\n        <div class=\"cx-coupon-status {{ coupon?.status | lowercase }}\">\n          {{ 'myCoupons.' + coupon?.status | cxTranslate }}\n        </div>\n      </div>\n\n      <div class=\"cx-coupon-card-date\">\n        <p>{{ 'myCoupons.effectiveTitle' | cxTranslate }}</p>\n        <div class=\"cx-coupon-date\">\n          <div class=\"cx-coupon-date-start\">\n            {{ coupon?.startDate | cxDate: 'medium' }} -&nbsp;\n          </div>\n          <div class=\"cx-coupon-date-end\">\n            {{ coupon?.endDate | cxDate: 'medium' }}\n          </div>\n        </div>\n      </div>\n\n      <a (click)=\"readMore()\" class=\"cx-card-read-more\">{{\n        'myCoupons.readMore' | cxTranslate\n      }}</a>\n\n      <div class=\"cx-coupon-card-row bottom\">\n        <div class=\"cx-coupon-notification form-check\">\n          <label>\n            <input\n              type=\"checkbox\"\n              class=\"form-check-input\"\n              [checked]=\"coupon?.notificationOn\"\n              [class.disabled]=\"couponSubscriptionLoading$ | async\"\n              [disabled]=\"couponSubscriptionLoading$ | async\"\n              (change)=\"onSubscriptionChange()\"\n            />\n            <span class=\"form-check-label\">\n              {{ 'myCoupons.notification' | cxTranslate }}\n            </span>\n          </label>\n        </div>\n\n        <div class=\"cx-coupon-find-product col-lg-6 col-md-12 col-sm-6\">\n          <button class=\"btn btn-block btn-action\" (click)=\"findProducts()\">\n            {{ 'myCoupons.findProducts' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MyCouponsComponentService }, { type: i2.LaunchDialogService }, { type: i0.ViewContainerRef }]; }, propDecorators: { coupon: [{
                type: Input
            }], couponSubscriptionLoading$: [{
                type: Input
            }], notificationChanged: [{
                type: Output
            }], element: [{
                type: ViewChild,
                args: ['element']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9jbXMtY29tcG9uZW50cy9teWFjY291bnQvbXktY291cG9ucy9jb3Vwb24tY2FyZC9jb3Vwb24tY2FyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL2Ntcy1jb21wb25lbnRzL215YWNjb3VudC9teS1jb3Vwb25zL2NvdXBvbi1jYXJkL2NvdXBvbi1jYXJkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFTdEMsTUFBTSxPQUFPLG1CQUFtQjtJQVk5QixZQUNZLHlCQUFvRCxFQUNwRCxtQkFBd0MsRUFDeEMsR0FBcUI7UUFGckIsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUNwRCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBVmpDLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUdsQyxDQUFDO0lBUUYsQ0FBQztJQUVKLG9CQUFvQjtRQUNsQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1lBQzVCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxFQUFFO1lBQ3BDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYztTQUMxQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLHNDQUVoRCxJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxHQUFHLEVBQ1IsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUN4QixDQUFDO1FBRUYsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMseUJBQXlCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUM7O2dIQXhDVSxtQkFBbUI7b0dBQW5CLG1CQUFtQiwyU0MzQmhDLDYrREEwREE7MkZEL0JhLG1CQUFtQjtrQkFML0IsU0FBUzsrQkFDRSxnQkFBZ0IsbUJBRVQsdUJBQXVCLENBQUMsTUFBTTtpTEFHdEMsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLDBCQUEwQjtzQkFBbEMsS0FBSztnQkFHTixtQkFBbUI7c0JBRGxCLE1BQU07Z0JBTWUsT0FBTztzQkFBNUIsU0FBUzt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb3Vwb24gfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExhdW5jaERpYWxvZ1NlcnZpY2UsIExBVU5DSF9DQUxMRVIgfSBmcm9tICcuLi8uLi8uLi8uLi9sYXlvdXQvaW5kZXgnO1xuaW1wb3J0IHsgTXlDb3Vwb25zQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL215LWNvdXBvbnMuY29tcG9uZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jb3Vwb24tY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb3Vwb24tY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDb3Vwb25DYXJkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY291cG9uOiBDdXN0b21lckNvdXBvbjtcbiAgQElucHV0KCkgY291cG9uU3Vic2NyaXB0aW9uTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgQE91dHB1dCgpXG4gIG5vdGlmaWNhdGlvbkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBjb3Vwb25JZDogc3RyaW5nO1xuICAgIG5vdGlmaWNhdGlvbjogYm9vbGVhbjtcbiAgfT4oKTtcblxuICBAVmlld0NoaWxkKCdlbGVtZW50JykgZWxlbWVudDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgbXlDb3Vwb25zQ29tcG9uZW50U2VydmljZTogTXlDb3Vwb25zQ29tcG9uZW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbGF1bmNoRGlhbG9nU2VydmljZTogTGF1bmNoRGlhbG9nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdmNyOiBWaWV3Q29udGFpbmVyUmVmXG4gICkge31cblxuICBvblN1YnNjcmlwdGlvbkNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbkNoYW5nZWQuZW1pdCh7XG4gICAgICBjb3Vwb25JZDogdGhpcy5jb3Vwb24uY291cG9uSWQgPz8gJycsXG4gICAgICBub3RpZmljYXRpb246ICF0aGlzLmNvdXBvbi5ub3RpZmljYXRpb25PbixcbiAgICB9KTtcbiAgfVxuXG4gIHJlYWRNb3JlKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IHRoaXMubGF1bmNoRGlhbG9nU2VydmljZS5vcGVuRGlhbG9nKFxuICAgICAgTEFVTkNIX0NBTExFUi5DT1VQT04sXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLnZjcixcbiAgICAgIHsgY291cG9uOiB0aGlzLmNvdXBvbiB9XG4gICAgKTtcblxuICAgIGlmIChkaWFsb2cpIHtcbiAgICAgIGRpYWxvZy5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZpbmRQcm9kdWN0cygpOiB2b2lkIHtcbiAgICB0aGlzLm15Q291cG9uc0NvbXBvbmVudFNlcnZpY2UubGF1bmNoU2VhcmNoUGFnZSh0aGlzLmNvdXBvbik7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgY3gtY2FyZC1ib2R5XCI+XG4gICAgPGRpdiBjbGFzcz1cImN4LWNvdXBvbi1kYXRhXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3gtY291cG9uLWNhcmQtcm93IHRvcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3gtY291cG9uLWNhcmQtaGVhZFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZC1sYWJlbC1ib2xkIGN4LWNvdXBvbi1jYXJkLWlkXCI+e3tcbiAgICAgICAgICAgIGNvdXBvbj8uY291cG9uSWRcbiAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj46IHt7IGNvdXBvbj8ubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN4LWNvdXBvbi1zdGF0dXMge3sgY291cG9uPy5zdGF0dXMgfCBsb3dlcmNhc2UgfX1cIj5cbiAgICAgICAgICB7eyAnbXlDb3Vwb25zLicgKyBjb3Vwb24/LnN0YXR1cyB8IGN4VHJhbnNsYXRlIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjeC1jb3Vwb24tY2FyZC1kYXRlXCI+XG4gICAgICAgIDxwPnt7ICdteUNvdXBvbnMuZWZmZWN0aXZlVGl0bGUnIHwgY3hUcmFuc2xhdGUgfX08L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjeC1jb3Vwb24tZGF0ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjeC1jb3Vwb24tZGF0ZS1zdGFydFwiPlxuICAgICAgICAgICAge3sgY291cG9uPy5zdGFydERhdGUgfCBjeERhdGU6ICdtZWRpdW0nIH19IC0mbmJzcDtcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3gtY291cG9uLWRhdGUtZW5kXCI+XG4gICAgICAgICAgICB7eyBjb3Vwb24/LmVuZERhdGUgfCBjeERhdGU6ICdtZWRpdW0nIH19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxhIChjbGljayk9XCJyZWFkTW9yZSgpXCIgY2xhc3M9XCJjeC1jYXJkLXJlYWQtbW9yZVwiPnt7XG4gICAgICAgICdteUNvdXBvbnMucmVhZE1vcmUnIHwgY3hUcmFuc2xhdGVcbiAgICAgIH19PC9hPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY3gtY291cG9uLWNhcmQtcm93IGJvdHRvbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3gtY291cG9uLW5vdGlmaWNhdGlvbiBmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgIFtjaGVja2VkXT1cImNvdXBvbj8ubm90aWZpY2F0aW9uT25cIlxuICAgICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiY291cG9uU3Vic2NyaXB0aW9uTG9hZGluZyQgfCBhc3luY1wiXG4gICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjb3Vwb25TdWJzY3JpcHRpb25Mb2FkaW5nJCB8IGFzeW5jXCJcbiAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvblN1YnNjcmlwdGlvbkNoYW5nZSgpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAge3sgJ215Q291cG9ucy5ub3RpZmljYXRpb24nIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3gtY291cG9uLWZpbmQtcHJvZHVjdCBjb2wtbGctNiBjb2wtbWQtMTIgY29sLXNtLTZcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tYWN0aW9uXCIgKGNsaWNrKT1cImZpbmRQcm9kdWN0cygpXCI+XG4gICAgICAgICAgICB7eyAnbXlDb3Vwb25zLmZpbmRQcm9kdWN0cycgfCBjeFRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19