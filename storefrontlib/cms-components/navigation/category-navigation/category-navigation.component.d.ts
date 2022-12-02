import { CmsNavigationComponent } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { NavigationNode } from '../navigation/navigation-node.model';
import { NavigationService } from '../navigation/navigation.service';
import * as i0 from "@angular/core";
export declare class CategoryNavigationComponent {
    protected componentData: CmsComponentData<CmsNavigationComponent>;
    protected service: NavigationService;
    node$: Observable<NavigationNode>;
    data$: Observable<CmsNavigationComponent>;
    constructor(componentData: CmsComponentData<CmsNavigationComponent>, service: NavigationService);
    static ɵfac: i0.ɵɵFactoryDeclaration<CategoryNavigationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CategoryNavigationComponent, "cx-category-navigation", never, {}, {}, never, never, false>;
}
