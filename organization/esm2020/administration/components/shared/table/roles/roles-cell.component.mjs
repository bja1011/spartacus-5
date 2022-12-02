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
export class RolesCellComponent extends CellComponent {
}
RolesCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: RolesCellComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
RolesCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: RolesCellComponent, selector: "cx-org-roles-cell", usesInheritance: true, ngImport: i0, template: "<a\n  *ngIf=\"linkable; else text\"\n  [routerLink]=\"{ cxRoute: route, params: routeModel } | cxUrl\"\n  [tabindex]=\"tabIndex\"\n>\n  <ng-container *ngTemplateOutlet=\"text\"></ng-container>\n</a>\n\n<ng-template #text>\n  <ul class=\"text\">\n    <li\n      *ngFor=\"let role of model.roles\"\n      class=\"li\"\n      [innerText]=\"'organization.userRoles.' + role | cxTranslate\"\n    ></li>\n    <li *ngIf=\"model.roles?.length === 0\">-</li>\n  </ul>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "pipe", type: i3.UrlPipe, name: "cxUrl" }, { kind: "pipe", type: i3.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: RolesCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-org-roles-cell', changeDetection: ChangeDetectionStrategy.OnPush, template: "<a\n  *ngIf=\"linkable; else text\"\n  [routerLink]=\"{ cxRoute: route, params: routeModel } | cxUrl\"\n  [tabindex]=\"tabIndex\"\n>\n  <ng-container *ngTemplateOutlet=\"text\"></ng-container>\n</a>\n\n<ng-template #text>\n  <ul class=\"text\">\n    <li\n      *ngFor=\"let role of model.roles\"\n      class=\"li\"\n      [innerText]=\"'organization.userRoles.' + role | cxTranslate\"\n    ></li>\n    <li *ngIf=\"model.roles?.length === 0\">-</li>\n  </ul>\n</ng-template>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZXMtY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvb3JnYW5pemF0aW9uL2FkbWluaXN0cmF0aW9uL2NvbXBvbmVudHMvc2hhcmVkL3RhYmxlL3JvbGVzL3JvbGVzLWNlbGwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL29yZ2FuaXphdGlvbi9hZG1pbmlzdHJhdGlvbi9jb21wb25lbnRzL3NoYXJlZC90YWJsZS9yb2xlcy9yb2xlcy1jZWxsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFPbEQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGFBQWE7OytHQUF4QyxrQkFBa0I7bUdBQWxCLGtCQUFrQixnRkNkL0IsOGRBa0JBOzJGREphLGtCQUFrQjtrQkFMOUIsU0FBUzsrQkFDRSxtQkFBbUIsbUJBRVosdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENlbGxDb21wb25lbnQgfSBmcm9tICcuLi9jZWxsLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW9yZy1yb2xlcy1jZWxsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JvbGVzLWNlbGwuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUm9sZXNDZWxsQ29tcG9uZW50IGV4dGVuZHMgQ2VsbENvbXBvbmVudCB7fVxuIiwiPGFcbiAgKm5nSWY9XCJsaW5rYWJsZTsgZWxzZSB0ZXh0XCJcbiAgW3JvdXRlckxpbmtdPVwieyBjeFJvdXRlOiByb3V0ZSwgcGFyYW1zOiByb3V0ZU1vZGVsIH0gfCBjeFVybFwiXG4gIFt0YWJpbmRleF09XCJ0YWJJbmRleFwiXG4+XG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZXh0XCI+PC9uZy1jb250YWluZXI+XG48L2E+XG5cbjxuZy10ZW1wbGF0ZSAjdGV4dD5cbiAgPHVsIGNsYXNzPVwidGV4dFwiPlxuICAgIDxsaVxuICAgICAgKm5nRm9yPVwibGV0IHJvbGUgb2YgbW9kZWwucm9sZXNcIlxuICAgICAgY2xhc3M9XCJsaVwiXG4gICAgICBbaW5uZXJUZXh0XT1cIidvcmdhbml6YXRpb24udXNlclJvbGVzLicgKyByb2xlIHwgY3hUcmFuc2xhdGVcIlxuICAgID48L2xpPlxuICAgIDxsaSAqbmdJZj1cIm1vZGVsLnJvbGVzPy5sZW5ndGggPT09IDBcIj4tPC9saT5cbiAgPC91bD5cbjwvbmctdGVtcGxhdGU+XG4iXX0=