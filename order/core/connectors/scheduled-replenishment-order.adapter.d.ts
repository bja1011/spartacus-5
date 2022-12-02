import { ReplenishmentOrder, ScheduleReplenishmentForm } from '@spartacus/order/root';
import { Observable } from 'rxjs';
export declare abstract class ScheduledReplenishmentOrderAdapter {
    /**
     * Abstract method used to schedule a replenishment order.
     *
     * @param cartId The `cartId` for cart used for scheduling a replenishment order
     * @param scheduleReplenishmentForm The `object` that contains the form data for replenishment
     * @param termsChecked The `boolean value` whether the terms were accepted or not
     * @param userId The `userId` for given user
     */
    abstract scheduleReplenishmentOrder(cartId: string, scheduleReplenishmentForm: ScheduleReplenishmentForm, termsChecked: boolean, userId: string): Observable<ReplenishmentOrder>;
}
