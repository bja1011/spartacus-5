/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./update-password-component.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@spartacus/storefront";
import * as i5 from "@angular/router";
import * as i6 from "@spartacus/core";
export class UpdatePasswordComponent {
    constructor(service) {
        this.service = service;
        this.form = this.service.form;
        this.isUpdating$ = this.service.isUpdating$;
    }
    onSubmit() {
        this.service.updatePassword();
    }
}
UpdatePasswordComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: UpdatePasswordComponent, deps: [{ token: i1.UpdatePasswordComponentService }], target: i0.ɵɵFactoryTarget.Component });
UpdatePasswordComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: UpdatePasswordComponent, selector: "cx-update-password", host: { classAttribute: "user-form" }, ngImport: i0, template: "<cx-spinner class=\"overlay\" *ngIf=\"isUpdating$ | async\"> </cx-spinner>\n\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n  <label>\n    <span class=\"label-content\">{{\n      'updatePasswordForm.oldPassword.label' | cxTranslate\n    }}</span>\n    <input\n      required=\"true\"\n      class=\"form-control\"\n      type=\"password\"\n      name=\"oldPassword\"\n      placeholder=\"{{\n        'updatePasswordForm.oldPassword.placeholder' | cxTranslate\n      }}\"\n      formControlName=\"oldPassword\"\n      [attr.aria-label]=\"\n        'updatePasswordForm.oldPassword.placeholder' | cxTranslate\n      \"\n      cxPasswordVisibilitySwitch\n    />\n    <cx-form-errors [control]=\"form.get('oldPassword')\"></cx-form-errors>\n  </label>\n\n  <label>\n    <span class=\"label-content\">{{\n      'updatePasswordForm.newPassword.label' | cxTranslate\n    }}</span>\n    <input\n      required=\"true\"\n      class=\"form-control\"\n      type=\"password\"\n      name=\"newPassword\"\n      placeholder=\"{{\n        'updatePasswordForm.newPassword.placeholder' | cxTranslate\n      }}\"\n      formControlName=\"newPassword\"\n      [attr.aria-label]=\"\n        'updatePasswordForm.newPassword.placeholder' | cxTranslate\n      \"\n      cxPasswordVisibilitySwitch\n    />\n    <cx-form-errors [control]=\"form.get('newPassword')\"></cx-form-errors>\n  </label>\n\n  <label>\n    <span class=\"label-content\">{{\n      'updatePasswordForm.confirmPassword.label' | cxTranslate\n    }}</span>\n    <input\n      required=\"true\"\n      class=\"form-control\"\n      type=\"password\"\n      name=\"newPasswordConfirm\"\n      placeholder=\"{{\n        'updatePasswordForm.confirmPassword.placeholder' | cxTranslate\n      }}\"\n      formControlName=\"newPasswordConfirm\"\n      [attr.aria-label]=\"\n        'updatePasswordForm.confirmPassword.placeholder' | cxTranslate\n      \"\n      cxPasswordVisibilitySwitch\n    />\n    <cx-form-errors [control]=\"form.get('newPasswordConfirm')\"></cx-form-errors>\n  </label>\n\n  <a\n    class=\"btn btn-block btn-secondary\"\n    [routerLink]=\"{ cxRoute: 'home' } | cxUrl\"\n  >\n    {{ 'common.cancel' | cxTranslate }}\n  </a>\n\n  <button class=\"btn btn-block btn-primary\" [disabled]=\"form.disabled\">\n    {{ 'common.save' | cxTranslate }}\n  </button>\n</form>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i4.SpinnerComponent, selector: "cx-spinner" }, { kind: "component", type: i4.FormErrorsComponent, selector: "cx-form-errors", inputs: ["prefix", "translationParams", "control"] }, { kind: "directive", type: i5.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i4.PasswordVisibilityToggleDirective, selector: "[cxPasswordVisibilitySwitch][type=\"password\"]" }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "pipe", type: i6.TranslatePipe, name: "cxTranslate" }, { kind: "pipe", type: i6.UrlPipe, name: "cxUrl" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: UpdatePasswordComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-update-password', changeDetection: ChangeDetectionStrategy.OnPush, host: { class: 'user-form' }, template: "<cx-spinner class=\"overlay\" *ngIf=\"isUpdating$ | async\"> </cx-spinner>\n\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n  <label>\n    <span class=\"label-content\">{{\n      'updatePasswordForm.oldPassword.label' | cxTranslate\n    }}</span>\n    <input\n      required=\"true\"\n      class=\"form-control\"\n      type=\"password\"\n      name=\"oldPassword\"\n      placeholder=\"{{\n        'updatePasswordForm.oldPassword.placeholder' | cxTranslate\n      }}\"\n      formControlName=\"oldPassword\"\n      [attr.aria-label]=\"\n        'updatePasswordForm.oldPassword.placeholder' | cxTranslate\n      \"\n      cxPasswordVisibilitySwitch\n    />\n    <cx-form-errors [control]=\"form.get('oldPassword')\"></cx-form-errors>\n  </label>\n\n  <label>\n    <span class=\"label-content\">{{\n      'updatePasswordForm.newPassword.label' | cxTranslate\n    }}</span>\n    <input\n      required=\"true\"\n      class=\"form-control\"\n      type=\"password\"\n      name=\"newPassword\"\n      placeholder=\"{{\n        'updatePasswordForm.newPassword.placeholder' | cxTranslate\n      }}\"\n      formControlName=\"newPassword\"\n      [attr.aria-label]=\"\n        'updatePasswordForm.newPassword.placeholder' | cxTranslate\n      \"\n      cxPasswordVisibilitySwitch\n    />\n    <cx-form-errors [control]=\"form.get('newPassword')\"></cx-form-errors>\n  </label>\n\n  <label>\n    <span class=\"label-content\">{{\n      'updatePasswordForm.confirmPassword.label' | cxTranslate\n    }}</span>\n    <input\n      required=\"true\"\n      class=\"form-control\"\n      type=\"password\"\n      name=\"newPasswordConfirm\"\n      placeholder=\"{{\n        'updatePasswordForm.confirmPassword.placeholder' | cxTranslate\n      }}\"\n      formControlName=\"newPasswordConfirm\"\n      [attr.aria-label]=\"\n        'updatePasswordForm.confirmPassword.placeholder' | cxTranslate\n      \"\n      cxPasswordVisibilitySwitch\n    />\n    <cx-form-errors [control]=\"form.get('newPasswordConfirm')\"></cx-form-errors>\n  </label>\n\n  <a\n    class=\"btn btn-block btn-secondary\"\n    [routerLink]=\"{ cxRoute: 'home' } | cxUrl\"\n  >\n    {{ 'common.cancel' | cxTranslate }}\n  </a>\n\n  <button class=\"btn btn-block btn-primary\" [disabled]=\"form.disabled\">\n    {{ 'common.save' | cxTranslate }}\n  </button>\n</form>\n" }]
        }], ctorParameters: function () { return [{ type: i1.UpdatePasswordComponentService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy91c2VyL3Byb2ZpbGUvY29tcG9uZW50cy91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy91c2VyL3Byb2ZpbGUvY29tcG9uZW50cy91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQVduRSxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFlBQXNCLE9BQXVDO1FBQXZDLFlBQU8sR0FBUCxPQUFPLENBQWdDO1FBRTdELFNBQUksR0FBcUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsZ0JBQVcsR0FBd0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFISSxDQUFDO0lBS2pFLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2hDLENBQUM7O29IQVJVLHVCQUF1Qjt3R0FBdkIsdUJBQXVCLGlHQ2pCcEMsbXlFQTZFQTsyRkQ1RGEsdUJBQXVCO2tCQU5uQyxTQUFTOytCQUNFLG9CQUFvQixtQkFFYix1QkFBdUIsQ0FBQyxNQUFNLFFBQ3pDLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVudHlwZWRGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVcGRhdGVQYXNzd29yZENvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL3VwZGF0ZS1wYXNzd29yZC1jb21wb25lbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXVwZGF0ZS1wYXNzd29yZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDogeyBjbGFzczogJ3VzZXItZm9ybScgfSxcbn0pXG5leHBvcnQgY2xhc3MgVXBkYXRlUGFzc3dvcmRDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc2VydmljZTogVXBkYXRlUGFzc3dvcmRDb21wb25lbnRTZXJ2aWNlKSB7fVxuXG4gIGZvcm06IFVudHlwZWRGb3JtR3JvdXAgPSB0aGlzLnNlcnZpY2UuZm9ybTtcbiAgaXNVcGRhdGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLnNlcnZpY2UuaXNVcGRhdGluZyQ7XG5cbiAgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZVBhc3N3b3JkKCk7XG4gIH1cbn1cbiIsIjxjeC1zcGlubmVyIGNsYXNzPVwib3ZlcmxheVwiICpuZ0lmPVwiaXNVcGRhdGluZyQgfCBhc3luY1wiPiA8L2N4LXNwaW5uZXI+XG5cbjxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gIDxsYWJlbD5cbiAgICA8c3BhbiBjbGFzcz1cImxhYmVsLWNvbnRlbnRcIj57e1xuICAgICAgJ3VwZGF0ZVBhc3N3b3JkRm9ybS5vbGRQYXNzd29yZC5sYWJlbCcgfCBjeFRyYW5zbGF0ZVxuICAgIH19PC9zcGFuPlxuICAgIDxpbnB1dFxuICAgICAgcmVxdWlyZWQ9XCJ0cnVlXCJcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICBuYW1lPVwib2xkUGFzc3dvcmRcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJ7e1xuICAgICAgICAndXBkYXRlUGFzc3dvcmRGb3JtLm9sZFBhc3N3b3JkLnBsYWNlaG9sZGVyJyB8IGN4VHJhbnNsYXRlXG4gICAgICB9fVwiXG4gICAgICBmb3JtQ29udHJvbE5hbWU9XCJvbGRQYXNzd29yZFwiXG4gICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIlxuICAgICAgICAndXBkYXRlUGFzc3dvcmRGb3JtLm9sZFBhc3N3b3JkLnBsYWNlaG9sZGVyJyB8IGN4VHJhbnNsYXRlXG4gICAgICBcIlxuICAgICAgY3hQYXNzd29yZFZpc2liaWxpdHlTd2l0Y2hcbiAgICAvPlxuICAgIDxjeC1mb3JtLWVycm9ycyBbY29udHJvbF09XCJmb3JtLmdldCgnb2xkUGFzc3dvcmQnKVwiPjwvY3gtZm9ybS1lcnJvcnM+XG4gIDwvbGFiZWw+XG5cbiAgPGxhYmVsPlxuICAgIDxzcGFuIGNsYXNzPVwibGFiZWwtY29udGVudFwiPnt7XG4gICAgICAndXBkYXRlUGFzc3dvcmRGb3JtLm5ld1Bhc3N3b3JkLmxhYmVsJyB8IGN4VHJhbnNsYXRlXG4gICAgfX08L3NwYW4+XG4gICAgPGlucHV0XG4gICAgICByZXF1aXJlZD1cInRydWVcIlxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgIG5hbWU9XCJuZXdQYXNzd29yZFwiXG4gICAgICBwbGFjZWhvbGRlcj1cInt7XG4gICAgICAgICd1cGRhdGVQYXNzd29yZEZvcm0ubmV3UGFzc3dvcmQucGxhY2Vob2xkZXInIHwgY3hUcmFuc2xhdGVcbiAgICAgIH19XCJcbiAgICAgIGZvcm1Db250cm9sTmFtZT1cIm5ld1Bhc3N3b3JkXCJcbiAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiXG4gICAgICAgICd1cGRhdGVQYXNzd29yZEZvcm0ubmV3UGFzc3dvcmQucGxhY2Vob2xkZXInIHwgY3hUcmFuc2xhdGVcbiAgICAgIFwiXG4gICAgICBjeFBhc3N3b3JkVmlzaWJpbGl0eVN3aXRjaFxuICAgIC8+XG4gICAgPGN4LWZvcm0tZXJyb3JzIFtjb250cm9sXT1cImZvcm0uZ2V0KCduZXdQYXNzd29yZCcpXCI+PC9jeC1mb3JtLWVycm9ycz5cbiAgPC9sYWJlbD5cblxuICA8bGFiZWw+XG4gICAgPHNwYW4gY2xhc3M9XCJsYWJlbC1jb250ZW50XCI+e3tcbiAgICAgICd1cGRhdGVQYXNzd29yZEZvcm0uY29uZmlybVBhc3N3b3JkLmxhYmVsJyB8IGN4VHJhbnNsYXRlXG4gICAgfX08L3NwYW4+XG4gICAgPGlucHV0XG4gICAgICByZXF1aXJlZD1cInRydWVcIlxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgIG5hbWU9XCJuZXdQYXNzd29yZENvbmZpcm1cIlxuICAgICAgcGxhY2Vob2xkZXI9XCJ7e1xuICAgICAgICAndXBkYXRlUGFzc3dvcmRGb3JtLmNvbmZpcm1QYXNzd29yZC5wbGFjZWhvbGRlcicgfCBjeFRyYW5zbGF0ZVxuICAgICAgfX1cIlxuICAgICAgZm9ybUNvbnRyb2xOYW1lPVwibmV3UGFzc3dvcmRDb25maXJtXCJcbiAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiXG4gICAgICAgICd1cGRhdGVQYXNzd29yZEZvcm0uY29uZmlybVBhc3N3b3JkLnBsYWNlaG9sZGVyJyB8IGN4VHJhbnNsYXRlXG4gICAgICBcIlxuICAgICAgY3hQYXNzd29yZFZpc2liaWxpdHlTd2l0Y2hcbiAgICAvPlxuICAgIDxjeC1mb3JtLWVycm9ycyBbY29udHJvbF09XCJmb3JtLmdldCgnbmV3UGFzc3dvcmRDb25maXJtJylcIj48L2N4LWZvcm0tZXJyb3JzPlxuICA8L2xhYmVsPlxuXG4gIDxhXG4gICAgY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1zZWNvbmRhcnlcIlxuICAgIFtyb3V0ZXJMaW5rXT1cInsgY3hSb3V0ZTogJ2hvbWUnIH0gfCBjeFVybFwiXG4gID5cbiAgICB7eyAnY29tbW9uLmNhbmNlbCcgfCBjeFRyYW5zbGF0ZSB9fVxuICA8L2E+XG5cbiAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiZm9ybS5kaXNhYmxlZFwiPlxuICAgIHt7ICdjb21tb24uc2F2ZScgfCBjeFRyYW5zbGF0ZSB9fVxuICA8L2J1dHRvbj5cbjwvZm9ybT5cbiJdfQ==