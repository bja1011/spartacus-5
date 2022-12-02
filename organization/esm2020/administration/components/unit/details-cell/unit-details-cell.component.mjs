/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CellComponent } from '../../shared';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@spartacus/storefront";
import * as i3 from "@angular/router";
import * as i4 from "@spartacus/core";
export class UnitDetailsCellComponent extends CellComponent {
}
UnitDetailsCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: UnitDetailsCellComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
UnitDetailsCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: UnitDetailsCellComponent, selector: "cx-org-unit-details-cell", usesInheritance: true, ngImport: i0, template: "<ng-template #details>\n  <div class=\"popover-details\">\n    <div class=\"property\">\n      <label>{{ 'orgUnit.name' | cxTranslate }}</label>\n      <a\n        class=\"value\"\n        [routerLink]=\"\n          {\n            cxRoute: 'orgUnitDetails',\n            params: { uid: model.id }\n          } | cxUrl\n        \"\n      >\n        {{ model.name }}\n      </a>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgUnit.uid' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.id }}\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgUnit.active' | cxTranslate }}</label>\n      <span class=\"value\" [class.is-active]=\"model.active\">\n        {{\n          (model.active ? 'organization.enabled' : 'organization.disabled')\n            | cxTranslate\n        }}\n      </span>\n    </div>\n\n    <div class=\"property\" *ngIf=\"model.approvalProcess?.name\">\n      <label>{{ 'orgUnit.approvalProcess' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.approvalProcess?.name }}\n      </span>\n    </div>\n  </div>\n</ng-template>\n\n<button\n  class=\"button text\"\n  [cxPopover]=\"details\"\n  [cxPopoverOptions]=\"{\n    placement: 'auto',\n    class: 'my-company-popover',\n    appendToBody: true,\n    displayCloseButton: true\n  }\"\n>\n  {{ model.name }}\n</button>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.PopoverDirective, selector: "[cxPopover]", inputs: ["cxPopover", "cxPopoverOptions"], outputs: ["openPopover", "closePopover"] }, { kind: "directive", type: i3.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "pipe", type: i4.TranslatePipe, name: "cxTranslate" }, { kind: "pipe", type: i4.UrlPipe, name: "cxUrl" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: UnitDetailsCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-org-unit-details-cell', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template #details>\n  <div class=\"popover-details\">\n    <div class=\"property\">\n      <label>{{ 'orgUnit.name' | cxTranslate }}</label>\n      <a\n        class=\"value\"\n        [routerLink]=\"\n          {\n            cxRoute: 'orgUnitDetails',\n            params: { uid: model.id }\n          } | cxUrl\n        \"\n      >\n        {{ model.name }}\n      </a>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgUnit.uid' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.id }}\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgUnit.active' | cxTranslate }}</label>\n      <span class=\"value\" [class.is-active]=\"model.active\">\n        {{\n          (model.active ? 'organization.enabled' : 'organization.disabled')\n            | cxTranslate\n        }}\n      </span>\n    </div>\n\n    <div class=\"property\" *ngIf=\"model.approvalProcess?.name\">\n      <label>{{ 'orgUnit.approvalProcess' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.approvalProcess?.name }}\n      </span>\n    </div>\n  </div>\n</ng-template>\n\n<button\n  class=\"button text\"\n  [cxPopover]=\"details\"\n  [cxPopoverOptions]=\"{\n    placement: 'auto',\n    class: 'my-company-popover',\n    appendToBody: true,\n    displayCloseButton: true\n  }\"\n>\n  {{ model.name }}\n</button>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdC1kZXRhaWxzLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL29yZ2FuaXphdGlvbi9hZG1pbmlzdHJhdGlvbi9jb21wb25lbnRzL3VuaXQvZGV0YWlscy1jZWxsL3VuaXQtZGV0YWlscy1jZWxsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmdhbml6YXRpb24vYWRtaW5pc3RyYXRpb24vY29tcG9uZW50cy91bml0L2RldGFpbHMtY2VsbC91bml0LWRldGFpbHMtY2VsbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7QUFPN0MsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGFBQWE7O3FIQUE5Qyx3QkFBd0I7eUdBQXhCLHdCQUF3Qix1RkNkckMsbTJDQXVEQTsyRkR6Q2Esd0JBQXdCO2tCQUxwQyxTQUFTOytCQUNFLDBCQUEwQixtQkFFbkIsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENlbGxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmctdW5pdC1kZXRhaWxzLWNlbGwnLFxuICB0ZW1wbGF0ZVVybDogJy4vdW5pdC1kZXRhaWxzLWNlbGwuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVW5pdERldGFpbHNDZWxsQ29tcG9uZW50IGV4dGVuZHMgQ2VsbENvbXBvbmVudCB7fVxuIiwiPG5nLXRlbXBsYXRlICNkZXRhaWxzPlxuICA8ZGl2IGNsYXNzPVwicG9wb3Zlci1kZXRhaWxzXCI+XG4gICAgPGRpdiBjbGFzcz1cInByb3BlcnR5XCI+XG4gICAgICA8bGFiZWw+e3sgJ29yZ1VuaXQubmFtZScgfCBjeFRyYW5zbGF0ZSB9fTwvbGFiZWw+XG4gICAgICA8YVxuICAgICAgICBjbGFzcz1cInZhbHVlXCJcbiAgICAgICAgW3JvdXRlckxpbmtdPVwiXG4gICAgICAgICAge1xuICAgICAgICAgICAgY3hSb3V0ZTogJ29yZ1VuaXREZXRhaWxzJyxcbiAgICAgICAgICAgIHBhcmFtczogeyB1aWQ6IG1vZGVsLmlkIH1cbiAgICAgICAgICB9IHwgY3hVcmxcbiAgICAgICAgXCJcbiAgICAgID5cbiAgICAgICAge3sgbW9kZWwubmFtZSB9fVxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInByb3BlcnR5XCI+XG4gICAgICA8bGFiZWw+e3sgJ29yZ1VuaXQudWlkJyB8IGN4VHJhbnNsYXRlIH19PC9sYWJlbD5cbiAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj5cbiAgICAgICAge3sgbW9kZWwuaWQgfX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJwcm9wZXJ0eVwiPlxuICAgICAgPGxhYmVsPnt7ICdvcmdVbml0LmFjdGl2ZScgfCBjeFRyYW5zbGF0ZSB9fTwvbGFiZWw+XG4gICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCIgW2NsYXNzLmlzLWFjdGl2ZV09XCJtb2RlbC5hY3RpdmVcIj5cbiAgICAgICAge3tcbiAgICAgICAgICAobW9kZWwuYWN0aXZlID8gJ29yZ2FuaXphdGlvbi5lbmFibGVkJyA6ICdvcmdhbml6YXRpb24uZGlzYWJsZWQnKVxuICAgICAgICAgICAgfCBjeFRyYW5zbGF0ZVxuICAgICAgICB9fVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInByb3BlcnR5XCIgKm5nSWY9XCJtb2RlbC5hcHByb3ZhbFByb2Nlc3M/Lm5hbWVcIj5cbiAgICAgIDxsYWJlbD57eyAnb3JnVW5pdC5hcHByb3ZhbFByb2Nlc3MnIHwgY3hUcmFuc2xhdGUgfX08L2xhYmVsPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPlxuICAgICAgICB7eyBtb2RlbC5hcHByb3ZhbFByb2Nlc3M/Lm5hbWUgfX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuXG48YnV0dG9uXG4gIGNsYXNzPVwiYnV0dG9uIHRleHRcIlxuICBbY3hQb3BvdmVyXT1cImRldGFpbHNcIlxuICBbY3hQb3BvdmVyT3B0aW9uc109XCJ7XG4gICAgcGxhY2VtZW50OiAnYXV0bycsXG4gICAgY2xhc3M6ICdteS1jb21wYW55LXBvcG92ZXInLFxuICAgIGFwcGVuZFRvQm9keTogdHJ1ZSxcbiAgICBkaXNwbGF5Q2xvc2VCdXR0b246IHRydWVcbiAgfVwiXG4+XG4gIHt7IG1vZGVsLm5hbWUgfX1cbjwvYnV0dG9uPlxuIl19