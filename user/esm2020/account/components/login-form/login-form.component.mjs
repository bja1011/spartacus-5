/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./login-form-component.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/router";
import * as i5 from "@spartacus/storefront";
import * as i6 from "@spartacus/core";
export class LoginFormComponent {
    constructor(service) {
        this.service = service;
        this.form = this.service.form;
        this.isUpdating$ = this.service.isUpdating$;
        this.style = true;
    }
    onSubmit() {
        this.service.login();
    }
}
LoginFormComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: LoginFormComponent, deps: [{ token: i1.LoginFormComponentService }], target: i0.ɵɵFactoryTarget.Component });
LoginFormComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: LoginFormComponent, selector: "cx-login-form", host: { properties: { "class.user-form": "this.style" } }, ngImport: i0, template: "<cx-spinner class=\"overlay\" *ngIf=\"isUpdating$ | async\"></cx-spinner>\n\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n  <label>\n    <span class=\"label-content\">{{\n      'loginForm.emailAddress.label' | cxTranslate\n    }}</span>\n    <input\n      required=\"true\"\n      type=\"email\"\n      class=\"form-control\"\n      formControlName=\"userId\"\n      placeholder=\"{{ 'loginForm.emailAddress.placeholder' | cxTranslate }}\"\n    />\n    <cx-form-errors [control]=\"form.get('userId')\"></cx-form-errors>\n  </label>\n\n  <label>\n    <span class=\"label-content\">{{\n      'loginForm.password.label' | cxTranslate\n    }}</span>\n    <input\n      required=\"true\"\n      type=\"password\"\n      class=\"form-control\"\n      placeholder=\"{{ 'loginForm.password.placeholder' | cxTranslate }}\"\n      formControlName=\"password\"\n      [attr.aria-label]=\"'loginForm.password.placeholder' | cxTranslate\"\n      cxPasswordVisibilitySwitch\n    />\n    <cx-form-errors [control]=\"form.get('password')\"></cx-form-errors>\n  </label>\n\n  <a [routerLink]=\"{ cxRoute: 'forgotPassword' } | cxUrl\" class=\"btn-link\">\n    {{ 'loginForm.forgotPassword' | cxTranslate }}\n  </a>\n\n  <button\n    type=\"submit\"\n    class=\"btn btn-block btn-primary\"\n    [disabled]=\"form.disabled\"\n  >\n    {{ 'loginForm.signIn' | cxTranslate }}\n  </button>\n</form>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i4.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "component", type: i5.FormErrorsComponent, selector: "cx-form-errors", inputs: ["prefix", "translationParams", "control"] }, { kind: "component", type: i5.SpinnerComponent, selector: "cx-spinner" }, { kind: "directive", type: i5.PasswordVisibilityToggleDirective, selector: "[cxPasswordVisibilitySwitch][type=\"password\"]" }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "pipe", type: i6.UrlPipe, name: "cxUrl" }, { kind: "pipe", type: i6.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: LoginFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-login-form', changeDetection: ChangeDetectionStrategy.OnPush, template: "<cx-spinner class=\"overlay\" *ngIf=\"isUpdating$ | async\"></cx-spinner>\n\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n  <label>\n    <span class=\"label-content\">{{\n      'loginForm.emailAddress.label' | cxTranslate\n    }}</span>\n    <input\n      required=\"true\"\n      type=\"email\"\n      class=\"form-control\"\n      formControlName=\"userId\"\n      placeholder=\"{{ 'loginForm.emailAddress.placeholder' | cxTranslate }}\"\n    />\n    <cx-form-errors [control]=\"form.get('userId')\"></cx-form-errors>\n  </label>\n\n  <label>\n    <span class=\"label-content\">{{\n      'loginForm.password.label' | cxTranslate\n    }}</span>\n    <input\n      required=\"true\"\n      type=\"password\"\n      class=\"form-control\"\n      placeholder=\"{{ 'loginForm.password.placeholder' | cxTranslate }}\"\n      formControlName=\"password\"\n      [attr.aria-label]=\"'loginForm.password.placeholder' | cxTranslate\"\n      cxPasswordVisibilitySwitch\n    />\n    <cx-form-errors [control]=\"form.get('password')\"></cx-form-errors>\n  </label>\n\n  <a [routerLink]=\"{ cxRoute: 'forgotPassword' } | cxUrl\" class=\"btn-link\">\n    {{ 'loginForm.forgotPassword' | cxTranslate }}\n  </a>\n\n  <button\n    type=\"submit\"\n    class=\"btn btn-block btn-primary\"\n    [disabled]=\"form.disabled\"\n  >\n    {{ 'loginForm.signIn' | cxTranslate }}\n  </button>\n</form>\n" }]
        }], ctorParameters: function () { return [{ type: i1.LoginFormComponentService }]; }, propDecorators: { style: [{
                type: HostBinding,
                args: ['class.user-form']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvdXNlci9hY2NvdW50L2NvbXBvbmVudHMvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy91c2VyL2FjY291bnQvY29tcG9uZW50cy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQVVoRixNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFlBQXNCLE9BQWtDO1FBQWxDLFlBQU8sR0FBUCxPQUFPLENBQTJCO1FBRXhELFNBQUksR0FBcUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsZ0JBQVcsR0FBd0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFNUIsVUFBSyxHQUFHLElBQUksQ0FBQztJQUxjLENBQUM7SUFPNUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7K0dBVlUsa0JBQWtCO21HQUFsQixrQkFBa0IsZ0hDaEIvQiw4MkNBNkNBOzJGRDdCYSxrQkFBa0I7a0JBTDlCLFNBQVM7K0JBQ0UsZUFBZSxtQkFFUix1QkFBdUIsQ0FBQyxNQUFNO2dIQVFmLEtBQUs7c0JBQXBDLFdBQVc7dUJBQUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVudHlwZWRGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMb2dpbkZvcm1Db21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9sb2dpbi1mb3JtLWNvbXBvbmVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbG9naW4tZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luRm9ybUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzZXJ2aWNlOiBMb2dpbkZvcm1Db21wb25lbnRTZXJ2aWNlKSB7fVxuXG4gIGZvcm06IFVudHlwZWRGb3JtR3JvdXAgPSB0aGlzLnNlcnZpY2UuZm9ybTtcbiAgaXNVcGRhdGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLnNlcnZpY2UuaXNVcGRhdGluZyQ7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy51c2VyLWZvcm0nKSBzdHlsZSA9IHRydWU7XG5cbiAgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLmxvZ2luKCk7XG4gIH1cbn1cbiIsIjxjeC1zcGlubmVyIGNsYXNzPVwib3ZlcmxheVwiICpuZ0lmPVwiaXNVcGRhdGluZyQgfCBhc3luY1wiPjwvY3gtc3Bpbm5lcj5cblxuPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgPGxhYmVsPlxuICAgIDxzcGFuIGNsYXNzPVwibGFiZWwtY29udGVudFwiPnt7XG4gICAgICAnbG9naW5Gb3JtLmVtYWlsQWRkcmVzcy5sYWJlbCcgfCBjeFRyYW5zbGF0ZVxuICAgIH19PC9zcGFuPlxuICAgIDxpbnB1dFxuICAgICAgcmVxdWlyZWQ9XCJ0cnVlXCJcbiAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICBmb3JtQ29udHJvbE5hbWU9XCJ1c2VySWRcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJ7eyAnbG9naW5Gb3JtLmVtYWlsQWRkcmVzcy5wbGFjZWhvbGRlcicgfCBjeFRyYW5zbGF0ZSB9fVwiXG4gICAgLz5cbiAgICA8Y3gtZm9ybS1lcnJvcnMgW2NvbnRyb2xdPVwiZm9ybS5nZXQoJ3VzZXJJZCcpXCI+PC9jeC1mb3JtLWVycm9ycz5cbiAgPC9sYWJlbD5cblxuICA8bGFiZWw+XG4gICAgPHNwYW4gY2xhc3M9XCJsYWJlbC1jb250ZW50XCI+e3tcbiAgICAgICdsb2dpbkZvcm0ucGFzc3dvcmQubGFiZWwnIHwgY3hUcmFuc2xhdGVcbiAgICB9fTwvc3Bhbj5cbiAgICA8aW5wdXRcbiAgICAgIHJlcXVpcmVkPVwidHJ1ZVwiXG4gICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJ7eyAnbG9naW5Gb3JtLnBhc3N3b3JkLnBsYWNlaG9sZGVyJyB8IGN4VHJhbnNsYXRlIH19XCJcbiAgICAgIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCJcbiAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ2xvZ2luRm9ybS5wYXNzd29yZC5wbGFjZWhvbGRlcicgfCBjeFRyYW5zbGF0ZVwiXG4gICAgICBjeFBhc3N3b3JkVmlzaWJpbGl0eVN3aXRjaFxuICAgIC8+XG4gICAgPGN4LWZvcm0tZXJyb3JzIFtjb250cm9sXT1cImZvcm0uZ2V0KCdwYXNzd29yZCcpXCI+PC9jeC1mb3JtLWVycm9ycz5cbiAgPC9sYWJlbD5cblxuICA8YSBbcm91dGVyTGlua109XCJ7IGN4Um91dGU6ICdmb3Jnb3RQYXNzd29yZCcgfSB8IGN4VXJsXCIgY2xhc3M9XCJidG4tbGlua1wiPlxuICAgIHt7ICdsb2dpbkZvcm0uZm9yZ290UGFzc3dvcmQnIHwgY3hUcmFuc2xhdGUgfX1cbiAgPC9hPlxuXG4gIDxidXR0b25cbiAgICB0eXBlPVwic3VibWl0XCJcbiAgICBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLXByaW1hcnlcIlxuICAgIFtkaXNhYmxlZF09XCJmb3JtLmRpc2FibGVkXCJcbiAgPlxuICAgIHt7ICdsb2dpbkZvcm0uc2lnbkluJyB8IGN4VHJhbnNsYXRlIH19XG4gIDwvYnV0dG9uPlxuPC9mb3JtPlxuIl19