import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CmsComponentAdapter } from '../../../cms/connectors/component/cms-component.adapter';
import { CmsComponent } from '../../../model/cms.model';
import { PageContext } from '../../../routing';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as i0 from "@angular/core";
export declare class OccCmsComponentAdapter implements CmsComponentAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    protected headers: HttpHeaders;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    load<T extends CmsComponent>(id: string, pageContext: PageContext): Observable<T>;
    findComponentsByIds(ids: string[], pageContext: PageContext, fields?: string, currentPage?: number, pageSize?: number, sort?: string): Observable<CmsComponent[]>;
    protected getComponentEndPoint(id: string, pageContext: PageContext): string;
    protected getComponentsEndpoint(requestParams: any, fields: string): string;
    protected getPaginationParams(currentPage?: number, pageSize?: number, sort?: string): {
        [key: string]: string;
    };
    protected getContextParams(pageContext: PageContext): {
        [key: string]: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<OccCmsComponentAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OccCmsComponentAdapter>;
}
