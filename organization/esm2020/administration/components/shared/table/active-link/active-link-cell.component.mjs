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
export class ActiveLinkCellComponent extends CellComponent {
    get tabIndex() {
        return 0;
    }
}
ActiveLinkCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ActiveLinkCellComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
ActiveLinkCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: ActiveLinkCellComponent, selector: "cx-org-active-link-cell", usesInheritance: true, ngImport: i0, template: "<a\n  *ngIf=\"linkable; else text\"\n  [routerLink]=\"{ cxRoute: route, params: routeModel } | cxUrl\"\n  [tabIndex]=\"tabIndex\"\n>\n  <ng-container *ngTemplateOutlet=\"text\"></ng-container>\n</a>\n\n<ng-template #text>\n  <span class=\"text\" title=\"{{ property }}\">{{ property }}</span>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "pipe", type: i3.UrlPipe, name: "cxUrl" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ActiveLinkCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-org-active-link-cell', changeDetection: ChangeDetectionStrategy.OnPush, template: "<a\n  *ngIf=\"linkable; else text\"\n  [routerLink]=\"{ cxRoute: route, params: routeModel } | cxUrl\"\n  [tabIndex]=\"tabIndex\"\n>\n  <ng-container *ngTemplateOutlet=\"text\"></ng-container>\n</a>\n\n<ng-template #text>\n  <span class=\"text\" title=\"{{ property }}\">{{ property }}</span>\n</ng-template>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWxpbmstY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvb3JnYW5pemF0aW9uL2FkbWluaXN0cmF0aW9uL2NvbXBvbmVudHMvc2hhcmVkL3RhYmxlL2FjdGl2ZS1saW5rL2FjdGl2ZS1saW5rLWNlbGwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL29yZ2FuaXphdGlvbi9hZG1pbmlzdHJhdGlvbi9jb21wb25lbnRzL3NoYXJlZC90YWJsZS9jZWxsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFPbEQsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGFBQWE7SUFDeEQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDOztvSEFIVSx1QkFBdUI7d0dBQXZCLHVCQUF1QixzRkNkcEMsd1RBV0E7MkZER2EsdUJBQXVCO2tCQUxuQyxTQUFTOytCQUNFLHlCQUF5QixtQkFFbEIsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENlbGxDb21wb25lbnQgfSBmcm9tICcuLi9jZWxsLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW9yZy1hY3RpdmUtbGluay1jZWxsJyxcbiAgdGVtcGxhdGVVcmw6ICcuLi9jZWxsLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUxpbmtDZWxsQ29tcG9uZW50IGV4dGVuZHMgQ2VsbENvbXBvbmVudCB7XG4gIGdldCB0YWJJbmRleCgpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufVxuIiwiPGFcbiAgKm5nSWY9XCJsaW5rYWJsZTsgZWxzZSB0ZXh0XCJcbiAgW3JvdXRlckxpbmtdPVwieyBjeFJvdXRlOiByb3V0ZSwgcGFyYW1zOiByb3V0ZU1vZGVsIH0gfCBjeFVybFwiXG4gIFt0YWJJbmRleF09XCJ0YWJJbmRleFwiXG4+XG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZXh0XCI+PC9uZy1jb250YWluZXI+XG48L2E+XG5cbjxuZy10ZW1wbGF0ZSAjdGV4dD5cbiAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCIgdGl0bGU9XCJ7eyBwcm9wZXJ0eSB9fVwiPnt7IHByb3BlcnR5IH19PC9zcGFuPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==