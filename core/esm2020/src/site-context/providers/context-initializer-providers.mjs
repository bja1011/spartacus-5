/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { APP_INITIALIZER } from '@angular/core';
import { BaseSiteInitializer } from '../services/base-site-initializer';
import { CurrencyInitializer } from '../services/currency-initializer';
import { LanguageInitializer } from '../services/language-initializer';
export function initializeCurrency(currencyInitializer) {
    const result = () => {
        currencyInitializer.initialize();
    };
    return result;
}
export function initializeLanguage(languageInitializer) {
    const result = () => {
        languageInitializer.initialize();
    };
    return result;
}
export function initializeBaseSite(baseSiteInitializer) {
    const result = () => {
        baseSiteInitializer.initialize();
    };
    return result;
}
export const contextInitializerProviders = [
    {
        provide: APP_INITIALIZER,
        useFactory: initializeLanguage,
        deps: [LanguageInitializer],
        multi: true,
    },
    {
        provide: APP_INITIALIZER,
        useFactory: initializeCurrency,
        deps: [CurrencyInitializer],
        multi: true,
    },
    {
        provide: APP_INITIALIZER,
        useFactory: initializeBaseSite,
        deps: [BaseSiteInitializer],
        multi: true,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1pbml0aWFsaXplci1wcm92aWRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9zaXRlLWNvbnRleHQvcHJvdmlkZXJzL2NvbnRleHQtaW5pdGlhbGl6ZXItcHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsZUFBZSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXZFLE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxtQkFBd0M7SUFDekUsTUFBTSxNQUFNLEdBQUcsR0FBRyxFQUFFO1FBQ2xCLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25DLENBQUMsQ0FBQztJQUNGLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFDRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsbUJBQXdDO0lBQ3pFLE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUNsQixtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQyxDQUFDLENBQUM7SUFDRixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLG1CQUF3QztJQUN6RSxNQUFNLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDbEIsbUJBQW1CLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbkMsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLDJCQUEyQixHQUFlO0lBQ3JEO1FBQ0UsT0FBTyxFQUFFLGVBQWU7UUFDeEIsVUFBVSxFQUFFLGtCQUFrQjtRQUM5QixJQUFJLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztRQUMzQixLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsZUFBZTtRQUN4QixVQUFVLEVBQUUsa0JBQWtCO1FBQzlCLElBQUksRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQzNCLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLFVBQVUsRUFBRSxrQkFBa0I7UUFDOUIsSUFBSSxFQUFFLENBQUMsbUJBQW1CLENBQUM7UUFDM0IsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlU2l0ZUluaXRpYWxpemVyIH0gZnJvbSAnLi4vc2VydmljZXMvYmFzZS1zaXRlLWluaXRpYWxpemVyJztcbmltcG9ydCB7IEN1cnJlbmN5SW5pdGlhbGl6ZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9jdXJyZW5jeS1pbml0aWFsaXplcic7XG5pbXBvcnQgeyBMYW5ndWFnZUluaXRpYWxpemVyIH0gZnJvbSAnLi4vc2VydmljZXMvbGFuZ3VhZ2UtaW5pdGlhbGl6ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUN1cnJlbmN5KGN1cnJlbmN5SW5pdGlhbGl6ZXI6IEN1cnJlbmN5SW5pdGlhbGl6ZXIpIHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4ge1xuICAgIGN1cnJlbmN5SW5pdGlhbGl6ZXIuaW5pdGlhbGl6ZSgpO1xuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVMYW5ndWFnZShsYW5ndWFnZUluaXRpYWxpemVyOiBMYW5ndWFnZUluaXRpYWxpemVyKSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IHtcbiAgICBsYW5ndWFnZUluaXRpYWxpemVyLmluaXRpYWxpemUoKTtcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVCYXNlU2l0ZShiYXNlU2l0ZUluaXRpYWxpemVyOiBCYXNlU2l0ZUluaXRpYWxpemVyKSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IHtcbiAgICBiYXNlU2l0ZUluaXRpYWxpemVyLmluaXRpYWxpemUoKTtcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRleHRJbml0aWFsaXplclByb3ZpZGVyczogUHJvdmlkZXJbXSA9IFtcbiAge1xuICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICB1c2VGYWN0b3J5OiBpbml0aWFsaXplTGFuZ3VhZ2UsXG4gICAgZGVwczogW0xhbmd1YWdlSW5pdGlhbGl6ZXJdLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgIHVzZUZhY3Rvcnk6IGluaXRpYWxpemVDdXJyZW5jeSxcbiAgICBkZXBzOiBbQ3VycmVuY3lJbml0aWFsaXplcl0sXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgdXNlRmFjdG9yeTogaW5pdGlhbGl6ZUJhc2VTaXRlLFxuICAgIGRlcHM6IFtCYXNlU2l0ZUluaXRpYWxpemVyXSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbl07XG4iXX0=