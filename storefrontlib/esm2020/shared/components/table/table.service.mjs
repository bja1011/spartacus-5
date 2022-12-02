/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Injectable, isDevMode } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../../layout/breakpoint/breakpoint.service";
import * as i2 from "./config/table.config";
/**
 * Responsive table service.
 *
 * The `TableService` is used to build a `TableStructure` by configuration. The configuration
 * allows for breakpoint specific configuration, so that the table can differentiate for
 * various screen sizes.
 *
 * While there are some global options, the configuration is mainly driven by the table _type_.
 *
 * If there is no table configuration for the given type found, a table header structure
 * is generated based on the actual data (if available) or randomly by generating 5 random headers.
 */
export class TableService {
    constructor(breakpointService, config) {
        this.breakpointService = breakpointService;
        this.config = config;
    }
    /**
     * Builds the table structure.
     *
     * @param tableType The table type is used  to find the specific table configuration.
     * @param defaultStructure (optional) Default table structure that contains fallback options. More specific options are merged with the default structure.
     * @param data$ (optional) The actual data can be passed in to generate the table structure based on actual data.
     */
    buildStructure(tableType, defaultStructure) {
        if (this.hasTableConfig(tableType)) {
            return this.buildStructureFromConfig(tableType, defaultStructure);
        }
        else {
            return this.buildRandomStructure(tableType);
        }
    }
    /**
     * Returns the table structure by configuration. The configuration can be
     * breakpoint-driven, which means that an alternative header structure can
     * be created per screen size.
     *
     * The breakpoint is resolved by teh `BreakpointService`.
     */
    buildStructureFromConfig(type, defaultStructure) {
        return this.breakpointService.breakpoint$.pipe(map((breakpoint) => ({
            ...this.getTableConfig(type, breakpoint, defaultStructure),
            type,
        })));
    }
    /**
     * Finds all applicable table configuration for the given type and breakpoint.
     * The default table configuration is merged with all relevant breakpoint
     * configurations.
     *
     * This allows to have some default configurations that apply to all screens, and
     * add configuration options for some screens.
     */
    getTableConfig(type, breakpoint, defaultStructure) {
        if (!this.config.table?.[type]) {
            return null;
        }
        const relevant = this.findRelevantBreakpoints(breakpoint);
        const closestBreakpoint = [...relevant]
            .reverse()
            .find((br) => !!this.config.table?.[type][br]?.cells);
        const cells = (closestBreakpoint &&
            this.config.table[type][closestBreakpoint]?.cells) ||
            this.config.table[type].cells ||
            defaultStructure?.cells;
        // add all default table configurations
        let options = {
            ...defaultStructure?.options,
            ...this.config.table[type].options,
        };
        // We merge all table options for smaller breakpoints into the global
        // options, so we inherit options.
        relevant.forEach((br) => {
            options = {
                ...options,
                ...defaultStructure?.[br]?.options,
                ...this.config.table?.[type]?.[br]?.options,
            };
        });
        return { cells, options };
    }
    /**
     * Generates the table structure by the help of the first data row.
     */
    buildStructureFromData(type, data$) {
        this.logWarning(`No table configuration found to render table with type "${type}". The table header for "${type}" is generated by the help of the first data item`);
        return data$.pipe(map((data) => {
            const cells = Object.keys(data?.[0]).map((key) => key);
            return { type, cells };
        }));
    }
    /**
     * As a last resort, the table structure is randomly created. The random structure
     * contains 5 headers, so that some of the unknown data is visualized.
     */
    buildRandomStructure(type) {
        this.logWarning(`No data available for "${type}", a random structure is generated (with hidden table headers).`);
        return of({
            type,
            cells: ['unknown', 'unknown', 'unknown', 'unknown', 'unknown'],
        });
    }
    /**
     * Finds all the breakpoints can contribute to the table configuration, from small
     * to current.
     *
     * For example, if the current breakpoint is `MD`, this returns `[XS, SM, MD]`.
     */
    findRelevantBreakpoints(breakpoint) {
        const current = this.breakpointService.breakpoints.indexOf(breakpoint);
        return this.breakpointService.breakpoints.slice(0, current + 1);
    }
    /**
     * Indicates if the there is a configuration for the table available.
     */
    hasTableConfig(tableType) {
        return !!this.config.table?.[tableType];
    }
    /**
     * Logs a message in the console to increase developer experience.
     *
     * The message is only logged in dev mode.
     */
    logWarning(message) {
        if (isDevMode()) {
            console.warn(message);
        }
    }
}
TableService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: TableService, deps: [{ token: i1.BreakpointService }, { token: i2.TableConfig }], target: i0.ɵɵFactoryTarget.Injectable });
TableService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: TableService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: TableService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.BreakpointService }, { type: i2.TableConfig }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc2hhcmVkL2NvbXBvbmVudHMvdGFibGUvdGFibGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFTckM7Ozs7Ozs7Ozs7O0dBV0c7QUFJSCxNQUFNLE9BQU8sWUFBWTtJQUN2QixZQUNZLGlCQUFvQyxFQUNwQyxNQUFtQjtRQURuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLFdBQU0sR0FBTixNQUFNLENBQWE7SUFDNUIsQ0FBQztJQUVKOzs7Ozs7T0FNRztJQUNILGNBQWMsQ0FDWixTQUFpQixFQUNqQixnQkFBK0M7UUFFL0MsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ25FO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDTyx3QkFBd0IsQ0FDaEMsSUFBWSxFQUNaLGdCQUErQztRQUUvQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUM1QyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbkIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLENBQUM7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O1FBQ3ZFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7O09BRUc7SUFDTyxjQUFjLENBQUMsU0FBaUI7UUFDeEMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLFVBQVUsQ0FBQyxPQUFlO1FBQ2hDLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDZixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7eUdBckpVLFlBQVk7NkdBQVosWUFBWSxjQUZYLE1BQU07MkZBRVAsWUFBWTtrQkFIeEIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCcmVha3BvaW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9icmVha3BvaW50L2JyZWFrcG9pbnQuc2VydmljZSc7XG5pbXBvcnQgeyBCUkVBS1BPSU5UIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2NvbmZpZy9sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7XG4gIFJlc3BvbnNpdmVUYWJsZUNvbmZpZ3VyYXRpb24sXG4gIFRhYmxlQ29uZmlnLFxufSBmcm9tICcuL2NvbmZpZy90YWJsZS5jb25maWcnO1xuaW1wb3J0IHsgVGFibGVTdHJ1Y3R1cmUsIFRhYmxlU3RydWN0dXJlQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vdGFibGUubW9kZWwnO1xuXG4vKipcbiAqIFJlc3BvbnNpdmUgdGFibGUgc2VydmljZS5cbiAqXG4gKiBUaGUgYFRhYmxlU2VydmljZWAgaXMgdXNlZCB0byBidWlsZCBhIGBUYWJsZVN0cnVjdHVyZWAgYnkgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb25cbiAqIGFsbG93cyBmb3IgYnJlYWtwb2ludCBzcGVjaWZpYyBjb25maWd1cmF0aW9uLCBzbyB0aGF0IHRoZSB0YWJsZSBjYW4gZGlmZmVyZW50aWF0ZSBmb3JcbiAqIHZhcmlvdXMgc2NyZWVuIHNpemVzLlxuICpcbiAqIFdoaWxlIHRoZXJlIGFyZSBzb21lIGdsb2JhbCBvcHRpb25zLCB0aGUgY29uZmlndXJhdGlvbiBpcyBtYWlubHkgZHJpdmVuIGJ5IHRoZSB0YWJsZSBfdHlwZV8uXG4gKlxuICogSWYgdGhlcmUgaXMgbm8gdGFibGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIGdpdmVuIHR5cGUgZm91bmQsIGEgdGFibGUgaGVhZGVyIHN0cnVjdHVyZVxuICogaXMgZ2VuZXJhdGVkIGJhc2VkIG9uIHRoZSBhY3R1YWwgZGF0YSAoaWYgYXZhaWxhYmxlKSBvciByYW5kb21seSBieSBnZW5lcmF0aW5nIDUgcmFuZG9tIGhlYWRlcnMuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYnJlYWtwb2ludFNlcnZpY2U6IEJyZWFrcG9pbnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb25maWc6IFRhYmxlQ29uZmlnXG4gICkge31cblxuICAvKipcbiAgICogQnVpbGRzIHRoZSB0YWJsZSBzdHJ1Y3R1cmUuXG4gICAqXG4gICAqIEBwYXJhbSB0YWJsZVR5cGUgVGhlIHRhYmxlIHR5cGUgaXMgdXNlZCAgdG8gZmluZCB0aGUgc3BlY2lmaWMgdGFibGUgY29uZmlndXJhdGlvbi5cbiAgICogQHBhcmFtIGRlZmF1bHRTdHJ1Y3R1cmUgKG9wdGlvbmFsKSBEZWZhdWx0IHRhYmxlIHN0cnVjdHVyZSB0aGF0IGNvbnRhaW5zIGZhbGxiYWNrIG9wdGlvbnMuIE1vcmUgc3BlY2lmaWMgb3B0aW9ucyBhcmUgbWVyZ2VkIHdpdGggdGhlIGRlZmF1bHQgc3RydWN0dXJlLlxuICAgKiBAcGFyYW0gZGF0YSQgKG9wdGlvbmFsKSBUaGUgYWN0dWFsIGRhdGEgY2FuIGJlIHBhc3NlZCBpbiB0byBnZW5lcmF0ZSB0aGUgdGFibGUgc3RydWN0dXJlIGJhc2VkIG9uIGFjdHVhbCBkYXRhLlxuICAgKi9cbiAgYnVpbGRTdHJ1Y3R1cmUoXG4gICAgdGFibGVUeXBlOiBzdHJpbmcsXG4gICAgZGVmYXVsdFN0cnVjdHVyZT86IFJlc3BvbnNpdmVUYWJsZUNvbmZpZ3VyYXRpb25cbiAgKTogT2JzZXJ2YWJsZTxUYWJsZVN0cnVjdHVyZT4ge1xuICAgIGlmICh0aGlzLmhhc1RhYmxlQ29uZmlnKHRhYmxlVHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3RydWN0dXJlRnJvbUNvbmZpZyh0YWJsZVR5cGUsIGRlZmF1bHRTdHJ1Y3R1cmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZFJhbmRvbVN0cnVjdHVyZSh0YWJsZVR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0YWJsZSBzdHJ1Y3R1cmUgYnkgY29uZmlndXJhdGlvbi4gVGhlIGNvbmZpZ3VyYXRpb24gY2FuIGJlXG4gICAqIGJyZWFrcG9pbnQtZHJpdmVuLCB3aGljaCBtZWFucyB0aGF0IGFuIGFsdGVybmF0aXZlIGhlYWRlciBzdHJ1Y3R1cmUgY2FuXG4gICAqIGJlIGNyZWF0ZWQgcGVyIHNjcmVlbiBzaXplLlxuICAgKlxuICAgKiBUaGUgYnJlYWtwb2ludCBpcyByZXNvbHZlZCBieSB0ZWggYEJyZWFrcG9pbnRTZXJ2aWNlYC5cbiAgICovXG4gIHByb3RlY3RlZCBidWlsZFN0cnVjdHVyZUZyb21Db25maWcoXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIGRlZmF1bHRTdHJ1Y3R1cmU/OiBSZXNwb25zaXZlVGFibGVDb25maWd1cmF0aW9uXG4gICk6IE9ic2VydmFibGU8VGFibGVTdHJ1Y3R1cmU+IHtcbiAgICByZXR1cm4gdGhpcy5icmVha3BvaW50U2VydmljZS5icmVha3BvaW50JC5waXBlKFxuICAgICAgbWFwKChicmVha3BvaW50KSA9PiAoe1xuICAgICAgICAuLi50aGlzLmdldFRhYmxlQ29uZmlnKHR5cGUsIGJyZWFrcG9pbnQsIGRlZmF1bHRTdHJ1Y3R1cmUpLFxuICAgICAgICB0eXBlLFxuICAgICAgfSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyBhbGwgYXBwbGljYWJsZSB0YWJsZSBjb25maWd1cmF0aW9uIGZvciB0aGUgZ2l2ZW4gdHlwZSBhbmQgYnJlYWtwb2ludC5cbiAgICogVGhlIGRlZmF1bHQgdGFibGUgY29uZmlndXJhdGlvbiBpcyBtZXJnZWQgd2l0aCBhbGwgcmVsZXZhbnQgYnJlYWtwb2ludFxuICAgKiBjb25maWd1cmF0aW9ucy5cbiAgICpcbiAgICogVGhpcyBhbGxvd3MgdG8gaGF2ZSBzb21lIGRlZmF1bHQgY29uZmlndXJhdGlvbnMgdGhhdCBhcHBseSB0byBhbGwgc2NyZWVucywgYW5kXG4gICAqIGFkZCBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHNvbWUgc2NyZWVucy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRUYWJsZUNvbmZpZyhcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgYnJlYWtwb2ludDogQlJFQUtQT0lOVCxcbiAgICBkZWZhdWx0U3RydWN0dXJlPzogUmVzcG9uc2l2ZVRhYmxlQ29uZmlndXJhdGlvblxuICApOiBUYWJsZVN0cnVjdHVyZUNvbmZpZ3VyYXRpb24gfCBudWxsIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLnRhYmxlPy5bdHlwZV0pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbGV2YW50ID0gdGhpcy5maW5kUmVsZXZhbnRCcmVha3BvaW50cyhicmVha3BvaW50KTtcblxuICAgIGNvbnN0IGNsb3Nlc3RCcmVha3BvaW50ID0gWy4uLnJlbGV2YW50XVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmZpbmQoKGJyKSA9PiAhIXRoaXMuY29uZmlnLnRhYmxlPy5bdHlwZV1bYnJdPy5jZWxscyk7XG4gICAgY29uc3QgY2VsbHMgPVxuICAgICAgKGNsb3Nlc3RCcmVha3BvaW50ICYmXG4gICAgICAgIHRoaXMuY29uZmlnLnRhYmxlW3R5cGVdW2Nsb3Nlc3RCcmVha3BvaW50XT8uY2VsbHMpIHx8XG4gICAgICB0aGlzLmNvbmZpZy50YWJsZVt0eXBlXS5jZWxscyB8fFxuICAgICAgZGVmYXVsdFN0cnVjdHVyZT8uY2VsbHM7XG5cbiAgICAvLyBhZGQgYWxsIGRlZmF1bHQgdGFibGUgY29uZmlndXJhdGlvbnNcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIC4uLmRlZmF1bHRTdHJ1Y3R1cmU/Lm9wdGlvbnMsXG4gICAgICAuLi50aGlzLmNvbmZpZy50YWJsZVt0eXBlXS5vcHRpb25zLFxuICAgIH07XG5cbiAgICAvLyBXZSBtZXJnZSBhbGwgdGFibGUgb3B0aW9ucyBmb3Igc21hbGxlciBicmVha3BvaW50cyBpbnRvIHRoZSBnbG9iYWxcbiAgICAvLyBvcHRpb25zLCBzbyB3ZSBpbmhlcml0IG9wdGlvbnMuXG4gICAgcmVsZXZhbnQuZm9yRWFjaCgoYnIpID0+IHtcbiAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIC4uLmRlZmF1bHRTdHJ1Y3R1cmU/Llticl0/Lm9wdGlvbnMsXG4gICAgICAgIC4uLnRoaXMuY29uZmlnLnRhYmxlPy5bdHlwZV0/Llticl0/Lm9wdGlvbnMsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgY2VsbHMsIG9wdGlvbnMgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIHRhYmxlIHN0cnVjdHVyZSBieSB0aGUgaGVscCBvZiB0aGUgZmlyc3QgZGF0YSByb3cuXG4gICAqL1xuICBwcm90ZWN0ZWQgYnVpbGRTdHJ1Y3R1cmVGcm9tRGF0YShcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgZGF0YSQ6IE9ic2VydmFibGU8YW55PlxuICApOiBPYnNlcnZhYmxlPFRhYmxlU3RydWN0dXJlPiB7XG4gICAgdGhpcy5sb2dXYXJuaW5nKFxuICAgICAgYE5vIHRhYmxlIGNvbmZpZ3VyYXRpb24gZm91bmQgdG8gcmVuZGVyIHRhYmxlIHdpdGggdHlwZSBcIiR7dHlwZX1cIi4gVGhlIHRhYmxlIGhlYWRlciBmb3IgXCIke3R5cGV9XCIgaXMgZ2VuZXJhdGVkIGJ5IHRoZSBoZWxwIG9mIHRoZSBmaXJzdCBkYXRhIGl0ZW1gXG4gICAgKTtcbiAgICByZXR1cm4gZGF0YSQucGlwZShcbiAgICAgIG1hcCgoZGF0YTogYW55W10pID0+IHtcbiAgICAgICAgY29uc3QgY2VsbHMgPSBPYmplY3Qua2V5cyhkYXRhPy5bMF0pLm1hcCgoa2V5KSA9PiBrZXkpO1xuICAgICAgICByZXR1cm4geyB0eXBlLCBjZWxscyB9IGFzIFRhYmxlU3RydWN0dXJlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzIGEgbGFzdCByZXNvcnQsIHRoZSB0YWJsZSBzdHJ1Y3R1cmUgaXMgcmFuZG9tbHkgY3JlYXRlZC4gVGhlIHJhbmRvbSBzdHJ1Y3R1cmVcbiAgICogY29udGFpbnMgNSBoZWFkZXJzLCBzbyB0aGF0IHNvbWUgb2YgdGhlIHVua25vd24gZGF0YSBpcyB2aXN1YWxpemVkLlxuICAgKi9cbiAgcHJvdGVjdGVkIGJ1aWxkUmFuZG9tU3RydWN0dXJlKHR5cGU6IHN0cmluZyk6IE9ic2VydmFibGU8VGFibGVTdHJ1Y3R1cmU+IHtcbiAgICB0aGlzLmxvZ1dhcm5pbmcoXG4gICAgICBgTm8gZGF0YSBhdmFpbGFibGUgZm9yIFwiJHt0eXBlfVwiLCBhIHJhbmRvbSBzdHJ1Y3R1cmUgaXMgZ2VuZXJhdGVkICh3aXRoIGhpZGRlbiB0YWJsZSBoZWFkZXJzKS5gXG4gICAgKTtcbiAgICByZXR1cm4gb2Yoe1xuICAgICAgdHlwZSxcbiAgICAgIGNlbGxzOiBbJ3Vua25vd24nLCAndW5rbm93bicsICd1bmtub3duJywgJ3Vua25vd24nLCAndW5rbm93biddLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIGFsbCB0aGUgYnJlYWtwb2ludHMgY2FuIGNvbnRyaWJ1dGUgdG8gdGhlIHRhYmxlIGNvbmZpZ3VyYXRpb24sIGZyb20gc21hbGxcbiAgICogdG8gY3VycmVudC5cbiAgICpcbiAgICogRm9yIGV4YW1wbGUsIGlmIHRoZSBjdXJyZW50IGJyZWFrcG9pbnQgaXMgYE1EYCwgdGhpcyByZXR1cm5zIGBbWFMsIFNNLCBNRF1gLlxuICAgKi9cbiAgcHJvdGVjdGVkIGZpbmRSZWxldmFudEJyZWFrcG9pbnRzKGJyZWFrcG9pbnQ6IEJSRUFLUE9JTlQpOiBCUkVBS1BPSU5UW10ge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmJyZWFrcG9pbnRzLmluZGV4T2YoYnJlYWtwb2ludCk7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludFNlcnZpY2UuYnJlYWtwb2ludHMuc2xpY2UoMCwgY3VycmVudCArIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiB0aGUgdGhlcmUgaXMgYSBjb25maWd1cmF0aW9uIGZvciB0aGUgdGFibGUgYXZhaWxhYmxlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGhhc1RhYmxlQ29uZmlnKHRhYmxlVHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5jb25maWcudGFibGU/Llt0YWJsZVR5cGVdO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ3MgYSBtZXNzYWdlIGluIHRoZSBjb25zb2xlIHRvIGluY3JlYXNlIGRldmVsb3BlciBleHBlcmllbmNlLlxuICAgKlxuICAgKiBUaGUgbWVzc2FnZSBpcyBvbmx5IGxvZ2dlZCBpbiBkZXYgbW9kZS5cbiAgICovXG4gIHByaXZhdGUgbG9nV2FybmluZyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==