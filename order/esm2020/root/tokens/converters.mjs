/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { InjectionToken } from '@angular/core';
export const ORDER_NORMALIZER = new InjectionToken('OrderNormalizer');
export const REPLENISHMENT_ORDER_NORMALIZER = new InjectionToken('ReplenishmentOrderNormalizer');
export const ORDER_HISTORY_NORMALIZER = new InjectionToken('OrderHistoryNormalizer');
export const CONSIGNMENT_TRACKING_NORMALIZER = new InjectionToken('ConsignmentTrackingNormalizer');
export const ORDER_RETURN_REQUEST_NORMALIZER = new InjectionToken('OrderReturnRequestNormalizer');
export const ORDER_RETURN_REQUEST_INPUT_SERIALIZER = new InjectionToken('OrderReturnRequestInputSerializer');
export const ORDER_RETURNS_NORMALIZER = new InjectionToken('OrderReturnsNormalizer');
export const REPLENISHMENT_ORDER_HISTORY_NORMALIZER = new InjectionToken('ReplenishmentOrderHistoryNormalizer');
export const REPLENISHMENT_ORDER_FORM_SERIALIZER = new InjectionToken('ReplenishmentOrderFormSerializer');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmRlci9yb290L3Rva2Vucy9jb252ZXJ0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBZ0IvQyxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FDaEQsaUJBQWlCLENBQ2xCLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSw4QkFBOEIsR0FBRyxJQUFJLGNBQWMsQ0FFOUQsOEJBQThCLENBQUMsQ0FBQztBQUVsQyxNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBRyxJQUFJLGNBQWMsQ0FFeEQsd0JBQXdCLENBQUMsQ0FBQztBQUU1QixNQUFNLENBQUMsTUFBTSwrQkFBK0IsR0FBRyxJQUFJLGNBQWMsQ0FFL0QsK0JBQStCLENBQUMsQ0FBQztBQUVuQyxNQUFNLENBQUMsTUFBTSwrQkFBK0IsR0FBRyxJQUFJLGNBQWMsQ0FFL0QsOEJBQThCLENBQUMsQ0FBQztBQUVsQyxNQUFNLENBQUMsTUFBTSxxQ0FBcUMsR0FBRyxJQUFJLGNBQWMsQ0FFckUsbUNBQW1DLENBQUMsQ0FBQztBQUV2QyxNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBRyxJQUFJLGNBQWMsQ0FFeEQsd0JBQXdCLENBQUMsQ0FBQztBQUU1QixNQUFNLENBQUMsTUFBTSxzQ0FBc0MsR0FBRyxJQUFJLGNBQWMsQ0FFdEUscUNBQXFDLENBQUMsQ0FBQztBQUV6QyxNQUFNLENBQUMsTUFBTSxtQ0FBbUMsR0FBRyxJQUFJLGNBQWMsQ0FFbkUsa0NBQWtDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ29uc2lnbm1lbnRUcmFja2luZyB9IGZyb20gJy4uL21vZGVsL2NvbnNpZ25tZW50LXRyYWNraW5nLm1vZGVsJztcbmltcG9ydCB7XG4gIE9yZGVyLFxuICBPcmRlckhpc3RvcnlMaXN0LFxuICBSZXR1cm5SZXF1ZXN0LFxuICBSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dExpc3QsXG4gIFJldHVyblJlcXVlc3RMaXN0LFxufSBmcm9tICcuLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQge1xuICBSZXBsZW5pc2htZW50T3JkZXIsXG4gIFJlcGxlbmlzaG1lbnRPcmRlckxpc3QsXG59IGZyb20gJy4uL21vZGVsL3JlcGxlbmlzaG1lbnQtb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgU2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybSB9IGZyb20gJy4uL21vZGVsL3NjaGVkdWxlZC1yZXBsZW5pc2htZW50Lm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IE9SREVSX05PUk1BTElaRVIgPSBuZXcgSW5qZWN0aW9uVG9rZW48Q29udmVydGVyPGFueSwgT3JkZXI+PihcbiAgJ09yZGVyTm9ybWFsaXplcidcbik7XG5cbmV4cG9ydCBjb25zdCBSRVBMRU5JU0hNRU5UX09SREVSX05PUk1BTElaRVIgPSBuZXcgSW5qZWN0aW9uVG9rZW48XG4gIENvbnZlcnRlcjxhbnksIFJlcGxlbmlzaG1lbnRPcmRlcj5cbj4oJ1JlcGxlbmlzaG1lbnRPcmRlck5vcm1hbGl6ZXInKTtcblxuZXhwb3J0IGNvbnN0IE9SREVSX0hJU1RPUllfTk9STUFMSVpFUiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxcbiAgQ29udmVydGVyPGFueSwgT3JkZXJIaXN0b3J5TGlzdD5cbj4oJ09yZGVySGlzdG9yeU5vcm1hbGl6ZXInKTtcblxuZXhwb3J0IGNvbnN0IENPTlNJR05NRU5UX1RSQUNLSU5HX05PUk1BTElaRVIgPSBuZXcgSW5qZWN0aW9uVG9rZW48XG4gIENvbnZlcnRlcjxhbnksIENvbnNpZ25tZW50VHJhY2tpbmc+XG4+KCdDb25zaWdubWVudFRyYWNraW5nTm9ybWFsaXplcicpO1xuXG5leHBvcnQgY29uc3QgT1JERVJfUkVUVVJOX1JFUVVFU1RfTk9STUFMSVpFUiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxcbiAgQ29udmVydGVyPGFueSwgUmV0dXJuUmVxdWVzdD5cbj4oJ09yZGVyUmV0dXJuUmVxdWVzdE5vcm1hbGl6ZXInKTtcblxuZXhwb3J0IGNvbnN0IE9SREVSX1JFVFVSTl9SRVFVRVNUX0lOUFVUX1NFUklBTElaRVIgPSBuZXcgSW5qZWN0aW9uVG9rZW48XG4gIENvbnZlcnRlcjxSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dExpc3QsIGFueT5cbj4oJ09yZGVyUmV0dXJuUmVxdWVzdElucHV0U2VyaWFsaXplcicpO1xuXG5leHBvcnQgY29uc3QgT1JERVJfUkVUVVJOU19OT1JNQUxJWkVSID0gbmV3IEluamVjdGlvblRva2VuPFxuICBDb252ZXJ0ZXI8YW55LCBSZXR1cm5SZXF1ZXN0TGlzdD5cbj4oJ09yZGVyUmV0dXJuc05vcm1hbGl6ZXInKTtcblxuZXhwb3J0IGNvbnN0IFJFUExFTklTSE1FTlRfT1JERVJfSElTVE9SWV9OT1JNQUxJWkVSID0gbmV3IEluamVjdGlvblRva2VuPFxuICBDb252ZXJ0ZXI8YW55LCBSZXBsZW5pc2htZW50T3JkZXJMaXN0PlxuPignUmVwbGVuaXNobWVudE9yZGVySGlzdG9yeU5vcm1hbGl6ZXInKTtcblxuZXhwb3J0IGNvbnN0IFJFUExFTklTSE1FTlRfT1JERVJfRk9STV9TRVJJQUxJWkVSID0gbmV3IEluamVjdGlvblRva2VuPFxuICBDb252ZXJ0ZXI8U2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybSwgYW55PlxuPignUmVwbGVuaXNobWVudE9yZGVyRm9ybVNlcmlhbGl6ZXInKTtcbiJdfQ==