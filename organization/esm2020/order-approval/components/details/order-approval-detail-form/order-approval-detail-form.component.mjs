/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Validators, } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { OrderApprovalDecisionValue, } from '../../../core/model/order-approval.model';
import * as i0 from "@angular/core";
import * as i1 from "../order-approval-detail.service";
import * as i2 from "../../../core/services/order-approval.service";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@spartacus/storefront";
import * as i6 from "@angular/router";
import * as i7 from "@spartacus/core";
export class OrderApprovalDetailFormComponent {
    constructor(orderApprovalDetailService, orderApprovalService, fb) {
        this.orderApprovalDetailService = orderApprovalDetailService;
        this.orderApprovalService = orderApprovalService;
        this.fb = fb;
        this.approvalDecisionValue = OrderApprovalDecisionValue;
        this.approvalFormVisible = false;
        this.approvalForm = this.fb.group({
            comment: [''],
        });
        this.orderApprovalLoading$ = this.orderApprovalDetailService
            .getOrderApprovalCodeFromRoute()
            .pipe(switchMap((approvalCode) => this.orderApprovalService.getOrderApprovalLoading(approvalCode)));
        this.decisionResultLoading$ = this.orderApprovalService.getMakeDecisionResultLoading();
        this.loading$ = combineLatest([
            this.orderApprovalLoading$,
            this.decisionResultLoading$,
        ]).pipe(map(([approvalLoading, decisionResultLoading]) => approvalLoading || decisionResultLoading));
        this.orderApproval$ = this.orderApprovalDetailService.getOrderApproval();
        this.orderApprovalService.resetMakeDecisionProcessState();
    }
    displayDecisionForm(decision) {
        this.approvalDecision = decision;
        if (decision === OrderApprovalDecisionValue.APPROVE) {
            this.approvalForm.controls.comment.clearValidators();
        }
        else {
            this.approvalForm.controls.comment.setValidators([Validators.required]);
        }
        this.approvalFormVisible = true;
    }
    cancelDecisionForm() {
        this.approvalFormVisible = false;
        this.approvalForm.reset();
    }
    submitDecision(orderApproval) {
        if (this.approvalForm.valid) {
            this.orderApprovalService.makeDecision(orderApproval.code ?? '', {
                decision: this.approvalDecision,
                comment: this.approvalForm.controls.comment.value,
            });
            this.approvalFormVisible = false;
        }
        else {
            this.approvalForm.markAllAsTouched();
        }
    }
    ngOnDestroy() {
        this.orderApprovalService.resetMakeDecisionProcessState();
    }
}
OrderApprovalDetailFormComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: OrderApprovalDetailFormComponent, deps: [{ token: i1.OrderApprovalDetailService }, { token: i2.OrderApprovalService }, { token: i3.UntypedFormBuilder }], target: i0.ɵɵFactoryTarget.Component });
OrderApprovalDetailFormComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: OrderApprovalDetailFormComponent, selector: "cx-order-approval-detail-form", ngImport: i0, template: "<ng-container *ngIf=\"orderApproval$ | async as orderApproval\">\n  <div *ngIf=\"loading$ | async; else approvalFormTemplate\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #approvalFormTemplate>\n    <div role=\"status\" [attr.aria-label]=\"'common.loaded' | cxTranslate\"></div>\n    <ng-container *ngIf=\"orderApproval?.approvalDecisionRequired\">\n      <div *ngIf=\"approvalFormVisible\" class=\"cx-approval-form-header row\">\n        <div class=\"cx-approval-form-label col-sm-12\">\n          {{\n            'orderApprovalDetails.form.title_' + approvalDecision\n              | cxTranslate\n                : {\n                    orderCode: orderApproval?.order?.code,\n                    orderTotal:\n                      orderApproval?.order?.totalPriceWithTax?.formattedValue\n                  }\n          }}\n        </div>\n      </div>\n\n      <form\n        [formGroup]=\"approvalForm\"\n        (ngSubmit)=\"submitDecision(orderApproval)\"\n        *ngIf=\"approvalFormVisible\"\n      >\n        <label\n          >{{\n            'orderApprovalDetails.form.comment_' + approvalDecision + '.label'\n              | cxTranslate\n          }}\n          <textarea\n            class=\"form-control\"\n            rows=\"3\"\n            formControlName=\"comment\"\n            maxlength=\"255\"\n          ></textarea>\n          <cx-form-errors\n            [control]=\"approvalForm.get('comment')\"\n          ></cx-form-errors>\n        </label>\n        <div class=\"form-group row\">\n          <div class=\"col-lg-6 col-md-12\">\n            <button\n              class=\"btn btn-block btn-secondary\"\n              (click)=\"cancelDecisionForm()\"\n              type=\"button\"\n            >\n              {{ 'orderApprovalDetails.form.cancel' | cxTranslate }}\n            </button>\n          </div>\n          <div class=\"col-lg-6 col-md-12\">\n            <button class=\"btn btn-block btn-primary\" type=\"submit\">\n              {{\n                'orderApprovalDetails.form.submit_' + approvalDecision\n                  | cxTranslate\n              }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </ng-container>\n    <ng-container *ngIf=\"!approvalFormVisible\">\n      <div class=\"form-group row\">\n        <div class=\"col-lg-4 col-md-12\">\n          <a\n            [routerLink]=\"{ cxRoute: 'orderApprovals' } | cxUrl\"\n            class=\"btn btn-block btn-secondary\"\n            >{{ 'orderApprovalDetails.back' | cxTranslate }}</a\n          >\n        </div>\n        <div\n          class=\"col-lg-4 col-md-12\"\n          *ngIf=\"orderApproval?.approvalDecisionRequired\"\n        >\n          <button\n            class=\"btn btn-block btn-primary\"\n            (click)=\"displayDecisionForm(approvalDecisionValue.REJECT)\"\n          >\n            {{ 'orderApprovalDetails.showForm_REJECT' | cxTranslate }}\n          </button>\n        </div>\n        <div\n          class=\"col-lg-4 col-md-12\"\n          *ngIf=\"orderApproval?.approvalDecisionRequired\"\n        >\n          <button\n            class=\"btn btn-block btn-primary\"\n            (click)=\"displayDecisionForm(approvalDecisionValue.APPROVE)\"\n          >\n            {{ 'orderApprovalDetails.showForm_APPROVE' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n  </ng-template>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i5.FormErrorsComponent, selector: "cx-form-errors", inputs: ["prefix", "translationParams", "control"] }, { kind: "component", type: i5.SpinnerComponent, selector: "cx-spinner" }, { kind: "directive", type: i6.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "pipe", type: i4.AsyncPipe, name: "async" }, { kind: "pipe", type: i7.TranslatePipe, name: "cxTranslate" }, { kind: "pipe", type: i7.UrlPipe, name: "cxUrl" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: OrderApprovalDetailFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-order-approval-detail-form', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"orderApproval$ | async as orderApproval\">\n  <div *ngIf=\"loading$ | async; else approvalFormTemplate\">\n    <div class=\"cx-spinner\">\n      <cx-spinner></cx-spinner>\n    </div>\n  </div>\n\n  <ng-template #approvalFormTemplate>\n    <div role=\"status\" [attr.aria-label]=\"'common.loaded' | cxTranslate\"></div>\n    <ng-container *ngIf=\"orderApproval?.approvalDecisionRequired\">\n      <div *ngIf=\"approvalFormVisible\" class=\"cx-approval-form-header row\">\n        <div class=\"cx-approval-form-label col-sm-12\">\n          {{\n            'orderApprovalDetails.form.title_' + approvalDecision\n              | cxTranslate\n                : {\n                    orderCode: orderApproval?.order?.code,\n                    orderTotal:\n                      orderApproval?.order?.totalPriceWithTax?.formattedValue\n                  }\n          }}\n        </div>\n      </div>\n\n      <form\n        [formGroup]=\"approvalForm\"\n        (ngSubmit)=\"submitDecision(orderApproval)\"\n        *ngIf=\"approvalFormVisible\"\n      >\n        <label\n          >{{\n            'orderApprovalDetails.form.comment_' + approvalDecision + '.label'\n              | cxTranslate\n          }}\n          <textarea\n            class=\"form-control\"\n            rows=\"3\"\n            formControlName=\"comment\"\n            maxlength=\"255\"\n          ></textarea>\n          <cx-form-errors\n            [control]=\"approvalForm.get('comment')\"\n          ></cx-form-errors>\n        </label>\n        <div class=\"form-group row\">\n          <div class=\"col-lg-6 col-md-12\">\n            <button\n              class=\"btn btn-block btn-secondary\"\n              (click)=\"cancelDecisionForm()\"\n              type=\"button\"\n            >\n              {{ 'orderApprovalDetails.form.cancel' | cxTranslate }}\n            </button>\n          </div>\n          <div class=\"col-lg-6 col-md-12\">\n            <button class=\"btn btn-block btn-primary\" type=\"submit\">\n              {{\n                'orderApprovalDetails.form.submit_' + approvalDecision\n                  | cxTranslate\n              }}\n            </button>\n          </div>\n        </div>\n      </form>\n    </ng-container>\n    <ng-container *ngIf=\"!approvalFormVisible\">\n      <div class=\"form-group row\">\n        <div class=\"col-lg-4 col-md-12\">\n          <a\n            [routerLink]=\"{ cxRoute: 'orderApprovals' } | cxUrl\"\n            class=\"btn btn-block btn-secondary\"\n            >{{ 'orderApprovalDetails.back' | cxTranslate }}</a\n          >\n        </div>\n        <div\n          class=\"col-lg-4 col-md-12\"\n          *ngIf=\"orderApproval?.approvalDecisionRequired\"\n        >\n          <button\n            class=\"btn btn-block btn-primary\"\n            (click)=\"displayDecisionForm(approvalDecisionValue.REJECT)\"\n          >\n            {{ 'orderApprovalDetails.showForm_REJECT' | cxTranslate }}\n          </button>\n        </div>\n        <div\n          class=\"col-lg-4 col-md-12\"\n          *ngIf=\"orderApproval?.approvalDecisionRequired\"\n        >\n          <button\n            class=\"btn btn-block btn-primary\"\n            (click)=\"displayDecisionForm(approvalDecisionValue.APPROVE)\"\n          >\n            {{ 'orderApprovalDetails.showForm_APPROVE' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </ng-container>\n  </ng-template>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i1.OrderApprovalDetailService }, { type: i2.OrderApprovalService }, { type: i3.UntypedFormBuilder }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItYXBwcm92YWwtZGV0YWlsLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL29yZ2FuaXphdGlvbi9vcmRlci1hcHByb3ZhbC9jb21wb25lbnRzL2RldGFpbHMvb3JkZXItYXBwcm92YWwtZGV0YWlsLWZvcm0vb3JkZXItYXBwcm92YWwtZGV0YWlsLWZvcm0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL29yZ2FuaXphdGlvbi9vcmRlci1hcHByb3ZhbC9jb21wb25lbnRzL2RldGFpbHMvb3JkZXItYXBwcm92YWwtZGV0YWlsLWZvcm0vb3JkZXItYXBwcm92YWwtZGV0YWlsLWZvcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUdMLFVBQVUsR0FDWCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBRUwsMEJBQTBCLEdBQzNCLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7OztBQVNsRCxNQUFNLE9BQU8sZ0NBQWdDO0lBaUMzQyxZQUNZLDBCQUFzRCxFQUN0RCxvQkFBMEMsRUFDNUMsRUFBc0I7UUFGcEIsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUN0RCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzVDLE9BQUUsR0FBRixFQUFFLENBQW9CO1FBbkNoQywwQkFBcUIsR0FBRywwQkFBMEIsQ0FBQztRQUVuRCx3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDNUIsaUJBQVksR0FBcUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDN0MsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ2QsQ0FBQyxDQUFDO1FBRU8sMEJBQXFCLEdBQzdCLElBQUksQ0FBQywwQkFBMEI7YUFDNUIsNkJBQTZCLEVBQUU7YUFDL0IsSUFBSSxDQUNILFNBQVMsQ0FBQyxDQUFDLFlBQW9CLEVBQUUsRUFBRSxDQUNqQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLENBQ2hFLENBQ0YsQ0FBQztRQUVJLDJCQUFzQixHQUM5QixJQUFJLENBQUMsb0JBQW9CLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztRQUUzRCxhQUFRLEdBQXdCLGFBQWEsQ0FBQztZQUM1QyxJQUFJLENBQUMscUJBQXFCO1lBQzFCLElBQUksQ0FBQyxzQkFBc0I7U0FDNUIsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHLENBQ0QsQ0FBQyxDQUFDLGVBQWUsRUFBRSxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsQ0FDM0MsZUFBZSxJQUFJLHFCQUFxQixDQUMzQyxDQUNGLENBQUM7UUFFRixtQkFBYyxHQUNaLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBT25ELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO0lBQzVELENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxRQUFvQztRQUN0RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLElBQUksUUFBUSxLQUFLLDBCQUEwQixDQUFDLE9BQU8sRUFBRTtZQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDdEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUN6RTtRQUNELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGNBQWMsQ0FBQyxhQUE0QjtRQUN6QyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFO1lBQzNCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUU7Z0JBQy9ELFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO2dCQUMvQixPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUs7YUFDbEQsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztTQUNsQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsb0JBQW9CLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztJQUM1RCxDQUFDOzs2SEF0RVUsZ0NBQWdDO2lIQUFoQyxnQ0FBZ0MscUVDMUI3Qyw4NEdBb0dBOzJGRDFFYSxnQ0FBZ0M7a0JBTDVDLFNBQVM7K0JBQ0UsK0JBQStCLG1CQUV4Qix1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBVbnR5cGVkRm9ybUJ1aWxkZXIsXG4gIFVudHlwZWRGb3JtR3JvdXAsXG4gIFZhbGlkYXRvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgT3JkZXJBcHByb3ZhbCxcbiAgT3JkZXJBcHByb3ZhbERlY2lzaW9uVmFsdWUsXG59IGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWwvb3JkZXItYXBwcm92YWwubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJBcHByb3ZhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL29yZGVyLWFwcHJvdmFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJBcHByb3ZhbERldGFpbFNlcnZpY2UgfSBmcm9tICcuLi9vcmRlci1hcHByb3ZhbC1kZXRhaWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW9yZGVyLWFwcHJvdmFsLWRldGFpbC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLWFwcHJvdmFsLWRldGFpbC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyQXBwcm92YWxEZXRhaWxGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgYXBwcm92YWxEZWNpc2lvblZhbHVlID0gT3JkZXJBcHByb3ZhbERlY2lzaW9uVmFsdWU7XG4gIGFwcHJvdmFsRGVjaXNpb246IE9yZGVyQXBwcm92YWxEZWNpc2lvblZhbHVlO1xuICBhcHByb3ZhbEZvcm1WaXNpYmxlID0gZmFsc2U7XG4gIGFwcHJvdmFsRm9ybTogVW50eXBlZEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIGNvbW1lbnQ6IFsnJ10sXG4gIH0pO1xuXG4gIHByb3RlY3RlZCBvcmRlckFwcHJvdmFsTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPVxuICAgIHRoaXMub3JkZXJBcHByb3ZhbERldGFpbFNlcnZpY2VcbiAgICAgIC5nZXRPcmRlckFwcHJvdmFsQ29kZUZyb21Sb3V0ZSgpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKChhcHByb3ZhbENvZGU6IHN0cmluZykgPT5cbiAgICAgICAgICB0aGlzLm9yZGVyQXBwcm92YWxTZXJ2aWNlLmdldE9yZGVyQXBwcm92YWxMb2FkaW5nKGFwcHJvdmFsQ29kZSlcbiAgICAgICAgKVxuICAgICAgKTtcblxuICBwcm90ZWN0ZWQgZGVjaXNpb25SZXN1bHRMb2FkaW5nJCA9XG4gICAgdGhpcy5vcmRlckFwcHJvdmFsU2VydmljZS5nZXRNYWtlRGVjaXNpb25SZXN1bHRMb2FkaW5nKCk7XG5cbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSBjb21iaW5lTGF0ZXN0KFtcbiAgICB0aGlzLm9yZGVyQXBwcm92YWxMb2FkaW5nJCxcbiAgICB0aGlzLmRlY2lzaW9uUmVzdWx0TG9hZGluZyQsXG4gIF0pLnBpcGUoXG4gICAgbWFwKFxuICAgICAgKFthcHByb3ZhbExvYWRpbmcsIGRlY2lzaW9uUmVzdWx0TG9hZGluZ10pID0+XG4gICAgICAgIGFwcHJvdmFsTG9hZGluZyB8fCBkZWNpc2lvblJlc3VsdExvYWRpbmdcbiAgICApXG4gICk7XG5cbiAgb3JkZXJBcHByb3ZhbCQ6IE9ic2VydmFibGU8T3JkZXJBcHByb3ZhbCB8IHVuZGVmaW5lZD4gPVxuICAgIHRoaXMub3JkZXJBcHByb3ZhbERldGFpbFNlcnZpY2UuZ2V0T3JkZXJBcHByb3ZhbCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBvcmRlckFwcHJvdmFsRGV0YWlsU2VydmljZTogT3JkZXJBcHByb3ZhbERldGFpbFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG9yZGVyQXBwcm92YWxTZXJ2aWNlOiBPcmRlckFwcHJvdmFsU2VydmljZSxcbiAgICBwcml2YXRlIGZiOiBVbnR5cGVkRm9ybUJ1aWxkZXJcbiAgKSB7XG4gICAgdGhpcy5vcmRlckFwcHJvdmFsU2VydmljZS5yZXNldE1ha2VEZWNpc2lvblByb2Nlc3NTdGF0ZSgpO1xuICB9XG5cbiAgZGlzcGxheURlY2lzaW9uRm9ybShkZWNpc2lvbjogT3JkZXJBcHByb3ZhbERlY2lzaW9uVmFsdWUpIHtcbiAgICB0aGlzLmFwcHJvdmFsRGVjaXNpb24gPSBkZWNpc2lvbjtcbiAgICBpZiAoZGVjaXNpb24gPT09IE9yZGVyQXBwcm92YWxEZWNpc2lvblZhbHVlLkFQUFJPVkUpIHtcbiAgICAgIHRoaXMuYXBwcm92YWxGb3JtLmNvbnRyb2xzLmNvbW1lbnQuY2xlYXJWYWxpZGF0b3JzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXBwcm92YWxGb3JtLmNvbnRyb2xzLmNvbW1lbnQuc2V0VmFsaWRhdG9ycyhbVmFsaWRhdG9ycy5yZXF1aXJlZF0pO1xuICAgIH1cbiAgICB0aGlzLmFwcHJvdmFsRm9ybVZpc2libGUgPSB0cnVlO1xuICB9XG5cbiAgY2FuY2VsRGVjaXNpb25Gb3JtKCkge1xuICAgIHRoaXMuYXBwcm92YWxGb3JtVmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuYXBwcm92YWxGb3JtLnJlc2V0KCk7XG4gIH1cblxuICBzdWJtaXREZWNpc2lvbihvcmRlckFwcHJvdmFsOiBPcmRlckFwcHJvdmFsKSB7XG4gICAgaWYgKHRoaXMuYXBwcm92YWxGb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLm9yZGVyQXBwcm92YWxTZXJ2aWNlLm1ha2VEZWNpc2lvbihvcmRlckFwcHJvdmFsLmNvZGUgPz8gJycsIHtcbiAgICAgICAgZGVjaXNpb246IHRoaXMuYXBwcm92YWxEZWNpc2lvbixcbiAgICAgICAgY29tbWVudDogdGhpcy5hcHByb3ZhbEZvcm0uY29udHJvbHMuY29tbWVudC52YWx1ZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hcHByb3ZhbEZvcm1WaXNpYmxlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXBwcm92YWxGb3JtLm1hcmtBbGxBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm9yZGVyQXBwcm92YWxTZXJ2aWNlLnJlc2V0TWFrZURlY2lzaW9uUHJvY2Vzc1N0YXRlKCk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJvcmRlckFwcHJvdmFsJCB8IGFzeW5jIGFzIG9yZGVyQXBwcm92YWxcIj5cbiAgPGRpdiAqbmdJZj1cImxvYWRpbmckIHwgYXN5bmM7IGVsc2UgYXBwcm92YWxGb3JtVGVtcGxhdGVcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY3gtc3Bpbm5lclwiPlxuICAgICAgPGN4LXNwaW5uZXI+PC9jeC1zcGlubmVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8bmctdGVtcGxhdGUgI2FwcHJvdmFsRm9ybVRlbXBsYXRlPlxuICAgIDxkaXYgcm9sZT1cInN0YXR1c1wiIFthdHRyLmFyaWEtbGFiZWxdPVwiJ2NvbW1vbi5sb2FkZWQnIHwgY3hUcmFuc2xhdGVcIj48L2Rpdj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwib3JkZXJBcHByb3ZhbD8uYXBwcm92YWxEZWNpc2lvblJlcXVpcmVkXCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwiYXBwcm92YWxGb3JtVmlzaWJsZVwiIGNsYXNzPVwiY3gtYXBwcm92YWwtZm9ybS1oZWFkZXIgcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjeC1hcHByb3ZhbC1mb3JtLWxhYmVsIGNvbC1zbS0xMlwiPlxuICAgICAgICAgIHt7XG4gICAgICAgICAgICAnb3JkZXJBcHByb3ZhbERldGFpbHMuZm9ybS50aXRsZV8nICsgYXBwcm92YWxEZWNpc2lvblxuICAgICAgICAgICAgICB8IGN4VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyQ29kZTogb3JkZXJBcHByb3ZhbD8ub3JkZXI/LmNvZGUsXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyVG90YWw6XG4gICAgICAgICAgICAgICAgICAgICAgb3JkZXJBcHByb3ZhbD8ub3JkZXI/LnRvdGFsUHJpY2VXaXRoVGF4Py5mb3JtYXR0ZWRWYWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxmb3JtXG4gICAgICAgIFtmb3JtR3JvdXBdPVwiYXBwcm92YWxGb3JtXCJcbiAgICAgICAgKG5nU3VibWl0KT1cInN1Ym1pdERlY2lzaW9uKG9yZGVyQXBwcm92YWwpXCJcbiAgICAgICAgKm5nSWY9XCJhcHByb3ZhbEZvcm1WaXNpYmxlXCJcbiAgICAgID5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgPnt7XG4gICAgICAgICAgICAnb3JkZXJBcHByb3ZhbERldGFpbHMuZm9ybS5jb21tZW50XycgKyBhcHByb3ZhbERlY2lzaW9uICsgJy5sYWJlbCdcbiAgICAgICAgICAgICAgfCBjeFRyYW5zbGF0ZVxuICAgICAgICAgIH19XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICByb3dzPVwiM1wiXG4gICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJjb21tZW50XCJcbiAgICAgICAgICAgIG1heGxlbmd0aD1cIjI1NVwiXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPGN4LWZvcm0tZXJyb3JzXG4gICAgICAgICAgICBbY29udHJvbF09XCJhcHByb3ZhbEZvcm0uZ2V0KCdjb21tZW50JylcIlxuICAgICAgICAgID48L2N4LWZvcm0tZXJyb3JzPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTYgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImNhbmNlbERlY2lzaW9uRm9ybSgpXCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7ICdvcmRlckFwcHJvdmFsRGV0YWlscy5mb3JtLmNhbmNlbCcgfCBjeFRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02IGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgJ29yZGVyQXBwcm92YWxEZXRhaWxzLmZvcm0uc3VibWl0XycgKyBhcHByb3ZhbERlY2lzaW9uXG4gICAgICAgICAgICAgICAgICB8IGN4VHJhbnNsYXRlXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFhcHByb3ZhbEZvcm1WaXNpYmxlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00IGNvbC1tZC0xMlwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBbcm91dGVyTGlua109XCJ7IGN4Um91dGU6ICdvcmRlckFwcHJvdmFscycgfSB8IGN4VXJsXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgID57eyAnb3JkZXJBcHByb3ZhbERldGFpbHMuYmFjaycgfCBjeFRyYW5zbGF0ZSB9fTwvYVxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImNvbC1sZy00IGNvbC1tZC0xMlwiXG4gICAgICAgICAgKm5nSWY9XCJvcmRlckFwcHJvdmFsPy5hcHByb3ZhbERlY2lzaW9uUmVxdWlyZWRcIlxuICAgICAgICA+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgIChjbGljayk9XCJkaXNwbGF5RGVjaXNpb25Gb3JtKGFwcHJvdmFsRGVjaXNpb25WYWx1ZS5SRUpFQ1QpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyAnb3JkZXJBcHByb3ZhbERldGFpbHMuc2hvd0Zvcm1fUkVKRUNUJyB8IGN4VHJhbnNsYXRlIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJjb2wtbGctNCBjb2wtbWQtMTJcIlxuICAgICAgICAgICpuZ0lmPVwib3JkZXJBcHByb3ZhbD8uYXBwcm92YWxEZWNpc2lvblJlcXVpcmVkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiZGlzcGxheURlY2lzaW9uRm9ybShhcHByb3ZhbERlY2lzaW9uVmFsdWUuQVBQUk9WRSlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7ICdvcmRlckFwcHJvdmFsRGV0YWlscy5zaG93Rm9ybV9BUFBST1ZFJyB8IGN4VHJhbnNsYXRlIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvbmctdGVtcGxhdGU+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==