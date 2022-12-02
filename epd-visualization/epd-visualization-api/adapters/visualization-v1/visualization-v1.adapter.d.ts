import { HttpClient } from '@angular/common/http';
import { ConverterService } from '@spartacus/core';
import { LookupVisualizationsResponse, VisualizationAdapter } from '@spartacus/epd-visualization/core';
import { EpdVisualizationConfig, UsageId } from '@spartacus/epd-visualization/root';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * This adapter references an API that is expected to be deprecated and relocated
 * since multiple microservice APIs are being combined into a single namespace.
 * A new adapter implementation will be added and this one will be deprecated
 * when the new endpoint is available.
 */
export declare class VisualizationV1Adapter implements VisualizationAdapter {
    protected http: HttpClient;
    protected epdVisualizationConfig: EpdVisualizationConfig;
    protected converter: ConverterService;
    constructor(http: HttpClient, epdVisualizationConfig: EpdVisualizationConfig, converter: ConverterService);
    private baseUrl;
    private getBaseUrl;
    protected getUrl(visualizationUsageId: UsageId, folderUsageId: UsageId): string;
    /**
     * Used for finding a visualization by Usage ID that has anonymous (unauthenticated) read access enabled.
     * The search is performed in the SAP EPD Visualization service instance associated with the SaaS subscription for the SAP EPD tenant.
     * @param visualizationUsageId The SAP EPD Visualization usage ID value identifying visualizations to match.
     * Only visualizations that have the specified usage ID value will be returned.
     * @param folderUsageId The SAP EPD Visualization usage ID identifying folders to search for visualizations.
     * Only folders that are tagged with the specified usage ID value that have anonymous access enabled will be searched.
     * @returns An Observable producing a LookupVisualizationsResponse which contains an array of objects describing matched visualizations.
     */
    lookupVisualization(visualizationUsageId: UsageId, folderUsageId: UsageId): Observable<LookupVisualizationsResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<VisualizationV1Adapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<VisualizationV1Adapter>;
}
