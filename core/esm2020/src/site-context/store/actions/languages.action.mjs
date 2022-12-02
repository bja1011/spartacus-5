/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
export const LOAD_LANGUAGES = '[Site-context] Load Languages';
export const LOAD_LANGUAGES_FAIL = '[Site-context] Load Languages Fail';
export const LOAD_LANGUAGES_SUCCESS = '[Site-context] Load Languages Success';
export const SET_ACTIVE_LANGUAGE = '[Site-context] Set Active Language';
export const LANGUAGE_CHANGE = '[Site-context] Language Change';
export class LoadLanguages {
    constructor() {
        this.type = LOAD_LANGUAGES;
    }
}
export class LoadLanguagesFail {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_LANGUAGES_FAIL;
    }
}
export class LoadLanguagesSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_LANGUAGES_SUCCESS;
    }
}
export class SetActiveLanguage {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_ACTIVE_LANGUAGE;
    }
}
export class LanguageChange {
    constructor(payload) {
        this.payload = payload;
        this.type = LANGUAGE_CHANGE;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2xhbmd1YWdlcy5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUtILE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRywrQkFBK0IsQ0FBQztBQUM5RCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxvQ0FBb0MsQ0FBQztBQUN4RSxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRyx1Q0FBdUMsQ0FBQztBQUM5RSxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxvQ0FBb0MsQ0FBQztBQUN4RSxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsZ0NBQWdDLENBQUM7QUFFaEUsTUFBTSxPQUFPLGFBQWE7SUFBMUI7UUFDVyxTQUFJLEdBQUcsY0FBYyxDQUFDO0lBQ2pDLENBQUM7Q0FBQTtBQUVELE1BQU0sT0FBTyxpQkFBaUI7SUFFNUIsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLG1CQUFtQixDQUFDO0lBQ0YsQ0FBQztDQUNwQztBQUVELE1BQU0sT0FBTyxvQkFBb0I7SUFFL0IsWUFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUQ3QixTQUFJLEdBQUcsc0JBQXNCLENBQUM7SUFDRSxDQUFDO0NBQzNDO0FBRUQsTUFBTSxPQUFPLGlCQUFpQjtJQUU1QixZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFDQyxDQUFDO0NBQ3ZDO0FBRUQsTUFBTSxPQUFPLGNBQWM7SUFFekIsWUFDUyxPQUE0RDtRQUE1RCxZQUFPLEdBQVAsT0FBTyxDQUFxRDtRQUY1RCxTQUFJLEdBQUcsZUFBZSxDQUFDO0lBRzdCLENBQUM7Q0FDTCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0xBTkdVQUdFUyA9ICdbU2l0ZS1jb250ZXh0XSBMb2FkIExhbmd1YWdlcyc7XG5leHBvcnQgY29uc3QgTE9BRF9MQU5HVUFHRVNfRkFJTCA9ICdbU2l0ZS1jb250ZXh0XSBMb2FkIExhbmd1YWdlcyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0xBTkdVQUdFU19TVUNDRVNTID0gJ1tTaXRlLWNvbnRleHRdIExvYWQgTGFuZ3VhZ2VzIFN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IFNFVF9BQ1RJVkVfTEFOR1VBR0UgPSAnW1NpdGUtY29udGV4dF0gU2V0IEFjdGl2ZSBMYW5ndWFnZSc7XG5leHBvcnQgY29uc3QgTEFOR1VBR0VfQ0hBTkdFID0gJ1tTaXRlLWNvbnRleHRdIExhbmd1YWdlIENoYW5nZSc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkTGFuZ3VhZ2VzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfTEFOR1VBR0VTO1xufVxuXG5leHBvcnQgY2xhc3MgTG9hZExhbmd1YWdlc0ZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9MQU5HVUFHRVNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRMYW5ndWFnZXNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfTEFOR1VBR0VTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBMYW5ndWFnZVtdKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgU2V0QWN0aXZlTGFuZ3VhZ2UgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0FDVElWRV9MQU5HVUFHRTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIExhbmd1YWdlQ2hhbmdlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExBTkdVQUdFX0NIQU5HRTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHsgcHJldmlvdXM6IHN0cmluZyB8IG51bGw7IGN1cnJlbnQ6IHN0cmluZyB8IG51bGwgfVxuICApIHt9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgTGFuZ3VhZ2VzQWN0aW9uID1cbiAgfCBMb2FkTGFuZ3VhZ2VzXG4gIHwgTG9hZExhbmd1YWdlc0ZhaWxcbiAgfCBMb2FkTGFuZ3VhZ2VzU3VjY2Vzc1xuICB8IFNldEFjdGl2ZUxhbmd1YWdlXG4gIHwgTGFuZ3VhZ2VDaGFuZ2U7XG4iXX0=