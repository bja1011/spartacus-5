/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CurrentItemService } from '../../shared/current-item.service';
import { ItemService } from '../../shared/item.service';
import { createCodeForEntityName } from '../../shared/utility/entity-code';
import { CostCenterItemService } from '../services/cost-center-item.service';
import { CurrentCostCenterService } from '../services/current-cost-center.service';
import * as i0 from "@angular/core";
import * as i1 from "../../shared/item.service";
import * as i2 from "@spartacus/organization/administration/core";
import * as i3 from "@spartacus/core";
import * as i4 from "@angular/common";
import * as i5 from "../../shared/form/form.component";
import * as i6 from "@ng-select/ng-select";
import * as i7 from "@angular/forms";
import * as i8 from "@spartacus/storefront";
export class CostCenterFormComponent {
    constructor(itemService, unitService, currencyService) {
        this.itemService = itemService;
        this.unitService = unitService;
        this.currencyService = currencyService;
        this.form = this.itemService.getForm();
        this.units$ = this.unitService
            .getActiveUnitList()
            .pipe(tap((units) => {
            if (units && units.length === 1) {
                this.form?.get('unit.uid')?.setValue(units[0]?.id);
            }
        }));
        this.currencies$ = this.currencyService.getAll().pipe(tap((currency) => {
            if (currency.length === 1) {
                this.form?.get('currency.isocode')?.setValue(currency[0]?.isocode);
            }
        }));
    }
    /**
     * Initialize the business unit for the cost center.
     *
     * If there's a unit provided, we disable the form control.
     */
    set unitKey(value) {
        if (value) {
            this.form?.get('unit.uid')?.setValue(value);
            this.form?.get('unit')?.disable();
        }
    }
    createCodeWithName(name, code) {
        createCodeForEntityName(name, code);
    }
}
CostCenterFormComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: CostCenterFormComponent, deps: [{ token: i1.ItemService }, { token: i2.OrgUnitService }, { token: i3.CurrencyService }], target: i0.ɵɵFactoryTarget.Component });
CostCenterFormComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: CostCenterFormComponent, selector: "cx-org-cost-center-form", inputs: { unitKey: "unitKey" }, host: { classAttribute: "content-wrapper" }, providers: [
        {
            provide: ItemService,
            useExisting: CostCenterItemService,
        },
        {
            provide: CurrentItemService,
            useExisting: CurrentCostCenterService,
        },
    ], ngImport: i0, template: "<cx-org-form i18nRoot=\"orgCostCenter\">\n  <ng-container *ngIf=\"form\" [formGroup]=\"form\" main>\n    <label>\n      <span class=\"label-content required\">{{\n        'orgCostCenter.name' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        required\n        placeholder=\"{{ 'orgCostCenter.name' | cxTranslate }}\"\n        formControlName=\"name\"\n        (blur)=\"createCodeWithName(form.get('name'), form.get('code'))\"\n      />\n      <cx-form-errors [control]=\"form.get('name')\"></cx-form-errors>\n    </label>\n\n    <label>\n      <span class=\"label-content required\">{{\n        'orgCostCenter.code' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        type=\"text\"\n        required\n        placeholder=\"{{ 'orgCostCenter.code' | cxTranslate }}\"\n        formControlName=\"code\"\n      />\n      <cx-form-errors [control]=\"form.get('code')\"></cx-form-errors>\n    </label>\n\n    <label formGroupName=\"currency\">\n      <span class=\"label-content required\">{{\n        'orgCostCenter.currency' | cxTranslate\n      }}</span>\n      <ng-select\n        [inputAttrs]=\"{ required: 'true' }\"\n        formControlName=\"isocode\"\n        [searchable]=\"false\"\n        [clearable]=\"false\"\n        [items]=\"currencies$ | async\"\n        bindLabel=\"name\"\n        bindValue=\"isocode\"\n        [class.invalid]=\"form.get('currency.isocode')?.invalid ?? false\"\n        appendTo=\"cx-org-list\"\n        [placeholder]=\"'orgCostCenter.currency' | cxTranslate\"\n      >\n      </ng-select>\n      <cx-form-errors [control]=\"form.get('currency.isocode')\"></cx-form-errors>\n    </label>\n\n    <label [formGroup]=\"$any(form.get('unit'))\">\n      <span class=\"label-content required\">{{\n        'orgCostCenter.unit' | cxTranslate\n      }}</span>\n      <ng-select\n        [inputAttrs]=\"{ required: 'true' }\"\n        formControlName=\"uid\"\n        [searchable]=\"true\"\n        [clearable]=\"false\"\n        [items]=\"(units$ | async) ?? null\"\n        bindLabel=\"name\"\n        bindValue=\"id\"\n        [readonly]=\"form.get('unit.uid')?.disabled ?? false\"\n        appendTo=\"cx-org-list\"\n        [placeholder]=\"'orgCostCenter.unit' | cxTranslate\"\n      >\n      </ng-select>\n      <cx-form-errors [control]=\"form.get('unit.uid')\"></cx-form-errors>\n    </label>\n  </ng-container>\n</cx-org-form>\n", dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i5.FormComponent, selector: "cx-org-form", inputs: ["i18nRoot", "animateBack", "subtitle"] }, { kind: "component", type: i6.NgSelectComponent, selector: "ng-select", inputs: ["bindLabel", "bindValue", "markFirst", "placeholder", "notFoundText", "typeToSearchText", "addTagText", "loadingText", "clearAllText", "appearance", "dropdownPosition", "appendTo", "loading", "closeOnSelect", "hideSelected", "selectOnTab", "openOnEnter", "maxSelectedItems", "groupBy", "groupValue", "bufferAmount", "virtualScroll", "selectableGroup", "selectableGroupAsModel", "searchFn", "trackByFn", "clearOnBackspace", "labelForId", "inputAttrs", "tabIndex", "readonly", "searchWhileComposing", "minTermLength", "editableSearchTerm", "keyDownFn", "typeahead", "multiple", "addTag", "searchable", "clearable", "isOpen", "items", "compareWith", "clearSearchOnAdd"], outputs: ["blur", "focus", "change", "open", "close", "search", "clear", "add", "remove", "scroll", "scrollToEnd"] }, { kind: "directive", type: i7.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i7.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i7.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i7.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i7.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i7.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { kind: "component", type: i8.FormErrorsComponent, selector: "cx-form-errors", inputs: ["prefix", "translationParams", "control"] }, { kind: "pipe", type: i4.AsyncPipe, name: "async" }, { kind: "pipe", type: i3.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: CostCenterFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-org-cost-center-form', changeDetection: ChangeDetectionStrategy.OnPush, host: { class: 'content-wrapper' }, providers: [
                        {
                            provide: ItemService,
                            useExisting: CostCenterItemService,
                        },
                        {
                            provide: CurrentItemService,
                            useExisting: CurrentCostCenterService,
                        },
                    ], template: "<cx-org-form i18nRoot=\"orgCostCenter\">\n  <ng-container *ngIf=\"form\" [formGroup]=\"form\" main>\n    <label>\n      <span class=\"label-content required\">{{\n        'orgCostCenter.name' | cxTranslate\n      }}</span>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        required\n        placeholder=\"{{ 'orgCostCenter.name' | cxTranslate }}\"\n        formControlName=\"name\"\n        (blur)=\"createCodeWithName(form.get('name'), form.get('code'))\"\n      />\n      <cx-form-errors [control]=\"form.get('name')\"></cx-form-errors>\n    </label>\n\n    <label>\n      <span class=\"label-content required\">{{\n        'orgCostCenter.code' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        type=\"text\"\n        required\n        placeholder=\"{{ 'orgCostCenter.code' | cxTranslate }}\"\n        formControlName=\"code\"\n      />\n      <cx-form-errors [control]=\"form.get('code')\"></cx-form-errors>\n    </label>\n\n    <label formGroupName=\"currency\">\n      <span class=\"label-content required\">{{\n        'orgCostCenter.currency' | cxTranslate\n      }}</span>\n      <ng-select\n        [inputAttrs]=\"{ required: 'true' }\"\n        formControlName=\"isocode\"\n        [searchable]=\"false\"\n        [clearable]=\"false\"\n        [items]=\"currencies$ | async\"\n        bindLabel=\"name\"\n        bindValue=\"isocode\"\n        [class.invalid]=\"form.get('currency.isocode')?.invalid ?? false\"\n        appendTo=\"cx-org-list\"\n        [placeholder]=\"'orgCostCenter.currency' | cxTranslate\"\n      >\n      </ng-select>\n      <cx-form-errors [control]=\"form.get('currency.isocode')\"></cx-form-errors>\n    </label>\n\n    <label [formGroup]=\"$any(form.get('unit'))\">\n      <span class=\"label-content required\">{{\n        'orgCostCenter.unit' | cxTranslate\n      }}</span>\n      <ng-select\n        [inputAttrs]=\"{ required: 'true' }\"\n        formControlName=\"uid\"\n        [searchable]=\"true\"\n        [clearable]=\"false\"\n        [items]=\"(units$ | async) ?? null\"\n        bindLabel=\"name\"\n        bindValue=\"id\"\n        [readonly]=\"form.get('unit.uid')?.disabled ?? false\"\n        appendTo=\"cx-org-list\"\n        [placeholder]=\"'orgCostCenter.unit' | cxTranslate\"\n      >\n      </ng-select>\n      <cx-form-errors [control]=\"form.get('unit.uid')\"></cx-form-errors>\n    </label>\n  </ng-container>\n</cx-org-form>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ItemService }, { type: i2.OrgUnitService }, { type: i3.CurrencyService }]; }, propDecorators: { unitKey: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zdC1jZW50ZXItZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvb3JnYW5pemF0aW9uL2FkbWluaXN0cmF0aW9uL2NvbXBvbmVudHMvY29zdC1jZW50ZXIvZm9ybS9jb3N0LWNlbnRlci1mb3JtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmdhbml6YXRpb24vYWRtaW5pc3RyYXRpb24vY29tcG9uZW50cy9jb3N0LWNlbnRlci9mb3JtL2Nvc3QtY2VudGVyLWZvcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7Ozs7QUFrQm5GLE1BQU0sT0FBTyx1QkFBdUI7SUFnQ2xDLFlBQ1ksV0FBb0MsRUFDcEMsV0FBMkIsRUFDM0IsZUFBZ0M7UUFGaEMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3BDLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUMzQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFsQzVDLFNBQUksR0FBNEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQWEzRCxXQUFNLEdBQTBDLElBQUksQ0FBQyxXQUFXO2FBQzdELGlCQUFpQixFQUFFO2FBQ25CLElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNaLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUMvQixJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ3BEO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVKLGdCQUFXLEdBQTJCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUN0RSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNmLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUNwRTtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFNQyxDQUFDO0lBbENKOzs7O09BSUc7SUFDSCxJQUFhLE9BQU8sQ0FBQyxLQUFvQjtRQUN2QyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQztTQUNuQztJQUNILENBQUM7SUEwQkQsa0JBQWtCLENBQ2hCLElBQTRCLEVBQzVCLElBQTRCO1FBRTVCLHVCQUF1QixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOztvSEEzQ1UsdUJBQXVCO3dHQUF2Qix1QkFBdUIsK0hBWHZCO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsV0FBVztZQUNwQixXQUFXLEVBQUUscUJBQXFCO1NBQ25DO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsa0JBQWtCO1lBQzNCLFdBQVcsRUFBRSx3QkFBd0I7U0FDdEM7S0FDRiwwQkNuQ0gsczVFQXdFQTsyRkRuQ2EsdUJBQXVCO2tCQWhCbkMsU0FBUzsrQkFDRSx5QkFBeUIsbUJBRWxCLHVCQUF1QixDQUFDLE1BQU0sUUFDekMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsYUFDdkI7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLFdBQVc7NEJBQ3BCLFdBQVcsRUFBRSxxQkFBcUI7eUJBQ25DO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxrQkFBa0I7NEJBQzNCLFdBQVcsRUFBRSx3QkFBd0I7eUJBQ3RDO3FCQUNGOzZKQVNZLE9BQU87c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBVbnR5cGVkRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29zdENlbnRlciwgQ3VycmVuY3ksIEN1cnJlbmN5U2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQge1xuICBCMkJVbml0Tm9kZSxcbiAgT3JnVW5pdFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvb3JnYW5pemF0aW9uL2FkbWluaXN0cmF0aW9uL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ3VycmVudEl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2N1cnJlbnQtaXRlbS5zZXJ2aWNlJztcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2l0ZW0uc2VydmljZSc7XG5pbXBvcnQgeyBjcmVhdGVDb2RlRm9yRW50aXR5TmFtZSB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlsaXR5L2VudGl0eS1jb2RlJztcbmltcG9ydCB7IENvc3RDZW50ZXJJdGVtU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Nvc3QtY2VudGVyLWl0ZW0uc2VydmljZSc7XG5pbXBvcnQgeyBDdXJyZW50Q29zdENlbnRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jdXJyZW50LWNvc3QtY2VudGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmctY29zdC1jZW50ZXItZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb3N0LWNlbnRlci1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHsgY2xhc3M6ICdjb250ZW50LXdyYXBwZXInIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEl0ZW1TZXJ2aWNlLFxuICAgICAgdXNlRXhpc3Rpbmc6IENvc3RDZW50ZXJJdGVtU2VydmljZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEN1cnJlbnRJdGVtU2VydmljZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBDdXJyZW50Q29zdENlbnRlclNlcnZpY2UsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29zdENlbnRlckZvcm1Db21wb25lbnQge1xuICBmb3JtOiBVbnR5cGVkRm9ybUdyb3VwIHwgbnVsbCA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0Rm9ybSgpO1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYnVzaW5lc3MgdW5pdCBmb3IgdGhlIGNvc3QgY2VudGVyLlxuICAgKlxuICAgKiBJZiB0aGVyZSdzIGEgdW5pdCBwcm92aWRlZCwgd2UgZGlzYWJsZSB0aGUgZm9ybSBjb250cm9sLlxuICAgKi9cbiAgQElucHV0KCkgc2V0IHVuaXRLZXkodmFsdWU6IHN0cmluZyB8IG51bGwpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZm9ybT8uZ2V0KCd1bml0LnVpZCcpPy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICB0aGlzLmZvcm0/LmdldCgndW5pdCcpPy5kaXNhYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgdW5pdHMkOiBPYnNlcnZhYmxlPEIyQlVuaXROb2RlW10gfCB1bmRlZmluZWQ+ID0gdGhpcy51bml0U2VydmljZVxuICAgIC5nZXRBY3RpdmVVbml0TGlzdCgpXG4gICAgLnBpcGUoXG4gICAgICB0YXAoKHVuaXRzKSA9PiB7XG4gICAgICAgIGlmICh1bml0cyAmJiB1bml0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmZvcm0/LmdldCgndW5pdC51aWQnKT8uc2V0VmFsdWUodW5pdHNbMF0/LmlkKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gIGN1cnJlbmNpZXMkOiBPYnNlcnZhYmxlPEN1cnJlbmN5W10+ID0gdGhpcy5jdXJyZW5jeVNlcnZpY2UuZ2V0QWxsKCkucGlwZShcbiAgICB0YXAoKGN1cnJlbmN5KSA9PiB7XG4gICAgICBpZiAoY3VycmVuY3kubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHRoaXMuZm9ybT8uZ2V0KCdjdXJyZW5jeS5pc29jb2RlJyk/LnNldFZhbHVlKGN1cnJlbmN5WzBdPy5pc29jb2RlKTtcbiAgICAgIH1cbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBpdGVtU2VydmljZTogSXRlbVNlcnZpY2U8Q29zdENlbnRlcj4sXG4gICAgcHJvdGVjdGVkIHVuaXRTZXJ2aWNlOiBPcmdVbml0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY3VycmVuY3lTZXJ2aWNlOiBDdXJyZW5jeVNlcnZpY2VcbiAgKSB7fVxuXG4gIGNyZWF0ZUNvZGVXaXRoTmFtZShcbiAgICBuYW1lOiBBYnN0cmFjdENvbnRyb2wgfCBudWxsLFxuICAgIGNvZGU6IEFic3RyYWN0Q29udHJvbCB8IG51bGxcbiAgKTogdm9pZCB7XG4gICAgY3JlYXRlQ29kZUZvckVudGl0eU5hbWUobmFtZSwgY29kZSk7XG4gIH1cbn1cbiIsIjxjeC1vcmctZm9ybSBpMThuUm9vdD1cIm9yZ0Nvc3RDZW50ZXJcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1cIiBtYWluPlxuICAgIDxsYWJlbD5cbiAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwtY29udGVudCByZXF1aXJlZFwiPnt7XG4gICAgICAgICdvcmdDb3N0Q2VudGVyLm5hbWUnIHwgY3hUcmFuc2xhdGVcbiAgICAgIH19PC9zcGFuPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICByZXF1aXJlZFxuICAgICAgICBwbGFjZWhvbGRlcj1cInt7ICdvcmdDb3N0Q2VudGVyLm5hbWUnIHwgY3hUcmFuc2xhdGUgfX1cIlxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCJcbiAgICAgICAgKGJsdXIpPVwiY3JlYXRlQ29kZVdpdGhOYW1lKGZvcm0uZ2V0KCduYW1lJyksIGZvcm0uZ2V0KCdjb2RlJykpXCJcbiAgICAgIC8+XG4gICAgICA8Y3gtZm9ybS1lcnJvcnMgW2NvbnRyb2xdPVwiZm9ybS5nZXQoJ25hbWUnKVwiPjwvY3gtZm9ybS1lcnJvcnM+XG4gICAgPC9sYWJlbD5cblxuICAgIDxsYWJlbD5cbiAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwtY29udGVudCByZXF1aXJlZFwiPnt7XG4gICAgICAgICdvcmdDb3N0Q2VudGVyLmNvZGUnIHwgY3hUcmFuc2xhdGVcbiAgICAgIH19PC9zcGFuPlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICByZXF1aXJlZFxuICAgICAgICBwbGFjZWhvbGRlcj1cInt7ICdvcmdDb3N0Q2VudGVyLmNvZGUnIHwgY3hUcmFuc2xhdGUgfX1cIlxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJjb2RlXCJcbiAgICAgIC8+XG4gICAgICA8Y3gtZm9ybS1lcnJvcnMgW2NvbnRyb2xdPVwiZm9ybS5nZXQoJ2NvZGUnKVwiPjwvY3gtZm9ybS1lcnJvcnM+XG4gICAgPC9sYWJlbD5cblxuICAgIDxsYWJlbCBmb3JtR3JvdXBOYW1lPVwiY3VycmVuY3lcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwtY29udGVudCByZXF1aXJlZFwiPnt7XG4gICAgICAgICdvcmdDb3N0Q2VudGVyLmN1cnJlbmN5JyB8IGN4VHJhbnNsYXRlXG4gICAgICB9fTwvc3Bhbj5cbiAgICAgIDxuZy1zZWxlY3RcbiAgICAgICAgW2lucHV0QXR0cnNdPVwieyByZXF1aXJlZDogJ3RydWUnIH1cIlxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJpc29jb2RlXCJcbiAgICAgICAgW3NlYXJjaGFibGVdPVwiZmFsc2VcIlxuICAgICAgICBbY2xlYXJhYmxlXT1cImZhbHNlXCJcbiAgICAgICAgW2l0ZW1zXT1cImN1cnJlbmNpZXMkIHwgYXN5bmNcIlxuICAgICAgICBiaW5kTGFiZWw9XCJuYW1lXCJcbiAgICAgICAgYmluZFZhbHVlPVwiaXNvY29kZVwiXG4gICAgICAgIFtjbGFzcy5pbnZhbGlkXT1cImZvcm0uZ2V0KCdjdXJyZW5jeS5pc29jb2RlJyk/LmludmFsaWQgPz8gZmFsc2VcIlxuICAgICAgICBhcHBlbmRUbz1cImN4LW9yZy1saXN0XCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidvcmdDb3N0Q2VudGVyLmN1cnJlbmN5JyB8IGN4VHJhbnNsYXRlXCJcbiAgICAgID5cbiAgICAgIDwvbmctc2VsZWN0PlxuICAgICAgPGN4LWZvcm0tZXJyb3JzIFtjb250cm9sXT1cImZvcm0uZ2V0KCdjdXJyZW5jeS5pc29jb2RlJylcIj48L2N4LWZvcm0tZXJyb3JzPlxuICAgIDwvbGFiZWw+XG5cbiAgICA8bGFiZWwgW2Zvcm1Hcm91cF09XCIkYW55KGZvcm0uZ2V0KCd1bml0JykpXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImxhYmVsLWNvbnRlbnQgcmVxdWlyZWRcIj57e1xuICAgICAgICAnb3JnQ29zdENlbnRlci51bml0JyB8IGN4VHJhbnNsYXRlXG4gICAgICB9fTwvc3Bhbj5cbiAgICAgIDxuZy1zZWxlY3RcbiAgICAgICAgW2lucHV0QXR0cnNdPVwieyByZXF1aXJlZDogJ3RydWUnIH1cIlxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ1aWRcIlxuICAgICAgICBbc2VhcmNoYWJsZV09XCJ0cnVlXCJcbiAgICAgICAgW2NsZWFyYWJsZV09XCJmYWxzZVwiXG4gICAgICAgIFtpdGVtc109XCIodW5pdHMkIHwgYXN5bmMpID8/IG51bGxcIlxuICAgICAgICBiaW5kTGFiZWw9XCJuYW1lXCJcbiAgICAgICAgYmluZFZhbHVlPVwiaWRcIlxuICAgICAgICBbcmVhZG9ubHldPVwiZm9ybS5nZXQoJ3VuaXQudWlkJyk/LmRpc2FibGVkID8/IGZhbHNlXCJcbiAgICAgICAgYXBwZW5kVG89XCJjeC1vcmctbGlzdFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCInb3JnQ29zdENlbnRlci51bml0JyB8IGN4VHJhbnNsYXRlXCJcbiAgICAgID5cbiAgICAgIDwvbmctc2VsZWN0PlxuICAgICAgPGN4LWZvcm0tZXJyb3JzIFtjb250cm9sXT1cImZvcm0uZ2V0KCd1bml0LnVpZCcpXCI+PC9jeC1mb3JtLWVycm9ycz5cbiAgICA8L2xhYmVsPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvY3gtb3JnLWZvcm0+XG4iXX0=