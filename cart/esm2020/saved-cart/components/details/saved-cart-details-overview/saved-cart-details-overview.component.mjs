/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Component, ViewChild, } from '@angular/core';
import { ICON_TYPE, } from '@spartacus/storefront';
import { Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../saved-cart-details.service";
import * as i2 from "@spartacus/core";
import * as i3 from "@spartacus/storefront";
import * as i4 from "@angular/common";
export class SavedCartDetailsOverviewComponent {
    constructor(savedCartDetailsService, translation, vcr, launchDialogService) {
        this.savedCartDetailsService = savedCartDetailsService;
        this.translation = translation;
        this.vcr = vcr;
        this.launchDialogService = launchDialogService;
        this.subscription = new Subscription();
        this.iconTypes = ICON_TYPE;
        this.savedCart$ = this.savedCartDetailsService.getCartDetails();
    }
    getCartName(cartName) {
        return this.translation.translate('savedCartDetails.cartName').pipe(filter(() => Boolean(cartName)), map((textTitle) => ({
            title: textTitle,
            text: [cartName],
        })));
    }
    getCartDescription(cartDescription) {
        return this.translation.translate('savedCartDetails.cartDescription').pipe(filter(() => Boolean(cartDescription)), map((textTitle) => ({
            title: textTitle,
            text: [cartDescription],
        })));
    }
    getCartId(cartId) {
        return this.translation.translate('savedCartDetails.cartId').pipe(filter(() => Boolean(cartId)), map((textTitle) => ({
            title: textTitle,
            text: [cartId],
        })));
    }
    getDateSaved(saveTime) {
        return this.translation.translate('savedCartDetails.dateSaved').pipe(filter(() => Boolean(saveTime)), map((textTitle) => {
            return {
                title: textTitle,
                text: [saveTime ?? ''],
            };
        }));
    }
    getCartItems(totalItems) {
        return this.translation.translate('savedCartDetails.items').pipe(filter(() => Boolean(totalItems)), map((textTitle) => ({
            title: textTitle,
            text: [totalItems.toString()],
        })));
    }
    getCartQuantity(totalUnitCount) {
        return this.translation.translate('savedCartDetails.quantity').pipe(filter(() => Boolean(totalUnitCount)), map((textTitle) => ({
            title: textTitle,
            text: [totalUnitCount.toString()],
        })));
    }
    getCartTotal(totalPriceWithTax) {
        return this.translation.translate('savedCartDetails.total').pipe(filter(() => Boolean(totalPriceWithTax)), map((textTitle) => ({
            title: textTitle,
            text: [totalPriceWithTax],
        })));
    }
    openDialog(cart) {
        const dialog = this.launchDialogService.openDialog("SAVED_CART" /* LAUNCH_CALLER.SAVED_CART */, this.element, this.vcr, { cart, layoutOption: 'edit' });
        if (dialog) {
            this.subscription.add(dialog.pipe(take(1)).subscribe());
        }
    }
    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
}
SavedCartDetailsOverviewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: SavedCartDetailsOverviewComponent, deps: [{ token: i1.SavedCartDetailsService }, { token: i2.TranslationService }, { token: i0.ViewContainerRef }, { token: i3.LaunchDialogService }], target: i0.ɵɵFactoryTarget.Component });
SavedCartDetailsOverviewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: SavedCartDetailsOverviewComponent, selector: "cx-saved-cart-details-overview", viewQueries: [{ propertyName: "element", first: true, predicate: ["element"], descendants: true }], ngImport: i0, template: "<ng-container *ngIf=\"savedCart$ | async as cart\">\n  <div class=\"cx-cart-summary\">\n    <div class=\"container\">\n      <div class=\"cx-summary-card\">\n        <div class=\"cx-edit-container\">\n          <cx-card [content]=\"getCartName(cart?.name) | async\"></cx-card>\n          <button class=\"cx-edit-cart\" #element (click)=\"openDialog(cart)\">\n            <cx-icon [type]=\"iconTypes.PENCIL\"></cx-icon>\n          </button>\n        </div>\n        <div class=\"cx-card-description\">\n          <cx-card\n            [content]=\"getCartDescription(cart?.description) | async\"\n            [truncateText]=\"true\"\n            [charactersLimit]=\"30\"\n          ></cx-card>\n        </div>\n      </div>\n      <div class=\"cx-summary-card\">\n        <cx-card [content]=\"getCartId(cart?.code) | async\"></cx-card>\n      </div>\n      <div class=\"cx-summary-card\">\n        <cx-card\n          [content]=\"getDateSaved(cart?.saveTime | cxDate) | async\"\n        ></cx-card>\n        <cx-card [content]=\"getCartItems(cart?.totalItems) | async\"></cx-card>\n      </div>\n      <div class=\"cx-summary-card\">\n        <cx-card\n          [content]=\"getCartQuantity(cart?.totalUnitCount) | async\"\n        ></cx-card>\n        <cx-card\n          [content]=\"\n            getCartTotal(cart?.totalPriceWithTax?.formattedValue) | async\n          \"\n        ></cx-card>\n      </div>\n    </div>\n  </div>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.CardComponent, selector: "cx-card", inputs: ["border", "editMode", "isDefault", "content", "fitToContainer", "truncateText", "charactersLimit", "index"], outputs: ["deleteCard", "setDefaultCard", "sendCard", "editCard", "cancelCard"] }, { kind: "component", type: i3.IconComponent, selector: "cx-icon,[cxIcon]", inputs: ["cxIcon", "type"] }, { kind: "pipe", type: i4.AsyncPipe, name: "async" }, { kind: "pipe", type: i2.CxDatePipe, name: "cxDate" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: SavedCartDetailsOverviewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-saved-cart-details-overview', template: "<ng-container *ngIf=\"savedCart$ | async as cart\">\n  <div class=\"cx-cart-summary\">\n    <div class=\"container\">\n      <div class=\"cx-summary-card\">\n        <div class=\"cx-edit-container\">\n          <cx-card [content]=\"getCartName(cart?.name) | async\"></cx-card>\n          <button class=\"cx-edit-cart\" #element (click)=\"openDialog(cart)\">\n            <cx-icon [type]=\"iconTypes.PENCIL\"></cx-icon>\n          </button>\n        </div>\n        <div class=\"cx-card-description\">\n          <cx-card\n            [content]=\"getCartDescription(cart?.description) | async\"\n            [truncateText]=\"true\"\n            [charactersLimit]=\"30\"\n          ></cx-card>\n        </div>\n      </div>\n      <div class=\"cx-summary-card\">\n        <cx-card [content]=\"getCartId(cart?.code) | async\"></cx-card>\n      </div>\n      <div class=\"cx-summary-card\">\n        <cx-card\n          [content]=\"getDateSaved(cart?.saveTime | cxDate) | async\"\n        ></cx-card>\n        <cx-card [content]=\"getCartItems(cart?.totalItems) | async\"></cx-card>\n      </div>\n      <div class=\"cx-summary-card\">\n        <cx-card\n          [content]=\"getCartQuantity(cart?.totalUnitCount) | async\"\n        ></cx-card>\n        <cx-card\n          [content]=\"\n            getCartTotal(cart?.totalPriceWithTax?.formattedValue) | async\n          \"\n        ></cx-card>\n      </div>\n    </div>\n  </div>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i1.SavedCartDetailsService }, { type: i2.TranslationService }, { type: i0.ViewContainerRef }, { type: i3.LaunchDialogService }]; }, propDecorators: { element: [{
                type: ViewChild,
                args: ['element']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZWQtY2FydC1kZXRhaWxzLW92ZXJ2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9jYXJ0L3NhdmVkLWNhcnQvY29tcG9uZW50cy9kZXRhaWxzL3NhdmVkLWNhcnQtZGV0YWlscy1vdmVydmlldy9zYXZlZC1jYXJ0LWRldGFpbHMtb3ZlcnZpZXcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL2NhcnQvc2F2ZWQtY2FydC9jb21wb25lbnRzL2RldGFpbHMvc2F2ZWQtY2FydC1kZXRhaWxzLW92ZXJ2aWV3L3NhdmVkLWNhcnQtZGV0YWlscy1vdmVydmlldy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLFNBQVMsRUFHVCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUVMLFNBQVMsR0FHVixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQU9uRCxNQUFNLE9BQU8saUNBQWlDO0lBUzVDLFlBQ1ksdUJBQWdELEVBQ2hELFdBQStCLEVBQy9CLEdBQXFCLEVBQ3JCLG1CQUF3QztRQUh4Qyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBWjVDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUkxQyxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLGVBQVUsR0FDUixJQUFJLENBQUMsdUJB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LENBQUMsQ0FBQyxJQUFJLENBQzlELE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUN4QyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsSUFBSSxFQUFFLENBQUMsaUJBQWlCLENBQUM7U0FDMUIsQ0FBQyxDQUFDLENBQ0osQ0FBQztJQUNKLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBVTtRQUNuQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSw4Q0FFaEQsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsR0FBRyxFQUNSLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsQ0FDL0IsQ0FBQztRQUVGLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7OzhIQXZHVSxpQ0FBaUM7a0hBQWpDLGlDQUFpQywwS0M3QjlDLDA2Q0F3Q0E7MkZEWGEsaUNBQWlDO2tCQUo3QyxTQUFTOytCQUNFLGdDQUFnQztnTkFNcEIsT0FBTztzQkFBNUIsU0FBUzt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jYXJ0L2Jhc2Uvcm9vdCc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgSUNPTl9UWVBFLFxuICBMYXVuY2hEaWFsb2dTZXJ2aWNlLFxuICBMQVVOQ0hfQ0FMTEVSLFxufSBmcm9tICdAc3BhcnRhY3VzL3N0b3JlZnJvbnQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNhdmVkQ2FydERldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2F2ZWQtY2FydC1kZXRhaWxzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zYXZlZC1jYXJ0LWRldGFpbHMtb3ZlcnZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2F2ZWQtY2FydC1kZXRhaWxzLW92ZXJ2aWV3LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2F2ZWRDYXJ0RGV0YWlsc092ZXJ2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgQFZpZXdDaGlsZCgnZWxlbWVudCcpIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuICBzYXZlZENhcnQkOiBPYnNlcnZhYmxlPENhcnQgfCB1bmRlZmluZWQ+ID1cbiAgICB0aGlzLnNhdmVkQ2FydERldGFpbHNTZXJ2aWNlLmdldENhcnREZXRhaWxzKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHNhdmVkQ2FydERldGFpbHNTZXJ2aWNlOiBTYXZlZENhcnREZXRhaWxzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByb3RlY3RlZCBsYXVuY2hEaWFsb2dTZXJ2aWNlOiBMYXVuY2hEaWFsb2dTZXJ2aWNlXG4gICkge31cblxuICBnZXRDYXJ0TmFtZShjYXJ0TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdzYXZlZENhcnREZXRhaWxzLmNhcnROYW1lJykucGlwZShcbiAgICAgIGZpbHRlcigoKSA9PiBCb29sZWFuKGNhcnROYW1lKSksXG4gICAgICBtYXAoKHRleHRUaXRsZSkgPT4gKHtcbiAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgdGV4dDogW2NhcnROYW1lXSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICBnZXRDYXJ0RGVzY3JpcHRpb24oY2FydERlc2NyaXB0aW9uOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhcmQ+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3NhdmVkQ2FydERldGFpbHMuY2FydERlc2NyaXB0aW9uJykucGlwZShcbiAgICAgIGZpbHRlcigoKSA9PiBCb29sZWFuKGNhcnREZXNjcmlwdGlvbikpLFxuICAgICAgbWFwKCh0ZXh0VGl0bGUpID0+ICh7XG4gICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgIHRleHQ6IFtjYXJ0RGVzY3JpcHRpb25dLFxuICAgICAgfSkpXG4gICAgKTtcbiAgfVxuXG4gIGdldENhcnRJZChjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnc2F2ZWRDYXJ0RGV0YWlscy5jYXJ0SWQnKS5waXBlKFxuICAgICAgZmlsdGVyKCgpID0+IEJvb2xlYW4oY2FydElkKSksXG4gICAgICBtYXAoKHRleHRUaXRsZSkgPT4gKHtcbiAgICAgICAgdGl0bGU6IHRleHRUaXRsZSxcbiAgICAgICAgdGV4dDogW2NhcnRJZF0sXG4gICAgICB9KSlcbiAgICApO1xuICB9XG5cbiAgZ2V0RGF0ZVNhdmVkKHNhdmVUaW1lOiBzdHJpbmcgfCBudWxsKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdzYXZlZENhcnREZXRhaWxzLmRhdGVTYXZlZCcpLnBpcGUoXG4gICAgICBmaWx0ZXIoKCkgPT4gQm9vbGVhbihzYXZlVGltZSkpLFxuICAgICAgbWFwKCh0ZXh0VGl0bGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICAgIHRleHQ6IFtzYXZlVGltZSA/PyAnJ10sXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRDYXJ0SXRlbXModG90YWxJdGVtczogbnVtYmVyKTogT2JzZXJ2YWJsZTxDYXJkPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdzYXZlZENhcnREZXRhaWxzLml0ZW1zJykucGlwZShcbiAgICAgIGZpbHRlcigoKSA9PiBCb29sZWFuKHRvdGFsSXRlbXMpKSxcbiAgICAgIG1hcCgodGV4dFRpdGxlKSA9PiAoe1xuICAgICAgICB0aXRsZTogdGV4dFRpdGxlLFxuICAgICAgICB0ZXh0OiBbdG90YWxJdGVtcy50b1N0cmluZygpXSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICBnZXRDYXJ0UXVhbnRpdHkodG90YWxVbml0Q291bnQ6IG51bWJlcik6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnc2F2ZWRDYXJ0RGV0YWlscy5xdWFudGl0eScpLnBpcGUoXG4gICAgICBmaWx0ZXIoKCkgPT4gQm9vbGVhbih0b3RhbFVuaXRDb3VudCkpLFxuICAgICAgbWFwKCh0ZXh0VGl0bGUpID0+ICh7XG4gICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgIHRleHQ6IFt0b3RhbFVuaXRDb3VudC50b1N0cmluZygpXSxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICBnZXRDYXJ0VG90YWwodG90YWxQcmljZVdpdGhUYXg6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnc2F2ZWRDYXJ0RGV0YWlscy50b3RhbCcpLnBpcGUoXG4gICAgICBmaWx0ZXIoKCkgPT4gQm9vbGVhbih0b3RhbFByaWNlV2l0aFRheCkpLFxuICAgICAgbWFwKCh0ZXh0VGl0bGUpID0+ICh7XG4gICAgICAgIHRpdGxlOiB0ZXh0VGl0bGUsXG4gICAgICAgIHRleHQ6IFt0b3RhbFByaWNlV2l0aFRheF0sXG4gICAgICB9KSlcbiAgICApO1xuICB9XG5cbiAgb3BlbkRpYWxvZyhjYXJ0OiBDYXJ0KTogdm9pZCB7XG4gICAgY29uc3QgZGlhbG9nID0gdGhpcy5sYXVuY2hEaWFsb2dTZXJ2aWNlLm9wZW5EaWFsb2coXG4gICAgICBMQVVOQ0hfQ0FMTEVSLlNBVkVEX0NBUlQsXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLnZjcixcbiAgICAgIHsgY2FydCwgbGF5b3V0T3B0aW9uOiAnZWRpdCcgfVxuICAgICk7XG5cbiAgICBpZiAoZGlhbG9nKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoZGlhbG9nLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwic2F2ZWRDYXJ0JCB8IGFzeW5jIGFzIGNhcnRcIj5cbiAgPGRpdiBjbGFzcz1cImN4LWNhcnQtc3VtbWFyeVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjeC1zdW1tYXJ5LWNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN4LWVkaXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGN4LWNhcmQgW2NvbnRlbnRdPVwiZ2V0Q2FydE5hbWUoY2FydD8ubmFtZSkgfCBhc3luY1wiPjwvY3gtY2FyZD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY3gtZWRpdC1jYXJ0XCIgI2VsZW1lbnQgKGNsaWNrKT1cIm9wZW5EaWFsb2coY2FydClcIj5cbiAgICAgICAgICAgIDxjeC1pY29uIFt0eXBlXT1cImljb25UeXBlcy5QRU5DSUxcIj48L2N4LWljb24+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3gtY2FyZC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgIDxjeC1jYXJkXG4gICAgICAgICAgICBbY29udGVudF09XCJnZXRDYXJ0RGVzY3JpcHRpb24oY2FydD8uZGVzY3JpcHRpb24pIHwgYXN5bmNcIlxuICAgICAgICAgICAgW3RydW5jYXRlVGV4dF09XCJ0cnVlXCJcbiAgICAgICAgICAgIFtjaGFyYWN0ZXJzTGltaXRdPVwiMzBcIlxuICAgICAgICAgID48L2N4LWNhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3gtc3VtbWFyeS1jYXJkXCI+XG4gICAgICAgIDxjeC1jYXJkIFtjb250ZW50XT1cImdldENhcnRJZChjYXJ0Py5jb2RlKSB8IGFzeW5jXCI+PC9jeC1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3gtc3VtbWFyeS1jYXJkXCI+XG4gICAgICAgIDxjeC1jYXJkXG4gICAgICAgICAgW2NvbnRlbnRdPVwiZ2V0RGF0ZVNhdmVkKGNhcnQ/LnNhdmVUaW1lIHwgY3hEYXRlKSB8IGFzeW5jXCJcbiAgICAgICAgPjwvY3gtY2FyZD5cbiAgICAgICAgPGN4LWNhcmQgW2NvbnRlbnRdPVwiZ2V0Q2FydEl0ZW1zKGNhcnQ/LnRvdGFsSXRlbXMpIHwgYXN5bmNcIj48L2N4LWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjeC1zdW1tYXJ5LWNhcmRcIj5cbiAgICAgICAgPGN4LWNhcmRcbiAgICAgICAgICBbY29udGVudF09XCJnZXRDYXJ0UXVhbnRpdHkoY2FydD8udG90YWxVbml0Q291bnQpIHwgYXN5bmNcIlxuICAgICAgICA+PC9jeC1jYXJkPlxuICAgICAgICA8Y3gtY2FyZFxuICAgICAgICAgIFtjb250ZW50XT1cIlxuICAgICAgICAgICAgZ2V0Q2FydFRvdGFsKGNhcnQ/LnRvdGFsUHJpY2VXaXRoVGF4Py5mb3JtYXR0ZWRWYWx1ZSkgfCBhc3luY1xuICAgICAgICAgIFwiXG4gICAgICAgID48L2N4LWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==