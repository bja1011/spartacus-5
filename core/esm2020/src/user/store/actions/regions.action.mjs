/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { StateUtils } from '../../../state/utils/index';
import { REGIONS } from '../user-state';
export const LOAD_REGIONS = '[User] Load Regions';
export const LOAD_REGIONS_SUCCESS = '[User] Load Regions Success';
export const LOAD_REGIONS_FAIL = '[User] Load Regions Fail';
export const CLEAR_REGIONS = '[User] Clear Regions';
export class LoadRegions extends StateUtils.LoaderLoadAction {
    constructor(payload) {
        super(REGIONS);
        this.payload = payload;
        this.type = LOAD_REGIONS;
    }
}
export class LoadRegionsFail extends StateUtils.LoaderFailAction {
    constructor(payload) {
        super(REGIONS, payload);
        this.payload = payload;
        this.type = LOAD_REGIONS_FAIL;
    }
}
export class LoadRegionsSuccess extends StateUtils.LoaderSuccessAction {
    constructor(payload) {
        super(REGIONS);
        this.payload = payload;
        this.type = LOAD_REGIONS_SUCCESS;
    }
}
export class ClearRegions {
    constructor() {
        this.type = CLEAR_REGIONS;
        // Intentional empty constructor
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy91c2VyL3N0b3JlL2FjdGlvbnMvcmVnaW9ucy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUlILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhDLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxxQkFBcUIsQ0FBQztBQUNsRCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyw2QkFBNkIsQ0FBQztBQUNsRSxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRywwQkFBMEIsQ0FBQztBQUM1RCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsc0JBQXNCLENBQUM7QUFFcEQsTUFBTSxPQUFPLFdBQVksU0FBUSxVQUFVLENBQUMsZ0JBQWdCO0lBRTFELFlBQW1CLE9BQWU7UUFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBREUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsWUFBWSxDQUFDO0lBRzdCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxlQUFnQixTQUFRLFVBQVUsQ0FBQyxnQkFBZ0I7SUFFOUQsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRFAsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsaUJBQWlCLENBQUM7SUFHbEMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFVBQVUsQ0FBQyxtQkFBbUI7SUFFcEUsWUFBbUIsT0FBZ0Q7UUFDakUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBREUsWUFBTyxHQUFQLE9BQU8sQ0FBeUM7UUFEMUQsU0FBSSxHQUFHLG9CQUFvQixDQUFDO0lBR3JDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxZQUFZO0lBRXZCO1FBRFMsU0FBSSxHQUFHLGFBQWEsQ0FBQztRQUU1QixnQ0FBZ0M7SUFDbEMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgUmVnaW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgUkVHSU9OUyB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9SRUdJT05TID0gJ1tVc2VyXSBMb2FkIFJlZ2lvbnMnO1xuZXhwb3J0IGNvbnN0IExPQURfUkVHSU9OU19TVUNDRVNTID0gJ1tVc2VyXSBMb2FkIFJlZ2lvbnMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgTE9BRF9SRUdJT05TX0ZBSUwgPSAnW1VzZXJdIExvYWQgUmVnaW9ucyBGYWlsJztcbmV4cG9ydCBjb25zdCBDTEVBUl9SRUdJT05TID0gJ1tVc2VyXSBDbGVhciBSZWdpb25zJztcblxuZXhwb3J0IGNsYXNzIExvYWRSZWdpb25zIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUkVHSU9OUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge1xuICAgIHN1cGVyKFJFR0lPTlMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkUmVnaW9uc0ZhaWwgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9SRUdJT05TX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihSRUdJT05TLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFJlZ2lvbnNTdWNjZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUkVHSU9OU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyBlbnRpdGllczogUmVnaW9uW107IGNvdW50cnk6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIoUkVHSU9OUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyUmVnaW9ucyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9SRUdJT05TO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBJbnRlbnRpb25hbCBlbXB0eSBjb25zdHJ1Y3RvclxuICB9XG59XG5cbmV4cG9ydCB0eXBlIFJlZ2lvbnNBY3Rpb24gPVxuICB8IExvYWRSZWdpb25zXG4gIHwgTG9hZFJlZ2lvbnNGYWlsXG4gIHwgTG9hZFJlZ2lvbnNTdWNjZXNzXG4gIHwgQ2xlYXJSZWdpb25zO1xuIl19