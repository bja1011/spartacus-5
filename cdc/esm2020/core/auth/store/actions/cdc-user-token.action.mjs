/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
export const LOAD_CDC_USER_TOKEN = '[Auth] Load CDC User Token';
export const LOAD_CDC_USER_TOKEN_FAIL = '[Auth] Load CDC User Token Fail';
export class LoadCdcUserTokenFail {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CDC_USER_TOKEN_FAIL;
    }
}
export class LoadCdcUserToken {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_CDC_USER_TOKEN;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RjLXVzZXItdG9rZW4uYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vaW50ZWdyYXRpb24tbGlicy9jZGMvY29yZS9hdXRoL3N0b3JlL2FjdGlvbnMvY2RjLXVzZXItdG9rZW4uYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFLSCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyw0QkFBNEIsQ0FBQztBQUNoRSxNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBRyxpQ0FBaUMsQ0FBQztBQWUxRSxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CLFlBQW1CLE9BQW9DO1FBQXBDLFlBQU8sR0FBUCxPQUFPLENBQTZCO1FBRDlDLFNBQUksR0FBRyx3QkFBd0IsQ0FBQztJQUNpQixDQUFDO0NBQzVEO0FBRUQsTUFBTSxPQUFPLGdCQUFnQjtJQUUzQixZQUFtQixPQUE2QjtRQUE3QixZQUFPLEdBQVAsT0FBTyxDQUFzQjtRQUR2QyxTQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFDZSxDQUFDO0NBQ3JEIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRXJyb3JNb2RlbCwgSHR0cEVycm9yTW9kZWwgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DRENfVVNFUl9UT0tFTiA9ICdbQXV0aF0gTG9hZCBDREMgVXNlciBUb2tlbic7XG5leHBvcnQgY29uc3QgTE9BRF9DRENfVVNFUl9UT0tFTl9GQUlMID0gJ1tBdXRoXSBMb2FkIENEQyBVc2VyIFRva2VuIEZhaWwnO1xuXG5pbnRlcmZhY2UgTG9hZFVzZXJUb2tlblBheWxvYWQge1xuICBVSUQ6IHN0cmluZztcbiAgVUlEU2lnbmF0dXJlOiBzdHJpbmc7XG4gIHNpZ25hdHVyZVRpbWVzdGFtcDogc3RyaW5nO1xuICBpZFRva2VuOiBzdHJpbmc7XG4gIGJhc2VTaXRlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBMb2FkVXNlclRva2VuRmFpbHVyZVBheWxvYWQge1xuICBlcnJvcjogRXJyb3JNb2RlbCB8IEh0dHBFcnJvck1vZGVsIHwgYW55O1xuICBpbml0aWFsQWN0aW9uUGF5bG9hZDogTG9hZFVzZXJUb2tlblBheWxvYWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2RjVXNlclRva2VuRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NEQ19VU0VSX1RPS0VOX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBMb2FkVXNlclRva2VuRmFpbHVyZVBheWxvYWQpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2RjVXNlclRva2VuIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0RDX1VTRVJfVE9LRU47XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBMb2FkVXNlclRva2VuUGF5bG9hZCkge31cbn1cblxuZXhwb3J0IHR5cGUgQ2RjVXNlclRva2VuQWN0aW9uID0gTG9hZENkY1VzZXJUb2tlbiB8IExvYWRDZGNVc2VyVG9rZW5GYWlsO1xuIl19