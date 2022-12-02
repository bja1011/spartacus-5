/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { QuickOrderFacade } from '@spartacus/cart/quick-order/root';
import { QuickOrderService } from '../services/quick-order.service';
export const facadeProviders = [
    QuickOrderService,
    {
        provide: QuickOrderFacade,
        useExisting: QuickOrderService,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjYWRlLXByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9jYXJ0L3F1aWNrLW9yZGVyL2NvcmUvZmFjYWRlL2ZhY2FkZS1wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUdILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXBFLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBZTtJQUN6QyxpQkFBaUI7SUFDakI7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSxpQkFBaUI7S0FDL0I7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFF1aWNrT3JkZXJGYWNhZGUgfSBmcm9tICdAc3BhcnRhY3VzL2NhcnQvcXVpY2stb3JkZXIvcm9vdCc7XG5pbXBvcnQgeyBRdWlja09yZGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3F1aWNrLW9yZGVyLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgZmFjYWRlUHJvdmlkZXJzOiBQcm92aWRlcltdID0gW1xuICBRdWlja09yZGVyU2VydmljZSxcbiAge1xuICAgIHByb3ZpZGU6IFF1aWNrT3JkZXJGYWNhZGUsXG4gICAgdXNlRXhpc3Rpbmc6IFF1aWNrT3JkZXJTZXJ2aWNlLFxuICB9LFxuXTtcbiJdfQ==