/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { ConfiguratorAttributeSingleSelectionBaseComponent } from '../base/configurator-attribute-single-selection-base.component';
import * as i0 from "@angular/core";
import * as i1 from "../../quantity/configurator-attribute-quantity.service";
import * as i2 from "@spartacus/core";
import * as i3 from "@angular/common";
import * as i4 from "../../quantity/configurator-attribute-quantity.component";
import * as i5 from "@angular/forms";
import * as i6 from "@spartacus/storefront";
import * as i7 from "../../../price/configurator-price.component";
import * as i8 from "../numeric-input-field/configurator-attribute-numeric-input-field.component";
import * as i9 from "../input-field/configurator-attribute-input-field.component";
export class ConfiguratorAttributeDropDownComponent extends ConfiguratorAttributeSingleSelectionBaseComponent {
    constructor(quantityService, translation) {
        super(quantityService, translation);
        this.quantityService = quantityService;
        this.translation = translation;
        this.attributeDropDownForm = new UntypedFormControl('');
    }
    ngOnInit() {
        this.attributeDropDownForm.setValue(this.attribute.selectedSingleValue);
    }
    getSelectedValue() {
        return this.attribute.values?.find((value) => value?.selected);
    }
}
ConfiguratorAttributeDropDownComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ConfiguratorAttributeDropDownComponent, deps: [{ token: i1.ConfiguratorAttributeQuantityService }, { token: i2.TranslationService }], target: i0.ɵɵFactoryTarget.Component });
ConfiguratorAttributeDropDownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: ConfiguratorAttributeDropDownComponent, selector: "cx-configurator-attribute-drop-down", inputs: { group: "group" }, usesInheritance: true, ngImport: i0, template: "<div\n  class=\"form-group\"\n  *ngIf=\"attribute.values && attribute.values.length !== 0\"\n>\n  <label\n    for=\"{{ createAttributeIdForConfigurator(attribute) }}\"\n    class=\"cx-visually-hidden\"\n  >\n    {{\n      'configurator.a11y.listbox'\n        | cxTranslate\n          : {\n              count: attribute.values.length\n            }\n    }}\n  </label>\n  <select\n    id=\"{{ createAttributeIdForConfigurator(attribute) }}\"\n    class=\"form-control\"\n    [formControl]=\"attributeDropDownForm\"\n    [cxFocus]=\"{ key: attribute.name }\"\n    (change)=\"onSelect(attributeDropDownForm.value)\"\n    [attr.aria-describedby]=\"createAttributeUiKey('label', attribute.name)\"\n  >\n    <option\n      *ngFor=\"let item of attribute.values\"\n      [label]=\"item.valueDisplay\"\n      [selected]=\"item.selected\"\n      [attr.aria-label]=\"getAriaLabel(item, attribute)\"\n      [value]=\"item.valueCode\"\n    >\n      {{ item.valueDisplay }}\n    </option>\n  </select>\n  <div\n    *ngIf=\"!withQuantity && getSelectedValue()?.valuePrice\"\n    class=\"cx-value-price\"\n  >\n    <cx-configurator-price\n      [formula]=\"extractValuePriceFormulaParameters(getSelectedValue())\"\n    ></cx-configurator-price>\n  </div>\n</div>\n<div *ngIf=\"withQuantity\" class=\"cx-attribute-level-quantity-price\">\n  <cx-configurator-attribute-quantity\n    (changeQuantity)=\"onChangeQuantity($event, attributeDropDownForm)\"\n    [quantityOptions]=\"extractQuantityParameters(attributeDropDownForm)\"\n  ></cx-configurator-attribute-quantity>\n  <cx-configurator-price\n    [formula]=\"extractPriceFormulaParameters()\"\n  ></cx-configurator-price>\n</div>\n\n<cx-configurator-attribute-numeric-input-field\n  *ngIf=\"isAdditionalValueNumeric\"\n  class=\"cx-configurator-attribute-additional-value\"\n  [attribute]=\"attribute\"\n  [ownerType]=\"ownerType\"\n  [ownerKey]=\"ownerKey\"\n  [language]=\"language\"\n  (inputChange)=\"onSelectAdditionalValue($event)\"\n  [attr.aria-label]=\"'configurator.a11y.additionalValue' | cxTranslate\"\n></cx-configurator-attribute-numeric-input-field>\n\n<cx-configurator-attribute-input-field\n  *ngIf=\"isAdditionalValueAlphaNumeric\"\n  class=\"cx-configurator-attribute-additional-value\"\n  [attribute]=\"attribute\"\n  [ownerType]=\"ownerType\"\n  [ownerKey]=\"ownerKey\"\n  (inputChange)=\"onSelectAdditionalValue($event)\"\n  [attr.aria-label]=\"'configurator.a11y.additionalValue' | cxTranslate\"\n>\n</cx-configurator-attribute-input-field>\n", dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.ConfiguratorAttributeQuantityComponent, selector: "cx-configurator-attribute-quantity", inputs: ["quantityOptions"], outputs: ["changeQuantity"] }, { kind: "directive", type: i5.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i5.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i5.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i6.FocusDirective, selector: "[cxFocus]", inputs: ["cxFocus"] }, { kind: "directive", type: i5.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i7.ConfiguratorPriceComponent, selector: "cx-configurator-price", inputs: ["formula"] }, { kind: "component", type: i8.ConfiguratorAttributeNumericInputFieldComponent, selector: "cx-configurator-attribute-numeric-input-field", inputs: ["language"] }, { kind: "component", type: i9.ConfiguratorAttributeInputFieldComponent, selector: "cx-configurator-attribute-input-field", inputs: ["ownerType", "attribute", "group", "ownerKey"], outputs: ["inputChange"] }, { kind: "pipe", type: i2.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ConfiguratorAttributeDropDownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-configurator-attribute-drop-down', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  class=\"form-group\"\n  *ngIf=\"attribute.values && attribute.values.length !== 0\"\n>\n  <label\n    for=\"{{ createAttributeIdForConfigurator(attribute) }}\"\n    class=\"cx-visually-hidden\"\n  >\n    {{\n      'configurator.a11y.listbox'\n        | cxTranslate\n          : {\n              count: attribute.values.length\n            }\n    }}\n  </label>\n  <select\n    id=\"{{ createAttributeIdForConfigurator(attribute) }}\"\n    class=\"form-control\"\n    [formControl]=\"attributeDropDownForm\"\n    [cxFocus]=\"{ key: attribute.name }\"\n    (change)=\"onSelect(attributeDropDownForm.value)\"\n    [attr.aria-describedby]=\"createAttributeUiKey('label', attribute.name)\"\n  >\n    <option\n      *ngFor=\"let item of attribute.values\"\n      [label]=\"item.valueDisplay\"\n      [selected]=\"item.selected\"\n      [attr.aria-label]=\"getAriaLabel(item, attribute)\"\n      [value]=\"item.valueCode\"\n    >\n      {{ item.valueDisplay }}\n    </option>\n  </select>\n  <div\n    *ngIf=\"!withQuantity && getSelectedValue()?.valuePrice\"\n    class=\"cx-value-price\"\n  >\n    <cx-configurator-price\n      [formula]=\"extractValuePriceFormulaParameters(getSelectedValue())\"\n    ></cx-configurator-price>\n  </div>\n</div>\n<div *ngIf=\"withQuantity\" class=\"cx-attribute-level-quantity-price\">\n  <cx-configurator-attribute-quantity\n    (changeQuantity)=\"onChangeQuantity($event, attributeDropDownForm)\"\n    [quantityOptions]=\"extractQuantityParameters(attributeDropDownForm)\"\n  ></cx-configurator-attribute-quantity>\n  <cx-configurator-price\n    [formula]=\"extractPriceFormulaParameters()\"\n  ></cx-configurator-price>\n</div>\n\n<cx-configurator-attribute-numeric-input-field\n  *ngIf=\"isAdditionalValueNumeric\"\n  class=\"cx-configurator-attribute-additional-value\"\n  [attribute]=\"attribute\"\n  [ownerType]=\"ownerType\"\n  [ownerKey]=\"ownerKey\"\n  [language]=\"language\"\n  (inputChange)=\"onSelectAdditionalValue($event)\"\n  [attr.aria-label]=\"'configurator.a11y.additionalValue' | cxTranslate\"\n></cx-configurator-attribute-numeric-input-field>\n\n<cx-configurator-attribute-input-field\n  *ngIf=\"isAdditionalValueAlphaNumeric\"\n  class=\"cx-configurator-attribute-additional-value\"\n  [attribute]=\"attribute\"\n  [ownerType]=\"ownerType\"\n  [ownerKey]=\"ownerKey\"\n  (inputChange)=\"onSelectAdditionalValue($event)\"\n  [attr.aria-label]=\"'configurator.a11y.additionalValue' | cxTranslate\"\n>\n</cx-configurator-attribute-input-field>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ConfiguratorAttributeQuantityService }, { type: i2.TranslationService }]; }, propDecorators: { group: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1kcm9wLWRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL3Byb2R1Y3QtY29uZmlndXJhdG9yL3J1bGViYXNlZC9jb21wb25lbnRzL2F0dHJpYnV0ZS90eXBlcy9kcm9wLWRvd24vY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1kcm9wLWRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL3Byb2R1Y3QtY29uZmlndXJhdG9yL3J1bGViYXNlZC9jb21wb25lbnRzL2F0dHJpYnV0ZS90eXBlcy9kcm9wLWRvd24vY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1kcm9wLWRvd24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUlwRCxPQUFPLEVBQUUsaURBQWlELEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQzs7Ozs7Ozs7Ozs7QUFPbkksTUFBTSxPQUFPLHNDQUNYLFNBQVEsaURBQWlEO0lBTXpELFlBQ1ksZUFBcUQsRUFDckQsV0FBK0I7UUFFekMsS0FBSyxDQUFDLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUgxQixvQkFBZSxHQUFmLGVBQWUsQ0FBc0M7UUFDckQsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBTDNDLDBCQUFxQixHQUFHLElBQUksa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFRbkQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDOzttSUFwQlUsc0NBQXNDO3VIQUF0QyxzQ0FBc0MsOEhDdkJuRCx5OEVBMEVBOzJGRG5EYSxzQ0FBc0M7a0JBTGxELFNBQVM7K0JBQ0UscUNBQXFDLG1CQUU5Qix1QkFBdUIsQ0FBQyxNQUFNOzRKQU90QyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVudHlwZWRGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0b3IgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL21vZGVsL2NvbmZpZ3VyYXRvci5tb2RlbCc7XG5pbXBvcnQgeyBDb25maWd1cmF0b3JBdHRyaWJ1dGVRdWFudGl0eVNlcnZpY2UgfSBmcm9tICcuLi8uLi9xdWFudGl0eS9jb25maWd1cmF0b3ItYXR0cmlidXRlLXF1YW50aXR5LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlndXJhdG9yQXR0cmlidXRlU2luZ2xlU2VsZWN0aW9uQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1zaW5nbGUtc2VsZWN0aW9uLWJhc2UuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1kcm9wLWRvd24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1kcm9wLWRvd24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdG9yQXR0cmlidXRlRHJvcERvd25Db21wb25lbnRcbiAgZXh0ZW5kcyBDb25maWd1cmF0b3JBdHRyaWJ1dGVTaW5nbGVTZWxlY3Rpb25CYXNlQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0XG57XG4gIGF0dHJpYnV0ZURyb3BEb3duRm9ybSA9IG5ldyBVbnR5cGVkRm9ybUNvbnRyb2woJycpO1xuICBASW5wdXQoKSBncm91cDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBxdWFudGl0eVNlcnZpY2U6IENvbmZpZ3VyYXRvckF0dHJpYnV0ZVF1YW50aXR5U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHtcbiAgICBzdXBlcihxdWFudGl0eVNlcnZpY2UsIHRyYW5zbGF0aW9uKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXR0cmlidXRlRHJvcERvd25Gb3JtLnNldFZhbHVlKHRoaXMuYXR0cmlidXRlLnNlbGVjdGVkU2luZ2xlVmFsdWUpO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWRWYWx1ZSgpOiBDb25maWd1cmF0b3IuVmFsdWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZS52YWx1ZXM/LmZpbmQoKHZhbHVlKSA9PiB2YWx1ZT8uc2VsZWN0ZWQpO1xuICB9XG59XG4iLCI8ZGl2XG4gIGNsYXNzPVwiZm9ybS1ncm91cFwiXG4gICpuZ0lmPVwiYXR0cmlidXRlLnZhbHVlcyAmJiBhdHRyaWJ1dGUudmFsdWVzLmxlbmd0aCAhPT0gMFwiXG4+XG4gIDxsYWJlbFxuICAgIGZvcj1cInt7IGNyZWF0ZUF0dHJpYnV0ZUlkRm9yQ29uZmlndXJhdG9yKGF0dHJpYnV0ZSkgfX1cIlxuICAgIGNsYXNzPVwiY3gtdmlzdWFsbHktaGlkZGVuXCJcbiAgPlxuICAgIHt7XG4gICAgICAnY29uZmlndXJhdG9yLmExMXkubGlzdGJveCdcbiAgICAgICAgfCBjeFRyYW5zbGF0ZVxuICAgICAgICAgIDoge1xuICAgICAgICAgICAgICBjb3VudDogYXR0cmlidXRlLnZhbHVlcy5sZW5ndGhcbiAgICAgICAgICAgIH1cbiAgICB9fVxuICA8L2xhYmVsPlxuICA8c2VsZWN0XG4gICAgaWQ9XCJ7eyBjcmVhdGVBdHRyaWJ1dGVJZEZvckNvbmZpZ3VyYXRvcihhdHRyaWJ1dGUpIH19XCJcbiAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgW2Zvcm1Db250cm9sXT1cImF0dHJpYnV0ZURyb3BEb3duRm9ybVwiXG4gICAgW2N4Rm9jdXNdPVwieyBrZXk6IGF0dHJpYnV0ZS5uYW1lIH1cIlxuICAgIChjaGFuZ2UpPVwib25TZWxlY3QoYXR0cmlidXRlRHJvcERvd25Gb3JtLnZhbHVlKVwiXG4gICAgW2F0dHIuYXJpYS1kZXNjcmliZWRieV09XCJjcmVhdGVBdHRyaWJ1dGVVaUtleSgnbGFiZWwnLCBhdHRyaWJ1dGUubmFtZSlcIlxuICA+XG4gICAgPG9wdGlvblxuICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgYXR0cmlidXRlLnZhbHVlc1wiXG4gICAgICBbbGFiZWxdPVwiaXRlbS52YWx1ZURpc3BsYXlcIlxuICAgICAgW3NlbGVjdGVkXT1cIml0ZW0uc2VsZWN0ZWRcIlxuICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJnZXRBcmlhTGFiZWwoaXRlbSwgYXR0cmlidXRlKVwiXG4gICAgICBbdmFsdWVdPVwiaXRlbS52YWx1ZUNvZGVcIlxuICAgID5cbiAgICAgIHt7IGl0ZW0udmFsdWVEaXNwbGF5IH19XG4gICAgPC9vcHRpb24+XG4gIDwvc2VsZWN0PlxuICA8ZGl2XG4gICAgKm5nSWY9XCIhd2l0aFF1YW50aXR5ICYmIGdldFNlbGVjdGVkVmFsdWUoKT8udmFsdWVQcmljZVwiXG4gICAgY2xhc3M9XCJjeC12YWx1ZS1wcmljZVwiXG4gID5cbiAgICA8Y3gtY29uZmlndXJhdG9yLXByaWNlXG4gICAgICBbZm9ybXVsYV09XCJleHRyYWN0VmFsdWVQcmljZUZvcm11bGFQYXJhbWV0ZXJzKGdldFNlbGVjdGVkVmFsdWUoKSlcIlxuICAgID48L2N4LWNvbmZpZ3VyYXRvci1wcmljZT5cbiAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgKm5nSWY9XCJ3aXRoUXVhbnRpdHlcIiBjbGFzcz1cImN4LWF0dHJpYnV0ZS1sZXZlbC1xdWFudGl0eS1wcmljZVwiPlxuICA8Y3gtY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1xdWFudGl0eVxuICAgIChjaGFuZ2VRdWFudGl0eSk9XCJvbkNoYW5nZVF1YW50aXR5KCRldmVudCwgYXR0cmlidXRlRHJvcERvd25Gb3JtKVwiXG4gICAgW3F1YW50aXR5T3B0aW9uc109XCJleHRyYWN0UXVhbnRpdHlQYXJhbWV0ZXJzKGF0dHJpYnV0ZURyb3BEb3duRm9ybSlcIlxuICA+PC9jeC1jb25maWd1cmF0b3ItYXR0cmlidXRlLXF1YW50aXR5PlxuICA8Y3gtY29uZmlndXJhdG9yLXByaWNlXG4gICAgW2Zvcm11bGFdPVwiZXh0cmFjdFByaWNlRm9ybXVsYVBhcmFtZXRlcnMoKVwiXG4gID48L2N4LWNvbmZpZ3VyYXRvci1wcmljZT5cbjwvZGl2PlxuXG48Y3gtY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1udW1lcmljLWlucHV0LWZpZWxkXG4gICpuZ0lmPVwiaXNBZGRpdGlvbmFsVmFsdWVOdW1lcmljXCJcbiAgY2xhc3M9XCJjeC1jb25maWd1cmF0b3ItYXR0cmlidXRlLWFkZGl0aW9uYWwtdmFsdWVcIlxuICBbYXR0cmlidXRlXT1cImF0dHJpYnV0ZVwiXG4gIFtvd25lclR5cGVdPVwib3duZXJUeXBlXCJcbiAgW293bmVyS2V5XT1cIm93bmVyS2V5XCJcbiAgW2xhbmd1YWdlXT1cImxhbmd1YWdlXCJcbiAgKGlucHV0Q2hhbmdlKT1cIm9uU2VsZWN0QWRkaXRpb25hbFZhbHVlKCRldmVudClcIlxuICBbYXR0ci5hcmlhLWxhYmVsXT1cIidjb25maWd1cmF0b3IuYTExeS5hZGRpdGlvbmFsVmFsdWUnIHwgY3hUcmFuc2xhdGVcIlxuPjwvY3gtY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1udW1lcmljLWlucHV0LWZpZWxkPlxuXG48Y3gtY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1pbnB1dC1maWVsZFxuICAqbmdJZj1cImlzQWRkaXRpb25hbFZhbHVlQWxwaGFOdW1lcmljXCJcbiAgY2xhc3M9XCJjeC1jb25maWd1cmF0b3ItYXR0cmlidXRlLWFkZGl0aW9uYWwtdmFsdWVcIlxuICBbYXR0cmlidXRlXT1cImF0dHJpYnV0ZVwiXG4gIFtvd25lclR5cGVdPVwib3duZXJUeXBlXCJcbiAgW293bmVyS2V5XT1cIm93bmVyS2V5XCJcbiAgKGlucHV0Q2hhbmdlKT1cIm9uU2VsZWN0QWRkaXRpb25hbFZhbHVlKCRldmVudClcIlxuICBbYXR0ci5hcmlhLWxhYmVsXT1cIidjb25maWd1cmF0b3IuYTExeS5hZGRpdGlvbmFsVmFsdWUnIHwgY3hUcmFuc2xhdGVcIlxuPlxuPC9jeC1jb25maWd1cmF0b3ItYXR0cmlidXRlLWlucHV0LWZpZWxkPlxuIl19