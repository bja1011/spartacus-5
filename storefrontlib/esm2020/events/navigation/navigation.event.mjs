/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { CxEvent } from '@spartacus/core';
/**
 * Indicates that a user navigated to an arbitrary page.
 */
export class NavigationEvent extends CxEvent {
}
/**
 * Event's type
 */
NavigationEvent.type = 'NavigationEvent';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvZXZlbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBR0gsT0FBTyxFQUFFLE9BQU8sRUFBZSxNQUFNLGlCQUFpQixDQUFDO0FBRXZEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGVBQWdCLFNBQVEsT0FBTzs7QUFDMUM7O0dBRUc7QUFDYSxvQkFBSSxHQUFHLGlCQUFpQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEN4RXZlbnQsIFBhZ2VDb250ZXh0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBhIHVzZXIgbmF2aWdhdGVkIHRvIGFuIGFyYml0cmFyeSBwYWdlLlxuICovXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkV2ZW50IGV4dGVuZHMgQ3hFdmVudCB7XG4gIC8qKlxuICAgKiBFdmVudCdzIHR5cGVcbiAgICovXG4gIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ05hdmlnYXRpb25FdmVudCc7XG4gIC8qKlxuICAgKiBUaGUgcGFnZSdzIGNvbnRleHRcbiAgICovXG4gIGNvbnRleHQ6IFBhZ2VDb250ZXh0O1xuICAvKipcbiAgICogVGhlIHJvdXRlJ3Mgc2VtYW50aWMgbmFtZVxuICAgKi9cbiAgc2VtYW50aWNSb3V0ZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IFVSTFxuICAgKi9cbiAgdXJsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBVUkwncyBwYXJhbXNcbiAgICovXG4gIHBhcmFtczogUGFyYW1zO1xufVxuIl19