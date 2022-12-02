/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component, Input, ViewChild, } from '@angular/core';
import { ICON_TYPE, ViewComponent } from '@spartacus/storefront';
import { tap } from 'rxjs/operators';
import { MessageService } from '../message/services/message.service';
import * as i0 from "@angular/core";
import * as i1 from "../item.service";
import * as i2 from "../message/services/message.service";
import * as i3 from "@angular/common";
import * as i4 from "@spartacus/storefront";
import * as i5 from "@angular/router";
import * as i6 from "../message/message.component";
import * as i7 from "@spartacus/core";
export class CardComponent {
    constructor(itemService, messageService) {
        this.itemService = itemService;
        this.messageService = messageService;
        this.previous = true;
        this.showHint = false;
        this.iconTypes = ICON_TYPE;
        this.item$ = this.itemService.current$.pipe(tap((item) => this.refreshMessages(item)));
    }
    /**
     * The views are router based, which means if we close a view, the router outlet is
     * cleaned immediately. To prevent this, we're closing the view manually, before
     * navigating back.
     */
    closeView(event) {
        event.stopPropagation();
        this.view.toggle(true);
        setTimeout(() => {
            event.target?.parentElement?.click();
        }, 500);
        return false;
    }
    get previousLabel() {
        return this.previous;
    }
    refreshMessages(item) {
        if (this.itemKey !== undefined &&
            item?.code !== this.itemKey &&
            item?.uid !== this.itemKey &&
            item?.customerId !== this.itemKey) {
            this.messageService.clear();
        }
        this.itemKey = item?.code ?? item?.uid ?? item?.customerId;
    }
}
CardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: CardComponent, deps: [{ token: i1.ItemService }, { token: i2.MessageService }], target: i0.ɵɵFactoryTarget.Component });
CardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: CardComponent, selector: "cx-org-card", inputs: { i18nRoot: "i18nRoot", previous: "previous", subtitle: "subtitle", showHint: "showHint" }, host: { classAttribute: "content-wrapper" }, providers: [MessageService], viewQueries: [{ propertyName: "view", first: true, predicate: ViewComponent, descendants: true, read: ViewComponent }], ngImport: i0, template: "<cx-view class=\"card\">\n  <div class=\"header\">\n    <div class=\"title-bar\">\n      <div class=\"title\">\n        <h3>\n          {{ i18nRoot + '.title' | cxTranslate: { item: item$ | async } }}\n          <button\n            *ngIf=\"showHint\"\n            [cxPopover]=\"detailHint\"\n            [cxPopoverOptions]=\"{\n              placement: 'auto',\n              class: 'hint-popover',\n              appendToBody: true,\n              displayCloseButton: true\n            }\"\n          >\n            <cx-icon [type]=\"iconTypes.INFO\"> </cx-icon>\n          </button>\n        </h3>\n        <h4>\n          {{\n            subtitle ||\n              (i18nRoot + '.subtitle' | cxTranslate: { item: item$ | async })\n          }}\n        </h4>\n      </div>\n      <div class=\"actions\">\n        <ng-content select=\"[actions]\"></ng-content>\n      </div>\n    </div>\n    <a *ngIf=\"!!previous\" class=\"link close\" routerLink=\"../\">\n      <cx-icon\n        *ngIf=\"previous === true; else prevLabel\"\n        type=\"CLOSE\"\n        (click)=\"closeView($event)\"\n      ></cx-icon>\n      <ng-template #prevLabel>{{ previousLabel | cxTranslate }}</ng-template>\n    </a>\n  </div>\n\n  <div class=\"main\">\n    <cx-org-message></cx-org-message>\n    <ng-content select=\"[info]\"></ng-content>\n    <ng-content select=\"[main]\"></ng-content>\n  </div>\n</cx-view>\n\n<router-outlet></router-outlet>\n\n<ng-template #detailHint>\n  <p>\n    {{ i18nRoot + '.hint' | cxTranslate }}\n  </p>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.ViewComponent, selector: "cx-view", inputs: ["position", "hidden"], outputs: ["hiddenChange"] }, { kind: "directive", type: i5.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }, { kind: "directive", type: i5.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "component", type: i4.IconComponent, selector: "cx-icon,[cxIcon]", inputs: ["cxIcon", "type"] }, { kind: "component", type: i6.MessageComponent, selector: "cx-org-message" }, { kind: "directive", type: i4.PopoverDirective, selector: "[cxPopover]", inputs: ["cxPopover", "cxPopoverOptions"], outputs: ["openPopover", "closePopover"] }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }, { kind: "pipe", type: i7.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-org-card', changeDetection: ChangeDetectionStrategy.OnPush, host: { class: 'content-wrapper' }, providers: [MessageService], template: "<cx-view class=\"card\">\n  <div class=\"header\">\n    <div class=\"title-bar\">\n      <div class=\"title\">\n        <h3>\n          {{ i18nRoot + '.title' | cxTranslate: { item: item$ | async } }}\n          <button\n            *ngIf=\"showHint\"\n            [cxPopover]=\"detailHint\"\n            [cxPopoverOptions]=\"{\n              placement: 'auto',\n              class: 'hint-popover',\n              appendToBody: true,\n              displayCloseButton: true\n            }\"\n          >\n            <cx-icon [type]=\"iconTypes.INFO\"> </cx-icon>\n          </button>\n        </h3>\n        <h4>\n          {{\n            subtitle ||\n              (i18nRoot + '.subtitle' | cxTranslate: { item: item$ | async })\n          }}\n        </h4>\n      </div>\n      <div class=\"actions\">\n        <ng-content select=\"[actions]\"></ng-content>\n      </div>\n    </div>\n    <a *ngIf=\"!!previous\" class=\"link close\" routerLink=\"../\">\n      <cx-icon\n        *ngIf=\"previous === true; else prevLabel\"\n        type=\"CLOSE\"\n        (click)=\"closeView($event)\"\n      ></cx-icon>\n      <ng-template #prevLabel>{{ previousLabel | cxTranslate }}</ng-template>\n    </a>\n  </div>\n\n  <div class=\"main\">\n    <cx-org-message></cx-org-message>\n    <ng-content select=\"[info]\"></ng-content>\n    <ng-content select=\"[main]\"></ng-content>\n  </div>\n</cx-view>\n\n<router-outlet></router-outlet>\n\n<ng-template #detailHint>\n  <p>\n    {{ i18nRoot + '.hint' | cxTranslate }}\n  </p>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ItemService }, { type: i2.MessageService }]; }, propDecorators: { i18nRoot: [{
                type: Input
            }], previous: [{
                type: Input
            }], subtitle: [{
                type: Input
            }], showHint: [{
                type: Input
            }], view: [{
                type: ViewChild,
                args: [ViewComponent, { read: ViewComponent }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvb3JnYW5pemF0aW9uL2FkbWluaXN0cmF0aW9uL2NvbXBvbmVudHMvc2hhcmVkL2NhcmQvY2FyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvb3JnYW5pemF0aW9uL2FkbWluaXN0cmF0aW9uL2NvbXBvbmVudHMvc2hhcmVkL2NhcmQvY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWpFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7Ozs7OztBQVVyRSxNQUFNLE9BQU8sYUFBYTtJQWdCeEIsWUFDWSxXQUEyQixFQUMzQixjQUE4QjtRQUQ5QixnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFDM0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBaEJqQyxhQUFRLEdBQXFCLElBQUksQ0FBQztRQUVsQyxhQUFRLEdBQUksS0FBSyxDQUFDO1FBSTNCLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFFdEIsVUFBSyxHQUE4QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQy9ELEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUMxQyxDQUFDO0lBT0MsQ0FBQztJQUVKOzs7O09BSUc7SUFDSCxTQUFTLENBQUMsS0FBaUI7UUFDekIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDYixLQUFLLENBQUMsTUFBc0IsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDeEQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsUUFBa0IsQ0FBQztJQUNqQyxDQUFDO0lBRVMsZUFBZSxDQUFDLElBQW1CO1FBQzNDLElBQ0UsSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTO1lBQzFCLElBQUksRUFBRSxJQUFJLEtBQUssSUFBSSxDQUFDLE9BQU87WUFDM0IsSUFBSSxFQUFFLEdBQUcsS0FBSyxJQUFJLENBQUMsT0FBTztZQUMxQixJQUFJLEVBQUUsVUFBVSxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQ2pDO1lBQ0EsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxVQUFVLENBQUM7SUFDN0QsQ0FBQzs7MEdBbkRVLGFBQWE7OEZBQWIsYUFBYSx1TEFGYixDQUFDLGNBQWMsQ0FBQyxnRUFnQmhCLGFBQWEsMkJBQVUsYUFBYSw2QkN4Q2pELGdnREFzREE7MkZENUJhLGFBQWE7a0JBUHpCLFNBQVM7K0JBQ0UsYUFBYSxtQkFFTix1QkFBdUIsQ0FBQyxNQUFNLFFBQ3pDLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLGFBQ3ZCLENBQUMsY0FBYyxDQUFDOytIQUdsQixRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQVU2QyxJQUFJO3NCQUF0RCxTQUFTO3VCQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDT05fVFlQRSwgVmlld0NvbXBvbmVudCB9IGZyb20gJ0BzcGFydGFjdXMvc3RvcmVmcm9udCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gJy4uL2l0ZW0uc2VydmljZSc7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uL21lc3NhZ2Uvc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEJhc2VJdGVtIH0gZnJvbSAnLi4vb3JnYW5pemF0aW9uLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JnLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7IGNsYXNzOiAnY29udGVudC13cmFwcGVyJyB9LFxuICBwcm92aWRlcnM6IFtNZXNzYWdlU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQ8VCBleHRlbmRzIEJhc2VJdGVtPiB7XG4gIEBJbnB1dCgpIGkxOG5Sb290OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHByZXZpb3VzOiBib29sZWFuIHwgc3RyaW5nID0gdHJ1ZTtcbiAgQElucHV0KCkgc3VidGl0bGU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNob3dIaW50PyA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCBpdGVtS2V5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIGl0ZW0kOiBPYnNlcnZhYmxlPFQgfCB1bmRlZmluZWQ+ID0gdGhpcy5pdGVtU2VydmljZS5jdXJyZW50JC5waXBlKFxuICAgIHRhcCgoaXRlbSkgPT4gdGhpcy5yZWZyZXNoTWVzc2FnZXMoaXRlbSkpXG4gICk7XG5cbiAgQFZpZXdDaGlsZChWaWV3Q29tcG9uZW50LCB7IHJlYWQ6IFZpZXdDb21wb25lbnQgfSkgdmlldzogVmlld0NvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlPFQ+LFxuICAgIHByb3RlY3RlZCBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBUaGUgdmlld3MgYXJlIHJvdXRlciBiYXNlZCwgd2hpY2ggbWVhbnMgaWYgd2UgY2xvc2UgYSB2aWV3LCB0aGUgcm91dGVyIG91dGxldCBpc1xuICAgKiBjbGVhbmVkIGltbWVkaWF0ZWx5LiBUbyBwcmV2ZW50IHRoaXMsIHdlJ3JlIGNsb3NpbmcgdGhlIHZpZXcgbWFudWFsbHksIGJlZm9yZVxuICAgKiBuYXZpZ2F0aW5nIGJhY2suXG4gICAqL1xuICBjbG9zZVZpZXcoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnZpZXcudG9nZ2xlKHRydWUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KT8ucGFyZW50RWxlbWVudD8uY2xpY2soKTtcbiAgICB9LCA1MDApO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0IHByZXZpb3VzTGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wcmV2aW91cyBhcyBzdHJpbmc7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVmcmVzaE1lc3NhZ2VzKGl0ZW06IFQgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLml0ZW1LZXkgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgaXRlbT8uY29kZSAhPT0gdGhpcy5pdGVtS2V5ICYmXG4gICAgICBpdGVtPy51aWQgIT09IHRoaXMuaXRlbUtleSAmJlxuICAgICAgaXRlbT8uY3VzdG9tZXJJZCAhPT0gdGhpcy5pdGVtS2V5XG4gICAgKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmNsZWFyKCk7XG4gICAgfVxuICAgIHRoaXMuaXRlbUtleSA9IGl0ZW0/LmNvZGUgPz8gaXRlbT8udWlkID8/IGl0ZW0/LmN1c3RvbWVySWQ7XG4gIH1cbn1cbiIsIjxjeC12aWV3IGNsYXNzPVwiY2FyZFwiPlxuICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInRpdGxlLWJhclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICB7eyBpMThuUm9vdCArICcudGl0bGUnIHwgY3hUcmFuc2xhdGU6IHsgaXRlbTogaXRlbSQgfCBhc3luYyB9IH19XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgKm5nSWY9XCJzaG93SGludFwiXG4gICAgICAgICAgICBbY3hQb3BvdmVyXT1cImRldGFpbEhpbnRcIlxuICAgICAgICAgICAgW2N4UG9wb3Zlck9wdGlvbnNdPVwie1xuICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgY2xhc3M6ICdoaW50LXBvcG92ZXInLFxuICAgICAgICAgICAgICBhcHBlbmRUb0JvZHk6IHRydWUsXG4gICAgICAgICAgICAgIGRpc3BsYXlDbG9zZUJ1dHRvbjogdHJ1ZVxuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGN4LWljb24gW3R5cGVdPVwiaWNvblR5cGVzLklORk9cIj4gPC9jeC1pY29uPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2gzPlxuICAgICAgICA8aDQ+XG4gICAgICAgICAge3tcbiAgICAgICAgICAgIHN1YnRpdGxlIHx8XG4gICAgICAgICAgICAgIChpMThuUm9vdCArICcuc3VidGl0bGUnIHwgY3hUcmFuc2xhdGU6IHsgaXRlbTogaXRlbSQgfCBhc3luYyB9KVxuICAgICAgICAgIH19XG4gICAgICAgIDwvaDQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlthY3Rpb25zXVwiPjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxhICpuZ0lmPVwiISFwcmV2aW91c1wiIGNsYXNzPVwibGluayBjbG9zZVwiIHJvdXRlckxpbms9XCIuLi9cIj5cbiAgICAgIDxjeC1pY29uXG4gICAgICAgICpuZ0lmPVwicHJldmlvdXMgPT09IHRydWU7IGVsc2UgcHJldkxhYmVsXCJcbiAgICAgICAgdHlwZT1cIkNMT1NFXCJcbiAgICAgICAgKGNsaWNrKT1cImNsb3NlVmlldygkZXZlbnQpXCJcbiAgICAgID48L2N4LWljb24+XG4gICAgICA8bmctdGVtcGxhdGUgI3ByZXZMYWJlbD57eyBwcmV2aW91c0xhYmVsIHwgY3hUcmFuc2xhdGUgfX08L25nLXRlbXBsYXRlPlxuICAgIDwvYT5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICA8Y3gtb3JnLW1lc3NhZ2U+PC9jeC1vcmctbWVzc2FnZT5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbaW5mb11cIj48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW21haW5dXCI+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvY3gtdmlldz5cblxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuXG48bmctdGVtcGxhdGUgI2RldGFpbEhpbnQ+XG4gIDxwPlxuICAgIHt7IGkxOG5Sb290ICsgJy5oaW50JyB8IGN4VHJhbnNsYXRlIH19XG4gIDwvcD5cbjwvbmctdGVtcGxhdGU+XG4iXX0=