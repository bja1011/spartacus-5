/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfiguratorAttributeSingleSelectionBaseComponent } from '../base/configurator-attribute-single-selection-base.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../product-card/configurator-attribute-product-card.component";
import * as i3 from "../../quantity/configurator-attribute-quantity.component";
import * as i4 from "../../../price/configurator-price.component";
export class ConfiguratorAttributeSingleSelectionBundleComponent extends ConfiguratorAttributeSingleSelectionBaseComponent {
    /**
     * Extract corresponding product card parameters
     *
     * @param {Configurator.Value} value - Value
     * @param {number} index - index of current value in list of values of attribute
     * @return {ConfiguratorAttributeProductCardComponentOptions} - New product card options
     */
    extractProductCardParameters(value, index) {
        return {
            hideRemoveButton: this.attribute.required,
            fallbackFocusId: this.getFocusIdOfNearestValue(value),
            productBoundValue: value,
            loading$: this.loading$,
            attributeId: this.getAttributeCode(this.attribute),
            attributeLabel: this.attribute.label,
            attributeName: this.attribute.name,
            itemCount: this.attribute.values?.length
                ? this.attribute.values.length
                : 0,
            itemIndex: index,
        };
    }
    getFocusIdOfNearestValue(currentValue) {
        if (!this.attribute.values) {
            return 'n/a';
        }
        let prevIdx = this.attribute.values.findIndex((value) => value.valueCode === currentValue.valueCode);
        prevIdx--;
        if (prevIdx < 0) {
            prevIdx = this.attribute.values.length > 1 ? 1 : 0;
        }
        return this.createFocusId(this.getAttributeCode(this.attribute).toString(), this.attribute.values[prevIdx].valueCode);
    }
}
ConfiguratorAttributeSingleSelectionBundleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ConfiguratorAttributeSingleSelectionBundleComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
ConfiguratorAttributeSingleSelectionBundleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: ConfiguratorAttributeSingleSelectionBundleComponent, selector: "cx-configurator-attribute-single-selection-bundle", usesInheritance: true, ngImport: i0, template: "<div\n  id=\"{{ createAttributeIdForConfigurator(attribute) }}\"\n  *ngIf=\"attribute?.values?.length\"\n>\n  <div *ngIf=\"withQuantity\" class=\"cx-attribute-level-quantity-price\">\n    <cx-configurator-attribute-quantity\n      (changeQuantity)=\"onChangeQuantity($event)\"\n      [quantityOptions]=\"extractQuantityParameters()\"\n    ></cx-configurator-attribute-quantity>\n\n    <cx-configurator-price\n      [formula]=\"extractPriceFormulaParameters()\"\n    ></cx-configurator-price>\n  </div>\n\n  <cx-configurator-attribute-product-card\n    [id]=\"createAttributeValueIdForConfigurator(attribute, value?.valueCode)\"\n    (handleDeselect)=\"onSelect('')\"\n    (handleSelect)=\"onSelect($event)\"\n    *ngFor=\"let value of attribute?.values; let i = index\"\n    [productCardOptions]=\"extractProductCardParameters(value, i)\"\n  >\n  </cx-configurator-attribute-product-card>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.ConfiguratorAttributeProductCardComponent, selector: "cx-configurator-attribute-product-card", inputs: ["productCardOptions"], outputs: ["handleDeselect", "handleQuantity", "handleSelect"] }, { kind: "component", type: i3.ConfiguratorAttributeQuantityComponent, selector: "cx-configurator-attribute-quantity", inputs: ["quantityOptions"], outputs: ["changeQuantity"] }, { kind: "component", type: i4.ConfiguratorPriceComponent, selector: "cx-configurator-price", inputs: ["formula"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ConfiguratorAttributeSingleSelectionBundleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-configurator-attribute-single-selection-bundle', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  id=\"{{ createAttributeIdForConfigurator(attribute) }}\"\n  *ngIf=\"attribute?.values?.length\"\n>\n  <div *ngIf=\"withQuantity\" class=\"cx-attribute-level-quantity-price\">\n    <cx-configurator-attribute-quantity\n      (changeQuantity)=\"onChangeQuantity($event)\"\n      [quantityOptions]=\"extractQuantityParameters()\"\n    ></cx-configurator-attribute-quantity>\n\n    <cx-configurator-price\n      [formula]=\"extractPriceFormulaParameters()\"\n    ></cx-configurator-price>\n  </div>\n\n  <cx-configurator-attribute-product-card\n    [id]=\"createAttributeValueIdForConfigurator(attribute, value?.valueCode)\"\n    (handleDeselect)=\"onSelect('')\"\n    (handleSelect)=\"onSelect($event)\"\n    *ngFor=\"let value of attribute?.values; let i = index\"\n    [productCardOptions]=\"extractProductCardParameters(value, i)\"\n  >\n  </cx-configurator-attribute-product-card>\n</div>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1zaW5nbGUtc2VsZWN0aW9uLWJ1bmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvcHJvZHVjdC1jb25maWd1cmF0b3IvcnVsZWJhc2VkL2NvbXBvbmVudHMvYXR0cmlidXRlL3R5cGVzL3NpbmdsZS1zZWxlY3Rpb24tYnVuZGxlL2NvbmZpZ3VyYXRvci1hdHRyaWJ1dGUtc2luZ2xlLXNlbGVjdGlvbi1idW5kbGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL3Byb2R1Y3QtY29uZmlndXJhdG9yL3J1bGViYXNlZC9jb21wb25lbnRzL2F0dHJpYnV0ZS90eXBlcy9zaW5nbGUtc2VsZWN0aW9uLWJ1bmRsZS9jb25maWd1cmF0b3ItYXR0cmlidXRlLXNpbmdsZS1zZWxlY3Rpb24tYnVuZGxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR25FLE9BQU8sRUFBRSxpREFBaUQsRUFBRSxNQUFNLGdFQUFnRSxDQUFDOzs7Ozs7QUFRbkksTUFBTSxPQUFPLG1EQUFvRCxTQUFRLGlEQUFpRDtJQUN4SDs7Ozs7O09BTUc7SUFDSCw0QkFBNEIsQ0FDMUIsS0FBeUIsRUFDekIsS0FBYTtRQUViLE9BQU87WUFDTCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDekMsZUFBZSxFQUFFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUM7WUFDckQsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsV0FBVyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2xELGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7WUFDcEMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSTtZQUNsQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTTtnQkFDdEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU07Z0JBQzlCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsU0FBUyxFQUFFLEtBQUs7U0FDakIsQ0FBQztJQUNKLENBQUM7SUFFUyx3QkFBd0IsQ0FBQyxZQUFnQztRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDMUIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FDM0MsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEtBQUssWUFBWSxDQUFDLFNBQVMsQ0FDdEQsQ0FBQztRQUNGLE9BQU8sRUFBRSxDQUFDO1FBQ1YsSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQ3pDLENBQUM7SUFDSixDQUFDOztnSkExQ1UsbURBQW1EO29JQUFuRCxtREFBbUQsZ0hDakJoRSxvNEJBd0JBOzJGRFBhLG1EQUFtRDtrQkFOL0QsU0FBUzsrQkFDRSxtREFBbUQsbUJBRzVDLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0b3IgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL21vZGVsL2NvbmZpZ3VyYXRvci5tb2RlbCc7XG5pbXBvcnQgeyBDb25maWd1cmF0b3JBdHRyaWJ1dGVQcm9kdWN0Q2FyZENvbXBvbmVudE9wdGlvbnMgfSBmcm9tICcuLi8uLi9wcm9kdWN0LWNhcmQvY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1wcm9kdWN0LWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpZ3VyYXRvckF0dHJpYnV0ZVNpbmdsZVNlbGVjdGlvbkJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2NvbmZpZ3VyYXRvci1hdHRyaWJ1dGUtc2luZ2xlLXNlbGVjdGlvbi1iYXNlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNvbmZpZ3VyYXRvci1hdHRyaWJ1dGUtc2luZ2xlLXNlbGVjdGlvbi1idW5kbGUnLFxuICB0ZW1wbGF0ZVVybDpcbiAgICAnLi9jb25maWd1cmF0b3ItYXR0cmlidXRlLXNpbmdsZS1zZWxlY3Rpb24tYnVuZGxlLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRvckF0dHJpYnV0ZVNpbmdsZVNlbGVjdGlvbkJ1bmRsZUNvbXBvbmVudCBleHRlbmRzIENvbmZpZ3VyYXRvckF0dHJpYnV0ZVNpbmdsZVNlbGVjdGlvbkJhc2VDb21wb25lbnQge1xuICAvKipcbiAgICogRXh0cmFjdCBjb3JyZXNwb25kaW5nIHByb2R1Y3QgY2FyZCBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIEBwYXJhbSB7Q29uZmlndXJhdG9yLlZhbHVlfSB2YWx1ZSAtIFZhbHVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIGluZGV4IG9mIGN1cnJlbnQgdmFsdWUgaW4gbGlzdCBvZiB2YWx1ZXMgb2YgYXR0cmlidXRlXG4gICAqIEByZXR1cm4ge0NvbmZpZ3VyYXRvckF0dHJpYnV0ZVByb2R1Y3RDYXJkQ29tcG9uZW50T3B0aW9uc30gLSBOZXcgcHJvZHVjdCBjYXJkIG9wdGlvbnNcbiAgICovXG4gIGV4dHJhY3RQcm9kdWN0Q2FyZFBhcmFtZXRlcnMoXG4gICAgdmFsdWU6IENvbmZpZ3VyYXRvci5WYWx1ZSxcbiAgICBpbmRleDogbnVtYmVyXG4gICk6IENvbmZpZ3VyYXRvckF0dHJpYnV0ZVByb2R1Y3RDYXJkQ29tcG9uZW50T3B0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhpZGVSZW1vdmVCdXR0b246IHRoaXMuYXR0cmlidXRlLnJlcXVpcmVkLFxuICAgICAgZmFsbGJhY2tGb2N1c0lkOiB0aGlzLmdldEZvY3VzSWRPZk5lYXJlc3RWYWx1ZSh2YWx1ZSksXG4gICAgICBwcm9kdWN0Qm91bmRWYWx1ZTogdmFsdWUsXG4gICAgICBsb2FkaW5nJDogdGhpcy5sb2FkaW5nJCxcbiAgICAgIGF0dHJpYnV0ZUlkOiB0aGlzLmdldEF0dHJpYnV0ZUNvZGUodGhpcy5hdHRyaWJ1dGUpLFxuICAgICAgYXR0cmlidXRlTGFiZWw6IHRoaXMuYXR0cmlidXRlLmxhYmVsLFxuICAgICAgYXR0cmlidXRlTmFtZTogdGhpcy5hdHRyaWJ1dGUubmFtZSxcbiAgICAgIGl0ZW1Db3VudDogdGhpcy5hdHRyaWJ1dGUudmFsdWVzPy5sZW5ndGhcbiAgICAgICAgPyB0aGlzLmF0dHJpYnV0ZS52YWx1ZXMubGVuZ3RoXG4gICAgICAgIDogMCxcbiAgICAgIGl0ZW1JbmRleDogaW5kZXgsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRGb2N1c0lkT2ZOZWFyZXN0VmFsdWUoY3VycmVudFZhbHVlOiBDb25maWd1cmF0b3IuVmFsdWUpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5hdHRyaWJ1dGUudmFsdWVzKSB7XG4gICAgICByZXR1cm4gJ24vYSc7XG4gICAgfVxuICAgIGxldCBwcmV2SWR4ID0gdGhpcy5hdHRyaWJ1dGUudmFsdWVzLmZpbmRJbmRleChcbiAgICAgICh2YWx1ZSkgPT4gdmFsdWUudmFsdWVDb2RlID09PSBjdXJyZW50VmFsdWUudmFsdWVDb2RlXG4gICAgKTtcbiAgICBwcmV2SWR4LS07XG4gICAgaWYgKHByZXZJZHggPCAwKSB7XG4gICAgICBwcmV2SWR4ID0gdGhpcy5hdHRyaWJ1dGUudmFsdWVzLmxlbmd0aCA+IDEgPyAxIDogMDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRm9jdXNJZChcbiAgICAgIHRoaXMuZ2V0QXR0cmlidXRlQ29kZSh0aGlzLmF0dHJpYnV0ZSkudG9TdHJpbmcoKSxcbiAgICAgIHRoaXMuYXR0cmlidXRlLnZhbHVlc1twcmV2SWR4XS52YWx1ZUNvZGVcbiAgICApO1xuICB9XG59XG4iLCI8ZGl2XG4gIGlkPVwie3sgY3JlYXRlQXR0cmlidXRlSWRGb3JDb25maWd1cmF0b3IoYXR0cmlidXRlKSB9fVwiXG4gICpuZ0lmPVwiYXR0cmlidXRlPy52YWx1ZXM/Lmxlbmd0aFwiXG4+XG4gIDxkaXYgKm5nSWY9XCJ3aXRoUXVhbnRpdHlcIiBjbGFzcz1cImN4LWF0dHJpYnV0ZS1sZXZlbC1xdWFudGl0eS1wcmljZVwiPlxuICAgIDxjeC1jb25maWd1cmF0b3ItYXR0cmlidXRlLXF1YW50aXR5XG4gICAgICAoY2hhbmdlUXVhbnRpdHkpPVwib25DaGFuZ2VRdWFudGl0eSgkZXZlbnQpXCJcbiAgICAgIFtxdWFudGl0eU9wdGlvbnNdPVwiZXh0cmFjdFF1YW50aXR5UGFyYW1ldGVycygpXCJcbiAgICA+PC9jeC1jb25maWd1cmF0b3ItYXR0cmlidXRlLXF1YW50aXR5PlxuXG4gICAgPGN4LWNvbmZpZ3VyYXRvci1wcmljZVxuICAgICAgW2Zvcm11bGFdPVwiZXh0cmFjdFByaWNlRm9ybXVsYVBhcmFtZXRlcnMoKVwiXG4gICAgPjwvY3gtY29uZmlndXJhdG9yLXByaWNlPlxuICA8L2Rpdj5cblxuICA8Y3gtY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1wcm9kdWN0LWNhcmRcbiAgICBbaWRdPVwiY3JlYXRlQXR0cmlidXRlVmFsdWVJZEZvckNvbmZpZ3VyYXRvcihhdHRyaWJ1dGUsIHZhbHVlPy52YWx1ZUNvZGUpXCJcbiAgICAoaGFuZGxlRGVzZWxlY3QpPVwib25TZWxlY3QoJycpXCJcbiAgICAoaGFuZGxlU2VsZWN0KT1cIm9uU2VsZWN0KCRldmVudClcIlxuICAgICpuZ0Zvcj1cImxldCB2YWx1ZSBvZiBhdHRyaWJ1dGU/LnZhbHVlczsgbGV0IGkgPSBpbmRleFwiXG4gICAgW3Byb2R1Y3RDYXJkT3B0aW9uc109XCJleHRyYWN0UHJvZHVjdENhcmRQYXJhbWV0ZXJzKHZhbHVlLCBpKVwiXG4gID5cbiAgPC9jeC1jb25maWd1cmF0b3ItYXR0cmlidXRlLXByb2R1Y3QtY2FyZD5cbjwvZGl2PlxuIl19