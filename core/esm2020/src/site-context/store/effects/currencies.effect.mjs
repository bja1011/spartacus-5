/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { bufferCount, catchError, exhaustMap, filter, map, } from 'rxjs/operators';
import { normalizeHttpError } from '../../../util/normalize-http-error';
import { SiteContextActions } from '../actions/index';
import { getActiveCurrency } from '../selectors/currencies.selectors';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/effects";
import * as i2 from "../../connectors/site.connector";
import * as i3 from "@ngrx/store";
export class CurrenciesEffects {
    constructor(actions$, siteConnector, state) {
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.state = state;
        this.loadCurrencies$ = createEffect(() => this.actions$.pipe(ofType(SiteContextActions.LOAD_CURRENCIES), exhaustMap(() => {
            return this.siteConnector.getCurrencies().pipe(map((currencies) => new SiteContextActions.LoadCurrenciesSuccess(currencies)), catchError((error) => of(new SiteContextActions.LoadCurrenciesFail(normalizeHttpError(error)))));
        })));
        this.activateCurrency$ = createEffect(() => this.state.select(getActiveCurrency).pipe(bufferCount(2, 1), 
        // avoid dispatching `change` action when we're just setting the initial value:
        filter(([previous]) => !!previous), map(([previous, current]) => new SiteContextActions.CurrencyChange({ previous, current }))));
    }
}
CurrenciesEffects.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: CurrenciesEffects, deps: [{ token: i1.Actions }, { token: i2.SiteConnector }, { token: i3.Store }], target: i0.ɵɵFactoryTarget.Injectable });
CurrenciesEffects.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: CurrenciesEffects });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: CurrenciesEffects, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Actions }, { type: i2.SiteConnector }, { type: i3.Store }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5lZmZlY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9zaXRlLWNvbnRleHQvc3RvcmUvZWZmZWN0cy9jdXJyZW5jaWVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQVcsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFVBQVUsRUFDVixNQUFNLEVBQ04sR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7O0FBSXRFLE1BQU0sT0FBTyxpQkFBaUI7SUF1QzVCLFlBQ1UsUUFBaUIsRUFDakIsYUFBNEIsRUFDNUIsS0FBa0M7UUFGbEMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixVQUFLLEdBQUwsS0FBSyxDQUE2QjtRQXpDNUMsb0JBQWUsR0FHWCxZQUFZLENBQUMsR0FBRyxFQUFFLENBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLEVBQzFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUM1QyxHQUFHLENBQ0QsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUNiLElBQUksa0JBQWtCLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQzNELEVBQ0QsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDbkIsRUFBRSxDQUNBLElBQUksa0JBQWtCLENBQUMsa0JBQWtCLENBQ3ZDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUMxQixDQUNGLENBQ0YsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FDRixDQUFDO1FBRUYsc0JBQWlCLEdBQ2YsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FDdkMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFakIsK0VBQStFO1FBQy9FLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFDbEMsR0FBRyxDQUNELENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUN0QixJQUFJLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUMvRCxDQUNGLENBQ0YsQ0FBQztJQU1ELENBQUM7OzhHQTNDTyxpQkFBaUI7a0hBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgY3JlYXRlRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGJ1ZmZlckNvdW50LFxuICBjYXRjaEVycm9yLFxuICBleGhhdXN0TWFwLFxuICBmaWx0ZXIsXG4gIG1hcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbm9ybWFsaXplSHR0cEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9ub3JtYWxpemUtaHR0cC1lcnJvcic7XG5pbXBvcnQgeyBTaXRlQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zaXRlLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IGdldEFjdGl2ZUN1cnJlbmN5IH0gZnJvbSAnLi4vc2VsZWN0b3JzL2N1cnJlbmNpZXMuc2VsZWN0b3JzJztcbmltcG9ydCB7IFN0YXRlV2l0aFNpdGVDb250ZXh0IH0gZnJvbSAnLi4vc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3VycmVuY2llc0VmZmVjdHMge1xuICBsb2FkQ3VycmVuY2llcyQ6IE9ic2VydmFibGU8XG4gICAgfCBTaXRlQ29udGV4dEFjdGlvbnMuTG9hZEN1cnJlbmNpZXNTdWNjZXNzXG4gICAgfCBTaXRlQ29udGV4dEFjdGlvbnMuTG9hZEN1cnJlbmNpZXNGYWlsXG4gID4gPSBjcmVhdGVFZmZlY3QoKCkgPT5cbiAgICB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICBvZlR5cGUoU2l0ZUNvbnRleHRBY3Rpb25zLkxPQURfQ1VSUkVOQ0lFUyksXG4gICAgICBleGhhdXN0TWFwKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l0ZUNvbm5lY3Rvci5nZXRDdXJyZW5jaWVzKCkucGlwZShcbiAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAoY3VycmVuY2llcykgPT5cbiAgICAgICAgICAgICAgbmV3IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkQ3VycmVuY2llc1N1Y2Nlc3MoY3VycmVuY2llcylcbiAgICAgICAgICApLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBTaXRlQ29udGV4dEFjdGlvbnMuTG9hZEN1cnJlbmNpZXNGYWlsKFxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUh0dHBFcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKVxuICApO1xuXG4gIGFjdGl2YXRlQ3VycmVuY3kkOiBPYnNlcnZhYmxlPFNpdGVDb250ZXh0QWN0aW9ucy5DdXJyZW5jeUNoYW5nZT4gPVxuICAgIGNyZWF0ZUVmZmVjdCgoKSA9PlxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3QoZ2V0QWN0aXZlQ3VycmVuY3kpLnBpcGUoXG4gICAgICAgIGJ1ZmZlckNvdW50KDIsIDEpLFxuXG4gICAgICAgIC8vIGF2b2lkIGRpc3BhdGNoaW5nIGBjaGFuZ2VgIGFjdGlvbiB3aGVuIHdlJ3JlIGp1c3Qgc2V0dGluZyB0aGUgaW5pdGlhbCB2YWx1ZTpcbiAgICAgICAgZmlsdGVyKChbcHJldmlvdXNdKSA9PiAhIXByZXZpb3VzKSxcbiAgICAgICAgbWFwKFxuICAgICAgICAgIChbcHJldmlvdXMsIGN1cnJlbnRdKSA9PlxuICAgICAgICAgICAgbmV3IFNpdGVDb250ZXh0QWN0aW9ucy5DdXJyZW5jeUNoYW5nZSh7IHByZXZpb3VzLCBjdXJyZW50IH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBzaXRlQ29ubmVjdG9yOiBTaXRlQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgc3RhdGU6IFN0b3JlPFN0YXRlV2l0aFNpdGVDb250ZXh0PlxuICApIHt9XG59XG4iXX0=