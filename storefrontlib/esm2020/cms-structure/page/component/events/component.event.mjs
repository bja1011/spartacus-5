/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { CxEvent } from '@spartacus/core';
/**
 * Lifecycle events for the creation and removal of CMS components.
 *
 * Triggers when the component is added or removed from the DOM, using
 * sub event `ComponentCreateEvent` and `ComponentDestroyEvent`.
 */
export class ComponentEvent extends CxEvent {
}
/**
 * Indicates that the component is added to the DOM.
 */
export class ComponentCreateEvent extends ComponentEvent {
}
/**
 * Event's type
 */
ComponentCreateEvent.type = 'ComponentCreate';
/**
 * Indicates that the component is removed from the DOM.
 */
export class ComponentDestroyEvent extends ComponentEvent {
}
/**
 * Event's type
 */
ComponentDestroyEvent.type = 'ComponentDestroy';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9jbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L2V2ZW50cy9jb21wb25lbnQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUxQzs7Ozs7R0FLRztBQUNILE1BQU0sT0FBZ0IsY0FBZSxTQUFRLE9BQU87Q0FTbkQ7QUFFRDs7R0FFRztBQUNILE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxjQUFjOztBQUN0RDs7R0FFRztBQUNhLHlCQUFJLEdBQUcsaUJBQWlCLENBQUM7QUFPM0M7O0dBRUc7QUFDSCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsY0FBYzs7QUFDdkQ7O0dBRUc7QUFDYSwwQkFBSSxHQUFHLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgQ3hFdmVudCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbi8qKlxuICogTGlmZWN5Y2xlIGV2ZW50cyBmb3IgdGhlIGNyZWF0aW9uIGFuZCByZW1vdmFsIG9mIENNUyBjb21wb25lbnRzLlxuICpcbiAqIFRyaWdnZXJzIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBhZGRlZCBvciByZW1vdmVkIGZyb20gdGhlIERPTSwgdXNpbmdcbiAqIHN1YiBldmVudCBgQ29tcG9uZW50Q3JlYXRlRXZlbnRgIGFuZCBgQ29tcG9uZW50RGVzdHJveUV2ZW50YC5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudEV2ZW50IGV4dGVuZHMgQ3hFdmVudCB7XG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHR5cGUgY29kZS5cbiAgICovXG4gIHR5cGVDb2RlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgdW5pcXVlIGlkIGZvciB0aGUgY29tcG9uZW50IGluc3RhbmNlLlxuICAgKi9cbiAgaWQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCB0aGUgY29tcG9uZW50IGlzIGFkZGVkIHRvIHRoZSBET00uXG4gKi9cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRDcmVhdGVFdmVudCBleHRlbmRzIENvbXBvbmVudEV2ZW50IHtcbiAgLyoqXG4gICAqIEV2ZW50J3MgdHlwZVxuICAgKi9cbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnQ29tcG9uZW50Q3JlYXRlJztcbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgaG9zdCBlbGVtZW50LlxuICAgKi9cbiAgaG9zdDogSFRNTEVsZW1lbnQ7XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkIGZyb20gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudERlc3Ryb3lFdmVudCBleHRlbmRzIENvbXBvbmVudEV2ZW50IHtcbiAgLyoqXG4gICAqIEV2ZW50J3MgdHlwZVxuICAgKi9cbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnQ29tcG9uZW50RGVzdHJveSc7XG59XG4iXX0=