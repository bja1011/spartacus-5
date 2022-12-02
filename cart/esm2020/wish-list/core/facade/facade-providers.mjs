/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { WishListFacade } from '@spartacus/cart/wish-list/root';
import { WishListService } from './wish-list.service';
export const facadeProviders = [
    WishListService,
    {
        provide: WishListFacade,
        useExisting: WishListService,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjYWRlLXByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9jYXJ0L3dpc2gtbGlzdC9jb3JlL2ZhY2FkZS9mYWNhZGUtcHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFHSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBZTtJQUN6QyxlQUFlO0lBQ2Y7UUFDRSxPQUFPLEVBQUUsY0FBYztRQUN2QixXQUFXLEVBQUUsZUFBZTtLQUM3QjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2lzaExpc3RGYWNhZGUgfSBmcm9tICdAc3BhcnRhY3VzL2NhcnQvd2lzaC1saXN0L3Jvb3QnO1xuaW1wb3J0IHsgV2lzaExpc3RTZXJ2aWNlIH0gZnJvbSAnLi93aXNoLWxpc3Quc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBmYWNhZGVQcm92aWRlcnM6IFByb3ZpZGVyW10gPSBbXG4gIFdpc2hMaXN0U2VydmljZSxcbiAge1xuICAgIHByb3ZpZGU6IFdpc2hMaXN0RmFjYWRlLFxuICAgIHVzZUV4aXN0aW5nOiBXaXNoTGlzdFNlcnZpY2UsXG4gIH0sXG5dO1xuIl19