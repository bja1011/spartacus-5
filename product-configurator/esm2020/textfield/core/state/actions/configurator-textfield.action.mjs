/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { StateUtils } from '@spartacus/core';
import { CONFIGURATION_TEXTFIELD_DATA } from '../configuration-textfield-state';
export const CREATE_CONFIGURATION = '[Configurator] Create Configuration Textfield';
export const CREATE_CONFIGURATION_FAIL = '[Configurator] Create Configuration Textfield Fail';
export const CREATE_CONFIGURATION_SUCCESS = '[Configurator] Create Configuration Textfield Success';
export const UPDATE_CONFIGURATION = '[Configurator] Update Configuration Textfield';
export const ADD_TO_CART = '[Configurator] Add to cart Textfield';
export const ADD_TO_CART_FAIL = '[Configurator] Add to cart Textfield Fail';
export const READ_CART_ENTRY_CONFIGURATION = '[Configurator] Read cart entry configuration Textfield';
export const READ_CART_ENTRY_CONFIGURATION_FAIL = '[Configurator] Read cart entry configuration Textfield Fail';
export const READ_CART_ENTRY_CONFIGURATION_SUCCESS = '[Configurator] Read cart entry configuration Textfield Success';
export const READ_ORDER_ENTRY_CONFIGURATION = '[Configurator] Read order entry configuration textfield';
export const READ_ORDER_ENTRY_CONFIGURATION_FAIL = '[Configurator] Read order entry configuration textfield Fail';
export const READ_ORDER_ENTRY_CONFIGURATION_SUCCESS = '[Configurator] Read order entry configuration textfield Success';
export const UPDATE_CART_ENTRY_CONFIGURATION = '[Configurator] Update cart entry configuration Textfield';
export const UPDATE_CART_ENTRY_CONFIGURATION_FAIL = '[Configurator] Update cart entry configuration Textfield Fail';
export const REMOVE_CONFIGURATION = '[Configurator] Remove Configuration Textfield';
export class CreateConfiguration extends StateUtils.LoaderLoadAction {
    constructor(payload) {
        super(CONFIGURATION_TEXTFIELD_DATA);
        this.payload = payload;
        this.type = CREATE_CONFIGURATION;
    }
}
export class CreateConfigurationFail extends StateUtils.LoaderFailAction {
    constructor(payload) {
        super(CONFIGURATION_TEXTFIELD_DATA, payload);
        this.payload = payload;
        this.type = CREATE_CONFIGURATION_FAIL;
    }
}
export class CreateConfigurationSuccess extends StateUtils.LoaderSuccessAction {
    constructor(payload) {
        super(CONFIGURATION_TEXTFIELD_DATA);
        this.payload = payload;
        this.type = CREATE_CONFIGURATION_SUCCESS;
    }
}
export class UpdateConfiguration extends StateUtils.LoaderLoadAction {
    constructor(payload) {
        super(CONFIGURATION_TEXTFIELD_DATA);
        this.payload = payload;
        this.type = UPDATE_CONFIGURATION;
    }
}
export class AddToCart extends StateUtils.LoaderLoadAction {
    constructor(payload) {
        super(CONFIGURATION_TEXTFIELD_DATA);
        this.payload = payload;
        this.type = ADD_TO_CART;
    }
}
export class AddToCartFail extends StateUtils.LoaderFailAction {
    constructor(payload) {
        super(CONFIGURATION_TEXTFIELD_DATA, payload);
        this.payload = payload;
        this.type = ADD_TO_CART_FAIL;
    }
}
export class UpdateCartEntryConfiguration extends StateUtils.LoaderLoadAction {
    constructor(payload) {
        super(CONFIGURATION_TEXTFIELD_DATA);
        this.payload = payload;
        this.type = UPDATE_CART_ENTRY_CONFIGURATION;
    }
}
export class UpdateCartEntryConfigurationFail extends StateUtils.LoaderFailAction {
    constructor(payload) {
        super(CONFIGURATION_TEXTFIELD_DATA, payload);
        this.payload = payload;
        this.type = UPDATE_CART_ENTRY_CONFIGURATION_FAIL;
    }
}
export class ReadCartEntryConfiguration extends StateUtils.LoaderLoadAction {
    constructor(payload) {
        super(CONFIGURATION_TEXTFIELD_DATA);
        this.payload = payload;
        this.type = READ_CART_ENTRY_CONFIGURATION;
    }
}
export class ReadCartEntryConfigurationSuccess extends StateUtils.LoaderSuccessAction {
    constructor(payload) {
        super(CONFIGURATION_TEXTFIELD_DATA);
        this.payload = payload;
        this.type = READ_CART_ENTRY_CONFIGURATION_SUCCESS;
    }
}
export class ReadCartEntryConfigurationFail extends StateUtils.LoaderFailAction {
    constructor(payload) {
        super(CONFIGURATION_TEXTFIELD_DATA, payload);
        this.payload = payload;
        this.type = READ_CART_ENTRY_CONFIGURATION_FAIL;
    }
}
export class ReadOrderEntryConfiguration extends StateUtils.LoaderLoadAction {
    constructor(payload) {
        super(CONFIGURATION_TEXTFIELD_DATA);
        this.payload = payload;
        this.type = READ_ORDER_ENTRY_CONFIGURATION;
    }
}
export class ReadOrderEntryConfigurationSuccess extends StateUtils.LoaderSuccessAction {
    constructor(payload) {
        super(CONFIGURATION_TEXTFIELD_DATA);
        this.payload = payload;
        this.type = READ_ORDER_ENTRY_CONFIGURATION_SUCCESS;
    }
}
export class ReadOrderEntryConfigurationFail extends StateUtils.LoaderFailAction {
    constructor(payload) {
        super(CONFIGURATION_TEXTFIELD_DATA, payload);
        this.payload = payload;
        this.type = READ_ORDER_ENTRY_CONFIGURATION_FAIL;
    }
}
export class RemoveConfiguration extends StateUtils.LoaderResetAction {
    constructor() {
        super(CONFIGURATION_TEXTFIELD_DATA);
        this.type = REMOVE_CONFIGURATION;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdG9yLXRleHRmaWVsZC5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvcHJvZHVjdC1jb25maWd1cmF0b3IvdGV4dGZpZWxkL2NvcmUvc3RhdGUvYWN0aW9ucy9jb25maWd1cmF0b3ItdGV4dGZpZWxkLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzdDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRWhGLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUMvQiwrQ0FBK0MsQ0FBQztBQUNsRCxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FDcEMsb0RBQW9ELENBQUM7QUFDdkQsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQ3ZDLHVEQUF1RCxDQUFDO0FBQzFELE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUMvQiwrQ0FBK0MsQ0FBQztBQUNsRCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsc0NBQXNDLENBQUM7QUFDbEUsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsMkNBQTJDLENBQUM7QUFDNUUsTUFBTSxDQUFDLE1BQU0sNkJBQTZCLEdBQ3hDLHdEQUF3RCxDQUFDO0FBQzNELE1BQU0sQ0FBQyxNQUFNLGtDQUFrQyxHQUM3Qyw2REFBNkQsQ0FBQztBQUNoRSxNQUFNLENBQUMsTUFBTSxxQ0FBcUMsR0FDaEQsZ0VBQWdFLENBQUM7QUFDbkUsTUFBTSxDQUFDLE1BQU0sOEJBQThCLEdBQ3pDLHlEQUF5RCxDQUFDO0FBQzVELE1BQU0sQ0FBQyxNQUFNLG1DQUFtQyxHQUM5Qyw4REFBOEQsQ0FBQztBQUNqRSxNQUFNLENBQUMsTUFBTSxzQ0FBc0MsR0FDakQsaUVBQWlFLENBQUM7QUFDcEUsTUFBTSxDQUFDLE1BQU0sK0JBQStCLEdBQzFDLDBEQUEwRCxDQUFDO0FBQzdELE1BQU0sQ0FBQyxNQUFNLG9DQUFvQyxHQUMvQywrREFBK0QsQ0FBQztBQUVsRSxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FDL0IsK0NBQStDLENBQUM7QUFFbEQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFVBQVUsQ0FBQyxnQkFBZ0I7SUFFbEUsWUFDUyxPQUFpRTtRQUV4RSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUY3QixZQUFPLEdBQVAsT0FBTyxDQUEwRDtRQUZqRSxTQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFLckMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLHVCQUF3QixTQUFRLFVBQVUsQ0FBQyxnQkFBZ0I7SUFFdEUsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsNEJBQTRCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFENUIsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcseUJBQXlCLENBQUM7SUFHMUMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLDBCQUEyQixTQUFRLFVBQVUsQ0FBQyxtQkFBbUI7SUFFNUUsWUFBbUIsT0FBNEM7UUFDN0QsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFEbkIsWUFBTyxHQUFQLE9BQU8sQ0FBcUM7UUFEdEQsU0FBSSxHQUFHLDRCQUE0QixDQUFDO0lBRzdDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxVQUFVLENBQUMsZ0JBQWdCO0lBRWxFLFlBQW1CLE9BQTRDO1FBQzdELEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBRG5CLFlBQU8sR0FBUCxPQUFPLENBQXFDO1FBRHRELFNBQUksR0FBRyxvQkFBb0IsQ0FBQztJQUdyQyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sU0FBVSxTQUFRLFVBQVUsQ0FBQyxnQkFBZ0I7SUFFeEQsWUFBbUIsT0FBa0Q7UUFDbkUsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFEbkIsWUFBTyxHQUFQLE9BQU8sQ0FBMkM7UUFENUQsU0FBSSxHQUFHLFdBQVcsQ0FBQztJQUc1QixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sYUFBYyxTQUFRLFVBQVUsQ0FBQyxnQkFBZ0I7SUFFNUQsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsNEJBQTRCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFENUIsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFHakMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLDRCQUE2QixTQUFRLFVBQVUsQ0FBQyxnQkFBZ0I7SUFFM0UsWUFBbUIsT0FBd0Q7UUFDekUsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFEbkIsWUFBTyxHQUFQLE9BQU8sQ0FBaUQ7UUFEbEUsU0FBSSxHQUFHLCtCQUErQixDQUFDO0lBR2hELENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxVQUFVLENBQUMsZ0JBQWdCO0lBRS9FLFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLDRCQUE0QixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRDVCLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLG9DQUFvQyxDQUFDO0lBR3JELENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTywwQkFBMkIsU0FBUSxVQUFVLENBQUMsZ0JBQWdCO0lBRXpFLFlBQ1MsT0FBb0U7UUFFM0UsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFGN0IsWUFBTyxHQUFQLE9BQU8sQ0FBNkQ7UUFGcEUsU0FBSSxHQUFHLDZCQUE2QixDQUFDO0lBSzlDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxpQ0FBa0MsU0FBUSxVQUFVLENBQUMsbUJBQW1CO0lBRW5GLFlBQW1CLE9BQTRDO1FBQzdELEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBRG5CLFlBQU8sR0FBUCxPQUFPLENBQXFDO1FBRHRELFNBQUksR0FBRyxxQ0FBcUMsQ0FBQztJQUd0RCxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sOEJBQStCLFNBQVEsVUFBVSxDQUFDLGdCQUFnQjtJQUU3RSxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUQ1QixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxrQ0FBa0MsQ0FBQztJQUduRCxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsVUFBVSxDQUFDLGdCQUFnQjtJQUUxRSxZQUNTLE9BQXFFO1FBRTVFLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBRjdCLFlBQU8sR0FBUCxPQUFPLENBQThEO1FBRnJFLFNBQUksR0FBRyw4QkFBOEIsQ0FBQztJQUsvQyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sa0NBQW1DLFNBQVEsVUFBVSxDQUFDLG1CQUFtQjtJQUVwRixZQUFtQixPQUE0QztRQUM3RCxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQURuQixZQUFPLEdBQVAsT0FBTyxDQUFxQztRQUR0RCxTQUFJLEdBQUcsc0NBQXNDLENBQUM7SUFHdkQsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLFVBQVUsQ0FBQyxnQkFBZ0I7SUFFOUUsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsNEJBQTRCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFENUIsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsbUNBQW1DLENBQUM7SUFHcEQsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFVBQVUsQ0FBQyxpQkFBaUI7SUFFbkU7UUFDRSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUY3QixTQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFHckMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgU3RhdGVVdGlscyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Db25maWd1cmF0b3IgfSBmcm9tICdAc3BhcnRhY3VzL3Byb2R1Y3QtY29uZmlndXJhdG9yL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWd1cmF0b3JUZXh0ZmllbGQgfSBmcm9tICcuLi8uLi9tb2RlbC9jb25maWd1cmF0b3ItdGV4dGZpZWxkLm1vZGVsJztcbmltcG9ydCB7IENPTkZJR1VSQVRJT05fVEVYVEZJRUxEX0RBVEEgfSBmcm9tICcuLi9jb25maWd1cmF0aW9uLXRleHRmaWVsZC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfQ09ORklHVVJBVElPTiA9XG4gICdbQ29uZmlndXJhdG9yXSBDcmVhdGUgQ29uZmlndXJhdGlvbiBUZXh0ZmllbGQnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9DT05GSUdVUkFUSU9OX0ZBSUwgPVxuICAnW0NvbmZpZ3VyYXRvcl0gQ3JlYXRlIENvbmZpZ3VyYXRpb24gVGV4dGZpZWxkIEZhaWwnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9DT05GSUdVUkFUSU9OX1NVQ0NFU1MgPVxuICAnW0NvbmZpZ3VyYXRvcl0gQ3JlYXRlIENvbmZpZ3VyYXRpb24gVGV4dGZpZWxkIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9DT05GSUdVUkFUSU9OID1cbiAgJ1tDb25maWd1cmF0b3JdIFVwZGF0ZSBDb25maWd1cmF0aW9uIFRleHRmaWVsZCc7XG5leHBvcnQgY29uc3QgQUREX1RPX0NBUlQgPSAnW0NvbmZpZ3VyYXRvcl0gQWRkIHRvIGNhcnQgVGV4dGZpZWxkJztcbmV4cG9ydCBjb25zdCBBRERfVE9fQ0FSVF9GQUlMID0gJ1tDb25maWd1cmF0b3JdIEFkZCB0byBjYXJ0IFRleHRmaWVsZCBGYWlsJztcbmV4cG9ydCBjb25zdCBSRUFEX0NBUlRfRU5UUllfQ09ORklHVVJBVElPTiA9XG4gICdbQ29uZmlndXJhdG9yXSBSZWFkIGNhcnQgZW50cnkgY29uZmlndXJhdGlvbiBUZXh0ZmllbGQnO1xuZXhwb3J0IGNvbnN0IFJFQURfQ0FSVF9FTlRSWV9DT05GSUdVUkFUSU9OX0ZBSUwgPVxuICAnW0NvbmZpZ3VyYXRvcl0gUmVhZCBjYXJ0IGVudHJ5IGNvbmZpZ3VyYXRpb24gVGV4dGZpZWxkIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFJFQURfQ0FSVF9FTlRSWV9DT05GSUdVUkFUSU9OX1NVQ0NFU1MgPVxuICAnW0NvbmZpZ3VyYXRvcl0gUmVhZCBjYXJ0IGVudHJ5IGNvbmZpZ3VyYXRpb24gVGV4dGZpZWxkIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFJFQURfT1JERVJfRU5UUllfQ09ORklHVVJBVElPTiA9XG4gICdbQ29uZmlndXJhdG9yXSBSZWFkIG9yZGVyIGVudHJ5IGNvbmZpZ3VyYXRpb24gdGV4dGZpZWxkJztcbmV4cG9ydCBjb25zdCBSRUFEX09SREVSX0VOVFJZX0NPTkZJR1VSQVRJT05fRkFJTCA9XG4gICdbQ29uZmlndXJhdG9yXSBSZWFkIG9yZGVyIGVudHJ5IGNvbmZpZ3VyYXRpb24gdGV4dGZpZWxkIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFJFQURfT1JERVJfRU5UUllfQ09ORklHVVJBVElPTl9TVUNDRVNTID1cbiAgJ1tDb25maWd1cmF0b3JdIFJlYWQgb3JkZXIgZW50cnkgY29uZmlndXJhdGlvbiB0ZXh0ZmllbGQgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgVVBEQVRFX0NBUlRfRU5UUllfQ09ORklHVVJBVElPTiA9XG4gICdbQ29uZmlndXJhdG9yXSBVcGRhdGUgY2FydCBlbnRyeSBjb25maWd1cmF0aW9uIFRleHRmaWVsZCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX0NBUlRfRU5UUllfQ09ORklHVVJBVElPTl9GQUlMID1cbiAgJ1tDb25maWd1cmF0b3JdIFVwZGF0ZSBjYXJ0IGVudHJ5IGNvbmZpZ3VyYXRpb24gVGV4dGZpZWxkIEZhaWwnO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTkZJR1VSQVRJT04gPVxuICAnW0NvbmZpZ3VyYXRvcl0gUmVtb3ZlIENvbmZpZ3VyYXRpb24gVGV4dGZpZWxkJztcblxuZXhwb3J0IGNsYXNzIENyZWF0ZUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX0NPTkZJR1VSQVRJT047XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7IHByb2R1Y3RDb2RlOiBzdHJpbmc7IG93bmVyOiBDb21tb25Db25maWd1cmF0b3IuT3duZXIgfVxuICApIHtcbiAgICBzdXBlcihDT05GSUdVUkFUSU9OX1RFWFRGSUVMRF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ29uZmlndXJhdGlvbkZhaWwgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX0NPTkZJR1VSQVRJT05fRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENPTkZJR1VSQVRJT05fVEVYVEZJRUxEX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVDb25maWd1cmF0aW9uU3VjY2VzcyBleHRlbmRzIFN0YXRlVXRpbHMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfQ09ORklHVVJBVElPTl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ29uZmlndXJhdG9yVGV4dGZpZWxkLkNvbmZpZ3VyYXRpb24pIHtcbiAgICBzdXBlcihDT05GSUdVUkFUSU9OX1RFWFRGSUVMRF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlQ29uZmlndXJhdGlvbiBleHRlbmRzIFN0YXRlVXRpbHMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVUERBVEVfQ09ORklHVVJBVElPTjtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENvbmZpZ3VyYXRvclRleHRmaWVsZC5Db25maWd1cmF0aW9uKSB7XG4gICAgc3VwZXIoQ09ORklHVVJBVElPTl9URVhURklFTERfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZFRvQ2FydCBleHRlbmRzIFN0YXRlVXRpbHMuTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBRERfVE9fQ0FSVDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENvbmZpZ3VyYXRvclRleHRmaWVsZC5BZGRUb0NhcnRQYXJhbWV0ZXJzKSB7XG4gICAgc3VwZXIoQ09ORklHVVJBVElPTl9URVhURklFTERfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZFRvQ2FydEZhaWwgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQUREX1RPX0NBUlRfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENPTkZJR1VSQVRJT05fVEVYVEZJRUxEX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVDYXJ0RW50cnlDb25maWd1cmF0aW9uIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9DQVJUX0VOVFJZX0NPTkZJR1VSQVRJT047XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDb25maWd1cmF0b3JUZXh0ZmllbGQuVXBkYXRlQ2FydEVudHJ5UGFyYW1ldGVycykge1xuICAgIHN1cGVyKENPTkZJR1VSQVRJT05fVEVYVEZJRUxEX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVDYXJ0RW50cnlDb25maWd1cmF0aW9uRmFpbCBleHRlbmRzIFN0YXRlVXRpbHMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVUERBVEVfQ0FSVF9FTlRSWV9DT05GSUdVUkFUSU9OX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDT05GSUdVUkFUSU9OX1RFWFRGSUVMRF9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVhZENhcnRFbnRyeUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVBRF9DQVJUX0VOVFJZX0NPTkZJR1VSQVRJT047XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiBDb21tb25Db25maWd1cmF0b3IuUmVhZENvbmZpZ3VyYXRpb25Gcm9tQ2FydEVudHJ5UGFyYW1ldGVyc1xuICApIHtcbiAgICBzdXBlcihDT05GSUdVUkFUSU9OX1RFWFRGSUVMRF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVhZENhcnRFbnRyeUNvbmZpZ3VyYXRpb25TdWNjZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFQURfQ0FSVF9FTlRSWV9DT05GSUdVUkFUSU9OX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDb25maWd1cmF0b3JUZXh0ZmllbGQuQ29uZmlndXJhdGlvbikge1xuICAgIHN1cGVyKENPTkZJR1VSQVRJT05fVEVYVEZJRUxEX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWFkQ2FydEVudHJ5Q29uZmlndXJhdGlvbkZhaWwgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVBRF9DQVJUX0VOVFJZX0NPTkZJR1VSQVRJT05fRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENPTkZJR1VSQVRJT05fVEVYVEZJRUxEX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWFkT3JkZXJFbnRyeUNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVBRF9PUkRFUl9FTlRSWV9DT05GSUdVUkFUSU9OO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDogQ29tbW9uQ29uZmlndXJhdG9yLlJlYWRDb25maWd1cmF0aW9uRnJvbU9yZGVyRW50cnlQYXJhbWV0ZXJzXG4gICkge1xuICAgIHN1cGVyKENPTkZJR1VSQVRJT05fVEVYVEZJRUxEX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWFkT3JkZXJFbnRyeUNvbmZpZ3VyYXRpb25TdWNjZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFQURfT1JERVJfRU5UUllfQ09ORklHVVJBVElPTl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ29uZmlndXJhdG9yVGV4dGZpZWxkLkNvbmZpZ3VyYXRpb24pIHtcbiAgICBzdXBlcihDT05GSUdVUkFUSU9OX1RFWFRGSUVMRF9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVhZE9yZGVyRW50cnlDb25maWd1cmF0aW9uRmFpbCBleHRlbmRzIFN0YXRlVXRpbHMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRUFEX09SREVSX0VOVFJZX0NPTkZJR1VSQVRJT05fRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKENPTkZJR1VSQVRJT05fVEVYVEZJRUxEX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVDb25maWd1cmF0aW9uIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJSZXNldEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRU1PVkVfQ09ORklHVVJBVElPTjtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoQ09ORklHVVJBVElPTl9URVhURklFTERfREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ29uZmlndXJhdG9yQWN0aW9ucyA9XG4gIHwgQ3JlYXRlQ29uZmlndXJhdGlvblxuICB8IENyZWF0ZUNvbmZpZ3VyYXRpb25GYWlsXG4gIHwgQ3JlYXRlQ29uZmlndXJhdGlvblN1Y2Nlc3NcbiAgfCBVcGRhdGVDb25maWd1cmF0aW9uXG4gIHwgUmVhZENhcnRFbnRyeUNvbmZpZ3VyYXRpb25GYWlsXG4gIHwgUmVhZENhcnRFbnRyeUNvbmZpZ3VyYXRpb25TdWNjZXNzXG4gIHwgUmVhZENhcnRFbnRyeUNvbmZpZ3VyYXRpb25cbiAgfCBSZWFkT3JkZXJFbnRyeUNvbmZpZ3VyYXRpb25GYWlsXG4gIHwgUmVhZE9yZGVyRW50cnlDb25maWd1cmF0aW9uU3VjY2Vzc1xuICB8IFJlYWRPcmRlckVudHJ5Q29uZmlndXJhdGlvblxuICB8IFVwZGF0ZUNhcnRFbnRyeUNvbmZpZ3VyYXRpb25cbiAgfCBSZW1vdmVDb25maWd1cmF0aW9uO1xuIl19