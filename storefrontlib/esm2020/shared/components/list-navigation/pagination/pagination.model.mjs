/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The item type is used to add semantic structure to the
 * PaginationItem, so that the UI understands the usage.
 */
export var PaginationItemType;
(function (PaginationItemType) {
    PaginationItemType["GAP"] = "gap";
    PaginationItemType["FIRST"] = "first";
    PaginationItemType["LAST"] = "last";
    PaginationItemType["PREVIOUS"] = "previous";
    PaginationItemType["NEXT"] = "next";
    PaginationItemType["START"] = "start";
    PaginationItemType["END"] = "end";
    PaginationItemType["PAGE"] = "page";
})(PaginationItemType || (PaginationItemType = {}));
export var PaginationNavigationPosition;
(function (PaginationNavigationPosition) {
    PaginationNavigationPosition["ASIDE"] = "aside";
    PaginationNavigationPosition["BEFORE"] = "before";
    PaginationNavigationPosition["AFTER"] = "after";
})(PaginationNavigationPosition || (PaginationNavigationPosition = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc2hhcmVkL2NvbXBvbmVudHMvbGlzdC1uYXZpZ2F0aW9uL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBYUg7OztHQUdHO0FBQ0gsTUFBTSxDQUFOLElBQVksa0JBU1g7QUFURCxXQUFZLGtCQUFrQjtJQUM1QixpQ0FBVyxDQUFBO0lBQ1gscUNBQWUsQ0FBQTtJQUNmLG1DQUFhLENBQUE7SUFDYiwyQ0FBcUIsQ0FBQTtJQUNyQixtQ0FBYSxDQUFBO0lBQ2IscUNBQWUsQ0FBQTtJQUNmLGlDQUFXLENBQUE7SUFDWCxtQ0FBYSxDQUFBO0FBQ2YsQ0FBQyxFQVRXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFTN0I7QUFtRUQsTUFBTSxDQUFOLElBQVksNEJBSVg7QUFKRCxXQUFZLDRCQUE0QjtJQUN0QywrQ0FBZSxDQUFBO0lBQ2YsaURBQWlCLENBQUE7SUFDakIsK0NBQWUsQ0FBQTtBQUNqQixDQUFDLEVBSlcsNEJBQTRCLEtBQTVCLDRCQUE0QixRQUl2QyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHBhZ2UgaXRlbSBmb3IgYSBwYWdpbmF0aW9uIHN5c3RlbS4gVGhpcyBpcyB1c2VkXG4gKiB0byBzdG9yZSB0aGUgbW9kZWwgb2YgZWFjaCBwYWdlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2luYXRpb25JdGVtIHtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIHR5cGU/OiBQYWdpbmF0aW9uSXRlbVR5cGU7XG4gIC8qKiBUaGUgbnVtYmVyIGlzIHVzZWQgd2hlbiB0aGUgdHlwZSBpcyB7QGxpbmsgUGFnaW5hdGlvbkl0ZW1UeXBlLlBBR0V9ICovXG4gIG51bWJlcj86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBUaGUgaXRlbSB0eXBlIGlzIHVzZWQgdG8gYWRkIHNlbWFudGljIHN0cnVjdHVyZSB0byB0aGVcbiAqIFBhZ2luYXRpb25JdGVtLCBzbyB0aGF0IHRoZSBVSSB1bmRlcnN0YW5kcyB0aGUgdXNhZ2UuXG4gKi9cbmV4cG9ydCBlbnVtIFBhZ2luYXRpb25JdGVtVHlwZSB7XG4gIEdBUCA9ICdnYXAnLFxuICBGSVJTVCA9ICdmaXJzdCcsXG4gIExBU1QgPSAnbGFzdCcsXG4gIFBSRVZJT1VTID0gJ3ByZXZpb3VzJyxcbiAgTkVYVCA9ICduZXh0JyxcbiAgU1RBUlQgPSAnc3RhcnQnLFxuICBFTkQgPSAnZW5kJyxcbiAgUEFHRSA9ICdwYWdlJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdpbmF0aW9uT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgcmFuZ2Ugb2YgZGlyZWN0IGFjY2Vzc2libGUgcGFnZXMgaW4gdGhlIHBhZ2luYXRpb24uXG4gICAqXG4gICAqIGDCqyA0ICg1KSA2IMK7YFxuICAgKlxuICAgKiBEZWZhdWx0cyB0byAzLlxuICAgKi9cbiAgcmFuZ2VDb3VudD86IG51bWJlcjtcblxuICAvKiogQWRkcyBhIGxpbmsgdG8gc2tpcCB0byB0aGUgc3RhcnQgb2YgdGhlIHBhZ2VzLCBkZWZhdWx0cyB0byBmYWxzZS4gKi9cbiAgYWRkU3RhcnQ/OiBib29sZWFuO1xuICAvKiogQSBsaW5rIHRvIHNraXAgdG8gdGhlIGVuZCBvZiB0aGUgcGFnZXMsIGRlZmF1bHRzIHRvIGZhbHNlLiAqL1xuICBhZGRFbmQ/OiBib29sZWFuO1xuICAvKiogQSBsaW5rIHRvIHRoZSBwcmV2aW91cyBwYWdlLCBkZWZhdWx0cyB0byBmYWxzZS4gKi9cbiAgYWRkUHJldmlvdXM/OiBib29sZWFuO1xuICAvKiogQSBsaW5rIHRvIHRoZSBwcmV2aW91cyBwYWdlLCBkZWZhdWx0cyB0byBmYWxzZS4gKi9cbiAgYWRkTmV4dD86IGJvb2xlYW47XG5cbiAgbmF2aWdhdGlvblBvc2l0aW9uPzogUGFnaW5hdGlvbk5hdmlnYXRpb25Qb3NpdGlvbjtcblxuICAvKiogQSBsaW5rIHRvIHRoZSBmaXJzdCBwYWdlIGNhbiBiZSBhZGRlZCBpbiBjYXNlIGl0IGlzIG5vdCBpbmNsdWRlZCBhbHJlYWR5LCBkZWZhdWx0cyB0byBmYWxzZS4gKi9cbiAgYWRkRmlyc3Q/OiBib29sZWFuO1xuICAvKiogQSBsaW5rIHRvIHRoZSBsYXN0IHBhZ2UgY2FuIGJlIGFkZGVkIGluIGNhc2UgaXQgaXMgbm90IGluY2x1ZGVkIGFscmVhZHksIGRlZmF1bHRzIHRvIGZhbHNlLiAqL1xuICBhZGRMYXN0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWRkcyBhIGdhcCBiZWZvcmUgYW5kIGFmdGVyIHRoZSBwYWdlcy4gdG8gdmlzdWFsaXplIGhpZGRlbiBwYWdlcy4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqXG4gICAqIGAxIC4uLiAgNCAoNSkgNiAuLi4gMThgXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgKi9cbiAgYWRkRG90cz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIElmIHRoZSBwYWdlIGRvdHMgb25seSByZXByZXNlbnRzIGEgc2luZ2xlIHBhZ2UsIHdlIHJhdGhlciBhZGQgdGhlIHBhZ2VcbiAgICogYXMgdGhpcyB3b3VsZCB0YWtlIHRoZSBzYW1lIGFtb3VudCBvZiBzcGFjZS4gU29tZSBVWCBtaWdodCB3YW50IHRvIHVzZVxuICAgKiB0aGUgZG90cyBmb3IgY29uc2lzdGVuY3kgcmVhc29ucywgd2hpY2ggd2h5IHRoaXMgb3B0aW9uIGlzIGNvbmZpZ3VyYWJsZS5cbiAgICpcbiAgICogVGhpcyB0eXBpY2FsbHkgaGFwcGVucyBvbiB0aGUgNHRoIHBhZ2UgKGluIGNhc2UgdGhlIHJhbmdlIGlzIDMpOlxuICAgKiBJbnN0ZWFkIG9mIGhhdmluZzpcbiAgICpcbiAgICogIGAxIC4uLiAgMyAoNCkgNWBcbiAgICpcbiAgICogd2UnZCBoYXZlXG4gICAqXG4gICAqIGAxIDIgMyAoNCkgNWAuXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgKi9cbiAgc3Vic3RpdHV0ZURvdHNGb3JTaW5ndWxhclBhZ2U/OiBib29sZWFuO1xuXG4gIC8qKiBDdXN0b20gbGFiZWwgZm9yIHRoZSBzdGFydCBsaW5rLCBkZWZhdWx0cyB0byBgwqtgLiAqL1xuICBzdGFydExhYmVsPzogc3RyaW5nO1xuICAvKiogQ3VzdG9tIGxhYmVsIGZvciB0aGUgcHJldmlvdXMgbGluaywgZGVmYXVsdHMgdG8gYOKAuWAuICovXG4gIHByZXZpb3VzTGFiZWw/OiBzdHJpbmc7XG4gIC8qKiBDdXN0b20gbGFiZWwgZm9yIHRoZSBuZXh0IGxpbmssIGRlZmF1bHRzIHRvIGDigLpgLiAqL1xuICBuZXh0TGFiZWw/OiBzdHJpbmc7XG4gIC8qKiBDdXN0b20gbGFiZWwgZm9yIHRoZSBlbmQgbGluaywgZGVmYXVsdHMgdG8gYMK7YC4gKi9cbiAgZW5kTGFiZWw/OiBzdHJpbmc7XG4gIC8qKiBDdXN0b20gbGFiZWwgZm9yIHRoZSBkb3RzLCBkZWZhdWx0cyB0byBgLi4uYC4gKi9cbiAgZG90c0xhYmVsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBQYWdpbmF0aW9uTmF2aWdhdGlvblBvc2l0aW9uIHtcbiAgQVNJREUgPSAnYXNpZGUnLFxuICBCRUZPUkUgPSAnYmVmb3JlJyxcbiAgQUZURVIgPSAnYWZ0ZXInLFxufVxuIl19