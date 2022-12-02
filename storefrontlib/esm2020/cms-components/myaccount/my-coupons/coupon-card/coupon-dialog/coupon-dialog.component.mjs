/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component, HostListener, } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/index';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../layout/index";
import * as i2 from "../../../../misc/icon/icon.component";
import * as i3 from "../../../../../layout/a11y/keyboard-focus/focus.directive";
import * as i4 from "@angular/common";
import * as i5 from "@spartacus/core";
export class CouponDialogComponent {
    constructor(launchDialogService, el) {
        this.launchDialogService = launchDialogService;
        this.el = el;
        this.subscription = new Subscription();
        this.iconTypes = ICON_TYPE;
        this.focusConfig = {
            trap: true,
            block: true,
            autofocus: 'button',
            focusOnEscape: true,
        };
    }
    handleClick(event) {
        if (event.target.tagName === this.el.nativeElement.tagName) {
            this.close('Cross click');
        }
    }
    ngOnInit() {
        this.subscription.add(this.launchDialogService.data$.subscribe((data) => {
            this.coupon = data.coupon;
        }));
    }
    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
    close(reason) {
        this.launchDialogService.closeDialog(reason);
    }
}
CouponDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: CouponDialogComponent, deps: [{ token: i1.LaunchDialogService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
CouponDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: CouponDialogComponent, selector: "cx-coupon-dialog", host: { listeners: { "click": "handleClick($event)" } }, ngImport: i0, template: "<div\n  class=\"cx-coupon-dialog\"\n  [cxFocus]=\"focusConfig\"\n  (esc)=\"close('Escape clicked')\"\n>\n  <div class=\"cx-coupon-container\">\n    <!-- Modal Header -->\n\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'myCoupons.dialogTitle' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        [attr.aria-label]=\"'common.close' | cxTranslate\"\n        (click)=\"close('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"cx-dialog-item col-sm-12 col-md-12\">\n          <div class=\"cx-coupon-card-head\">\n            <span class=\"card-label-bold cx-coupon-card-id\">{{\n              coupon?.couponId\n            }}</span>\n            <span>: {{ coupon?.name }}</span>\n          </div>\n          <div class=\"cx-coupon-description\">{{ coupon?.description }}</div>\n\n          <div class=\"cx-coupon-dialog-date\">\n            <p>{{ 'myCoupons.effectiveTitle' | cxTranslate }}</p>\n            <div class=\"cx-coupon-date\">\n              {{ coupon?.startDate | cxDate: 'medium' }} -\n              {{ coupon?.endDate | cxDate: 'medium' }}\n            </div>\n          </div>\n\n          <div class=\"cx-coupon-dialog-status\">\n            <p>{{ 'myCoupons.status' | cxTranslate }}</p>\n            <div class=\"cx-coupon-status {{ coupon?.status | lowercase }}\">\n              {{ 'myCoupons.' + coupon?.status | cxTranslate }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", dependencies: [{ kind: "component", type: i2.IconComponent, selector: "cx-icon,[cxIcon]", inputs: ["cxIcon", "type"] }, { kind: "directive", type: i3.FocusDirective, selector: "[cxFocus]", inputs: ["cxFocus"] }, { kind: "pipe", type: i4.LowerCasePipe, name: "lowercase" }, { kind: "pipe", type: i5.TranslatePipe, name: "cxTranslate" }, { kind: "pipe", type: i5.CxDatePipe, name: "cxDate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: CouponDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-coupon-dialog', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  class=\"cx-coupon-dialog\"\n  [cxFocus]=\"focusConfig\"\n  (esc)=\"close('Escape clicked')\"\n>\n  <div class=\"cx-coupon-container\">\n    <!-- Modal Header -->\n\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'myCoupons.dialogTitle' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        [attr.aria-label]=\"'common.close' | cxTranslate\"\n        (click)=\"close('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"cx-dialog-item col-sm-12 col-md-12\">\n          <div class=\"cx-coupon-card-head\">\n            <span class=\"card-label-bold cx-coupon-card-id\">{{\n              coupon?.couponId\n            }}</span>\n            <span>: {{ coupon?.name }}</span>\n          </div>\n          <div class=\"cx-coupon-description\">{{ coupon?.description }}</div>\n\n          <div class=\"cx-coupon-dialog-date\">\n            <p>{{ 'myCoupons.effectiveTitle' | cxTranslate }}</p>\n            <div class=\"cx-coupon-date\">\n              {{ coupon?.startDate | cxDate: 'medium' }} -\n              {{ coupon?.endDate | cxDate: 'medium' }}\n            </div>\n          </div>\n\n          <div class=\"cx-coupon-dialog-status\">\n            <p>{{ 'myCoupons.status' | cxTranslate }}</p>\n            <div class=\"cx-coupon-status {{ coupon?.status | lowercase }}\">\n              {{ 'myCoupons.' + coupon?.status | cxTranslate }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.LaunchDialogService }, { type: i0.ElementRef }]; }, propDecorators: { handleClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cG9uLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL2Ntcy1jb21wb25lbnRzL215YWNjb3VudC9teS1jb3Vwb25zL2NvdXBvbi1jYXJkL2NvdXBvbi1kaWFsb2cvY291cG9uLWRpYWxvZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL2Ntcy1jb21wb25lbnRzL215YWNjb3VudC9teS1jb3Vwb25zL2NvdXBvbi1jYXJkL2NvdXBvbi1kaWFsb2cvY291cG9uLWRpYWxvZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsWUFBWSxHQUdiLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7Ozs7O0FBUTFFLE1BQU0sT0FBTyxxQkFBcUI7SUFtQmhDLFlBQ1ksbUJBQXdDLEVBQ3hDLEVBQWM7UUFEZCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFwQmxCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQyxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBR3RCLGdCQUFXLEdBQWdCO1lBQ3pCLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLElBQUk7WUFDWCxTQUFTLEVBQUUsUUFBUTtZQUNuQixhQUFhLEVBQUUsSUFBSTtTQUNwQixDQUFDO0lBWUMsQ0FBQztJQVRKLFdBQVcsQ0FBQyxLQUFjO1FBQ3hCLElBQUssS0FBSyxDQUFDLE1BQWMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFO1lBQ25FLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBT0QsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBWTtRQUNoQixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2tIQXRDVSxxQkFBcUI7c0dBQXJCLHFCQUFxQixpSEN4QmxDLHF4REFzREE7MkZEOUJhLHFCQUFxQjtrQkFMakMsU0FBUzsrQkFDRSxrQkFBa0IsbUJBRVgsdUJBQXVCLENBQUMsTUFBTTttSUFlL0MsV0FBVztzQkFEVixZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb3Vwb24gfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgRm9jdXNDb25maWcsIExhdW5jaERpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9sYXlvdXQvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jb3Vwb24tZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvdXBvbi1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ291cG9uRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuICBjb3Vwb246IEN1c3RvbWVyQ291cG9uO1xuXG4gIGZvY3VzQ29uZmlnOiBGb2N1c0NvbmZpZyA9IHtcbiAgICB0cmFwOiB0cnVlLFxuICAgIGJsb2NrOiB0cnVlLFxuICAgIGF1dG9mb2N1czogJ2J1dHRvbicsXG4gICAgZm9jdXNPbkVzY2FwZTogdHJ1ZSxcbiAgfTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUNsaWNrKGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKChldmVudC50YXJnZXQgYXMgYW55KS50YWdOYW1lID09PSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbG9zZSgnQ3Jvc3MgY2xpY2snKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgbGF1bmNoRGlhbG9nU2VydmljZTogTGF1bmNoRGlhbG9nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMubGF1bmNoRGlhbG9nU2VydmljZS5kYXRhJC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5jb3Vwb24gPSBkYXRhLmNvdXBvbjtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgY2xvc2UocmVhc29uPzogYW55KTogdm9pZCB7XG4gICAgdGhpcy5sYXVuY2hEaWFsb2dTZXJ2aWNlLmNsb3NlRGlhbG9nKHJlYXNvbik7XG4gIH1cbn1cbiIsIjxkaXZcbiAgY2xhc3M9XCJjeC1jb3Vwb24tZGlhbG9nXCJcbiAgW2N4Rm9jdXNdPVwiZm9jdXNDb25maWdcIlxuICAoZXNjKT1cImNsb3NlKCdFc2NhcGUgY2xpY2tlZCcpXCJcbj5cbiAgPGRpdiBjbGFzcz1cImN4LWNvdXBvbi1jb250YWluZXJcIj5cbiAgICA8IS0tIE1vZGFsIEhlYWRlciAtLT5cblxuICAgIDxkaXYgY2xhc3M9XCJjeC1kaWFsb2ctaGVhZGVyIG1vZGFsLWhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImN4LWRpYWxvZy10aXRsZSBtb2RhbC10aXRsZVwiPlxuICAgICAgICB7eyAnbXlDb3Vwb25zLmRpYWxvZ1RpdGxlJyB8IGN4VHJhbnNsYXRlIH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzPVwiY2xvc2VcIlxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIidjb21tb24uY2xvc2UnIHwgY3hUcmFuc2xhdGVcIlxuICAgICAgICAoY2xpY2spPVwiY2xvc2UoJ0Nyb3NzIGNsaWNrJylcIlxuICAgICAgPlxuICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICA8Y3gtaWNvbiBbdHlwZV09XCJpY29uVHlwZXMuQ0xPU0VcIj48L2N4LWljb24+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDwhLS0gTW9kYWwgQm9keSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiY3gtZGlhbG9nLWJvZHkgbW9kYWwtYm9keVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImN4LWRpYWxvZy1yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN4LWRpYWxvZy1pdGVtIGNvbC1zbS0xMiBjb2wtbWQtMTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3gtY291cG9uLWNhcmQtaGVhZFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJkLWxhYmVsLWJvbGQgY3gtY291cG9uLWNhcmQtaWRcIj57e1xuICAgICAgICAgICAgICBjb3Vwb24/LmNvdXBvbklkXG4gICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPjoge3sgY291cG9uPy5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjeC1jb3Vwb24tZGVzY3JpcHRpb25cIj57eyBjb3Vwb24/LmRlc2NyaXB0aW9uIH19PC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3gtY291cG9uLWRpYWxvZy1kYXRlXCI+XG4gICAgICAgICAgICA8cD57eyAnbXlDb3Vwb25zLmVmZmVjdGl2ZVRpdGxlJyB8IGN4VHJhbnNsYXRlIH19PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN4LWNvdXBvbi1kYXRlXCI+XG4gICAgICAgICAgICAgIHt7IGNvdXBvbj8uc3RhcnREYXRlIHwgY3hEYXRlOiAnbWVkaXVtJyB9fSAtXG4gICAgICAgICAgICAgIHt7IGNvdXBvbj8uZW5kRGF0ZSB8IGN4RGF0ZTogJ21lZGl1bScgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImN4LWNvdXBvbi1kaWFsb2ctc3RhdHVzXCI+XG4gICAgICAgICAgICA8cD57eyAnbXlDb3Vwb25zLnN0YXR1cycgfCBjeFRyYW5zbGF0ZSB9fTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjeC1jb3Vwb24tc3RhdHVzIHt7IGNvdXBvbj8uc3RhdHVzIHwgbG93ZXJjYXNlIH19XCI+XG4gICAgICAgICAgICAgIHt7ICdteUNvdXBvbnMuJyArIGNvdXBvbj8uc3RhdHVzIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19