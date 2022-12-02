/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component, HostListener, } from '@angular/core';
import { GlobalMessageType } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/order/root";
import * as i2 from "@spartacus/core";
import * as i3 from "@spartacus/storefront";
export class ReplenishmentOrderCancellationDialogComponent {
    constructor(replenishmentOrderHistoryFacade, globalMessageService, launchDialogService, el) {
        this.replenishmentOrderHistoryFacade = replenishmentOrderHistoryFacade;
        this.globalMessageService = globalMessageService;
        this.launchDialogService = launchDialogService;
        this.el = el;
        this.subscription = new Subscription();
        this.focusConfig = {
            trap: true,
            block: true,
            autofocus: 'button',
            focusOnEscape: true,
        };
    }
    handleClick(event) {
        // Close on click outside the dialog window
        if (event.target.tagName === this.el.nativeElement.tagName) {
            this.close('Cross click');
        }
    }
    ngOnInit() {
        this.subscription.add(combineLatest([
            this.replenishmentOrderHistoryFacade
                .getReplenishmentOrderDetails()
                .pipe(startWith(null)),
            this.launchDialogService.data$,
        ]).subscribe(([replenishmentOrder, code]) => {
            this.replenishmentOrderCode =
                code || replenishmentOrder?.replenishmentOrderCode;
        }));
        this.subscription.add(this.replenishmentOrderHistoryFacade
            .getCancelReplenishmentOrderSuccess()
            .subscribe((value) => this.onSuccess(value)));
    }
    onSuccess(value) {
        if (value) {
            this.launchDialogService.closeDialog('Successffully cancelled replenishment');
            this.globalMessageService.add({
                key: 'orderDetails.cancelReplenishment.cancelSuccess',
                params: {
                    replenishmentOrderCode: this.replenishmentOrderCode,
                },
            }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
        this.replenishmentOrderHistoryFacade.clearCancelReplenishmentOrderProcessState();
    }
    close(reason) {
        this.launchDialogService.closeDialog(reason);
    }
    cancelReplenishment() {
        this.replenishmentOrderHistoryFacade.cancelReplenishmentOrder(this.replenishmentOrderCode);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
ReplenishmentOrderCancellationDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ReplenishmentOrderCancellationDialogComponent, deps: [{ token: i1.ReplenishmentOrderHistoryFacade }, { token: i2.GlobalMessageService }, { token: i3.LaunchDialogService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
ReplenishmentOrderCancellationDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: ReplenishmentOrderCancellationDialogComponent, selector: "cx-replenishment-order-cancellation-dialog", host: { listeners: { "click": "handleClick($event)" } }, ngImport: i0, template: "<div\n  [cxFocus]=\"focusConfig\"\n  (esc)=\"close('Escape clicked')\"\n  class=\"cx-cancel-replenishment-dialog-foreground\"\n>\n  <div class=\"cx-cancel-replenishment-dialog-content\">\n    <div class=\"cx-cancel-replenishment-dialog-header\">\n      <h3>\n        {{ 'orderDetails.cancelReplenishment.title' | cxTranslate }}\n      </h3>\n    </div>\n    <div class=\"cx-cancel-replenishment-dialog-description\">\n      {{ 'orderDetails.cancelReplenishment.description' | cxTranslate }}\n    </div>\n\n    <div class=\"cx-cancel-replenishment-dialog-body\">\n      <div class=\"cx-cancel-replenishment-btns row\">\n        <div class=\"col-md-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"close('Close Replenishment Dialog')\"\n          >\n            {{ 'orderDetails.cancelReplenishment.reject' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-6\">\n          <button\n            class=\"btn btn-block btn-primary\"\n            (click)=\"cancelReplenishment()\"\n          >\n            {{ 'orderDetails.cancelReplenishment.accept' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i3.FocusDirective, selector: "[cxFocus]", inputs: ["cxFocus"] }, { kind: "pipe", type: i2.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ReplenishmentOrderCancellationDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-replenishment-order-cancellation-dialog', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  [cxFocus]=\"focusConfig\"\n  (esc)=\"close('Escape clicked')\"\n  class=\"cx-cancel-replenishment-dialog-foreground\"\n>\n  <div class=\"cx-cancel-replenishment-dialog-content\">\n    <div class=\"cx-cancel-replenishment-dialog-header\">\n      <h3>\n        {{ 'orderDetails.cancelReplenishment.title' | cxTranslate }}\n      </h3>\n    </div>\n    <div class=\"cx-cancel-replenishment-dialog-description\">\n      {{ 'orderDetails.cancelReplenishment.description' | cxTranslate }}\n    </div>\n\n    <div class=\"cx-cancel-replenishment-dialog-body\">\n      <div class=\"cx-cancel-replenishment-btns row\">\n        <div class=\"col-md-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"close('Close Replenishment Dialog')\"\n          >\n            {{ 'orderDetails.cancelReplenishment.reject' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-6\">\n          <button\n            class=\"btn btn-block btn-primary\"\n            (click)=\"cancelReplenishment()\"\n          >\n            {{ 'orderDetails.cancelReplenishment.accept' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ReplenishmentOrderHistoryFacade }, { type: i2.GlobalMessageService }, { type: i3.LaunchDialogService }, { type: i0.ElementRef }]; }, propDecorators: { handleClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGVuaXNobWVudC1vcmRlci1jYW5jZWxsYXRpb24tZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmRlci9jb21wb25lbnRzL3JlcGxlbmlzaG1lbnQtb3JkZXItY2FuY2VsbGF0aW9uLWRpYWxvZy9yZXBsZW5pc2htZW50LW9yZGVyLWNhbmNlbGxhdGlvbi1kaWFsb2cuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL29yZGVyL2NvbXBvbmVudHMvcmVwbGVuaXNobWVudC1vcmRlci1jYW5jZWxsYXRpb24tZGlhbG9nL3JlcGxlbmlzaG1lbnQtb3JkZXItY2FuY2VsbGF0aW9uLWRpYWxvZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsWUFBWSxHQUdiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBTzNDLE1BQU0sT0FBTyw2Q0FBNkM7SUFzQnhELFlBQ1ksK0JBQWdFLEVBQ2hFLG9CQUEwQyxFQUMxQyxtQkFBd0MsRUFDeEMsRUFBYztRQUhkLG9DQUErQixHQUEvQiwrQkFBK0IsQ0FBaUM7UUFDaEUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLE9BQUUsR0FBRixFQUFFLENBQVk7UUF2QmxCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUkxQyxnQkFBVyxHQUFnQjtZQUN6QixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxJQUFJO1lBQ1gsU0FBUyxFQUFFLFFBQVE7WUFDbkIsYUFBYSxFQUFFLElBQUk7U0FDcEIsQ0FBQztJQWVDLENBQUM7SUFaSixXQUFXLENBQUMsS0FBYztRQUN4QiwyQ0FBMkM7UUFDM0MsSUFBSyxLQUFLLENBQUMsTUFBYyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDbkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFTRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLGFBQWEsQ0FBQztZQUNaLElBQUksQ0FBQywrQkFBK0I7aUJBQ2pDLDRCQUE0QixFQUFFO2lCQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLO1NBQy9CLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLHNCQUFzQjtnQkFDekIsSUFBSSxJQUFJLGtCQUFrQixFQUFFLHNCQUFzQixDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUNILENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLCtCQUErQjthQUNqQyxrQ0FBa0MsRUFBRTthQUNwQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDL0MsQ0FBQztJQUNKLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBYztRQUN0QixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQ2xDLHVDQUF1QyxDQUN4QyxDQUFDO1lBRUYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0I7Z0JBQ0UsR0FBRyxFQUFFLGdEQUFnRDtnQkFDckQsTUFBTSxFQUFFO29CQUNOLHNCQUFzQixFQUFFLElBQUksQ0FBQyxzQkFBc0I7aUJBQ3BEO2FBQ0YsRUFDRCxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FDeEMsQ0FBQztTQUNIO1FBQ0QsSUFBSSxDQUFDLCtCQUErQixDQUFDLHlDQUF5QyxFQUFFLENBQUM7SUFDbkYsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFjO1FBQ2xCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsK0JBQStCLENBQUMsd0JBQXdCLENBQzNELElBQUksQ0FBQyxzQkFBc0IsQ0FDNUIsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzswSUFoRlUsNkNBQTZDOzhIQUE3Qyw2Q0FBNkMsMklDekIxRCwwc0NBcUNBOzJGRFphLDZDQUE2QztrQkFMekQsU0FBUzsrQkFDRSw0Q0FBNEMsbUJBRXJDLHVCQUF1QixDQUFDLE1BQU07b05BaUIvQyxXQUFXO3NCQURWLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VydmljZSwgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGVuaXNobWVudE9yZGVySGlzdG9yeUZhY2FkZSB9IGZyb20gJ0BzcGFydGFjdXMvb3JkZXIvcm9vdCc7XG5pbXBvcnQgeyBGb2N1c0NvbmZpZywgTGF1bmNoRGlhbG9nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvc3RvcmVmcm9udCc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcmVwbGVuaXNobWVudC1vcmRlci1jYW5jZWxsYXRpb24tZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlcGxlbmlzaG1lbnQtb3JkZXItY2FuY2VsbGF0aW9uLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBSZXBsZW5pc2htZW50T3JkZXJDYW5jZWxsYXRpb25EaWFsb2dDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveVxue1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICByZXBsZW5pc2htZW50T3JkZXJDb2RlOiBzdHJpbmc7XG5cbiAgZm9jdXNDb25maWc6IEZvY3VzQ29uZmlnID0ge1xuICAgIHRyYXA6IHRydWUsXG4gICAgYmxvY2s6IHRydWUsXG4gICAgYXV0b2ZvY3VzOiAnYnV0dG9uJyxcbiAgICBmb2N1c09uRXNjYXBlOiB0cnVlLFxuICB9O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlQ2xpY2soZXZlbnQ6IFVJRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBDbG9zZSBvbiBjbGljayBvdXRzaWRlIHRoZSBkaWFsb2cgd2luZG93XG4gICAgaWYgKChldmVudC50YXJnZXQgYXMgYW55KS50YWdOYW1lID09PSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbG9zZSgnQ3Jvc3MgY2xpY2snKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcmVwbGVuaXNobWVudE9yZGVySGlzdG9yeUZhY2FkZTogUmVwbGVuaXNobWVudE9yZGVySGlzdG9yeUZhY2FkZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBsYXVuY2hEaWFsb2dTZXJ2aWNlOiBMYXVuY2hEaWFsb2dTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBlbDogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgY29tYmluZUxhdGVzdChbXG4gICAgICAgIHRoaXMucmVwbGVuaXNobWVudE9yZGVySGlzdG9yeUZhY2FkZVxuICAgICAgICAgIC5nZXRSZXBsZW5pc2htZW50T3JkZXJEZXRhaWxzKClcbiAgICAgICAgICAucGlwZShzdGFydFdpdGgobnVsbCkpLFxuICAgICAgICB0aGlzLmxhdW5jaERpYWxvZ1NlcnZpY2UuZGF0YSQsXG4gICAgICBdKS5zdWJzY3JpYmUoKFtyZXBsZW5pc2htZW50T3JkZXIsIGNvZGVdKSA9PiB7XG4gICAgICAgIHRoaXMucmVwbGVuaXNobWVudE9yZGVyQ29kZSA9XG4gICAgICAgICAgY29kZSB8fCByZXBsZW5pc2htZW50T3JkZXI/LnJlcGxlbmlzaG1lbnRPcmRlckNvZGU7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnJlcGxlbmlzaG1lbnRPcmRlckhpc3RvcnlGYWNhZGVcbiAgICAgICAgLmdldENhbmNlbFJlcGxlbmlzaG1lbnRPcmRlclN1Y2Nlc3MoKVxuICAgICAgICAuc3Vic2NyaWJlKCh2YWx1ZSkgPT4gdGhpcy5vblN1Y2Nlc3ModmFsdWUpKVxuICAgICk7XG4gIH1cblxuICBvblN1Y2Nlc3ModmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMubGF1bmNoRGlhbG9nU2VydmljZS5jbG9zZURpYWxvZyhcbiAgICAgICAgJ1N1Y2Nlc3NmZnVsbHkgY2FuY2VsbGVkIHJlcGxlbmlzaG1lbnQnXG4gICAgICApO1xuXG4gICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ29yZGVyRGV0YWlscy5jYW5jZWxSZXBsZW5pc2htZW50LmNhbmNlbFN1Y2Nlc3MnLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgcmVwbGVuaXNobWVudE9yZGVyQ29kZTogdGhpcy5yZXBsZW5pc2htZW50T3JkZXJDb2RlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5yZXBsZW5pc2htZW50T3JkZXJIaXN0b3J5RmFjYWRlLmNsZWFyQ2FuY2VsUmVwbGVuaXNobWVudE9yZGVyUHJvY2Vzc1N0YXRlKCk7XG4gIH1cblxuICBjbG9zZShyZWFzb246IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubGF1bmNoRGlhbG9nU2VydmljZS5jbG9zZURpYWxvZyhyZWFzb24pO1xuICB9XG5cbiAgY2FuY2VsUmVwbGVuaXNobWVudCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlcGxlbmlzaG1lbnRPcmRlckhpc3RvcnlGYWNhZGUuY2FuY2VsUmVwbGVuaXNobWVudE9yZGVyKFxuICAgICAgdGhpcy5yZXBsZW5pc2htZW50T3JkZXJDb2RlXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsIjxkaXZcbiAgW2N4Rm9jdXNdPVwiZm9jdXNDb25maWdcIlxuICAoZXNjKT1cImNsb3NlKCdFc2NhcGUgY2xpY2tlZCcpXCJcbiAgY2xhc3M9XCJjeC1jYW5jZWwtcmVwbGVuaXNobWVudC1kaWFsb2ctZm9yZWdyb3VuZFwiXG4+XG4gIDxkaXYgY2xhc3M9XCJjeC1jYW5jZWwtcmVwbGVuaXNobWVudC1kaWFsb2ctY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjeC1jYW5jZWwtcmVwbGVuaXNobWVudC1kaWFsb2ctaGVhZGVyXCI+XG4gICAgICA8aDM+XG4gICAgICAgIHt7ICdvcmRlckRldGFpbHMuY2FuY2VsUmVwbGVuaXNobWVudC50aXRsZScgfCBjeFRyYW5zbGF0ZSB9fVxuICAgICAgPC9oMz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY3gtY2FuY2VsLXJlcGxlbmlzaG1lbnQtZGlhbG9nLWRlc2NyaXB0aW9uXCI+XG4gICAgICB7eyAnb3JkZXJEZXRhaWxzLmNhbmNlbFJlcGxlbmlzaG1lbnQuZGVzY3JpcHRpb24nIHwgY3hUcmFuc2xhdGUgfX1cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjeC1jYW5jZWwtcmVwbGVuaXNobWVudC1kaWFsb2ctYm9keVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImN4LWNhbmNlbC1yZXBsZW5pc2htZW50LWJ0bnMgcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tYWN0aW9uXCJcbiAgICAgICAgICAgIChjbGljayk9XCJjbG9zZSgnQ2xvc2UgUmVwbGVuaXNobWVudCBEaWFsb2cnKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgJ29yZGVyRGV0YWlscy5jYW5jZWxSZXBsZW5pc2htZW50LnJlamVjdCcgfCBjeFRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgIChjbGljayk9XCJjYW5jZWxSZXBsZW5pc2htZW50KClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7ICdvcmRlckRldGFpbHMuY2FuY2VsUmVwbGVuaXNobWVudC5hY2NlcHQnIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==