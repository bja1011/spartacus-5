/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Component } from '@angular/core';
import { GlobalMessageType, } from '@spartacus/core';
import { BehaviorSubject, combineLatest, concat, Subscription, } from 'rxjs';
import { distinctUntilChanged, filter, map, scan, skipWhile, tap, withLatestFrom, } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "@angular/common";
import * as i3 from "../../../../shared/components/spinner/spinner.component";
import * as i4 from "./consent-form/consent-management-form.component";
export class ConsentManagementComponent {
    constructor(userConsentService, globalMessageService, anonymousConsentsConfig, anonymousConsentsService, authService) {
        this.userConsentService = userConsentService;
        this.globalMessageService = globalMessageService;
        this.anonymousConsentsConfig = anonymousConsentsConfig;
        this.anonymousConsentsService = anonymousConsentsService;
        this.authService = authService;
        this.subscriptions = new Subscription();
        this.allConsentsLoading = new BehaviorSubject(false);
        this.requiredConsents = [];
    }
    ngOnInit() {
        this.loading$ = combineLatest([
            this.userConsentService.getConsentsResultLoading(),
            this.userConsentService.getGiveConsentResultLoading(),
            this.userConsentService.getWithdrawConsentResultLoading(),
            this.authService.isUserLoggedIn(),
            this.allConsentsLoading,
        ]).pipe(map(([consentLoading, giveConsentLoading, withdrawConsentLoading, isUserLoggedIn, allConsentsLoading,]) => consentLoading ||
            giveConsentLoading ||
            withdrawConsentLoading ||
            !isUserLoggedIn ||
            allConsentsLoading));
        this.consentListInit();
        this.giveConsentInit();
        this.withdrawConsentInit();
    }
    consentListInit() {
        this.templateList$ = this.userConsentService.getConsents().pipe(withLatestFrom(this.anonymousConsentsService.getTemplates(), this.authService.isUserLoggedIn()), filter(([_templateList, _anonymousTemplates, isUserLoggedIn]) => isUserLoggedIn), tap(([templateList, _anonymousTemplates]) => {
            if (!this.consentsExists(templateList)) {
                this.userConsentService.loadConsents();
            }
        }), map(([templateList, anonymousTemplates]) => {
            if (this.anonymousConsentsConfig.anonymousConsents) {
                if (this.anonymousConsentsConfig.anonymousConsents.requiredConsents) {
                    this.requiredConsents =
                        this.anonymousConsentsConfig.anonymousConsents.requiredConsents;
                }
                if (this.anonymousConsentsConfig.anonymousConsents.consentManagementPage) {
                    return this.hideAnonymousConsents(templateList, anonymousTemplates);
                }
            }
            return templateList;
        }));
    }
    hideAnonymousConsents(templateList, anonymousTemplates = []) {
        let hideTemplateIds = [];
        if (!this.anonymousConsentsConfig.anonymousConsents?.consentManagementPage
            ?.showAnonymousConsents) {
            hideTemplateIds = anonymousTemplates.map((template) => template.id ?? '');
            return this.userConsentService.filterConsentTemplates(templateList, hideTemplateIds);
        }
        if (this.anonymousConsentsConfig.anonymousConsents.consentManagementPage
            .hideConsents &&
            this.anonymousConsentsConfig.anonymousConsents.consentManagementPage
                .hideConsents.length > 0) {
            hideTemplateIds =
                this.anonymousConsentsConfig.anonymousConsents.consentManagementPage
                    .hideConsents;
        }
        return this.userConsentService.filterConsentTemplates(templateList, hideTemplateIds);
    }
    giveConsentInit() {
        this.userConsentService.resetGiveConsentProcessState();
        this.subscriptions.add(this.userConsentService
            .getGiveConsentResultSuccess()
            .subscribe((success) => this.onConsentGivenSuccess(success)));
    }
    withdrawConsentInit() {
        this.userConsentService.resetWithdrawConsentProcessState();
        this.subscriptions.add(this.userConsentService
            .getWithdrawConsentResultLoading()
            .pipe(skipWhile(Boolean), withLatestFrom(this.userConsentService.getWithdrawConsentResultSuccess()), map(([, withdrawalSuccess]) => withdrawalSuccess), tap((withdrawalSuccess) => {
            if (withdrawalSuccess) {
                this.userConsentService.loadConsents();
            }
        }))
            .subscribe((withdrawalSuccess) => this.onConsentWithdrawnSuccess(withdrawalSuccess)));
    }
    consentsExists(templateList) {
        return Boolean(templateList) && templateList.length > 0;
    }
    onConsentChange({ given, template, }) {
        if (given && template.id && template.version !== undefined) {
            this.userConsentService.giveConsent(template.id, template.version);
        }
        else if (template.currentConsent?.code) {
            this.userConsentService.withdrawConsent(template.currentConsent.code);
        }
    }
    onConsentGivenSuccess(success) {
        if (success) {
            this.userConsentService.resetGiveConsentProcessState();
            this.globalMessageService.add({ key: 'consentManagementForm.message.success.given' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    }
    onConsentWithdrawnSuccess(success) {
        if (success) {
            this.userConsentService.resetWithdrawConsentProcessState();
            this.globalMessageService.add({ key: 'consentManagementForm.message.success.withdrawn' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
    }
    rejectAll(templates = []) {
        const consentsToWithdraw = [];
        templates.forEach((template) => {
            if (template.currentConsent &&
                this.userConsentService.isConsentGiven(template.currentConsent)) {
                if (this.isRequiredConsent(template)) {
                    return;
                }
                consentsToWithdraw.push(template);
            }
        });
        this.allConsentsLoading.next(true);
        this.subscriptions.add(this.setupWithdrawalStream(consentsToWithdraw)
            .pipe(tap((_timesLoaded) => this.allConsentsLoading.next(false)))
            .subscribe());
    }
    setupWithdrawalStream(consentsToWithdraw = []) {
        const loading$ = concat(this.userConsentService.getWithdrawConsentResultLoading()).pipe(distinctUntilChanged(), filter((loading) => !loading));
        const count$ = loading$.pipe(scan((acc, _value) => acc + 1, -1));
        const withdraw$ = count$.pipe(tap((i) => {
            if (i < consentsToWithdraw.length) {
                const code = consentsToWithdraw[i].currentConsent?.code;
                if (code) {
                    this.userConsentService.withdrawConsent(code);
                }
            }
        }));
        const checkTimesLoaded$ = withdraw$.pipe(filter((timesLoaded) => timesLoaded === consentsToWithdraw.length));
        return checkTimesLoaded$;
    }
    allowAll(templates = []) {
        const consentsToGive = [];
        templates.forEach((template) => {
            if (template.currentConsent &&
                this.userConsentService.isConsentWithdrawn(template.currentConsent)) {
                if (this.isRequiredConsent(template)) {
                    return;
                }
            }
            consentsToGive.push(template);
        });
        this.allConsentsLoading.next(true);
        this.subscriptions.add(this.setupGiveStream(consentsToGive)
            .pipe(tap((_timesLoaded) => this.allConsentsLoading.next(false)))
            .subscribe());
    }
    setupGiveStream(consentsToGive = []) {
        const loading$ = concat(this.userConsentService.getGiveConsentResultLoading()).pipe(distinctUntilChanged(), filter((loading) => !loading));
        const count$ = loading$.pipe(scan((acc, _value) => acc + 1, -1));
        const giveConsent$ = count$.pipe(tap((i) => {
            if (i < consentsToGive.length) {
                const consent = consentsToGive[i];
                if (consent.id && consent.version !== undefined) {
                    this.userConsentService.giveConsent(consent.id, consent.version);
                }
            }
        }));
        const checkTimesLoaded$ = giveConsent$.pipe(filter((timesLoaded) => timesLoaded === consentsToGive.length));
        return checkTimesLoaded$;
    }
    isRequiredConsent(template) {
        return Boolean(template.id &&
            this.anonymousConsentsConfig.anonymousConsents &&
            this.anonymousConsentsConfig.anonymousConsents?.requiredConsents &&
            this.anonymousConsentsConfig.anonymousConsents.requiredConsents.includes(template.id));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this.allConsentsLoading.unsubscribe();
        this.userConsentService.resetGiveConsentProcessState();
        this.userConsentService.resetWithdrawConsentProcessState();
    }
}
ConsentManagementComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ConsentManagementComponent, deps: [{ token: i1.UserConsentService }, { token: i1.GlobalMessageService }, { token: i1.AnonymousConsentsConfig }, { token: i1.AnonymousConsentsService }, { token: i1.AuthService }], target: i0.ɵɵFactoryTarget.Component });
ConsentManagementComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: ConsentManagementComponent, selector: "cx-consent-management", ngImport: i0, template: "<div *ngIf=\"loading$ | async; else consentManagementForm\">\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</div>\n\n<ng-template #consentManagementForm>\n  <div role=\"status\" [attr.aria-label]=\"'common.loaded' | cxTranslate\"></div>\n  <ng-container *ngIf=\"templateList$ | async as templateList\">\n    <div class=\"cx-consent-action-links\">\n      <div class=\"col-sm-12 col-md-8 col-lg-6\">\n        <button\n          tabindex=\"0\"\n          class=\"btn btn-link cx-action-link\"\n          (click)=\"rejectAll(templateList)\"\n        >\n          {{ 'consentManagementForm.clearAll' | cxTranslate }}\n        </button>\n        <button\n          tabindex=\"0\"\n          class=\"btn btn-link cx-action-link\"\n          (click)=\"allowAll(templateList)\"\n        >\n          {{ 'consentManagementForm.selectAll' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n\n    <div class=\"cx-consent-toggles\">\n      <div class=\"col-sm-12 col-md-8 col-lg-6\">\n        <cx-consent-management-form\n          *ngFor=\"let consentTemplate of templateList\"\n          [consentTemplate]=\"consentTemplate\"\n          [requiredConsents]=\"requiredConsents\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n      </div>\n    </div>\n  </ng-container>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.SpinnerComponent, selector: "cx-spinner" }, { kind: "component", type: i4.ConsentManagementFormComponent, selector: "cx-consent-management-form", inputs: ["consentTemplate", "requiredConsents", "consent"], outputs: ["consentChanged"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "pipe", type: i1.TranslatePipe, name: "cxTranslate" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ConsentManagementComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-consent-management', template: "<div *ngIf=\"loading$ | async; else consentManagementForm\">\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</div>\n\n<ng-template #consentManagementForm>\n  <div role=\"status\" [attr.aria-label]=\"'common.loaded' | cxTranslate\"></div>\n  <ng-container *ngIf=\"templateList$ | async as templateList\">\n    <div class=\"cx-consent-action-links\">\n      <div class=\"col-sm-12 col-md-8 col-lg-6\">\n        <button\n          tabindex=\"0\"\n          class=\"btn btn-link cx-action-link\"\n          (click)=\"rejectAll(templateList)\"\n        >\n          {{ 'consentManagementForm.clearAll' | cxTranslate }}\n        </button>\n        <button\n          tabindex=\"0\"\n          class=\"btn btn-link cx-action-link\"\n          (click)=\"allowAll(templateList)\"\n        >\n          {{ 'consentManagementForm.selectAll' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n\n    <div class=\"cx-consent-toggles\">\n      <div class=\"col-sm-12 col-md-8 col-lg-6\">\n        <cx-consent-management-form\n          *ngFor=\"let consentTemplate of templateList\"\n          [consentTemplate]=\"consentTemplate\"\n          [requiredConsents]=\"requiredConsents\"\n          (consentChanged)=\"onConsentChange($event)\"\n        ></cx-consent-management-form>\n      </div>\n    </div>\n  </ng-container>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.UserConsentService }, { type: i1.GlobalMessageService }, { type: i1.AnonymousConsentsConfig }, { type: i1.AnonymousConsentsService }, { type: i1.AuthService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2VudC1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2NvbnNlbnQtbWFuYWdlbWVudC9jb21wb25lbnRzL2NvbnNlbnQtbWFuYWdlbWVudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL2Ntcy1jb21wb25lbnRzL215YWNjb3VudC9jb25zZW50LW1hbmFnZW1lbnQvY29tcG9uZW50cy9jb25zZW50LW1hbmFnZW1lbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFNTCxpQkFBaUIsR0FFbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQ0wsZUFBZSxFQUNmLGFBQWEsRUFDYixNQUFNLEVBRU4sWUFBWSxHQUNiLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILElBQUksRUFDSixTQUFTLEVBQ1QsR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFNeEIsTUFBTSxPQUFPLDBCQUEwQjtJQVNyQyxZQUNZLGtCQUFzQyxFQUN0QyxvQkFBMEMsRUFDMUMsdUJBQWdELEVBQ2hELHdCQUFrRCxFQUNsRCxXQUF3QjtRQUp4Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGdCQUFXLEdBQVgsV0FBVyxDQUFh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QUMsQ0FBQztpQkFDbEU7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7UUFDRixNQUFNLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxJQUFJLENBQ3pDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsV0FBVyxLQUFLLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FDL0QsQ0FBQztRQUVGLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVPLGlCQUFpQixDQUFDLFFBQXlCO1FBQ2pELE9BQU8sT0FBTyxDQUNaLFFBQVEsQ0FBQyxFQUFFO1lBQ1QsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQjtZQUM5QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCO1lBQ2hFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQ3RFLFFBQVEsQ0FBQyxFQUFFLENBQ1osQ0FDSixDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUV0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQztJQUM3RCxDQUFDOzt1SEExU1UsMEJBQTBCOzJHQUExQiwwQkFBMEIsNkRDckN2QyxxMUNBd0NBOzJGREhhLDBCQUEwQjtrQkFKdEMsU0FBUzsrQkFDRSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLFxuICBBdXRoU2VydmljZSxcbiAgQ29uc2VudFRlbXBsYXRlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFVzZXJDb25zZW50U2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7XG4gIEJlaGF2aW9yU3ViamVjdCxcbiAgY29tYmluZUxhdGVzdCxcbiAgY29uY2F0LFxuICBPYnNlcnZhYmxlLFxuICBTdWJzY3JpcHRpb24sXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBzY2FuLFxuICBza2lwV2hpbGUsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY29uc2VudC1tYW5hZ2VtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnNlbnQtbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnNlbnRNYW5hZ2VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIHByaXZhdGUgYWxsQ29uc2VudHNMb2FkaW5nID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgdGVtcGxhdGVMaXN0JDogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT47XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIHJlcXVpcmVkQ29uc2VudHM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHVzZXJDb25zZW50U2VydmljZTogVXNlckNvbnNlbnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFub255bW91c0NvbnNlbnRzQ29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyxcbiAgICBwcm90ZWN0ZWQgYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlOiBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudHNSZXN1bHRMb2FkaW5nKCksXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5nZXRHaXZlQ29uc2VudFJlc3VsdExvYWRpbmcoKSxcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldFdpdGhkcmF3Q29uc2VudFJlc3VsdExvYWRpbmcoKSxcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKSxcbiAgICAgIHRoaXMuYWxsQ29uc2VudHNMb2FkaW5nLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChbXG4gICAgICAgICAgY29uc2VudExvYWRpbmcsXG4gICAgICAgICAgZ2l2ZUNvbnNlbnRMb2FkaW5nLFxuICAgICAgICAgIHdpdGhkcmF3Q29uc2VudExvYWRpbmcsXG4gICAgICAgICAgaXNVc2VyTG9nZ2VkSW4sXG4gICAgICAgICAgYWxsQ29uc2VudHNMb2FkaW5nLFxuICAgICAgICBdKSA9PlxuICAgICAgICAgIGNvbnNlbnRMb2FkaW5nIHx8XG4gICAgICAgICAgZ2l2ZUNvbnNlbnRMb2FkaW5nIHx8XG4gICAgICAgICAgd2l0aGRyYXdDb25zZW50TG9hZGluZyB8fFxuICAgICAgICAgICFpc1VzZXJMb2dnZWRJbiB8fFxuICAgICAgICAgIGFsbENvbnNlbnRzTG9hZGluZ1xuICAgICAgKVxuICAgICk7XG4gICAgdGhpcy5jb25zZW50TGlzdEluaXQoKTtcbiAgICB0aGlzLmdpdmVDb25zZW50SW5pdCgpO1xuICAgIHRoaXMud2l0aGRyYXdDb25zZW50SW5pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zZW50TGlzdEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50ZW1wbGF0ZUxpc3QkID0gdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2V0Q29uc2VudHMoKS5waXBlKFxuICAgICAgd2l0aExhdGVzdEZyb20oXG4gICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLmdldFRlbXBsYXRlcygpLFxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKClcbiAgICAgICksXG4gICAgICBmaWx0ZXIoXG4gICAgICAgIChbX3RlbXBsYXRlTGlzdCwgX2Fub255bW91c1RlbXBsYXRlcywgaXNVc2VyTG9nZ2VkSW5dKSA9PiBpc1VzZXJMb2dnZWRJblxuICAgICAgKSxcbiAgICAgIHRhcCgoW3RlbXBsYXRlTGlzdCwgX2Fub255bW91c1RlbXBsYXRlc10pID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnNlbnRzRXhpc3RzKHRlbXBsYXRlTGlzdCkpIHtcbiAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5sb2FkQ29uc2VudHMoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKFt0ZW1wbGF0ZUxpc3QsIGFub255bW91c1RlbXBsYXRlc10pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMpIHtcbiAgICAgICAgICBpZiAodGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5yZXF1aXJlZENvbnNlbnRzKSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVpcmVkQ29uc2VudHMgPVxuICAgICAgICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMuY29uc2VudE1hbmFnZW1lbnRQYWdlXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oaWRlQW5vbnltb3VzQ29uc2VudHModGVtcGxhdGVMaXN0LCBhbm9ueW1vdXNUZW1wbGF0ZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZUxpc3Q7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhpZGVBbm9ueW1vdXNDb25zZW50cyhcbiAgICB0ZW1wbGF0ZUxpc3Q6IENvbnNlbnRUZW1wbGF0ZVtdLFxuICAgIGFub255bW91c1RlbXBsYXRlczogQ29uc2VudFRlbXBsYXRlW10gPSBbXVxuICApOiBDb25zZW50VGVtcGxhdGVbXSB7XG4gICAgbGV0IGhpZGVUZW1wbGF0ZUlkczogc3RyaW5nW10gPSBbXTtcblxuICAgIGlmIChcbiAgICAgICF0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzPy5jb25zZW50TWFuYWdlbWVudFBhZ2VcbiAgICAgICAgPy5zaG93QW5vbnltb3VzQ29uc2VudHNcbiAgICApIHtcbiAgICAgIGhpZGVUZW1wbGF0ZUlkcyA9IGFub255bW91c1RlbXBsYXRlcy5tYXAoKHRlbXBsYXRlKSA9PiB0ZW1wbGF0ZS5pZCA/PyAnJyk7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZmlsdGVyQ29uc2VudFRlbXBsYXRlcyhcbiAgICAgICAgdGVtcGxhdGVMaXN0LFxuICAgICAgICBoaWRlVGVtcGxhdGVJZHNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5jb25zZW50TWFuYWdlbWVudFBhZ2VcbiAgICAgICAgLmhpZGVDb25zZW50cyAmJlxuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cy5jb25zZW50TWFuYWdlbWVudFBhZ2VcbiAgICAgICAgLmhpZGVDb25zZW50cy5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICBoaWRlVGVtcGxhdGVJZHMgPVxuICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLmNvbnNlbnRNYW5hZ2VtZW50UGFnZVxuICAgICAgICAgIC5oaWRlQ29uc2VudHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmZpbHRlckNvbnNlbnRUZW1wbGF0ZXMoXG4gICAgICB0ZW1wbGF0ZUxpc3QsXG4gICAgICBoaWRlVGVtcGxhdGVJZHNcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnaXZlQ29uc2VudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UucmVzZXRHaXZlQ29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZVxuICAgICAgICAuZ2V0R2l2ZUNvbnNlbnRSZXN1bHRTdWNjZXNzKClcbiAgICAgICAgLnN1YnNjcmliZSgoc3VjY2VzcykgPT4gdGhpcy5vbkNvbnNlbnRHaXZlblN1Y2Nlc3Moc3VjY2VzcykpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgd2l0aGRyYXdDb25zZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5yZXNldFdpdGhkcmF3Q29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZVxuICAgICAgICAuZ2V0V2l0aGRyYXdDb25zZW50UmVzdWx0TG9hZGluZygpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHNraXBXaGlsZShCb29sZWFuKSxcbiAgICAgICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldFdpdGhkcmF3Q29uc2VudFJlc3VsdFN1Y2Nlc3MoKVxuICAgICAgICAgICksXG4gICAgICAgICAgbWFwKChbLCB3aXRoZHJhd2FsU3VjY2Vzc10pID0+IHdpdGhkcmF3YWxTdWNjZXNzKSxcbiAgICAgICAgICB0YXAoKHdpdGhkcmF3YWxTdWNjZXNzKSA9PiB7XG4gICAgICAgICAgICBpZiAod2l0aGRyYXdhbFN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UubG9hZENvbnNlbnRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCh3aXRoZHJhd2FsU3VjY2VzcykgPT5cbiAgICAgICAgICB0aGlzLm9uQ29uc2VudFdpdGhkcmF3blN1Y2Nlc3Mod2l0aGRyYXdhbFN1Y2Nlc3MpXG4gICAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zZW50c0V4aXN0cyh0ZW1wbGF0ZUxpc3Q6IENvbnNlbnRUZW1wbGF0ZVtdKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGVtcGxhdGVMaXN0KSAmJiB0ZW1wbGF0ZUxpc3QubGVuZ3RoID4gMDtcbiAgfVxuXG4gIG9uQ29uc2VudENoYW5nZSh7XG4gICAgZ2l2ZW4sXG4gICAgdGVtcGxhdGUsXG4gIH06IHtcbiAgICBnaXZlbjogYm9vbGVhbjtcbiAgICB0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlO1xuICB9KTogdm9pZCB7XG4gICAgaWYgKGdpdmVuICYmIHRlbXBsYXRlLmlkICYmIHRlbXBsYXRlLnZlcnNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuZ2l2ZUNvbnNlbnQodGVtcGxhdGUuaWQsIHRlbXBsYXRlLnZlcnNpb24pO1xuICAgIH0gZWxzZSBpZiAodGVtcGxhdGUuY3VycmVudENvbnNlbnQ/LmNvZGUpIHtcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLndpdGhkcmF3Q29uc2VudCh0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudC5jb2RlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uQ29uc2VudEdpdmVuU3VjY2VzcyhzdWNjZXNzOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLnJlc2V0R2l2ZUNvbnNlbnRQcm9jZXNzU3RhdGUoKTtcbiAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICB7IGtleTogJ2NvbnNlbnRNYW5hZ2VtZW50Rm9ybS5tZXNzYWdlLnN1Y2Nlc3MuZ2l2ZW4nIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uQ29uc2VudFdpdGhkcmF3blN1Y2Nlc3Moc3VjY2VzczogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5yZXNldFdpdGhkcmF3Q29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHsga2V5OiAnY29uc2VudE1hbmFnZW1lbnRGb3JtLm1lc3NhZ2Uuc3VjY2Vzcy53aXRoZHJhd24nIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZWplY3RBbGwodGVtcGxhdGVzOiBDb25zZW50VGVtcGxhdGVbXSA9IFtdKTogdm9pZCB7XG4gICAgY29uc3QgY29uc2VudHNUb1dpdGhkcmF3OiBDb25zZW50VGVtcGxhdGVbXSA9IFtdO1xuICAgIHRlbXBsYXRlcy5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudCAmJlxuICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5pc0NvbnNlbnRHaXZlbih0ZW1wbGF0ZS5jdXJyZW50Q29uc2VudClcbiAgICAgICkge1xuICAgICAgICBpZiAodGhpcy5pc1JlcXVpcmVkQ29uc2VudCh0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc2VudHNUb1dpdGhkcmF3LnB1c2godGVtcGxhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5hbGxDb25zZW50c0xvYWRpbmcubmV4dCh0cnVlKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnNldHVwV2l0aGRyYXdhbFN0cmVhbShjb25zZW50c1RvV2l0aGRyYXcpXG4gICAgICAgIC5waXBlKHRhcCgoX3RpbWVzTG9hZGVkKSA9PiB0aGlzLmFsbENvbnNlbnRzTG9hZGluZy5uZXh0KGZhbHNlKSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwV2l0aGRyYXdhbFN0cmVhbShcbiAgICBjb25zZW50c1RvV2l0aGRyYXc6IENvbnNlbnRUZW1wbGF0ZVtdID0gW11cbiAgKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICBjb25zdCBsb2FkaW5nJCA9IGNvbmNhdChcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldFdpdGhkcmF3Q29uc2VudFJlc3VsdExvYWRpbmcoKVxuICAgICkucGlwZShcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBmaWx0ZXIoKGxvYWRpbmcpID0+ICFsb2FkaW5nKVxuICAgICk7XG4gICAgY29uc3QgY291bnQkID0gbG9hZGluZyQucGlwZShzY2FuKChhY2MsIF92YWx1ZSkgPT4gYWNjICsgMSwgLTEpKTtcbiAgICBjb25zdCB3aXRoZHJhdyQgPSBjb3VudCQucGlwZShcbiAgICAgIHRhcCgoaSkgPT4ge1xuICAgICAgICBpZiAoaSA8IGNvbnNlbnRzVG9XaXRoZHJhdy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBjb2RlID0gY29uc2VudHNUb1dpdGhkcmF3W2ldLmN1cnJlbnRDb25zZW50Py5jb2RlO1xuICAgICAgICAgIGlmIChjb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS53aXRoZHJhd0NvbnNlbnQoY29kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgY29uc3QgY2hlY2tUaW1lc0xvYWRlZCQgPSB3aXRoZHJhdyQucGlwZShcbiAgICAgIGZpbHRlcigodGltZXNMb2FkZWQpID0+IHRpbWVzTG9hZGVkID09PSBjb25zZW50c1RvV2l0aGRyYXcubGVuZ3RoKVxuICAgICk7XG5cbiAgICByZXR1cm4gY2hlY2tUaW1lc0xvYWRlZCQ7XG4gIH1cblxuICBhbGxvd0FsbCh0ZW1wbGF0ZXM6IENvbnNlbnRUZW1wbGF0ZVtdID0gW10pOiB2b2lkIHtcbiAgICBjb25zdCBjb25zZW50c1RvR2l2ZTogQ29uc2VudFRlbXBsYXRlW10gPSBbXTtcbiAgICB0ZW1wbGF0ZXMuZm9yRWFjaCgodGVtcGxhdGUpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdGVtcGxhdGUuY3VycmVudENvbnNlbnQgJiZcbiAgICAgICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UuaXNDb25zZW50V2l0aGRyYXduKHRlbXBsYXRlLmN1cnJlbnRDb25zZW50KVxuICAgICAgKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUmVxdWlyZWRDb25zZW50KHRlbXBsYXRlKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc2VudHNUb0dpdmUucHVzaCh0ZW1wbGF0ZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFsbENvbnNlbnRzTG9hZGluZy5uZXh0KHRydWUpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMuc2V0dXBHaXZlU3RyZWFtKGNvbnNlbnRzVG9HaXZlKVxuICAgICAgICAucGlwZSh0YXAoKF90aW1lc0xvYWRlZCkgPT4gdGhpcy5hbGxDb25zZW50c0xvYWRpbmcubmV4dChmYWxzZSkpKVxuICAgICAgICAuc3Vic2NyaWJlKClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cEdpdmVTdHJlYW0oXG4gICAgY29uc2VudHNUb0dpdmU6IENvbnNlbnRUZW1wbGF0ZVtdID0gW11cbiAgKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICBjb25zdCBsb2FkaW5nJCA9IGNvbmNhdChcbiAgICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLmdldEdpdmVDb25zZW50UmVzdWx0TG9hZGluZygpXG4gICAgKS5waXBlKFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIGZpbHRlcigobG9hZGluZykgPT4gIWxvYWRpbmcpXG4gICAgKTtcbiAgICBjb25zdCBjb3VudCQgPSBsb2FkaW5nJC5waXBlKHNjYW4oKGFjYywgX3ZhbHVlKSA9PiBhY2MgKyAxLCAtMSkpO1xuICAgIGNvbnN0IGdpdmVDb25zZW50JCA9IGNvdW50JC5waXBlKFxuICAgICAgdGFwKChpKSA9PiB7XG4gICAgICAgIGlmIChpIDwgY29uc2VudHNUb0dpdmUubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgY29uc2VudCA9IGNvbnNlbnRzVG9HaXZlW2ldO1xuICAgICAgICAgIGlmIChjb25zZW50LmlkICYmIGNvbnNlbnQudmVyc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJDb25zZW50U2VydmljZS5naXZlQ29uc2VudChjb25zZW50LmlkLCBjb25zZW50LnZlcnNpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIGNvbnN0IGNoZWNrVGltZXNMb2FkZWQkID0gZ2l2ZUNvbnNlbnQkLnBpcGUoXG4gICAgICBmaWx0ZXIoKHRpbWVzTG9hZGVkKSA9PiB0aW1lc0xvYWRlZCA9PT0gY29uc2VudHNUb0dpdmUubGVuZ3RoKVxuICAgICk7XG5cbiAgICByZXR1cm4gY2hlY2tUaW1lc0xvYWRlZCQ7XG4gIH1cblxuICBwcml2YXRlIGlzUmVxdWlyZWRDb25zZW50KHRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQm9vbGVhbihcbiAgICAgIHRlbXBsYXRlLmlkICYmXG4gICAgICAgIHRoaXMuYW5vbnltb3VzQ29uc2VudHNDb25maWcuYW5vbnltb3VzQ29uc2VudHMgJiZcbiAgICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c0NvbmZpZy5hbm9ueW1vdXNDb25zZW50cz8ucmVxdWlyZWRDb25zZW50cyAmJlxuICAgICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzQ29uZmlnLmFub255bW91c0NvbnNlbnRzLnJlcXVpcmVkQ29uc2VudHMuaW5jbHVkZXMoXG4gICAgICAgICAgdGVtcGxhdGUuaWRcbiAgICAgICAgKVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmFsbENvbnNlbnRzTG9hZGluZy51bnN1YnNjcmliZSgpO1xuXG4gICAgdGhpcy51c2VyQ29uc2VudFNlcnZpY2UucmVzZXRHaXZlQ29uc2VudFByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMudXNlckNvbnNlbnRTZXJ2aWNlLnJlc2V0V2l0aGRyYXdDb25zZW50UHJvY2Vzc1N0YXRlKCk7XG4gIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJsb2FkaW5nJCB8IGFzeW5jOyBlbHNlIGNvbnNlbnRNYW5hZ2VtZW50Rm9ybVwiPlxuICA8ZGl2IGNsYXNzPVwiY3gtc3Bpbm5lclwiPlxuICAgIDxjeC1zcGlubmVyPjwvY3gtc3Bpbm5lcj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPG5nLXRlbXBsYXRlICNjb25zZW50TWFuYWdlbWVudEZvcm0+XG4gIDxkaXYgcm9sZT1cInN0YXR1c1wiIFthdHRyLmFyaWEtbGFiZWxdPVwiJ2NvbW1vbi5sb2FkZWQnIHwgY3hUcmFuc2xhdGVcIj48L2Rpdj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRlbXBsYXRlTGlzdCQgfCBhc3luYyBhcyB0ZW1wbGF0ZUxpc3RcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY3gtY29uc2VudC1hY3Rpb24tbGlua3NcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgY29sLW1kLTggY29sLWxnLTZcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWxpbmsgY3gtYWN0aW9uLWxpbmtcIlxuICAgICAgICAgIChjbGljayk9XCJyZWplY3RBbGwodGVtcGxhdGVMaXN0KVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyAnY29uc2VudE1hbmFnZW1lbnRGb3JtLmNsZWFyQWxsJyB8IGN4VHJhbnNsYXRlIH19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICBjbGFzcz1cImJ0biBidG4tbGluayBjeC1hY3Rpb24tbGlua1wiXG4gICAgICAgICAgKGNsaWNrKT1cImFsbG93QWxsKHRlbXBsYXRlTGlzdClcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgJ2NvbnNlbnRNYW5hZ2VtZW50Rm9ybS5zZWxlY3RBbGwnIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjeC1jb25zZW50LXRvZ2dsZXNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgY29sLW1kLTggY29sLWxnLTZcIj5cbiAgICAgICAgPGN4LWNvbnNlbnQtbWFuYWdlbWVudC1mb3JtXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGNvbnNlbnRUZW1wbGF0ZSBvZiB0ZW1wbGF0ZUxpc3RcIlxuICAgICAgICAgIFtjb25zZW50VGVtcGxhdGVdPVwiY29uc2VudFRlbXBsYXRlXCJcbiAgICAgICAgICBbcmVxdWlyZWRDb25zZW50c109XCJyZXF1aXJlZENvbnNlbnRzXCJcbiAgICAgICAgICAoY29uc2VudENoYW5nZWQpPVwib25Db25zZW50Q2hhbmdlKCRldmVudClcIlxuICAgICAgICA+PC9jeC1jb25zZW50LW1hbmFnZW1lbnQtZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=