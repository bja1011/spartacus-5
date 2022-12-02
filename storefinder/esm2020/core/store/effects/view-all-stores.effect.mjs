/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { StoreFinderActions } from '../actions/index';
import { normalizeHttpError, SiteContextActions } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/effects";
import * as i2 from "../../connectors/store-finder.connector";
export class ViewAllStoresEffect {
    constructor(actions$, storeFinderConnector) {
        this.actions$ = actions$;
        this.storeFinderConnector = storeFinderConnector;
        this.viewAllStores$ = createEffect(() => this.actions$.pipe(ofType(StoreFinderActions.VIEW_ALL_STORES, StoreFinderActions.CLEAR_STORE_FINDER_DATA), switchMap(() => {
            return this.storeFinderConnector.getCounts().pipe(map((data) => {
                data.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
                return new StoreFinderActions.ViewAllStoresSuccess(data);
            }), catchError((error) => of(new StoreFinderActions.ViewAllStoresFail(normalizeHttpError(error)))));
        })));
        this.clearStoreFinderData$ = createEffect(() => this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, SiteContextActions.CURRENCY_CHANGE), map(() => {
            return new StoreFinderActions.ClearStoreFinderData();
        })));
    }
}
ViewAllStoresEffect.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ViewAllStoresEffect, deps: [{ token: i1.Actions }, { token: i2.StoreFinderConnector }], target: i0.ɵɵFactoryTarget.Injectable });
ViewAllStoresEffect.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ViewAllStoresEffect });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ViewAllStoresEffect, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Actions }, { type: i2.StoreFinderConnector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hbGwtc3RvcmVzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9zdG9yZWZpbmRlci9jb3JlL3N0b3JlL2VmZmVjdHMvdmlldy1hbGwtc3RvcmVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQVcsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBR3pFLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFDVSxRQUFpQixFQUNqQixvQkFBMEM7UUFEMUMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBR3BELG1CQUFjLEdBR1YsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEIsTUFBTSxDQUNKLGtCQUFrQixDQUFDLGVBQWUsRUFDbEMsa0JBQWtCLENBQUMsdUJBQXVCLENBQzNDLEVBQ0QsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDL0MsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUNqQixDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMvQyxDQUFDO2dCQUNGLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzRCxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNuQixFQUFFLENBQ0EsSUFBSSxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FDdEMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQzFCLENBQ0YsQ0FDRixDQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUNGLENBQUM7UUFFRiwwQkFBcUIsR0FDbkIsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEIsTUFBTSxDQUNKLGtCQUFrQixDQUFDLGVBQWUsRUFDbEMsa0JBQWtCLENBQUMsZUFBZSxDQUNuQyxFQUNELEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLElBQUksa0JBQWtCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FDSCxDQUNGLENBQUM7SUExQ0QsQ0FBQzs7Z0hBSk8sbUJBQW1CO29IQUFuQixtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFEL0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIGNyZWF0ZUVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc3RvcmUtZmluZGVyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG5vcm1hbGl6ZUh0dHBFcnJvciwgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZpZXdBbGxTdG9yZXNFZmZlY3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgc3RvcmVGaW5kZXJDb25uZWN0b3I6IFN0b3JlRmluZGVyQ29ubmVjdG9yXG4gICkge31cblxuICB2aWV3QWxsU3RvcmVzJDogT2JzZXJ2YWJsZTxcbiAgICB8IFN0b3JlRmluZGVyQWN0aW9ucy5WaWV3QWxsU3RvcmVzU3VjY2Vzc1xuICAgIHwgU3RvcmVGaW5kZXJBY3Rpb25zLlZpZXdBbGxTdG9yZXNGYWlsXG4gID4gPSBjcmVhdGVFZmZlY3QoKCkgPT5cbiAgICB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICBvZlR5cGUoXG4gICAgICAgIFN0b3JlRmluZGVyQWN0aW9ucy5WSUVXX0FMTF9TVE9SRVMsXG4gICAgICAgIFN0b3JlRmluZGVyQWN0aW9ucy5DTEVBUl9TVE9SRV9GSU5ERVJfREFUQVxuICAgICAgKSxcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlRmluZGVyQ29ubmVjdG9yLmdldENvdW50cygpLnBpcGUoXG4gICAgICAgICAgbWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBkYXRhLnNvcnQoKGEsIGIpID0+XG4gICAgICAgICAgICAgIGEubmFtZSA8IGIubmFtZSA/IC0xIDogYS5uYW1lID4gYi5uYW1lID8gMSA6IDBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0b3JlRmluZGVyQWN0aW9ucy5WaWV3QWxsU3RvcmVzU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgU3RvcmVGaW5kZXJBY3Rpb25zLlZpZXdBbGxTdG9yZXNGYWlsKFxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUh0dHBFcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKVxuICApO1xuXG4gIGNsZWFyU3RvcmVGaW5kZXJEYXRhJDogT2JzZXJ2YWJsZTxTdG9yZUZpbmRlckFjdGlvbnMuQ2xlYXJTdG9yZUZpbmRlckRhdGE+ID1cbiAgICBjcmVhdGVFZmZlY3QoKCkgPT5cbiAgICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgb2ZUeXBlKFxuICAgICAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UsXG4gICAgICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkNVUlJFTkNZX0NIQU5HRVxuICAgICAgICApLFxuICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgU3RvcmVGaW5kZXJBY3Rpb25zLkNsZWFyU3RvcmVGaW5kZXJEYXRhKCk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbn1cbiJdfQ==