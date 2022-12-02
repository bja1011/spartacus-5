/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ComponentDecorator, SlotDecorator } from '@spartacus/core';
import { SmartEditComponentDecorator } from './smart-edit-component-decorator';
import { SmartEditSlotDecorator } from './smart-edit-slot-decorator';
export const smartEditDecorators = [
    {
        provide: ComponentDecorator,
        useExisting: SmartEditComponentDecorator,
        multi: true,
    },
    {
        provide: SlotDecorator,
        useExisting: SmartEditSlotDecorator,
        multi: true,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvc21hcnRlZGl0L2NvcmUvZGVjb3JhdG9ycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBR0gsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXJFLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFlO0lBQzdDO1FBQ0UsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixXQUFXLEVBQUUsMkJBQTJCO1FBQ3hDLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMiBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50RGVjb3JhdG9yLCBTbG90RGVjb3JhdG9yIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFNtYXJ0RWRpdENvbXBvbmVudERlY29yYXRvciB9IGZyb20gJy4vc21hcnQtZWRpdC1jb21wb25lbnQtZGVjb3JhdG9yJztcbmltcG9ydCB7IFNtYXJ0RWRpdFNsb3REZWNvcmF0b3IgfSBmcm9tICcuL3NtYXJ0LWVkaXQtc2xvdC1kZWNvcmF0b3InO1xuXG5leHBvcnQgY29uc3Qgc21hcnRFZGl0RGVjb3JhdG9yczogUHJvdmlkZXJbXSA9IFtcbiAge1xuICAgIHByb3ZpZGU6IENvbXBvbmVudERlY29yYXRvcixcbiAgICB1c2VFeGlzdGluZzogU21hcnRFZGl0Q29tcG9uZW50RGVjb3JhdG9yLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogU2xvdERlY29yYXRvcixcbiAgICB1c2VFeGlzdGluZzogU21hcnRFZGl0U2xvdERlY29yYXRvcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbl07XG4iXX0=