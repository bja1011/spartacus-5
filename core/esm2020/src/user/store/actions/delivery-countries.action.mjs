/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
export const LOAD_DELIVERY_COUNTRIES = '[User] Load Delivery Countries';
export const LOAD_DELIVERY_COUNTRIES_FAIL = '[User] Load Delivery Countries Fail';
export const LOAD_DELIVERY_COUNTRIES_SUCCESS = '[User] Load Delivery Countries Success';
export class LoadDeliveryCountries {
    constructor() {
        this.type = LOAD_DELIVERY_COUNTRIES;
        // Intentional empty constructor
    }
}
export class LoadDeliveryCountriesFail {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_DELIVERY_COUNTRIES_FAIL;
    }
}
export class LoadDeliveryCountriesSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_DELIVERY_COUNTRIES_SUCCESS;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktY291bnRyaWVzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3VzZXIvc3RvcmUvYWN0aW9ucy9kZWxpdmVyeS1jb3VudHJpZXMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFLSCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBRyxnQ0FBZ0MsQ0FBQztBQUN4RSxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FDdkMscUNBQXFDLENBQUM7QUFDeEMsTUFBTSxDQUFDLE1BQU0sK0JBQStCLEdBQzFDLHdDQUF3QyxDQUFDO0FBRTNDLE1BQU0sT0FBTyxxQkFBcUI7SUFFaEM7UUFEUyxTQUFJLEdBQUcsdUJBQXVCLENBQUM7UUFFdEMsZ0NBQWdDO0lBQ2xDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyx5QkFBeUI7SUFFcEMsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLDRCQUE0QixDQUFDO0lBQ1gsQ0FBQztDQUNwQztBQUVELE1BQU0sT0FBTyw0QkFBNEI7SUFFdkMsWUFBbUIsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUQ1QixTQUFJLEdBQUcsK0JBQStCLENBQUM7SUFDUixDQUFDO0NBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ291bnRyeSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9ERUxJVkVSWV9DT1VOVFJJRVMgPSAnW1VzZXJdIExvYWQgRGVsaXZlcnkgQ291bnRyaWVzJztcbmV4cG9ydCBjb25zdCBMT0FEX0RFTElWRVJZX0NPVU5UUklFU19GQUlMID1cbiAgJ1tVc2VyXSBMb2FkIERlbGl2ZXJ5IENvdW50cmllcyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0RFTElWRVJZX0NPVU5UUklFU19TVUNDRVNTID1cbiAgJ1tVc2VyXSBMb2FkIERlbGl2ZXJ5IENvdW50cmllcyBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWREZWxpdmVyeUNvdW50cmllcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0RFTElWRVJZX0NPVU5UUklFUztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gSW50ZW50aW9uYWwgZW1wdHkgY29uc3RydWN0b3JcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZERlbGl2ZXJ5Q291bnRyaWVzRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0RFTElWRVJZX0NPVU5UUklFU19GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZERlbGl2ZXJ5Q291bnRyaWVzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0RFTElWRVJZX0NPVU5UUklFU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ291bnRyeVtdKSB7fVxufVxuXG5leHBvcnQgdHlwZSBEZWxpdmVyeUNvdW50cmllc0FjdGlvbiA9XG4gIHwgTG9hZERlbGl2ZXJ5Q291bnRyaWVzXG4gIHwgTG9hZERlbGl2ZXJ5Q291bnRyaWVzRmFpbFxuICB8IExvYWREZWxpdmVyeUNvdW50cmllc1N1Y2Nlc3M7XG4iXX0=