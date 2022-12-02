/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../amend-order.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "../../amend-order-items/amend-order-items.component";
import * as i5 from "../../amend-order-actions/amend-order-actions.component";
export class CancelOrderConfirmationComponent {
    constructor(orderAmendService) {
        this.orderAmendService = orderAmendService;
        this.form$ = this.orderAmendService
            .getForm()
            .pipe(tap((form) => (this.orderCode = form.value.orderCode)));
        this.entries$ = this.orderAmendService.getAmendedEntries();
    }
    submit(form) {
        if (form.valid) {
            this.orderAmendService.save();
        }
        else {
            form.markAllAsTouched();
        }
    }
}
CancelOrderConfirmationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: CancelOrderConfirmationComponent, deps: [{ token: i1.OrderAmendService }], target: i0.ɵɵFactoryTarget.Component });
CancelOrderConfirmationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: CancelOrderConfirmationComponent, selector: "cx-cancel-order-confirmation", ngImport: i0, template: "<form\n  *ngIf=\"form$ | async as form\"\n  [formGroup]=\"form\"\n  (ngSubmit)=\"submit(form)\"\n>\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <cx-amend-order-items\n    *ngIf=\"entries$ | async as entries\"\n    [entries]=\"entries\"\n    [isConfirmation]=\"true\"\n  >\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf=\"orderCode\"\n      [orderCode]=\"orderCode\"\n      [amendOrderForm]=\"form\"\n      backRoute=\"orderCancel\"\n    ></cx-amend-order-actions>\n  </ng-template>\n</form>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: i4.CancelOrReturnItemsComponent, selector: "cx-amend-order-items", inputs: ["entries", "isConfirmation"] }, { kind: "component", type: i5.AmendOrderActionsComponent, selector: "cx-amend-order-actions", inputs: ["orderCode", "amendOrderForm", "backRoute", "forwardRoute"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: CancelOrderConfirmationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-cancel-order-confirmation', changeDetection: ChangeDetectionStrategy.OnPush, template: "<form\n  *ngIf=\"form$ | async as form\"\n  [formGroup]=\"form\"\n  (ngSubmit)=\"submit(form)\"\n>\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <cx-amend-order-items\n    *ngIf=\"entries$ | async as entries\"\n    [entries]=\"entries\"\n    [isConfirmation]=\"true\"\n  >\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf=\"orderCode\"\n      [orderCode]=\"orderCode\"\n      [amendOrderForm]=\"form\"\n      backRoute=\"orderCancel\"\n    ></cx-amend-order-actions>\n  </ng-template>\n</form>\n" }]
        }], ctorParameters: function () { return [{ type: i1.OrderAmendService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvb3JkZXIvY29tcG9uZW50cy9hbWVuZC1vcmRlci9jYW5jZWxsYXRpb25zL2NhbmNlbC1vcmRlci1jb25maXJtYXRpb24vY2FuY2VsLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvb3JkZXIvY29tcG9uZW50cy9hbWVuZC1vcmRlci9jYW5jZWxsYXRpb25zL2NhbmNlbC1vcmRlci1jb25maXJtYXRpb24vY2FuY2VsLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUluRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFRckMsTUFBTSxPQUFPLGdDQUFnQztJQVUzQyxZQUFzQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVAxRCxVQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjthQUMzQixPQUFPLEVBQUU7YUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFaEUsYUFBUSxHQUNOLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBRWdCLENBQUM7SUFFOUQsTUFBTSxDQUFDLElBQXNCO1FBQzNCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMvQjthQUFNO1lBQ0wsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOzs2SEFsQlUsZ0NBQWdDO2lIQUFoQyxnQ0FBZ0Msb0VDbEI3Qyx3bkJBeUJBOzJGRFBhLGdDQUFnQztrQkFMNUMsU0FBUzsrQkFDRSw4QkFBOEIsbUJBRXZCLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVbnR5cGVkRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJ0BzcGFydGFjdXMvY2FydC9iYXNlL3Jvb3QnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXJBbWVuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hbWVuZC1vcmRlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FuY2VsLW9yZGVyLWNvbmZpcm1hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYW5jZWwtb3JkZXItY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENhbmNlbE9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50IHtcbiAgb3JkZXJDb2RlOiBzdHJpbmc7XG5cbiAgZm9ybSQgPSB0aGlzLm9yZGVyQW1lbmRTZXJ2aWNlXG4gICAgLmdldEZvcm0oKVxuICAgIC5waXBlKHRhcCgoZm9ybSkgPT4gKHRoaXMub3JkZXJDb2RlID0gZm9ybS52YWx1ZS5vcmRlckNvZGUpKSk7XG5cbiAgZW50cmllcyQ6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPiA9XG4gICAgdGhpcy5vcmRlckFtZW5kU2VydmljZS5nZXRBbWVuZGVkRW50cmllcygpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvcmRlckFtZW5kU2VydmljZTogT3JkZXJBbWVuZFNlcnZpY2UpIHt9XG5cbiAgc3VibWl0KGZvcm06IFVudHlwZWRGb3JtR3JvdXApIHtcbiAgICBpZiAoZm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5vcmRlckFtZW5kU2VydmljZS5zYXZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm0ubWFya0FsbEFzVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxufVxuIiwiPGZvcm1cbiAgKm5nSWY9XCJmb3JtJCB8IGFzeW5jIGFzIGZvcm1cIlxuICBbZm9ybUdyb3VwXT1cImZvcm1cIlxuICAobmdTdWJtaXQpPVwic3VibWl0KGZvcm0pXCJcbj5cbiAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImFjdGlvbnNcIj48L25nLWNvbnRhaW5lcj5cblxuICA8Y3gtYW1lbmQtb3JkZXItaXRlbXNcbiAgICAqbmdJZj1cImVudHJpZXMkIHwgYXN5bmMgYXMgZW50cmllc1wiXG4gICAgW2VudHJpZXNdPVwiZW50cmllc1wiXG4gICAgW2lzQ29uZmlybWF0aW9uXT1cInRydWVcIlxuICA+XG4gIDwvY3gtYW1lbmQtb3JkZXItaXRlbXM+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImFjdGlvbnNcIj48L25nLWNvbnRhaW5lcj5cblxuICA8bmctdGVtcGxhdGUgI2FjdGlvbnM+XG4gICAgPGN4LWFtZW5kLW9yZGVyLWFjdGlvbnNcbiAgICAgICpuZ0lmPVwib3JkZXJDb2RlXCJcbiAgICAgIFtvcmRlckNvZGVdPVwib3JkZXJDb2RlXCJcbiAgICAgIFthbWVuZE9yZGVyRm9ybV09XCJmb3JtXCJcbiAgICAgIGJhY2tSb3V0ZT1cIm9yZGVyQ2FuY2VsXCJcbiAgICA+PC9jeC1hbWVuZC1vcmRlci1hY3Rpb25zPlxuICA8L25nLXRlbXBsYXRlPlxuPC9mb3JtPlxuIl19