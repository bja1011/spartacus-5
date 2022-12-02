/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OrderEntriesSource, ProductImportStatus, } from '@spartacus/cart/base/root';
import { ICON_TYPE, } from '@spartacus/storefront';
import { BehaviorSubject } from 'rxjs';
import { finalize, pluck } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/storefront";
import * as i2 from "@angular/common";
import * as i3 from "./import-entries-form/import-entries-form.component";
import * as i4 from "./import-entries-summary/import-entries-summary.component";
import * as i5 from "./import-to-new-saved-cart-form/import-to-new-saved-cart-form.component";
import * as i6 from "@spartacus/core";
export class ImportEntriesDialogComponent {
    constructor(launchDialogService) {
        this.launchDialogService = launchDialogService;
        this.iconTypes = ICON_TYPE;
        this.focusConfig = {
            trap: true,
            block: true,
            autofocus: 'button',
            focusOnEscape: true,
        };
        this.formState = true;
        this.summary$ = new BehaviorSubject({
            loading: false,
            cartName: '',
            count: 0,
            total: 0,
            successesCount: 0,
            warningMessages: [],
            errorMessages: [],
        });
        this.context$ = this.launchDialogService.data$.pipe(pluck('orderEntriesContext'));
    }
    isNewCartForm(context) {
        return context.type === OrderEntriesSource.NEW_SAVED_CART;
    }
    close(reason) {
        this.launchDialogService.closeDialog(reason);
    }
    importProducts(context, { products, savedCartInfo, }) {
        this.formState = false;
        this.summary$.next({
            ...this.summary$.value,
            loading: true,
            total: products.length,
            cartName: savedCartInfo?.name,
        });
        context
            .addEntries(products, savedCartInfo)
            .pipe(finalize(() => {
            this.summary$.next({
                ...this.summary$.value,
                loading: false,
            });
        }))
            .subscribe((action) => {
            this.populateSummary(action);
        });
    }
    populateSummary(action) {
        if (action.statusCode === ProductImportStatus.SUCCESS) {
            this.summary$.next({
                ...this.summary$.value,
                count: this.summary$.value.count + 1,
                successesCount: this.summary$.value.successesCount + 1,
            });
        }
        else if (action.statusCode === ProductImportStatus.LOW_STOCK) {
            this.summary$.next({
                ...this.summary$.value,
                count: this.summary$.value.count + 1,
                warningMessages: [...this.summary$.value.warningMessages, action],
            });
        }
        else {
            this.summary$.next({
                ...this.summary$.value,
                count: this.summary$.value.count + 1,
                errorMessages: [...this.summary$.value.errorMessages, action],
            });
        }
    }
}
ImportEntriesDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ImportEntriesDialogComponent, deps: [{ token: i1.LaunchDialogService }], target: i0.ɵɵFactoryTarget.Component });
ImportEntriesDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: ImportEntriesDialogComponent, selector: "cx-import-entries-dialog", ngImport: i0, template: "<div\n  [cxFocus]=\"focusConfig\"\n  (esc)=\"close('Escape clicked')\"\n  class=\"cx-import-entries-dialog\"\n>\n  <div class=\"cx-import-entries-container\">\n    <!-- Modal Header -->\n    <div class=\"modal-header cx-import-entries-header\">\n      <ng-container>\n        <div class=\"cx-import-entries-title modal-title\">\n          {{ 'importEntriesDialog.importProducts' | cxTranslate }}\n        </div>\n      </ng-container>\n\n      <button\n        (click)=\"close('Close Import Products Dialog')\"\n        [attr.aria-label]=\"'importEntriesDialog.close' | cxTranslate\"\n        class=\"cx-import-entries-close close\"\n        type=\"button\"\n        [disabled]=\"(summary$ | async)?.loading\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n\n    <!-- Modal Body -->\n    <ng-container *ngIf=\"context$ | async as context\">\n      <ng-container *ngIf=\"formState; else importSummary\">\n        <cx-import-to-new-saved-cart-form\n          *ngIf=\"isNewCartForm(context); else reducedForm\"\n          [type]=\"context.type\"\n          (submitEvent)=\"importProducts(context, $event)\"\n        ></cx-import-to-new-saved-cart-form>\n        <ng-template #reducedForm>\n          <cx-import-entries-form\n            [type]=\"context.type\"\n            (submitEvent)=\"importProducts(context, $event)\"\n          ></cx-import-entries-form>\n        </ng-template>\n      </ng-container>\n\n      <ng-template #importSummary>\n        <cx-import-entries-summary\n          [summary]=\"summary$ | async\"\n          [type]=\"context.type\"\n          (closeEvent)=\"close('Close Import Products Dialog')\"\n        ></cx-import-entries-summary>\n      </ng-template>\n    </ng-container>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i1.IconComponent, selector: "cx-icon,[cxIcon]", inputs: ["cxIcon", "type"] }, { kind: "directive", type: i1.FocusDirective, selector: "[cxFocus]", inputs: ["cxFocus"] }, { kind: "component", type: i3.ImportEntriesFormComponent, selector: "cx-import-entries-form", inputs: ["type"], outputs: ["submitEvent"] }, { kind: "component", type: i4.ImportEntriesSummaryComponent, selector: "cx-import-entries-summary", inputs: ["type", "summary"], outputs: ["closeEvent"] }, { kind: "component", type: i5.ImportToNewSavedCartFormComponent, selector: "cx-import-to-new-saved-cart-form", outputs: ["submitEvent"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "pipe", type: i6.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ImportEntriesDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-import-entries-dialog', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  [cxFocus]=\"focusConfig\"\n  (esc)=\"close('Escape clicked')\"\n  class=\"cx-import-entries-dialog\"\n>\n  <div class=\"cx-import-entries-container\">\n    <!-- Modal Header -->\n    <div class=\"modal-header cx-import-entries-header\">\n      <ng-container>\n        <div class=\"cx-import-entries-title modal-title\">\n          {{ 'importEntriesDialog.importProducts' | cxTranslate }}\n        </div>\n      </ng-container>\n\n      <button\n        (click)=\"close('Close Import Products Dialog')\"\n        [attr.aria-label]=\"'importEntriesDialog.close' | cxTranslate\"\n        class=\"cx-import-entries-close close\"\n        type=\"button\"\n        [disabled]=\"(summary$ | async)?.loading\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n\n    <!-- Modal Body -->\n    <ng-container *ngIf=\"context$ | async as context\">\n      <ng-container *ngIf=\"formState; else importSummary\">\n        <cx-import-to-new-saved-cart-form\n          *ngIf=\"isNewCartForm(context); else reducedForm\"\n          [type]=\"context.type\"\n          (submitEvent)=\"importProducts(context, $event)\"\n        ></cx-import-to-new-saved-cart-form>\n        <ng-template #reducedForm>\n          <cx-import-entries-form\n            [type]=\"context.type\"\n            (submitEvent)=\"importProducts(context, $event)\"\n          ></cx-import-entries-form>\n        </ng-template>\n      </ng-container>\n\n      <ng-template #importSummary>\n        <cx-import-entries-summary\n          [summary]=\"summary$ | async\"\n          [type]=\"context.type\"\n          (closeEvent)=\"close('Close Import Products Dialog')\"\n        ></cx-import-entries-summary>\n      </ng-template>\n    </ng-container>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.LaunchDialogService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LWVudHJpZXMtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9jYXJ0L2ltcG9ydC1leHBvcnQvY29tcG9uZW50cy9pbXBvcnQtdG8tY2FydC9pbXBvcnQtZW50cmllcy1kaWFsb2cvaW1wb3J0LWVudHJpZXMtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9jYXJ0L2ltcG9ydC1leHBvcnQvY29tcG9uZW50cy9pbXBvcnQtdG8tY2FydC9pbXBvcnQtZW50cmllcy1kaWFsb2cvaW1wb3J0LWVudHJpZXMtZGlhbG9nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFFTCxrQkFBa0IsRUFHbEIsbUJBQW1CLEdBRXBCLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUVMLFNBQVMsR0FFVixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7QUFPakQsTUFBTSxPQUFPLDRCQUE0QjtJQXVCdkMsWUFBc0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUF0QjlELGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsZ0JBQVcsR0FBZ0I7WUFDekIsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsSUFBSTtZQUNYLFNBQVMsRUFBRSxRQUFRO1lBQ25CLGFBQWEsRUFBRSxJQUFJO1NBQ3BCLENBQUM7UUFFRixjQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGFB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YUFBYSxFQUFFLE1BQU0sQ0FBQzthQUM5RCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O3lIQXhGVSw0QkFBNEI7NkdBQTVCLDRCQUE0QixnRUM1QnpDLHN5REFxREE7MkZEekJhLDRCQUE0QjtrQkFMeEMsU0FBUzsrQkFDRSwwQkFBMEIsbUJBRW5CLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBZGRPcmRlckVudHJpZXNDb250ZXh0LFxuICBPcmRlckVudHJpZXNTb3VyY2UsXG4gIFByb2R1Y3REYXRhLFxuICBQcm9kdWN0SW1wb3J0SW5mbyxcbiAgUHJvZHVjdEltcG9ydFN0YXR1cyxcbiAgUHJvZHVjdEltcG9ydFN1bW1hcnksXG59IGZyb20gJ0BzcGFydGFjdXMvY2FydC9iYXNlL3Jvb3QnO1xuaW1wb3J0IHtcbiAgRm9jdXNDb25maWcsXG4gIElDT05fVFlQRSxcbiAgTGF1bmNoRGlhbG9nU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9zdG9yZWZyb250JztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmluYWxpemUsIHBsdWNrIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1pbXBvcnQtZW50cmllcy1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW1wb3J0LWVudHJpZXMtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEltcG9ydEVudHJpZXNEaWFsb2dDb21wb25lbnQge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG4gIGZvY3VzQ29uZmlnOiBGb2N1c0NvbmZpZyA9IHtcbiAgICB0cmFwOiB0cnVlLFxuICAgIGJsb2NrOiB0cnVlLFxuICAgIGF1dG9mb2N1czogJ2J1dHRvbicsXG4gICAgZm9jdXNPbkVzY2FwZTogdHJ1ZSxcbiAgfTtcblxuICBmb3JtU3RhdGU6IGJvb2xlYW4gPSB0cnVlO1xuICBzdW1tYXJ5JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UHJvZHVjdEltcG9ydFN1bW1hcnk+KHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBjYXJ0TmFtZTogJycsXG4gICAgY291bnQ6IDAsXG4gICAgdG90YWw6IDAsXG4gICAgc3VjY2Vzc2VzQ291bnQ6IDAsXG4gICAgd2FybmluZ01lc3NhZ2VzOiBbXSxcbiAgICBlcnJvck1lc3NhZ2VzOiBbXSxcbiAgfSk7XG5cbiAgY29udGV4dCQ6IE9ic2VydmFibGU8QWRkT3JkZXJFbnRyaWVzQ29udGV4dD4gPVxuICAgIHRoaXMubGF1bmNoRGlhbG9nU2VydmljZS5kYXRhJC5waXBlKHBsdWNrKCdvcmRlckVudHJpZXNDb250ZXh0JykpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBsYXVuY2hEaWFsb2dTZXJ2aWNlOiBMYXVuY2hEaWFsb2dTZXJ2aWNlKSB7fVxuXG4gIGlzTmV3Q2FydEZvcm0oY29udGV4dDogQWRkT3JkZXJFbnRyaWVzQ29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0LnR5cGUgPT09IE9yZGVyRW50cmllc1NvdXJjZS5ORVdfU0FWRURfQ0FSVDtcbiAgfVxuXG4gIGNsb3NlKHJlYXNvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5sYXVuY2hEaWFsb2dTZXJ2aWNlLmNsb3NlRGlhbG9nKHJlYXNvbik7XG4gIH1cblxuICBpbXBvcnRQcm9kdWN0cyhcbiAgICBjb250ZXh0OiBBZGRPcmRlckVudHJpZXNDb250ZXh0LFxuICAgIHtcbiAgICAgIHByb2R1Y3RzLFxuICAgICAgc2F2ZWRDYXJ0SW5mbyxcbiAgICB9OiB7XG4gICAgICBwcm9kdWN0czogUHJvZHVjdERhdGFbXTtcbiAgICAgIHNhdmVkQ2FydEluZm8/OiB7XG4gICAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgIH07XG4gICAgfVxuICApOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1TdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuc3VtbWFyeSQubmV4dCh7XG4gICAgICAuLi50aGlzLnN1bW1hcnkkLnZhbHVlLFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIHRvdGFsOiBwcm9kdWN0cy5sZW5ndGgsXG4gICAgICBjYXJ0TmFtZTogc2F2ZWRDYXJ0SW5mbz8ubmFtZSxcbiAgICB9KTtcbiAgICBjb250ZXh0XG4gICAgICAuYWRkRW50cmllcyhwcm9kdWN0cywgc2F2ZWRDYXJ0SW5mbylcbiAgICAgIC5waXBlKFxuICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdW1tYXJ5JC5uZXh0KHtcbiAgICAgICAgICAgIC4uLnRoaXMuc3VtbWFyeSQudmFsdWUsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGFjdGlvbjogUHJvZHVjdEltcG9ydEluZm8pID0+IHtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZVN1bW1hcnkoYWN0aW9uKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHBvcHVsYXRlU3VtbWFyeShhY3Rpb246IFByb2R1Y3RJbXBvcnRJbmZvKTogdm9pZCB7XG4gICAgaWYgKGFjdGlvbi5zdGF0dXNDb2RlID09PSBQcm9kdWN0SW1wb3J0U3RhdHVzLlNVQ0NFU1MpIHtcbiAgICAgIHRoaXMuc3VtbWFyeSQubmV4dCh7XG4gICAgICAgIC4uLnRoaXMuc3VtbWFyeSQudmFsdWUsXG4gICAgICAgIGNvdW50OiB0aGlzLnN1bW1hcnkkLnZhbHVlLmNvdW50ICsgMSxcbiAgICAgICAgc3VjY2Vzc2VzQ291bnQ6IHRoaXMuc3VtbWFyeSQudmFsdWUuc3VjY2Vzc2VzQ291bnQgKyAxLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24uc3RhdHVzQ29kZSA9PT0gUHJvZHVjdEltcG9ydFN0YXR1cy5MT1dfU1RPQ0spIHtcbiAgICAgIHRoaXMuc3VtbWFyeSQubmV4dCh7XG4gICAgICAgIC4uLnRoaXMuc3VtbWFyeSQudmFsdWUsXG4gICAgICAgIGNvdW50OiB0aGlzLnN1bW1hcnkkLnZhbHVlLmNvdW50ICsgMSxcbiAgICAgICAgd2FybmluZ01lc3NhZ2VzOiBbLi4udGhpcy5zdW1tYXJ5JC52YWx1ZS53YXJuaW5nTWVzc2FnZXMsIGFjdGlvbl0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdW1tYXJ5JC5uZXh0KHtcbiAgICAgICAgLi4udGhpcy5zdW1tYXJ5JC52YWx1ZSxcbiAgICAgICAgY291bnQ6IHRoaXMuc3VtbWFyeSQudmFsdWUuY291bnQgKyAxLFxuICAgICAgICBlcnJvck1lc3NhZ2VzOiBbLi4udGhpcy5zdW1tYXJ5JC52YWx1ZS5lcnJvck1lc3NhZ2VzLCBhY3Rpb25dLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2XG4gIFtjeEZvY3VzXT1cImZvY3VzQ29uZmlnXCJcbiAgKGVzYyk9XCJjbG9zZSgnRXNjYXBlIGNsaWNrZWQnKVwiXG4gIGNsYXNzPVwiY3gtaW1wb3J0LWVudHJpZXMtZGlhbG9nXCJcbj5cbiAgPGRpdiBjbGFzcz1cImN4LWltcG9ydC1lbnRyaWVzLWNvbnRhaW5lclwiPlxuICAgIDwhLS0gTW9kYWwgSGVhZGVyIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXIgY3gtaW1wb3J0LWVudHJpZXMtaGVhZGVyXCI+XG4gICAgICA8bmctY29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3gtaW1wb3J0LWVudHJpZXMtdGl0bGUgbW9kYWwtdGl0bGVcIj5cbiAgICAgICAgICB7eyAnaW1wb3J0RW50cmllc0RpYWxvZy5pbXBvcnRQcm9kdWN0cycgfCBjeFRyYW5zbGF0ZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIChjbGljayk9XCJjbG9zZSgnQ2xvc2UgSW1wb3J0IFByb2R1Y3RzIERpYWxvZycpXCJcbiAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInaW1wb3J0RW50cmllc0RpYWxvZy5jbG9zZScgfCBjeFRyYW5zbGF0ZVwiXG4gICAgICAgIGNsYXNzPVwiY3gtaW1wb3J0LWVudHJpZXMtY2xvc2UgY2xvc2VcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cIihzdW1tYXJ5JCB8IGFzeW5jKT8ubG9hZGluZ1wiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgIDxjeC1pY29uIFt0eXBlXT1cImljb25UeXBlcy5DTE9TRVwiPjwvY3gtaWNvbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIE1vZGFsIEJvZHkgLS0+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRleHQkIHwgYXN5bmMgYXMgY29udGV4dFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1TdGF0ZTsgZWxzZSBpbXBvcnRTdW1tYXJ5XCI+XG4gICAgICAgIDxjeC1pbXBvcnQtdG8tbmV3LXNhdmVkLWNhcnQtZm9ybVxuICAgICAgICAgICpuZ0lmPVwiaXNOZXdDYXJ0Rm9ybShjb250ZXh0KTsgZWxzZSByZWR1Y2VkRm9ybVwiXG4gICAgICAgICAgW3R5cGVdPVwiY29udGV4dC50eXBlXCJcbiAgICAgICAgICAoc3VibWl0RXZlbnQpPVwiaW1wb3J0UHJvZHVjdHMoY29udGV4dCwgJGV2ZW50KVwiXG4gICAgICAgID48L2N4LWltcG9ydC10by1uZXctc2F2ZWQtY2FydC1mb3JtPlxuICAgICAgICA8bmctdGVtcGxhdGUgI3JlZHVjZWRGb3JtPlxuICAgICAgICAgIDxjeC1pbXBvcnQtZW50cmllcy1mb3JtXG4gICAgICAgICAgICBbdHlwZV09XCJjb250ZXh0LnR5cGVcIlxuICAgICAgICAgICAgKHN1Ym1pdEV2ZW50KT1cImltcG9ydFByb2R1Y3RzKGNvbnRleHQsICRldmVudClcIlxuICAgICAgICAgID48L2N4LWltcG9ydC1lbnRyaWVzLWZvcm0+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPG5nLXRlbXBsYXRlICNpbXBvcnRTdW1tYXJ5PlxuICAgICAgICA8Y3gtaW1wb3J0LWVudHJpZXMtc3VtbWFyeVxuICAgICAgICAgIFtzdW1tYXJ5XT1cInN1bW1hcnkkIHwgYXN5bmNcIlxuICAgICAgICAgIFt0eXBlXT1cImNvbnRleHQudHlwZVwiXG4gICAgICAgICAgKGNsb3NlRXZlbnQpPVwiY2xvc2UoJ0Nsb3NlIEltcG9ydCBQcm9kdWN0cyBEaWFsb2cnKVwiXG4gICAgICAgID48L2N4LWltcG9ydC1lbnRyaWVzLXN1bW1hcnk+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19