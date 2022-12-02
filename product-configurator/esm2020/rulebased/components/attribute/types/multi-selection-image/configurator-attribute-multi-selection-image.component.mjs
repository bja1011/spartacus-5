/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { ConfiguratorAttributeBaseComponent } from '../base/configurator-attribute-base.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../service/configurator-storefront-utils.service";
import * as i2 from "@spartacus/storefront";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "../../../price/configurator-price.component";
import * as i6 from "@spartacus/core";
export class ConfiguratorAttributeMultiSelectionImageComponent extends ConfiguratorAttributeBaseComponent {
    constructor(configUtilsService) {
        super();
        this.configUtilsService = configUtilsService;
        this.selectionChange = new EventEmitter();
        this.attributeCheckBoxForms = new Array();
    }
    ngOnInit() {
        const values = this.attribute.values;
        if (values) {
            for (const value of values) {
                let attributeCheckBoxForm;
                if (value.selected) {
                    attributeCheckBoxForm = new UntypedFormControl(true);
                }
                else {
                    attributeCheckBoxForm = new UntypedFormControl(false);
                }
                this.attributeCheckBoxForms.push(attributeCheckBoxForm);
            }
        }
    }
    /**
     * Fired when a value has been selected
     * @param index Index of selected value
     */
    onSelect(index) {
        this.attributeCheckBoxForms[index].setValue(!this.attributeCheckBoxForms[index].value);
        const selectedValues = this.configUtilsService.assembleValuesForMultiSelectAttributes(this.attributeCheckBoxForms, this.attribute);
        const event = {
            ownerKey: this.ownerKey,
            changedAttribute: {
                ...this.attribute,
                values: selectedValues,
            },
        };
        this.selectionChange.emit(event);
    }
    extractValuePriceFormulaParameters(value) {
        return {
            quantity: value.quantity,
            price: value.valuePrice,
            priceTotal: value.valuePriceTotal,
            isLightedUp: value.selected,
        };
    }
}
ConfiguratorAttributeMultiSelectionImageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ConfiguratorAttributeMultiSelectionImageComponent, deps: [{ token: i1.ConfiguratorStorefrontUtilsService }], target: i0.ɵɵFactoryTarget.Component });
ConfiguratorAttributeMultiSelectionImageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: ConfiguratorAttributeMultiSelectionImageComponent, selector: "cx-configurator-attribute-multi-selection-image", inputs: { attribute: "attribute", ownerKey: "ownerKey" }, outputs: { selectionChange: "selectionChange" }, usesInheritance: true, ngImport: i0, template: "<div id=\"{{ createAttributeIdForConfigurator(attribute) }}\" class=\"cx-row\">\n  <div\n    *ngFor=\"let value of attribute.values; let i = index\"\n    id=\"{{ createAttributeValueIdForConfigurator(attribute, value.valueCode) }}\"\n    class=\"cx-configurator-select\"\n  >\n    <input\n      id=\"{{\n        createAttributeValueIdForConfigurator(attribute, value.valueCode) +\n          '-input'\n      }}\"\n      type=\"checkbox\"\n      class=\"form-input\"\n      [value]=\"value.valueCode\"\n      [formControl]=\"attributeCheckBoxForms[i]\"\n      name=\"{{ createAttributeIdForConfigurator(attribute) }}\"\n      (click)=\"onSelect(i)\"\n      [attr.aria-label]=\"\n        value.valuePrice && value.valuePrice?.value !== 0\n          ? ('configurator.a11y.valueOfAttributeFullWithPrice'\n            | cxTranslate\n              : {\n                  value: value.valueDisplay,\n                  attribute: attribute.label,\n                  price: value.valuePrice.formattedValue\n                })\n          : ('configurator.a11y.valueOfAttributeFull'\n            | cxTranslate\n              : { value: value.valueDisplay, attribute: attribute.label })\n      \"\n      [attr.aria-describedby]=\"createAttributeUiKey('label', attribute.name)\"\n      [attr.checked]=\"attributeCheckBoxForms[i].value ? 'checked' : null\"\n      [cxFocus]=\"{ key: attribute.name + '-' + value.name }\"\n    />\n    <div class=\"cx-label-container\">\n      <label\n        id=\"{{ createValueUiKey('label', attribute.name, value.valueCode) }}\"\n        for=\"{{\n          createAttributeValueIdForConfigurator(attribute, value.valueCode) +\n            '-input'\n        }}\"\n        aria-hidden=\"true\"\n        class=\"form-check-label\"\n      >\n        <img\n          *ngIf=\"value.images[0]\"\n          class=\"cx-img\"\n          src=\"{{ value.images[0].url }}\"\n          alt=\"{{ value.images[0].altText }}\"\n        />\n        <div *ngIf=\"!value.images[0]\" class=\"cx-img-dummy\"></div>\n        {{ value.valueDisplay }}\n        <cx-configurator-price\n          [formula]=\"extractValuePriceFormulaParameters(value)\"\n        ></cx-configurator-price>\n      </label>\n    </div>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i2.FocusDirective, selector: "[cxFocus]", inputs: ["cxFocus"] }, { kind: "directive", type: i3.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i5.ConfiguratorPriceComponent, selector: "cx-configurator-price", inputs: ["formula"] }, { kind: "pipe", type: i6.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ConfiguratorAttributeMultiSelectionImageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-configurator-attribute-multi-selection-image', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div id=\"{{ createAttributeIdForConfigurator(attribute) }}\" class=\"cx-row\">\n  <div\n    *ngFor=\"let value of attribute.values; let i = index\"\n    id=\"{{ createAttributeValueIdForConfigurator(attribute, value.valueCode) }}\"\n    class=\"cx-configurator-select\"\n  >\n    <input\n      id=\"{{\n        createAttributeValueIdForConfigurator(attribute, value.valueCode) +\n          '-input'\n      }}\"\n      type=\"checkbox\"\n      class=\"form-input\"\n      [value]=\"value.valueCode\"\n      [formControl]=\"attributeCheckBoxForms[i]\"\n      name=\"{{ createAttributeIdForConfigurator(attribute) }}\"\n      (click)=\"onSelect(i)\"\n      [attr.aria-label]=\"\n        value.valuePrice && value.valuePrice?.value !== 0\n          ? ('configurator.a11y.valueOfAttributeFullWithPrice'\n            | cxTranslate\n              : {\n                  value: value.valueDisplay,\n                  attribute: attribute.label,\n                  price: value.valuePrice.formattedValue\n                })\n          : ('configurator.a11y.valueOfAttributeFull'\n            | cxTranslate\n              : { value: value.valueDisplay, attribute: attribute.label })\n      \"\n      [attr.aria-describedby]=\"createAttributeUiKey('label', attribute.name)\"\n      [attr.checked]=\"attributeCheckBoxForms[i].value ? 'checked' : null\"\n      [cxFocus]=\"{ key: attribute.name + '-' + value.name }\"\n    />\n    <div class=\"cx-label-container\">\n      <label\n        id=\"{{ createValueUiKey('label', attribute.name, value.valueCode) }}\"\n        for=\"{{\n          createAttributeValueIdForConfigurator(attribute, value.valueCode) +\n            '-input'\n        }}\"\n        aria-hidden=\"true\"\n        class=\"form-check-label\"\n      >\n        <img\n          *ngIf=\"value.images[0]\"\n          class=\"cx-img\"\n          src=\"{{ value.images[0].url }}\"\n          alt=\"{{ value.images[0].altText }}\"\n        />\n        <div *ngIf=\"!value.images[0]\" class=\"cx-img-dummy\"></div>\n        {{ value.valueDisplay }}\n        <cx-configurator-price\n          [formula]=\"extractValuePriceFormulaParameters(value)\"\n        ></cx-configurator-price>\n      </label>\n    </div>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ConfiguratorStorefrontUtilsService }]; }, propDecorators: { attribute: [{
                type: Input
            }], ownerKey: [{
                type: Input
            }], selectionChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1tdWx0aS1zZWxlY3Rpb24taW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL3Byb2R1Y3QtY29uZmlndXJhdG9yL3J1bGViYXNlZC9jb21wb25lbnRzL2F0dHJpYnV0ZS90eXBlcy9tdWx0aS1zZWxlY3Rpb24taW1hZ2UvY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1tdWx0aS1zZWxlY3Rpb24taW1hZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL3Byb2R1Y3QtY29uZmlndXJhdG9yL3J1bGViYXNlZC9jb21wb25lbnRzL2F0dHJpYnV0ZS90eXBlcy9tdWx0aS1zZWxlY3Rpb24taW1hZ2UvY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1tdWx0aS1zZWxlY3Rpb24taW1hZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3BELE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7Ozs7OztBQU1uRyxNQUFNLE9BQU8saURBQ1gsU0FBUSxrQ0FBa0M7SUFRMUMsWUFDWSxrQkFBc0Q7UUFFaEUsS0FBSyxFQUFFLENBQUM7UUFGRSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9DO1FBSHhELG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUM7UUFRdEUsMkJBQXNCLEdBQUcsSUFBSSxLQUFLLEVBQXNCLENBQUM7SUFGekQsQ0FBQztJQUlELFFBQVE7UUFDTixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLE1BQU0sRUFBRTtZQUNWLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFO2dCQUMxQixJQUFJLHFCQUF5QyxDQUFDO2dCQUM5QyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0JBQ2xCLHFCQUFxQixHQUFHLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3REO3FCQUFNO29CQUNMLHFCQUFxQixHQUFHLElBQUksa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3ZEO2dCQUNELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUN6RDtTQUNGO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILFFBQVEsQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQ3pDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FDMUMsQ0FBQztRQUVGLE1BQU0sY0FBYyxHQUNsQixJQUFJLENBQUMsa0JBQWtCLENBQUMsc0NBQXNDLENBQzVELElBQUksQ0FBQyxzQkFBc0IsRUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FDZixDQUFDO1FBRUosTUFBTSxLQUFLLEdBQTBCO1lBQ25DLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixnQkFBZ0IsRUFBRTtnQkFDaEIsR0FBRyxJQUFJLENBQUMsU0FBUztnQkFDakIsTUFBTSxFQUFFLGNBQWM7YUFDdkI7U0FDRixDQUFDO1FBRUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGtDQUFrQyxDQUNoQyxLQUF5QjtRQUV6QixPQUFPO1lBQ0wsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVTtZQUN2QixVQUFVLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDakMsV0FBVyxFQUFFLEtBQUssQ0FBQyxRQUFRO1NBQzVCLENBQUM7SUFDSixDQUFDOzs4SUFuRVUsaURBQWlEO2tJQUFqRCxpREFBaUQseU5DekI5RCxzckVBMkRBOzJGRGxDYSxpREFBaUQ7a0JBTDdELFNBQVM7K0JBQ0UsaURBQWlELG1CQUUxQyx1QkFBdUIsQ0FBQyxNQUFNO3lIQU10QyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBRUksZUFBZTtzQkFBeEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVudHlwZWRGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbmZpZ3VyYXRvciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbW9kZWwvY29uZmlndXJhdG9yLm1vZGVsJztcbmltcG9ydCB7IENvbmZpZ0Zvcm1VcGRhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uL2Zvcm0vY29uZmlndXJhdG9yLWZvcm0uZXZlbnQnO1xuaW1wb3J0IHsgQ29uZmlndXJhdG9yUHJpY2VDb21wb25lbnRPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vcHJpY2UvY29uZmlndXJhdG9yLXByaWNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maWd1cmF0b3JTdG9yZWZyb250VXRpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZS9jb25maWd1cmF0b3Itc3RvcmVmcm9udC11dGlscy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRvckF0dHJpYnV0ZUJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2NvbmZpZ3VyYXRvci1hdHRyaWJ1dGUtYmFzZS5jb21wb25lbnQnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1tdWx0aS1zZWxlY3Rpb24taW1hZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1tdWx0aS1zZWxlY3Rpb24taW1hZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdG9yQXR0cmlidXRlTXVsdGlTZWxlY3Rpb25JbWFnZUNvbXBvbmVudFxuICBleHRlbmRzIENvbmZpZ3VyYXRvckF0dHJpYnV0ZUJhc2VDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXRcbntcbiAgQElucHV0KCkgYXR0cmlidXRlOiBDb25maWd1cmF0b3IuQXR0cmlidXRlO1xuICBASW5wdXQoKSBvd25lcktleTogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENvbmZpZ0Zvcm1VcGRhdGVFdmVudD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29uZmlnVXRpbHNTZXJ2aWNlOiBDb25maWd1cmF0b3JTdG9yZWZyb250VXRpbHNTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBhdHRyaWJ1dGVDaGVja0JveEZvcm1zID0gbmV3IEFycmF5PFVudHlwZWRGb3JtQ29udHJvbD4oKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmF0dHJpYnV0ZS52YWx1ZXM7XG4gICAgaWYgKHZhbHVlcykge1xuICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZUNoZWNrQm94Rm9ybTogVW50eXBlZEZvcm1Db250cm9sO1xuICAgICAgICBpZiAodmFsdWUuc2VsZWN0ZWQpIHtcbiAgICAgICAgICBhdHRyaWJ1dGVDaGVja0JveEZvcm0gPSBuZXcgVW50eXBlZEZvcm1Db250cm9sKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF0dHJpYnV0ZUNoZWNrQm94Rm9ybSA9IG5ldyBVbnR5cGVkRm9ybUNvbnRyb2woZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hlY2tCb3hGb3Jtcy5wdXNoKGF0dHJpYnV0ZUNoZWNrQm94Rm9ybSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gYSB2YWx1ZSBoYXMgYmVlbiBzZWxlY3RlZFxuICAgKiBAcGFyYW0gaW5kZXggSW5kZXggb2Ygc2VsZWN0ZWQgdmFsdWVcbiAgICovXG4gIG9uU2VsZWN0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmF0dHJpYnV0ZUNoZWNrQm94Rm9ybXNbaW5kZXhdLnNldFZhbHVlKFxuICAgICAgIXRoaXMuYXR0cmlidXRlQ2hlY2tCb3hGb3Jtc1tpbmRleF0udmFsdWVcbiAgICApO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXMgPVxuICAgICAgdGhpcy5jb25maWdVdGlsc1NlcnZpY2UuYXNzZW1ibGVWYWx1ZXNGb3JNdWx0aVNlbGVjdEF0dHJpYnV0ZXMoXG4gICAgICAgIHRoaXMuYXR0cmlidXRlQ2hlY2tCb3hGb3JtcyxcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVcbiAgICAgICk7XG5cbiAgICBjb25zdCBldmVudDogQ29uZmlnRm9ybVVwZGF0ZUV2ZW50ID0ge1xuICAgICAgb3duZXJLZXk6IHRoaXMub3duZXJLZXksXG4gICAgICBjaGFuZ2VkQXR0cmlidXRlOiB7XG4gICAgICAgIC4uLnRoaXMuYXR0cmlidXRlLFxuICAgICAgICB2YWx1ZXM6IHNlbGVjdGVkVmFsdWVzLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cblxuICBleHRyYWN0VmFsdWVQcmljZUZvcm11bGFQYXJhbWV0ZXJzKFxuICAgIHZhbHVlOiBDb25maWd1cmF0b3IuVmFsdWVcbiAgKTogQ29uZmlndXJhdG9yUHJpY2VDb21wb25lbnRPcHRpb25zIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVhbnRpdHk6IHZhbHVlLnF1YW50aXR5LFxuICAgICAgcHJpY2U6IHZhbHVlLnZhbHVlUHJpY2UsXG4gICAgICBwcmljZVRvdGFsOiB2YWx1ZS52YWx1ZVByaWNlVG90YWwsXG4gICAgICBpc0xpZ2h0ZWRVcDogdmFsdWUuc2VsZWN0ZWQsXG4gICAgfTtcbiAgfVxufVxuIiwiPGRpdiBpZD1cInt7IGNyZWF0ZUF0dHJpYnV0ZUlkRm9yQ29uZmlndXJhdG9yKGF0dHJpYnV0ZSkgfX1cIiBjbGFzcz1cImN4LXJvd1wiPlxuICA8ZGl2XG4gICAgKm5nRm9yPVwibGV0IHZhbHVlIG9mIGF0dHJpYnV0ZS52YWx1ZXM7IGxldCBpID0gaW5kZXhcIlxuICAgIGlkPVwie3sgY3JlYXRlQXR0cmlidXRlVmFsdWVJZEZvckNvbmZpZ3VyYXRvcihhdHRyaWJ1dGUsIHZhbHVlLnZhbHVlQ29kZSkgfX1cIlxuICAgIGNsYXNzPVwiY3gtY29uZmlndXJhdG9yLXNlbGVjdFwiXG4gID5cbiAgICA8aW5wdXRcbiAgICAgIGlkPVwie3tcbiAgICAgICAgY3JlYXRlQXR0cmlidXRlVmFsdWVJZEZvckNvbmZpZ3VyYXRvcihhdHRyaWJ1dGUsIHZhbHVlLnZhbHVlQ29kZSkgK1xuICAgICAgICAgICctaW5wdXQnXG4gICAgICB9fVwiXG4gICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgY2xhc3M9XCJmb3JtLWlucHV0XCJcbiAgICAgIFt2YWx1ZV09XCJ2YWx1ZS52YWx1ZUNvZGVcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImF0dHJpYnV0ZUNoZWNrQm94Rm9ybXNbaV1cIlxuICAgICAgbmFtZT1cInt7IGNyZWF0ZUF0dHJpYnV0ZUlkRm9yQ29uZmlndXJhdG9yKGF0dHJpYnV0ZSkgfX1cIlxuICAgICAgKGNsaWNrKT1cIm9uU2VsZWN0KGkpXCJcbiAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiXG4gICAgICAgIHZhbHVlLnZhbHVlUHJpY2UgJiYgdmFsdWUudmFsdWVQcmljZT8udmFsdWUgIT09IDBcbiAgICAgICAgICA/ICgnY29uZmlndXJhdG9yLmExMXkudmFsdWVPZkF0dHJpYnV0ZUZ1bGxXaXRoUHJpY2UnXG4gICAgICAgICAgICB8IGN4VHJhbnNsYXRlXG4gICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLnZhbHVlRGlzcGxheSxcbiAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogYXR0cmlidXRlLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgcHJpY2U6IHZhbHVlLnZhbHVlUHJpY2UuZm9ybWF0dGVkVmFsdWVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgIDogKCdjb25maWd1cmF0b3IuYTExeS52YWx1ZU9mQXR0cmlidXRlRnVsbCdcbiAgICAgICAgICAgIHwgY3hUcmFuc2xhdGVcbiAgICAgICAgICAgICAgOiB7IHZhbHVlOiB2YWx1ZS52YWx1ZURpc3BsYXksIGF0dHJpYnV0ZTogYXR0cmlidXRlLmxhYmVsIH0pXG4gICAgICBcIlxuICAgICAgW2F0dHIuYXJpYS1kZXNjcmliZWRieV09XCJjcmVhdGVBdHRyaWJ1dGVVaUtleSgnbGFiZWwnLCBhdHRyaWJ1dGUubmFtZSlcIlxuICAgICAgW2F0dHIuY2hlY2tlZF09XCJhdHRyaWJ1dGVDaGVja0JveEZvcm1zW2ldLnZhbHVlID8gJ2NoZWNrZWQnIDogbnVsbFwiXG4gICAgICBbY3hGb2N1c109XCJ7IGtleTogYXR0cmlidXRlLm5hbWUgKyAnLScgKyB2YWx1ZS5uYW1lIH1cIlxuICAgIC8+XG4gICAgPGRpdiBjbGFzcz1cImN4LWxhYmVsLWNvbnRhaW5lclwiPlxuICAgICAgPGxhYmVsXG4gICAgICAgIGlkPVwie3sgY3JlYXRlVmFsdWVVaUtleSgnbGFiZWwnLCBhdHRyaWJ1dGUubmFtZSwgdmFsdWUudmFsdWVDb2RlKSB9fVwiXG4gICAgICAgIGZvcj1cInt7XG4gICAgICAgICAgY3JlYXRlQXR0cmlidXRlVmFsdWVJZEZvckNvbmZpZ3VyYXRvcihhdHRyaWJ1dGUsIHZhbHVlLnZhbHVlQ29kZSkgK1xuICAgICAgICAgICAgJy1pbnB1dCdcbiAgICAgICAgfX1cIlxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIlxuICAgICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgKm5nSWY9XCJ2YWx1ZS5pbWFnZXNbMF1cIlxuICAgICAgICAgIGNsYXNzPVwiY3gtaW1nXCJcbiAgICAgICAgICBzcmM9XCJ7eyB2YWx1ZS5pbWFnZXNbMF0udXJsIH19XCJcbiAgICAgICAgICBhbHQ9XCJ7eyB2YWx1ZS5pbWFnZXNbMF0uYWx0VGV4dCB9fVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgKm5nSWY9XCIhdmFsdWUuaW1hZ2VzWzBdXCIgY2xhc3M9XCJjeC1pbWctZHVtbXlcIj48L2Rpdj5cbiAgICAgICAge3sgdmFsdWUudmFsdWVEaXNwbGF5IH19XG4gICAgICAgIDxjeC1jb25maWd1cmF0b3ItcHJpY2VcbiAgICAgICAgICBbZm9ybXVsYV09XCJleHRyYWN0VmFsdWVQcmljZUZvcm11bGFQYXJhbWV0ZXJzKHZhbHVlKVwiXG4gICAgICAgID48L2N4LWNvbmZpZ3VyYXRvci1wcmljZT5cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=