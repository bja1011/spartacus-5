/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Component } from '@angular/core';
import { GlobalMessageType, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./address-book.component.service";
import * as i2 from "@spartacus/core";
import * as i3 from "@angular/common";
import * as i4 from "../../../shared/components/card/card.component";
import * as i5 from "./address-form/address-form.component";
import * as i6 from "../../../shared/components/spinner/spinner.component";
export class AddressBookComponent {
    constructor(service, translation, globalMessageService) {
        this.service = service;
        this.translation = translation;
        this.globalMessageService = globalMessageService;
        this.showAddAddressForm = false;
        this.showEditAddressForm = false;
    }
    ngOnInit() {
        this.addresses$ = this.service.getAddresses();
        this.addressesStateLoading$ = this.service.getAddressesStateLoading();
        this.service.loadAddresses();
    }
    addAddressButtonHandle() {
        this.showEditAddressForm = false;
        this.showAddAddressForm = true;
    }
    editAddressButtonHandle(address) {
        this.showAddAddressForm = false;
        this.showEditAddressForm = true;
        this.currentAddress = address;
    }
    addAddressSubmit(address) {
        this.showAddAddressForm = false;
        this.service.addUserAddress(address);
    }
    addAddressCancel() {
        this.showAddAddressForm = false;
    }
    editAddressSubmit(address) {
        this.showEditAddressForm = false;
        if (address && this.currentAddress['id']) {
            this.service.updateUserAddress(this.currentAddress['id'], address);
        }
    }
    editAddressCancel() {
        this.showEditAddressForm = false;
    }
    getCardContent(address) {
        return combineLatest([
            this.translation.translate('addressCard.default'),
            this.translation.translate('addressCard.setAsDefault'),
            this.translation.translate('common.delete'),
            this.translation.translate('common.edit'),
            this.translation.translate('addressBook.areYouSureToDeleteAddress'),
        ]).pipe(map(([defaultText, setAsDefaultText, textDelete, textEdit, textVerifyDeleteMsg,]) => {
            let region = '';
            if (address.region && address.region.isocode) {
                region = address.region.isocode + ', ';
            }
            const actions = [];
            if (!address.defaultAddress) {
                actions.push({ name: setAsDefaultText, event: 'default' });
            }
            actions.push({ name: textEdit, event: 'edit' });
            actions.push({ name: textDelete, event: 'delete' });
            return {
                role: 'region',
                textBold: address.firstName + ' ' + address.lastName,
                text: [
                    address.line1,
                    address.line2,
                    address.town + ', ' + region + address.country?.isocode,
                    address.postalCode,
                    address.phone,
                ],
                actions: actions,
                header: address.defaultAddress ? `✓ ${defaultText}` : '',
                deleteMsg: textVerifyDeleteMsg,
                label: address.defaultAddress
                    ? 'addressBook.defaultDeliveryAddress'
                    : 'addressBook.additionalDeliveryAddress',
            };
        }));
    }
    setAddressAsDefault(address) {
        this.service.setAddressAsDefault(address.id ?? '');
        this.globalMessageService.add({
            key: 'addressMessages.setAsDefaultSuccessfully',
            params: { streetAddress: address.line1 },
        }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    }
    deleteAddress(addressId) {
        this.service.deleteUserAddress(addressId);
    }
    setEdit(addressId) {
        if (this.editCard !== addressId) {
            this.editCard = addressId;
        }
        else {
            this.deleteAddress(addressId);
        }
    }
    cancelCard() {
        this.editCard = null;
    }
}
AddressBookComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: AddressBookComponent, deps: [{ token: i1.AddressBookComponentService }, { token: i2.TranslationService }, { token: i2.GlobalMessageService }], target: i0.ɵɵFactoryTarget.Component });
AddressBookComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: AddressBookComponent, selector: "cx-address-book", ngImport: i0, template: "<div class=\"cx-section\">\n  <ng-container\n    *ngIf=\"\n      (addresses$ | async)?.length &&\n      !(showAddAddressForm || showEditAddressForm)\n    \"\n  >\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <button\n          class=\"btn btn-block btn-action\"\n          (click)=\"addAddressButtonHandle()\"\n        >\n          {{ 'addressBook.addNewAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n\n    <div\n      class=\"row cx-address-deck\"\n      *ngIf=\"!(addressesStateLoading$ | async); else loading\"\n    >\n      <div\n        role=\"status\"\n        [attr.aria-label]=\"'common.loaded' | cxTranslate\"\n      ></div>\n      <div\n        *ngFor=\"let address of addresses$ | async; let i = index\"\n        class=\"col-md-6 cx-address-card\"\n      >\n        <cx-card\n          [index]=\"i\"\n          [border]=\"true\"\n          [fitToContainer]=\"true\"\n          [content]=\"getCardContent(address) | async\"\n          (editCard)=\"editAddressButtonHandle(address)\"\n          (setDefaultCard)=\"setAddressAsDefault(address)\"\n          (deleteCard)=\"setEdit(address.id ?? '')\"\n          [editMode]=\"address.id === editCard\"\n          (cancelCard)=\"cancelCard()\"\n        ></cx-card>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container\n    *ngIf=\"\n      (!(addresses$ | async)?.length || showAddAddressForm) &&\n      !showEditAddressForm\n    \"\n  >\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.addNewDeliveryAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        class=\"cx-form\"\n        [showTitleCode]=\"true\"\n        [showCancelBtn]=\"!((addresses$ | async)?.length === 0)\"\n        actionBtnLabel=\"{{ 'addressBook.addAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [setAsDefaultField]=\"!((addresses$ | async)?.length === 0)\"\n        (submitAddress)=\"addAddressSubmit($event)\"\n        (backToAddress)=\"addAddressCancel()\"\n        (cancelCard)=\"cancelCard()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n\n  <ng-container *ngIf=\"showEditAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.editDeliveryAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        [showTitleCode]=\"true\"\n        actionBtnLabel=\"{{ 'addressBook.updateAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [addressData]=\"currentAddress\"\n        (submitAddress)=\"editAddressSubmit($event)\"\n        (backToAddress)=\"editAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n</div>\n\n<ng-template #loading>\n  <div class=\"col-md-12 cx-address-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.CardComponent, selector: "cx-card", inputs: ["border", "editMode", "isDefault", "content", "fitToContainer", "truncateText", "charactersLimit", "index"], outputs: ["deleteCard", "setDefaultCard", "sendCard", "editCard", "cancelCard"] }, { kind: "component", type: i5.AddressFormComponent, selector: "cx-address-form", inputs: ["addressData", "actionBtnLabel", "cancelBtnLabel", "setAsDefaultField", "showTitleCode", "showCancelBtn"], outputs: ["submitAddress", "backToAddress"] }, { kind: "component", type: i6.SpinnerComponent, selector: "cx-spinner" }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }, { kind: "pipe", type: i2.TranslatePipe, name: "cxTranslate" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: AddressBookComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-address-book', template: "<div class=\"cx-section\">\n  <ng-container\n    *ngIf=\"\n      (addresses$ | async)?.length &&\n      !(showAddAddressForm || showEditAddressForm)\n    \"\n  >\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <button\n          class=\"btn btn-block btn-action\"\n          (click)=\"addAddressButtonHandle()\"\n        >\n          {{ 'addressBook.addNewAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n\n    <div\n      class=\"row cx-address-deck\"\n      *ngIf=\"!(addressesStateLoading$ | async); else loading\"\n    >\n      <div\n        role=\"status\"\n        [attr.aria-label]=\"'common.loaded' | cxTranslate\"\n      ></div>\n      <div\n        *ngFor=\"let address of addresses$ | async; let i = index\"\n        class=\"col-md-6 cx-address-card\"\n      >\n        <cx-card\n          [index]=\"i\"\n          [border]=\"true\"\n          [fitToContainer]=\"true\"\n          [content]=\"getCardContent(address) | async\"\n          (editCard)=\"editAddressButtonHandle(address)\"\n          (setDefaultCard)=\"setAddressAsDefault(address)\"\n          (deleteCard)=\"setEdit(address.id ?? '')\"\n          [editMode]=\"address.id === editCard\"\n          (cancelCard)=\"cancelCard()\"\n        ></cx-card>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container\n    *ngIf=\"\n      (!(addresses$ | async)?.length || showAddAddressForm) &&\n      !showEditAddressForm\n    \"\n  >\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.addNewDeliveryAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        class=\"cx-form\"\n        [showTitleCode]=\"true\"\n        [showCancelBtn]=\"!((addresses$ | async)?.length === 0)\"\n        actionBtnLabel=\"{{ 'addressBook.addAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [setAsDefaultField]=\"!((addresses$ | async)?.length === 0)\"\n        (submitAddress)=\"addAddressSubmit($event)\"\n        (backToAddress)=\"addAddressCancel()\"\n        (cancelCard)=\"cancelCard()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n\n  <ng-container *ngIf=\"showEditAddressForm\">\n    <section>\n      <p class=\"cx-section-msg\">\n        {{ 'addressBook.editDeliveryAddress' | cxTranslate }}\n      </p>\n      <cx-address-form\n        [showTitleCode]=\"true\"\n        actionBtnLabel=\"{{ 'addressBook.updateAddress' | cxTranslate }}\"\n        cancelBtnLabel=\"{{ 'addressBook.backToAddressList' | cxTranslate }}\"\n        [addressData]=\"currentAddress\"\n        (submitAddress)=\"editAddressSubmit($event)\"\n        (backToAddress)=\"editAddressCancel()\"\n      ></cx-address-form>\n    </section>\n  </ng-container>\n</div>\n\n<ng-template #loading>\n  <div class=\"col-md-12 cx-address-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.AddressBookComponentService }, { type: i2.TranslationService }, { type: i2.GlobalMessageService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L2FkZHJlc3MtYm9vay9hZGRyZXNzLWJvb2suY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9jbXMtY29tcG9uZW50cy9teWFjY291bnQvYWRkcmVzcy1ib29rL2FkZHJlc3MtYm9vay5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBR0wsaUJBQWlCLEdBRWxCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7O0FBUXJDLE1BQU0sT0FBTyxvQkFBb0I7SUFVL0IsWUFDUyxPQUFvQyxFQUNqQyxXQUErQixFQUMvQixvQkFBMEM7UUFGN0MsWUFBTyxHQUFQLE9BQU8sQ0FBNkI7UUFDakMsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFQdEQsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLHdCQUFtQixHQUFHLEtBQUssQ0FBQztJQU96QixDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7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Qix1REN0QmpDLCswRkEyRkE7MkZEckVhLG9CQUFvQjtrQkFKaEMsU0FBUzsrQkFDRSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBUcmFuc2xhdGlvblNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZCc7XG5pbXBvcnQgeyBBZGRyZXNzQm9va0NvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL2FkZHJlc3MtYm9vay5jb21wb25lbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFkZHJlc3MtYm9vaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGRyZXNzLWJvb2suY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRyZXNzQm9va0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGFkZHJlc3NlcyQ6IE9ic2VydmFibGU8QWRkcmVzc1tdPjtcbiAgY2FyZHMkOiBPYnNlcnZhYmxlPENhcmRbXT47XG4gIGFkZHJlc3Nlc1N0YXRlTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGN1cnJlbnRBZGRyZXNzOiBBZGRyZXNzO1xuXG4gIHNob3dBZGRBZGRyZXNzRm9ybSA9IGZhbHNlO1xuICBzaG93RWRpdEFkZHJlc3NGb3JtID0gZmFsc2U7XG4gIGVkaXRDYXJkOiBzdHJpbmcgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzZXJ2aWNlOiBBZGRyZXNzQm9va0NvbXBvbmVudFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRyZXNzZXMkID0gdGhpcy5zZXJ2aWNlLmdldEFkZHJlc3NlcygpO1xuICAgIHRoaXMuYWRkcmVzc2VzU3RhdGVMb2FkaW5nJCA9IHRoaXMuc2VydmljZS5nZXRBZGRyZXNzZXNTdGF0ZUxvYWRpbmcoKTtcbiAgICB0aGlzLnNlcnZpY2UubG9hZEFkZHJlc3NlcygpO1xuICB9XG5cbiAgYWRkQWRkcmVzc0J1dHRvbkhhbmRsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dFZGl0QWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgICB0aGlzLnNob3dBZGRBZGRyZXNzRm9ybSA9IHRydWU7XG4gIH1cblxuICBlZGl0QWRkcmVzc0J1dHRvbkhhbmRsZShhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5zaG93QWRkQWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgICB0aGlzLnNob3dFZGl0QWRkcmVzc0Zvcm0gPSB0cnVlO1xuICAgIHRoaXMuY3VycmVudEFkZHJlc3MgPSBhZGRyZXNzO1xuICB9XG5cbiAgYWRkQWRkcmVzc1N1Ym1pdChhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5zaG93QWRkQWRkcmVzc0Zvcm0gPSBmYWxzZTtcbiAgICB0aGlzLnNlcnZpY2UuYWRkVXNlckFkZHJlc3MoYWRkcmVzcyk7XG4gIH1cblxuICBhZGRBZGRyZXNzQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0FkZEFkZHJlc3NGb3JtID0gZmFsc2U7XG4gIH1cblxuICBlZGl0QWRkcmVzc1N1Ym1pdChhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5zaG93RWRpdEFkZHJlc3NGb3JtID0gZmFsc2U7XG4gICAgaWYgKGFkZHJlc3MgJiYgdGhpcy5jdXJyZW50QWRkcmVzc1snaWQnXSkge1xuICAgICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZVVzZXJBZGRyZXNzKHRoaXMuY3VycmVudEFkZHJlc3NbJ2lkJ10sIGFkZHJlc3MpO1xuICAgIH1cbiAgfVxuXG4gIGVkaXRBZGRyZXNzQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd0VkaXRBZGRyZXNzRm9ybSA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0Q2FyZENvbnRlbnQoYWRkcmVzczogQWRkcmVzcyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdhZGRyZXNzQ2FyZC5kZWZhdWx0JyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnYWRkcmVzc0NhcmQuc2V0QXNEZWZhdWx0JyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY29tbW9uLmRlbGV0ZScpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5lZGl0JyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnYWRkcmVzc0Jvb2suYXJlWW91U3VyZVRvRGVsZXRlQWRkcmVzcycpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChbXG4gICAgICAgICAgZGVmYXVsdFRleHQsXG4gICAgICAgICAgc2V0QXNEZWZhdWx0VGV4dCxcbiAgICAgICAgICB0ZXh0RGVsZXRlLFxuICAgICAgICAgIHRleHRFZGl0LFxuICAgICAgICAgIHRleHRWZXJpZnlEZWxldGVNc2csXG4gICAgICAgIF0pID0+IHtcbiAgICAgICAgICBsZXQgcmVnaW9uID0gJyc7XG5cbiAgICAgICAgICBpZiAoYWRkcmVzcy5yZWdpb24gJiYgYWRkcmVzcy5yZWdpb24uaXNvY29kZSkge1xuICAgICAgICAgICAgcmVnaW9uID0gYWRkcmVzcy5yZWdpb24uaXNvY29kZSArICcsICc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgYWN0aW9uczogeyBuYW1lOiBzdHJpbmc7IGV2ZW50OiBzdHJpbmcgfVtdID0gW107XG4gICAgICAgICAgaWYgKCFhZGRyZXNzLmRlZmF1bHRBZGRyZXNzKSB7XG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goeyBuYW1lOiBzZXRBc0RlZmF1bHRUZXh0LCBldmVudDogJ2RlZmF1bHQnIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhY3Rpb25zLnB1c2goeyBuYW1lOiB0ZXh0RWRpdCwgZXZlbnQ6ICdlZGl0JyB9KTtcbiAgICAgICAgICBhY3Rpb25zLnB1c2goeyBuYW1lOiB0ZXh0RGVsZXRlLCBldmVudDogJ2RlbGV0ZScgfSk7XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm9sZTogJ3JlZ2lvbicsXG4gICAgICAgICAgICB0ZXh0Qm9sZDogYWRkcmVzcy5maXJzdE5hbWUgKyAnICcgKyBhZGRyZXNzLmxhc3ROYW1lLFxuICAgICAgICAgICAgdGV4dDogW1xuICAgICAgICAgICAgICBhZGRyZXNzLmxpbmUxLFxuICAgICAgICAgICAgICBhZGRyZXNzLmxpbmUyLFxuICAgICAgICAgICAgICBhZGRyZXNzLnRvd24gKyAnLCAnICsgcmVnaW9uICsgYWRkcmVzcy5jb3VudHJ5Py5pc29jb2RlLFxuICAgICAgICAgICAgICBhZGRyZXNzLnBvc3RhbENvZGUsXG4gICAgICAgICAgICAgIGFkZHJlc3MucGhvbmUsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYWN0aW9uczogYWN0aW9ucyxcbiAgICAgICAgICAgIGhlYWRlcjogYWRkcmVzcy5kZWZhdWx0QWRkcmVzcyA/IGDinJMgJHtkZWZhdWx0VGV4dH1gIDogJycsXG4gICAgICAgICAgICBkZWxldGVNc2c6IHRleHRWZXJpZnlEZWxldGVNc2csXG4gICAgICAgICAgICBsYWJlbDogYWRkcmVzcy5kZWZhdWx0QWRkcmVzc1xuICAgICAgICAgICAgICA/ICdhZGRyZXNzQm9vay5kZWZhdWx0RGVsaXZlcnlBZGRyZXNzJ1xuICAgICAgICAgICAgICA6ICdhZGRyZXNzQm9vay5hZGRpdGlvbmFsRGVsaXZlcnlBZGRyZXNzJyxcbiAgICAgICAgICB9IGFzIENhcmQ7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgc2V0QWRkcmVzc0FzRGVmYXVsdChhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLnNldEFkZHJlc3NBc0RlZmF1bHQoYWRkcmVzcy5pZCA/PyAnJyk7XG4gICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICB7XG4gICAgICAgIGtleTogJ2FkZHJlc3NNZXNzYWdlcy5zZXRBc0RlZmF1bHRTdWNjZXNzZnVsbHknLFxuICAgICAgICBwYXJhbXM6IHsgc3RyZWV0QWRkcmVzczogYWRkcmVzcy5saW5lMSB9LFxuICAgICAgfSxcbiAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICk7XG4gIH1cblxuICBkZWxldGVBZGRyZXNzKGFkZHJlc3NJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLmRlbGV0ZVVzZXJBZGRyZXNzKGFkZHJlc3NJZCk7XG4gIH1cblxuICBzZXRFZGl0KGFkZHJlc3NJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZWRpdENhcmQgIT09IGFkZHJlc3NJZCkge1xuICAgICAgdGhpcy5lZGl0Q2FyZCA9IGFkZHJlc3NJZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWxldGVBZGRyZXNzKGFkZHJlc3NJZCk7XG4gICAgfVxuICB9XG5cbiAgY2FuY2VsQ2FyZCgpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRDYXJkID0gbnVsbDtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImN4LXNlY3Rpb25cIj5cbiAgPG5nLWNvbnRhaW5lclxuICAgICpuZ0lmPVwiXG4gICAgICAoYWRkcmVzc2VzJCB8IGFzeW5jKT8ubGVuZ3RoICYmXG4gICAgICAhKHNob3dBZGRBZGRyZXNzRm9ybSB8fCBzaG93RWRpdEFkZHJlc3NGb3JtKVxuICAgIFwiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tYWN0aW9uXCJcbiAgICAgICAgICAoY2xpY2spPVwiYWRkQWRkcmVzc0J1dHRvbkhhbmRsZSgpXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7ICdhZGRyZXNzQm9vay5hZGROZXdBZGRyZXNzJyB8IGN4VHJhbnNsYXRlIH19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInJvdyBjeC1hZGRyZXNzLWRlY2tcIlxuICAgICAgKm5nSWY9XCIhKGFkZHJlc3Nlc1N0YXRlTG9hZGluZyQgfCBhc3luYyk7IGVsc2UgbG9hZGluZ1wiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICByb2xlPVwic3RhdHVzXCJcbiAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInY29tbW9uLmxvYWRlZCcgfCBjeFRyYW5zbGF0ZVwiXG4gICAgICA+PC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgICpuZ0Zvcj1cImxldCBhZGRyZXNzIG9mIGFkZHJlc3NlcyQgfCBhc3luYzsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgIGNsYXNzPVwiY29sLW1kLTYgY3gtYWRkcmVzcy1jYXJkXCJcbiAgICAgID5cbiAgICAgICAgPGN4LWNhcmRcbiAgICAgICAgICBbaW5kZXhdPVwiaVwiXG4gICAgICAgICAgW2JvcmRlcl09XCJ0cnVlXCJcbiAgICAgICAgICBbZml0VG9Db250YWluZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgW2NvbnRlbnRdPVwiZ2V0Q2FyZENvbnRlbnQoYWRkcmVzcykgfCBhc3luY1wiXG4gICAgICAgICAgKGVkaXRDYXJkKT1cImVkaXRBZGRyZXNzQnV0dG9uSGFuZGxlKGFkZHJlc3MpXCJcbiAgICAgICAgICAoc2V0RGVmYXVsdENhcmQpPVwic2V0QWRkcmVzc0FzRGVmYXVsdChhZGRyZXNzKVwiXG4gICAgICAgICAgKGRlbGV0ZUNhcmQpPVwic2V0RWRpdChhZGRyZXNzLmlkID8/ICcnKVwiXG4gICAgICAgICAgW2VkaXRNb2RlXT1cImFkZHJlc3MuaWQgPT09IGVkaXRDYXJkXCJcbiAgICAgICAgICAoY2FuY2VsQ2FyZCk9XCJjYW5jZWxDYXJkKClcIlxuICAgICAgICA+PC9jeC1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDxuZy1jb250YWluZXJcbiAgICAqbmdJZj1cIlxuICAgICAgKCEoYWRkcmVzc2VzJCB8IGFzeW5jKT8ubGVuZ3RoIHx8IHNob3dBZGRBZGRyZXNzRm9ybSkgJiZcbiAgICAgICFzaG93RWRpdEFkZHJlc3NGb3JtXG4gICAgXCJcbiAgPlxuICAgIDxzZWN0aW9uPlxuICAgICAgPHAgY2xhc3M9XCJjeC1zZWN0aW9uLW1zZ1wiPlxuICAgICAgICB7eyAnYWRkcmVzc0Jvb2suYWRkTmV3RGVsaXZlcnlBZGRyZXNzJyB8IGN4VHJhbnNsYXRlIH19XG4gICAgICA8L3A+XG4gICAgICA8Y3gtYWRkcmVzcy1mb3JtXG4gICAgICAgIGNsYXNzPVwiY3gtZm9ybVwiXG4gICAgICAgIFtzaG93VGl0bGVDb2RlXT1cInRydWVcIlxuICAgICAgICBbc2hvd0NhbmNlbEJ0bl09XCIhKChhZGRyZXNzZXMkIHwgYXN5bmMpPy5sZW5ndGggPT09IDApXCJcbiAgICAgICAgYWN0aW9uQnRuTGFiZWw9XCJ7eyAnYWRkcmVzc0Jvb2suYWRkQWRkcmVzcycgfCBjeFRyYW5zbGF0ZSB9fVwiXG4gICAgICAgIGNhbmNlbEJ0bkxhYmVsPVwie3sgJ2FkZHJlc3NCb29rLmJhY2tUb0FkZHJlc3NMaXN0JyB8IGN4VHJhbnNsYXRlIH19XCJcbiAgICAgICAgW3NldEFzRGVmYXVsdEZpZWxkXT1cIiEoKGFkZHJlc3NlcyQgfCBhc3luYyk/Lmxlbmd0aCA9PT0gMClcIlxuICAgICAgICAoc3VibWl0QWRkcmVzcyk9XCJhZGRBZGRyZXNzU3VibWl0KCRldmVudClcIlxuICAgICAgICAoYmFja1RvQWRkcmVzcyk9XCJhZGRBZGRyZXNzQ2FuY2VsKClcIlxuICAgICAgICAoY2FuY2VsQ2FyZCk9XCJjYW5jZWxDYXJkKClcIlxuICAgICAgPjwvY3gtYWRkcmVzcy1mb3JtPlxuICAgIDwvc2VjdGlvbj5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dFZGl0QWRkcmVzc0Zvcm1cIj5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxwIGNsYXNzPVwiY3gtc2VjdGlvbi1tc2dcIj5cbiAgICAgICAge3sgJ2FkZHJlc3NCb29rLmVkaXREZWxpdmVyeUFkZHJlc3MnIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgIDwvcD5cbiAgICAgIDxjeC1hZGRyZXNzLWZvcm1cbiAgICAgICAgW3Nob3dUaXRsZUNvZGVdPVwidHJ1ZVwiXG4gICAgICAgIGFjdGlvbkJ0bkxhYmVsPVwie3sgJ2FkZHJlc3NCb29rLnVwZGF0ZUFkZHJlc3MnIHwgY3hUcmFuc2xhdGUgfX1cIlxuICAgICAgICBjYW5jZWxCdG5MYWJlbD1cInt7ICdhZGRyZXNzQm9vay5iYWNrVG9BZGRyZXNzTGlzdCcgfCBjeFRyYW5zbGF0ZSB9fVwiXG4gICAgICAgIFthZGRyZXNzRGF0YV09XCJjdXJyZW50QWRkcmVzc1wiXG4gICAgICAgIChzdWJtaXRBZGRyZXNzKT1cImVkaXRBZGRyZXNzU3VibWl0KCRldmVudClcIlxuICAgICAgICAoYmFja1RvQWRkcmVzcyk9XCJlZGl0QWRkcmVzc0NhbmNlbCgpXCJcbiAgICAgID48L2N4LWFkZHJlc3MtZm9ybT5cbiAgICA8L3NlY3Rpb24+XG4gIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjbG9hZGluZz5cbiAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBjeC1hZGRyZXNzLXNwaW5uZXJcIj5cbiAgICA8Y3gtc3Bpbm5lcj48L2N4LXNwaW5uZXI+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==