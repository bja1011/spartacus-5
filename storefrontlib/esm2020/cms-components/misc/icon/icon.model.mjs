/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Injectable } from '@angular/core';
import { Config } from '@spartacus/core';
import * as i0 from "@angular/core";
export var ICON_TYPE;
(function (ICON_TYPE) {
    ICON_TYPE["STAR"] = "STAR";
    ICON_TYPE["SEARCH"] = "SEARCH";
    ICON_TYPE["CART"] = "CART";
    ICON_TYPE["INFO"] = "INFO";
    ICON_TYPE["GRID"] = "GRID";
    ICON_TYPE["LIST"] = "LIST";
    ICON_TYPE["CARET_DOWN"] = "CARET_DOWN";
    ICON_TYPE["CARET_UP"] = "CARET_UP";
    ICON_TYPE["CARET_LEFT"] = "CARET_LEFT";
    ICON_TYPE["CARET_RIGHT"] = "CARET_RIGHT";
    ICON_TYPE["CLOSE"] = "CLOSE";
    ICON_TYPE["ERROR"] = "ERROR";
    ICON_TYPE["WARNING"] = "WARNING";
    ICON_TYPE["SUCCESS"] = "SUCCESS";
    ICON_TYPE["VISA"] = "VISA";
    ICON_TYPE["MASTER_CARD"] = "MASTER_CARD";
    ICON_TYPE["AMEX"] = "AMEX";
    ICON_TYPE["DINERS_CLUB"] = "DINERS_CLUB";
    ICON_TYPE["CREDIT_CARD"] = "CREDIT_CARD";
    ICON_TYPE["EXPAND"] = "EXPAND";
    ICON_TYPE["COLLAPSE"] = "COLLAPSE";
    ICON_TYPE["RESET"] = "RESET";
    ICON_TYPE["CIRCLE"] = "CIRCLE";
    ICON_TYPE["HEART"] = "HEART";
    ICON_TYPE["EMPTY_HEART"] = "EMPTY_HEART";
    ICON_TYPE["FILTER"] = "FILTER";
    ICON_TYPE["PENCIL"] = "PENCIL";
    ICON_TYPE["CLOCK"] = "CLOCK";
    ICON_TYPE["TRASH"] = "TRASH";
    ICON_TYPE["ACTIVE"] = "ACTIVE";
    ICON_TYPE["SORT_DOWN"] = "SORT_DOWN";
    ICON_TYPE["SORT"] = "SORT";
    ICON_TYPE["ON"] = "ON";
    ICON_TYPE["OFF"] = "OFF";
    ICON_TYPE["LINK_OUT"] = "LINK_OUT";
    ICON_TYPE["EXPAND_ARROWS"] = "EXPAND_ARROWS";
    ICON_TYPE["EYE"] = "EYE";
    ICON_TYPE["EYE_SLASH"] = "EYE_SLASH";
})(ICON_TYPE || (ICON_TYPE = {}));
export class IconConfig {
}
IconConfig.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IconConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
IconConfig.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IconConfig, providedIn: 'root', useExisting: Config });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: IconConfig, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                    useExisting: Config,
                }]
        }] });
/**
 * Each ICON type can have an companied resource type, such as SVG, LINK (font) or just TEXT.
 * The resources will be automatically loaded in case they're required for the `ICON_TYPE`.
 */
