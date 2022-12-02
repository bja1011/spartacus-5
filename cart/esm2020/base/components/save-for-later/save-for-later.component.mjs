/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Component } from '@angular/core';
import { PromotionLocation, } from '@spartacus/cart/base/root';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "@spartacus/cart/base/root";
import * as i3 from "@angular/common";
import * as i4 from "../cart-shared/cart-item-list/cart-item-list.component";
export class SaveForLaterComponent {
    constructor(cmsService, cartService, selectiveCartService) {
        this.cmsService = cmsService;
        this.cartService = cartService;
        this.selectiveCartService = selectiveCartService;
        this.CartLocation = PromotionLocation;
    }
    ngOnInit() {
        this.isCartEmpty$ = this.cartService
            .getActive()
            .pipe(map((cart) => !(cart && cart.totalItems && cart.totalItems > 0)));
        this.saveForLater$ = this.selectiveCartService.getCart();
        this.entries$ = this.selectiveCartService
            .getEntries()
            .pipe(filter((entries) => entries.length > 0));
        this.cartLoaded$ = combineLatest([
            this.cartService.isStable(),
            this.selectiveCartService.isStable(),
        ]).pipe(map(([cartLoaded, sflLoaded]) => cartLoaded && sflLoaded));
        this.data$ = this.cmsService.getComponentData('EmptyCartParagraphComponent');
    }
    moveToCart(item) {
        this.selectiveCartService.removeEntry(item);
        this.cartService.addEntry(item.product?.code ?? '', item.quantity ?? 0);
    }
}
SaveForLaterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: SaveForLaterComponent, deps: [{ token: i1.CmsService }, { token: i2.ActiveCartFacade }, { token: i2.SelectiveCartFacade }], target: i0.ɵɵFactoryTarget.Component });
SaveForLaterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: SaveForLaterComponent, selector: "cx-save-for-later", ngImport: i0, template: "<ng-container *ngIf=\"isCartEmpty$ | async\">\n  <p\n    *ngIf=\"data$ | async as data\"\n    [innerHTML]=\"data.content\"\n    class=\"cx-empty-cart-info\"\n  ></p>\n</ng-container>\n\n<ng-container *ngIf=\"saveForLater$ | async as saveForLater\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div *ngIf=\"saveForLater.totalItems > 0\" class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{\n          'saveForLaterItems.itemTotal'\n            | cxTranslate: { count: saveForLater.totalItems }\n        }}\n      </div>\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [readonly]=\"false\"\n        [cartIsLoading]=\"!(cartLoaded$ | async)\"\n        [promotionLocation]=\"CartLocation.SaveForLater\"\n        [options]=\"{\n          isSaveForLater: true,\n          optionalBtn: moveToCartBtn\n        }\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template let-ctx #moveToCartBtn>\n  <button\n    class=\"link cx-action-link cx-sfl-btn\"\n    [disabled]=\"ctx.loading\"\n    (click)=\"moveToCart(ctx.item)\"\n    type=\"button\"\n  >\n    {{ 'saveForLaterItems.moveToCart' | cxTranslate }}\n  </button>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.CartItemListComponent, selector: "cx-cart-item-list", inputs: ["readonly", "hasHeader", "options", "cartId", "items", "promotionLocation", "cartIsLoading"] }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }, { kind: "pipe", type: i1.TranslatePipe, name: "cxTranslate" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: SaveForLaterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-save-for-later', template: "<ng-container *ngIf=\"isCartEmpty$ | async\">\n  <p\n    *ngIf=\"data$ | async as data\"\n    [innerHTML]=\"data.content\"\n    class=\"cx-empty-cart-info\"\n  ></p>\n</ng-container>\n\n<ng-container *ngIf=\"saveForLater$ | async as saveForLater\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div *ngIf=\"saveForLater.totalItems > 0\" class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{\n          'saveForLaterItems.itemTotal'\n            | cxTranslate: { count: saveForLater.totalItems }\n        }}\n      </div>\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [readonly]=\"false\"\n        [cartIsLoading]=\"!(cartLoaded$ | async)\"\n        [promotionLocation]=\"CartLocation.SaveForLater\"\n        [options]=\"{\n          isSaveForLater: true,\n          optionalBtn: moveToCartBtn\n        }\"\n      ></cx-cart-item-list>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template let-ctx #moveToCartBtn>\n  <button\n    class=\"link cx-action-link cx-sfl-btn\"\n    [disabled]=\"ctx.loading\"\n    (click)=\"moveToCart(ctx.item)\"\n    type=\"button\"\n  >\n    {{ 'saveForLaterItems.moveToCart' | cxTranslate }}\n  </button>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.CmsService }, { type: i2.ActiveCartFacade }, { type: i2.SelectiveCartFacade }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS1mb3ItbGF0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL2NhcnQvYmFzZS9jb21wb25lbnRzL3NhdmUtZm9yLWxhdGVyL3NhdmUtZm9yLWxhdGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9jYXJ0L2Jhc2UvY29tcG9uZW50cy9zYXZlLWZvci1sYXRlci9zYXZlLWZvci1sYXRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBSUwsaUJBQWlCLEdBRWxCLE1BQU0sMkJBQTJCLENBQUM7QUFFbkMsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFLN0MsTUFBTSxPQUFPLHFCQUFxQjtJQVNoQyxZQUNZLFVBQXNCLEVBQ3RCLFdBQTZCLEVBQzdCLG9CQUF5QztRQUZ6QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO1FBTHJELGlCQUFZLEdBQUcsaUJBQWlCLENBQUM7SUFNOUIsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQ2pDLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxvQkFBb0I7YUFDdEMsVUFBVSxFQUFFO2FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUU7U0FDckMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUMzQyw2QkFBNkIsQ0FDOUIsQ0FBQztJQUNKLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBZ0I7UUFDekIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDOztrSEFuQ1UscUJBQXFCO3NHQUFyQixxQkFBcUIseURDckJsQyxvc0NBeUNBOzJGRHBCYSxxQkFBcUI7a0JBSmpDLFNBQVM7K0JBQ0UsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFjdGl2ZUNhcnRGYWNhZGUsXG4gIENhcnQsXG4gIE9yZGVyRW50cnksXG4gIFByb21vdGlvbkxvY2F0aW9uLFxuICBTZWxlY3RpdmVDYXJ0RmFjYWRlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NhcnQvYmFzZS9yb290JztcbmltcG9ydCB7IENtc1BhcmFncmFwaENvbXBvbmVudCwgQ21zU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNhdmUtZm9yLWxhdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NhdmUtZm9yLWxhdGVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2F2ZUZvckxhdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc2F2ZUZvckxhdGVyJDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gIGVudHJpZXMkOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT47XG4gIGNhcnRMb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBkYXRhJDogT2JzZXJ2YWJsZTxDbXNQYXJhZ3JhcGhDb21wb25lbnQ+O1xuICBpc0NhcnRFbXB0eSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIENhcnRMb2NhdGlvbiA9IFByb21vdGlvbkxvY2F0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQWN0aXZlQ2FydEZhY2FkZSxcbiAgICBwcm90ZWN0ZWQgc2VsZWN0aXZlQ2FydFNlcnZpY2U6IFNlbGVjdGl2ZUNhcnRGYWNhZGVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNDYXJ0RW1wdHkkID0gdGhpcy5jYXJ0U2VydmljZVxuICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAucGlwZShtYXAoKGNhcnQpID0+ICEoY2FydCAmJiBjYXJ0LnRvdGFsSXRlbXMgJiYgY2FydC50b3RhbEl0ZW1zID4gMCkpKTtcbiAgICB0aGlzLnNhdmVGb3JMYXRlciQgPSB0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlLmdldENhcnQoKTtcbiAgICB0aGlzLmVudHJpZXMkID0gdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZVxuICAgICAgLmdldEVudHJpZXMoKVxuICAgICAgLnBpcGUoZmlsdGVyKChlbnRyaWVzKSA9PiBlbnRyaWVzLmxlbmd0aCA+IDApKTtcbiAgICB0aGlzLmNhcnRMb2FkZWQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlLmlzU3RhYmxlKCksXG4gICAgICB0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlLmlzU3RhYmxlKCksXG4gICAgXSkucGlwZShtYXAoKFtjYXJ0TG9hZGVkLCBzZmxMb2FkZWRdKSA9PiBjYXJ0TG9hZGVkICYmIHNmbExvYWRlZCkpO1xuICAgIHRoaXMuZGF0YSQgPSB0aGlzLmNtc1NlcnZpY2UuZ2V0Q29tcG9uZW50RGF0YShcbiAgICAgICdFbXB0eUNhcnRQYXJhZ3JhcGhDb21wb25lbnQnXG4gICAgKTtcbiAgfVxuXG4gIG1vdmVUb0NhcnQoaXRlbTogT3JkZXJFbnRyeSkge1xuICAgIHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UucmVtb3ZlRW50cnkoaXRlbSk7XG4gICAgdGhpcy5jYXJ0U2VydmljZS5hZGRFbnRyeShpdGVtLnByb2R1Y3Q/LmNvZGUgPz8gJycsIGl0ZW0ucXVhbnRpdHkgPz8gMCk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJpc0NhcnRFbXB0eSQgfCBhc3luY1wiPlxuICA8cFxuICAgICpuZ0lmPVwiZGF0YSQgfCBhc3luYyBhcyBkYXRhXCJcbiAgICBbaW5uZXJIVE1MXT1cImRhdGEuY29udGVudFwiXG4gICAgY2xhc3M9XCJjeC1lbXB0eS1jYXJ0LWluZm9cIlxuICA+PC9wPlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJzYXZlRm9yTGF0ZXIkIHwgYXN5bmMgYXMgc2F2ZUZvckxhdGVyXCI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJlbnRyaWVzJCB8IGFzeW5jIGFzIGVudHJpZXNcIj5cbiAgICA8ZGl2ICpuZ0lmPVwic2F2ZUZvckxhdGVyLnRvdGFsSXRlbXMgPiAwXCIgY2xhc3M9XCJjYXJ0LWRldGFpbHMtd3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImN4LXRvdGFsXCI+XG4gICAgICAgIHt7XG4gICAgICAgICAgJ3NhdmVGb3JMYXRlckl0ZW1zLml0ZW1Ub3RhbCdcbiAgICAgICAgICAgIHwgY3hUcmFuc2xhdGU6IHsgY291bnQ6IHNhdmVGb3JMYXRlci50b3RhbEl0ZW1zIH1cbiAgICAgICAgfX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGN4LWNhcnQtaXRlbS1saXN0XG4gICAgICAgIFtpdGVtc109XCJlbnRyaWVzXCJcbiAgICAgICAgW3JlYWRvbmx5XT1cImZhbHNlXCJcbiAgICAgICAgW2NhcnRJc0xvYWRpbmddPVwiIShjYXJ0TG9hZGVkJCB8IGFzeW5jKVwiXG4gICAgICAgIFtwcm9tb3Rpb25Mb2NhdGlvbl09XCJDYXJ0TG9jYXRpb24uU2F2ZUZvckxhdGVyXCJcbiAgICAgICAgW29wdGlvbnNdPVwie1xuICAgICAgICAgIGlzU2F2ZUZvckxhdGVyOiB0cnVlLFxuICAgICAgICAgIG9wdGlvbmFsQnRuOiBtb3ZlVG9DYXJ0QnRuXG4gICAgICAgIH1cIlxuICAgICAgPjwvY3gtY2FydC1pdGVtLWxpc3Q+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy10ZW1wbGF0ZSBsZXQtY3R4ICNtb3ZlVG9DYXJ0QnRuPlxuICA8YnV0dG9uXG4gICAgY2xhc3M9XCJsaW5rIGN4LWFjdGlvbi1saW5rIGN4LXNmbC1idG5cIlxuICAgIFtkaXNhYmxlZF09XCJjdHgubG9hZGluZ1wiXG4gICAgKGNsaWNrKT1cIm1vdmVUb0NhcnQoY3R4Lml0ZW0pXCJcbiAgICB0eXBlPVwiYnV0dG9uXCJcbiAgPlxuICAgIHt7ICdzYXZlRm9yTGF0ZXJJdGVtcy5tb3ZlVG9DYXJ0JyB8IGN4VHJhbnNsYXRlIH19XG4gIDwvYnV0dG9uPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==