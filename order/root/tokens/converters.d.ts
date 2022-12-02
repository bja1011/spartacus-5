import { InjectionToken } from '@angular/core';
import { Converter } from '@spartacus/core';
import { ConsignmentTracking } from '../model/consignment-tracking.model';
import { Order, OrderHistoryList, ReturnRequest, ReturnRequestEntryInputList, ReturnRequestList } from '../model/order.model';
import { ReplenishmentOrder, ReplenishmentOrderList } from '../model/replenishment-order.model';
import { ScheduleReplenishmentForm } from '../model/scheduled-replenishment.model';
export declare const ORDER_NORMALIZER: InjectionToken<Converter<any, Order>>;
export declare const REPLENISHMENT_ORDER_NORMALIZER: InjectionToken<Converter<any, ReplenishmentOrder>>;
export declare const ORDER_HISTORY_NORMALIZER: InjectionToken<Converter<any, OrderHistoryList>>;
export declare const CONSIGNMENT_TRACKING_NORMALIZER: InjectionToken<Converter<any, ConsignmentTracking>>;
export declare const ORDER_RETURN_REQUEST_NORMALIZER: InjectionToken<Converter<any, ReturnRequest>>;
export declare const ORDER_RETURN_REQUEST_INPUT_SERIALIZER: InjectionToken<Converter<ReturnRequestEntryInputList, any>>;
export declare const ORDER_RETURNS_NORMALIZER: InjectionToken<Converter<any, ReturnRequestList>>;
export declare const REPLENISHMENT_ORDER_HISTORY_NORMALIZER: InjectionToken<Converter<any, ReplenishmentOrderList>>;
export declare const REPLENISHMENT_ORDER_FORM_SERIALIZER: InjectionToken<Converter<ScheduleReplenishmentForm, any>>;
