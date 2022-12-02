/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { InjectionToken } from '@angular/core';
import * as fromBaseSite from './base-site.reducer';
import * as fromCurrencies from './currencies.reducer';
import * as fromLanguages from './languages.reducer';
export function getReducers() {
    return {
        languages: fromLanguages.reducer,
        currencies: fromCurrencies.reducer,
        baseSite: fromBaseSite.reducer,
    };
}
export const reducerToken = new InjectionToken('SiteContextReducers');
export const reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9zaXRlLWNvbnRleHQvc3RvcmUvcmVkdWNlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFHekQsT0FBTyxLQUFLLFlBQVksTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEtBQUssY0FBYyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sS0FBSyxhQUFhLE1BQU0scUJBQXFCLENBQUM7QUFFckQsTUFBTSxVQUFVLFdBQVc7SUFDekIsT0FBTztRQUNMLFNBQVMsRUFBRSxhQUFhLENBQUMsT0FBTztRQUNoQyxVQUFVLEVBQUUsY0FBYyxDQUFDLE9BQU87UUFDbEMsUUFBUSxFQUFFLFlBQVksQ0FBQyxPQUFPO0tBQy9CLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUN2QixJQUFJLGNBQWMsQ0FBcUMscUJBQXFCLENBQUMsQ0FBQztBQUVoRixNQUFNLENBQUMsTUFBTSxlQUFlLEdBQWE7SUFDdkMsT0FBTyxFQUFFLFlBQVk7SUFDckIsVUFBVSxFQUFFLFdBQVc7Q0FDeEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uUmVkdWNlck1hcCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0U3RhdGUgfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tQmFzZVNpdGUgZnJvbSAnLi9iYXNlLXNpdGUucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tQ3VycmVuY2llcyBmcm9tICcuL2N1cnJlbmNpZXMucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tTGFuZ3VhZ2VzIGZyb20gJy4vbGFuZ3VhZ2VzLnJlZHVjZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxTaXRlQ29udGV4dFN0YXRlLCBhbnk+IHtcbiAgcmV0dXJuIHtcbiAgICBsYW5ndWFnZXM6IGZyb21MYW5ndWFnZXMucmVkdWNlcixcbiAgICBjdXJyZW5jaWVzOiBmcm9tQ3VycmVuY2llcy5yZWR1Y2VyLFxuICAgIGJhc2VTaXRlOiBmcm9tQmFzZVNpdGUucmVkdWNlcixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJUb2tlbjogSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxTaXRlQ29udGV4dFN0YXRlPj4gPVxuICBuZXcgSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxTaXRlQ29udGV4dFN0YXRlPj4oJ1NpdGVDb250ZXh0UmVkdWNlcnMnKTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IHJlZHVjZXJUb2tlbixcbiAgdXNlRmFjdG9yeTogZ2V0UmVkdWNlcnMsXG59O1xuIl19