/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { PageEvent } from '../page/page.events';
/**
 * Indicates that a user visited a product details page.
 */
export class ProductDetailsPageEvent extends PageEvent {
}
/** event's type */
ProductDetailsPageEvent.type = 'ProductDetailsPageEvent';
/**
 * Indicates that a user visited a category page.
 */
export class CategoryPageResultsEvent extends PageEvent {
}
/** event's type */
CategoryPageResultsEvent.type = 'CategoryPageResultsEvent';
/**
 * Indicates that the a user visited the search results page,
 * and that the search results have been retrieved.
 */
export class SearchPageResultsEvent extends PageEvent {
}
/** event's type */
SearchPageResultsEvent.type = 'SearchPageResultsEvent';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLmV2ZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvZXZlbnRzL3Byb2R1Y3QvcHJvZHVjdC1wYWdlLmV2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBR0gsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWhEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHVCQUF3QixTQUFRLFNBQVM7O0FBQ3BELG1CQUFtQjtBQUNILDRCQUFJLEdBQUcseUJBQXlCLENBQUM7QUFPbkQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsU0FBUzs7QUFDckQsbUJBQW1CO0FBQ0gsNkJBQUksR0FBRywwQkFBMEIsQ0FBQztBQU1wRDs7O0dBR0c7QUFDSCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsU0FBUzs7QUFDbkQsbUJBQW1CO0FBQ0gsMkJBQUksR0FBRyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IENhdGVnb3J5LCBQcmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQYWdlRXZlbnQgfSBmcm9tICcuLi9wYWdlL3BhZ2UuZXZlbnRzJztcblxuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBhIHVzZXIgdmlzaXRlZCBhIHByb2R1Y3QgZGV0YWlscyBwYWdlLlxuICovXG5leHBvcnQgY2xhc3MgUHJvZHVjdERldGFpbHNQYWdlRXZlbnQgZXh0ZW5kcyBQYWdlRXZlbnQge1xuICAvKiogZXZlbnQncyB0eXBlICovXG4gIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ1Byb2R1Y3REZXRhaWxzUGFnZUV2ZW50JztcbiAgY2F0ZWdvcmllcz86IENhdGVnb3J5W107XG4gIGNvZGU/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHByaWNlPzogUHJpY2U7XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgYSB1c2VyIHZpc2l0ZWQgYSBjYXRlZ29yeSBwYWdlLlxuICovXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlQYWdlUmVzdWx0c0V2ZW50IGV4dGVuZHMgUGFnZUV2ZW50IHtcbiAgLyoqIGV2ZW50J3MgdHlwZSAqL1xuICBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdDYXRlZ29yeVBhZ2VSZXN1bHRzRXZlbnQnO1xuICBjYXRlZ29yeUNvZGU6IHN0cmluZztcbiAgY2F0ZWdvcnlOYW1lPzogc3RyaW5nO1xuICBudW1iZXJPZlJlc3VsdHM6IE51bWJlcjtcbn1cblxuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCB0aGUgYSB1c2VyIHZpc2l0ZWQgdGhlIHNlYXJjaCByZXN1bHRzIHBhZ2UsXG4gKiBhbmQgdGhhdCB0aGUgc2VhcmNoIHJlc3VsdHMgaGF2ZSBiZWVuIHJldHJpZXZlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNlYXJjaFBhZ2VSZXN1bHRzRXZlbnQgZXh0ZW5kcyBQYWdlRXZlbnQge1xuICAvKiogZXZlbnQncyB0eXBlICovXG4gIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ1NlYXJjaFBhZ2VSZXN1bHRzRXZlbnQnO1xuICBzZWFyY2hUZXJtOiBzdHJpbmc7XG4gIG51bWJlck9mUmVzdWx0czogTnVtYmVyO1xufVxuIl19