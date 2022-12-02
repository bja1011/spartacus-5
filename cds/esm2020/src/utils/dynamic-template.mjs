/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
export class DynamicTemplate {
    static resolve(templateString, templateVariables) {
        for (const variableLabel of Object.keys(templateVariables)) {
            const placeholder = new RegExp('\\${' + variableLabel + '}', 'g');
            templateString = templateString.replace(placeholder, templateVariables[variableLabel]);
        }
        return templateString;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2ludGVncmF0aW9uLWxpYnMvY2RzL3NyYy91dGlscy9keW5hbWljLXRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxNQUFNLE9BQU8sZUFBZTtJQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLGNBQXNCLEVBQUUsaUJBQXlCO1FBQzlELEtBQUssTUFBTSxhQUFhLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1lBQzFELE1BQU0sV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxhQUFhLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2xFLGNBQWMsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUNyQyxXQUFXLEVBQ1gsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQ2pDLENBQUM7U0FDSDtRQUNELE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmV4cG9ydCBjbGFzcyBEeW5hbWljVGVtcGxhdGUge1xuICBzdGF0aWMgcmVzb2x2ZSh0ZW1wbGF0ZVN0cmluZzogc3RyaW5nLCB0ZW1wbGF0ZVZhcmlhYmxlczogT2JqZWN0KSB7XG4gICAgZm9yIChjb25zdCB2YXJpYWJsZUxhYmVsIG9mIE9iamVjdC5rZXlzKHRlbXBsYXRlVmFyaWFibGVzKSkge1xuICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBuZXcgUmVnRXhwKCdcXFxcJHsnICsgdmFyaWFibGVMYWJlbCArICd9JywgJ2cnKTtcbiAgICAgIHRlbXBsYXRlU3RyaW5nID0gdGVtcGxhdGVTdHJpbmcucmVwbGFjZShcbiAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgIHRlbXBsYXRlVmFyaWFibGVzW3ZhcmlhYmxlTGFiZWxdXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGVTdHJpbmc7XG4gIH1cbn1cbiJdfQ==