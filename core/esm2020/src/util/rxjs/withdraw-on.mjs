/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { startWith, switchMapTo } from 'rxjs/operators';
/**
 *
 * Withdraw from the source observable when notifier emits a value
 *
 * Withdraw will result in resubscribing to the source observable
 * Operator is useful to kill ongoing emission transformation on notifier emission
 *
 * @param notifier
 */
export function withdrawOn(notifier) {
    return (source) => notifier.pipe(startWith(undefined), switchMapTo(source));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aGRyYXctb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy91dGlsL3J4anMvd2l0aGRyYXctb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUdILE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQ7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLFVBQVUsVUFBVSxDQUN4QixRQUF5QjtJQUV6QixPQUFPLENBQUMsTUFBcUIsRUFBRSxFQUFFLENBQy9CLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzdELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIHN3aXRjaE1hcFRvIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqXG4gKiBXaXRoZHJhdyBmcm9tIHRoZSBzb3VyY2Ugb2JzZXJ2YWJsZSB3aGVuIG5vdGlmaWVyIGVtaXRzIGEgdmFsdWVcbiAqXG4gKiBXaXRoZHJhdyB3aWxsIHJlc3VsdCBpbiByZXN1YnNjcmliaW5nIHRvIHRoZSBzb3VyY2Ugb2JzZXJ2YWJsZVxuICogT3BlcmF0b3IgaXMgdXNlZnVsIHRvIGtpbGwgb25nb2luZyBlbWlzc2lvbiB0cmFuc2Zvcm1hdGlvbiBvbiBub3RpZmllciBlbWlzc2lvblxuICpcbiAqIEBwYXJhbSBub3RpZmllclxuICovXG5leHBvcnQgZnVuY3Rpb24gd2l0aGRyYXdPbjxUPihcbiAgbm90aWZpZXI6IE9ic2VydmFibGU8YW55PlxuKTogT3BlcmF0b3JGdW5jdGlvbjxULCBUPiB7XG4gIHJldHVybiAoc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PlxuICAgIG5vdGlmaWVyLnBpcGUoc3RhcnRXaXRoKHVuZGVmaW5lZCksIHN3aXRjaE1hcFRvKHNvdXJjZSkpO1xufVxuIl19