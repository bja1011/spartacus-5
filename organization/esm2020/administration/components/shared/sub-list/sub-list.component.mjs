/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewChild, } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
import { ListComponent } from '../list/list.component';
import { MessageService } from '../message/services/message.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../card/card.component";
import * as i3 from "@spartacus/storefront";
import * as i4 from "@spartacus/core";
export class SubListComponent extends ListComponent {
    constructor() {
        super(...arguments);
        this.hostClass = '';
        this.previous = true;
        this.key = this.service.key();
        this.showHint = false;
        this.hasGhostData = false;
        this.listData$ = this.currentKey$.pipe(switchMap((key) => this.service.getData(key)), tap((data) => {
            this.hasGhostData = this.service.hasGhostData(data);
        }));
        this.dataStructure$ = this.service.getStructure();
    }
    set routerKey(key) {
        this.subKey$ = this.organizationItemService.getRouterParam(key);
    }
}
SubListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: SubListComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
SubListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: SubListComponent, selector: "cx-org-sub-list", inputs: { previous: "previous", key: "key", showHint: "showHint", routerKey: "routerKey" }, host: { properties: { "class.ghost": "this.hasGhostData" }, classAttribute: "content-wrapper" }, viewQueries: [{ propertyName: "messageService", first: true, predicate: MessageService, descendants: true, read: MessageService }], usesInheritance: true, ngImport: i0, template: "<cx-org-card\n  [previous]=\"previous\"\n  [i18nRoot]=\"viewType\"\n  [showHint]=\"showHint\"\n  [cxFocus]=\"{ autofocus: true }\"\n>\n  <ng-content select=\"[actions]\" ngProjectAs=\"[actions]\"></ng-content>\n  <ng-content select=\"[main]\" ngProjectAs=\"[main]\"></ng-content>\n  <ng-content select=\"[info]\" ngProjectAs=\"[info]\"></ng-content>\n\n  <ng-container main *ngIf=\"dataStructure$ | async as structure\">\n    <ng-container *ngIf=\"listData$ | async as data\">\n      <section>\n        <cx-table\n          *ngIf=\"data.values && data.values.length > 0; else emptyList\"\n          [structure]=\"structure\"\n          [data]=\"data.values\"\n          [i18nRoot]=\"domainType\"\n          [currentItem]=\"{ property: key, value: subKey$ | async }\"\n        >\n        </cx-table>\n      </section>\n\n      <div\n        class=\"footer\"\n        *ngIf=\"\n          data.pagination &&\n          data.pagination.totalPages !== undefined &&\n          data.pagination.totalPages > 1\n        \"\n      >\n        <cx-pagination\n          [pagination]=\"data.pagination\"\n          (viewPageEvent)=\"browse(data.pagination, $event)\"\n        ></cx-pagination>\n      </div>\n    </ng-container>\n  </ng-container>\n</cx-org-card>\n\n<ng-template #emptyList>\n  <p class=\"is-empty\">{{ 'organization.messages.emptyList' | cxTranslate }}</p>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.CardComponent, selector: "cx-org-card", inputs: ["i18nRoot", "previous", "subtitle", "showHint"] }, { kind: "component", type: i3.TableComponent, selector: "cx-table", inputs: ["structure", "data", "i18nRoot", "currentItem"], outputs: ["launch"] }, { kind: "component", type: i3.PaginationComponent, selector: "cx-pagination", inputs: ["pageRoute", "queryParam", "defaultPage", "pagination"], outputs: ["viewPageEvent"] }, { kind: "directive", type: i3.FocusDirective, selector: "[cxFocus]", inputs: ["cxFocus"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "pipe", type: i4.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: SubListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-org-sub-list', changeDetection: ChangeDetectionStrategy.OnPush, host: { class: 'content-wrapper' }, template: "<cx-org-card\n  [previous]=\"previous\"\n  [i18nRoot]=\"viewType\"\n  [showHint]=\"showHint\"\n  [cxFocus]=\"{ autofocus: true }\"\n>\n  <ng-content select=\"[actions]\" ngProjectAs=\"[actions]\"></ng-content>\n  <ng-content select=\"[main]\" ngProjectAs=\"[main]\"></ng-content>\n  <ng-content select=\"[info]\" ngProjectAs=\"[info]\"></ng-content>\n\n  <ng-container main *ngIf=\"dataStructure$ | async as structure\">\n    <ng-container *ngIf=\"listData$ | async as data\">\n      <section>\n        <cx-table\n          *ngIf=\"data.values && data.values.length > 0; else emptyList\"\n          [structure]=\"structure\"\n          [data]=\"data.values\"\n          [i18nRoot]=\"domainType\"\n          [currentItem]=\"{ property: key, value: subKey$ | async }\"\n        >\n        </cx-table>\n      </section>\n\n      <div\n        class=\"footer\"\n        *ngIf=\"\n          data.pagination &&\n          data.pagination.totalPages !== undefined &&\n          data.pagination.totalPages > 1\n        \"\n      >\n        <cx-pagination\n          [pagination]=\"data.pagination\"\n          (viewPageEvent)=\"browse(data.pagination, $event)\"\n        ></cx-pagination>\n      </div>\n    </ng-container>\n  </ng-container>\n</cx-org-card>\n\n<ng-template #emptyList>\n  <p class=\"is-empty\">{{ 'organization.messages.emptyList' | cxTranslate }}</p>\n</ng-template>\n" }]
        }], propDecorators: { messageService: [{
                type: ViewChild,
                args: [MessageService, { read: MessageService }]
            }], previous: [{
                type: Input
            }], key: [{
                type: Input
            }], showHint: [{
                type: Input
            }], routerKey: [{
                type: Input
            }], hasGhostData: [{
                type: HostBinding,
                args: ['class.ghost']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL29yZ2FuaXphdGlvbi9hZG1pbmlzdHJhdGlvbi9jb21wb25lbnRzL3NoYXJlZC9zdWItbGlzdC9zdWItbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvb3JnYW5pemF0aW9uL2FkbWluaXN0cmF0aW9uL2NvbXBvbmVudHMvc2hhcmVkL3N1Yi1saXN0L3N1Yi1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUNMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7OztBQVFyRSxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsYUFBYTtJQU5uRDs7UUFPRSxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBS04sYUFBUSxHQUFxQixJQUFJLENBQUM7UUFFbEMsUUFBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFekIsYUFBUSxHQUFJLEtBQUssQ0FBQztRQU1DLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBSXhDLGNBQVMsR0FDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ25CLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDN0MsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDWCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUNILENBQUM7UUFFSyxtQkFBYyxHQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQy9CO0lBbEJDLElBQWEsU0FBUyxDQUFDLEdBQVc7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7OzZHQWRVLGdCQUFnQjtpR0FBaEIsZ0JBQWdCLG9TQUdoQixjQUFjLDJCQUFVLGNBQWMsb0RDN0JuRCxxMkNBMkNBOzJGRGpCYSxnQkFBZ0I7a0JBTjVCLFNBQVM7K0JBQ0UsaUJBQWlCLG1CQUVWLHVCQUF1QixDQUFDLE1BQU0sUUFDekMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUU7OEJBTWxDLGNBQWM7c0JBRGIsU0FBUzt1QkFBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO2dCQUcxQyxRQUFRO3NCQUFoQixLQUFLO2dCQUVHLEdBQUc7c0JBQVgsS0FBSztnQkFFRyxRQUFRO3NCQUFoQixLQUFLO2dCQUVPLFNBQVM7c0JBQXJCLEtBQUs7Z0JBSXNCLFlBQVk7c0JBQXZDLFdBQVc7dUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVudGl0aWVzTW9kZWwgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgVGFibGVTdHJ1Y3R1cmUgfSBmcm9tICdAc3BhcnRhY3VzL3N0b3JlZnJvbnQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vbGlzdC9saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uL21lc3NhZ2Uvc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JnLXN1Yi1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1Yi1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHsgY2xhc3M6ICdjb250ZW50LXdyYXBwZXInIH0sXG59KVxuZXhwb3J0IGNsYXNzIFN1Ykxpc3RDb21wb25lbnQgZXh0ZW5kcyBMaXN0Q29tcG9uZW50IHtcbiAgaG9zdENsYXNzID0gJyc7XG5cbiAgQFZpZXdDaGlsZChNZXNzYWdlU2VydmljZSwgeyByZWFkOiBNZXNzYWdlU2VydmljZSB9KVxuICBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2U7XG5cbiAgQElucHV0KCkgcHJldmlvdXM6IGJvb2xlYW4gfCBzdHJpbmcgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIGtleSA9IHRoaXMuc2VydmljZS5rZXkoKTtcblxuICBASW5wdXQoKSBzaG93SGludD8gPSBmYWxzZTtcblxuICBASW5wdXQoKSBzZXQgcm91dGVyS2V5KGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5zdWJLZXkkID0gdGhpcy5vcmdhbml6YXRpb25JdGVtU2VydmljZS5nZXRSb3V0ZXJQYXJhbShrZXkpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5naG9zdCcpIGhhc0dob3N0RGF0YSA9IGZhbHNlO1xuXG4gIHN1YktleSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICByZWFkb25seSBsaXN0RGF0YSQ6IE9ic2VydmFibGU8RW50aXRpZXNNb2RlbDxhbnk+IHwgdW5kZWZpbmVkPiA9XG4gICAgdGhpcy5jdXJyZW50S2V5JC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChrZXkpID0+IHRoaXMuc2VydmljZS5nZXREYXRhKGtleSkpLFxuICAgICAgdGFwKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuaGFzR2hvc3REYXRhID0gdGhpcy5zZXJ2aWNlLmhhc0dob3N0RGF0YShkYXRhKTtcbiAgICAgIH0pXG4gICAgKTtcblxuICByZWFkb25seSBkYXRhU3RydWN0dXJlJDogT2JzZXJ2YWJsZTxUYWJsZVN0cnVjdHVyZT4gPVxuICAgIHRoaXMuc2VydmljZS5nZXRTdHJ1Y3R1cmUoKTtcbn1cbiIsIjxjeC1vcmctY2FyZFxuICBbcHJldmlvdXNdPVwicHJldmlvdXNcIlxuICBbaTE4blJvb3RdPVwidmlld1R5cGVcIlxuICBbc2hvd0hpbnRdPVwic2hvd0hpbnRcIlxuICBbY3hGb2N1c109XCJ7IGF1dG9mb2N1czogdHJ1ZSB9XCJcbj5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2FjdGlvbnNdXCIgbmdQcm9qZWN0QXM9XCJbYWN0aW9uc11cIj48L25nLWNvbnRlbnQ+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIlttYWluXVwiIG5nUHJvamVjdEFzPVwiW21haW5dXCI+PC9uZy1jb250ZW50PlxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbaW5mb11cIiBuZ1Byb2plY3RBcz1cIltpbmZvXVwiPjwvbmctY29udGVudD5cblxuICA8bmctY29udGFpbmVyIG1haW4gKm5nSWY9XCJkYXRhU3RydWN0dXJlJCB8IGFzeW5jIGFzIHN0cnVjdHVyZVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsaXN0RGF0YSQgfCBhc3luYyBhcyBkYXRhXCI+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGN4LXRhYmxlXG4gICAgICAgICAgKm5nSWY9XCJkYXRhLnZhbHVlcyAmJiBkYXRhLnZhbHVlcy5sZW5ndGggPiAwOyBlbHNlIGVtcHR5TGlzdFwiXG4gICAgICAgICAgW3N0cnVjdHVyZV09XCJzdHJ1Y3R1cmVcIlxuICAgICAgICAgIFtkYXRhXT1cImRhdGEudmFsdWVzXCJcbiAgICAgICAgICBbaTE4blJvb3RdPVwiZG9tYWluVHlwZVwiXG4gICAgICAgICAgW2N1cnJlbnRJdGVtXT1cInsgcHJvcGVydHk6IGtleSwgdmFsdWU6IHN1YktleSQgfCBhc3luYyB9XCJcbiAgICAgICAgPlxuICAgICAgICA8L2N4LXRhYmxlPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiZm9vdGVyXCJcbiAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICBkYXRhLnBhZ2luYXRpb24gJiZcbiAgICAgICAgICBkYXRhLnBhZ2luYXRpb24udG90YWxQYWdlcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgZGF0YS5wYWdpbmF0aW9uLnRvdGFsUGFnZXMgPiAxXG4gICAgICAgIFwiXG4gICAgICA+XG4gICAgICAgIDxjeC1wYWdpbmF0aW9uXG4gICAgICAgICAgW3BhZ2luYXRpb25dPVwiZGF0YS5wYWdpbmF0aW9uXCJcbiAgICAgICAgICAodmlld1BhZ2VFdmVudCk9XCJicm93c2UoZGF0YS5wYWdpbmF0aW9uLCAkZXZlbnQpXCJcbiAgICAgICAgPjwvY3gtcGFnaW5hdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvY3gtb3JnLWNhcmQ+XG5cbjxuZy10ZW1wbGF0ZSAjZW1wdHlMaXN0PlxuICA8cCBjbGFzcz1cImlzLWVtcHR5XCI+e3sgJ29yZ2FuaXphdGlvbi5tZXNzYWdlcy5lbXB0eUxpc3QnIHwgY3hUcmFuc2xhdGUgfX08L3A+XG48L25nLXRlbXBsYXRlPlxuIl19