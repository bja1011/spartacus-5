/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { deepMerge, isObject } from '../../config/utils/deep-merge';
/**
 * Merge occ fields parameters
 *
 * @param fields Fields definition as string or object
 */
export function mergeFields(fields) {
    const parsedFields = fields.map((f) => typeof f === 'string' ? parseFields(f) : f);
    const mergedFields = optimizeFields(deepMerge({}, ...parsedFields));
    return stringifyFields(mergedFields);
}
/**
 * Optimize fields definition by removing not needed groups
 *
 * @param fields
 */
export function optimizeFields(fields = {}) {
    const keys = Object.keys(fields);
    if (keys.includes('FULL')) {
        delete fields['DEFAULT'];
        delete fields['BASIC'];
    }
    else if (keys.includes('DEFAULT')) {
        delete fields['BASIC'];
    }
    Object.keys(fields).forEach((key) => {
        fields[key] = optimizeFields(fields[key]);
    });
    return fields;
}
/**
 * Parse string field definition to an AST object
 *
 * @param fields Fields string definition
 * @param startIndex Used for recurrence
 */
export function parseFields(fields, startIndex = 0) {
    const parsedFields = {};
    let i = startIndex;
    while (i < fields.length) {
        if (fields[i] === ',') {
            if (i > startIndex) {
                parsedFields[fields.substr(startIndex, i - startIndex)] = {};
            }
            startIndex = i + 1;
        }
        else if (fields[i] === '(') {
            const subFields = parseFields(fields, i + 1);
            if (Array.isArray(subFields)) {
                parsedFields[fields.substr(startIndex, i - startIndex)] = subFields[0];
                startIndex = subFields[1];
                i = startIndex - 1;
            }
            else {
                return parsedFields;
            }
        }
        else if (fields[i] === ')') {
            if (i > startIndex) {
                parsedFields[fields.substr(startIndex, i - startIndex)] = {};
            }
            return [parsedFields, i + 1];
        }
        i++;
    }
    if (startIndex < fields.length) {
        parsedFields[fields.substr(startIndex, i - startIndex)] = {};
    }
    return parsedFields;
}
/**
 * Convert AST object fields definition to string representation
 *
 * @param fields
 */
export function stringifyFields(fields) {
    return Object.keys(fields)
        .map((key) => {
        const subFields = stringifyFields(fields[key]);
        return subFields ? `${key}(${subFields})` : key;
    })
        .join(',');
}
/**
 * Extract part of the object described by fields definition
 *
 * @param data
 * @param fields
 */
