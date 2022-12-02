/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./b2b-user.adapter";
export class B2BUserConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    get(userId, orgUnitCustomerId) {
        return this.adapter.load(userId, orgUnitCustomerId);
    }
    create(userId, orgCustomer) {
        return this.adapter.create(userId, orgCustomer);
    }
    update(userId, orgCustomerId, orgCustomer) {
        return this.adapter.update(userId, orgCustomerId, orgCustomer);
    }
    getList(userId, params) {
        return this.adapter.loadList(userId, params);
    }
    getApprovers(userId, orgUnitCustomerId, params) {
        return this.adapter.loadApprovers(userId, orgUnitCustomerId, params);
    }
    assignApprover(userId, orgCustomerId, approverId) {
        return this.adapter.assignApprover(userId, orgCustomerId, approverId);
    }
    unassignApprover(userId, orgCustomerId, approverId) {
        return this.adapter.unassignApprover(userId, orgCustomerId, approverId);
    }
    getPermissions(userId, orgUnitCustomerId, params) {
        return this.adapter.loadPermissions(userId, orgUnitCustomerId, params);
    }
    assignPermission(userId, orgCustomerId, permissionId) {
        return this.adapter.assignPermission(userId, orgCustomerId, permissionId);
    }
    unassignPermission(userId, orgCustomerId, permissionId) {
        return this.adapter.unassignPermission(userId, orgCustomerId, permissionId);
    }
    getUserGroups(userId, orgUnitCustomerId, params) {
        return this.adapter.loadUserGroups(userId, orgUnitCustomerId, params);
    }
    assignUserGroup(userId, orgCustomerId, userGroupId) {
        return this.adapter.assignUserGroup(userId, orgCustomerId, userGroupId);
    }
    unassignUserGroup(userId, orgCustomerId, userGroupId) {
        return this.adapter.unassignUserGroup(userId, orgCustomerId, userGroupId);
    }
}
B2BUserConnector.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: B2BUserConnector, deps: [{ token: i1.B2BUserAdapter }], target: i0.ɵɵFactoryTarget.Injectable });
B2BUserConnector.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: B2BUserConnector, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: B2BUserConnector, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.B2BUserAdapter }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYjJiLXVzZXIuY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL29yZ2FuaXphdGlvbi9hZG1pbmlzdHJhdGlvbi9jb3JlL2Nvbm5lY3RvcnMvYjJiLXVzZXIvYjJiLXVzZXIuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFVM0MsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixZQUFzQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtJQUFHLENBQUM7SUFFakQsR0FBRyxDQUFDLE1BQWMsRUFBRSxpQkFBeUI7UUFDM0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQWMsRUFBRSxXQUFvQjtRQUN6QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsTUFBTSxDQUNKLE1BQWMsRUFDZCxhQUFxQixFQUNyQixXQUFvQjtRQUVwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELE9BQU8sQ0FDTCxNQUFjLEVBQ2QsTUFBcUI7UUFFckIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELFlBQVksQ0FDVixNQUFjLEVBQ2QsaUJBQXlCLEVBQ3pCLE1BQXFCO1FBRXJCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxjQUFjLENBQ1osTUFBYyxFQUNkLGFBQXFCLEVBQ3JCLFVBQWtCO1FBRWxCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsZ0JBQWdCLENBQ2QsTUFBYyxFQUNkLGFBQXFCLEVBQ3JCLFVBQWtCO1FBRWxCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxjQUFjLENBQ1osTUFBYyxFQUNkLGlCQUF5QixFQUN6QixNQUFxQjtRQUVyQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsZ0JBQWdCLENBQ2QsTUFBYyxFQUNkLGFBQXFCLEVBQ3JCLFlBQW9CO1FBRXBCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxrQkFBa0IsQ0FDaEIsTUFBYyxFQUNkLGFBQXFCLEVBQ3JCLFlBQW9CO1FBRXBCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxhQUFhLENBQ1gsTUFBYyxFQUNkLGlCQUF5QixFQUN6QixNQUFxQjtRQUVyQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsZUFBZSxDQUNiLE1BQWMsRUFDZCxhQUFxQixFQUNyQixXQUFtQjtRQUVuQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELGlCQUFpQixDQUNmLE1BQWMsRUFDZCxhQUFxQixFQUNyQixXQUFtQjtRQUVuQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs2R0FoR1UsZ0JBQWdCO2lIQUFoQixnQkFBZ0IsY0FGZixNQUFNOzJGQUVQLGdCQUFnQjtrQkFINUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCMkJVc2VyLCBFbnRpdGllc01vZGVsLCBTZWFyY2hDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGVybWlzc2lvbiB9IGZyb20gJy4uLy4uL21vZGVsL3Blcm1pc3Npb24ubW9kZWwnO1xuaW1wb3J0IHsgVXNlckdyb3VwIH0gZnJvbSAnLi4vLi4vbW9kZWwvdXNlci1ncm91cC5tb2RlbCc7XG5pbXBvcnQgeyBCMkJVc2VyQWRhcHRlciB9IGZyb20gJy4vYjJiLXVzZXIuYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBCMkJVc2VyQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IEIyQlVzZXJBZGFwdGVyKSB7fVxuXG4gIGdldCh1c2VySWQ6IHN0cmluZywgb3JnVW5pdEN1c3RvbWVySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8QjJCVXNlcj4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZCh1c2VySWQsIG9yZ1VuaXRDdXN0b21lcklkKTtcbiAgfVxuXG4gIGNyZWF0ZSh1c2VySWQ6IHN0cmluZywgb3JnQ3VzdG9tZXI6IEIyQlVzZXIpOiBPYnNlcnZhYmxlPEIyQlVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmNyZWF0ZSh1c2VySWQsIG9yZ0N1c3RvbWVyKTtcbiAgfVxuXG4gIHVwZGF0ZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvcmdDdXN0b21lcklkOiBzdHJpbmcsXG4gICAgb3JnQ3VzdG9tZXI6IEIyQlVzZXJcbiAgKTogT2JzZXJ2YWJsZTxCMkJVc2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci51cGRhdGUodXNlcklkLCBvcmdDdXN0b21lcklkLCBvcmdDdXN0b21lcik7XG4gIH1cblxuICBnZXRMaXN0KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHBhcmFtcz86IFNlYXJjaENvbmZpZ1xuICApOiBPYnNlcnZhYmxlPEVudGl0aWVzTW9kZWw8QjJCVXNlcj4+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRMaXN0KHVzZXJJZCwgcGFyYW1zKTtcbiAgfVxuXG4gIGdldEFwcHJvdmVycyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvcmdVbml0Q3VzdG9tZXJJZDogc3RyaW5nLFxuICAgIHBhcmFtcz86IFNlYXJjaENvbmZpZ1xuICApOiBPYnNlcnZhYmxlPEVudGl0aWVzTW9kZWw8QjJCVXNlcj4+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRBcHByb3ZlcnModXNlcklkLCBvcmdVbml0Q3VzdG9tZXJJZCwgcGFyYW1zKTtcbiAgfVxuXG4gIGFzc2lnbkFwcHJvdmVyKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9yZ0N1c3RvbWVySWQ6IHN0cmluZyxcbiAgICBhcHByb3ZlcklkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmFzc2lnbkFwcHJvdmVyKHVzZXJJZCwgb3JnQ3VzdG9tZXJJZCwgYXBwcm92ZXJJZCk7XG4gIH1cblxuICB1bmFzc2lnbkFwcHJvdmVyKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9yZ0N1c3RvbWVySWQ6IHN0cmluZyxcbiAgICBhcHByb3ZlcklkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnVuYXNzaWduQXBwcm92ZXIodXNlcklkLCBvcmdDdXN0b21lcklkLCBhcHByb3ZlcklkKTtcbiAgfVxuXG4gIGdldFBlcm1pc3Npb25zKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9yZ1VuaXRDdXN0b21lcklkOiBzdHJpbmcsXG4gICAgcGFyYW1zPzogU2VhcmNoQ29uZmlnXG4gICk6IE9ic2VydmFibGU8RW50aXRpZXNNb2RlbDxQZXJtaXNzaW9uPj4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZFBlcm1pc3Npb25zKHVzZXJJZCwgb3JnVW5pdEN1c3RvbWVySWQsIHBhcmFtcyk7XG4gIH1cblxuICBhc3NpZ25QZXJtaXNzaW9uKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9yZ0N1c3RvbWVySWQ6IHN0cmluZyxcbiAgICBwZXJtaXNzaW9uSWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuYXNzaWduUGVybWlzc2lvbih1c2VySWQsIG9yZ0N1c3RvbWVySWQsIHBlcm1pc3Npb25JZCk7XG4gIH1cblxuICB1bmFzc2lnblBlcm1pc3Npb24oXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb3JnQ3VzdG9tZXJJZDogc3RyaW5nLFxuICAgIHBlcm1pc3Npb25JZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci51bmFzc2lnblBlcm1pc3Npb24odXNlcklkLCBvcmdDdXN0b21lcklkLCBwZXJtaXNzaW9uSWQpO1xuICB9XG5cbiAgZ2V0VXNlckdyb3VwcyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvcmdVbml0Q3VzdG9tZXJJZDogc3RyaW5nLFxuICAgIHBhcmFtcz86IFNlYXJjaENvbmZpZ1xuICApOiBPYnNlcnZhYmxlPEVudGl0aWVzTW9kZWw8VXNlckdyb3VwPj4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZFVzZXJHcm91cHModXNlcklkLCBvcmdVbml0Q3VzdG9tZXJJZCwgcGFyYW1zKTtcbiAgfVxuXG4gIGFzc2lnblVzZXJHcm91cChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvcmdDdXN0b21lcklkOiBzdHJpbmcsXG4gICAgdXNlckdyb3VwSWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuYXNzaWduVXNlckdyb3VwKHVzZXJJZCwgb3JnQ3VzdG9tZXJJZCwgdXNlckdyb3VwSWQpO1xuICB9XG5cbiAgdW5hc3NpZ25Vc2VyR3JvdXAoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb3JnQ3VzdG9tZXJJZDogc3RyaW5nLFxuICAgIHVzZXJHcm91cElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnVuYXNzaWduVXNlckdyb3VwKHVzZXJJZCwgb3JnQ3VzdG9tZXJJZCwgdXNlckdyb3VwSWQpO1xuICB9XG59XG4iXX0=