/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
const visualViewer = {
    contentType: {
        drawing2D: '2D',
        model3D: '3D',
    },
    toolbar: {
        homeButton: { label: 'Home' },
        zoomButton: { label: 'Zoom' },
        panButton: { label: 'Pan' },
        rotateButton: { label: 'Rotate' },
        isolateButton: { label: 'Isolate' },
        playButton: { label: 'Play' },
        pauseButton: { label: 'Pause' },
        hotspotsButton: { label: 'Hotspots', show: 'Show', hide: 'Hide' },
        visualViewerAnimationSlider: {
            label: 'Animation Slider',
            role: 'Slider',
        },
    },
};
const visualPicking = {
    visualPickingTab: {
        noProductReferences: 'No spare parts are available for this product.',
    },
    visualPickingProductList: {
        description: 'Description',
        itemPrice: 'Price',
        outOfStock: 'Out of stock',
        id: 'ID',
    },
    visualPickingProductFilter: {
        input: {
            placeholder: 'Filter by name or id',
        },
        searchButton: {
            label: 'search',
        },
        resetButton: {
            label: 'reset',
        },
    },
};
const errors = {
    visualLoad: {
        noMatchingVisualFound: 'No matching visualization found',
        multipleMatchingVisualsFound: 'Multiple matching visualizations found',
        unexpectedLoadError: 'Error occurred while loading visualization',
    },
};
const epdVisualization = {
    epdVisualization: {
        visualViewer,
        visualPicking,
        errors,
    },
};

/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
const en = {
    epdVisualization,
};

/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
const epdVisualizationTranslations = {
    en,
};
const epdVisualizationTranslationChunksConfig = {
    epdVisualization: ['epdVisualization'],
};

/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Generated bundle index. Do not edit.
 */

export { epdVisualizationTranslationChunksConfig, epdVisualizationTranslations };
//# sourceMappingURL=spartacus-epd-visualization-assets.mjs.map