export function extractFields(data, fields) {
    const parsedFields = typeof fields === 'string' ? parseFields(fields) : fields;
    return getObjectPart(data, parsedFields);
}
function getObjectPart(data, fields) {
    if (!isObject(data)) {
        return data;
    }
    const keys = Object.keys(fields);
    if (keys.length === 0 ||
        // we should not extract parts of the object with ambiguous fields definitions
        keys.find((el) => el === 'BASIC' || el === 'DEFAULT' || el === 'FULL')) {
        return data;
    }
    const result = {};
    keys.forEach((key) => {
        if (data.hasOwnProperty(key)) {
            result[key] = getObjectPart(data[key], fields[key]);
        }
    });
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWZpZWxkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy91dGlscy9vY2MtZmllbGRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXBFOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLE1BQTJCO0lBQ3JELE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUNwQyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMzQyxDQUFDO0lBQ0YsTUFBTSxZQUFZLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLE9BQU8sZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLGNBQWMsQ0FBQyxTQUFpQixFQUFFO0lBQ2hELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ3pCLE9BQU8sTUFBTSxDQUFDLFNBQXlCLENBQUMsQ0FBQztRQUN6QyxPQUFPLE1BQU0sQ0FBQyxPQUF1QixDQUFDLENBQUM7S0FDeEM7U0FBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFDbkMsT0FBTyxNQUFNLENBQUMsT0FBdUIsQ0FBQyxDQUFDO0tBQ3hDO0lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENB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QzVELE9BQU8sYUFBYSxDQUFJLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUksSUFBTyxFQUFFLE1BQWM7SUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNuQixPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVqQyxJQUNFLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUNqQiw4RUFBOEU7UUFDOUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLE9BQU8sSUFBSSxFQUFFLEtBQUssU0FBUyxJQUFJLEVBQUUsS0FBSyxNQUFNLENBQUMsRUFDdEU7UUFDQSxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsTUFBTSxNQUFNLEdBQUcsRUFBTyxDQUFDO0lBRXZCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNuQixJQUFLLElBQTBCLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELE1BQU0sQ0FBQyxHQUFjLENBQUMsR0FBRyxhQUFhLENBQ3BDLElBQUksQ0FBQyxHQUFtQixDQUFDLEVBQ3pCLE1BQU0sQ0FBQyxHQUFtQixDQUFDLENBQzVCLENBQUM7U0FDSDtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIyIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IGRlZXBNZXJnZSwgaXNPYmplY3QgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5cbi8qKlxuICogTWVyZ2Ugb2NjIGZpZWxkcyBwYXJhbWV0ZXJzXG4gKlxuICogQHBhcmFtIGZpZWxkcyBGaWVsZHMgZGVmaW5pdGlvbiBhcyBzdHJpbmcgb3Igb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUZpZWxkcyhmaWVsZHM6IChzdHJpbmcgfCBvYmplY3QpW10pOiBzdHJpbmcge1xuICBjb25zdCBwYXJzZWRGaWVsZHMgPSBmaWVsZHMubWFwKChmKSA9PlxuICAgIHR5cGVvZiBmID09PSAnc3RyaW5nJyA/IHBhcnNlRmllbGRzKGYpIDogZlxuICApO1xuICBjb25zdCBtZXJnZWRGaWVsZHMgPSBvcHRpbWl6ZUZpZWxkcyhkZWVwTWVyZ2Uoe30sIC4uLnBhcnNlZEZpZWxkcykpO1xuICByZXR1cm4gc3RyaW5naWZ5RmllbGRzKG1lcmdlZEZpZWxkcyk7XG59XG5cbi8qKlxuICogT3B0aW1pemUgZmllbGRzIGRlZmluaXRpb24gYnkgcmVtb3Zpbmcgbm90IG5lZWRlZCBncm91cHNcbiAqXG4gKiBAcGFyYW0gZmllbGRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcHRpbWl6ZUZpZWxkcyhmaWVsZHM6IG9iamVjdCA9IHt9KTogb2JqZWN0IHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGZpZWxkcyk7XG4gIGlmIChrZXlzLmluY2x1ZGVzKCdGVUxMJykpIHtcbiAgICBkZWxldGUgZmllbGRzWydERUZBVUxUJyBhcyBrZXlvZiBvYmplY3RdO1xuICAgIGRlbGV0ZSBmaWVsZHNbJ0JBU0lDJyBhcyBrZXlvZiBvYmplY3RdO1xuICB9IGVsc2UgaWYgKGtleXMuaW5jbHVkZXMoJ0RFRkFVTFQnKSkge1xuICAgIGRlbGV0ZSBmaWVsZHNbJ0JBU0lDJyBhcyBrZXlvZiBvYmplY3RdO1xuICB9XG4gIE9iamVjdC5rZXlzKGZpZWxkcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgKGZpZWxkc1trZXkgYXMga2V5b2Ygb2JqZWN0XSBhcyBvYmplY3QpID0gb3B0aW1pemVGaWVsZHMoXG4gICAgICBmaWVsZHNba2V5IGFzIGtleW9mIG9iamVjdF1cbiAgICApO1xuICB9KTtcbiAgcmV0dXJuIGZpZWxkcztcbn1cblxuLyoqXG4gKiBQYXJzZSBzdHJpbmcgZmllbGQgZGVmaW5pdGlvbiB0byBhbiBBU1Qgb2JqZWN0XG4gKlxuICogQHBhcmFtIGZpZWxkcyBGaWVsZHMgc3RyaW5nIGRlZmluaXRpb25cbiAqIEBwYXJhbSBzdGFydEluZGV4IFVzZWQgZm9yIHJlY3VycmVuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRmllbGRzKFxuICBmaWVsZHM6IHN0cmluZyxcbiAgc3RhcnRJbmRleCA9IDBcbik6IFtvYmplY3QsIG51bWJlcl0gfCBvYmplY3Qge1xuICBjb25zdCBwYXJzZWRGaWVsZHM6IFJlY29yZDxzdHJpbmcsIG9iamVjdD4gPSB7fTtcblxuICBsZXQgaSA9IHN0YXJ0SW5kZXg7XG4gIHdoaWxlIChpIDwgZmllbGRzLmxlbmd0aCkge1xuICAgIGlmIChmaWVsZHNbaV0gPT09ICcsJykge1xuICAgICAgaWYgKGkgPiBzdGFydEluZGV4KSB7XG4gICAgICAgIHBhcnNlZEZpZWxkc1tmaWVsZHMuc3Vic3RyKHN0YXJ0SW5kZXgsIGkgLSBzdGFydEluZGV4KV0gPSB7fTtcbiAgICAgIH1cbiAgICAgIHN0YXJ0SW5kZXggPSBpICsgMTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkc1tpXSA9PT0gJygnKSB7XG4gICAgICBjb25zdCBzdWJGaWVsZHMgPSBwYXJzZUZpZWxkcyhmaWVsZHMsIGkgKyAxKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHN1YkZpZWxkcykpIHtcbiAgICAgICAgcGFyc2VkRmllbGRzW2ZpZWxkcy5zdWJzdHIoc3RhcnRJbmRleCwgaSAtIHN0YXJ0SW5kZXgpXSA9IHN1YkZpZWxkc1swXTtcbiAgICAgICAgc3RhcnRJbmRleCA9IHN1YkZpZWxkc1sxXTtcbiAgICAgICAgaSA9IHN0YXJ0SW5kZXggLSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlZEZpZWxkcztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZpZWxkc1tpXSA9PT0gJyknKSB7XG4gICAgICBpZiAoaSA+IHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgcGFyc2VkRmllbGRzW2ZpZWxkcy5zdWJzdHIoc3RhcnRJbmRleCwgaSAtIHN0YXJ0SW5kZXgpXSA9IHt9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtwYXJzZWRGaWVsZHMsIGkgKyAxXTtcbiAgICB9XG4gICAgaSsrO1xuICB9XG5cbiAgaWYgKHN0YXJ0SW5kZXggPCBmaWVsZHMubGVuZ3RoKSB7XG4gICAgcGFyc2VkRmllbGRzW2ZpZWxkcy5zdWJzdHIoc3RhcnRJbmRleCwgaSAtIHN0YXJ0SW5kZXgpXSA9IHt9O1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZEZpZWxkcztcbn1cblxuLyoqXG4gKiBDb252ZXJ0IEFTVCBvYmplY3QgZmllbGRzIGRlZmluaXRpb24gdG8gc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gKlxuICogQHBhcmFtIGZpZWxkc1xuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5RmllbGRzKGZpZWxkczogb2JqZWN0KTogc3RyaW5nIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGZpZWxkcylcbiAgICAubWFwKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHN1YkZpZWxkcyA9IHN0cmluZ2lmeUZpZWxkcyhmaWVsZHNba2V5IGFzIGtleW9mIG9iamVjdF0pO1xuICAgICAgcmV0dXJuIHN1YkZpZWxkcyA/IGAke2tleX0oJHtzdWJGaWVsZHN9KWAgOiBrZXk7XG4gICAgfSlcbiAgICAuam9pbignLCcpO1xufVxuXG4vKipcbiAqIEV4dHJhY3QgcGFydCBvZiB0aGUgb2JqZWN0IGRlc2NyaWJlZCBieSBmaWVsZHMgZGVmaW5pdGlvblxuICpcbiAqIEBwYXJhbSBkYXRhXG4gKiBAcGFyYW0gZmllbGRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0RmllbGRzPFQ+KGRhdGE6IFQsIGZpZWxkczogc3RyaW5nIHwgb2JqZWN0KTogVCB7XG4gIGNvbnN0IHBhcnNlZEZpZWxkcyA9XG4gICAgdHlwZW9mIGZpZWxkcyA9PT0gJ3N0cmluZycgPyBwYXJzZUZpZWxkcyhmaWVsZHMpIDogZmllbGRzO1xuICByZXR1cm4gZ2V0T2JqZWN0UGFydDxUPihkYXRhLCBwYXJzZWRGaWVsZHMpO1xufVxuXG5mdW5jdGlvbiBnZXRPYmplY3RQYXJ0PFQ+KGRhdGE6IFQsIGZpZWxkczogb2JqZWN0KTogVCB7XG4gIGlmICghaXNPYmplY3QoZGF0YSkpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhmaWVsZHMpO1xuXG4gIGlmIChcbiAgICBrZXlzLmxlbmd0aCA9PT0gMCB8fFxuICAgIC8vIHdlIHNob3VsZCBub3QgZXh0cmFjdCBwYXJ0cyBvZiB0aGUgb2JqZWN0IHdpdGggYW1iaWd1b3VzIGZpZWxkcyBkZWZpbml0aW9uc1xuICAgIGtleXMuZmluZCgoZWwpID0+IGVsID09PSAnQkFTSUMnIHx8IGVsID09PSAnREVGQVVMVCcgfHwgZWwgPT09ICdGVUxMJylcbiAgKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSB7fSBhcyBUO1xuXG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKChkYXRhIGFzIHVua25vd24gYXMgb2JqZWN0KS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXN1bHRba2V5IGFzIGtleW9mIFRdID0gZ2V0T2JqZWN0UGFydChcbiAgICAgICAgZGF0YVtrZXkgYXMga2V5b2Ygb2JqZWN0XSxcbiAgICAgICAgZmllbGRzW2tleSBhcyBrZXlvZiBvYmplY3RdXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==