/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CellComponent } from '../cell.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "@spartacus/core";
export class DateRangeCellComponent extends CellComponent {
    get linkable() {
        return this.hasRange && (this.cellOptions.linkable ?? true);
    }
    get hasRange() {
        return !!this.model.startDate && !!this.model.endDate;
    }
}
DateRangeCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DateRangeCellComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
DateRangeCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: DateRangeCellComponent, selector: "cx-org-date-range-cell", usesInheritance: true, ngImport: i0, template: "<a\n  *ngIf=\"linkable; else text\"\n  [routerLink]=\"{ cxRoute: route, params: routeModel } | cxUrl\"\n  [tabindex]=\"tabIndex\"\n>\n  <ng-container *ngTemplateOutlet=\"text\"></ng-container>\n</a>\n\n<ng-template #text>\n  <span\n    class=\"text\"\n    title=\"{{ model.startDate | cxDate }} - {{ model.endDate | cxDate }}\"\n    *ngIf=\"hasRange\"\n  >\n    {{ model.startDate | cxDate }} - {{ model.endDate | cxDate }}\n  </span>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "pipe", type: i3.UrlPipe, name: "cxUrl" }, { kind: "pipe", type: i3.CxDatePipe, name: "cxDate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: DateRangeCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-org-date-range-cell', changeDetection: ChangeDetectionStrategy.OnPush, template: "<a\n  *ngIf=\"linkable; else text\"\n  [routerLink]=\"{ cxRoute: route, params: routeModel } | cxUrl\"\n  [tabindex]=\"tabIndex\"\n>\n  <ng-container *ngTemplateOutlet=\"text\"></ng-container>\n</a>\n\n<ng-template #text>\n  <span\n    class=\"text\"\n    title=\"{{ model.startDate | cxDate }} - {{ model.endDate | cxDate }}\"\n    *ngIf=\"hasRange\"\n  >\n    {{ model.startDate | cxDate }} - {{ model.endDate | cxDate }}\n  </span>\n</ng-template>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmdhbml6YXRpb24vYWRtaW5pc3RyYXRpb24vY29tcG9uZW50cy9zaGFyZWQvdGFibGUvZGF0ZS1yYW5nZS9kYXRlLXJhbmdlLWNlbGwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL29yZ2FuaXphdGlvbi9hZG1pbmlzdHJhdGlvbi9jb21wb25lbnRzL3NoYXJlZC90YWJsZS9kYXRlLXJhbmdlL2RhdGUtcmFuZ2UtY2VsbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBT2xELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxhQUFhO0lBQ3ZELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDeEQsQ0FBQzs7bUhBUFUsc0JBQXNCO3VHQUF0QixzQkFBc0IscUZDZG5DLHNjQWlCQTsyRkRIYSxzQkFBc0I7a0JBTGxDLFNBQVM7K0JBQ0Usd0JBQXdCLG1CQUVqQix1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2VsbENvbXBvbmVudCB9IGZyb20gJy4uL2NlbGwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JnLWRhdGUtcmFuZ2UtY2VsbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLXJhbmdlLWNlbGwuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlQ2VsbENvbXBvbmVudCBleHRlbmRzIENlbGxDb21wb25lbnQge1xuICBnZXQgbGlua2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaGFzUmFuZ2UgJiYgKHRoaXMuY2VsbE9wdGlvbnMubGlua2FibGUgPz8gdHJ1ZSk7XG4gIH1cblxuICBnZXQgaGFzUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5tb2RlbC5zdGFydERhdGUgJiYgISF0aGlzLm1vZGVsLmVuZERhdGU7XG4gIH1cbn1cbiIsIjxhXG4gICpuZ0lmPVwibGlua2FibGU7IGVsc2UgdGV4dFwiXG4gIFtyb3V0ZXJMaW5rXT1cInsgY3hSb3V0ZTogcm91dGUsIHBhcmFtczogcm91dGVNb2RlbCB9IHwgY3hVcmxcIlxuICBbdGFiaW5kZXhdPVwidGFiSW5kZXhcIlxuPlxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGV4dFwiPjwvbmctY29udGFpbmVyPlxuPC9hPlxuXG48bmctdGVtcGxhdGUgI3RleHQ+XG4gIDxzcGFuXG4gICAgY2xhc3M9XCJ0ZXh0XCJcbiAgICB0aXRsZT1cInt7IG1vZGVsLnN0YXJ0RGF0ZSB8IGN4RGF0ZSB9fSAtIHt7IG1vZGVsLmVuZERhdGUgfCBjeERhdGUgfX1cIlxuICAgICpuZ0lmPVwiaGFzUmFuZ2VcIlxuICA+XG4gICAge3sgbW9kZWwuc3RhcnREYXRlIHwgY3hEYXRlIH19IC0ge3sgbW9kZWwuZW5kRGF0ZSB8IGN4RGF0ZSB9fVxuICA8L3NwYW4+XG48L25nLXRlbXBsYXRlPlxuIl19