/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
export const ADD_MESSAGE = '[Global-message] Add a Message';
export const REMOVE_MESSAGE = '[Global-message] Remove a Message';
export const REMOVE_MESSAGES_BY_TYPE = '[Global-message] Remove messages by type';
export class AddMessage {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_MESSAGE;
    }
}
export class RemoveMessage {
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_MESSAGE;
    }
}
export class RemoveMessagesByType {
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_MESSAGES_BY_TYPE;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2dsb2JhbC1tZXNzYWdlL3N0b3JlL2FjdGlvbnMvZ2xvYmFsLW1lc3NhZ2UuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBUUgsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLGdDQUFnQyxDQUFDO0FBQzVELE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxtQ0FBbUMsQ0FBQztBQUNsRSxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FDbEMsMENBQTBDLENBQUM7QUFFN0MsTUFBTSxPQUFPLFVBQVU7SUFFckIsWUFBbUIsT0FBc0I7UUFBdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQURoQyxTQUFJLEdBQUcsV0FBVyxDQUFDO0lBQ2dCLENBQUM7Q0FDOUM7QUFFRCxNQUFNLE9BQU8sYUFBYTtJQUV4QixZQUFtQixPQUFtRDtRQUFuRCxZQUFPLEdBQVAsT0FBTyxDQUE0QztRQUQ3RCxTQUFJLEdBQUcsY0FBYyxDQUFDO0lBQzBDLENBQUM7Q0FDM0U7QUFFRCxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CLFlBQW1CLE9BQTBCO1FBQTFCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBRHBDLFNBQUksR0FBRyx1QkFBdUIsQ0FBQztJQUNRLENBQUM7Q0FDbEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IEFERF9NRVNTQUdFID0gJ1tHbG9iYWwtbWVzc2FnZV0gQWRkIGEgTWVzc2FnZSc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX01FU1NBR0UgPSAnW0dsb2JhbC1tZXNzYWdlXSBSZW1vdmUgYSBNZXNzYWdlJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfTUVTU0FHRVNfQllfVFlQRSA9XG4gICdbR2xvYmFsLW1lc3NhZ2VdIFJlbW92ZSBtZXNzYWdlcyBieSB0eXBlJztcblxuZXhwb3J0IGNsYXNzIEFkZE1lc3NhZ2UgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX01FU1NBR0U7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHbG9iYWxNZXNzYWdlKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUmVtb3ZlTWVzc2FnZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfTUVTU0FHRTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGU7IGluZGV4OiBudW1iZXIgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZU1lc3NhZ2VzQnlUeXBlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFTU9WRV9NRVNTQUdFU19CWV9UWVBFO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR2xvYmFsTWVzc2FnZVR5cGUpIHt9XG59XG5cbmV4cG9ydCB0eXBlIEdsb2JhbE1lc3NhZ2VBY3Rpb24gPVxuICB8IEFkZE1lc3NhZ2VcbiAgfCBSZW1vdmVNZXNzYWdlXG4gIHwgUmVtb3ZlTWVzc2FnZXNCeVR5cGU7XG4iXX0=