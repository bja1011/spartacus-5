/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
export function createCodeForEntityName(name, code) {
    if (!code?.value) {
        const codeFromName = name?.value?.replace(/\s+/g, '-').toLowerCase();
        code?.patchValue(codeFromName);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWNvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvb3JnYW5pemF0aW9uL2FkbWluaXN0cmF0aW9uL2NvbXBvbmVudHMvc2hhcmVkL3V0aWxpdHkvZW50aXR5LWNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUlILE1BQU0sVUFBVSx1QkFBdUIsQ0FDckMsSUFBNEIsRUFDNUIsSUFBNEI7SUFFNUIsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7UUFDaEIsTUFBTSxZQUFZLEdBQUcsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JFLElBQUksRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDaEM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29kZUZvckVudGl0eU5hbWUoXG4gIG5hbWU6IEFic3RyYWN0Q29udHJvbCB8IG51bGwsXG4gIGNvZGU6IEFic3RyYWN0Q29udHJvbCB8IG51bGxcbik6IHZvaWQge1xuICBpZiAoIWNvZGU/LnZhbHVlKSB7XG4gICAgY29uc3QgY29kZUZyb21OYW1lID0gbmFtZT8udmFsdWU/LnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvZGU/LnBhdGNoVmFsdWUoY29kZUZyb21OYW1lKTtcbiAgfVxufVxuIl19