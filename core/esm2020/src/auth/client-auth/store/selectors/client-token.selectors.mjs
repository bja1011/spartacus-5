/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { createSelector } from '@ngrx/store';
import { getClientAuthState } from './feature.selector';
export const getClientTokenState = createSelector(getClientAuthState, (state) => state.clientToken);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXRva2VuLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2F1dGgvY2xpZW50LWF1dGgvc3RvcmUvc2VsZWN0b3JzL2NsaWVudC10b2tlbi5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBSS9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUc1QixjQUFjLENBQ2hCLGtCQUFrQixFQUNsQixDQUFDLEtBQXNCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQzlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBDbGllbnRUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy9jbGllbnQtdG9rZW4ubW9kZWwnO1xuaW1wb3J0IHsgQ2xpZW50QXV0aFN0YXRlLCBTdGF0ZVdpdGhDbGllbnRBdXRoIH0gZnJvbSAnLi4vY2xpZW50LWF1dGgtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0Q2xpZW50QXV0aFN0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IGdldENsaWVudFRva2VuU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENsaWVudEF1dGgsXG4gIExvYWRlclN0YXRlPENsaWVudFRva2VuPlxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDbGllbnRBdXRoU3RhdGUsXG4gIChzdGF0ZTogQ2xpZW50QXV0aFN0YXRlKSA9PiBzdGF0ZS5jbGllbnRUb2tlblxuKTtcbiJdfQ==