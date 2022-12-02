/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Types of dialog openings supported
 */
export var DIALOG_TYPE;
(function (DIALOG_TYPE) {
    DIALOG_TYPE["POPOVER"] = "POPOVER";
    DIALOG_TYPE["POPOVER_CENTER"] = "POPOVER_CENTER";
    DIALOG_TYPE["POPOVER_CENTER_BACKDROP"] = "POPOVER_CENTER_BACKDROP";
    DIALOG_TYPE["DIALOG"] = "DIALOG";
    DIALOG_TYPE["SIDEBAR_START"] = "SIDEBAR_START";
    DIALOG_TYPE["SIDEBAR_END"] = "SIDEBAR_END";
})(DIALOG_TYPE || (DIALOG_TYPE = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvbGF5b3V0L2xhdW5jaC1kaWFsb2cvY29uZmlnL2xhdW5jaC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQXlFSDs7R0FFRztBQUNILE1BQU0sQ0FBTixJQUFZLFdBT1g7QUFQRCxXQUFZLFdBQVc7SUFDckIsa0NBQW1CLENBQUE7SUFDbkIsZ0RBQWlDLENBQUE7SUFDakMsa0VBQW1ELENBQUE7SUFDbkQsZ0NBQWlCLENBQUE7SUFDakIsOENBQStCLENBQUE7SUFDL0IsMENBQTJCLENBQUE7QUFDN0IsQ0FBQyxFQVBXLFdBQVcsS0FBWCxXQUFXLFFBT3RCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgT3V0bGV0UG9zaXRpb24gfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQubW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaENvbmZpZyB7XG4gIFtrZXk6IHN0cmluZ106IExhdW5jaE9wdGlvbnM7XG59XG5cbmV4cG9ydCB0eXBlIExhdW5jaE9wdGlvbnMgPVxuICB8IExhdW5jaE91dGxldERpYWxvZ1xuICB8IExhdW5jaElubGluZURpYWxvZ1xuICB8IExhdW5jaFJvdXRlXG4gIHwgTGF1bmNoSW5saW5lUm9vdERpYWxvZztcblxuLyoqXG4gKiBQYXJlbnQgdHlwZSBmb3IgY29uZmlndXJhdGlvbnMgdGhhdCByZW5kZXIgY29tcG9uZW50c1xuICovXG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaERpYWxvZyB7XG4gIGNvbXBvbmVudDogYW55O1xuICAvKipcbiAgICogQ2FuIHRoZSBlbGVtZW50IGJlIHJlbmRlcmVkIG11bHRpcGxlIHRpbWVzXG4gICAqL1xuICBtdWx0aT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBEaWFsb2cgdHlwZSBpcyB1c2VkIHRvIGFwcGx5IENTUyBjbGFzc2VzXG4gICAqL1xuICBkaWFsb2dUeXBlPzogRElBTE9HX1RZUEU7XG59XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbiB0eXBlIHRvIHJlbmRlciBhIGNvbXBvbmVudCBpbiBhbiBvdXRsZXQuXG4gKiBPdXRsZXQgcmVuZGVyaW5nIHNob3VsZCBvbmx5IGJlIHVzZWQgZm9yIGVsZW1lbnRzIHRoYXQgb3BlbiBvbmNlIGFuZCBkbyBub3QgY2xvc2UuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoT3V0bGV0RGlhbG9nIGV4dGVuZHMgTGF1bmNoRGlhbG9nIHtcbiAgLyoqXG4gICAqIFRoZSBvdXRsZXQgdG8gcmVuZGVyIHRoZSBlbGVtZW50IGluXG4gICAqL1xuICBvdXRsZXQ6IHN0cmluZztcbiAgLyoqXG4gICAqIERlZmF1bHQ6IE91dGxldFBvc2l0aW9uLkJFRk9SRVxuICAgKi9cbiAgcG9zaXRpb24/OiBPdXRsZXRQb3NpdGlvbjtcbn1cblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIHR5cGUgdG8gcmVuZGVyIGEgY29tcG9uZW50IGlubGluZSAobmV4dCB0byB0aGUgdHJpZ2dlcilcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMYXVuY2hJbmxpbmVEaWFsb2cgZXh0ZW5kcyBMYXVuY2hEaWFsb2cge1xuICBpbmxpbmU6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbiB0eXBlIHRvIHJlbmRlciBhIGNvbXBvbmVudCBkaXJlY3RseSBpbnNpZGUgdGhlIGN4LXN0b3JlZnJvbnQgKHN0b3JlZnJvbnQgc2VsZWN0b3IpLlxuICogQmVzdCB1c2VkIGZvciBnbG9iYWwgZWxlbWVudHMgbGlrZSBkaWFsb2dzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaElubGluZVJvb3REaWFsb2cgZXh0ZW5kcyBMYXVuY2hEaWFsb2cge1xuICBpbmxpbmVSb290OiBib29sZWFuO1xufVxuXG4vKipcbiAqIENvbmZpZ3VyYXRpb24gdHlwZSB0byByZW5kZXIgYXMgbGlua1xuICovXG5leHBvcnQgaW50ZXJmYWNlIExhdW5jaFJvdXRlIHtcbiAgLyoqXG4gICAqIFRoZSByb3V0ZSBmb3IgdGhlIHVybFxuICAgKi9cbiAgY3hSb3V0ZTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHBhcmFtZXRlcnMgZm9yIHRoZSByb3V0ZVxuICAgKi9cbiAgcGFyYW1zPzogeyBbcGFyYW06IHN0cmluZ106IGFueSB9O1xufVxuXG4vKipcbiAqIFR5cGVzIG9mIGRpYWxvZyBvcGVuaW5ncyBzdXBwb3J0ZWRcbiAqL1xuZXhwb3J0IGVudW0gRElBTE9HX1RZUEUge1xuICBQT1BPVkVSID0gJ1BPUE9WRVInLFxuICBQT1BPVkVSX0NFTlRFUiA9ICdQT1BPVkVSX0NFTlRFUicsXG4gIFBPUE9WRVJfQ0VOVEVSX0JBQ0tEUk9QID0gJ1BPUE9WRVJfQ0VOVEVSX0JBQ0tEUk9QJyxcbiAgRElBTE9HID0gJ0RJQUxPRycsXG4gIFNJREVCQVJfU1RBUlQgPSAnU0lERUJBUl9TVEFSVCcsXG4gIFNJREVCQVJfRU5EID0gJ1NJREVCQVJfRU5EJyxcbn1cblxuLyoqXG4gKiBMaXN0IG9mIGF2YWlsYWJsZSBjYWxsZXJzXG4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIExBVU5DSF9DQUxMRVIge1xuICBBU00gPSAnQVNNJyxcbiAgU0tJUF9MSU5LUyA9ICdTS0lQX0xJTktTJyxcbiAgQU5PTllNT1VTX0NPTlNFTlQgPSAnQU5PTllNT1VTX0NPTlNFTlQnLFxuICBSRVBMRU5JU0hNRU5UX09SREVSID0gJ1JFUExFTklTSE1FTlRfT1JERVInLFxuICBQTEFDRV9PUkRFUl9TUElOTkVSID0gJ1BMQUNFX09SREVSX1NQSU5ORVInLFxuICBTVUdHRVNURURfQUREUkVTU0VTID0gJ1NVR0dFU1RFRF9BRERSRVNTRVMnLFxuICBDT1VQT04gPSAnQ09VUE9OJyxcbiAgU1RPQ0tfTk9USUZJQ0FUSU9OID0gJ1NUT0NLX05PVElGSUNBVElPTicsXG59XG4iXX0=