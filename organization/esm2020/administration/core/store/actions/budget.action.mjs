/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { StateUtils } from '@spartacus/core';
import { BUDGET_ENTITIES, BUDGET_LIST } from '../organization-state';
export const LOAD_BUDGET = '[Budget] Load Budget Data';
export const LOAD_BUDGET_FAIL = '[Budget] Load Budget Data Fail';
export const LOAD_BUDGET_SUCCESS = '[Budget] Load Budget Data Success';
export const LOAD_BUDGETS = '[Budget] Load Budgets';
export const LOAD_BUDGETS_FAIL = '[Budget] Load Budgets Fail';
export const LOAD_BUDGETS_SUCCESS = '[Budget] Load Budgets Success';
export const CREATE_BUDGET = '[Budget] Create Budget';
export const CREATE_BUDGET_FAIL = '[Budget] Create Budget Fail';
export const CREATE_BUDGET_SUCCESS = '[Budget] Create Budget Success';
export const UPDATE_BUDGET = '[Budget] Update Budget';
export const UPDATE_BUDGET_FAIL = '[Budget] Update Budget Fail';
export const UPDATE_BUDGET_SUCCESS = '[Budget] Update Budget Success';
export class LoadBudget extends StateUtils.EntityLoadAction {
    constructor(payload) {
        super(BUDGET_ENTITIES, payload.budgetCode);
        this.payload = payload;
        this.type = LOAD_BUDGET;
    }
}
export class LoadBudgetFail extends StateUtils.EntityFailAction {
    constructor(payload) {
        super(BUDGET_ENTITIES, payload.budgetCode, payload.error);
        this.payload = payload;
        this.type = LOAD_BUDGET_FAIL;
    }
}
export class LoadBudgetSuccess extends StateUtils.EntitySuccessAction {
    constructor(payload) {
        super(BUDGET_ENTITIES, Array.isArray(payload)
            ? payload.map((budget) => budget?.code ?? '')
            : payload?.code ?? '');
        this.payload = payload;
        this.type = LOAD_BUDGET_SUCCESS;
    }
}
export class LoadBudgets extends StateUtils.EntityLoadAction {
    constructor(payload) {
        super(BUDGET_LIST, StateUtils.serializeSearchConfig(payload.params));
        this.payload = payload;
        this.type = LOAD_BUDGETS;
    }
}
export class LoadBudgetsFail extends StateUtils.EntityFailAction {
    constructor(payload) {
        super(BUDGET_LIST, StateUtils.serializeSearchConfig(payload.params), payload.error);
        this.payload = payload;
        this.type = LOAD_BUDGETS_FAIL;
    }
}
export class LoadBudgetsSuccess extends StateUtils.EntitySuccessAction {
    constructor(payload) {
        super(BUDGET_LIST, StateUtils.serializeSearchConfig(payload.params));
        this.payload = payload;
        this.type = LOAD_BUDGETS_SUCCESS;
    }
}
export class CreateBudget extends StateUtils.EntityLoadAction {
    constructor(payload) {
        super(BUDGET_ENTITIES, payload.budget.code ?? null);
        this.payload = payload;
        this.type = CREATE_BUDGET;
    }
}
export class CreateBudgetFail extends StateUtils.EntityFailAction {
    constructor(payload) {
        super(BUDGET_ENTITIES, payload.budgetCode, payload.error);
        this.payload = payload;
        this.type = CREATE_BUDGET_FAIL;
    }
}
export class CreateBudgetSuccess extends StateUtils.EntitySuccessAction {
    constructor(payload) {
        super(BUDGET_ENTITIES, payload.code ?? null, payload);
        this.payload = payload;
        this.type = CREATE_BUDGET_SUCCESS;
    }
}
export class UpdateBudget extends StateUtils.EntityLoadAction {
    constructor(payload) {
        super(BUDGET_ENTITIES, payload.budget.code ?? '');
        this.payload = payload;
        this.type = UPDATE_BUDGET;
    }
}
export class UpdateBudgetFail extends StateUtils.EntityFailAction {
    constructor(payload) {
        super(BUDGET_ENTITIES, payload.budgetCode, payload.error);
        this.payload = payload;
        this.type = UPDATE_BUDGET_FAIL;
    }
}
export class UpdateBudgetSuccess extends StateUtils.EntitySuccessAction {
    constructor(payload) {
        super(BUDGET_ENTITIES, payload.code ?? '', payload);
        this.payload = payload;
        this.type = UPDATE_BUDGET_SUCCESS;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmdhbml6YXRpb24vYWRtaW5pc3RyYXRpb24vY29yZS9zdG9yZS9hY3Rpb25zL2J1ZGdldC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBMkIsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVyRSxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsMkJBQTJCLENBQUM7QUFDdkQsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsZ0NBQWdDLENBQUM7QUFDakUsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsbUNBQW1DLENBQUM7QUFFdkUsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLHVCQUF1QixDQUFDO0FBQ3BELE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLDRCQUE0QixDQUFDO0FBQzlELE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLCtCQUErQixDQUFDO0FBRXBFLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyx3QkFBd0IsQ0FBQztBQUN0RCxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRyw2QkFBNkIsQ0FBQztBQUNoRSxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyxnQ0FBZ0MsQ0FBQztBQUV0RSxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsd0JBQXdCLENBQUM7QUFDdEQsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsNkJBQTZCLENBQUM7QUFDaEUsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsZ0NBQWdDLENBQUM7QUFFdEUsTUFBTSxPQUFPLFVBQVcsU0FBUSxVQUFVLENBQUMsZ0JBQWdCO0lBRXpELFlBQW1CLE9BQStDO1FBQ2hFLEtB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QUFFLE9BQU8sQ0FBQyxDQUFDO1FBRHJDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLHFCQUFxQixDQUFDO0lBR3RDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxZQUFhLFNBQVEsVUFBVSxDQUFDLGdCQUFnQjtJQUUzRCxZQUNTLE9BQStEO1FBRXRFLEtBQUssQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7UUFGM0MsWUFBTyxHQUFQLE9BQU8sQ0FBd0Q7UUFGL0QsU0FBSSxHQUFHLGFBQWEsQ0FBQztJQUs5QixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsVUFBVSxDQUFDLGdCQUFnQjtJQUUvRCxZQUFtQixPQUEyQztRQUM1RCxLQUFLLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRHpDLFlBQU8sR0FBUCxPQUFPLENBQW9DO1FBRHJELFNBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUduQyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsVUFBVSxDQUFDLG1CQUFtQjtJQUVyRSxZQUFtQixPQUFlO1FBQ2hDLEtBQUssQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEbkMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcscUJBQXFCLENBQUM7SUFHdEMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgTGlzdE1vZGVsLCBTZWFyY2hDb25maWcsIFN0YXRlVXRpbHMgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQnVkZ2V0IH0gZnJvbSAnLi4vLi4vbW9kZWwvYnVkZ2V0Lm1vZGVsJztcbmltcG9ydCB7IEJVREdFVF9FTlRJVElFUywgQlVER0VUX0xJU1QgfSBmcm9tICcuLi9vcmdhbml6YXRpb24tc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9CVURHRVQgPSAnW0J1ZGdldF0gTG9hZCBCdWRnZXQgRGF0YSc7XG5leHBvcnQgY29uc3QgTE9BRF9CVURHRVRfRkFJTCA9ICdbQnVkZ2V0XSBMb2FkIEJ1ZGdldCBEYXRhIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQlVER0VUX1NVQ0NFU1MgPSAnW0J1ZGdldF0gTG9hZCBCdWRnZXQgRGF0YSBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IExPQURfQlVER0VUUyA9ICdbQnVkZ2V0XSBMb2FkIEJ1ZGdldHMnO1xuZXhwb3J0IGNvbnN0IExPQURfQlVER0VUU19GQUlMID0gJ1tCdWRnZXRdIExvYWQgQnVkZ2V0cyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0JVREdFVFNfU1VDQ0VTUyA9ICdbQnVkZ2V0XSBMb2FkIEJ1ZGdldHMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfQlVER0VUID0gJ1tCdWRnZXRdIENyZWF0ZSBCdWRnZXQnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9CVURHRVRfRkFJTCA9ICdbQnVkZ2V0XSBDcmVhdGUgQnVkZ2V0IEZhaWwnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9CVURHRVRfU1VDQ0VTUyA9ICdbQnVkZ2V0XSBDcmVhdGUgQnVkZ2V0IFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgVVBEQVRFX0JVREdFVCA9ICdbQnVkZ2V0XSBVcGRhdGUgQnVkZ2V0JztcbmV4cG9ydCBjb25zdCBVUERBVEVfQlVER0VUX0ZBSUwgPSAnW0J1ZGdldF0gVXBkYXRlIEJ1ZGdldCBGYWlsJztcbmV4cG9ydCBjb25zdCBVUERBVEVfQlVER0VUX1NVQ0NFU1MgPSAnW0J1ZGdldF0gVXBkYXRlIEJ1ZGdldCBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRCdWRnZXQgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9CVURHRVQ7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJJZDogc3RyaW5nOyBidWRnZXRDb2RlOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKEJVREdFVF9FTlRJVElFUywgcGF5bG9hZC5idWRnZXRDb2RlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZEJ1ZGdldEZhaWwgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9CVURHRVRfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgYnVkZ2V0Q29kZTogc3RyaW5nOyBlcnJvcjogYW55IH0pIHtcbiAgICBzdXBlcihCVURHRVRfRU5USVRJRVMsIHBheWxvYWQuYnVkZ2V0Q29kZSwgcGF5bG9hZC5lcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRCdWRnZXRTdWNjZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQlVER0VUX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBCdWRnZXQgfCBCdWRnZXRbXSkge1xuICAgIHN1cGVyKFxuICAgICAgQlVER0VUX0VOVElUSUVTLFxuICAgICAgQXJyYXkuaXNBcnJheShwYXlsb2FkKVxuICAgICAgICA/IHBheWxvYWQubWFwKChidWRnZXQpID0+IGJ1ZGdldD8uY29kZSA/PyAnJylcbiAgICAgICAgOiBwYXlsb2FkPy5jb2RlID8/ICcnXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZEJ1ZGdldHMgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9CVURHRVRTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBwYXJhbXM6IFNlYXJjaENvbmZpZztcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKEJVREdFVF9MSVNULCBTdGF0ZVV0aWxzLnNlcmlhbGl6ZVNlYXJjaENvbmZpZyhwYXlsb2FkLnBhcmFtcykpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQnVkZ2V0c0ZhaWwgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9CVURHRVRTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHBhcmFtczogU2VhcmNoQ29uZmlnOyBlcnJvcjogYW55IH0pIHtcbiAgICBzdXBlcihcbiAgICAgIEJVREdFVF9MSVNULFxuICAgICAgU3RhdGVVdGlscy5zZXJpYWxpemVTZWFyY2hDb25maWcocGF5bG9hZC5wYXJhbXMpLFxuICAgICAgcGF5bG9hZC5lcnJvclxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRCdWRnZXRzU3VjY2VzcyBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0JVREdFVFNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHBhZ2U6IExpc3RNb2RlbDtcbiAgICAgIHBhcmFtczogU2VhcmNoQ29uZmlnO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoQlVER0VUX0xJU1QsIFN0YXRlVXRpbHMuc2VyaWFsaXplU2VhcmNoQ29uZmlnKHBheWxvYWQucGFyYW1zKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZUJ1ZGdldCBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfQlVER0VUO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgYnVkZ2V0OiBCdWRnZXQgfSkge1xuICAgIHN1cGVyKEJVREdFVF9FTlRJVElFUywgcGF5bG9hZC5idWRnZXQuY29kZSA/PyBudWxsKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlQnVkZ2V0RmFpbCBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBDUkVBVEVfQlVER0VUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGJ1ZGdldENvZGU6IHN0cmluZzsgZXJyb3I6IGFueSB9KSB7XG4gICAgc3VwZXIoQlVER0VUX0VOVElUSUVTLCBwYXlsb2FkLmJ1ZGdldENvZGUsIHBheWxvYWQuZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVCdWRnZXRTdWNjZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9CVURHRVRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEJ1ZGdldCkge1xuICAgIHN1cGVyKEJVREdFVF9FTlRJVElFUywgcGF5bG9hZC5jb2RlID8/IG51bGwsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVCdWRnZXQgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX0JVREdFVDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGJ1ZGdldENvZGU6IHN0cmluZzsgYnVkZ2V0OiBCdWRnZXQgfVxuICApIHtcbiAgICBzdXBlcihCVURHRVRfRU5USVRJRVMsIHBheWxvYWQuYnVkZ2V0LmNvZGUgPz8gJycpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVCdWRnZXRGYWlsIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFVQREFURV9CVURHRVRfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgYnVkZ2V0Q29kZTogc3RyaW5nOyBlcnJvcjogYW55IH0pIHtcbiAgICBzdXBlcihCVURHRVRfRU5USVRJRVMsIHBheWxvYWQuYnVkZ2V0Q29kZSwgcGF5bG9hZC5lcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZUJ1ZGdldFN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX0JVREdFVF9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQnVkZ2V0KSB7XG4gICAgc3VwZXIoQlVER0VUX0VOVElUSUVTLCBwYXlsb2FkLmNvZGUgPz8gJycsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJ1ZGdldEFjdGlvbiA9XG4gIHwgTG9hZEJ1ZGdldFxuICB8IExvYWRCdWRnZXRGYWlsXG4gIHwgTG9hZEJ1ZGdldFN1Y2Nlc3NcbiAgfCBMb2FkQnVkZ2V0c1xuICB8IExvYWRCdWRnZXRzRmFpbFxuICB8IExvYWRCdWRnZXRzU3VjY2Vzc1xuICB8IENyZWF0ZUJ1ZGdldFxuICB8IENyZWF0ZUJ1ZGdldEZhaWxcbiAgfCBDcmVhdGVCdWRnZXRTdWNjZXNzXG4gIHwgVXBkYXRlQnVkZ2V0XG4gIHwgVXBkYXRlQnVkZ2V0RmFpbFxuICB8IFVwZGF0ZUJ1ZGdldFN1Y2Nlc3M7XG4iXX0=