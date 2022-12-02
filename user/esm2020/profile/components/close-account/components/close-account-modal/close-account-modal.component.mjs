/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component, HostListener, } from '@angular/core';
import { GlobalMessageType, } from '@spartacus/core';
import { ICON_TYPE, } from '@spartacus/storefront';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "@spartacus/user/profile/root";
import * as i3 from "@spartacus/storefront";
import * as i4 from "@angular/common";
export class CloseAccountModalComponent {
    constructor(authService, globalMessageService, routingService, translationService, userProfile, launchDialogService, el) {
        this.authService = authService;
        this.globalMessageService = globalMessageService;
        this.routingService = routingService;
        this.translationService = translationService;
        this.userProfile = userProfile;
        this.launchDialogService = launchDialogService;
        this.el = el;
        this.iconTypes = ICON_TYPE;
        this.focusConfig = {
            trap: true,
            block: true,
            autofocus: 'button',
            focusOnEscape: true,
        };
        this.loading$ = new BehaviorSubject(false);
    }
    handleClick(event) {
        if (event.target.tagName === this.el.nativeElement.tagName) {
            this.dismissModal('Cross click');
        }
    }
    get isLoading$() {
        return this.loading$.asObservable();
    }
    ngOnInit() {
        this.isLoggedIn$ = this.authService.isUserLoggedIn();
    }
    onSuccess() {
        this.dismissModal('Success');
        this.translationService
            .translate('closeAccount.accountClosedSuccessfully')
            .pipe(first())
            .subscribe((text) => {
            this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        });
        this.routingService.go({ cxRoute: 'home' });
    }
    onError() {
        this.dismissModal('Error');
        this.translationService
            .translate('closeAccount.accountClosedFailure')
            .pipe(first())
            .subscribe((text) => {
            this.globalMessageService.add(text, GlobalMessageType.MSG_TYPE_ERROR);
        });
    }
    dismissModal(reason) {
        this.launchDialogService.closeDialog(reason);
    }
    closeAccount() {
        this.loading$.next(true);
        this.userProfile.close().subscribe({
            next: () => {
                this.onSuccess();
                this.loading$.next(false);
            },
            error: () => {
                this.onError();
                this.loading$.next(false);
            },
        });
    }
}
CloseAccountModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: CloseAccountModalComponent, deps: [{ token: i1.AuthService }, { token: i1.GlobalMessageService }, { token: i1.RoutingService }, { token: i1.TranslationService }, { token: i2.UserProfileFacade }, { token: i3.LaunchDialogService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
CloseAccountModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: CloseAccountModalComponent, selector: "cx-close-account-modal", host: { listeners: { "click": "handleClick($event)" } }, ngImport: i0, template: "<ng-container *ngIf=\"isLoggedIn$ | async\">\n  <div\n    class=\"cx-close-account-modal\"\n    [cxFocus]=\"focusConfig\"\n    (esc)=\"dismissModal('Escape click')\"\n  >\n    <div class=\"cx-close-account-modal-container\">\n      <div class=\"cx-close-account-modal-header cx-modal-header\">\n        <h3 class=\"cx-close-account-modal-title\">\n          {{ 'closeAccount.confirmAccountClosure' | cxTranslate }}\n        </h3>\n        <button\n          type=\"button\"\n          class=\"close\"\n          [attr.aria-label]=\"'common.close' | cxTranslate\"\n          (click)=\"dismissModal('Cross click')\"\n        >\n          <span aria-hidden=\"true\">\n            <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n          </span>\n        </button>\n      </div>\n\n      <div *ngIf=\"isLoading$ | async; else loaded\">\n        <div class=\"cx-spinner\">\n          <cx-spinner> </cx-spinner>\n        </div>\n      </div>\n\n      <ng-template #loaded>\n        <div class=\"cx-close-account-modal-body modal-body\">\n          <p class=\"cx-confirmation\">\n            {{ 'closeAccount.confirmAccountClosureMessage' | cxTranslate }}\n          </p>\n        </div>\n        <div class=\"cx-close-account-modal-footer cx-modal-footer\">\n          <button class=\"btn btn-primary\" (click)=\"closeAccount()\">\n            {{ 'closeAccount.closeMyAccount' | cxTranslate }}\n          </button>\n          <button\n            (click)=\"dismissModal('Cancel')\"\n            class=\"btn btn-block btn-secondary\"\n          >\n            {{ 'common.cancel' | cxTranslate }}\n          </button>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.IconComponent, selector: "cx-icon,[cxIcon]", inputs: ["cxIcon", "type"] }, { kind: "component", type: i3.SpinnerComponent, selector: "cx-spinner" }, { kind: "directive", type: i3.FocusDirective, selector: "[cxFocus]", inputs: ["cxFocus"] }, { kind: "pipe", type: i4.AsyncPipe, name: "async" }, { kind: "pipe", type: i1.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: CloseAccountModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-close-account-modal', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"isLoggedIn$ | async\">\n  <div\n    class=\"cx-close-account-modal\"\n    [cxFocus]=\"focusConfig\"\n    (esc)=\"dismissModal('Escape click')\"\n  >\n    <div class=\"cx-close-account-modal-container\">\n      <div class=\"cx-close-account-modal-header cx-modal-header\">\n        <h3 class=\"cx-close-account-modal-title\">\n          {{ 'closeAccount.confirmAccountClosure' | cxTranslate }}\n        </h3>\n        <button\n          type=\"button\"\n          class=\"close\"\n          [attr.aria-label]=\"'common.close' | cxTranslate\"\n          (click)=\"dismissModal('Cross click')\"\n        >\n          <span aria-hidden=\"true\">\n            <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n          </span>\n        </button>\n      </div>\n\n      <div *ngIf=\"isLoading$ | async; else loaded\">\n        <div class=\"cx-spinner\">\n          <cx-spinner> </cx-spinner>\n        </div>\n      </div>\n\n      <ng-template #loaded>\n        <div class=\"cx-close-account-modal-body modal-body\">\n          <p class=\"cx-confirmation\">\n            {{ 'closeAccount.confirmAccountClosureMessage' | cxTranslate }}\n          </p>\n        </div>\n        <div class=\"cx-close-account-modal-footer cx-modal-footer\">\n          <button class=\"btn btn-primary\" (click)=\"closeAccount()\">\n            {{ 'closeAccount.closeMyAccount' | cxTranslate }}\n          </button>\n          <button\n            (click)=\"dismissModal('Cancel')\"\n            class=\"btn btn-block btn-secondary\"\n          >\n            {{ 'common.cancel' | cxTranslate }}\n          </button>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i1.AuthService }, { type: i1.GlobalMessageService }, { type: i1.RoutingService }, { type: i1.TranslationService }, { type: i2.UserProfileFacade }, { type: i3.LaunchDialogService }, { type: i0.ElementRef }]; }, propDecorators: { handleClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtYWNjb3VudC1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvdXNlci9wcm9maWxlL2NvbXBvbmVudHMvY2xvc2UtYWNjb3VudC9jb21wb25lbnRzL2Nsb3NlLWFjY291bnQtbW9kYWwvY2xvc2UtYWNjb3VudC1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvdXNlci9wcm9maWxlL2NvbXBvbmVudHMvY2xvc2UtYWNjb3VudC9jb21wb25lbnRzL2Nsb3NlLWFjY291bnQtbW9kYWwvY2xvc2UtYWNjb3VudC1tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsWUFBWSxHQUViLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFHTCxpQkFBaUIsR0FHbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBRUwsU0FBUyxHQUVWLE1BQU0sdUJBQXVCLENBQUM7QUFFL0IsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQU92QyxNQUFNLE9BQU8sMEJBQTBCO0lBbUJyQyxZQUNZLFdBQXdCLEVBQ3hCLG9CQUEwQyxFQUMxQyxjQUE4QixFQUM5QixrQkFBc0MsRUFDdEMsV0FBOEIsRUFDOUIsbUJBQXdDLEVBQ3hDLEVBQWM7UUFOZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGdCQUFXLEdBQVgsV0FBVyxD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QVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEF1dGhTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQge1xuICBGb2N1c0NvbmZpZyxcbiAgSUNPTl9UWVBFLFxuICBMYXVuY2hEaWFsb2dTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL3N0b3JlZnJvbnQnO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVGYWNhZGUgfSBmcm9tICdAc3BhcnRhY3VzL3VzZXIvcHJvZmlsZS9yb290JztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNsb3NlLWFjY291bnQtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2xvc2UtYWNjb3VudC1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDbG9zZUFjY291bnRNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcbiAgZm9jdXNDb25maWc6IEZvY3VzQ29uZmlnID0ge1xuICAgIHRyYXA6IHRydWUsXG4gICAgYmxvY2s6IHRydWUsXG4gICAgYXV0b2ZvY3VzOiAnYnV0dG9uJyxcbiAgICBmb2N1c09uRXNjYXBlOiB0cnVlLFxuICB9O1xuXG4gIGlzTG9nZ2VkSW4kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBwcm90ZWN0ZWQgbG9hZGluZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUNsaWNrKGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKChldmVudC50YXJnZXQgYXMgYW55KS50YWdOYW1lID09PSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudGFnTmFtZSkge1xuICAgICAgdGhpcy5kaXNtaXNzTW9kYWwoJ0Nyb3NzIGNsaWNrJyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyUHJvZmlsZTogVXNlclByb2ZpbGVGYWNhZGUsXG4gICAgcHJvdGVjdGVkIGxhdW5jaERpYWxvZ1NlcnZpY2U6IExhdW5jaERpYWxvZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmXG4gICkge31cblxuICBnZXQgaXNMb2FkaW5nJCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5sb2FkaW5nJC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNMb2dnZWRJbiQgPSB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluKCk7XG4gIH1cblxuICBvblN1Y2Nlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5kaXNtaXNzTW9kYWwoJ1N1Y2Nlc3MnKTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uU2VydmljZVxuICAgICAgLnRyYW5zbGF0ZSgnY2xvc2VBY2NvdW50LmFjY291bnRDbG9zZWRTdWNjZXNzZnVsbHknKVxuICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHRleHQpID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnaG9tZScgfSk7XG4gIH1cblxuICBvbkVycm9yKCk6IHZvaWQge1xuICAgIHRoaXMuZGlzbWlzc01vZGFsKCdFcnJvcicpO1xuICAgIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlXG4gICAgICAudHJhbnNsYXRlKCdjbG9zZUFjY291bnQuYWNjb3VudENsb3NlZEZhaWx1cmUnKVxuICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHRleHQpID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQodGV4dCwgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1IpO1xuICAgICAgfSk7XG4gIH1cblxuICBkaXNtaXNzTW9kYWwocmVhc29uPzogYW55KTogdm9pZCB7XG4gICAgdGhpcy5sYXVuY2hEaWFsb2dTZXJ2aWNlLmNsb3NlRGlhbG9nKHJlYXNvbik7XG4gIH1cblxuICBjbG9zZUFjY291bnQoKSB7XG4gICAgdGhpcy5sb2FkaW5nJC5uZXh0KHRydWUpO1xuXG4gICAgdGhpcy51c2VyUHJvZmlsZS5jbG9zZSgpLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgIHRoaXMub25TdWNjZXNzKCk7XG4gICAgICAgIHRoaXMubG9hZGluZyQubmV4dChmYWxzZSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgdGhpcy5vbkVycm9yKCk7XG4gICAgICAgIHRoaXMubG9hZGluZyQubmV4dChmYWxzZSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiaXNMb2dnZWRJbiQgfCBhc3luY1wiPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJjeC1jbG9zZS1hY2NvdW50LW1vZGFsXCJcbiAgICBbY3hGb2N1c109XCJmb2N1c0NvbmZpZ1wiXG4gICAgKGVzYyk9XCJkaXNtaXNzTW9kYWwoJ0VzY2FwZSBjbGljaycpXCJcbiAgPlxuICAgIDxkaXYgY2xhc3M9XCJjeC1jbG9zZS1hY2NvdW50LW1vZGFsLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImN4LWNsb3NlLWFjY291bnQtbW9kYWwtaGVhZGVyIGN4LW1vZGFsLWhlYWRlclwiPlxuICAgICAgICA8aDMgY2xhc3M9XCJjeC1jbG9zZS1hY2NvdW50LW1vZGFsLXRpdGxlXCI+XG4gICAgICAgICAge3sgJ2Nsb3NlQWNjb3VudC5jb25maXJtQWNjb3VudENsb3N1cmUnIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgICAgPC9oMz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzPVwiY2xvc2VcIlxuICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ2NvbW1vbi5jbG9zZScgfCBjeFRyYW5zbGF0ZVwiXG4gICAgICAgICAgKGNsaWNrKT1cImRpc21pc3NNb2RhbCgnQ3Jvc3MgY2xpY2snKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgIDxjeC1pY29uIFt0eXBlXT1cImljb25UeXBlcy5DTE9TRVwiPjwvY3gtaWNvbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgKm5nSWY9XCJpc0xvYWRpbmckIHwgYXN5bmM7IGVsc2UgbG9hZGVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjeC1zcGlubmVyXCI+XG4gICAgICAgICAgPGN4LXNwaW5uZXI+IDwvY3gtc3Bpbm5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPG5nLXRlbXBsYXRlICNsb2FkZWQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjeC1jbG9zZS1hY2NvdW50LW1vZGFsLWJvZHkgbW9kYWwtYm9keVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiY3gtY29uZmlybWF0aW9uXCI+XG4gICAgICAgICAgICB7eyAnY2xvc2VBY2NvdW50LmNvbmZpcm1BY2NvdW50Q2xvc3VyZU1lc3NhZ2UnIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3gtY2xvc2UtYWNjb3VudC1tb2RhbC1mb290ZXIgY3gtbW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJjbG9zZUFjY291bnQoKVwiPlxuICAgICAgICAgICAge3sgJ2Nsb3NlQWNjb3VudC5jbG9zZU15QWNjb3VudCcgfCBjeFRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIChjbGljayk9XCJkaXNtaXNzTW9kYWwoJ0NhbmNlbCcpXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tc2Vjb25kYXJ5XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyAnY29tbW9uLmNhbmNlbCcgfCBjeFRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG4iXX0=