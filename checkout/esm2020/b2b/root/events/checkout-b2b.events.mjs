/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { CheckoutEvent } from '@spartacus/checkout/base/root';
/**
 * An abstract event for all the cost center related events.
 */
export class CheckoutCostCenterEvent extends CheckoutEvent {
}
/**
 * Fired when the cost center has been set.
 */
export class CheckoutCostCenterSetEvent extends CheckoutCostCenterEvent {
}
/**
 * Event's type
 */
CheckoutCostCenterSetEvent.type = 'CheckoutCostCenterSetEvent';
/**
 * An abstract event for all the payment type related events.
 */
export class CheckoutPaymentTypeEvent extends CheckoutEvent {
}
/**
 * Emit this event to force payment types reload
 */
export class CheckoutPaymentTypesQueryReloadEvent extends CheckoutPaymentTypeEvent {
}
/**
 * Event's type
 */
CheckoutPaymentTypesQueryReloadEvent.type = 'CheckoutPaymentTypesQueryReloadEvent';
/**
 * Emit this event to force payment types reset
 */
export class CheckoutPaymentTypesQueryResetEvent extends CheckoutPaymentTypeEvent {
}
/**
 * Event's type
 */
CheckoutPaymentTypesQueryResetEvent.type = 'CheckoutPaymentTypesQueryResetEvent';
/**
 * Fired when the payment type has been set
 */
export class CheckoutPaymentTypeSetEvent extends CheckoutPaymentTypeEvent {
}
/**
 * Event's type
 */
CheckoutPaymentTypeSetEvent.type = 'CheckoutPaymentTypeSetEvent';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtYjJiLmV2ZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9jaGVja291dC9iMmIvcm9vdC9ldmVudHMvY2hlY2tvdXQtYjJiLmV2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTlEOztHQUVHO0FBQ0gsTUFBTSxPQUFnQix1QkFBd0IsU0FBUSxhQUFhO0NBQUc7QUFFdEU7O0dBRUc7QUFDSCxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsdUJBQXVCOztBQUNyRTs7R0FFRztBQUNhLCtCQUFJLEdBQUcsNEJBQTRCLENBQUM7QUFRdEQ7O0dBRUc7QUFDSCxNQUFNLE9BQWdCLHdCQUF5QixTQUFRLGFBQWE7Q0FBRztBQUV2RTs7R0FFRztBQUNILE1BQU0sT0FBTyxvQ0FBcUMsU0FBUSx3QkFBd0I7O0FBQ2hGOztHQUVHO0FBQ2EseUNBQUksR0FBRyxzQ0FBc0MsQ0FBQztBQUdoRTs7R0FFRztBQUNILE1BQU0sT0FBTyxtQ0FBb0MsU0FBUSx3QkFBd0I7O0FBQy9FOztHQUVHO0FBQ2Esd0NBQUksR0FBRyxxQ0FBcUMsQ0FBQztBQUcvRDs7R0FFRztBQUNILE1BQU0sT0FBTywyQkFBNEIsU0FBUSx3QkFBd0I7O0FBQ3ZFOztHQUVHO0FBQ2EsZ0NBQUksR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IENoZWNrb3V0RXZlbnQgfSBmcm9tICdAc3BhcnRhY3VzL2NoZWNrb3V0L2Jhc2Uvcm9vdCc7XG5cbi8qKlxuICogQW4gYWJzdHJhY3QgZXZlbnQgZm9yIGFsbCB0aGUgY29zdCBjZW50ZXIgcmVsYXRlZCBldmVudHMuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDaGVja291dENvc3RDZW50ZXJFdmVudCBleHRlbmRzIENoZWNrb3V0RXZlbnQge31cblxuLyoqXG4gKiBGaXJlZCB3aGVuIHRoZSBjb3N0IGNlbnRlciBoYXMgYmVlbiBzZXQuXG4gKi9cbmV4cG9ydCBjbGFzcyBDaGVja291dENvc3RDZW50ZXJTZXRFdmVudCBleHRlbmRzIENoZWNrb3V0Q29zdENlbnRlckV2ZW50IHtcbiAgLyoqXG4gICAqIEV2ZW50J3MgdHlwZVxuICAgKi9cbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnQ2hlY2tvdXRDb3N0Q2VudGVyU2V0RXZlbnQnO1xuXG4gIC8qKlxuICAgKiBDb3N0IGNlbnRlciBjb2RlXG4gICAqL1xuICBjb2RlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQW4gYWJzdHJhY3QgZXZlbnQgZm9yIGFsbCB0aGUgcGF5bWVudCB0eXBlIHJlbGF0ZWQgZXZlbnRzLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2hlY2tvdXRQYXltZW50VHlwZUV2ZW50IGV4dGVuZHMgQ2hlY2tvdXRFdmVudCB7fVxuXG4vKipcbiAqIEVtaXQgdGhpcyBldmVudCB0byBmb3JjZSBwYXltZW50IHR5cGVzIHJlbG9hZFxuICovXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRQYXltZW50VHlwZXNRdWVyeVJlbG9hZEV2ZW50IGV4dGVuZHMgQ2hlY2tvdXRQYXltZW50VHlwZUV2ZW50IHtcbiAgLyoqXG4gICAqIEV2ZW50J3MgdHlwZVxuICAgKi9cbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnQ2hlY2tvdXRQYXltZW50VHlwZXNRdWVyeVJlbG9hZEV2ZW50Jztcbn1cblxuLyoqXG4gKiBFbWl0IHRoaXMgZXZlbnQgdG8gZm9yY2UgcGF5bWVudCB0eXBlcyByZXNldFxuICovXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRQYXltZW50VHlwZXNRdWVyeVJlc2V0RXZlbnQgZXh0ZW5kcyBDaGVja291dFBheW1lbnRUeXBlRXZlbnQge1xuICAvKipcbiAgICogRXZlbnQncyB0eXBlXG4gICAqL1xuICBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdDaGVja291dFBheW1lbnRUeXBlc1F1ZXJ5UmVzZXRFdmVudCc7XG59XG5cbi8qKlxuICogRmlyZWQgd2hlbiB0aGUgcGF5bWVudCB0eXBlIGhhcyBiZWVuIHNldFxuICovXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRQYXltZW50VHlwZVNldEV2ZW50IGV4dGVuZHMgQ2hlY2tvdXRQYXltZW50VHlwZUV2ZW50IHtcbiAgLyoqXG4gICAqIEV2ZW50J3MgdHlwZVxuICAgKi9cbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnQ2hlY2tvdXRQYXltZW50VHlwZVNldEV2ZW50JztcblxuICAvKipcbiAgICogUGF5bWVudCB0eXBlIGNvZGVcbiAgICovXG4gIHBheW1lbnRUeXBlQ29kZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQdXJjaGFzZSBvcmRlciBudW1iZXJcbiAgICovXG4gIHB1cmNoYXNlT3JkZXJOdW1iZXI/OiBzdHJpbmc7XG59XG4iXX0=