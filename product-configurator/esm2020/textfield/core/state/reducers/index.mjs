/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { InjectionToken } from '@angular/core';
import { StateUtils } from '@spartacus/core';
import { CONFIGURATION_TEXTFIELD_DATA, } from '../configuration-textfield-state';
import { reducer as configuratorTextfieldReducer } from './configurator-textfield.reducer';
export function getConfiguratorTextfieldReducers() {
    return {
        loaderState: StateUtils.loaderReducer(CONFIGURATION_TEXTFIELD_DATA, 
        // @ts-ignore TODO (#12620)
        configuratorTextfieldReducer),
    };
}
export const configuratorTextfieldReducerToken = new InjectionToken('ConfiguratorReducers');
export const configuratorTextfieldReducerProvider = {
    provide: configuratorTextfieldReducerToken,
    useFactory: getConfiguratorTextfieldReducers,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvcHJvZHVjdC1jb25maWd1cmF0b3IvdGV4dGZpZWxkL2NvcmUvc3RhdGUvcmVkdWNlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFFTCw0QkFBNEIsR0FDN0IsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxQyxPQUFPLEVBQUUsT0FBTyxJQUFJLDRCQUE0QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFM0YsTUFBTSxVQUFVLGdDQUFnQztJQUM5QyxPQUFPO1FBQ0wsV0FBVyxFQUFFLFVBQVUsQ0FBQyxhQUFhLENBQ25DLDRCQUE0QjtRQUM1QiwyQkFBMkI7UUFDM0IsNEJBQTRCLENBQzdCO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxpQ0FBaUMsR0FFMUMsSUFBSSxjQUFjLENBQ3BCLHNCQUFzQixDQUN2QixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sb0NBQW9DLEdBQWE7SUFDNUQsT0FBTyxFQUFFLGlDQUFpQztJQUMxQyxVQUFVLEVBQUUsZ0NBQWdDO0NBQzdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvblJlZHVjZXJNYXAgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBTdGF0ZVV0aWxzIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRvclRleHRmaWVsZCB9IGZyb20gJy4uLy4uL21vZGVsL2NvbmZpZ3VyYXRvci10ZXh0ZmllbGQubW9kZWwnO1xuaW1wb3J0IHtcbiAgQ29uZmlndXJhdGlvblRleHRmaWVsZFN0YXRlLFxuICBDT05GSUdVUkFUSU9OX1RFWFRGSUVMRF9EQVRBLFxufSBmcm9tICcuLi9jb25maWd1cmF0aW9uLXRleHRmaWVsZC1zdGF0ZSc7XG5pbXBvcnQgeyByZWR1Y2VyIGFzIGNvbmZpZ3VyYXRvclRleHRmaWVsZFJlZHVjZXIgfSBmcm9tICcuL2NvbmZpZ3VyYXRvci10ZXh0ZmllbGQucmVkdWNlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maWd1cmF0b3JUZXh0ZmllbGRSZWR1Y2VycygpOiBBY3Rpb25SZWR1Y2VyTWFwPENvbmZpZ3VyYXRpb25UZXh0ZmllbGRTdGF0ZT4ge1xuICByZXR1cm4ge1xuICAgIGxvYWRlclN0YXRlOiBTdGF0ZVV0aWxzLmxvYWRlclJlZHVjZXI8Q29uZmlndXJhdG9yVGV4dGZpZWxkLkNvbmZpZ3VyYXRpb24+KFxuICAgICAgQ09ORklHVVJBVElPTl9URVhURklFTERfREFUQSxcbiAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETyAoIzEyNjIwKVxuICAgICAgY29uZmlndXJhdG9yVGV4dGZpZWxkUmVkdWNlclxuICAgICksXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWd1cmF0b3JUZXh0ZmllbGRSZWR1Y2VyVG9rZW46IEluamVjdGlvblRva2VuPFxuICBBY3Rpb25SZWR1Y2VyTWFwPENvbmZpZ3VyYXRpb25UZXh0ZmllbGRTdGF0ZT5cbj4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxDb25maWd1cmF0aW9uVGV4dGZpZWxkU3RhdGU+PihcbiAgJ0NvbmZpZ3VyYXRvclJlZHVjZXJzJ1xuKTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyYXRvclRleHRmaWVsZFJlZHVjZXJQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IGNvbmZpZ3VyYXRvclRleHRmaWVsZFJlZHVjZXJUb2tlbixcbiAgdXNlRmFjdG9yeTogZ2V0Q29uZmlndXJhdG9yVGV4dGZpZWxkUmVkdWNlcnMsXG59O1xuIl19