/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Component, HostBinding, HostListener, } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { distinctUntilChanged, take, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../cms-components/misc/icon/index';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../../../layout/launch-dialog/services/launch-dialog.service";
import * as i3 from "@angular/common";
import * as i4 from "../../../cms-components/misc/icon/icon.component";
import * as i5 from "../spinner/spinner.component";
import * as i6 from "../../../cms-components/myaccount/consent-management/components/consent-form/consent-management-form.component";
import * as i7 from "../../../layout/a11y/keyboard-focus/focus.directive";
export class AnonymousConsentDialogComponent {
    constructor(config, anonymousConsentsService, el, launchDialogService) {
        this.config = config;
        this.anonymousConsentsService = anonymousConsentsService;
        this.el = el;
        this.launchDialogService = launchDialogService;
        this.role = 'dialog';
        this.modal = true;
        this.subscriptions = new Subscription();
        this.showLegalDescription = true;
        this.iconTypes = ICON_TYPE;
        this.requiredConsents = [];
        this.focusConfig = {
            trap: true,
            block: true,
            autofocus: 'input[type="checkbox"]',
            focusOnEscape: true,
        };
        if (this.config.anonymousConsents) {
            this.showLegalDescription =
                this.config.anonymousConsents.showLegalDescriptionInDialog;
            if (this.config.anonymousConsents.requiredConsents) {
                this.requiredConsents = this.config.anonymousConsents.requiredConsents;
            }
        }
    }
    handleClick(event) {
        // Close on click outside the dialog window
        if (event.target.tagName === this.el.nativeElement.tagName) {
            this.close('Cross click');
        }
    }
    ngOnInit() {
        this.templates$ = this.anonymousConsentsService.getTemplates();
        this.consents$ = this.anonymousConsentsService.getConsents();
        this.loading$ = this.anonymousConsentsService.getLoadTemplatesLoading();
    }
    close(reason) {
        this.launchDialogService.closeDialog(reason);
    }
    rejectAll() {
        this.subscriptions.add(combineLatest([this.templates$, this.consents$])
            .pipe(take(1), distinctUntilChanged(), tap(([templates, consents]) => templates.forEach((template) => {
            const consent = this.getCorrespondingConsent(template, consents);
            if (consent &&
                this.anonymousConsentsService.isConsentGiven(consent)) {
                if (this.isRequiredConsent(template)) {
                    return;
                }
                if (template.id) {
                    this.anonymousConsentsService.withdrawConsent(template.id);
                }
            }
        })))
            .subscribe());
        this.close('rejectAll');
    }
    allowAll() {
        this.subscriptions.add(combineLatest([this.templates$, this.consents$])
            .pipe(take(1), distinctUntilChanged(), tap(([templates, consents]) => templates.forEach((template) => {
            const consent = this.getCorrespondingConsent(template, consents);
            if (consent &&
                (consent.consentState == null ||
                    this.anonymousConsentsService.isConsentWithdrawn(consent))) {
                if (this.isRequiredConsent(template)) {
                    return;
                }
                if (template.id) {
                    this.anonymousConsentsService.giveConsent(template.id);
                }
            }
        })))
            .subscribe());
        this.close('allowAll');
    }
    isRequiredConsent(template) {
        return Boolean(template.id &&
            this.config.anonymousConsents?.requiredConsents &&
            this.config.anonymousConsents.requiredConsents.includes(template.id));
    }
    onConsentChange({ given, template, }) {
        if (template.id) {
            if (given) {
                this.anonymousConsentsService.giveConsent(template.id);
            }
            else {
                this.anonymousConsentsService.withdrawConsent(template.id);
            }
        }
    }
    getCorrespondingConsent(template, consents = []) {
        for (const consent of consents) {
            if (template.id === consent.templateCode) {
                return consent;
            }
        }
        return null;
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
AnonymousConsentDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: AnonymousConsentDialogComponent, deps: [{ token: i1.AnonymousConsentsConfig }, { token: i1.AnonymousConsentsService }, { token: i0.ElementRef }, { token: i2.LaunchDialogService }], target: i0.ɵɵFactoryTarget.Component });
AnonymousConsentDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: AnonymousConsentDialogComponent, selector: "cx-anonymous-consent-dialog", host: { listeners: { "click": "handleClick($event)" }, properties: { "attr.role": "this.role", "attr.aria-modal": "this.modal" } }, ngImport: i0, template: "<div\n  class=\"cx-anonymous-consent-dialog\"\n  [cxFocus]=\"focusConfig\"\n  (esc)=\"close('Escape clicked')\"\n>\n  <div class=\"cx-dialog-content\">\n    <div *ngIf=\"loading$ | async; else dialogBody\">\n      <cx-spinner></cx-spinner>\n    </div>\n    <ng-template #dialogBody>\n      <div\n        role=\"status\"\n        [attr.aria-label]=\"'common.loaded' | cxTranslate\"\n      ></div>\n      <div class=\"cx-dialog-header\">\n        <h3>\n          {{ 'anonymousConsents.dialog.title' | cxTranslate }}\n        </h3>\n        <button\n          type=\"button\"\n          class=\"close\"\n          [attr.aria-label]=\"'common.close' | cxTranslate\"\n          (click)=\"close('Cross click')\"\n        >\n          <span aria-hidden=\"true\">\n            <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n          </span>\n        </button>\n      </div>\n      <!-- Separator -->\n      <div class=\"cx-dialog-description\" *ngIf=\"showLegalDescription\">\n        {{ 'anonymousConsents.dialog.legalDescription' | cxTranslate }}\n        <div\n          class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n        ></div>\n      </div>\n      <!-- Actions -->\n      <div class=\"cx-dialog-buttons\">\n        <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"rejectAll()\">{{\n          'anonymousConsents.dialog.clearAll' | cxTranslate\n        }}</a>\n        <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"allowAll()\">{{\n          'anonymousConsents.dialog.selectAll' | cxTranslate\n        }}</a>\n      </div>\n      <!-- Modal Body -->\n      <div class=\"cx-dialog-body\" *ngIf=\"templates$ | async as templates\">\n        <ng-container *ngIf=\"consents$ | async as consents\">\n          <div\n            class=\"cx-dialog-row col-sm-12 col-md-6\"\n            *ngFor=\"let template of templates\"\n          >\n            <cx-consent-management-form\n              [consentTemplate]=\"template\"\n              [requiredConsents]=\"requiredConsents\"\n              [consent]=\"getCorrespondingConsent(template, consents)\"\n              (consentChanged)=\"onConsentChange($event)\"\n            ></cx-consent-management-form>\n          </div>\n        </ng-container>\n      </div>\n    </ng-template>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.IconComponent, selector: "cx-icon,[cxIcon]", inputs: ["cxIcon", "type"] }, { kind: "component", type: i5.SpinnerComponent, selector: "cx-spinner" }, { kind: "component", type: i6.ConsentManagementFormComponent, selector: "cx-consent-management-form", inputs: ["consentTemplate", "requiredConsents", "consent"], outputs: ["consentChanged"] }, { kind: "directive", type: i7.FocusDirective, selector: "[cxFocus]", inputs: ["cxFocus"] }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }, { kind: "pipe", type: i1.TranslatePipe, name: "cxTranslate" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: AnonymousConsentDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-anonymous-consent-dialog', template: "<div\n  class=\"cx-anonymous-consent-dialog\"\n  [cxFocus]=\"focusConfig\"\n  (esc)=\"close('Escape clicked')\"\n>\n  <div class=\"cx-dialog-content\">\n    <div *ngIf=\"loading$ | async; else dialogBody\">\n      <cx-spinner></cx-spinner>\n    </div>\n    <ng-template #dialogBody>\n      <div\n        role=\"status\"\n        [attr.aria-label]=\"'common.loaded' | cxTranslate\"\n      ></div>\n      <div class=\"cx-dialog-header\">\n        <h3>\n          {{ 'anonymousConsents.dialog.title' | cxTranslate }}\n        </h3>\n        <button\n          type=\"button\"\n          class=\"close\"\n          [attr.aria-label]=\"'common.close' | cxTranslate\"\n          (click)=\"close('Cross click')\"\n        >\n          <span aria-hidden=\"true\">\n            <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n          </span>\n        </button>\n      </div>\n      <!-- Separator -->\n      <div class=\"cx-dialog-description\" *ngIf=\"showLegalDescription\">\n        {{ 'anonymousConsents.dialog.legalDescription' | cxTranslate }}\n        <div\n          class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n        ></div>\n      </div>\n      <!-- Actions -->\n      <div class=\"cx-dialog-buttons\">\n        <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"rejectAll()\">{{\n          'anonymousConsents.dialog.clearAll' | cxTranslate\n        }}</a>\n        <a tabindex=\"0\" class=\"btn-link cx-action-link\" (click)=\"allowAll()\">{{\n          'anonymousConsents.dialog.selectAll' | cxTranslate\n        }}</a>\n      </div>\n      <!-- Modal Body -->\n      <div class=\"cx-dialog-body\" *ngIf=\"templates$ | async as templates\">\n        <ng-container *ngIf=\"consents$ | async as consents\">\n          <div\n            class=\"cx-dialog-row col-sm-12 col-md-6\"\n            *ngFor=\"let template of templates\"\n          >\n            <cx-consent-management-form\n              [consentTemplate]=\"template\"\n              [requiredConsents]=\"requiredConsents\"\n              [consent]=\"getCorrespondingConsent(template, consents)\"\n              (consentChanged)=\"onConsentChange($event)\"\n            ></cx-consent-management-form>\n          </div>\n        </ng-container>\n      </div>\n    </ng-template>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.AnonymousConsentsConfig }, { type: i1.AnonymousConsentsService }, { type: i0.ElementRef }, { type: i2.LaunchDialogService }]; }, propDecorators: { role: [{
                type: HostBinding,
                args: ['attr.role']
            }], modal: [{
                type: HostBinding,
                args: ['attr.aria-modal']
            }], handleClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc2hhcmVkL2NvbXBvbmVudHMvYW5vbnltb3VzLWNvbnNlbnRzLWRpYWxvZy9hbm9ueW1vdXMtY29uc2VudC1kaWFsb2cuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zaGFyZWQvY29tcG9uZW50cy9hbm9ueW1vdXMtY29uc2VudHMtZGlhbG9nL2Fub255bW91cy1jb25zZW50LWRpYWxvZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLFNBQVMsRUFFVCxXQUFXLEVBQ1gsWUFBWSxHQUdiLE1BQU0sZUFBZSxDQUFDO0FBT3ZCLE9BQU8sRUFBRSxhQUFhLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7Ozs7Ozs7QUFRcEUsTUFBTSxPQUFPLCtCQUErQjtJQTZCMUMsWUFDWSxNQUErQixFQUMvQix3QkFBa0QsRUFDbEQsRUFBYyxFQUNkLG1CQUF3QztRQUh4QyxXQUFNLEdBQU4sTUFBTSxDQUF5QjtRQUMvQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBaEMxQixTQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ1YsVUFBSyxHQUFHLElBQUksQ0FBQztRQUVyQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0MseUJBQW9CLEdBQXdCLElBQUksQ0FBQztRQUNqRCxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQU1oQyxnQkFBVyxHQUFnQjtZQUN6QixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxJQUFJO1lBQ1gsU0FBUyxFQUFFLHdCQUF3QjtZQUNuQyxhQUFhLEVBQUUsSUFBSTtTQUNwQixDQUFDO1FBZ0JBLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtZQUNqQyxJQUFJLENBQUMsb0JBQW9CO2dCQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLDRCQUE0QixDQUFDO1lBQzdELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDbEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUM7YUFDeEU7U0FDRjtJQUNILENBQUM7SUFwQkQsV0FBVyxDQUFDLEtBQWM7UUFDeEIsMkNBQTJDO1FBQzNDLElBQUssS0FBSyxDQUFDLE1BQWMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFO1lBQ25FLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBaUJELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMvRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQzFFLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBWTtRQUNoQixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3BCLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzdDLElBQUksQ0FDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1Asb0JBQW9CLEVBQUUsRUFDdEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUM1QixTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDN0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNqRSxJQUNFLE9BQU87Z0JBQ1AsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFDckQ7Z0JBQ0EsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ3BDLE9BQU87aUJBQ1I7Z0JBRUQsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFO29CQUNmLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUM1RDthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FDRjthQUNBLFNBQVMsRUFBRSxDQUNmLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3BCLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzdDLElBQUksQ0FDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1Asb0JBQW9CLEVBQUUsRUFDdEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUM1QixTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDN0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNqRSxJQUNFLE9BQU87Z0JBQ1AsQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFJLElBQUk7b0JBQzNCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUM1RDtnQkFDQSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDcEMsT0FBTztpQkFDUjtnQkFFRCxJQUFJLFFBQVEsQ0FBQyxFQUFFLEVBQUU7b0JBQ2YsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ3hEO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUNGO2FBQ0EsU0FBUyxFQUFFLENBQ2YsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVPLGlCQUFpQixDQUFDLFFBQXlCO1FBQ2pELE9BQU8sT0FBTyxDQUNaLFFBQVEsQ0FBQyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxnQkFBZ0I7WUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUN2RSxDQUFDO0lBQ0osQ0FBQztJQUVELGVBQWUsQ0FBQyxFQUNkLEtBQUssRUFDTCxRQUFRLEdBSVQ7UUFDQyxJQUFJLFFBQVEsQ0FBQyxFQUFFLEVBQUU7WUFDZixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN4RDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM1RDtTQUNGO0lBQ0gsQ0FBQztJQUVELHVCQUF1QixDQUNyQixRQUF5QixFQUN6QixXQUErQixFQUFFO1FBRWpDLEtBQUssTUFBTSxPQUFPLElBQUksUUFBUSxFQUFFO1lBQzlCLElBQUksUUFBUSxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsWUFBWSxFQUFFO2dCQUN4QyxPQUFPLE9BQU8sQ0FBQzthQUNoQjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7NEhBdkpVLCtCQUErQjtnSEFBL0IsK0JBQStCLHVNQzlCNUMsK3ZFQWdFQTsyRkRsQ2EsK0JBQStCO2tCQUozQyxTQUFTOytCQUNFLDZCQUE2QjtnTkFJYixJQUFJO3NCQUE3QixXQUFXO3VCQUFDLFdBQVc7Z0JBQ1EsS0FBSztzQkFBcEMsV0FBVzt1QkFBQyxpQkFBaUI7Z0JBb0I5QixXQUFXO3NCQURWLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50LFxuICBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICBDb25zZW50VGVtcGxhdGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgRm9jdXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9pbmRleCc7XG5pbXBvcnQgeyBMYXVuY2hEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2xhdW5jaC1kaWFsb2cvc2VydmljZXMvbGF1bmNoLWRpYWxvZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fub255bW91cy1jb25zZW50LWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcm9sZSA9ICdkaWFsb2cnO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1tb2RhbCcpIG1vZGFsID0gdHJ1ZTtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgc2hvd0xlZ2FsRGVzY3JpcHRpb246IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB0cnVlO1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG4gIHJlcXVpcmVkQ29uc2VudHM6IHN0cmluZ1tdID0gW107XG5cbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHRlbXBsYXRlcyQ6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+O1xuICBjb25zZW50cyQ6IE9ic2VydmFibGU8QW5vbnltb3VzQ29uc2VudFtdPjtcblxuICBmb2N1c0NvbmZpZzogRm9jdXNDb25maWcgPSB7XG4gICAgdHJhcDogdHJ1ZSxcbiAgICBibG9jazogdHJ1ZSxcbiAgICBhdXRvZm9jdXM6ICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLFxuICAgIGZvY3VzT25Fc2NhcGU6IHRydWUsXG4gIH07XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBoYW5kbGVDbGljayhldmVudDogVUlFdmVudCk6IHZvaWQge1xuICAgIC8vIENsb3NlIG9uIGNsaWNrIG91dHNpZGUgdGhlIGRpYWxvZyB3aW5kb3dcbiAgICBpZiAoKGV2ZW50LnRhcmdldCBhcyBhbnkpLnRhZ05hbWUgPT09IHRoaXMuZWwubmF0aXZlRWxlbWVudC50YWdOYW1lKSB7XG4gICAgICB0aGlzLmNsb3NlKCdDcm9zcyBjbGljaycpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnLFxuICAgIHByb3RlY3RlZCBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIGxhdW5jaERpYWxvZ1NlcnZpY2U6IExhdW5jaERpYWxvZ1NlcnZpY2VcbiAgKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzKSB7XG4gICAgICB0aGlzLnNob3dMZWdhbERlc2NyaXB0aW9uID1cbiAgICAgICAgdGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMuc2hvd0xlZ2FsRGVzY3JpcHRpb25JbkRpYWxvZztcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZWRDb25zZW50cyA9IHRoaXMuY29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50ZW1wbGF0ZXMkID0gdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuZ2V0VGVtcGxhdGVzKCk7XG4gICAgdGhpcy5jb25zZW50cyQgPSB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5nZXRDb25zZW50cygpO1xuICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5nZXRMb2FkVGVtcGxhdGVzTG9hZGluZygpO1xuICB9XG5cbiAgY2xvc2UocmVhc29uPzogYW55KTogdm9pZCB7XG4gICAgdGhpcy5sYXVuY2hEaWFsb2dTZXJ2aWNlLmNsb3NlRGlhbG9nKHJlYXNvbik7XG4gIH1cblxuICByZWplY3RBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMudGVtcGxhdGVzJCwgdGhpcy5jb25zZW50cyRdKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgdGFwKChbdGVtcGxhdGVzLCBjb25zZW50c10pID0+XG4gICAgICAgICAgICB0ZW1wbGF0ZXMuZm9yRWFjaCgodGVtcGxhdGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY29uc2VudCA9IHRoaXMuZ2V0Q29ycmVzcG9uZGluZ0NvbnNlbnQodGVtcGxhdGUsIGNvbnNlbnRzKTtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGNvbnNlbnQgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5pc0NvbnNlbnRHaXZlbihjb25zZW50KVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1JlcXVpcmVkQ29uc2VudCh0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGVtcGxhdGUuaWQpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLndpdGhkcmF3Q29uc2VudCh0ZW1wbGF0ZS5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKClcbiAgICApO1xuICAgIHRoaXMuY2xvc2UoJ3JlamVjdEFsbCcpO1xuICB9XG5cbiAgYWxsb3dBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMudGVtcGxhdGVzJCwgdGhpcy5jb25zZW50cyRdKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgdGFwKChbdGVtcGxhdGVzLCBjb25zZW50c10pID0+XG4gICAgICAgICAgICB0ZW1wbGF0ZXMuZm9yRWFjaCgodGVtcGxhdGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY29uc2VudCA9IHRoaXMuZ2V0Q29ycmVzcG9uZGluZ0NvbnNlbnQodGVtcGxhdGUsIGNvbnNlbnRzKTtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGNvbnNlbnQgJiZcbiAgICAgICAgICAgICAgICAoY29uc2VudC5jb25zZW50U3RhdGUgPT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2UuaXNDb25zZW50V2l0aGRyYXduKGNvbnNlbnQpKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1JlcXVpcmVkQ29uc2VudCh0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGVtcGxhdGUuaWQpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdpdmVDb25zZW50KHRlbXBsYXRlLmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKVxuICAgICk7XG4gICAgdGhpcy5jbG9zZSgnYWxsb3dBbGwnKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNSZXF1aXJlZENvbnNlbnQodGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBCb29sZWFuKFxuICAgICAgdGVtcGxhdGUuaWQgJiZcbiAgICAgICAgdGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHM/LnJlcXVpcmVkQ29uc2VudHMgJiZcbiAgICAgICAgdGhpcy5jb25maWcuYW5vbnltb3VzQ29uc2VudHMucmVxdWlyZWRDb25zZW50cy5pbmNsdWRlcyh0ZW1wbGF0ZS5pZClcbiAgICApO1xuICB9XG5cbiAgb25Db25zZW50Q2hhbmdlKHtcbiAgICBnaXZlbixcbiAgICB0ZW1wbGF0ZSxcbiAgfToge1xuICAgIGdpdmVuOiBib29sZWFuO1xuICAgIHRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGU7XG4gIH0pOiB2b2lkIHtcbiAgICBpZiAodGVtcGxhdGUuaWQpIHtcbiAgICAgIGlmIChnaXZlbikge1xuICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS5naXZlQ29uc2VudCh0ZW1wbGF0ZS5pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS53aXRoZHJhd0NvbnNlbnQodGVtcGxhdGUuaWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENvcnJlc3BvbmRpbmdDb25zZW50KFxuICAgIHRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGUsXG4gICAgY29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXSA9IFtdXG4gICk6IEFub255bW91c0NvbnNlbnQgfCBudWxsIHtcbiAgICBmb3IgKGNvbnN0IGNvbnNlbnQgb2YgY29uc2VudHMpIHtcbiAgICAgIGlmICh0ZW1wbGF0ZS5pZCA9PT0gY29uc2VudC50ZW1wbGF0ZUNvZGUpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsIjxkaXZcbiAgY2xhc3M9XCJjeC1hbm9ueW1vdXMtY29uc2VudC1kaWFsb2dcIlxuICBbY3hGb2N1c109XCJmb2N1c0NvbmZpZ1wiXG4gIChlc2MpPVwiY2xvc2UoJ0VzY2FwZSBjbGlja2VkJylcIlxuPlxuICA8ZGl2IGNsYXNzPVwiY3gtZGlhbG9nLWNvbnRlbnRcIj5cbiAgICA8ZGl2ICpuZ0lmPVwibG9hZGluZyQgfCBhc3luYzsgZWxzZSBkaWFsb2dCb2R5XCI+XG4gICAgICA8Y3gtc3Bpbm5lcj48L2N4LXNwaW5uZXI+XG4gICAgPC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlICNkaWFsb2dCb2R5PlxuICAgICAgPGRpdlxuICAgICAgICByb2xlPVwic3RhdHVzXCJcbiAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInY29tbW9uLmxvYWRlZCcgfCBjeFRyYW5zbGF0ZVwiXG4gICAgICA+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3gtZGlhbG9nLWhlYWRlclwiPlxuICAgICAgICA8aDM+XG4gICAgICAgICAge3sgJ2Fub255bW91c0NvbnNlbnRzLmRpYWxvZy50aXRsZScgfCBjeFRyYW5zbGF0ZSB9fVxuICAgICAgICA8L2gzPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3M9XCJjbG9zZVwiXG4gICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInY29tbW9uLmNsb3NlJyB8IGN4VHJhbnNsYXRlXCJcbiAgICAgICAgICAoY2xpY2spPVwiY2xvc2UoJ0Nyb3NzIGNsaWNrJylcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICA8Y3gtaWNvbiBbdHlwZV09XCJpY29uVHlwZXMuQ0xPU0VcIj48L2N4LWljb24+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPCEtLSBTZXBhcmF0b3IgLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3gtZGlhbG9nLWRlc2NyaXB0aW9uXCIgKm5nSWY9XCJzaG93TGVnYWxEZXNjcmlwdGlvblwiPlxuICAgICAgICB7eyAnYW5vbnltb3VzQ29uc2VudHMuZGlhbG9nLmxlZ2FsRGVzY3JpcHRpb24nIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiY3gtZGlhbG9nLXNlcGFyYXRvciBjb2wtc20tMTIgZC14cy1ibG9jayBkLXNtLWJsb2NrIGQtbWQtbm9uZVwiXG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPCEtLSBBY3Rpb25zIC0tPlxuICAgICAgPGRpdiBjbGFzcz1cImN4LWRpYWxvZy1idXR0b25zXCI+XG4gICAgICAgIDxhIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiYnRuLWxpbmsgY3gtYWN0aW9uLWxpbmtcIiAoY2xpY2spPVwicmVqZWN0QWxsKClcIj57e1xuICAgICAgICAgICdhbm9ueW1vdXNDb25zZW50cy5kaWFsb2cuY2xlYXJBbGwnIHwgY3hUcmFuc2xhdGVcbiAgICAgICAgfX08L2E+XG4gICAgICAgIDxhIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiYnRuLWxpbmsgY3gtYWN0aW9uLWxpbmtcIiAoY2xpY2spPVwiYWxsb3dBbGwoKVwiPnt7XG4gICAgICAgICAgJ2Fub255bW91c0NvbnNlbnRzLmRpYWxvZy5zZWxlY3RBbGwnIHwgY3hUcmFuc2xhdGVcbiAgICAgICAgfX08L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwhLS0gTW9kYWwgQm9keSAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjeC1kaWFsb2ctYm9keVwiICpuZ0lmPVwidGVtcGxhdGVzJCB8IGFzeW5jIGFzIHRlbXBsYXRlc1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uc2VudHMkIHwgYXN5bmMgYXMgY29uc2VudHNcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImN4LWRpYWxvZy1yb3cgY29sLXNtLTEyIGNvbC1tZC02XCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCB0ZW1wbGF0ZSBvZiB0ZW1wbGF0ZXNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxjeC1jb25zZW50LW1hbmFnZW1lbnQtZm9ybVxuICAgICAgICAgICAgICBbY29uc2VudFRlbXBsYXRlXT1cInRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgW3JlcXVpcmVkQ29uc2VudHNdPVwicmVxdWlyZWRDb25zZW50c1wiXG4gICAgICAgICAgICAgIFtjb25zZW50XT1cImdldENvcnJlc3BvbmRpbmdDb25zZW50KHRlbXBsYXRlLCBjb25zZW50cylcIlxuICAgICAgICAgICAgICAoY29uc2VudENoYW5nZWQpPVwib25Db25zZW50Q2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgPjwvY3gtY29uc2VudC1tYW5hZ2VtZW50LWZvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==