export var IconResourceType;
(function (IconResourceType) {
    /**
     * An svg based icon requires an SVG resource that must be loaded,
     * this is typically a sprite svg file.
     */
    IconResourceType["SVG"] = "svg";
    /**
     * A font based ICON might require an additional CSS file to be loaded.
     */
    IconResourceType["LINK"] = "link";
    /**
     * Text based icons will simply add the ICON string to the DOM. Text icons do not need an image
     * or CSS pseudo class (i.e. :before), as the text itself is the icon (i.e. +)
     */
    IconResourceType["TEXT"] = "text";
})(IconResourceType || (IconResourceType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUd6QyxNQUFNLENBQU4sSUFBWSxTQXVDWDtBQXZDRCxXQUFZLFNBQVM7SUFDbkIsMEJBQWEsQ0FBQTtJQUNiLDhCQUFpQixDQUFBO0lBQ2pCLDBCQUFhLENBQUE7SUFDYiwwQkFBYSxDQUFBO0lBQ2IsMEJBQWEsQ0FBQTtJQUNiLDBCQUFhLENBQUE7SUFDYixzQ0FBeUIsQ0FBQTtJQUN6QixrQ0FBcUIsQ0FBQTtJQUNyQixzQ0FBeUIsQ0FBQTtJQUN6Qix3Q0FBMkIsQ0FBQTtJQUMzQiw0QkFBZSxDQUFBO0lBQ2YsNEJBQWUsQ0FBQTtJQUNmLGdDQUFtQixDQUFBO0lBQ25CLGdDQUFtQixDQUFBO0lBQ25CLDBCQUFhLENBQUE7SUFDYix3Q0FBMkIsQ0FBQTtJQUMzQiwwQkFBYSxDQUFBO0lBQ2Isd0NBQTJCLENBQUE7SUFDM0Isd0NBQTJCLENBQUE7SUFDM0IsOEJBQWlCLENBQUE7SUFDakIsa0NBQXFCLENBQUE7SUFDckIsNEJBQWUsQ0FBQTtJQUNmLDhCQUFpQixDQUFBO0lBQ2pCLDRCQUFlLENBQUE7SUFDZix3Q0FBMkIsQ0FBQTtJQUMzQiw4QkFBaUIsQ0FBQTtJQUNqQiw4QkFBaUIsQ0FBQTtJQUNqQiw0QkFBZSxDQUFBO0lBQ2YsNEJBQWUsQ0FBQTtJQUNmLDhCQUFpQixDQUFBO0lBQ2pCLG9DQUF1QixDQUFBO0lBQ3ZCLDBCQUFhLENBQUE7SUFDYixzQkFBUyxDQUFBO0lBQ1Qsd0JBQVcsQ0FBQTtJQUNYLGtDQUFxQixDQUFBO0lBQ3JCLDRDQUErQixDQUFBO0lBQy9CLHdCQUFXLENBQUE7SUFDWCxvQ0FBdUIsQ0FBQTtBQUN6QixDQUFDLEVBdkNXLFNBQVMsS0FBVCxTQUFTLFFBdUNwQjtBQU1ELE1BQU0sT0FBZ0IsVUFBVTs7dUdBQVYsVUFBVTsyR0FBVixVQUFVLGNBSGxCLE1BQU0sZUFDTCxNQUFNOzJGQUVDLFVBQVU7a0JBSi9CLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07b0JBQ2xCLFdBQVcsRUFBRSxNQUFNO2lCQUNwQjs7QUErQ0Q7OztHQUdHO0FBQ0gsTUFBTSxDQUFOLElBQVksZ0JBZ0JYO0FBaEJELFdBQVksZ0JBQWdCO0lBQzFCOzs7T0FHRztJQUNILCtCQUFXLENBQUE7SUFFWDs7T0FFRztJQUNILGlDQUFhLENBQUE7SUFDYjs7O09BR0c7SUFDSCxpQ0FBYSxDQUFBO0FBQ2YsQ0FBQyxFQWhCVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBZ0IzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBEaXJlY3Rpb25Nb2RlIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2RpcmVjdGlvbi9jb25maWcvZGlyZWN0aW9uLm1vZGVsJztcblxuZXhwb3J0IGVudW0gSUNPTl9UWVBFIHtcbiAgU1RBUiA9ICdTVEFSJyxcbiAgU0VBUkNIID0gJ1NFQVJDSCcsXG4gIENBUlQgPSAnQ0FSVCcsXG4gIElORk8gPSAnSU5GTycsXG4gIEdSSUQgPSAnR1JJRCcsXG4gIExJU1QgPSAnTElTVCcsXG4gIENBUkVUX0RPV04gPSAnQ0FSRVRfRE9XTicsXG4gIENBUkVUX1VQID0gJ0NBUkVUX1VQJyxcbiAgQ0FSRVRfTEVGVCA9ICdDQVJFVF9MRUZUJyxcbiAgQ0FSRVRfUklHSFQgPSAnQ0FSRVRfUklHSFQnLFxuICBDTE9TRSA9ICdDTE9TRScsXG4gIEVSUk9SID0gJ0VSUk9SJyxcbiAgV0FSTklORyA9ICdXQVJOSU5HJyxcbiAgU1VDQ0VTUyA9ICdTVUNDRVNTJyxcbiAgVklTQSA9ICdWSVNBJyxcbiAgTUFTVEVSX0NBUkQgPSAnTUFTVEVSX0NBUkQnLFxuICBBTUVYID0gJ0FNRVgnLFxuICBESU5FUlNfQ0xVQiA9ICdESU5FUlNfQ0xVQicsXG4gIENSRURJVF9DQVJEID0gJ0NSRURJVF9DQVJEJyxcbiAgRVhQQU5EID0gJ0VYUEFORCcsXG4gIENPTExBUFNFID0gJ0NPTExBUFNFJyxcbiAgUkVTRVQgPSAnUkVTRVQnLFxuICBDSVJDTEUgPSAnQ0lSQ0xFJyxcbiAgSEVBUlQgPSAnSEVBUlQnLFxuICBFTVBUWV9IRUFSVCA9ICdFTVBUWV9IRUFSVCcsXG4gIEZJTFRFUiA9ICdGSUxURVInLFxuICBQRU5DSUwgPSAnUEVOQ0lMJyxcbiAgQ0xPQ0sgPSAnQ0xPQ0snLFxuICBUUkFTSCA9ICdUUkFTSCcsXG4gIEFDVElWRSA9ICdBQ1RJVkUnLFxuICBTT1JUX0RPV04gPSAnU09SVF9ET1dOJyxcbiAgU09SVCA9ICdTT1JUJyxcbiAgT04gPSAnT04nLFxuICBPRkYgPSAnT0ZGJyxcbiAgTElOS19PVVQgPSAnTElOS19PVVQnLFxuICBFWFBBTkRfQVJST1dTID0gJ0VYUEFORF9BUlJPV1MnLFxuICBFWUUgPSAnRVlFJyxcbiAgRVlFX1NMQVNIID0gJ0VZRV9TTEFTSCcsXG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICB1c2VFeGlzdGluZzogQ29uZmlnLFxufSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJY29uQ29uZmlnIHtcbiAgaWNvbj86IEljb25PcHRpb25zO1xufVxuXG5kZWNsYXJlIG1vZHVsZSAnQHNwYXJ0YWN1cy9jb3JlJyB7XG4gIGludGVyZmFjZSBDb25maWcgZXh0ZW5kcyBJY29uQ29uZmlnIHt9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWNvbk9wdGlvbnMge1xuICAvKipcbiAgICogRWFjaCBpY29uIHR5cGUgY2FuIGJlIGNvbmZpZ3VyZWQgd2l0aCBhIHNvLWNhbGxlZCBzeW1ib2wuIFRoZSBzeW1ib2wgd2lsbFxuICAgKiBiZSB1c2VkIHRvIG1hcCB0aGUgaWNvbiB0byBhbiBTVkcgYHN5bWJvbGAgKGlkKSBvciB0byB0aGUgc3R5bGUgY2xhc3NlcyBvZlxuICAgKiBhIGZvbnQgYmFzZWQgaWNvbi4gVGhlIGZvbGxvd2luZyBjb25maWd1cmF0aW9uIHdvdWxkIG1hcCB0byBhIGZvbnRhd2Vzb21lXG4gICAqIGljb246XG4gICAqXG4gICAqIGljb246IHtcbiAgICogICBzeW1ib2xzOiB7XG4gICAqICAgICBDQVJUOiAnZmFzIGZhLXNob3BwaW5nLWNhcnQnXG4gICAqICAgfVxuICAgKiB9XG4gICAqL1xuICBzeW1ib2xzPzoge1xuICAgIFtJQ09OX1RZUEU6IHN0cmluZ106IHN0cmluZztcbiAgfTtcblxuICAvKipcbiAgICogUmVzb3VyY2VzIGFyZSB1c2VkIHRvIG1hcCBpY29uIHR5cGVzIHRvIGNlcnRhaW4gYXNzZXQsIHN1Y2ggYXMgYW4gU1ZHIChzcHJpdGUpIGltYWdlLlxuICAgKiBUaGUgcmVzb3VyY2UgdHlwZSAoYEljb25SZXNvdXJjZVR5cGVgKSBkaWN0YXRlcyB3aGV0aGVyIGFuIFNWRyBpbWFnZSBpcyB1c2VkLiBUaGUgVVJMXG4gICAqIGlzIHVzZWQgZm9yIHRoZSBTVkcgeGxpbmsgcmVmZXJlbmNlLlxuICAgKi9cbiAgcmVzb3VyY2VzPzogSWNvbkNvbmZpZ1Jlc291cmNlW107XG5cbiAgLyoqXG4gICAqIExpc3RzIGljb25zIHRoYXQgc2hvdWxkIGJlIGZsaXBwZWQgZm9yIGEgc3BlY2lmaWMgZGlyZWN0aW9uLlxuICAgKi9cbiAgZmxpcERpcmVjdGlvbj86IHtcbiAgICBbSUNPTl9UWVBFOiBzdHJpbmddOiBEaXJlY3Rpb25Nb2RlO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEljb25Db25maWdSZXNvdXJjZSB7XG4gIHR5cGU6IEljb25SZXNvdXJjZVR5cGUgfCBzdHJpbmc7XG4gIHVybD86IHN0cmluZztcbiAgdHlwZXM/OiAoSUNPTl9UWVBFIHwgc3RyaW5nKVtdO1xufVxuXG4vKipcbiAqIEVhY2ggSUNPTiB0eXBlIGNhbiBoYXZlIGFuIGNvbXBhbmllZCByZXNvdXJjZSB0eXBlLCBzdWNoIGFzIFNWRywgTElOSyAoZm9udCkgb3IganVzdCBURVhULlxuICogVGhlIHJlc291cmNlcyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgbG9hZGVkIGluIGNhc2UgdGhleSdyZSByZXF1aXJlZCBmb3IgdGhlIGBJQ09OX1RZUEVgLlxuICovXG5leHBvcnQgZW51bSBJY29uUmVzb3VyY2VUeXBlIHtcbiAgLyoqXG4gICAqIEFuIHN2ZyBiYXNlZCBpY29uIHJlcXVpcmVzIGFuIFNWRyByZXNvdXJjZSB0aGF0IG11c3QgYmUgbG9hZGVkLFxuICAgKiB0aGlzIGlzIHR5cGljYWxseSBhIHNwcml0ZSBzdmcgZmlsZS5cbiAgICovXG4gIFNWRyA9ICdzdmcnLFxuXG4gIC8qKlxuICAgKiBBIGZvbnQgYmFzZWQgSUNPTiBtaWdodCByZXF1aXJlIGFuIGFkZGl0aW9uYWwgQ1NTIGZpbGUgdG8gYmUgbG9hZGVkLlxuICAgKi9cbiAgTElOSyA9ICdsaW5rJyxcbiAgLyoqXG4gICAqIFRleHQgYmFzZWQgaWNvbnMgd2lsbCBzaW1wbHkgYWRkIHRoZSBJQ09OIHN0cmluZyB0byB0aGUgRE9NLiBUZXh0IGljb25zIGRvIG5vdCBuZWVkIGFuIGltYWdlXG4gICAqIG9yIENTUyBwc2V1ZG8gY2xhc3MgKGkuZS4gOmJlZm9yZSksIGFzIHRoZSB0ZXh0IGl0c2VsZiBpcyB0aGUgaWNvbiAoaS5lLiArKVxuICAgKi9cbiAgVEVYVCA9ICd0ZXh0Jyxcbn1cbiJdfQ==