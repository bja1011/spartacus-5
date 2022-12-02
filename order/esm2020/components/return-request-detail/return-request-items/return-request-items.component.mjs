/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../return-request.service";
import * as i2 from "@angular/common";
import * as i3 from "@spartacus/storefront";
import * as i4 from "@spartacus/core";
export class ReturnRequestItemsComponent {
    constructor(returnRequestService) {
        this.returnRequestService = returnRequestService;
        this.returnRequest$ = this.returnRequestService.getReturnRequest();
    }
}
ReturnRequestItemsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ReturnRequestItemsComponent, deps: [{ token: i1.ReturnRequestService }], target: i0.ɵɵFactoryTarget.Component });
ReturnRequestItemsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: ReturnRequestItemsComponent, selector: "cx-return-request-items", ngImport: i0, template: "<table\n  class=\"cx-return-request-items\"\n  *ngIf=\"returnRequest$ | async as returnRequest\"\n>\n  <caption class=\"cx-visually-hidden\">\n    {{\n      'returnRequest.caption' | cxTranslate\n    }}\n  </caption>\n  <thead>\n    <tr>\n      <th role=\"columnheader\" class=\"cx-item-list-desc\">\n        {{ 'returnRequest.item' | cxTranslate }}\n      </th>\n      <th role=\"columnheader\" class=\"cx-item-list-price\">\n        {{ 'returnRequest.itemPrice' | cxTranslate }}\n      </th>\n      <th role=\"columnheader\" class=\"cx-item-list-qty\">\n        {{ 'returnRequest.returnQty' | cxTranslate }}\n      </th>\n      <th role=\"columnheader\" class=\"cx-item-list-total\">\n        {{ 'returnRequest.total' | cxTranslate }}\n      </th>\n    </tr>\n  </thead>\n\n  <tbody class=\"cx-item-list-items\">\n    <!-- TODO: This should be a separate component-->\n    <tr\n      class=\"cx-item-list-row cx-return-request-item-row\"\n      *ngFor=\"let returnEntry of returnRequest.returnEntries; let i = index\"\n    >\n      <td role=\"cell\">\n        <!-- Item Image -->\n        <div class=\"cx-table-item-container\">\n          <cx-media\n            [container]=\"returnEntry.orderEntry?.product.images?.PRIMARY\"\n            format=\"thumbnail\"\n          ></cx-media>\n          <!-- Item Description -->\n          <div class=\"cx-info\">\n            <div *ngIf=\"returnEntry.orderEntry?.product.name\" class=\"cx-name\">\n              {{ returnEntry.orderEntry?.product.name }}\n            </div>\n            <div *ngIf=\"returnEntry.orderEntry?.product.code\" class=\"cx-code\">\n              {{ 'cartItems.id' | cxTranslate }}\n              {{ returnEntry.orderEntry?.product.code }}\n            </div>\n            <!-- Variants -->\n            <div\n              *ngFor=\"\n                let variant of (returnEntry.orderEntry?.product.baseOptions)[0]\n                  ?.selected?.variantOptionQualifiers\n              \"\n              class=\"cx-property\"\n            >\n              <div class=\"cx-label\" *ngIf=\"variant.name\">\n                {{ variant.name }}:\n              </div>\n              <div class=\"cx-value\" *ngIf=\"variant.value\">\n                {{ variant.value }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </td>\n      <!-- Item Price -->\n      <td\n        role=\"cell\"\n        class=\"cx-price\"\n        *ngIf=\"returnEntry.orderEntry?.basePrice\"\n      >\n        <div class=\"cx-mobile-header\">\n          {{ 'returnRequest.itemPrice' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">\n          {{ returnEntry.orderEntry?.basePrice?.formattedValue }}\n        </div>\n      </td>\n      <!-- return Quantity -->\n      <td role=\"cell\" class=\"cx-quantity\">\n        <div class=\"cx-mobile-header\">\n          {{ 'returnRequest.returnQty' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">\n          {{ returnEntry.expectedQuantity }}\n        </div>\n      </td>\n      <!-- Total Price -->\n      <td role=\"cell\" class=\"cx-total\">\n        <div class=\"cx-mobile-header\">\n          {{ 'returnRequest.total' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">\n          {{ returnEntry.refundAmount?.formattedValue }}\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>\n", dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.MediaComponent, selector: "cx-media", inputs: ["container", "format", "alt", "role", "loading"], outputs: ["loaded"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "pipe", type: i4.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ReturnRequestItemsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-return-request-items', changeDetection: ChangeDetectionStrategy.OnPush, template: "<table\n  class=\"cx-return-request-items\"\n  *ngIf=\"returnRequest$ | async as returnRequest\"\n>\n  <caption class=\"cx-visually-hidden\">\n    {{\n      'returnRequest.caption' | cxTranslate\n    }}\n  </caption>\n  <thead>\n    <tr>\n      <th role=\"columnheader\" class=\"cx-item-list-desc\">\n        {{ 'returnRequest.item' | cxTranslate }}\n      </th>\n      <th role=\"columnheader\" class=\"cx-item-list-price\">\n        {{ 'returnRequest.itemPrice' | cxTranslate }}\n      </th>\n      <th role=\"columnheader\" class=\"cx-item-list-qty\">\n        {{ 'returnRequest.returnQty' | cxTranslate }}\n      </th>\n      <th role=\"columnheader\" class=\"cx-item-list-total\">\n        {{ 'returnRequest.total' | cxTranslate }}\n      </th>\n    </tr>\n  </thead>\n\n  <tbody class=\"cx-item-list-items\">\n    <!-- TODO: This should be a separate component-->\n    <tr\n      class=\"cx-item-list-row cx-return-request-item-row\"\n      *ngFor=\"let returnEntry of returnRequest.returnEntries; let i = index\"\n    >\n      <td role=\"cell\">\n        <!-- Item Image -->\n        <div class=\"cx-table-item-container\">\n          <cx-media\n            [container]=\"returnEntry.orderEntry?.product.images?.PRIMARY\"\n            format=\"thumbnail\"\n          ></cx-media>\n          <!-- Item Description -->\n          <div class=\"cx-info\">\n            <div *ngIf=\"returnEntry.orderEntry?.product.name\" class=\"cx-name\">\n              {{ returnEntry.orderEntry?.product.name }}\n            </div>\n            <div *ngIf=\"returnEntry.orderEntry?.product.code\" class=\"cx-code\">\n              {{ 'cartItems.id' | cxTranslate }}\n              {{ returnEntry.orderEntry?.product.code }}\n            </div>\n            <!-- Variants -->\n            <div\n              *ngFor=\"\n                let variant of (returnEntry.orderEntry?.product.baseOptions)[0]\n                  ?.selected?.variantOptionQualifiers\n              \"\n              class=\"cx-property\"\n            >\n              <div class=\"cx-label\" *ngIf=\"variant.name\">\n                {{ variant.name }}:\n              </div>\n              <div class=\"cx-value\" *ngIf=\"variant.value\">\n                {{ variant.value }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </td>\n      <!-- Item Price -->\n      <td\n        role=\"cell\"\n        class=\"cx-price\"\n        *ngIf=\"returnEntry.orderEntry?.basePrice\"\n      >\n        <div class=\"cx-mobile-header\">\n          {{ 'returnRequest.itemPrice' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">\n          {{ returnEntry.orderEntry?.basePrice?.formattedValue }}\n        </div>\n      </td>\n      <!-- return Quantity -->\n      <td role=\"cell\" class=\"cx-quantity\">\n        <div class=\"cx-mobile-header\">\n          {{ 'returnRequest.returnQty' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">\n          {{ returnEntry.expectedQuantity }}\n        </div>\n      </td>\n      <!-- Total Price -->\n      <td role=\"cell\" class=\"cx-total\">\n        <div class=\"cx-mobile-header\">\n          {{ 'returnRequest.total' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">\n          {{ returnEntry.refundAmount?.formattedValue }}\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ReturnRequestService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLXJlcXVlc3QtaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL29yZGVyL2NvbXBvbmVudHMvcmV0dXJuLXJlcXVlc3QtZGV0YWlsL3JldHVybi1yZXF1ZXN0LWl0ZW1zL3JldHVybi1yZXF1ZXN0LWl0ZW1zLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmRlci9jb21wb25lbnRzL3JldHVybi1yZXF1ZXN0LWRldGFpbC9yZXR1cm4tcmVxdWVzdC1pdGVtcy9yZXR1cm4tcmVxdWVzdC1pdGVtcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBVW5FLE1BQU0sT0FBTywyQkFBMkI7SUFDdEMsWUFBc0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFFaEUsbUJBQWMsR0FDWixJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUhvQixDQUFDOzt3SEFEekQsMkJBQTJCOzRHQUEzQiwyQkFBMkIsK0RDaEJ4QyxzeUdBb0dBOzJGRHBGYSwyQkFBMkI7a0JBTHZDLFNBQVM7K0JBQ0UseUJBQXlCLG1CQUVsQix1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmV0dXJuUmVxdWVzdCB9IGZyb20gJ0BzcGFydGFjdXMvb3JkZXIvcm9vdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSZXR1cm5SZXF1ZXN0U2VydmljZSB9IGZyb20gJy4uL3JldHVybi1yZXF1ZXN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1yZXR1cm4tcmVxdWVzdC1pdGVtcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXR1cm4tcmVxdWVzdC1pdGVtcy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBSZXR1cm5SZXF1ZXN0SXRlbXNDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmV0dXJuUmVxdWVzdFNlcnZpY2U6IFJldHVyblJlcXVlc3RTZXJ2aWNlKSB7fVxuXG4gIHJldHVyblJlcXVlc3QkOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3Q+ID1cbiAgICB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlLmdldFJldHVyblJlcXVlc3QoKTtcbn1cbiIsIjx0YWJsZVxuICBjbGFzcz1cImN4LXJldHVybi1yZXF1ZXN0LWl0ZW1zXCJcbiAgKm5nSWY9XCJyZXR1cm5SZXF1ZXN0JCB8IGFzeW5jIGFzIHJldHVyblJlcXVlc3RcIlxuPlxuICA8Y2FwdGlvbiBjbGFzcz1cImN4LXZpc3VhbGx5LWhpZGRlblwiPlxuICAgIHt7XG4gICAgICAncmV0dXJuUmVxdWVzdC5jYXB0aW9uJyB8IGN4VHJhbnNsYXRlXG4gICAgfX1cbiAgPC9jYXB0aW9uPlxuICA8dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgPHRoIHJvbGU9XCJjb2x1bW5oZWFkZXJcIiBjbGFzcz1cImN4LWl0ZW0tbGlzdC1kZXNjXCI+XG4gICAgICAgIHt7ICdyZXR1cm5SZXF1ZXN0Lml0ZW0nIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgIDwvdGg+XG4gICAgICA8dGggcm9sZT1cImNvbHVtbmhlYWRlclwiIGNsYXNzPVwiY3gtaXRlbS1saXN0LXByaWNlXCI+XG4gICAgICAgIHt7ICdyZXR1cm5SZXF1ZXN0Lml0ZW1QcmljZScgfCBjeFRyYW5zbGF0ZSB9fVxuICAgICAgPC90aD5cbiAgICAgIDx0aCByb2xlPVwiY29sdW1uaGVhZGVyXCIgY2xhc3M9XCJjeC1pdGVtLWxpc3QtcXR5XCI+XG4gICAgICAgIHt7ICdyZXR1cm5SZXF1ZXN0LnJldHVyblF0eScgfCBjeFRyYW5zbGF0ZSB9fVxuICAgICAgPC90aD5cbiAgICAgIDx0aCByb2xlPVwiY29sdW1uaGVhZGVyXCIgY2xhc3M9XCJjeC1pdGVtLWxpc3QtdG90YWxcIj5cbiAgICAgICAge3sgJ3JldHVyblJlcXVlc3QudG90YWwnIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgIDwvdGg+XG4gICAgPC90cj5cbiAgPC90aGVhZD5cblxuICA8dGJvZHkgY2xhc3M9XCJjeC1pdGVtLWxpc3QtaXRlbXNcIj5cbiAgICA8IS0tIFRPRE86IFRoaXMgc2hvdWxkIGJlIGEgc2VwYXJhdGUgY29tcG9uZW50LS0+XG4gICAgPHRyXG4gICAgICBjbGFzcz1cImN4LWl0ZW0tbGlzdC1yb3cgY3gtcmV0dXJuLXJlcXVlc3QtaXRlbS1yb3dcIlxuICAgICAgKm5nRm9yPVwibGV0IHJldHVybkVudHJ5IG9mIHJldHVyblJlcXVlc3QucmV0dXJuRW50cmllczsgbGV0IGkgPSBpbmRleFwiXG4gICAgPlxuICAgICAgPHRkIHJvbGU9XCJjZWxsXCI+XG4gICAgICAgIDwhLS0gSXRlbSBJbWFnZSAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN4LXRhYmxlLWl0ZW0tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGN4LW1lZGlhXG4gICAgICAgICAgICBbY29udGFpbmVyXT1cInJldHVybkVudHJ5Lm9yZGVyRW50cnk/LnByb2R1Y3QuaW1hZ2VzPy5QUklNQVJZXCJcbiAgICAgICAgICAgIGZvcm1hdD1cInRodW1ibmFpbFwiXG4gICAgICAgICAgPjwvY3gtbWVkaWE+XG4gICAgICAgICAgPCEtLSBJdGVtIERlc2NyaXB0aW9uIC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjeC1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwicmV0dXJuRW50cnkub3JkZXJFbnRyeT8ucHJvZHVjdC5uYW1lXCIgY2xhc3M9XCJjeC1uYW1lXCI+XG4gICAgICAgICAgICAgIHt7IHJldHVybkVudHJ5Lm9yZGVyRW50cnk/LnByb2R1Y3QubmFtZSB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwicmV0dXJuRW50cnkub3JkZXJFbnRyeT8ucHJvZHVjdC5jb2RlXCIgY2xhc3M9XCJjeC1jb2RlXCI+XG4gICAgICAgICAgICAgIHt7ICdjYXJ0SXRlbXMuaWQnIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAge3sgcmV0dXJuRW50cnkub3JkZXJFbnRyeT8ucHJvZHVjdC5jb2RlIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gVmFyaWFudHMgLS0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICpuZ0Zvcj1cIlxuICAgICAgICAgICAgICAgIGxldCB2YXJpYW50IG9mIChyZXR1cm5FbnRyeS5vcmRlckVudHJ5Py5wcm9kdWN0LmJhc2VPcHRpb25zKVswXVxuICAgICAgICAgICAgICAgICAgPy5zZWxlY3RlZD8udmFyaWFudE9wdGlvblF1YWxpZmllcnNcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJjeC1wcm9wZXJ0eVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjeC1sYWJlbFwiICpuZ0lmPVwidmFyaWFudC5uYW1lXCI+XG4gICAgICAgICAgICAgICAge3sgdmFyaWFudC5uYW1lIH19OlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN4LXZhbHVlXCIgKm5nSWY9XCJ2YXJpYW50LnZhbHVlXCI+XG4gICAgICAgICAgICAgICAge3sgdmFyaWFudC52YWx1ZSB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGQ+XG4gICAgICA8IS0tIEl0ZW0gUHJpY2UgLS0+XG4gICAgICA8dGRcbiAgICAgICAgcm9sZT1cImNlbGxcIlxuICAgICAgICBjbGFzcz1cImN4LXByaWNlXCJcbiAgICAgICAgKm5nSWY9XCJyZXR1cm5FbnRyeS5vcmRlckVudHJ5Py5iYXNlUHJpY2VcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3gtbW9iaWxlLWhlYWRlclwiPlxuICAgICAgICAgIHt7ICdyZXR1cm5SZXF1ZXN0Lml0ZW1QcmljZScgfCBjeFRyYW5zbGF0ZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN4LXZhbHVlXCI+XG4gICAgICAgICAge3sgcmV0dXJuRW50cnkub3JkZXJFbnRyeT8uYmFzZVByaWNlPy5mb3JtYXR0ZWRWYWx1ZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGQ+XG4gICAgICA8IS0tIHJldHVybiBRdWFudGl0eSAtLT5cbiAgICAgIDx0ZCByb2xlPVwiY2VsbFwiIGNsYXNzPVwiY3gtcXVhbnRpdHlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN4LW1vYmlsZS1oZWFkZXJcIj5cbiAgICAgICAgICB7eyAncmV0dXJuUmVxdWVzdC5yZXR1cm5RdHknIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjeC12YWx1ZVwiPlxuICAgICAgICAgIHt7IHJldHVybkVudHJ5LmV4cGVjdGVkUXVhbnRpdHkgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RkPlxuICAgICAgPCEtLSBUb3RhbCBQcmljZSAtLT5cbiAgICAgIDx0ZCByb2xlPVwiY2VsbFwiIGNsYXNzPVwiY3gtdG90YWxcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN4LW1vYmlsZS1oZWFkZXJcIj5cbiAgICAgICAgICB7eyAncmV0dXJuUmVxdWVzdC50b3RhbCcgfCBjeFRyYW5zbGF0ZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN4LXZhbHVlXCI+XG4gICAgICAgICAge3sgcmV0dXJuRW50cnkucmVmdW5kQW1vdW50Py5mb3JtYXR0ZWRWYWx1ZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgPC90Ym9keT5cbjwvdGFibGU+XG4iXX0=