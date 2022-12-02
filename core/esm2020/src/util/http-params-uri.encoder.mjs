/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
export class HttpParamsURIEncoder {
    encodeKey(key) {
        return encodeURIComponent(key);
    }
    encodeValue(value) {
        return encodeURIComponent(value);
    }
    decodeKey(key) {
        return decodeURIComponent(key);
    }
    decodeValue(value) {
        return decodeURIComponent(value);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1wYXJhbXMtdXJpLmVuY29kZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy91dGlsL2h0dHAtcGFyYW1zLXVyaS5lbmNvZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFXSCxNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLFNBQVMsQ0FBQyxHQUFXO1FBQ25CLE9BQU8sa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFhO1FBQ3ZCLE9BQU8sa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFXO1FBQ25CLE9BQU8sa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFhO1FBQ3ZCLE9BQU8sa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuLyoqXG4gKiBBbmd1bGFyIHVzZXMgdGhlIG5hdGl2ZSBlbmNvZGVVUklDb21wb25lbnQgZnVuY3Rpb24sXG4gKiBidXQgdGhlbiB1bi1lbmNvZGVkIHNvbWUgY2hhcmFjdGVycyB0aGF0IGFyZSBhbGxvd2VkXG4gKiB0byBiZSBwYXJ0IG9mIHRoZSBxdWVyeSBhY2NvcmRpbmcgdG8gSUVURiBSRkMgMzk4Ni5cbiAqIFNvLCB0byBtYWtlIHRoZXNlIGNoYXJhY3RlcnMgc3RpbGwgZW5jb2RlZCwgdGhpcyBlbmNvZGVyIG9ubHlcbiAqIHVzZXMgdGhlIGVuY29kZVVSSUNvbXBvbmVudC5cbiAqL1xuaW1wb3J0IHsgSHR0cFBhcmFtZXRlckNvZGVjIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5leHBvcnQgY2xhc3MgSHR0cFBhcmFtc1VSSUVuY29kZXIgaW1wbGVtZW50cyBIdHRwUGFyYW1ldGVyQ29kZWMge1xuICBlbmNvZGVLZXkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KTtcbiAgfVxuXG4gIGVuY29kZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICB9XG5cbiAgZGVjb2RlS2V5KGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGtleSk7XG4gIH1cblxuICBkZWNvZGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgfVxufVxuIl19