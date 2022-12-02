/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
export class MerchandisingCarouselViewedEvent {
    constructor(carouselEvent, productSkus) {
        this.name = 'CarouselViewed';
        this.data = {
            ...carouselEvent,
            productSkus,
        };
    }
}
export class MerchandisingCarouselClickedEvent {
    constructor(carouselEvent, slotId, sku, imageUrl) {
        this.name = 'CarouselClicked';
        this.data = {
            ...carouselEvent,
            slotId,
            sku,
            imageUrl,
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2hhbmRpc2luZy1jYXJvdXNlbC1ldmVudHMubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9pbnRlZ3JhdGlvbi1saWJzL2Nkcy9zcmMvbWVyY2hhbmRpc2luZy9jbXMtY29tcG9uZW50cy9tZXJjaGFuZGlzaW5nLWNhcm91c2VsL21vZGVsL21lcmNoYW5kaXNpbmctY2Fyb3VzZWwtZXZlbnRzLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFZSCxNQUFNLE9BQU8sZ0NBQWdDO0lBRzNDLFlBQVksYUFBNEIsRUFBRSxXQUFxQjtRQUYvRCxTQUFJLEdBQUcsZ0JBQWdCLENBQUM7UUFHdEIsSUFBSSxDQUFDLElBQUksR0FBRztZQUNWLEdBQUcsYUFBYTtZQUNoQixXQUFXO1NBQ1osQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxpQ0FBaUM7SUFHNUMsWUFDRSxhQUE0QixFQUM1QixNQUFjLEVBQ2QsR0FBVyxFQUNYLFFBQWdCO1FBTmxCLFNBQUksR0FBRyxpQkFBaUIsQ0FBQztRQVF2QixJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1YsR0FBRyxhQUFhO1lBQ2hCLE1BQU07WUFDTixHQUFHO1lBQ0gsUUFBUTtTQUNULENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBQcm9maWxlVGFnUHVzaEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJvZmlsZXRhZy9pbmRleCc7XG5pbXBvcnQgeyBNZXJjaGFuZGlzaW5nTWV0YWRhdGEgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9pbmRleCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2Fyb3VzZWxFdmVudCB7XG4gIGNhcm91c2VsSWQ6IHN0cmluZztcbiAgY2Fyb3VzZWxOYW1lOiBzdHJpbmc7XG4gIHN0cmF0ZWd5SWQ6IHN0cmluZztcbiAgbWV0YWRhdGE/OiBNZXJjaGFuZGlzaW5nTWV0YWRhdGE7XG59XG5cbmV4cG9ydCBjbGFzcyBNZXJjaGFuZGlzaW5nQ2Fyb3VzZWxWaWV3ZWRFdmVudCBpbXBsZW1lbnRzIFByb2ZpbGVUYWdQdXNoRXZlbnQge1xuICBuYW1lID0gJ0Nhcm91c2VsVmlld2VkJztcbiAgZGF0YTogYW55O1xuICBjb25zdHJ1Y3RvcihjYXJvdXNlbEV2ZW50OiBDYXJvdXNlbEV2ZW50LCBwcm9kdWN0U2t1czogc3RyaW5nW10pIHtcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAuLi5jYXJvdXNlbEV2ZW50LFxuICAgICAgcHJvZHVjdFNrdXMsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWVyY2hhbmRpc2luZ0Nhcm91c2VsQ2xpY2tlZEV2ZW50IGltcGxlbWVudHMgUHJvZmlsZVRhZ1B1c2hFdmVudCB7XG4gIG5hbWUgPSAnQ2Fyb3VzZWxDbGlja2VkJztcbiAgZGF0YTogYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBjYXJvdXNlbEV2ZW50OiBDYXJvdXNlbEV2ZW50LFxuICAgIHNsb3RJZDogc3RyaW5nLFxuICAgIHNrdTogc3RyaW5nLFxuICAgIGltYWdlVXJsOiBzdHJpbmdcbiAgKSB7XG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgLi4uY2Fyb3VzZWxFdmVudCxcbiAgICAgIHNsb3RJZCxcbiAgICAgIHNrdSxcbiAgICAgIGltYWdlVXJsLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==