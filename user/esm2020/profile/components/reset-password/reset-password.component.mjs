/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./reset-password-component.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@spartacus/storefront";
import * as i5 from "@spartacus/core";
export class ResetPasswordComponent {
    constructor(service) {
        this.service = service;
        this.form = this.service.form;
        this.isUpdating$ = this.service.isUpdating$;
        this.token$ = this.service.resetToken$;
    }
    onSubmit(token) {
        this.service.resetPassword(token);
    }
}
ResetPasswordComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResetPasswordComponent, deps: [{ token: i1.ResetPasswordComponentService }], target: i0.ɵɵFactoryTarget.Component });
ResetPasswordComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: ResetPasswordComponent, selector: "cx-reset-password", host: { classAttribute: "user-form" }, ngImport: i0, template: "<cx-spinner class=\"overlay\" *ngIf=\"isUpdating$ | async\"> </cx-spinner>\n\n<form\n  *ngIf=\"token$ | async as token\"\n  (ngSubmit)=\"onSubmit(token)\"\n  [formGroup]=\"form\"\n>\n  <label>\n    <span class=\"label-content\">{{\n      'register.newPassword' | cxTranslate\n    }}</span>\n    <input\n      required=\"true\"\n      class=\"form-control\"\n      type=\"password\"\n      placeholder=\"{{ 'register.password.placeholder' | cxTranslate }}\"\n      formControlName=\"password\"\n      [attr.aria-label]=\"'register.password.placeholder' | cxTranslate\"\n      cxPasswordVisibilitySwitch\n    />\n    <cx-form-errors [control]=\"form.get('password')\"></cx-form-errors>\n  </label>\n\n  <label>\n    <span class=\"label-content\">{{\n      'register.passwordMinRequirements' | cxTranslate\n    }}</span>\n    <input\n      required=\"true\"\n      class=\"form-control\"\n      type=\"password\"\n      placeholder=\"{{ 'register.confirmPassword.placeholder' | cxTranslate }}\"\n      formControlName=\"passwordConfirm\"\n      [attr.aria-label]=\"'register.confirmPassword.placeholder' | cxTranslate\"\n      cxPasswordVisibilitySwitch\n    />\n    <cx-form-errors [control]=\"form.get('passwordConfirm')\"></cx-form-errors>\n  </label>\n\n  <button class=\"btn btn-block btn-primary\" [disabled]=\"form.disabled\">\n    {{ 'register.resetPassword' | cxTranslate }}\n  </button>\n</form>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i4.FormErrorsComponent, selector: "cx-form-errors", inputs: ["prefix", "translationParams", "control"] }, { kind: "component", type: i4.SpinnerComponent, selector: "cx-spinner" }, { kind: "directive", type: i4.PasswordVisibilityToggleDirective, selector: "[cxPasswordVisibilitySwitch][type=\"password\"]" }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "pipe", type: i5.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ResetPasswordComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-reset-password', changeDetection: ChangeDetectionStrategy.OnPush, host: { class: 'user-form' }, template: "<cx-spinner class=\"overlay\" *ngIf=\"isUpdating$ | async\"> </cx-spinner>\n\n<form\n  *ngIf=\"token$ | async as token\"\n  (ngSubmit)=\"onSubmit(token)\"\n  [formGroup]=\"form\"\n>\n  <label>\n    <span class=\"label-content\">{{\n      'register.newPassword' | cxTranslate\n    }}</span>\n    <input\n      required=\"true\"\n      class=\"form-control\"\n      type=\"password\"\n      placeholder=\"{{ 'register.password.placeholder' | cxTranslate }}\"\n      formControlName=\"password\"\n      [attr.aria-label]=\"'register.password.placeholder' | cxTranslate\"\n      cxPasswordVisibilitySwitch\n    />\n    <cx-form-errors [control]=\"form.get('password')\"></cx-form-errors>\n  </label>\n\n  <label>\n    <span class=\"label-content\">{{\n      'register.passwordMinRequirements' | cxTranslate\n    }}</span>\n    <input\n      required=\"true\"\n      class=\"form-control\"\n      type=\"password\"\n      placeholder=\"{{ 'register.confirmPassword.placeholder' | cxTranslate }}\"\n      formControlName=\"passwordConfirm\"\n      [attr.aria-label]=\"'register.confirmPassword.placeholder' | cxTranslate\"\n      cxPasswordVisibilitySwitch\n    />\n    <cx-form-errors [control]=\"form.get('passwordConfirm')\"></cx-form-errors>\n  </label>\n\n  <button class=\"btn btn-block btn-primary\" [disabled]=\"form.disabled\">\n    {{ 'register.resetPassword' | cxTranslate }}\n  </button>\n</form>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ResetPasswordComponentService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL3VzZXIvcHJvZmlsZS9jb21wb25lbnRzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy91c2VyL3Byb2ZpbGUvY29tcG9uZW50cy9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQVduRSxNQUFNLE9BQU8sc0JBQXNCO0lBTWpDLFlBQXNCLE9BQXNDO1FBQXRDLFlBQU8sR0FBUCxPQUFPLENBQStCO1FBTDVELFNBQUksR0FBcUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsZ0JBQVcsR0FBd0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFNUQsV0FBTSxHQUF1QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUVTLENBQUM7SUFFaEUsUUFBUSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7bUhBVlUsc0JBQXNCO3VHQUF0QixzQkFBc0IsZ0dDakJuQyw4M0NBMkNBOzJGRDFCYSxzQkFBc0I7a0JBTmxDLFNBQVM7K0JBQ0UsbUJBQW1CLG1CQUVaLHVCQUF1QixDQUFDLE1BQU0sUUFDekMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVW50eXBlZEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9yZXNldC1wYXNzd29yZC1jb21wb25lbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXJlc2V0LXBhc3N3b3JkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHsgY2xhc3M6ICd1c2VyLWZvcm0nIH0sXG59KVxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRDb21wb25lbnQge1xuICBmb3JtOiBVbnR5cGVkRm9ybUdyb3VwID0gdGhpcy5zZXJ2aWNlLmZvcm07XG4gIGlzVXBkYXRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5zZXJ2aWNlLmlzVXBkYXRpbmckO1xuXG4gIHRva2VuJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5zZXJ2aWNlLnJlc2V0VG9rZW4kO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzZXJ2aWNlOiBSZXNldFBhc3N3b3JkQ29tcG9uZW50U2VydmljZSkge31cblxuICBvblN1Ym1pdCh0b2tlbjogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXJ2aWNlLnJlc2V0UGFzc3dvcmQodG9rZW4pO1xuICB9XG59XG4iLCI8Y3gtc3Bpbm5lciBjbGFzcz1cIm92ZXJsYXlcIiAqbmdJZj1cImlzVXBkYXRpbmckIHwgYXN5bmNcIj4gPC9jeC1zcGlubmVyPlxuXG48Zm9ybVxuICAqbmdJZj1cInRva2VuJCB8IGFzeW5jIGFzIHRva2VuXCJcbiAgKG5nU3VibWl0KT1cIm9uU3VibWl0KHRva2VuKVwiXG4gIFtmb3JtR3JvdXBdPVwiZm9ybVwiXG4+XG4gIDxsYWJlbD5cbiAgICA8c3BhbiBjbGFzcz1cImxhYmVsLWNvbnRlbnRcIj57e1xuICAgICAgJ3JlZ2lzdGVyLm5ld1Bhc3N3b3JkJyB8IGN4VHJhbnNsYXRlXG4gICAgfX08L3NwYW4+XG4gICAgPGlucHV0XG4gICAgICByZXF1aXJlZD1cInRydWVcIlxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgIHBsYWNlaG9sZGVyPVwie3sgJ3JlZ2lzdGVyLnBhc3N3b3JkLnBsYWNlaG9sZGVyJyB8IGN4VHJhbnNsYXRlIH19XCJcbiAgICAgIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCJcbiAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ3JlZ2lzdGVyLnBhc3N3b3JkLnBsYWNlaG9sZGVyJyB8IGN4VHJhbnNsYXRlXCJcbiAgICAgIGN4UGFzc3dvcmRWaXNpYmlsaXR5U3dpdGNoXG4gICAgLz5cbiAgICA8Y3gtZm9ybS1lcnJvcnMgW2NvbnRyb2xdPVwiZm9ybS5nZXQoJ3Bhc3N3b3JkJylcIj48L2N4LWZvcm0tZXJyb3JzPlxuICA8L2xhYmVsPlxuXG4gIDxsYWJlbD5cbiAgICA8c3BhbiBjbGFzcz1cImxhYmVsLWNvbnRlbnRcIj57e1xuICAgICAgJ3JlZ2lzdGVyLnBhc3N3b3JkTWluUmVxdWlyZW1lbnRzJyB8IGN4VHJhbnNsYXRlXG4gICAgfX08L3NwYW4+XG4gICAgPGlucHV0XG4gICAgICByZXF1aXJlZD1cInRydWVcIlxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgIHBsYWNlaG9sZGVyPVwie3sgJ3JlZ2lzdGVyLmNvbmZpcm1QYXNzd29yZC5wbGFjZWhvbGRlcicgfCBjeFRyYW5zbGF0ZSB9fVwiXG4gICAgICBmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZENvbmZpcm1cIlxuICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCIncmVnaXN0ZXIuY29uZmlybVBhc3N3b3JkLnBsYWNlaG9sZGVyJyB8IGN4VHJhbnNsYXRlXCJcbiAgICAgIGN4UGFzc3dvcmRWaXNpYmlsaXR5U3dpdGNoXG4gICAgLz5cbiAgICA8Y3gtZm9ybS1lcnJvcnMgW2NvbnRyb2xdPVwiZm9ybS5nZXQoJ3Bhc3N3b3JkQ29uZmlybScpXCI+PC9jeC1mb3JtLWVycm9ycz5cbiAgPC9sYWJlbD5cblxuICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tcHJpbWFyeVwiIFtkaXNhYmxlZF09XCJmb3JtLmRpc2FibGVkXCI+XG4gICAge3sgJ3JlZ2lzdGVyLnJlc2V0UGFzc3dvcmQnIHwgY3hUcmFuc2xhdGUgfX1cbiAgPC9idXR0b24+XG48L2Zvcm0+XG4iXX0=