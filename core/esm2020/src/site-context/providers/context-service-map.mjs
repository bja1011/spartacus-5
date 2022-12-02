/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { BaseSiteService } from '../facade/base-site.service';
import { CurrencyService } from '../facade/currency.service';
import { LanguageService } from '../facade/language.service';
import { BASE_SITE_CONTEXT_ID, CURRENCY_CONTEXT_ID, LANGUAGE_CONTEXT_ID, } from './context-ids';
export class ContextServiceMap {
}
export function serviceMapFactory() {
    return {
        [LANGUAGE_CONTEXT_ID]: LanguageService,
        [CURRENCY_CONTEXT_ID]: CurrencyService,
        [BASE_SITE_CONTEXT_ID]: BaseSiteService,
    };
}
export const contextServiceMapProvider = {
    provide: ContextServiceMap,
    useFactory: serviceMapFactory,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1zZXJ2aWNlLW1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3NpdGUtY29udGV4dC9wcm92aWRlcnMvY29udGV4dC1zZXJ2aWNlLW1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBR0gsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFN0QsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsbUJBQW1CLEdBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE1BQU0sT0FBZ0IsaUJBQWlCO0NBRXRDO0FBRUQsTUFBTSxVQUFVLGlCQUFpQjtJQUMvQixPQUFPO1FBQ0wsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLGVBQWU7UUFDdEMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLGVBQWU7UUFDdEMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLGVBQWU7S0FDeEMsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBYTtJQUNqRCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFVBQVUsRUFBRSxpQkFBaUI7Q0FDOUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IFByb3ZpZGVyLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlU2l0ZVNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvYmFzZS1zaXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VycmVuY3lTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2N1cnJlbmN5LnNlcnZpY2UnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2xhbmd1YWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHQgfSBmcm9tICcuLi9mYWNhZGUvc2l0ZS1jb250ZXh0LmludGVyZmFjZSc7XG5pbXBvcnQge1xuICBCQVNFX1NJVEVfQ09OVEVYVF9JRCxcbiAgQ1VSUkVOQ1lfQ09OVEVYVF9JRCxcbiAgTEFOR1VBR0VfQ09OVEVYVF9JRCxcbn0gZnJvbSAnLi9jb250ZXh0LWlkcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb250ZXh0U2VydmljZU1hcCB7XG4gIFtjb250ZXh0OiBzdHJpbmddOiBUeXBlPFNpdGVDb250ZXh0PGFueT4+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VydmljZU1hcEZhY3RvcnkoKSB7XG4gIHJldHVybiB7XG4gICAgW0xBTkdVQUdFX0NPTlRFWFRfSURdOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgW0NVUlJFTkNZX0NPTlRFWFRfSURdOiBDdXJyZW5jeVNlcnZpY2UsXG4gICAgW0JBU0VfU0lURV9DT05URVhUX0lEXTogQmFzZVNpdGVTZXJ2aWNlLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgY29udGV4dFNlcnZpY2VNYXBQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IENvbnRleHRTZXJ2aWNlTWFwLFxuICB1c2VGYWN0b3J5OiBzZXJ2aWNlTWFwRmFjdG9yeSxcbn07XG4iXX0=