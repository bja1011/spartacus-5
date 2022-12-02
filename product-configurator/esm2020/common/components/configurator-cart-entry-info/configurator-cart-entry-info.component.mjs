/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Component, Optional } from '@angular/core';
import { EMPTY } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/cart/base/root";
import * as i2 from "../../shared/utils/common-configurator-utils.service";
import * as i3 from "@angular/common";
import * as i4 from "../configure-cart-entry/configure-cart-entry.component";
import * as i5 from "@spartacus/core";
export class ConfiguratorCartEntryInfoComponent {
    constructor(cartItemContext, commonConfigUtilsService) {
        this.cartItemContext = cartItemContext;
        this.commonConfigUtilsService = commonConfigUtilsService;
        this.orderEntry$ = this.cartItemContext?.item$ ?? EMPTY;
        this.quantityControl$ = this.cartItemContext?.quantityControl$ ?? EMPTY;
        this.readonly$ = this.cartItemContext?.readonly$ ?? EMPTY;
        // TODO: remove the logic below when configurable products support "Saved Cart" and "Save For Later"
        this.shouldShowButton$ = this.commonConfigUtilsService.isActiveCartContext(this.cartItemContext);
    }
    /**
     * Verifies whether the configuration infos have any entries and the first entry has a status.
     * Only in this case we want to display the configuration summary
     *
     * @param {OrderEntry} item - Cart item
     * @returns {boolean} - whether the status of configuration infos entry has status
     */
    hasStatus(item) {
        const configurationInfos = item.configurationInfos;
        return configurationInfos
            ? configurationInfos.length > 0 && configurationInfos[0].status !== 'NONE'
            : false;
    }
    /**
     * Verifies whether the configurator type is attribute based one.
     *
     * @param {OrderEntry} item - Order entry item
     * @returns {boolean} - 'True' if the expected configurator type, otherwise 'fasle'
     */
    isAttributeBasedConfigurator(item) {
        const configurationInfos = item.configurationInfos;
        return configurationInfos
            ? this.commonConfigUtilsService.isAttributeBasedConfigurator(configurationInfos[0]?.configuratorType)
            : false;
    }
    getHiddenConfigurationInfoId(index) {
        return 'cx-configuration-hidden-info-' + index.toString();
    }
}
ConfiguratorCartEntryInfoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ConfiguratorCartEntryInfoComponent, deps: [{ token: i1.CartItemContext, optional: true }, { token: i2.CommonConfiguratorUtilsService }], target: i0.ɵɵFactoryTarget.Component });
ConfiguratorCartEntryInfoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: ConfiguratorCartEntryInfoComponent, selector: "cx-configurator-cart-entry-info", ngImport: i0, template: "<ng-container *ngIf=\"orderEntry$ | async as orderEntry\">\n  <ng-container *ngIf=\"isAttributeBasedConfigurator(orderEntry)\">\n    <ng-container *ngIf=\"hasStatus(orderEntry)\">\n      <span\n        *ngIf=\"orderEntry.configurationInfos.length > 0\"\n        class=\"cx-intro cx-visually-hidden\"\n      >\n        {{ 'configurator.a11y.cartEntryInfoIntro' | cxTranslate }}\n      </span>\n      <div\n        *ngFor=\"let info of orderEntry.configurationInfos; let i = index\"\n        class=\"cx-configuration-info\"\n        attr.aria-describedby=\"{{ getHiddenConfigurationInfoId(i) }}\"\n      >\n        <span\n          id=\"{{ getHiddenConfigurationInfoId(i) }}\"\n          class=\"cx-visually-hidden\"\n        >\n          {{\n            'configurator.a11y.cartEntryInfo'\n              | cxTranslate\n                : {\n                    attribute: info.configurationLabel,\n                    value: info.configurationValue\n                  }\n          }}\n        </span>\n        <div class=\"cx-label\" aria-hidden=\"true\">\n          {{ info?.configurationLabel }}:\n        </div>\n        <div class=\"cx-value\" aria-hidden=\"true\">\n          {{ info?.configurationValue }}\n        </div>\n      </div>\n    </ng-container>\n\n    <cx-configure-cart-entry\n      *ngIf=\"\n        (shouldShowButton$ | async) &&\n          orderEntry?.product?.configurable &&\n          quantityControl$ | async as quantityControl\n      \"\n      [cartEntry]=\"orderEntry\"\n      [readOnly]=\"readonly$ | async\"\n      [msgBanner]=\"false\"\n      [disabled]=\"quantityControl.disabled\"\n    ></cx-configure-cart-entry>\n  </ng-container>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.ConfigureCartEntryComponent, selector: "cx-configure-cart-entry", inputs: ["cartEntry", "readOnly", "msgBanner", "disabled"] }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }, { kind: "pipe", type: i5.TranslatePipe, name: "cxTranslate" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ConfiguratorCartEntryInfoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-configurator-cart-entry-info', template: "<ng-container *ngIf=\"orderEntry$ | async as orderEntry\">\n  <ng-container *ngIf=\"isAttributeBasedConfigurator(orderEntry)\">\n    <ng-container *ngIf=\"hasStatus(orderEntry)\">\n      <span\n        *ngIf=\"orderEntry.configurationInfos.length > 0\"\n        class=\"cx-intro cx-visually-hidden\"\n      >\n        {{ 'configurator.a11y.cartEntryInfoIntro' | cxTranslate }}\n      </span>\n      <div\n        *ngFor=\"let info of orderEntry.configurationInfos; let i = index\"\n        class=\"cx-configuration-info\"\n        attr.aria-describedby=\"{{ getHiddenConfigurationInfoId(i) }}\"\n      >\n        <span\n          id=\"{{ getHiddenConfigurationInfoId(i) }}\"\n          class=\"cx-visually-hidden\"\n        >\n          {{\n            'configurator.a11y.cartEntryInfo'\n              | cxTranslate\n                : {\n                    attribute: info.configurationLabel,\n                    value: info.configurationValue\n                  }\n          }}\n        </span>\n        <div class=\"cx-label\" aria-hidden=\"true\">\n          {{ info?.configurationLabel }}:\n        </div>\n        <div class=\"cx-value\" aria-hidden=\"true\">\n          {{ info?.configurationValue }}\n        </div>\n      </div>\n    </ng-container>\n\n    <cx-configure-cart-entry\n      *ngIf=\"\n        (shouldShowButton$ | async) &&\n          orderEntry?.product?.configurable &&\n          quantityControl$ | async as quantityControl\n      \"\n      [cartEntry]=\"orderEntry\"\n      [readOnly]=\"readonly$ | async\"\n      [msgBanner]=\"false\"\n      [disabled]=\"quantityControl.disabled\"\n    ></cx-configure-cart-entry>\n  </ng-container>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i1.CartItemContext, decorators: [{
                    type: Optional
                }] }, { type: i2.CommonConfiguratorUtilsService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdG9yLWNhcnQtZW50cnktaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvcHJvZHVjdC1jb25maWd1cmF0b3IvY29tbW9uL2NvbXBvbmVudHMvY29uZmlndXJhdG9yLWNhcnQtZW50cnktaW5mby9jb25maWd1cmF0b3ItY2FydC1lbnRyeS1pbmZvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9wcm9kdWN0LWNvbmZpZ3VyYXRvci9jb21tb24vY29tcG9uZW50cy9jb25maWd1cmF0b3ItY2FydC1lbnRyeS1pbmZvL2NvbmZpZ3VyYXRvci1jYXJ0LWVudHJ5LWluZm8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BELE9BQU8sRUFBRSxLQUFLLEVBQWMsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7QUFPekMsTUFBTSxPQUFPLGtDQUFrQztJQUM3QyxZQUN3QixlQUFnQyxFQUM1Qyx3QkFBd0Q7UUFENUMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQzVDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBZ0M7UUFHM0QsZ0JBQVcsR0FDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxLQUFLLElBQUksS0FBSyxDQUFDO1FBRTlCLHFCQUFnQixHQUN2QixJQUFJLENBQUMsZUFBZSxFQUFFLGdCQUFnQixJQUFJLEtBQUssQ0FBQztRQUV6QyxjQUFTLEdBQ2hCLElBQUksQ0FBQyxlQUFlLEVBQUUsU0FBUyxJQUFJLEtBQUssQ0FBQztRQUUzQyxvR0FBb0c7UUFDM0Ysc0JBQWlCLEdBQ3hCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFidkUsQ0FBQztJQWVKOzs7Ozs7T0FNRztJQUNILFNBQVMsQ0FBQyxJQUFnQjtRQUN4QixNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUVuRCxPQUFPLGtCQUFrQjtZQUN2QixDQUFDLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTTtZQUMxRSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsNEJBQTRCLENBQUMsSUFBZ0I7UUFDM0MsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFFbkQsT0FBTyxrQkFBa0I7WUFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyw0QkFBNEIsQ0FDeEQsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUUsZ0JBQWdCLENBQ3hDO1lBQ0gsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNaLENBQUM7SUFFRCw0QkFBNEIsQ0FBQyxLQUFhO1FBQ3hDLE9BQU8sK0JBQStCLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVELENBQUM7OytIQXBEVSxrQ0FBa0M7bUhBQWxDLGtDQUFrQyx1RUNoQi9DLG1wREFpREE7MkZEakNhLGtDQUFrQztrQkFKOUMsU0FBUzsrQkFDRSxpQ0FBaUM7OzBCQUt4QyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVW50eXBlZEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ2FydEl0ZW1Db250ZXh0LCBPcmRlckVudHJ5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jYXJ0L2Jhc2Uvcm9vdCc7XG5pbXBvcnQgeyBFTVBUWSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29tbW9uQ29uZmlndXJhdG9yVXRpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzL2NvbW1vbi1jb25maWd1cmF0b3ItdXRpbHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNvbmZpZ3VyYXRvci1jYXJ0LWVudHJ5LWluZm8nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29uZmlndXJhdG9yLWNhcnQtZW50cnktaW5mby5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRvckNhcnRFbnRyeUluZm9Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgY2FydEl0ZW1Db250ZXh0OiBDYXJ0SXRlbUNvbnRleHQsXG4gICAgcHJvdGVjdGVkIGNvbW1vbkNvbmZpZ1V0aWxzU2VydmljZTogQ29tbW9uQ29uZmlndXJhdG9yVXRpbHNTZXJ2aWNlXG4gICkge31cblxuICByZWFkb25seSBvcmRlckVudHJ5JDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5PiA9XG4gICAgdGhpcy5jYXJ0SXRlbUNvbnRleHQ/Lml0ZW0kID8/IEVNUFRZO1xuXG4gIHJlYWRvbmx5IHF1YW50aXR5Q29udHJvbCQ6IE9ic2VydmFibGU8VW50eXBlZEZvcm1Db250cm9sPiA9XG4gICAgdGhpcy5jYXJ0SXRlbUNvbnRleHQ/LnF1YW50aXR5Q29udHJvbCQgPz8gRU1QVFk7XG5cbiAgcmVhZG9ubHkgcmVhZG9ubHkkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID1cbiAgICB0aGlzLmNhcnRJdGVtQ29udGV4dD8ucmVhZG9ubHkkID8/IEVNUFRZO1xuXG4gIC8vIFRPRE86IHJlbW92ZSB0aGUgbG9naWMgYmVsb3cgd2hlbiBjb25maWd1cmFibGUgcHJvZHVjdHMgc3VwcG9ydCBcIlNhdmVkIENhcnRcIiBhbmQgXCJTYXZlIEZvciBMYXRlclwiXG4gIHJlYWRvbmx5IHNob3VsZFNob3dCdXR0b24kOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID1cbiAgICB0aGlzLmNvbW1vbkNvbmZpZ1V0aWxzU2VydmljZS5pc0FjdGl2ZUNhcnRDb250ZXh0KHRoaXMuY2FydEl0ZW1Db250ZXh0KTtcblxuICAvKipcbiAgICogVmVyaWZpZXMgd2hldGhlciB0aGUgY29uZmlndXJhdGlvbiBpbmZvcyBoYXZlIGFueSBlbnRyaWVzIGFuZCB0aGUgZmlyc3QgZW50cnkgaGFzIGEgc3RhdHVzLlxuICAgKiBPbmx5IGluIHRoaXMgY2FzZSB3ZSB3YW50IHRvIGRpc3BsYXkgdGhlIGNvbmZpZ3VyYXRpb24gc3VtbWFyeVxuICAgKlxuICAgKiBAcGFyYW0ge09yZGVyRW50cnl9IGl0ZW0gLSBDYXJ0IGl0ZW1cbiAgICogQHJldHVybnMge2Jvb2xlYW59IC0gd2hldGhlciB0aGUgc3RhdHVzIG9mIGNvbmZpZ3VyYXRpb24gaW5mb3MgZW50cnkgaGFzIHN0YXR1c1xuICAgKi9cbiAgaGFzU3RhdHVzKGl0ZW06IE9yZGVyRW50cnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBjb25maWd1cmF0aW9uSW5mb3MgPSBpdGVtLmNvbmZpZ3VyYXRpb25JbmZvcztcblxuICAgIHJldHVybiBjb25maWd1cmF0aW9uSW5mb3NcbiAgICAgID8gY29uZmlndXJhdGlvbkluZm9zLmxlbmd0aCA+IDAgJiYgY29uZmlndXJhdGlvbkluZm9zWzBdLnN0YXR1cyAhPT0gJ05PTkUnXG4gICAgICA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmaWVzIHdoZXRoZXIgdGhlIGNvbmZpZ3VyYXRvciB0eXBlIGlzIGF0dHJpYnV0ZSBiYXNlZCBvbmUuXG4gICAqXG4gICAqIEBwYXJhbSB7T3JkZXJFbnRyeX0gaXRlbSAtIE9yZGVyIGVudHJ5IGl0ZW1cbiAgICogQHJldHVybnMge2Jvb2xlYW59IC0gJ1RydWUnIGlmIHRoZSBleHBlY3RlZCBjb25maWd1cmF0b3IgdHlwZSwgb3RoZXJ3aXNlICdmYXNsZSdcbiAgICovXG4gIGlzQXR0cmlidXRlQmFzZWRDb25maWd1cmF0b3IoaXRlbTogT3JkZXJFbnRyeSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbmZpZ3VyYXRpb25JbmZvcyA9IGl0ZW0uY29uZmlndXJhdGlvbkluZm9zO1xuXG4gICAgcmV0dXJuIGNvbmZpZ3VyYXRpb25JbmZvc1xuICAgICAgPyB0aGlzLmNvbW1vbkNvbmZpZ1V0aWxzU2VydmljZS5pc0F0dHJpYnV0ZUJhc2VkQ29uZmlndXJhdG9yKFxuICAgICAgICAgIGNvbmZpZ3VyYXRpb25JbmZvc1swXT8uY29uZmlndXJhdG9yVHlwZVxuICAgICAgICApXG4gICAgICA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0SGlkZGVuQ29uZmlndXJhdGlvbkluZm9JZChpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2N4LWNvbmZpZ3VyYXRpb24taGlkZGVuLWluZm8tJyArIGluZGV4LnRvU3RyaW5nKCk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJvcmRlckVudHJ5JCB8IGFzeW5jIGFzIG9yZGVyRW50cnlcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzQXR0cmlidXRlQmFzZWRDb25maWd1cmF0b3Iob3JkZXJFbnRyeSlcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzU3RhdHVzKG9yZGVyRW50cnkpXCI+XG4gICAgICA8c3BhblxuICAgICAgICAqbmdJZj1cIm9yZGVyRW50cnkuY29uZmlndXJhdGlvbkluZm9zLmxlbmd0aCA+IDBcIlxuICAgICAgICBjbGFzcz1cImN4LWludHJvIGN4LXZpc3VhbGx5LWhpZGRlblwiXG4gICAgICA+XG4gICAgICAgIHt7ICdjb25maWd1cmF0b3IuYTExeS5jYXJ0RW50cnlJbmZvSW50cm8nIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxkaXZcbiAgICAgICAgKm5nRm9yPVwibGV0IGluZm8gb2Ygb3JkZXJFbnRyeS5jb25maWd1cmF0aW9uSW5mb3M7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICBjbGFzcz1cImN4LWNvbmZpZ3VyYXRpb24taW5mb1wiXG4gICAgICAgIGF0dHIuYXJpYS1kZXNjcmliZWRieT1cInt7IGdldEhpZGRlbkNvbmZpZ3VyYXRpb25JbmZvSWQoaSkgfX1cIlxuICAgICAgPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGlkPVwie3sgZ2V0SGlkZGVuQ29uZmlndXJhdGlvbkluZm9JZChpKSB9fVwiXG4gICAgICAgICAgY2xhc3M9XCJjeC12aXN1YWxseS1oaWRkZW5cIlxuICAgICAgICA+XG4gICAgICAgICAge3tcbiAgICAgICAgICAgICdjb25maWd1cmF0b3IuYTExeS5jYXJ0RW50cnlJbmZvJ1xuICAgICAgICAgICAgICB8IGN4VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogaW5mby5jb25maWd1cmF0aW9uTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpbmZvLmNvbmZpZ3VyYXRpb25WYWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN4LWxhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAge3sgaW5mbz8uY29uZmlndXJhdGlvbkxhYmVsIH19OlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN4LXZhbHVlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAge3sgaW5mbz8uY29uZmlndXJhdGlvblZhbHVlIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8Y3gtY29uZmlndXJlLWNhcnQtZW50cnlcbiAgICAgICpuZ0lmPVwiXG4gICAgICAgIChzaG91bGRTaG93QnV0dG9uJCB8IGFzeW5jKSAmJlxuICAgICAgICAgIG9yZGVyRW50cnk/LnByb2R1Y3Q/LmNvbmZpZ3VyYWJsZSAmJlxuICAgICAgICAgIHF1YW50aXR5Q29udHJvbCQgfCBhc3luYyBhcyBxdWFudGl0eUNvbnRyb2xcbiAgICAgIFwiXG4gICAgICBbY2FydEVudHJ5XT1cIm9yZGVyRW50cnlcIlxuICAgICAgW3JlYWRPbmx5XT1cInJlYWRvbmx5JCB8IGFzeW5jXCJcbiAgICAgIFttc2dCYW5uZXJdPVwiZmFsc2VcIlxuICAgICAgW2Rpc2FibGVkXT1cInF1YW50aXR5Q29udHJvbC5kaXNhYmxlZFwiXG4gICAgPjwvY3gtY29uZmlndXJlLWNhcnQtZW50cnk+XG4gIDwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG4iXX0=