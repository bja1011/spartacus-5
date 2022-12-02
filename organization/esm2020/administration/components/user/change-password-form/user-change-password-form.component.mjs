/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoadStatus } from '@spartacus/organization/administration/core';
import { filter, first, map, switchMap, take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../services/user-item.service";
import * as i2 from "./user-change-password-form.service";
import * as i3 from "../../shared/message/services/message.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/router";
import * as i6 from "@angular/forms";
import * as i7 from "@spartacus/storefront";
import * as i8 from "../../shared/card/card.component";
import * as i9 from "@spartacus/core";
export class UserChangePasswordFormComponent {
    constructor(itemService, formService, messageService) {
        this.itemService = itemService;
        this.formService = formService;
        this.messageService = messageService;
        this.form$ = this.itemService.current$.pipe(map((item) => this.formService.getForm(item)));
    }
    save(form) {
        this.itemService.current$
            .pipe(first(), switchMap((item) => this.itemService.save(form, form.value.customerId).pipe(take(1), filter((data) => data.status === LoadStatus.SUCCESS), map((data) => ({
            ...item,
            ...data.item,
        })))))
            .subscribe((data) => {
            this.notify(data);
            this.itemService.launchDetails(data);
        });
    }
    notify(item) {
        this.messageService.add({
            message: {
                key: `orgUser.messages.updatePassword`,
                params: {
                    item,
                },
            },
        });
    }
}
UserChangePasswordFormComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: UserChangePasswordFormComponent, deps: [{ token: i1.UserItemService }, { token: i2.UserChangePasswordFormService }, { token: i3.MessageService }], target: i0.ɵɵFactoryTarget.Component });
UserChangePasswordFormComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: UserChangePasswordFormComponent, selector: "cx-org-user-change-password-form", host: { classAttribute: "content-wrapper" }, ngImport: i0, template: "<form *ngIf=\"form$ | async as form\" [formGroup]=\"form\" (submit)=\"save(form)\">\n  <cx-org-card\n    [previous]=\"false\"\n    i18nRoot=\"orgUser.password\"\n    [cxFocus]=\"{ autofocus: 'input', refreshFocus: form }\"\n  >\n    <button actions class=\"button primary\">\n      {{ 'organization.save' | cxTranslate }}\n    </button>\n    <button actions class=\"link\" routerLink=\"../\" type=\"button\">\n      {{ 'organization.cancel' | cxTranslate }}\n    </button>\n\n    <section main class=\"details\">\n      <label class=\"full-width\">\n        <span class=\"label-content\">{{\n          'orgUser.password.newPassword' | cxTranslate\n        }}</span>\n        <input\n          required=\"true\"\n          class=\"form-control\"\n          type=\"password\"\n          name=\"password\"\n          placeholder=\"{{ 'orgUser.password.newPassword' | cxTranslate }}\"\n          formControlName=\"password\"\n          [attr.aria-label]=\"'orgUser.password.newPassword' | cxTranslate\"\n          cxPasswordVisibilitySwitch\n        />\n        <cx-form-errors [control]=\"form.get('password')\"></cx-form-errors>\n      </label>\n      <label>\n        <span class=\"label-content\">{{\n          'orgUser.password.confirmPassword' | cxTranslate\n        }}</span>\n        <input\n          required=\"true\"\n          class=\"form-control\"\n          type=\"password\"\n          name=\"confirmPassword\"\n          placeholder=\"{{ 'orgUser.password.confirmPassword' | cxTranslate }}\"\n          formControlName=\"confirmPassword\"\n          [attr.aria-label]=\"'orgUser.password.confirmPassword' | cxTranslate\"\n          cxPasswordVisibilitySwitch\n        />\n        <cx-form-errors\n          [control]=\"form.get('confirmPassword')\"\n        ></cx-form-errors>\n      </label>\n    </section>\n  </cx-org-card>\n</form>\n", dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i5.RouterLink, selector: ":not(a):not(area)[routerLink]", inputs: ["queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i6.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i6.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i6.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i6.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i6.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i6.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i7.FormErrorsComponent, selector: "cx-form-errors", inputs: ["prefix", "translationParams", "control"] }, { kind: "component", type: i8.CardComponent, selector: "cx-org-card", inputs: ["i18nRoot", "previous", "subtitle", "showHint"] }, { kind: "directive", type: i7.FocusDirective, selector: "[cxFocus]", inputs: ["cxFocus"] }, { kind: "directive", type: i7.PasswordVisibilityToggleDirective, selector: "[cxPasswordVisibilitySwitch][type=\"password\"]" }, { kind: "pipe", type: i4.AsyncPipe, name: "async" }, { kind: "pipe", type: i9.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: UserChangePasswordFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-org-user-change-password-form', changeDetection: ChangeDetectionStrategy.OnPush, host: { class: 'content-wrapper' }, template: "<form *ngIf=\"form$ | async as form\" [formGroup]=\"form\" (submit)=\"save(form)\">\n  <cx-org-card\n    [previous]=\"false\"\n    i18nRoot=\"orgUser.password\"\n    [cxFocus]=\"{ autofocus: 'input', refreshFocus: form }\"\n  >\n    <button actions class=\"button primary\">\n      {{ 'organization.save' | cxTranslate }}\n    </button>\n    <button actions class=\"link\" routerLink=\"../\" type=\"button\">\n      {{ 'organization.cancel' | cxTranslate }}\n    </button>\n\n    <section main class=\"details\">\n      <label class=\"full-width\">\n        <span class=\"label-content\">{{\n          'orgUser.password.newPassword' | cxTranslate\n        }}</span>\n        <input\n          required=\"true\"\n          class=\"form-control\"\n          type=\"password\"\n          name=\"password\"\n          placeholder=\"{{ 'orgUser.password.newPassword' | cxTranslate }}\"\n          formControlName=\"password\"\n          [attr.aria-label]=\"'orgUser.password.newPassword' | cxTranslate\"\n          cxPasswordVisibilitySwitch\n        />\n        <cx-form-errors [control]=\"form.get('password')\"></cx-form-errors>\n      </label>\n      <label>\n        <span class=\"label-content\">{{\n          'orgUser.password.confirmPassword' | cxTranslate\n        }}</span>\n        <input\n          required=\"true\"\n          class=\"form-control\"\n          type=\"password\"\n          name=\"confirmPassword\"\n          placeholder=\"{{ 'orgUser.password.confirmPassword' | cxTranslate }}\"\n          formControlName=\"confirmPassword\"\n          [attr.aria-label]=\"'orgUser.password.confirmPassword' | cxTranslate\"\n          cxPasswordVisibilitySwitch\n        />\n        <cx-form-errors\n          [control]=\"form.get('confirmPassword')\"\n        ></cx-form-errors>\n      </label>\n    </section>\n  </cx-org-card>\n</form>\n" }]
        }], ctorParameters: function () { return [{ type: i1.UserItemService }, { type: i2.UserChangePasswordFormService }, { type: i3.MessageService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jaGFuZ2UtcGFzc3dvcmQtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvb3JnYW5pemF0aW9uL2FkbWluaXN0cmF0aW9uL2NvbXBvbmVudHMvdXNlci9jaGFuZ2UtcGFzc3dvcmQtZm9ybS91c2VyLWNoYW5nZS1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmdhbml6YXRpb24vYWRtaW5pc3RyYXRpb24vY29tcG9uZW50cy91c2VyL2NoYW5nZS1wYXNzd29yZC1mb3JtL3VzZXItY2hhbmdlLXBhc3N3b3JkLWZvcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7O0FBV3JFLE1BQU0sT0FBTywrQkFBK0I7SUFLMUMsWUFDWSxXQUE0QixFQUM1QixXQUEwQyxFQUMxQyxjQUE4QjtRQUY5QixnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQStCO1FBQzFDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVAxQyxVQUFLLEdBQXdDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDekUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUM5QyxDQUFDO0lBTUMsQ0FBQztJQUVKLElBQUksQ0FBQyxJQUFzQjtRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVE7YUFDdEIsSUFBSSxDQUNILEtBQUssRUFBRSxFQUNQLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRyxJQUFJLENBQUMsS0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FDL0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQ3BELEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNiLEdBQUcsSUFBSTtZQUNQLEdBQUcsSUFBSSxDQUFDLElBQUk7U0FDYixDQUFDLENBQUMsQ0FDSixDQUNGLENBQ0Y7YUFDQSxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVTLE1BQU0sQ0FBQyxJQUFVO1FBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO1lBQ3RCLE9BQU8sRUFBRTtnQkFDUCxHQUFHLEVBQUUsaUNBQWlDO2dCQUN0QyxNQUFNLEVBQUU7b0JBQ04sSUFBSTtpQkFDTDthQUNGO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7NEhBekNVLCtCQUErQjtnSEFBL0IsK0JBQStCLHFIQ3RCNUMsNHpEQW1EQTsyRkQ3QmEsK0JBQStCO2tCQU4zQyxTQUFTOytCQUNFLGtDQUFrQyxtQkFFM0IsdUJBQXVCLENBQUMsTUFBTSxRQUN6QyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVudHlwZWRGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IExvYWRTdGF0dXMgfSBmcm9tICdAc3BhcnRhY3VzL29yZ2FuaXphdGlvbi9hZG1pbmlzdHJhdGlvbi9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZmlyc3QsIG1hcCwgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvbWVzc2FnZS9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXNlci1pdGVtLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckNoYW5nZVBhc3N3b3JkRm9ybVNlcnZpY2UgfSBmcm9tICcuL3VzZXItY2hhbmdlLXBhc3N3b3JkLWZvcm0uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW9yZy11c2VyLWNoYW5nZS1wYXNzd29yZC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VzZXItY2hhbmdlLXBhc3N3b3JkLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDogeyBjbGFzczogJ2NvbnRlbnQtd3JhcHBlcicgfSxcbn0pXG5leHBvcnQgY2xhc3MgVXNlckNoYW5nZVBhc3N3b3JkRm9ybUNvbXBvbmVudCB7XG4gIGZvcm0kOiBPYnNlcnZhYmxlPFVudHlwZWRGb3JtR3JvdXAgfCBudWxsPiA9IHRoaXMuaXRlbVNlcnZpY2UuY3VycmVudCQucGlwZShcbiAgICBtYXAoKGl0ZW0pID0+IHRoaXMuZm9ybVNlcnZpY2UuZ2V0Rm9ybShpdGVtKSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaXRlbVNlcnZpY2U6IFVzZXJJdGVtU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZm9ybVNlcnZpY2U6IFVzZXJDaGFuZ2VQYXNzd29yZEZvcm1TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIHNhdmUoZm9ybTogVW50eXBlZEZvcm1Hcm91cCk6IHZvaWQge1xuICAgIHRoaXMuaXRlbVNlcnZpY2UuY3VycmVudCRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaXJzdCgpLFxuICAgICAgICBzd2l0Y2hNYXAoKGl0ZW0pID0+XG4gICAgICAgICAgdGhpcy5pdGVtU2VydmljZS5zYXZlKGZvcm0sIChmb3JtLnZhbHVlIGFzIFVzZXIpLmN1c3RvbWVySWQpLnBpcGUoXG4gICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgZmlsdGVyKChkYXRhKSA9PiBkYXRhLnN0YXR1cyA9PT0gTG9hZFN0YXR1cy5TVUNDRVNTKSxcbiAgICAgICAgICAgIG1hcCgoZGF0YSkgPT4gKHtcbiAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgICAgLi4uZGF0YS5pdGVtLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMubm90aWZ5KGRhdGEpO1xuICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLmxhdW5jaERldGFpbHMoZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBub3RpZnkoaXRlbTogVXNlcikge1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAga2V5OiBgb3JnVXNlci5tZXNzYWdlcy51cGRhdGVQYXNzd29yZGAsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGl0ZW0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG4iLCI8Zm9ybSAqbmdJZj1cImZvcm0kIHwgYXN5bmMgYXMgZm9ybVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiIChzdWJtaXQpPVwic2F2ZShmb3JtKVwiPlxuICA8Y3gtb3JnLWNhcmRcbiAgICBbcHJldmlvdXNdPVwiZmFsc2VcIlxuICAgIGkxOG5Sb290PVwib3JnVXNlci5wYXNzd29yZFwiXG4gICAgW2N4Rm9jdXNdPVwieyBhdXRvZm9jdXM6ICdpbnB1dCcsIHJlZnJlc2hGb2N1czogZm9ybSB9XCJcbiAgPlxuICAgIDxidXR0b24gYWN0aW9ucyBjbGFzcz1cImJ1dHRvbiBwcmltYXJ5XCI+XG4gICAgICB7eyAnb3JnYW5pemF0aW9uLnNhdmUnIHwgY3hUcmFuc2xhdGUgfX1cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGFjdGlvbnMgY2xhc3M9XCJsaW5rXCIgcm91dGVyTGluaz1cIi4uL1wiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgIHt7ICdvcmdhbml6YXRpb24uY2FuY2VsJyB8IGN4VHJhbnNsYXRlIH19XG4gICAgPC9idXR0b24+XG5cbiAgICA8c2VjdGlvbiBtYWluIGNsYXNzPVwiZGV0YWlsc1wiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsLWNvbnRlbnRcIj57e1xuICAgICAgICAgICdvcmdVc2VyLnBhc3N3b3JkLm5ld1Bhc3N3b3JkJyB8IGN4VHJhbnNsYXRlXG4gICAgICAgIH19PC9zcGFuPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICByZXF1aXJlZD1cInRydWVcIlxuICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyAnb3JnVXNlci5wYXNzd29yZC5uZXdQYXNzd29yZCcgfCBjeFRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ29yZ1VzZXIucGFzc3dvcmQubmV3UGFzc3dvcmQnIHwgY3hUcmFuc2xhdGVcIlxuICAgICAgICAgIGN4UGFzc3dvcmRWaXNpYmlsaXR5U3dpdGNoXG4gICAgICAgIC8+XG4gICAgICAgIDxjeC1mb3JtLWVycm9ycyBbY29udHJvbF09XCJmb3JtLmdldCgncGFzc3dvcmQnKVwiPjwvY3gtZm9ybS1lcnJvcnM+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGxhYmVsPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsLWNvbnRlbnRcIj57e1xuICAgICAgICAgICdvcmdVc2VyLnBhc3N3b3JkLmNvbmZpcm1QYXNzd29yZCcgfCBjeFRyYW5zbGF0ZVxuICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgcmVxdWlyZWQ9XCJ0cnVlXCJcbiAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7ICdvcmdVc2VyLnBhc3N3b3JkLmNvbmZpcm1QYXNzd29yZCcgfCBjeFRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIidvcmdVc2VyLnBhc3N3b3JkLmNvbmZpcm1QYXNzd29yZCcgfCBjeFRyYW5zbGF0ZVwiXG4gICAgICAgICAgY3hQYXNzd29yZFZpc2liaWxpdHlTd2l0Y2hcbiAgICAgICAgLz5cbiAgICAgICAgPGN4LWZvcm0tZXJyb3JzXG4gICAgICAgICAgW2NvbnRyb2xdPVwiZm9ybS5nZXQoJ2NvbmZpcm1QYXNzd29yZCcpXCJcbiAgICAgICAgPjwvY3gtZm9ybS1lcnJvcnM+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvc2VjdGlvbj5cbiAgPC9jeC1vcmctY2FyZD5cbjwvZm9ybT5cbiJdfQ==