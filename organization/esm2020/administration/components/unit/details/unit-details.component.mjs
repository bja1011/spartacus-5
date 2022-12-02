/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { startWith, switchMap } from 'rxjs/operators';
import { ItemService } from '../../shared/item.service';
import { UnitItemService } from '../services/unit-item.service';
import * as i0 from "@angular/core";
import * as i1 from "../../shared/item.service";
import * as i2 from "@angular/common";
import * as i3 from "../../shared/card/card.component";
import * as i4 from "@angular/router";
import * as i5 from "../../shared/detail/toggle-status-action/toggle-status.component";
import * as i6 from "../../shared/item-exists.directive";
import * as i7 from "@spartacus/storefront";
import * as i8 from "../../shared/detail/disable-info/disable-info.component";
import * as i9 from "@spartacus/core";
export class UnitDetailsComponent {
    constructor(itemService) {
        this.itemService = itemService;
        this.model$ = this.itemService.key$.pipe(switchMap((code) => this.itemService.load(code)), startWith({}));
        this.isInEditMode$ = this.itemService.isInEditMode$;
    }
}
UnitDetailsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: UnitDetailsComponent, deps: [{ token: i1.ItemService }], target: i0.ɵɵFactoryTarget.Component });
UnitDetailsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: UnitDetailsComponent, selector: "cx-org-unit-details", host: { classAttribute: "content-wrapper" }, providers: [
        {
            provide: ItemService,
            useExisting: UnitItemService,
        },
    ], ngImport: i0, template: "<cx-org-card\n  *ngIf=\"model$ | async as model\"\n  i18nRoot=\"orgUnit.details\"\n  [cxFocus]=\"{ refreshFocus: model }\"\n  [showHint]=\"true\"\n>\n  <a\n    actions\n    class=\"link edit\"\n    [class.disabled]=\"!model.active || (isInEditMode$ | async)\"\n    [routerLink]=\"{ cxRoute: 'orgUnitEdit', params: model } | cxUrl\"\n  >\n    {{ 'organization.edit' | cxTranslate }}\n  </a>\n\n  <cx-org-toggle-status\n    actions\n    key=\"uid\"\n    i18nRoot=\"orgUnit\"\n  ></cx-org-toggle-status>\n\n  <cx-org-disable-info\n    info\n    i18nRoot=\"orgUnit\"\n    [displayInfoConfig]=\"{ disabledDisable: true }\"\n  >\n  </cx-org-disable-info>\n\n  <section main class=\"details\" cxOrgItemExists>\n    <div class=\"property\">\n      <label>{{ 'orgUnit.name' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.name }}\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgUnit.uid' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.uid }}\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgUnit.active' | cxTranslate }}</label>\n      <span class=\"value\" [class.is-active]=\"model.active\">\n        {{\n          (model.active ? 'organization.enabled' : 'organization.disabled')\n            | cxTranslate\n        }}\n      </span>\n    </div>\n\n    <div class=\"property\" *ngIf=\"model.approvalProcess?.name\">\n      <label>{{ 'orgUnit.approvalProcess' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.approvalProcess?.name }}\n      </span>\n    </div>\n\n    <div class=\"property\" *ngIf=\"model.parentOrgUnit\">\n      <label>{{ 'orgUnit.parentUnit' | cxTranslate }}</label>\n      <a\n        class=\"value\"\n        [routerLink]=\"\n          {\n            cxRoute: 'orgUnitDetails',\n            params: model.parentOrgUnit\n          } | cxUrl\n        \"\n      >\n        {{ model.parentOrgUnit?.name }}\n      </a>\n    </div>\n  </section>\n\n  <section main class=\"link-list\">\n    <ng-container *ngIf=\"model.uid\">\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUnitChildren', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUnit.links.units' | cxTranslate }}\n      </a>\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUnitUserList', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUnit.links.users' | cxTranslate }}\n      </a>\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUnitApprovers', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUnit.links.approvers' | cxTranslate }}\n      </a>\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUnitAddressList', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUnit.links.shippingAddresses' | cxTranslate }}\n      </a>\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUnitCostCenters', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUnit.links.costCenters' | cxTranslate }}\n      </a>\n    </ng-container>\n  </section>\n</cx-org-card>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.CardComponent, selector: "cx-org-card", inputs: ["i18nRoot", "previous", "subtitle", "showHint"] }, { kind: "directive", type: i4.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i4.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "component", type: i5.ToggleStatusComponent, selector: "cx-org-toggle-status", inputs: ["i18nRoot", "key", "disabled"] }, { kind: "directive", type: i6.ItemExistsDirective, selector: "[cxOrgItemExists]" }, { kind: "directive", type: i7.FocusDirective, selector: "[cxFocus]", inputs: ["cxFocus"] }, { kind: "component", type: i8.DisableInfoComponent, selector: "cx-org-disable-info", inputs: ["i18nRoot", "displayInfoConfig", "displayCustomInfo"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "pipe", type: i9.UrlPipe, name: "cxUrl" }, { kind: "pipe", type: i9.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: UnitDetailsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-org-unit-details', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: ItemService,
                            useExisting: UnitItemService,
                        },
                    ], host: { class: 'content-wrapper' }, template: "<cx-org-card\n  *ngIf=\"model$ | async as model\"\n  i18nRoot=\"orgUnit.details\"\n  [cxFocus]=\"{ refreshFocus: model }\"\n  [showHint]=\"true\"\n>\n  <a\n    actions\n    class=\"link edit\"\n    [class.disabled]=\"!model.active || (isInEditMode$ | async)\"\n    [routerLink]=\"{ cxRoute: 'orgUnitEdit', params: model } | cxUrl\"\n  >\n    {{ 'organization.edit' | cxTranslate }}\n  </a>\n\n  <cx-org-toggle-status\n    actions\n    key=\"uid\"\n    i18nRoot=\"orgUnit\"\n  ></cx-org-toggle-status>\n\n  <cx-org-disable-info\n    info\n    i18nRoot=\"orgUnit\"\n    [displayInfoConfig]=\"{ disabledDisable: true }\"\n  >\n  </cx-org-disable-info>\n\n  <section main class=\"details\" cxOrgItemExists>\n    <div class=\"property\">\n      <label>{{ 'orgUnit.name' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.name }}\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgUnit.uid' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.uid }}\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgUnit.active' | cxTranslate }}</label>\n      <span class=\"value\" [class.is-active]=\"model.active\">\n        {{\n          (model.active ? 'organization.enabled' : 'organization.disabled')\n            | cxTranslate\n        }}\n      </span>\n    </div>\n\n    <div class=\"property\" *ngIf=\"model.approvalProcess?.name\">\n      <label>{{ 'orgUnit.approvalProcess' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.approvalProcess?.name }}\n      </span>\n    </div>\n\n    <div class=\"property\" *ngIf=\"model.parentOrgUnit\">\n      <label>{{ 'orgUnit.parentUnit' | cxTranslate }}</label>\n      <a\n        class=\"value\"\n        [routerLink]=\"\n          {\n            cxRoute: 'orgUnitDetails',\n            params: model.parentOrgUnit\n          } | cxUrl\n        \"\n      >\n        {{ model.parentOrgUnit?.name }}\n      </a>\n    </div>\n  </section>\n\n  <section main class=\"link-list\">\n    <ng-container *ngIf=\"model.uid\">\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUnitChildren', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUnit.links.units' | cxTranslate }}\n      </a>\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUnitUserList', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUnit.links.users' | cxTranslate }}\n      </a>\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUnitApprovers', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUnit.links.approvers' | cxTranslate }}\n      </a>\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUnitAddressList', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUnit.links.shippingAddresses' | cxTranslate }}\n      </a>\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUnitCostCenters', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUnit.links.costCenters' | cxTranslate }}\n      </a>\n    </ng-container>\n  </section>\n</cx-org-card>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ItemService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmdhbml6YXRpb24vYWRtaW5pc3RyYXRpb24vY29tcG9uZW50cy91bml0L2RldGFpbHMvdW5pdC1kZXRhaWxzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmdhbml6YXRpb24vYWRtaW5pc3RyYXRpb24vY29tcG9uZW50cy91bml0L2RldGFpbHMvdW5pdC1kZXRhaWxzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFjaEUsTUFBTSxPQUFPLG9CQUFvQjtJQU8vQixZQUFzQixXQUFpQztRQUFqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7UUFOdkQsV0FBTSxHQUF3QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3RELFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDaEQsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUNkLENBQUM7UUFDRixrQkFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO0lBRVcsQ0FBQzs7aUhBUGhELG9CQUFvQjtxR0FBcEIsb0JBQW9CLDJGQVJwQjtRQUNUO1lBQ0UsT0FBTyxFQUFFLFdBQVc7WUFDcEIsV0FBVyxFQUFFLGVBQWU7U0FDN0I7S0FDRiwwQkN0QkgsMHRHQW9IQTsyRkQzRmEsb0JBQW9CO2tCQVpoQyxTQUFTOytCQUNFLHFCQUFxQixtQkFFZCx1QkFBdUIsQ0FBQyxNQUFNLGFBQ3BDO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxXQUFXOzRCQUNwQixXQUFXLEVBQUUsZUFBZTt5QkFDN0I7cUJBQ0YsUUFDSyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEIyQlVuaXQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9pdGVtLnNlcnZpY2UnO1xuaW1wb3J0IHsgVW5pdEl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdW5pdC1pdGVtLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmctdW5pdC1kZXRhaWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VuaXQtZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBJdGVtU2VydmljZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBVbml0SXRlbVNlcnZpY2UsXG4gICAgfSxcbiAgXSxcbiAgaG9zdDogeyBjbGFzczogJ2NvbnRlbnQtd3JhcHBlcicgfSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pdERldGFpbHNDb21wb25lbnQge1xuICBtb2RlbCQ6IE9ic2VydmFibGU8QjJCVW5pdD4gPSB0aGlzLml0ZW1TZXJ2aWNlLmtleSQucGlwZShcbiAgICBzd2l0Y2hNYXAoKGNvZGUpID0+IHRoaXMuaXRlbVNlcnZpY2UubG9hZChjb2RlKSksXG4gICAgc3RhcnRXaXRoKHt9KVxuICApO1xuICBpc0luRWRpdE1vZGUkID0gdGhpcy5pdGVtU2VydmljZS5pc0luRWRpdE1vZGUkO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBpdGVtU2VydmljZTogSXRlbVNlcnZpY2U8QjJCVW5pdD4pIHt9XG59XG4iLCI8Y3gtb3JnLWNhcmRcbiAgKm5nSWY9XCJtb2RlbCQgfCBhc3luYyBhcyBtb2RlbFwiXG4gIGkxOG5Sb290PVwib3JnVW5pdC5kZXRhaWxzXCJcbiAgW2N4Rm9jdXNdPVwieyByZWZyZXNoRm9jdXM6IG1vZGVsIH1cIlxuICBbc2hvd0hpbnRdPVwidHJ1ZVwiXG4+XG4gIDxhXG4gICAgYWN0aW9uc1xuICAgIGNsYXNzPVwibGluayBlZGl0XCJcbiAgICBbY2xhc3MuZGlzYWJsZWRdPVwiIW1vZGVsLmFjdGl2ZSB8fCAoaXNJbkVkaXRNb2RlJCB8IGFzeW5jKVwiXG4gICAgW3JvdXRlckxpbmtdPVwieyBjeFJvdXRlOiAnb3JnVW5pdEVkaXQnLCBwYXJhbXM6IG1vZGVsIH0gfCBjeFVybFwiXG4gID5cbiAgICB7eyAnb3JnYW5pemF0aW9uLmVkaXQnIHwgY3hUcmFuc2xhdGUgfX1cbiAgPC9hPlxuXG4gIDxjeC1vcmctdG9nZ2xlLXN0YXR1c1xuICAgIGFjdGlvbnNcbiAgICBrZXk9XCJ1aWRcIlxuICAgIGkxOG5Sb290PVwib3JnVW5pdFwiXG4gID48L2N4LW9yZy10b2dnbGUtc3RhdHVzPlxuXG4gIDxjeC1vcmctZGlzYWJsZS1pbmZvXG4gICAgaW5mb1xuICAgIGkxOG5Sb290PVwib3JnVW5pdFwiXG4gICAgW2Rpc3BsYXlJbmZvQ29uZmlnXT1cInsgZGlzYWJsZWREaXNhYmxlOiB0cnVlIH1cIlxuICA+XG4gIDwvY3gtb3JnLWRpc2FibGUtaW5mbz5cblxuICA8c2VjdGlvbiBtYWluIGNsYXNzPVwiZGV0YWlsc1wiIGN4T3JnSXRlbUV4aXN0cz5cbiAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHlcIj5cbiAgICAgIDxsYWJlbD57eyAnb3JnVW5pdC5uYW1lJyB8IGN4VHJhbnNsYXRlIH19PC9sYWJlbD5cbiAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj5cbiAgICAgICAge3sgbW9kZWwubmFtZSB9fVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInByb3BlcnR5XCI+XG4gICAgICA8bGFiZWw+e3sgJ29yZ1VuaXQudWlkJyB8IGN4VHJhbnNsYXRlIH19PC9sYWJlbD5cbiAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj5cbiAgICAgICAge3sgbW9kZWwudWlkIH19XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHlcIj5cbiAgICAgIDxsYWJlbD57eyAnb3JnVW5pdC5hY3RpdmUnIHwgY3hUcmFuc2xhdGUgfX08L2xhYmVsPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiIFtjbGFzcy5pcy1hY3RpdmVdPVwibW9kZWwuYWN0aXZlXCI+XG4gICAgICAgIHt7XG4gICAgICAgICAgKG1vZGVsLmFjdGl2ZSA/ICdvcmdhbml6YXRpb24uZW5hYmxlZCcgOiAnb3JnYW5pemF0aW9uLmRpc2FibGVkJylcbiAgICAgICAgICAgIHwgY3hUcmFuc2xhdGVcbiAgICAgICAgfX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJwcm9wZXJ0eVwiICpuZ0lmPVwibW9kZWwuYXBwcm92YWxQcm9jZXNzPy5uYW1lXCI+XG4gICAgICA8bGFiZWw+e3sgJ29yZ1VuaXQuYXBwcm92YWxQcm9jZXNzJyB8IGN4VHJhbnNsYXRlIH19PC9sYWJlbD5cbiAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj5cbiAgICAgICAge3sgbW9kZWwuYXBwcm92YWxQcm9jZXNzPy5uYW1lIH19XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHlcIiAqbmdJZj1cIm1vZGVsLnBhcmVudE9yZ1VuaXRcIj5cbiAgICAgIDxsYWJlbD57eyAnb3JnVW5pdC5wYXJlbnRVbml0JyB8IGN4VHJhbnNsYXRlIH19PC9sYWJlbD5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzPVwidmFsdWVcIlxuICAgICAgICBbcm91dGVyTGlua109XCJcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjeFJvdXRlOiAnb3JnVW5pdERldGFpbHMnLFxuICAgICAgICAgICAgcGFyYW1zOiBtb2RlbC5wYXJlbnRPcmdVbml0XG4gICAgICAgICAgfSB8IGN4VXJsXG4gICAgICAgIFwiXG4gICAgICA+XG4gICAgICAgIHt7IG1vZGVsLnBhcmVudE9yZ1VuaXQ/Lm5hbWUgfX1cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuXG4gIDxzZWN0aW9uIG1haW4gY2xhc3M9XCJsaW5rLWxpc3RcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibW9kZWwudWlkXCI+XG4gICAgICA8YVxuICAgICAgICBjbGFzcz1cImxpbmtcIlxuICAgICAgICBbcm91dGVyTGlua109XCJ7IGN4Um91dGU6ICdvcmdVbml0Q2hpbGRyZW4nLCBwYXJhbXM6IG1vZGVsIH0gfCBjeFVybFwiXG4gICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJpcy1jdXJyZW50XCJcbiAgICAgID5cbiAgICAgICAge3sgJ29yZ1VuaXQubGlua3MudW5pdHMnIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgIDwvYT5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzPVwibGlua1wiXG4gICAgICAgIFtyb3V0ZXJMaW5rXT1cInsgY3hSb3V0ZTogJ29yZ1VuaXRVc2VyTGlzdCcsIHBhcmFtczogbW9kZWwgfSB8IGN4VXJsXCJcbiAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImlzLWN1cnJlbnRcIlxuICAgICAgPlxuICAgICAgICB7eyAnb3JnVW5pdC5saW5rcy51c2VycycgfCBjeFRyYW5zbGF0ZSB9fVxuICAgICAgPC9hPlxuICAgICAgPGFcbiAgICAgICAgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgW3JvdXRlckxpbmtdPVwieyBjeFJvdXRlOiAnb3JnVW5pdEFwcHJvdmVycycsIHBhcmFtczogbW9kZWwgfSB8IGN4VXJsXCJcbiAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImlzLWN1cnJlbnRcIlxuICAgICAgPlxuICAgICAgICB7eyAnb3JnVW5pdC5saW5rcy5hcHByb3ZlcnMnIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgIDwvYT5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzPVwibGlua1wiXG4gICAgICAgIFtyb3V0ZXJMaW5rXT1cInsgY3hSb3V0ZTogJ29yZ1VuaXRBZGRyZXNzTGlzdCcsIHBhcmFtczogbW9kZWwgfSB8IGN4VXJsXCJcbiAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImlzLWN1cnJlbnRcIlxuICAgICAgPlxuICAgICAgICB7eyAnb3JnVW5pdC5saW5rcy5zaGlwcGluZ0FkZHJlc3NlcycgfCBjeFRyYW5zbGF0ZSB9fVxuICAgICAgPC9hPlxuICAgICAgPGFcbiAgICAgICAgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgW3JvdXRlckxpbmtdPVwieyBjeFJvdXRlOiAnb3JnVW5pdENvc3RDZW50ZXJzJywgcGFyYW1zOiBtb2RlbCB9IHwgY3hVcmxcIlxuICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwiaXMtY3VycmVudFwiXG4gICAgICA+XG4gICAgICAgIHt7ICdvcmdVbml0LmxpbmtzLmNvc3RDZW50ZXJzJyB8IGN4VHJhbnNsYXRlIH19XG4gICAgICA8L2E+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvc2VjdGlvbj5cbjwvY3gtb3JnLWNhcmQ+XG4iXX0=