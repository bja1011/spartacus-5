/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
export const CHANGE_NEXT_PAGE_CONTEXT = '[Router] Change Next PageContext';
export class ChangeNextPageContext {
    constructor(payload) {
        this.payload = payload;
        this.type = CHANGE_NEXT_PAGE_CONTEXT;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3JvdXRpbmcvc3RvcmUvYWN0aW9ucy9yb3V0ZXIuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFLSCxNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBRyxrQ0FBa0MsQ0FBQztBQUUzRSxNQUFNLE9BQU8scUJBQXFCO0lBRWhDLFlBQW1CLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFEOUIsU0FBSSxHQUFHLHdCQUF3QixDQUFDO0lBQ0MsQ0FBQztDQUM1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9tb2RlbHMvcGFnZS1jb250ZXh0Lm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IENIQU5HRV9ORVhUX1BBR0VfQ09OVEVYVCA9ICdbUm91dGVyXSBDaGFuZ2UgTmV4dCBQYWdlQ29udGV4dCc7XG5cbmV4cG9ydCBjbGFzcyBDaGFuZ2VOZXh0UGFnZUNvbnRleHQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ0hBTkdFX05FWFRfUEFHRV9DT05URVhUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZUNvbnRleHQpIHt9XG59XG5cbmV4cG9ydCB0eXBlIFJvdXRpbmdBY3Rpb24gPSBDaGFuZ2VOZXh0UGFnZUNvbnRleHQ7XG4iXX0=