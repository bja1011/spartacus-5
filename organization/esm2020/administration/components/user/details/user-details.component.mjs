/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { startWith, switchMap } from 'rxjs/operators';
import { ItemService } from '../../shared/item.service';
import { UserItemService } from '../services/user-item.service';
import * as i0 from "@angular/core";
import * as i1 from "../../shared/item.service";
import * as i2 from "@angular/common";
import * as i3 from "../../shared/card/card.component";
import * as i4 from "@angular/router";
import * as i5 from "../../shared/detail/toggle-status-action/toggle-status.component";
import * as i6 from "../../shared/item-exists.directive";
import * as i7 from "../../shared/detail/disable-info/disable-info.component";
import * as i8 from "@spartacus/storefront";
import * as i9 from "@spartacus/core";
export class UserDetailsComponent {
    constructor(itemService) {
        this.itemService = itemService;
        this.model$ = this.itemService.key$.pipe(switchMap((code) => this.itemService.load(code)), startWith({}));
        this.isInEditMode$ = this.itemService.isInEditMode$;
    }
}
UserDetailsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: UserDetailsComponent, deps: [{ token: i1.ItemService }], target: i0.ɵɵFactoryTarget.Component });
UserDetailsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: UserDetailsComponent, selector: "cx-org-user-details", host: { classAttribute: "content-wrapper" }, providers: [
        {
            provide: ItemService,
            useExisting: UserItemService,
        },
    ], ngImport: i0, template: "<cx-org-card\n  *ngIf=\"model$ | async as model\"\n  i18nRoot=\"orgUser.details\"\n  [cxFocus]=\"{ refreshFocus: model }\"\n>\n  <a\n    actions\n    class=\"link edit\"\n    [class.disabled]=\"!model.active || (isInEditMode$ | async)\"\n    [routerLink]=\"{ cxRoute: 'orgUserEdit', params: model } | cxUrl\"\n  >\n    {{ 'organization.edit' | cxTranslate }}\n  </a>\n\n  <cx-org-toggle-status\n    actions\n    key=\"customerId\"\n    i18nRoot=\"orgUser\"\n  ></cx-org-toggle-status>\n\n  <cx-org-disable-info info i18nRoot=\"orgUser\"> </cx-org-disable-info>\n\n  <section main class=\"details\" cxOrgItemExists>\n    <div class=\"property\">\n      <label>{{ 'orgUser.name' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.name }}\n      </span>\n    </div>\n\n    <div class=\"property full-width\">\n      <label>{{ 'orgUser.uid' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.uid }}\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgUser.roles' | cxTranslate }}</label>\n      <ul class=\"value\">\n        <li\n          *ngFor=\"let role of model.roles; let isLast = last\"\n          [innerText]=\"'organization.userRoles.' + role | cxTranslate\"\n        ></li>\n        <li *ngIf=\"model.roles?.length === 0\">-</li>\n      </ul>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgUser.orgUnit' | cxTranslate }}</label>\n      <a\n        class=\"value\"\n        [routerLink]=\"\n          {\n            cxRoute: 'orgUnitDetails',\n            params: model.orgUnit\n          } | cxUrl\n        \"\n      >\n        {{ model.orgUnit?.name }}\n      </a>\n    </div>\n    <div class=\"property full-width\">\n      <a\n        *ngIf=\"model.customerId\"\n        class=\"link\"\n        [class.disabled]=\"!model.active\"\n        [routerLink]=\"\n          { cxRoute: 'orgUserChangePassword', params: model } | cxUrl\n        \"\n      >\n        {{ 'orgUser.links.password' | cxTranslate }}\n      </a>\n    </div>\n  </section>\n\n  <section main class=\"link-list\">\n    <ng-container *ngIf=\"model.customerId\">\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUserApprovers', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUser.links.approvers' | cxTranslate }}\n      </a>\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUserUserGroups', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUser.links.userGroup' | cxTranslate }}\n      </a>\n\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUserPermissions', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUser.links.permission' | cxTranslate }}\n      </a>\n    </ng-container>\n  </section>\n</cx-org-card>\n", dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.CardComponent, selector: "cx-org-card", inputs: ["i18nRoot", "previous", "subtitle", "showHint"] }, { kind: "directive", type: i4.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i4.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "component", type: i5.ToggleStatusComponent, selector: "cx-org-toggle-status", inputs: ["i18nRoot", "key", "disabled"] }, { kind: "directive", type: i6.ItemExistsDirective, selector: "[cxOrgItemExists]" }, { kind: "component", type: i7.DisableInfoComponent, selector: "cx-org-disable-info", inputs: ["i18nRoot", "displayInfoConfig", "displayCustomInfo"] }, { kind: "directive", type: i8.FocusDirective, selector: "[cxFocus]", inputs: ["cxFocus"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "pipe", type: i9.UrlPipe, name: "cxUrl" }, { kind: "pipe", type: i9.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: UserDetailsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-org-user-details', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: ItemService,
                            useExisting: UserItemService,
                        },
                    ], host: { class: 'content-wrapper' }, template: "<cx-org-card\n  *ngIf=\"model$ | async as model\"\n  i18nRoot=\"orgUser.details\"\n  [cxFocus]=\"{ refreshFocus: model }\"\n>\n  <a\n    actions\n    class=\"link edit\"\n    [class.disabled]=\"!model.active || (isInEditMode$ | async)\"\n    [routerLink]=\"{ cxRoute: 'orgUserEdit', params: model } | cxUrl\"\n  >\n    {{ 'organization.edit' | cxTranslate }}\n  </a>\n\n  <cx-org-toggle-status\n    actions\n    key=\"customerId\"\n    i18nRoot=\"orgUser\"\n  ></cx-org-toggle-status>\n\n  <cx-org-disable-info info i18nRoot=\"orgUser\"> </cx-org-disable-info>\n\n  <section main class=\"details\" cxOrgItemExists>\n    <div class=\"property\">\n      <label>{{ 'orgUser.name' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.name }}\n      </span>\n    </div>\n\n    <div class=\"property full-width\">\n      <label>{{ 'orgUser.uid' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.uid }}\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgUser.roles' | cxTranslate }}</label>\n      <ul class=\"value\">\n        <li\n          *ngFor=\"let role of model.roles; let isLast = last\"\n          [innerText]=\"'organization.userRoles.' + role | cxTranslate\"\n        ></li>\n        <li *ngIf=\"model.roles?.length === 0\">-</li>\n      </ul>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgUser.orgUnit' | cxTranslate }}</label>\n      <a\n        class=\"value\"\n        [routerLink]=\"\n          {\n            cxRoute: 'orgUnitDetails',\n            params: model.orgUnit\n          } | cxUrl\n        \"\n      >\n        {{ model.orgUnit?.name }}\n      </a>\n    </div>\n    <div class=\"property full-width\">\n      <a\n        *ngIf=\"model.customerId\"\n        class=\"link\"\n        [class.disabled]=\"!model.active\"\n        [routerLink]=\"\n          { cxRoute: 'orgUserChangePassword', params: model } | cxUrl\n        \"\n      >\n        {{ 'orgUser.links.password' | cxTranslate }}\n      </a>\n    </div>\n  </section>\n\n  <section main class=\"link-list\">\n    <ng-container *ngIf=\"model.customerId\">\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUserApprovers', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUser.links.approvers' | cxTranslate }}\n      </a>\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUserUserGroups', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUser.links.userGroup' | cxTranslate }}\n      </a>\n\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUserPermissions', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUser.links.permission' | cxTranslate }}\n      </a>\n    </ng-container>\n  </section>\n</cx-org-card>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ItemService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmdhbml6YXRpb24vYWRtaW5pc3RyYXRpb24vY29tcG9uZW50cy91c2VyL2RldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmdhbml6YXRpb24vYWRtaW5pc3RyYXRpb24vY29tcG9uZW50cy91c2VyL2RldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFjaEUsTUFBTSxPQUFPLG9CQUFvQjtJQVEvQixZQUFzQixXQUFpQztRQUFqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7UUFOdkQsV0FBTSxHQUF3QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3RELFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDaEQsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUNkLENBQUM7UUFDRixrQkFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO0lBRVcsQ0FBQzs7aUhBUmhELG9CQUFvQjtxR0FBcEIsb0JBQW9CLDJGQVJwQjtRQUNUO1lBQ0UsT0FBTyxFQUFFLFdBQVc7WUFDcEIsV0FBVyxFQUFFLGVBQWU7U0FDN0I7S0FDRiwwQkN0QkgsaTBGQXVHQTsyRkQ5RWEsb0JBQW9CO2tCQVpoQyxTQUFTOytCQUNFLHFCQUFxQixtQkFFZCx1QkFBdUIsQ0FBQyxNQUFNLGFBQ3BDO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxXQUFXOzRCQUNwQixXQUFXLEVBQUUsZUFBZTt5QkFDN0I7cUJBQ0YsUUFDSyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEIyQlVzZXIgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2l0ZW0uc2VydmljZSc7XG5pbXBvcnQgeyBVc2VySXRlbVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyLWl0ZW0uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW9yZy11c2VyLWRldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdXNlci1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEl0ZW1TZXJ2aWNlLFxuICAgICAgdXNlRXhpc3Rpbmc6IFVzZXJJdGVtU2VydmljZSxcbiAgICB9LFxuICBdLFxuICBob3N0OiB7IGNsYXNzOiAnY29udGVudC13cmFwcGVyJyB9LFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyRGV0YWlsc0NvbXBvbmVudCB7XG4gIHVzZXJHdWFyZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBtb2RlbCQ6IE9ic2VydmFibGU8QjJCVXNlcj4gPSB0aGlzLml0ZW1TZXJ2aWNlLmtleSQucGlwZShcbiAgICBzd2l0Y2hNYXAoKGNvZGUpID0+IHRoaXMuaXRlbVNlcnZpY2UubG9hZChjb2RlKSksXG4gICAgc3RhcnRXaXRoKHt9KVxuICApO1xuICBpc0luRWRpdE1vZGUkID0gdGhpcy5pdGVtU2VydmljZS5pc0luRWRpdE1vZGUkO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBpdGVtU2VydmljZTogSXRlbVNlcnZpY2U8QjJCVXNlcj4pIHt9XG59XG4iLCI8Y3gtb3JnLWNhcmRcbiAgKm5nSWY9XCJtb2RlbCQgfCBhc3luYyBhcyBtb2RlbFwiXG4gIGkxOG5Sb290PVwib3JnVXNlci5kZXRhaWxzXCJcbiAgW2N4Rm9jdXNdPVwieyByZWZyZXNoRm9jdXM6IG1vZGVsIH1cIlxuPlxuICA8YVxuICAgIGFjdGlvbnNcbiAgICBjbGFzcz1cImxpbmsgZWRpdFwiXG4gICAgW2NsYXNzLmRpc2FibGVkXT1cIiFtb2RlbC5hY3RpdmUgfHwgKGlzSW5FZGl0TW9kZSQgfCBhc3luYylcIlxuICAgIFtyb3V0ZXJMaW5rXT1cInsgY3hSb3V0ZTogJ29yZ1VzZXJFZGl0JywgcGFyYW1zOiBtb2RlbCB9IHwgY3hVcmxcIlxuICA+XG4gICAge3sgJ29yZ2FuaXphdGlvbi5lZGl0JyB8IGN4VHJhbnNsYXRlIH19XG4gIDwvYT5cblxuICA8Y3gtb3JnLXRvZ2dsZS1zdGF0dXNcbiAgICBhY3Rpb25zXG4gICAga2V5PVwiY3VzdG9tZXJJZFwiXG4gICAgaTE4blJvb3Q9XCJvcmdVc2VyXCJcbiAgPjwvY3gtb3JnLXRvZ2dsZS1zdGF0dXM+XG5cbiAgPGN4LW9yZy1kaXNhYmxlLWluZm8gaW5mbyBpMThuUm9vdD1cIm9yZ1VzZXJcIj4gPC9jeC1vcmctZGlzYWJsZS1pbmZvPlxuXG4gIDxzZWN0aW9uIG1haW4gY2xhc3M9XCJkZXRhaWxzXCIgY3hPcmdJdGVtRXhpc3RzPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9wZXJ0eVwiPlxuICAgICAgPGxhYmVsPnt7ICdvcmdVc2VyLm5hbWUnIHwgY3hUcmFuc2xhdGUgfX08L2xhYmVsPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPlxuICAgICAgICB7eyBtb2RlbC5uYW1lIH19XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHkgZnVsbC13aWR0aFwiPlxuICAgICAgPGxhYmVsPnt7ICdvcmdVc2VyLnVpZCcgfCBjeFRyYW5zbGF0ZSB9fTwvbGFiZWw+XG4gICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+XG4gICAgICAgIHt7IG1vZGVsLnVpZCB9fVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInByb3BlcnR5XCI+XG4gICAgICA8bGFiZWw+e3sgJ29yZ1VzZXIucm9sZXMnIHwgY3hUcmFuc2xhdGUgfX08L2xhYmVsPlxuICAgICAgPHVsIGNsYXNzPVwidmFsdWVcIj5cbiAgICAgICAgPGxpXG4gICAgICAgICAgKm5nRm9yPVwibGV0IHJvbGUgb2YgbW9kZWwucm9sZXM7IGxldCBpc0xhc3QgPSBsYXN0XCJcbiAgICAgICAgICBbaW5uZXJUZXh0XT1cIidvcmdhbml6YXRpb24udXNlclJvbGVzLicgKyByb2xlIHwgY3hUcmFuc2xhdGVcIlxuICAgICAgICA+PC9saT5cbiAgICAgICAgPGxpICpuZ0lmPVwibW9kZWwucm9sZXM/Lmxlbmd0aCA9PT0gMFwiPi08L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJwcm9wZXJ0eVwiPlxuICAgICAgPGxhYmVsPnt7ICdvcmdVc2VyLm9yZ1VuaXQnIHwgY3hUcmFuc2xhdGUgfX08L2xhYmVsPlxuICAgICAgPGFcbiAgICAgICAgY2xhc3M9XCJ2YWx1ZVwiXG4gICAgICAgIFtyb3V0ZXJMaW5rXT1cIlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGN4Um91dGU6ICdvcmdVbml0RGV0YWlscycsXG4gICAgICAgICAgICBwYXJhbXM6IG1vZGVsLm9yZ1VuaXRcbiAgICAgICAgICB9IHwgY3hVcmxcbiAgICAgICAgXCJcbiAgICAgID5cbiAgICAgICAge3sgbW9kZWwub3JnVW5pdD8ubmFtZSB9fVxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcm9wZXJ0eSBmdWxsLXdpZHRoXCI+XG4gICAgICA8YVxuICAgICAgICAqbmdJZj1cIm1vZGVsLmN1c3RvbWVySWRcIlxuICAgICAgICBjbGFzcz1cImxpbmtcIlxuICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiIW1vZGVsLmFjdGl2ZVwiXG4gICAgICAgIFtyb3V0ZXJMaW5rXT1cIlxuICAgICAgICAgIHsgY3hSb3V0ZTogJ29yZ1VzZXJDaGFuZ2VQYXNzd29yZCcsIHBhcmFtczogbW9kZWwgfSB8IGN4VXJsXG4gICAgICAgIFwiXG4gICAgICA+XG4gICAgICAgIHt7ICdvcmdVc2VyLmxpbmtzLnBhc3N3b3JkJyB8IGN4VHJhbnNsYXRlIH19XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cblxuICA8c2VjdGlvbiBtYWluIGNsYXNzPVwibGluay1saXN0XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm1vZGVsLmN1c3RvbWVySWRcIj5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzPVwibGlua1wiXG4gICAgICAgIFtyb3V0ZXJMaW5rXT1cInsgY3hSb3V0ZTogJ29yZ1VzZXJBcHByb3ZlcnMnLCBwYXJhbXM6IG1vZGVsIH0gfCBjeFVybFwiXG4gICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJpcy1jdXJyZW50XCJcbiAgICAgID5cbiAgICAgICAge3sgJ29yZ1VzZXIubGlua3MuYXBwcm92ZXJzJyB8IGN4VHJhbnNsYXRlIH19XG4gICAgICA8L2E+XG4gICAgICA8YVxuICAgICAgICBjbGFzcz1cImxpbmtcIlxuICAgICAgICBbcm91dGVyTGlua109XCJ7IGN4Um91dGU6ICdvcmdVc2VyVXNlckdyb3VwcycsIHBhcmFtczogbW9kZWwgfSB8IGN4VXJsXCJcbiAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImlzLWN1cnJlbnRcIlxuICAgICAgPlxuICAgICAgICB7eyAnb3JnVXNlci5saW5rcy51c2VyR3JvdXAnIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgIDwvYT5cblxuICAgICAgPGFcbiAgICAgICAgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgW3JvdXRlckxpbmtdPVwieyBjeFJvdXRlOiAnb3JnVXNlclBlcm1pc3Npb25zJywgcGFyYW1zOiBtb2RlbCB9IHwgY3hVcmxcIlxuICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwiaXMtY3VycmVudFwiXG4gICAgICA+XG4gICAgICAgIHt7ICdvcmdVc2VyLmxpbmtzLnBlcm1pc3Npb24nIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgIDwvYT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9zZWN0aW9uPlxuPC9jeC1vcmctY2FyZD5cbiJdfQ==