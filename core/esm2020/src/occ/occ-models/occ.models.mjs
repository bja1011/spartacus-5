/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
export var Occ;
(function (Occ) {
    /**
     * The page robot information is exposed with 4 string values.
     */
    let PageRobots;
    (function (PageRobots) {
        PageRobots["INDEX_FOLLOW"] = "INDEX_FOLLOW";
        PageRobots["NOINDEX_FOLLOW"] = "NOINDEX_FOLLOW";
        PageRobots["INDEX_NOFOLLOW"] = "INDEX_NOFOLLOW";
        PageRobots["NOINDEX_NOFOLLOW"] = "NOINDEX_NOFOLLOW";
    })(PageRobots = Occ.PageRobots || (Occ.PageRobots = {}));
    /**
     * Possible order entry statuses
     */
    let OrderEntryStatus;
    (function (OrderEntryStatus) {
        OrderEntryStatus["Success"] = "SUCCESS";
        OrderEntryStatus["Info"] = "INFO";
        OrderEntryStatus["Warning"] = "WARNING";
        OrderEntryStatus["Error"] = "ERROR";
    })(OrderEntryStatus = Occ.OrderEntryStatus || (Occ.OrderEntryStatus = {}));
    /**
     * Defines values for PriceType.
     * Possible values include: 'BUY', 'FROM'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: PriceType = <PriceType>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let PriceType;
    (function (PriceType) {
        PriceType["BUY"] = "BUY";
        PriceType["FROM"] = "FROM";
    })(PriceType = Occ.PriceType || (Occ.PriceType = {}));
    /**
     * Defines values for ImageType.
     * Possible values include: 'PRIMARY', 'GALLERY'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: ImageType = <ImageType>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let ImageType;
    (function (ImageType) {
        ImageType["PRIMARY"] = "PRIMARY";
        ImageType["GALLERY"] = "GALLERY";
    })(ImageType = Occ.ImageType || (Occ.ImageType = {}));
    /**
     * Defines values for Fields.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields = <Fields>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields;
    (function (Fields) {
        Fields["BASIC"] = "BASIC";
        Fields["DEFAULT"] = "DEFAULT";
        Fields["FULL"] = "FULL";
    })(Fields = Occ.Fields || (Occ.Fields = {}));
    /**
     * Defines values for Fields1.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields1 = <Fields1>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields1;
    (function (Fields1) {
        Fields1["BASIC"] = "BASIC";
        Fields1["DEFAULT"] = "DEFAULT";
        Fields1["FULL"] = "FULL";
    })(Fields1 = Occ.Fields1 || (Occ.Fields1 = {}));
    /**
     * Defines values for Fields2.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields2 = <Fields2>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields2;
    (function (Fields2) {
        Fields2["BASIC"] = "BASIC";
        Fields2["DEFAULT"] = "DEFAULT";
        Fields2["FULL"] = "FULL";
    })(Fields2 = Occ.Fields2 || (Occ.Fields2 = {}));
    /**
     * Defines values for Fields3.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields3 = <Fields3>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields3;
    (function (Fields3) {
        Fields3["BASIC"] = "BASIC";
        Fields3["DEFAULT"] = "DEFAULT";
        Fields3["FULL"] = "FULL";
    })(Fields3 = Occ.Fields3 || (Occ.Fields3 = {}));
    /**
     * Defines values for Fields4.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields4 = <Fields4>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields4;
    (function (Fields4) {
        Fields4["BASIC"] = "BASIC";
        Fields4["DEFAULT"] = "DEFAULT";
        Fields4["FULL"] = "FULL";
    })(Fields4 = Occ.Fields4 || (Occ.Fields4 = {}));
    /**
     * Defines values for Fields5.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields5 = <Fields5>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields5;
    (function (Fields5) {
        Fields5["BASIC"] = "BASIC";
        Fields5["DEFAULT"] = "DEFAULT";
        Fields5["FULL"] = "FULL";
    })(Fields5 = Occ.Fields5 || (Occ.Fields5 = {}));
    /**
     * Defines values for Fields6.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields6 = <Fields6>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields6;
    (function (Fields6) {
        Fields6["BASIC"] = "BASIC";
        Fields6["DEFAULT"] = "DEFAULT";
        Fields6["FULL"] = "FULL";
    })(Fields6 = Occ.Fields6 || (Occ.Fields6 = {}));
    /**
     * Defines values for PageType.
     * Possible values include: 'ContentPage', 'ProductPage', 'CategoryPage',
     * 'CatalogPage'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: PageType = <PageType>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let PageType;
    (function (PageType) {
        PageType["CONTENT_PAGE"] = "ContentPage";
        PageType["PRODUCT_PAGE"] = "ProductPage";
        PageType["CATEGORY_PAGE"] = "CategoryPage";
        PageType["CATALOG_PAGE"] = "CatalogPage";
    })(PageType = Occ.PageType || (Occ.PageType = {}));
    /**
     * Defines values for Fields7.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields7 = <Fields7>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields7;
    (function (Fields7) {
        Fields7["BASIC"] = "BASIC";
        Fields7["DEFAULT"] = "DEFAULT";
        Fields7["FULL"] = "FULL";
    })(Fields7 = Occ.Fields7 || (Occ.Fields7 = {}));
    /**
     * Defines values for Fields8.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields8 = <Fields8>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields8;
    (function (Fields8) {
        Fields8["BASIC"] = "BASIC";
        Fields8["DEFAULT"] = "DEFAULT";
        Fields8["FULL"] = "FULL";
    })(Fields8 = Occ.Fields8 || (Occ.Fields8 = {}));
    /**
     * Defines values for Fields9.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields9 = <Fields9>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields9;
    (function (Fields9) {
        Fields9["BASIC"] = "BASIC";
        Fields9["DEFAULT"] = "DEFAULT";
        Fields9["FULL"] = "FULL";
    })(Fields9 = Occ.Fields9 || (Occ.Fields9 = {}));
    /**
     * Defines values for Fields10.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields10 = <Fields10>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields10;
    (function (Fields10) {
        Fields10["BASIC"] = "BASIC";
        Fields10["DEFAULT"] = "DEFAULT";
        Fields10["FULL"] = "FULL";
    })(Fields10 = Occ.Fields10 || (Occ.Fields10 = {}));
    /**
     * Defines values for Fields11.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields11 = <Fields11>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields11;
    (function (Fields11) {
        Fields11["BASIC"] = "BASIC";
        Fields11["DEFAULT"] = "DEFAULT";
        Fields11["FULL"] = "FULL";
    })(Fields11 = Occ.Fields11 || (Occ.Fields11 = {}));
    /**
     * Defines values for Fields12.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields12 = <Fields12>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields12;
    (function (Fields12) {
        Fields12["BASIC"] = "BASIC";
        Fields12["DEFAULT"] = "DEFAULT";
        Fields12["FULL"] = "FULL";
    })(Fields12 = Occ.Fields12 || (Occ.Fields12 = {}));
    /**
     * Defines values for Fields13.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields13 = <Fields13>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields13;
    (function (Fields13) {
        Fields13["BASIC"] = "BASIC";
        Fields13["DEFAULT"] = "DEFAULT";
        Fields13["FULL"] = "FULL";
    })(Fields13 = Occ.Fields13 || (Occ.Fields13 = {}));
    /**
     * Defines values for Fields14.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields14 = <Fields14>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields14;
    (function (Fields14) {
        Fields14["BASIC"] = "BASIC";
        Fields14["DEFAULT"] = "DEFAULT";
        Fields14["FULL"] = "FULL";
    })(Fields14 = Occ.Fields14 || (Occ.Fields14 = {}));
    /**
     * Defines values for Fields15.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields15 = <Fields15>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields15;
    (function (Fields15) {
        Fields15["BASIC"] = "BASIC";
        Fields15["DEFAULT"] = "DEFAULT";
        Fields15["FULL"] = "FULL";
    })(Fields15 = Occ.Fields15 || (Occ.Fields15 = {}));
    /**
     * Defines values for Fields16.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields16 = <Fields16>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields16;
    (function (Fields16) {
        Fields16["BASIC"] = "BASIC";
        Fields16["DEFAULT"] = "DEFAULT";
        Fields16["FULL"] = "FULL";
    })(Fields16 = Occ.Fields16 || (Occ.Fields16 = {}));
    /**
     * Defines values for SortEnum.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: SortEnum = <SortEnum>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let SortEnum;
    (function (SortEnum) {
        SortEnum["BASIC"] = "BASIC";
        SortEnum["DEFAULT"] = "DEFAULT";
        SortEnum["FULL"] = "FULL";
    })(SortEnum = Occ.SortEnum || (Occ.SortEnum = {}));
    /**
     * Defines values for Fields17.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields17 = <Fields17>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields17;
    (function (Fields17) {
        Fields17["BASIC"] = "BASIC";
        Fields17["DEFAULT"] = "DEFAULT";
        Fields17["FULL"] = "FULL";
    })(Fields17 = Occ.Fields17 || (Occ.Fields17 = {}));
    /**
     * Defines values for Fields18.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields18 = <Fields18>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields18;
    (function (Fields18) {
        Fields18["BASIC"] = "BASIC";
        Fields18["DEFAULT"] = "DEFAULT";
        Fields18["FULL"] = "FULL";
    })(Fields18 = Occ.Fields18 || (Occ.Fields18 = {}));
    /**
     * Defines values for Fields19.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields19 = <Fields19>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields19;
    (function (Fields19) {
        Fields19["BASIC"] = "BASIC";
        Fields19["DEFAULT"] = "DEFAULT";
        Fields19["FULL"] = "FULL";
    })(Fields19 = Occ.Fields19 || (Occ.Fields19 = {}));
    /**
     * Defines values for Fields20.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields20 = <Fields20>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields20;
    (function (Fields20) {
        Fields20["BASIC"] = "BASIC";
        Fields20["DEFAULT"] = "DEFAULT";
        Fields20["FULL"] = "FULL";
    })(Fields20 = Occ.Fields20 || (Occ.Fields20 = {}));
    /**
     * Defines values for Fields21.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields21 = <Fields21>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields21;
    (function (Fields21) {
        Fields21["BASIC"] = "BASIC";
        Fields21["DEFAULT"] = "DEFAULT";
        Fields21["FULL"] = "FULL";
    })(Fields21 = Occ.Fields21 || (Occ.Fields21 = {}));
    /**
     * Defines values for Fields22.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields22 = <Fields22>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields22;
    (function (Fields22) {
        Fields22["BASIC"] = "BASIC";
        Fields22["DEFAULT"] = "DEFAULT";
        Fields22["FULL"] = "FULL";
    })(Fields22 = Occ.Fields22 || (Occ.Fields22 = {}));
    /**
     * Defines values for Fields23.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields23 = <Fields23>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields23;
    (function (Fields23) {
        Fields23["BASIC"] = "BASIC";
        Fields23["DEFAULT"] = "DEFAULT";
        Fields23["FULL"] = "FULL";
    })(Fields23 = Occ.Fields23 || (Occ.Fields23 = {}));
    /**
     * Defines values for Fields24.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields24 = <Fields24>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields24;
    (function (Fields24) {
        Fields24["BASIC"] = "BASIC";
        Fields24["DEFAULT"] = "DEFAULT";
        Fields24["FULL"] = "FULL";
    })(Fields24 = Occ.Fields24 || (Occ.Fields24 = {}));
    /**
     * Defines values for Fields25.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields25 = <Fields25>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields25;
    (function (Fields25) {
        Fields25["BASIC"] = "BASIC";
        Fields25["DEFAULT"] = "DEFAULT";
        Fields25["FULL"] = "FULL";
    })(Fields25 = Occ.Fields25 || (Occ.Fields25 = {}));
    /**
     * Defines values for Fields26.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields26 = <Fields26>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields26;
    (function (Fields26) {
        Fields26["BASIC"] = "BASIC";
        Fields26["DEFAULT"] = "DEFAULT";
        Fields26["FULL"] = "FULL";
    })(Fields26 = Occ.Fields26 || (Occ.Fields26 = {}));
    /**
     * Defines values for Fields27.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields27 = <Fields27>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields27;
    (function (Fields27) {
        Fields27["BASIC"] = "BASIC";
        Fields27["DEFAULT"] = "DEFAULT";
        Fields27["FULL"] = "FULL";
    })(Fields27 = Occ.Fields27 || (Occ.Fields27 = {}));
    /**
     * Defines values for Fields28.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields28 = <Fields28>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields28;
    (function (Fields28) {
        Fields28["BASIC"] = "BASIC";
        Fields28["DEFAULT"] = "DEFAULT";
        Fields28["FULL"] = "FULL";
    })(Fields28 = Occ.Fields28 || (Occ.Fields28 = {}));
    /**
     * Defines values for Fields29.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields29 = <Fields29>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields29;
    (function (Fields29) {
        Fields29["BASIC"] = "BASIC";
        Fields29["DEFAULT"] = "DEFAULT";
        Fields29["FULL"] = "FULL";
    })(Fields29 = Occ.Fields29 || (Occ.Fields29 = {}));
    /**
     * Defines values for Fields30.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields30 = <Fields30>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields30;
    (function (Fields30) {
        Fields30["BASIC"] = "BASIC";
        Fields30["DEFAULT"] = "DEFAULT";
        Fields30["FULL"] = "FULL";
    })(Fields30 = Occ.Fields30 || (Occ.Fields30 = {}));
    /**
     * Defines values for Fields31.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields31 = <Fields31>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields31;
    (function (Fields31) {
        Fields31["BASIC"] = "BASIC";
        Fields31["DEFAULT"] = "DEFAULT";
        Fields31["FULL"] = "FULL";
    })(Fields31 = Occ.Fields31 || (Occ.Fields31 = {}));
    /**
     * Defines values for Fields32.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields32 = <Fields32>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields32;
    (function (Fields32) {
        Fields32["BASIC"] = "BASIC";
        Fields32["DEFAULT"] = "DEFAULT";
        Fields32["FULL"] = "FULL";
    })(Fields32 = Occ.Fields32 || (Occ.Fields32 = {}));
    /**
     * Defines values for Fields33.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields33 = <Fields33>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields33;
    (function (Fields33) {
        Fields33["BASIC"] = "BASIC";
        Fields33["DEFAULT"] = "DEFAULT";
        Fields33["FULL"] = "FULL";
    })(Fields33 = Occ.Fields33 || (Occ.Fields33 = {}));
    /**
     * Defines values for Fields34.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields34 = <Fields34>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields34;
    (function (Fields34) {
        Fields34["BASIC"] = "BASIC";
        Fields34["DEFAULT"] = "DEFAULT";
        Fields34["FULL"] = "FULL";
    })(Fields34 = Occ.Fields34 || (Occ.Fields34 = {}));
    /**
     * Defines values for Fields35.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields35 = <Fields35>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields35;
    (function (Fields35) {
        Fields35["BASIC"] = "BASIC";
        Fields35["DEFAULT"] = "DEFAULT";
        Fields35["FULL"] = "FULL";
    })(Fields35 = Occ.Fields35 || (Occ.Fields35 = {}));
    /**
     * Defines values for Fields36.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields36 = <Fields36>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields36;
    (function (Fields36) {
        Fields36["BASIC"] = "BASIC";
        Fields36["DEFAULT"] = "DEFAULT";
        Fields36["FULL"] = "FULL";
    })(Fields36 = Occ.Fields36 || (Occ.Fields36 = {}));
    /**
     * Defines values for Fields37.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields37 = <Fields37>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields37;
    (function (Fields37) {
        Fields37["BASIC"] = "BASIC";
        Fields37["DEFAULT"] = "DEFAULT";
        Fields37["FULL"] = "FULL";
    })(Fields37 = Occ.Fields37 || (Occ.Fields37 = {}));
    /**
     * Defines values for Fields38.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields38 = <Fields38>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields38;
    (function (Fields38) {
        Fields38["BASIC"] = "BASIC";
        Fields38["DEFAULT"] = "DEFAULT";
        Fields38["FULL"] = "FULL";
    })(Fields38 = Occ.Fields38 || (Occ.Fields38 = {}));
    /**
     * Defines values for Fields39.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields39 = <Fields39>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields39;
    (function (Fields39) {
        Fields39["BASIC"] = "BASIC";
        Fields39["DEFAULT"] = "DEFAULT";
        Fields39["FULL"] = "FULL";
    })(Fields39 = Occ.Fields39 || (Occ.Fields39 = {}));
    /**
     * Defines values for Fields40.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields40 = <Fields40>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields40;
    (function (Fields40) {
        Fields40["BASIC"] = "BASIC";
        Fields40["DEFAULT"] = "DEFAULT";
        Fields40["FULL"] = "FULL";
    })(Fields40 = Occ.Fields40 || (Occ.Fields40 = {}));
    /**
     * Defines values for Fields41.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields41 = <Fields41>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields41;
    (function (Fields41) {
        Fields41["BASIC"] = "BASIC";
        Fields41["DEFAULT"] = "DEFAULT";
        Fields41["FULL"] = "FULL";
    })(Fields41 = Occ.Fields41 || (Occ.Fields41 = {}));
    /**
     * Defines values for Fields42.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields42 = <Fields42>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields42;
    (function (Fields42) {
        Fields42["BASIC"] = "BASIC";
        Fields42["DEFAULT"] = "DEFAULT";
        Fields42["FULL"] = "FULL";
    })(Fields42 = Occ.Fields42 || (Occ.Fields42 = {}));
    /**
     * Defines values for Fields43.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields43 = <Fields43>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields43;
    (function (Fields43) {
        Fields43["BASIC"] = "BASIC";
        Fields43["DEFAULT"] = "DEFAULT";
        Fields43["FULL"] = "FULL";
    })(Fields43 = Occ.Fields43 || (Occ.Fields43 = {}));
    /**
     * Defines values for Fields44.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields44 = <Fields44>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields44;
    (function (Fields44) {
        Fields44["BASIC"] = "BASIC";
        Fields44["DEFAULT"] = "DEFAULT";
        Fields44["FULL"] = "FULL";
    })(Fields44 = Occ.Fields44 || (Occ.Fields44 = {}));
    /**
     * Defines values for Fields45.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields45 = <Fields45>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields45;
    (function (Fields45) {
        Fields45["BASIC"] = "BASIC";
        Fields45["DEFAULT"] = "DEFAULT";
        Fields45["FULL"] = "FULL";
    })(Fields45 = Occ.Fields45 || (Occ.Fields45 = {}));
    /**
     * Defines values for Fields46.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields46 = <Fields46>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields46;
    (function (Fields46) {
        Fields46["BASIC"] = "BASIC";
        Fields46["DEFAULT"] = "DEFAULT";
        Fields46["FULL"] = "FULL";
    })(Fields46 = Occ.Fields46 || (Occ.Fields46 = {}));
    /**
     * Defines values for Fields47.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields47 = <Fields47>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields47;
    (function (Fields47) {
        Fields47["BASIC"] = "BASIC";
        Fields47["DEFAULT"] = "DEFAULT";
        Fields47["FULL"] = "FULL";
    })(Fields47 = Occ.Fields47 || (Occ.Fields47 = {}));
    /**
     * Defines values for Fields48.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields48 = <Fields48>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields48;
    (function (Fields48) {
        Fields48["BASIC"] = "BASIC";
        Fields48["DEFAULT"] = "DEFAULT";
        Fields48["FULL"] = "FULL";
    })(Fields48 = Occ.Fields48 || (Occ.Fields48 = {}));
    /**
     * Defines values for Fields49.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields49 = <Fields49>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields49;
    (function (Fields49) {
        Fields49["BASIC"] = "BASIC";
        Fields49["DEFAULT"] = "DEFAULT";
        Fields49["FULL"] = "FULL";
    })(Fields49 = Occ.Fields49 || (Occ.Fields49 = {}));
    /**
     * Defines values for Fields50.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields50 = <Fields50>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields50;
    (function (Fields50) {
        Fields50["BASIC"] = "BASIC";
        Fields50["DEFAULT"] = "DEFAULT";
        Fields50["FULL"] = "FULL";
    })(Fields50 = Occ.Fields50 || (Occ.Fields50 = {}));
    /**
     * Defines values for Fields51.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields51 = <Fields51>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields51;
    (function (Fields51) {
        Fields51["BASIC"] = "BASIC";
        Fields51["DEFAULT"] = "DEFAULT";
        Fields51["FULL"] = "FULL";
    })(Fields51 = Occ.Fields51 || (Occ.Fields51 = {}));
    /**
     * Defines values for Fields52.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields52 = <Fields52>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields52;
    (function (Fields52) {
        Fields52["BASIC"] = "BASIC";
        Fields52["DEFAULT"] = "DEFAULT";
        Fields52["FULL"] = "FULL";
    })(Fields52 = Occ.Fields52 || (Occ.Fields52 = {}));
    /**
     * Defines values for Fields53.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields53 = <Fields53>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields53;
    (function (Fields53) {
        Fields53["BASIC"] = "BASIC";
        Fields53["DEFAULT"] = "DEFAULT";
        Fields53["FULL"] = "FULL";
    })(Fields53 = Occ.Fields53 || (Occ.Fields53 = {}));
    /**
     * Defines values for Fields54.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields54 = <Fields54>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields54;
    (function (Fields54) {
        Fields54["BASIC"] = "BASIC";
        Fields54["DEFAULT"] = "DEFAULT";
        Fields54["FULL"] = "FULL";
    })(Fields54 = Occ.Fields54 || (Occ.Fields54 = {}));
    /**
     * Defines values for Fields55.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields55 = <Fields55>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields55;
    (function (Fields55) {
        Fields55["BASIC"] = "BASIC";
        Fields55["DEFAULT"] = "DEFAULT";
        Fields55["FULL"] = "FULL";
    })(Fields55 = Occ.Fields55 || (Occ.Fields55 = {}));
    /**
     * Defines values for Fields56.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields56 = <Fields56>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields56;
    (function (Fields56) {
        Fields56["BASIC"] = "BASIC";
        Fields56["DEFAULT"] = "DEFAULT";
        Fields56["FULL"] = "FULL";
    })(Fields56 = Occ.Fields56 || (Occ.Fields56 = {}));
    /**
     * Defines values for Fields57.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields57 = <Fields57>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields57;
    (function (Fields57) {
        Fields57["BASIC"] = "BASIC";
        Fields57["DEFAULT"] = "DEFAULT";
        Fields57["FULL"] = "FULL";
    })(Fields57 = Occ.Fields57 || (Occ.Fields57 = {}));
    /**
     * Defines values for Fields58.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields58 = <Fields58>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields58;
    (function (Fields58) {
        Fields58["BASIC"] = "BASIC";
        Fields58["DEFAULT"] = "DEFAULT";
        Fields58["FULL"] = "FULL";
    })(Fields58 = Occ.Fields58 || (Occ.Fields58 = {}));
    /**
     * Defines values for Fields59.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields59 = <Fields59>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields59;
    (function (Fields59) {
        Fields59["BASIC"] = "BASIC";
        Fields59["DEFAULT"] = "DEFAULT";
        Fields59["FULL"] = "FULL";
    })(Fields59 = Occ.Fields59 || (Occ.Fields59 = {}));
    /**
     * Defines values for Fields60.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields60 = <Fields60>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields60;
    (function (Fields60) {
        Fields60["BASIC"] = "BASIC";
        Fields60["DEFAULT"] = "DEFAULT";
        Fields60["FULL"] = "FULL";
    })(Fields60 = Occ.Fields60 || (Occ.Fields60 = {}));
    /**
     * Defines values for Fields61.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields61 = <Fields61>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields61;
    (function (Fields61) {
        Fields61["BASIC"] = "BASIC";
        Fields61["DEFAULT"] = "DEFAULT";
        Fields61["FULL"] = "FULL";
    })(Fields61 = Occ.Fields61 || (Occ.Fields61 = {}));
    /**
     * Defines values for Type.
     * Possible values include: 'all', 'product', 'order'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Type = <Type>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Type;
    (function (Type) {
        Type["All"] = "all";
        Type["Product"] = "product";
        Type["Order"] = "order";
    })(Type = Occ.Type || (Occ.Type = {}));
    let CONSENT_STATUS;
    (function (CONSENT_STATUS) {
        CONSENT_STATUS["ANONYMOUS_CONSENT_GIVEN"] = "GIVEN";
        CONSENT_STATUS["ANONYMOUS_CONSENT_WITHDRAWN"] = "WITHDRAWN";
    })(CONSENT_STATUS = Occ.CONSENT_STATUS || (Occ.CONSENT_STATUS = {}));
    let NotificationType;
    (function (NotificationType) {
        NotificationType["BACK_IN_STOCK"] = "BACK_IN_STOCK";
    })(NotificationType = Occ.NotificationType || (Occ.NotificationType = {}));
    let Period;
    (function (Period) {
        Period["DAY"] = "DAY";
        Period["WEEK"] = "WEEK";
        Period["MONTH"] = "MONTH";
        Period["QUARTER"] = "QUARTER";
        Period["YEAR"] = "YEAR";
    })(Period = Occ.Period || (Occ.Period = {}));
    let DaysOfWeek;
    (function (DaysOfWeek) {
        DaysOfWeek["MONDAY"] = "MONDAY";
        DaysOfWeek["TUESDAY"] = "TUESDAY";
        DaysOfWeek["WEDNESDAY"] = "WEDNESDAY";
        DaysOfWeek["THURSDAY"] = "THURSDAY";
        DaysOfWeek["FRIDAY"] = "FRIDAY";
        DaysOfWeek["SATURDAY"] = "SATURDAY";
        DaysOfWeek["SUNDAY"] = "SUNDAY";
    })(DaysOfWeek = Occ.DaysOfWeek || (Occ.DaysOfWeek = {}));
    let OrderApprovalDecisionValue;
    (function (OrderApprovalDecisionValue) {
        OrderApprovalDecisionValue["APPROVE"] = "APPROVE";
        OrderApprovalDecisionValue["REJECT"] = "REJECT";
    })(OrderApprovalDecisionValue = Occ.OrderApprovalDecisionValue || (Occ.OrderApprovalDecisionValue = {}));
})(Occ || (Occ = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLm1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE1BQU0sS0FBVyxHQUFHLENBNjJJbkI7QUE3MklELFdBQWlCLEdBQUc7SUFvaUJsQjs7T0FFRztJQUNILElBQVksVUFLWDtJQUxELFdBQVksVUFBVTtRQUNwQiwyQ0FBNkIsQ0FBQTtRQUM3QiwrQ0FBaUMsQ0FBQTtRQUNqQywrQ0FBaUMsQ0FBQTtRQUNqQyxtREFBcUMsQ0FBQTtJQUN2QyxDQUFDLEVBTFcsVUFBVSxHQUFWLGNBQVUsS0FBVixjQUFVLFFBS3JCO0lBaTlCRDs7T0FFRztJQUNILElBQVksZ0JBS1g7SUFMRCxXQUFZLGdCQUFnQjtRQUMxQix1Q0FBbUIsQ0FBQTtRQUNuQixpQ0FBYSxDQUFBO1FBQ2IsdUNBQW1CLENBQUE7UUFDbkIsbUNBQWUsQ0FBQTtJQUNqQixDQUFDLEVBTFcsZ0JBQWdCLEdBQWhCLG9CQUFnQixLQUFoQixvQkFBZ0IsUUFLM0I7SUF1L0NEOzs7Ozs7Ozs7T0FTRztJQUNILElBQVksU0FHWDtJQUhELFdBQVksU0FBUztRQUNuQix3QkFBVyxDQUFBO1FBQ1gsMEJBQWEsQ0FBQTtJQUNmLENBQUMsRUFIVyxTQUFTLEdBQVQsYUFBUyxLQUFULGFBQVMsUUFHcEI7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSCxJQUFZLFNBR1g7SUFIRCxXQUFZLFNBQVM7UUFDbkIsZ0NBQW1CLENBQUE7UUFDbkIsZ0NBQW1CLENBQUE7SUFDckIsQ0FBQyxFQUhXLFNBQVMsR0FBVCxhQUFTLEtBQVQsYUFBUyxRQUdwQjtJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILElBQVksTUFJWDtJQUpELFdBQVksTUFBTTtRQUNoQix5QkFBZSxDQUFBO1FBQ2YsNkJBQW1CLENBQUE7UUFDbkIsdUJBQWEs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QUMsRUFSVyxVQUFVLEdBQVYsY0FBVSxLQUFWLGNBQVUsUUFRckI7SUFFRCxJQUFZLDBCQUdYO0lBSEQsV0FBWSwwQkFBMEI7UUFDcEMsaURBQW1CLENBQUE7UUFDbkIsK0NBQWlCLENBQUE7SUFDbkIsQ0FBQyxFQUhXLDBCQUEwQixHQUExQiw4QkFBMEIsS0FBMUIsOEJBQTBCLFFBR3JDO0FBK0JILENBQUMsRUE3MklnQixHQUFHLEtBQUgsR0FBRyxRQTYySW5CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuZXhwb3J0IG5hbWVzcGFjZSBPY2Mge1xuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDb3VudHJ5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDb3VudHJ5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpc29jb2RlXVxuICAgICAqL1xuICAgIGlzb2NvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUmVnaW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBSZWdpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvdW50cnlJc29dXG4gICAgICovXG4gICAgY291bnRyeUlzbz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpc29jb2RlXVxuICAgICAqL1xuICAgIGlzb2NvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaXNvY29kZVNob3J0XVxuICAgICAqL1xuICAgIGlzb2NvZGVTaG9ydD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBSZWdpb25MaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBSZWdpb25MaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtSZWdpb25bXX0gW3JlZ2lvbnNdXG4gICAgICovXG4gICAgcmVnaW9ucz86IFJlZ2lvbltdO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBBZGRyZXNzTGlzdCB7XG4gICAgYWRkcmVzc2VzPzogQWRkcmVzc1tdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQWRkcmVzcy5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQWRkcmVzcyB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29tcGFueU5hbWVdXG4gICAgICovXG4gICAgY29tcGFueU5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q291bnRyeX0gW2NvdW50cnldXG4gICAgICovXG4gICAgY291bnRyeT86IENvdW50cnk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2RlZmF1bHRBZGRyZXNzXVxuICAgICAqL1xuICAgIGRlZmF1bHRBZGRyZXNzPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtlbWFpbF1cbiAgICAgKi9cbiAgICBlbWFpbD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmaXJzdE5hbWVdXG4gICAgICovXG4gICAgZmlyc3ROYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Zvcm1hdHRlZEFkZHJlc3NdXG4gICAgICovXG4gICAgZm9ybWF0dGVkQWRkcmVzcz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpZF1cbiAgICAgKi9cbiAgICBpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtsYXN0TmFtZV1cbiAgICAgKi9cbiAgICBsYXN0TmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtsaW5lMV1cbiAgICAgKi9cbiAgICBsaW5lMT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtsaW5lMl1cbiAgICAgKi9cbiAgICBsaW5lMj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtwaG9uZV1cbiAgICAgKi9cbiAgICBwaG9uZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0b3duXVxuICAgICAqL1xuICAgIGNlbGxwaG9uZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtwb3N0YWxDb2RlXVxuICAgICAqL1xuICAgIHBvc3RhbENvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UmVnaW9ufSBbcmVnaW9uXVxuICAgICAqL1xuICAgIHJlZ2lvbj86IFJlZ2lvbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0b3duXVxuICAgICAqL1xuICAgIGRpc3RyaWN0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtzaGlwcGluZ0FkZHJlc3NdXG4gICAgICovXG4gICAgc2hpcHBpbmdBZGRyZXNzPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0aXRsZV1cbiAgICAgKi9cbiAgICB0aXRsZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0aXRsZUNvZGVdXG4gICAgICovXG4gICAgdGl0bGVDb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3Rvd25dXG4gICAgICovXG4gICAgdG93bj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbdmlzaWJsZUluQWRkcmVzc0Jvb2tdXG4gICAgICovXG4gICAgdmlzaWJsZUluQWRkcmVzc0Jvb2s/OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQWRkcmVzc0xpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFkZHJlc3NMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBZGRyZXNzW119IFthZGRyZXNzZXNdXG4gICAgICovXG4gICAgYWRkcmVzc2VzPzogQWRkcmVzc1tdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRXJyb3JNb2RlbC5cbiAgICogRXJyb3IgbWVzc2FnZVxuICAgKlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBFcnJvck1vZGVsIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFttZXNzYWdlXSBEZXNjcmlwdGl2ZSwgaHVtYW4gcmVhZGFibGUgZXJyb3IgbWVzc2FnZS5cbiAgICAgKi9cbiAgICBtZXNzYWdlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3JlYXNvbl0gQWRkaXRpb25hbCBjbGFzc2lmaWNhdGlvbiBzcGVjaWZpYyBmb3IgZWFjaFxuICAgICAqIGVycm9yIHR5cGUgZS5nLiAnbm9TdG9jaycuXG4gICAgICovXG4gICAgcmVhc29uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N1YmplY3RdIElkZW50aWZpZXIgb2YgdGhlIHJlbGF0ZWQgb2JqZWN0IGUuZy4gJzEnLlxuICAgICAqL1xuICAgIHN1YmplY3Q/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3ViamVjdFR5cGVdIFR5cGUgb2YgdGhlIG9iamVjdCByZWxhdGVkIHRvIHRoZSBlcnJvclxuICAgICAqIGUuZy4gJ2VudHJ5Jy5cbiAgICAgKi9cbiAgICBzdWJqZWN0VHlwZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0eXBlXSBUeXBlIG9mIHRoZSBlcnJvciBlLmcuICdMb3dTdG9ja0Vycm9yJy5cbiAgICAgKi9cbiAgICB0eXBlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRXJyb3JMaXN0LlxuICAgKiBMaXN0IG9mIGVycm9yc1xuICAgKlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBFcnJvckxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0Vycm9yTW9kZWxbXX0gW2Vycm9yc11cbiAgICAgKi9cbiAgICBlcnJvcnM/OiBFcnJvck1vZGVsW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBBZGRyZXNzVmFsaWRhdGlvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQWRkcmVzc1ZhbGlkYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2RlY2lzaW9uXVxuICAgICAqL1xuICAgIGRlY2lzaW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0Vycm9yTGlzdH0gW2Vycm9yc11cbiAgICAgKi9cbiAgICBlcnJvcnM/OiBFcnJvckxpc3Q7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QWRkcmVzc1tdfSBbc3VnZ2VzdGVkQWRkcmVzc2VzXVxuICAgICAqL1xuICAgIHN1Z2dlc3RlZEFkZHJlc3Nlcz86IEFkZHJlc3NbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByaWNlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcmljZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY3VycmVuY3lJc29dXG4gICAgICovXG4gICAgY3VycmVuY3lJc28/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZm9ybWF0dGVkVmFsdWVdXG4gICAgICovXG4gICAgZm9ybWF0dGVkVmFsdWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbbWF4UXVhbnRpdHldXG4gICAgICovXG4gICAgbWF4UXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbbWluUXVhbnRpdHldXG4gICAgICovXG4gICAgbWluUXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2VUeXBlfSBbcHJpY2VUeXBlXSBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JVWScsICdGUk9NJ1xuICAgICAqL1xuICAgIHByaWNlVHlwZT86IFByaWNlVHlwZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt2YWx1ZV1cbiAgICAgKi9cbiAgICB2YWx1ZT86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFN0b2NrLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTdG9jayB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbc3RvY2tMZXZlbF1cbiAgICAgKi9cbiAgICBzdG9ja0xldmVsPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0b2NrTGV2ZWxTdGF0dXNdXG4gICAgICovXG4gICAgc3RvY2tMZXZlbFN0YXR1cz86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEltYWdlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBJbWFnZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbYWx0VGV4dF1cbiAgICAgKi9cbiAgICBhbHRUZXh0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Zvcm1hdF1cbiAgICAgKi9cbiAgICBmb3JtYXQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbZ2FsbGVyeUluZGV4XVxuICAgICAqL1xuICAgIGdhbGxlcnlJbmRleD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtJbWFnZVR5cGV9IFtpbWFnZVR5cGVdIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnUFJJTUFSWScsXG4gICAgICogJ0dBTExFUlknXG4gICAgICovXG4gICAgaW1hZ2VUeXBlPzogSW1hZ2VUeXBlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VybF1cbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBWYXJpYW50T3B0aW9uUXVhbGlmaWVyLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBWYXJpYW50T3B0aW9uUXVhbGlmaWVyIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtJbWFnZX0gW2ltYWdlXVxuICAgICAqL1xuICAgIGltYWdlPzogSW1hZ2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3F1YWxpZmllcl1cbiAgICAgKi9cbiAgICBxdWFsaWZpZXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdmFsdWVdXG4gICAgICovXG4gICAgdmFsdWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBWYXJpYW50T3B0aW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBWYXJpYW50T3B0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtwcmljZURhdGFdXG4gICAgICovXG4gICAgcHJpY2VEYXRhPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U3RvY2t9IFtzdG9ja11cbiAgICAgKi9cbiAgICBzdG9jaz86IFN0b2NrO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VybF1cbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VmFyaWFudE9wdGlvblF1YWxpZmllcltdfSBbdmFyaWFudE9wdGlvblF1YWxpZmllcnNdXG4gICAgICovXG4gICAgdmFyaWFudE9wdGlvblF1YWxpZmllcnM/OiBWYXJpYW50T3B0aW9uUXVhbGlmaWVyW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBCYXNlT3B0aW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBCYXNlT3B0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWYXJpYW50T3B0aW9uW119IFtvcHRpb25zXVxuICAgICAqL1xuICAgIG9wdGlvbnM/OiBWYXJpYW50T3B0aW9uW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VmFyaWFudE9wdGlvbn0gW3NlbGVjdGVkXVxuICAgICAqL1xuICAgIHNlbGVjdGVkPzogVmFyaWFudE9wdGlvbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt2YXJpYW50VHlwZV1cbiAgICAgKi9cbiAgICB2YXJpYW50VHlwZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFNlYXJjaFF1ZXJ5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTZWFyY2hRdWVyeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdmFsdWVdXG4gICAgICovXG4gICAgdmFsdWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBTZWFyY2hTdGF0ZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoU3RhdGUge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NlYXJjaFF1ZXJ5fSBbcXVlcnldXG4gICAgICovXG4gICAgcXVlcnk/OiBTZWFyY2hRdWVyeTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1cmxdXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQnJlYWRjcnVtYi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQnJlYWRjcnVtYiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZmFjZXRDb2RlXVxuICAgICAqL1xuICAgIGZhY2V0Q29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmYWNldE5hbWVdXG4gICAgICovXG4gICAgZmFjZXROYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2ZhY2V0VmFsdWVDb2RlXVxuICAgICAqL1xuICAgIGZhY2V0VmFsdWVDb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2ZhY2V0VmFsdWVOYW1lXVxuICAgICAqL1xuICAgIGZhY2V0VmFsdWVOYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NlYXJjaFN0YXRlfSBbcmVtb3ZlUXVlcnldXG4gICAgICovXG4gICAgcmVtb3ZlUXVlcnk/OiBTZWFyY2hTdGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTZWFyY2hTdGF0ZX0gW3RydW5jYXRlUXVlcnldXG4gICAgICovXG4gICAgdHJ1bmNhdGVRdWVyeT86IFNlYXJjaFN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ29tcG9uZW50LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFttb2RpZmllZFRpbWVdXG4gICAgICovXG4gICAgbW9kaWZpZWRUaW1lPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7YW55fSBbb3RoZXJQcm9wZXJ0aWVzXVxuICAgICAqL1xuICAgIG90aGVyUHJvcGVydGllcz86IGFueTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0eXBlQ29kZV1cbiAgICAgKi9cbiAgICB0eXBlQ29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1aWRdXG4gICAgICovXG4gICAgdWlkPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ29tcG9uZW50TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q29tcG9uZW50W119IFtjb21wb25lbnRdXG4gICAgICovXG4gICAgY29tcG9uZW50PzogQ29tcG9uZW50W10gfCBhbnlbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENvbnRlbnRTbG90LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDb250ZW50U2xvdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q29tcG9uZW50TGlzdH0gW2NvbXBvbmVudHNdXG4gICAgICovXG4gICAgY29tcG9uZW50cz86IENvbXBvbmVudExpc3Q7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3Bvc2l0aW9uXVxuICAgICAqL1xuICAgIHBvc2l0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3Nsb3RJZF1cbiAgICAgKi9cbiAgICBzbG90SWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3Nsb3RTaGFyZWRdXG4gICAgICovXG4gICAgc2xvdFNoYXJlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc2xvdFN0YXR1c11cbiAgICAgKi9cbiAgICBzbG90U3RhdHVzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2FueX0gW3Byb3BlcnRpZXNdXG4gICAgICovXG4gICAgcHJvcGVydGllcz86IGFueTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENvbnRlbnRTbG90TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29udGVudFNsb3RMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDb250ZW50U2xvdFtdfSBbY29udGVudFNsb3RdXG4gICAgICovXG4gICAgY29udGVudFNsb3Q/OiBDb250ZW50U2xvdFtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ01TUGFnZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ01TUGFnZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q29udGVudFNsb3RMaXN0fSBbY29udGVudFNsb3RzXVxuICAgICAqL1xuICAgIGNvbnRlbnRTbG90cz86IENvbnRlbnRTbG90TGlzdDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbZGVmYXVsdFBhZ2VdXG4gICAgICovXG4gICAgZGVmYXVsdFBhZ2U/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0ZW1wbGF0ZV1cbiAgICAgKi9cbiAgICB0ZW1wbGF0ZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0aXRsZV1cbiAgICAgKi9cbiAgICB0aXRsZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0eXBlQ29kZV1cbiAgICAgKi9cbiAgICB0eXBlQ29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1aWRdXG4gICAgICovXG4gICAgdWlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2xhYmVsXVxuICAgICAqL1xuICAgIGxhYmVsPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2FueX0gW3Byb3BlcnRpZXNdXG4gICAgICovXG4gICAgcHJvcGVydGllcz86IGFueTtcblxuICAgIHJvYm90VGFnPzogUGFnZVJvYm90cztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcGFnZSByb2JvdCBpbmZvcm1hdGlvbiBpcyBleHBvc2VkIHdpdGggNCBzdHJpbmcgdmFsdWVzLlxuICAgKi9cbiAgZXhwb3J0IGVudW0gUGFnZVJvYm90cyB7XG4gICAgSU5ERVhfRk9MTE9XID0gJ0lOREVYX0ZPTExPVycsXG4gICAgTk9JTkRFWF9GT0xMT1cgPSAnTk9JTkRFWF9GT0xMT1cnLFxuICAgIElOREVYX05PRk9MTE9XID0gJ0lOREVYX05PRk9MTE9XJyxcbiAgICBOT0lOREVYX05PRk9MTE9XID0gJ05PSU5ERVhfTk9GT0xMT1cnLFxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2FyZFR5cGUuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENhcmRUeXBlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2FyZFR5cGVMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDYXJkVHlwZUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NhcmRUeXBlW119IFtjYXJkVHlwZXNdXG4gICAgICovXG4gICAgY2FyZFR5cGVzPzogQ2FyZFR5cGVbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFBheW1lbnRUeXBlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQYXltZW50VHlwZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rpc3BsYXlOYW1lXVxuICAgICAqL1xuICAgIGRpc3BsYXlOYW1lPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUGF5bWVudFR5cGVMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQYXltZW50VHlwZUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BheW1lbnRUeXBlW119IFtwYXltZW50VHlwZXNdXG4gICAgICovXG4gICAgcGF5bWVudFR5cGVzPzogUGF5bWVudFR5cGVbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb21vdGlvbk9yZGVyRW50cnlDb25zdW1lZC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvbW90aW9uT3JkZXJFbnRyeUNvbnN1bWVkIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFthZGp1c3RlZFVuaXRQcmljZV1cbiAgICAgKi9cbiAgICBhZGp1c3RlZFVuaXRQcmljZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbb3JkZXJFbnRyeU51bWJlcl1cbiAgICAgKi9cbiAgICBvcmRlckVudHJ5TnVtYmVyPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3F1YW50aXR5XVxuICAgICAqL1xuICAgIHF1YW50aXR5PzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvbW90aW9uUmVzdHJpY3Rpb24uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb21vdGlvblJlc3RyaWN0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtyZXN0cmljdGlvblR5cGVdXG4gICAgICovXG4gICAgcmVzdHJpY3Rpb25UeXBlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvbW90aW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9tb3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmdbXX0gW2NvdWxkRmlyZU1lc3NhZ2VzXVxuICAgICAqL1xuICAgIGNvdWxkRmlyZU1lc3NhZ2VzPzogc3RyaW5nW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2VuYWJsZWRdXG4gICAgICovXG4gICAgZW5hYmxlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2VuZERhdGVdXG4gICAgICovXG4gICAgZW5kRGF0ZT86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nW119IFtmaXJlZE1lc3NhZ2VzXVxuICAgICAqL1xuICAgIGZpcmVkTWVzc2FnZXM/OiBzdHJpbmdbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtwcmlvcml0eV1cbiAgICAgKi9cbiAgICBwcmlvcml0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtJbWFnZX0gW3Byb2R1Y3RCYW5uZXJdXG4gICAgICovXG4gICAgcHJvZHVjdEJhbm5lcj86IEltYWdlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3Byb21vdGlvbkdyb3VwXVxuICAgICAqL1xuICAgIHByb21vdGlvbkdyb3VwPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3Byb21vdGlvblR5cGVdXG4gICAgICovXG4gICAgcHJvbW90aW9uVHlwZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9tb3Rpb25SZXN0cmljdGlvbltdfSBbcmVzdHJpY3Rpb25zXVxuICAgICAqL1xuICAgIHJlc3RyaWN0aW9ucz86IFByb21vdGlvblJlc3RyaWN0aW9uW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW3N0YXJ0RGF0ZV1cbiAgICAgKi9cbiAgICBzdGFydERhdGU/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3RpdGxlXVxuICAgICAqL1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvbW90aW9uUmVzdWx0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9tb3Rpb25SZXN1bHQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvbk9yZGVyRW50cnlDb25zdW1lZFtdfSBbY29uc3VtZWRFbnRyaWVzXVxuICAgICAqL1xuICAgIGNvbnN1bWVkRW50cmllcz86IFByb21vdGlvbk9yZGVyRW50cnlDb25zdW1lZFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvbn0gW3Byb21vdGlvbl1cbiAgICAgKi9cbiAgICBwcm9tb3Rpb24/OiBQcm9tb3Rpb247XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDdXJyZW5jeS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ3VycmVuY3kge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFthY3RpdmVdXG4gICAgICovXG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpc29jb2RlXVxuICAgICAqL1xuICAgIGlzb2NvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N5bWJvbF1cbiAgICAgKi9cbiAgICBzeW1ib2w/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBWb3VjaGVyLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBWb3VjaGVyIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW2FwcGxpZWRWYWx1ZV1cbiAgICAgKi9cbiAgICBhcHBsaWVkVmFsdWU/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q3VycmVuY3l9IFtjdXJyZW5jeV1cbiAgICAgKi9cbiAgICBjdXJyZW5jeT86IEN1cnJlbmN5O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtmcmVlU2hpcHBpbmddXG4gICAgICovXG4gICAgZnJlZVNoaXBwaW5nPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbdmFsdWVdXG4gICAgICovXG4gICAgdmFsdWU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdmFsdWVGb3JtYXR0ZWRdXG4gICAgICovXG4gICAgdmFsdWVGb3JtYXR0ZWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdmFsdWVTdHJpbmddXG4gICAgICovXG4gICAgdmFsdWVTdHJpbmc/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdm91Y2hlckNvZGVdXG4gICAgICovXG4gICAgdm91Y2hlckNvZGU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBEZWxpdmVyeU1vZGUuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIERlbGl2ZXJ5TW9kZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbZGVsaXZlcnlDb3N0XVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5Q29zdD86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEdlb1BvaW50LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBHZW9Qb2ludCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbbGF0aXR1ZGVdXG4gICAgICovXG4gICAgbGF0aXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbbG9uZ2l0dWRlXVxuICAgICAqL1xuICAgIGxvbmdpdHVkZT86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFRpbWUuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFRpbWUge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Zvcm1hdHRlZEhvdXJdXG4gICAgICovXG4gICAgZm9ybWF0dGVkSG91cj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtob3VyXVxuICAgICAqL1xuICAgIGhvdXI/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbbWludXRlXVxuICAgICAqL1xuICAgIG1pbnV0ZT86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFNwZWNpYWxPcGVuaW5nRGF5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTcGVjaWFsT3BlbmluZ0RheSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2Nsb3NlZF1cbiAgICAgKi9cbiAgICBjbG9zZWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1RpbWV9IFtjbG9zaW5nVGltZV1cbiAgICAgKi9cbiAgICBjbG9zaW5nVGltZT86IFRpbWU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29tbWVudF1cbiAgICAgKi9cbiAgICBjb21tZW50Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtkYXRlXVxuICAgICAqL1xuICAgIGRhdGU/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Zvcm1hdHRlZERhdGVdXG4gICAgICovXG4gICAgZm9ybWF0dGVkRGF0ZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VGltZX0gW29wZW5pbmdUaW1lXVxuICAgICAqL1xuICAgIG9wZW5pbmdUaW1lPzogVGltZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFdlZWtkYXlPcGVuaW5nRGF5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBXZWVrZGF5T3BlbmluZ0RheSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2Nsb3NlZF1cbiAgICAgKi9cbiAgICBjbG9zZWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1RpbWV9IFtjbG9zaW5nVGltZV1cbiAgICAgKi9cbiAgICBjbG9zaW5nVGltZT86IFRpbWU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VGltZX0gW29wZW5pbmdUaW1lXVxuICAgICAqL1xuICAgIG9wZW5pbmdUaW1lPzogVGltZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt3ZWVrRGF5XVxuICAgICAqL1xuICAgIHdlZWtEYXk/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBPcGVuaW5nU2NoZWR1bGUuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIE9wZW5pbmdTY2hlZHVsZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTcGVjaWFsT3BlbmluZ0RheVtdfSBbc3BlY2lhbERheU9wZW5pbmdMaXN0XVxuICAgICAqL1xuICAgIHNwZWNpYWxEYXlPcGVuaW5nTGlzdD86IFNwZWNpYWxPcGVuaW5nRGF5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7V2Vla2RheU9wZW5pbmdEYXlbXX0gW3dlZWtEYXlPcGVuaW5nTGlzdF1cbiAgICAgKi9cbiAgICB3ZWVrRGF5T3BlbmluZ0xpc3Q/OiBXZWVrZGF5T3BlbmluZ0RheVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUG9pbnRPZlNlcnZpY2UuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFBvaW50T2ZTZXJ2aWNlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBZGRyZXNzfSBbYWRkcmVzc11cbiAgICAgKi9cbiAgICBhZGRyZXNzPzogQWRkcmVzcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkaXNwbGF5TmFtZV1cbiAgICAgKi9cbiAgICBkaXNwbGF5TmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtkaXN0YW5jZUttXVxuICAgICAqL1xuICAgIGRpc3RhbmNlS20/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7eyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBzdHJpbmcgfX0gW2ZlYXR1cmVzXVxuICAgICAqL1xuICAgIGZlYXR1cmVzPzogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmb3JtYXR0ZWREaXN0YW5jZV1cbiAgICAgKi9cbiAgICBmb3JtYXR0ZWREaXN0YW5jZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtHZW9Qb2ludH0gW2dlb1BvaW50XVxuICAgICAqL1xuICAgIGdlb1BvaW50PzogR2VvUG9pbnQ7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7SW1hZ2V9IFttYXBJY29uXVxuICAgICAqL1xuICAgIG1hcEljb24/OiBJbWFnZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3BlbmluZ1NjaGVkdWxlfSBbb3BlbmluZ0hvdXJzXVxuICAgICAqL1xuICAgIG9wZW5pbmdIb3Vycz86IE9wZW5pbmdTY2hlZHVsZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdG9yZUNvbnRlbnRdXG4gICAgICovXG4gICAgc3RvcmVDb250ZW50Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ltYWdlW119IFtzdG9yZUltYWdlc11cbiAgICAgKi9cbiAgICBzdG9yZUltYWdlcz86IEltYWdlW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdXJsXVxuICAgICAqL1xuICAgIHVybD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENhdGVnb3J5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtJbWFnZX0gW2ltYWdlXVxuICAgICAqL1xuICAgIGltYWdlPzogSW1hZ2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdXJsXVxuICAgICAqL1xuICAgIHVybD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEZlYXR1cmVVbml0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlVW5pdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N5bWJvbF1cbiAgICAgKi9cbiAgICBzeW1ib2w/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdW5pdFR5cGVdXG4gICAgICovXG4gICAgdW5pdFR5cGU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBGZWF0dXJlVmFsdWUuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVWYWx1ZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdmFsdWVdXG4gICAgICovXG4gICAgdmFsdWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBGZWF0dXJlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2NvbXBhcmFibGVdXG4gICAgICovXG4gICAgY29tcGFyYWJsZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RmVhdHVyZVVuaXR9IFtmZWF0dXJlVW5pdF1cbiAgICAgKi9cbiAgICBmZWF0dXJlVW5pdD86IEZlYXR1cmVVbml0O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ZlYXR1cmVWYWx1ZVtdfSBbZmVhdHVyZVZhbHVlc11cbiAgICAgKi9cbiAgICBmZWF0dXJlVmFsdWVzPzogRmVhdHVyZVZhbHVlW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtyYW5nZV1cbiAgICAgKi9cbiAgICByYW5nZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdHlwZV1cbiAgICAgKi9cbiAgICB0eXBlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2xhc3NpZmljYXRpb24uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENsYXNzaWZpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RmVhdHVyZVtdfSBbZmVhdHVyZXNdXG4gICAgICovXG4gICAgZmVhdHVyZXM/OiBGZWF0dXJlW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRnV0dXJlU3RvY2suXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEZ1dHVyZVN0b2NrIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbZGF0ZV1cbiAgICAgKi9cbiAgICBkYXRlPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmb3JtYXR0ZWREYXRlXVxuICAgICAqL1xuICAgIGZvcm1hdHRlZERhdGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U3RvY2t9IFtzdG9ja11cbiAgICAgKi9cbiAgICBzdG9jaz86IFN0b2NrO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJpY2VSYW5nZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJpY2VSYW5nZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFttYXhQcmljZV1cbiAgICAgKi9cbiAgICBtYXhQcmljZT86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbbWluUHJpY2VdXG4gICAgICovXG4gICAgbWluUHJpY2U/OiBQcmljZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb2R1Y3RSZWZlcmVuY2UuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RSZWZlcmVuY2Uge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtwcmVzZWxlY3RlZF1cbiAgICAgKi9cbiAgICBwcmVzZWxlY3RlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcXVhbnRpdHldXG4gICAgICovXG4gICAgcXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbcmVmZXJlbmNlVHlwZV1cbiAgICAgKi9cbiAgICByZWZlcmVuY2VUeXBlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb2R1Y3R9IFt0YXJnZXRdXG4gICAgICovXG4gICAgdGFyZ2V0PzogUHJvZHVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIExhbmd1YWdlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2FjdGl2ZV1cbiAgICAgKi9cbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2lzb2NvZGVdXG4gICAgICovXG4gICAgaXNvY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmF0aXZlTmFtZV1cbiAgICAgKi9cbiAgICBuYXRpdmVOYW1lPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVXNlci5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q3VycmVuY3l9IFtjdXJyZW5jeV1cbiAgICAgKi9cbiAgICBjdXJyZW5jeT86IEN1cnJlbmN5O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2N1c3RvbWVySWRdXG4gICAgICovXG4gICAgY3VzdG9tZXJJZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbZGVhY3RpdmF0aW9uRGF0ZV1cbiAgICAgKi9cbiAgICBkZWFjdGl2YXRpb25EYXRlPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBZGRyZXNzfSBbZGVmYXVsdEFkZHJlc3NdXG4gICAgICovXG4gICAgZGVmYXVsdEFkZHJlc3M/OiBBZGRyZXNzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rpc3BsYXlVaWRdXG4gICAgICovXG4gICAgZGlzcGxheVVpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmaXJzdE5hbWVdXG4gICAgICovXG4gICAgZmlyc3ROYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0xhbmd1YWdlfSBbbGFuZ3VhZ2VdXG4gICAgICovXG4gICAgbGFuZ3VhZ2U/OiBMYW5ndWFnZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtsYXN0TmFtZV1cbiAgICAgKi9cbiAgICBsYXN0TmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdGl0bGVdXG4gICAgICovXG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdGl0bGVDb2RlXVxuICAgICAqL1xuICAgIHRpdGxlQ29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1aWRdXG4gICAgICovXG4gICAgdWlkPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUmV2aWV3LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBSZXZpZXcge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2FsaWFzXVxuICAgICAqL1xuICAgIGFsaWFzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvbW1lbnRdXG4gICAgICovXG4gICAgY29tbWVudD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbZGF0ZV1cbiAgICAgKi9cbiAgICBkYXRlPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtoZWFkbGluZV1cbiAgICAgKi9cbiAgICBoZWFkbGluZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpZF1cbiAgICAgKi9cbiAgICBpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtVc2VyfSBbcHJpbmNpcGFsXVxuICAgICAqL1xuICAgIHByaW5jaXBhbD86IFVzZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcmF0aW5nXVxuICAgICAqL1xuICAgIHJhdGluZz86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFZhcmlhbnRDYXRlZ29yeS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVmFyaWFudENhdGVnb3J5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbaGFzSW1hZ2VdXG4gICAgICovXG4gICAgaGFzSW1hZ2U/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtwcmlvcml0eV1cbiAgICAgKi9cbiAgICBwcmlvcml0eT86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFZhcmlhbnRWYWx1ZUNhdGVnb3J5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBWYXJpYW50VmFsdWVDYXRlZ29yeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3NlcXVlbmNlXVxuICAgICAqL1xuICAgIHNlcXVlbmNlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZhcmlhbnRDYXRlZ29yeVtdfSBbc3VwZXJDYXRlZ29yaWVzXVxuICAgICAqL1xuICAgIHN1cGVyQ2F0ZWdvcmllcz86IFZhcmlhbnRDYXRlZ29yeVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVmFyaWFudE1hdHJpeEVsZW1lbnQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFZhcmlhbnRNYXRyaXhFbGVtZW50IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWYXJpYW50TWF0cml4RWxlbWVudFtdfSBbZWxlbWVudHNdXG4gICAgICovXG4gICAgZWxlbWVudHM/OiBWYXJpYW50TWF0cml4RWxlbWVudFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtpc0xlYWZdXG4gICAgICovXG4gICAgaXNMZWFmPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWYXJpYW50Q2F0ZWdvcnl9IFtwYXJlbnRWYXJpYW50Q2F0ZWdvcnldXG4gICAgICovXG4gICAgcGFyZW50VmFyaWFudENhdGVnb3J5PzogVmFyaWFudENhdGVnb3J5O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZhcmlhbnRPcHRpb259IFt2YXJpYW50T3B0aW9uXVxuICAgICAqL1xuICAgIHZhcmlhbnRPcHRpb24/OiBWYXJpYW50T3B0aW9uO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZhcmlhbnRWYWx1ZUNhdGVnb3J5fSBbdmFyaWFudFZhbHVlQ2F0ZWdvcnldXG4gICAgICovXG4gICAgdmFyaWFudFZhbHVlQ2F0ZWdvcnk/OiBWYXJpYW50VmFsdWVDYXRlZ29yeTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb2R1Y3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFthdmFpbGFibGVGb3JQaWNrdXBdXG4gICAgICovXG4gICAgYXZhaWxhYmxlRm9yUGlja3VwPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFthdmVyYWdlUmF0aW5nXVxuICAgICAqL1xuICAgIGF2ZXJhZ2VSYXRpbmc/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QmFzZU9wdGlvbltdfSBbYmFzZU9wdGlvbnNdXG4gICAgICovXG4gICAgYmFzZU9wdGlvbnM/OiBCYXNlT3B0aW9uW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbYmFzZVByb2R1Y3RdXG4gICAgICovXG4gICAgYmFzZVByb2R1Y3Q/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q2F0ZWdvcnlbXX0gW2NhdGVnb3JpZXNdXG4gICAgICovXG4gICAgY2F0ZWdvcmllcz86IENhdGVnb3J5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q2xhc3NpZmljYXRpb25bXX0gW2NsYXNzaWZpY2F0aW9uc11cbiAgICAgKi9cbiAgICBjbGFzc2lmaWNhdGlvbnM/OiBDbGFzc2lmaWNhdGlvbltdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtGdXR1cmVTdG9ja1tdfSBbZnV0dXJlU3RvY2tzXVxuICAgICAqL1xuICAgIGZ1dHVyZVN0b2Nrcz86IEZ1dHVyZVN0b2NrW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7SW1hZ2VbXX0gW2ltYWdlc11cbiAgICAgKi9cbiAgICBpbWFnZXM/OiBJbWFnZVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW21hbnVmYWN0dXJlcl1cbiAgICAgKi9cbiAgICBtYW51ZmFjdHVyZXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW211bHRpZGltZW5zaW9uYWxdXG4gICAgICovXG4gICAgbXVsdGlkaW1lbnNpb25hbD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW251bWJlck9mUmV2aWV3c11cbiAgICAgKi9cbiAgICBudW1iZXJPZlJldmlld3M/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uW119IFtwb3RlbnRpYWxQcm9tb3Rpb25zXVxuICAgICAqL1xuICAgIHBvdGVudGlhbFByb21vdGlvbnM/OiBQcm9tb3Rpb25bXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3ByaWNlXVxuICAgICAqL1xuICAgIHByaWNlPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2VSYW5nZX0gW3ByaWNlUmFuZ2VdXG4gICAgICovXG4gICAgcHJpY2VSYW5nZT86IFByaWNlUmFuZ2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvZHVjdFJlZmVyZW5jZVtdfSBbcHJvZHVjdFJlZmVyZW5jZXNdXG4gICAgICovXG4gICAgcHJvZHVjdFJlZmVyZW5jZXM/OiBQcm9kdWN0UmVmZXJlbmNlW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3B1cmNoYXNhYmxlXVxuICAgICAqL1xuICAgIHB1cmNoYXNhYmxlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtSZXZpZXdbXX0gW3Jldmlld3NdXG4gICAgICovXG4gICAgcmV2aWV3cz86IFJldmlld1tdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1N0b2NrfSBbc3RvY2tdXG4gICAgICovXG4gICAgc3RvY2s/OiBTdG9jaztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdW1tYXJ5XVxuICAgICAqL1xuICAgIHN1bW1hcnk/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdXJsXVxuICAgICAqL1xuICAgIHVybD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWYXJpYW50TWF0cml4RWxlbWVudFtdfSBbdmFyaWFudE1hdHJpeF1cbiAgICAgKi9cbiAgICB2YXJpYW50TWF0cml4PzogVmFyaWFudE1hdHJpeEVsZW1lbnRbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWYXJpYW50T3B0aW9uW119IFt2YXJpYW50T3B0aW9uc11cbiAgICAgKi9cbiAgICB2YXJpYW50T3B0aW9ucz86IFZhcmlhbnRPcHRpb25bXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt2YXJpYW50VHlwZV1cbiAgICAgKi9cbiAgICB2YXJpYW50VHlwZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZVtdfSBbdm9sdW1lUHJpY2VzXVxuICAgICAqL1xuICAgIHZvbHVtZVByaWNlcz86IFByaWNlW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3ZvbHVtZVByaWNlc0ZsYWddXG4gICAgICovXG4gICAgdm9sdW1lUHJpY2VzRmxhZz86IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBPcmRlckVudHJ5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBPcmRlckVudHJ5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW2Jhc2VQcmljZV1cbiAgICAgKi9cbiAgICBiYXNlUHJpY2U/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEZWxpdmVyeU1vZGV9IFtkZWxpdmVyeU1vZGVdXG4gICAgICovXG4gICAgZGVsaXZlcnlNb2RlPzogRGVsaXZlcnlNb2RlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BvaW50T2ZTZXJ2aWNlfSBbZGVsaXZlcnlQb2ludE9mU2VydmljZV1cbiAgICAgKi9cbiAgICBkZWxpdmVyeVBvaW50T2ZTZXJ2aWNlPzogUG9pbnRPZlNlcnZpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbZW50cnlOdW1iZXJdXG4gICAgICovXG4gICAgZW50cnlOdW1iZXI/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvZHVjdH0gW3Byb2R1Y3RdXG4gICAgICovXG4gICAgcHJvZHVjdD86IFByb2R1Y3Q7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcXVhbnRpdHldXG4gICAgICovXG4gICAgcXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbFByaWNlXVxuICAgICAqL1xuICAgIHRvdGFsUHJpY2U/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbdXBkYXRlYWJsZV1cbiAgICAgKi9cbiAgICB1cGRhdGVhYmxlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTdGF0dXNTdW1tYXJ5W119IFtzdGF0dXNTdW1tYXJ5TGlzdF1cbiAgICAgKi9cbiAgICBzdGF0dXNTdW1tYXJ5TGlzdD86IFN0YXR1c1N1bW1hcnlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDb25maWd1cmF0aW9uSW5mb1tdfSBbY29uZmlndXJhdGlvbkluZm9zXVxuICAgICAqL1xuICAgIGNvbmZpZ3VyYXRpb25JbmZvcz86IENvbmZpZ3VyYXRpb25JbmZvW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDb25maWd1cmF0aW9uSW5mby5cbiAgICogUHJvdmlkZXMgaW5mb3JtYXRpb24gYWJvdXQgY29uZmlndXJhdGlvbiB2YWx1ZXMgb2YgdGhlIGVudHJ5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmF0aW9uSW5mbyB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29uZmlndXJhdGlvbkxhYmVsXVxuICAgICAqL1xuICAgIGNvbmZpZ3VyYXRpb25MYWJlbD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb25maWd1cmF0aW9uVmFsdWVdXG4gICAgICovXG4gICAgY29uZmlndXJhdGlvblZhbHVlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvbmZpZ3VyYXRvclR5cGVdXG4gICAgICovXG4gICAgY29uZmlndXJhdG9yVHlwZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGF0dXNdXG4gICAgICovXG4gICAgc3RhdHVzPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIFBvc3NpYmxlIG9yZGVyIGVudHJ5IHN0YXR1c2VzXG4gICAqL1xuICBleHBvcnQgZW51bSBPcmRlckVudHJ5U3RhdHVzIHtcbiAgICBTdWNjZXNzID0gJ1NVQ0NFU1MnLFxuICAgIEluZm8gPSAnSU5GTycsXG4gICAgV2FybmluZyA9ICdXQVJOSU5HJyxcbiAgICBFcnJvciA9ICdFUlJPUicsXG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBTdGF0dXNTdW1tYXJ5LlxuICAgKiBQcm92aWRlcyBzdGF0dXMgaW5jbHVkaW5nIG51bWJlciBvZiBpc3N1ZXMgZm9yIGNvbmZpZ3VyYWJsZSBlbnRyeS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU3RhdHVzU3VtbWFyeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbbnVtYmVyT2ZJc3N1ZXNdXG4gICAgICovXG4gICAgbnVtYmVyT2ZJc3N1ZXM/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RhdHVzXVxuICAgICAqL1xuICAgIHN0YXR1cz86IE9yZGVyRW50cnlTdGF0dXM7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBEZWxpdmVyeU9yZGVyRW50cnlHcm91cC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgRGVsaXZlcnlPcmRlckVudHJ5R3JvdXAge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FkZHJlc3N9IFtkZWxpdmVyeUFkZHJlc3NdXG4gICAgICovXG4gICAgZGVsaXZlcnlBZGRyZXNzPzogQWRkcmVzcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPcmRlckVudHJ5W119IFtlbnRyaWVzXVxuICAgICAqL1xuICAgIGVudHJpZXM/OiBPcmRlckVudHJ5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcXVhbnRpdHldXG4gICAgICovXG4gICAgcXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbFByaWNlV2l0aFRheF1cbiAgICAgKi9cbiAgICB0b3RhbFByaWNlV2l0aFRheD86IFByaWNlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUGF5bWVudERldGFpbHMuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFBheW1lbnREZXRhaWxzIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFthY2NvdW50SG9sZGVyTmFtZV1cbiAgICAgKi9cbiAgICBhY2NvdW50SG9sZGVyTmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBZGRyZXNzfSBbYmlsbGluZ0FkZHJlc3NdXG4gICAgICovXG4gICAgYmlsbGluZ0FkZHJlc3M/OiBBZGRyZXNzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NhcmROdW1iZXJdXG4gICAgICovXG4gICAgY2FyZE51bWJlcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXJkVHlwZX0gW2NhcmRUeXBlXVxuICAgICAqL1xuICAgIGNhcmRUeXBlPzogQ2FyZFR5cGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY3ZuXVxuICAgICAqL1xuICAgIGN2bj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbZGVmYXVsdFBheW1lbnRdXG4gICAgICovXG4gICAgZGVmYXVsdFBheW1lbnQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2V4cGlyeU1vbnRoXVxuICAgICAqL1xuICAgIGV4cGlyeU1vbnRoPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2V4cGlyeVllYXJdXG4gICAgICovXG4gICAgZXhwaXJ5WWVhcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpZF1cbiAgICAgKi9cbiAgICBpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpc3N1ZU51bWJlcl1cbiAgICAgKi9cbiAgICBpc3N1ZU51bWJlcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbc2F2ZWRdXG4gICAgICovXG4gICAgc2F2ZWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXJ0TW9udGhdXG4gICAgICovXG4gICAgc3RhcnRNb250aD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGFydFllYXJdXG4gICAgICovXG4gICAgc3RhcnRZZWFyPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N1YnNjcmlwdGlvbklkXVxuICAgICAqL1xuICAgIHN1YnNjcmlwdGlvbklkPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUGlja3VwT3JkZXJFbnRyeUdyb3VwLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQaWNrdXBPcmRlckVudHJ5R3JvdXAge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BvaW50T2ZTZXJ2aWNlfSBbZGVsaXZlcnlQb2ludE9mU2VydmljZV1cbiAgICAgKi9cbiAgICBkZWxpdmVyeVBvaW50T2ZTZXJ2aWNlPzogUG9pbnRPZlNlcnZpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbZGlzdGFuY2VdXG4gICAgICovXG4gICAgZGlzdGFuY2U/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJFbnRyeVtdfSBbZW50cmllc11cbiAgICAgKi9cbiAgICBlbnRyaWVzPzogT3JkZXJFbnRyeVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3F1YW50aXR5XVxuICAgICAqL1xuICAgIHF1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxQcmljZVdpdGhUYXhdXG4gICAgICovXG4gICAgdG90YWxQcmljZVdpdGhUYXg/OiBQcmljZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByaW5jaXBhbC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJpbmNpcGFsIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdWlkXVxuICAgICAqL1xuICAgIHVpZD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENhcnQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENhcnQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvblJlc3VsdFtdfSBbYXBwbGllZE9yZGVyUHJvbW90aW9uc11cbiAgICAgKi9cbiAgICBhcHBsaWVkT3JkZXJQcm9tb3Rpb25zPzogUHJvbW90aW9uUmVzdWx0W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uUmVzdWx0W119IFthcHBsaWVkUHJvZHVjdFByb21vdGlvbnNdXG4gICAgICovXG4gICAgYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zPzogUHJvbW90aW9uUmVzdWx0W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Vm91Y2hlcltdfSBbYXBwbGllZFZvdWNoZXJzXVxuICAgICAqL1xuICAgIGFwcGxpZWRWb3VjaGVycz86IFZvdWNoZXJbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbY2FsY3VsYXRlZF1cbiAgICAgKi9cbiAgICBjYWxjdWxhdGVkPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QWRkcmVzc30gW2RlbGl2ZXJ5QWRkcmVzc11cbiAgICAgKi9cbiAgICBkZWxpdmVyeUFkZHJlc3M/OiBBZGRyZXNzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbZGVsaXZlcnlDb3N0XVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5Q29zdD86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2RlbGl2ZXJ5SXRlbXNRdWFudGl0eV1cbiAgICAgKi9cbiAgICBkZWxpdmVyeUl0ZW1zUXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGVsaXZlcnlNb2RlfSBbZGVsaXZlcnlNb2RlXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5TW9kZT86IERlbGl2ZXJ5TW9kZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEZWxpdmVyeU9yZGVyRW50cnlHcm91cFtdfSBbZGVsaXZlcnlPcmRlckdyb3Vwc11cbiAgICAgKi9cbiAgICBkZWxpdmVyeU9yZGVyR3JvdXBzPzogRGVsaXZlcnlPcmRlckVudHJ5R3JvdXBbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPcmRlckVudHJ5W119IFtlbnRyaWVzXVxuICAgICAqL1xuICAgIGVudHJpZXM/OiBPcmRlckVudHJ5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2V4cGlyYXRpb25UaW1lXVxuICAgICAqL1xuICAgIGV4cGlyYXRpb25UaW1lPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtndWlkXVxuICAgICAqL1xuICAgIGd1aWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtuZXRdXG4gICAgICovXG4gICAgbmV0PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW29yZGVyRGlzY291bnRzXVxuICAgICAqL1xuICAgIG9yZGVyRGlzY291bnRzPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UGF5bWVudERldGFpbHN9IFtwYXltZW50SW5mb11cbiAgICAgKi9cbiAgICBwYXltZW50SW5mbz86IFBheW1lbnREZXRhaWxzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3BpY2t1cEl0ZW1zUXVhbnRpdHldXG4gICAgICovXG4gICAgcGlja3VwSXRlbXNRdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQaWNrdXBPcmRlckVudHJ5R3JvdXBbXX0gW3BpY2t1cE9yZGVyR3JvdXBzXVxuICAgICAqL1xuICAgIHBpY2t1cE9yZGVyR3JvdXBzPzogUGlja3VwT3JkZXJFbnRyeUdyb3VwW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uUmVzdWx0W119IFtwb3RlbnRpYWxPcmRlclByb21vdGlvbnNdXG4gICAgICovXG4gICAgcG90ZW50aWFsT3JkZXJQcm9tb3Rpb25zPzogUHJvbW90aW9uUmVzdWx0W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uUmVzdWx0W119IFtwb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9uc11cbiAgICAgKi9cbiAgICBwb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucz86IFByb21vdGlvblJlc3VsdFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbcHJvZHVjdERpc2NvdW50c11cbiAgICAgKi9cbiAgICBwcm9kdWN0RGlzY291bnRzPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW3NhdmVUaW1lXVxuICAgICAqL1xuICAgIHNhdmVUaW1lPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmluY2lwYWx9IFtzYXZlZEJ5XVxuICAgICAqL1xuICAgIHNhdmVkQnk/OiBQcmluY2lwYWw7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc2l0ZV1cbiAgICAgKi9cbiAgICBzaXRlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0b3JlXVxuICAgICAqL1xuICAgIHN0b3JlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbc3ViVG90YWxdXG4gICAgICovXG4gICAgc3ViVG90YWw/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsRGlzY291bnRzXVxuICAgICAqL1xuICAgIHRvdGFsRGlzY291bnRzPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbdG90YWxJdGVtc11cbiAgICAgKi9cbiAgICB0b3RhbEl0ZW1zPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxQcmljZV1cbiAgICAgKi9cbiAgICB0b3RhbFByaWNlPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbFByaWNlV2l0aFRheF1cbiAgICAgKi9cbiAgICB0b3RhbFByaWNlV2l0aFRheD86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxUYXhdXG4gICAgICovXG4gICAgdG90YWxUYXg/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbFVuaXRDb3VudF1cbiAgICAgKi9cbiAgICB0b3RhbFVuaXRDb3VudD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmluY2lwYWx9IFt1c2VyXVxuICAgICAqL1xuICAgIHVzZXI/OiBQcmluY2lwYWw7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDYXJ0TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2FydExpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NhcnRbXX0gW2NhcnRzXVxuICAgICAqL1xuICAgIGNhcnRzPzogQ2FydFtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2FydE1vZGlmaWNhdGlvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2FydE1vZGlmaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2RlbGl2ZXJ5TW9kZUNoYW5nZWRdXG4gICAgICovXG4gICAgZGVsaXZlcnlNb2RlQ2hhbmdlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJFbnRyeX0gW2VudHJ5XVxuICAgICAqL1xuICAgIGVudHJ5PzogT3JkZXJFbnRyeTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtxdWFudGl0eV1cbiAgICAgKi9cbiAgICBxdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtxdWFudGl0eUFkZGVkXVxuICAgICAqL1xuICAgIHF1YW50aXR5QWRkZWQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RhdHVzQ29kZV1cbiAgICAgKi9cbiAgICBzdGF0dXNDb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXR1c01lc3NhZ2VdXG4gICAgICovXG4gICAgc3RhdHVzTWVzc2FnZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENhdGVnb3J5SGllcmFyY2h5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeUhpZXJhcmNoeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaWRdXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2xhc3RNb2RpZmllZF1cbiAgICAgKi9cbiAgICBsYXN0TW9kaWZpZWQ/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXRlZ29yeUhpZXJhcmNoeVtdfSBbc3ViY2F0ZWdvcmllc11cbiAgICAgKi9cbiAgICBzdWJjYXRlZ29yaWVzPzogQ2F0ZWdvcnlIaWVyYXJjaHlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1cmxdXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2F0YWxvZ1ZlcnNpb24uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENhdGFsb2dWZXJzaW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXRlZ29yeUhpZXJhcmNoeVtdfSBbY2F0ZWdvcmllc11cbiAgICAgKi9cbiAgICBjYXRlZ29yaWVzPzogQ2F0ZWdvcnlIaWVyYXJjaHlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpZF1cbiAgICAgKi9cbiAgICBpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbbGFzdE1vZGlmaWVkXVxuICAgICAqL1xuICAgIGxhc3RNb2RpZmllZD86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VybF1cbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDYXRhbG9nLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDYXRhbG9nIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXRhbG9nVmVyc2lvbltdfSBbY2F0YWxvZ1ZlcnNpb25zXVxuICAgICAqL1xuICAgIGNhdGFsb2dWZXJzaW9ucz86IENhdGFsb2dWZXJzaW9uW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaWRdXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2xhc3RNb2RpZmllZF1cbiAgICAgKi9cbiAgICBsYXN0TW9kaWZpZWQ/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1cmxdXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2F0YWxvZ0xpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENhdGFsb2dMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXRhbG9nW119IFtjYXRhbG9nc11cbiAgICAgKi9cbiAgICBjYXRhbG9ncz86IENhdGFsb2dbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENvbXBvbmVudElETGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50SURMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmdbXX0gW2lkTGlzdF1cbiAgICAgKi9cbiAgICBpZExpc3Q/OiBzdHJpbmdbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENvbnNpZ25tZW50RW50cnkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENvbnNpZ25tZW50RW50cnkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09yZGVyRW50cnl9IFtvcmRlckVudHJ5XVxuICAgICAqL1xuICAgIG9yZGVyRW50cnk/OiBPcmRlckVudHJ5O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3F1YW50aXR5XVxuICAgICAqL1xuICAgIHF1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3NoaXBwZWRRdWFudGl0eV1cbiAgICAgKi9cbiAgICBzaGlwcGVkUXVhbnRpdHk/OiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDb25zaWdubWVudC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29uc2lnbm1lbnQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQb2ludE9mU2VydmljZX0gW2RlbGl2ZXJ5UG9pbnRPZlNlcnZpY2VdXG4gICAgICovXG4gICAgZGVsaXZlcnlQb2ludE9mU2VydmljZT86IFBvaW50T2ZTZXJ2aWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NvbnNpZ25tZW50RW50cnlbXX0gW2VudHJpZXNdXG4gICAgICovXG4gICAgZW50cmllcz86IENvbnNpZ25tZW50RW50cnlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBZGRyZXNzfSBbc2hpcHBpbmdBZGRyZXNzXVxuICAgICAqL1xuICAgIHNoaXBwaW5nQWRkcmVzcz86IEFkZHJlc3M7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RhdHVzXVxuICAgICAqL1xuICAgIHN0YXR1cz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbc3RhdHVzRGF0ZV1cbiAgICAgKi9cbiAgICBzdGF0dXNEYXRlPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0cmFja2luZ0lEXVxuICAgICAqL1xuICAgIHRyYWNraW5nSUQ/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDb3VudHJ5TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ291bnRyeUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NvdW50cnlbXX0gW2NvdW50cmllc11cbiAgICAgKi9cbiAgICBjb3VudHJpZXM/OiBDb3VudHJ5W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDdXJyZW5jeUxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEN1cnJlbmN5TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q3VycmVuY3lbXX0gW2N1cnJlbmNpZXNdXG4gICAgICovXG4gICAgY3VycmVuY2llcz86IEN1cnJlbmN5W107XG4gIH1cblxuICAvKipcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDdXN0b21lckNvdXBvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDdXN0b21lckNvdXBvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY291cG9uSWRdXG4gICAgICovXG4gICAgY291cG9uSWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXJ0RGF0ZV1cbiAgICAgKi9cbiAgICBzdGFydERhdGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZW5kRGF0ZV1cbiAgICAgKi9cbiAgICBlbmREYXRlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2VuZERhdGVdXG4gICAgICovXG4gICAgc3RhdHVzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtub3RpZmljYXRpb25Pbl1cbiAgICAgKi9cbiAgICBub3RpZmljYXRpb25Pbj86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2FsbFByb2R1Y3RzQXBwbGljYWJsZV1cbiAgICAgKi9cbiAgICBhbGxQcm9kdWN0c0FwcGxpY2FibGU/OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0N1c3RvbWVyQ291cG9uW119IFtjb3Vwb25zXVxuICAgICAqL1xuICAgIGNvdXBvbnM/OiBDdXN0b21lckNvdXBvbltdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NvcnRbXX0gW3NvcnRzXVxuICAgICAqL1xuICAgIHNvcnRzPzogU29ydFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BhZ2luYXRpb259IFtwYWdpbmF0aW9uXVxuICAgICAqL1xuICAgIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRGVsaXZlcnlNb2RlTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgRGVsaXZlcnlNb2RlTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGVsaXZlcnlNb2RlW119IFtkZWxpdmVyeU1vZGVzXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5TW9kZXM/OiBEZWxpdmVyeU1vZGVbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEZhY2V0VmFsdWUuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEZhY2V0VmFsdWUge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2NvdW50XVxuICAgICAqL1xuICAgIGNvdW50PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTZWFyY2hTdGF0ZX0gW3F1ZXJ5XVxuICAgICAqL1xuICAgIHF1ZXJ5PzogU2VhcmNoU3RhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3NlbGVjdGVkXVxuICAgICAqL1xuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEZhY2V0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBGYWNldCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2NhdGVnb3J5XVxuICAgICAqL1xuICAgIGNhdGVnb3J5PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbbXVsdGlTZWxlY3RdXG4gICAgICovXG4gICAgbXVsdGlTZWxlY3Q/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtwcmlvcml0eV1cbiAgICAgKi9cbiAgICBwcmlvcml0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtGYWNldFZhbHVlW119IFt0b3BWYWx1ZXNdXG4gICAgICovXG4gICAgdG9wVmFsdWVzPzogRmFjZXRWYWx1ZVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ZhY2V0VmFsdWVbXX0gW3ZhbHVlc11cbiAgICAgKi9cbiAgICB2YWx1ZXM/OiBGYWNldFZhbHVlW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3Zpc2libGVdXG4gICAgICovXG4gICAgdmlzaWJsZT86IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBMYW5ndWFnZUxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7TGFuZ3VhZ2VbXX0gW2xhbmd1YWdlc11cbiAgICAgKi9cbiAgICBsYW5ndWFnZXM/OiBMYW5ndWFnZVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUGFnaW5hdGlvbi5cbiAgICogUGFnaW5hdGlvbiBpbmZvXG4gICAqXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFBhZ2luYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2NvdW50XSBOdW1iZXIgb2YgZWxlbWVudHMgb24gdGhpcyBwYWdlXG4gICAgICovXG4gICAgY291bnQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcGFnZV0gQ3VycmVudCBwYWdlIG51bWJlclxuICAgICAqL1xuICAgIHBhZ2U/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbdG90YWxDb3VudF0gVG90YWwgbnVtYmVyIG9mIGVsZW1lbnRzXG4gICAgICovXG4gICAgdG90YWxDb3VudD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbFBhZ2VzXSBUb3RhbCBudW1iZXIgb2YgcGFnZXNcbiAgICAgKi9cbiAgICB0b3RhbFBhZ2VzPzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU29ydC5cbiAgICogU29ydCBvcHRpb25cbiAgICpcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU29ydCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2FzY11cbiAgICAgKi9cbiAgICBhc2M/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIExpc3RBZGFwdGVkQ29tcG9uZW50cy5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgTGlzdEFkYXB0ZWRDb21wb25lbnRzIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHthbnlbXX0gW2NvbXBvbmVudHNdXG4gICAgICovXG4gICAgY29tcG9uZW50cz86IGFueVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BhZ2luYXRpb259IFtwYWdpbmF0aW9uXVxuICAgICAqL1xuICAgIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NvcnRbXX0gW3NvcnRzXVxuICAgICAqL1xuICAgIHNvcnRzPzogU29ydFtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgTWVtYmVyTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgTWVtYmVyTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpbmNpcGFsW119IFttZW1iZXJzXVxuICAgICAqL1xuICAgIG1lbWJlcnM/OiBQcmluY2lwYWxbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIE9yZGVyRW50cnlMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBPcmRlckVudHJ5TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJFbnRyeVtdfSBbb3JkZXJFbnRyaWVzXVxuICAgICAqL1xuICAgIG9yZGVyRW50cmllcz86IE9yZGVyRW50cnlbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIE9yZGVySGlzdG9yeS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXJIaXN0b3J5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZ3VpZF1cbiAgICAgKi9cbiAgICBndWlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtwbGFjZWRdXG4gICAgICovXG4gICAgcGxhY2VkPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGF0dXNdXG4gICAgICovXG4gICAgc3RhdHVzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXR1c0Rpc3BsYXldXG4gICAgICovXG4gICAgc3RhdHVzRGlzcGxheT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsXVxuICAgICAqL1xuICAgIHRvdGFsPzogUHJpY2U7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQYWdpbmF0aW9uTW9kZWwuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFBhZ2luYXRpb25Nb2RlbCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbY3VycmVudFBhZ2VdXG4gICAgICovXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcGFnZVNpemVdXG4gICAgICovXG4gICAgcGFnZVNpemU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc29ydF1cbiAgICAgKi9cbiAgICBzb3J0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3RvdGFsUGFnZXNdXG4gICAgICovXG4gICAgdG90YWxQYWdlcz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbFJlc3VsdHNdXG4gICAgICovXG4gICAgdG90YWxSZXN1bHRzPzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU29ydE1vZGVsLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTb3J0TW9kZWwge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3NlbGVjdGVkXVxuICAgICAqL1xuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIE9yZGVySGlzdG9yeUxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIE9yZGVySGlzdG9yeUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09yZGVySGlzdG9yeVtdfSBbb3JkZXJzXVxuICAgICAqL1xuICAgIG9yZGVycz86IE9yZGVySGlzdG9yeVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BhZ2luYXRpb25Nb2RlbH0gW3BhZ2luYXRpb25dXG4gICAgICovXG4gICAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb25Nb2RlbDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTb3J0TW9kZWxbXX0gW3NvcnRzXVxuICAgICAqL1xuICAgIHNvcnRzPzogU29ydE1vZGVsW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBPcmRlclN0YXR1c1VwZGF0ZUVsZW1lbnQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIE9yZGVyU3RhdHVzVXBkYXRlRWxlbWVudCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbYmFzZVNpdGVJZF1cbiAgICAgKi9cbiAgICBiYXNlU2l0ZUlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGF0dXNdXG4gICAgICovXG4gICAgc3RhdHVzPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgT3JkZXJTdGF0dXNVcGRhdGVFbGVtZW50TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXJTdGF0dXNVcGRhdGVFbGVtZW50TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJTdGF0dXNVcGRhdGVFbGVtZW50W119IFtvcmRlclN0YXR1c1VwZGF0ZUVsZW1lbnRzXVxuICAgICAqL1xuICAgIG9yZGVyU3RhdHVzVXBkYXRlRWxlbWVudHM/OiBPcmRlclN0YXR1c1VwZGF0ZUVsZW1lbnRbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIE9yZGVyLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBPcmRlciB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uUmVzdWx0W119IFthcHBsaWVkT3JkZXJQcm9tb3Rpb25zXVxuICAgICAqL1xuICAgIGFwcGxpZWRPcmRlclByb21vdGlvbnM/OiBQcm9tb3Rpb25SZXN1bHRbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9tb3Rpb25SZXN1bHRbXX0gW2FwcGxpZWRQcm9kdWN0UHJvbW90aW9uc11cbiAgICAgKi9cbiAgICBhcHBsaWVkUHJvZHVjdFByb21vdGlvbnM/OiBQcm9tb3Rpb25SZXN1bHRbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWb3VjaGVyW119IFthcHBsaWVkVm91Y2hlcnNdXG4gICAgICovXG4gICAgYXBwbGllZFZvdWNoZXJzPzogVm91Y2hlcltdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtjYWxjdWxhdGVkXVxuICAgICAqL1xuICAgIGNhbGN1bGF0ZWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDb25zaWdubWVudFtdfSBbY29uc2lnbm1lbnRzXVxuICAgICAqL1xuICAgIGNvbnNpZ25tZW50cz86IENvbnNpZ25tZW50W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2NyZWF0ZWRdXG4gICAgICovXG4gICAgY3JlYXRlZD86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QWRkcmVzc30gW2RlbGl2ZXJ5QWRkcmVzc11cbiAgICAgKi9cbiAgICBkZWxpdmVyeUFkZHJlc3M/OiBBZGRyZXNzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbZGVsaXZlcnlDb3N0XVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5Q29zdD86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2RlbGl2ZXJ5SXRlbXNRdWFudGl0eV1cbiAgICAgKi9cbiAgICBkZWxpdmVyeUl0ZW1zUXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGVsaXZlcnlNb2RlfSBbZGVsaXZlcnlNb2RlXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5TW9kZT86IERlbGl2ZXJ5TW9kZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEZWxpdmVyeU9yZGVyRW50cnlHcm91cFtdfSBbZGVsaXZlcnlPcmRlckdyb3Vwc11cbiAgICAgKi9cbiAgICBkZWxpdmVyeU9yZGVyR3JvdXBzPzogRGVsaXZlcnlPcmRlckVudHJ5R3JvdXBbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZWxpdmVyeVN0YXR1c11cbiAgICAgKi9cbiAgICBkZWxpdmVyeVN0YXR1cz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZWxpdmVyeVN0YXR1c0Rpc3BsYXldXG4gICAgICovXG4gICAgZGVsaXZlcnlTdGF0dXNEaXNwbGF5Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09yZGVyRW50cnlbXX0gW2VudHJpZXNdXG4gICAgICovXG4gICAgZW50cmllcz86IE9yZGVyRW50cnlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbZ3Vlc3RDdXN0b21lcl1cbiAgICAgKi9cbiAgICBndWVzdEN1c3RvbWVyPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtndWlkXVxuICAgICAqL1xuICAgIGd1aWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW25ldF1cbiAgICAgKi9cbiAgICBuZXQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbb3JkZXJEaXNjb3VudHNdXG4gICAgICovXG4gICAgb3JkZXJEaXNjb3VudHM/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQYXltZW50RGV0YWlsc30gW3BheW1lbnRJbmZvXVxuICAgICAqL1xuICAgIHBheW1lbnRJbmZvPzogUGF5bWVudERldGFpbHM7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcGlja3VwSXRlbXNRdWFudGl0eV1cbiAgICAgKi9cbiAgICBwaWNrdXBJdGVtc1F1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BpY2t1cE9yZGVyRW50cnlHcm91cFtdfSBbcGlja3VwT3JkZXJHcm91cHNdXG4gICAgICovXG4gICAgcGlja3VwT3JkZXJHcm91cHM/OiBQaWNrdXBPcmRlckVudHJ5R3JvdXBbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3Byb2R1Y3REaXNjb3VudHNdXG4gICAgICovXG4gICAgcHJvZHVjdERpc2NvdW50cz86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3NpdGVdXG4gICAgICovXG4gICAgc2l0ZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGF0dXNdXG4gICAgICovXG4gICAgc3RhdHVzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXR1c0Rpc3BsYXldXG4gICAgICovXG4gICAgc3RhdHVzRGlzcGxheT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdG9yZV1cbiAgICAgKi9cbiAgICBzdG9yZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3N1YlRvdGFsXVxuICAgICAqL1xuICAgIHN1YlRvdGFsPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbERpc2NvdW50c11cbiAgICAgKi9cbiAgICB0b3RhbERpc2NvdW50cz86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3RvdGFsSXRlbXNdXG4gICAgICovXG4gICAgdG90YWxJdGVtcz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsUHJpY2VdXG4gICAgICovXG4gICAgdG90YWxQcmljZT86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxQcmljZVdpdGhUYXhdXG4gICAgICovXG4gICAgdG90YWxQcmljZVdpdGhUYXg/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsVGF4XVxuICAgICAqL1xuICAgIHRvdGFsVGF4PzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJFbnRyeVtdfSBbdW5jb25zaWduZWRFbnRyaWVzXVxuICAgICAqL1xuICAgIHVuY29uc2lnbmVkRW50cmllcz86IE9yZGVyRW50cnlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmluY2lwYWx9IFt1c2VyXVxuICAgICAqL1xuICAgIHVzZXI/OiBQcmluY2lwYWw7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBSZXR1cm5SZXF1ZXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBSZXR1cm5SZXF1ZXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbY2FuY2VsbGFibGVdXG4gICAgICovXG4gICAgY2FuY2VsbGFibGU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbY3JlYXRpb25UaW1lXVxuICAgICAqL1xuICAgIGNyZWF0aW9uVGltZT86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtkZWxpdmVyeUNvc3RdXG4gICAgICovXG4gICAgZGVsaXZlcnlDb3N0PzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7b3JkZXJ9IFtvcmRlcl1cbiAgICAgKi9cbiAgICBvcmRlcj86IE9yZGVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtyZWZ1bmREZWxpdmVyeUNvc3RdXG4gICAgICovXG4gICAgcmVmdW5kRGVsaXZlcnlDb3N0PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtSZXR1cm5SZXF1ZXN0RW50cnlbXX0gW3JldHVybkVudHJpZXNdXG4gICAgICovXG4gICAgcmV0dXJuRW50cmllcz86IFJldHVyblJlcXVlc3RFbnRyeVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3JldHVybkxhYmVsRG93bmxvYWRVcmxdXG4gICAgICovXG4gICAgcmV0dXJuTGFiZWxEb3dubG9hZFVybD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtybWFdXG4gICAgICovXG4gICAgcm1hPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXR1c11cbiAgICAgKi9cbiAgICBzdGF0dXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtzdWJUb3RhbF1cbiAgICAgKi9cbiAgICBzdWJUb3RhbD86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxQcmljZV1cbiAgICAgKi9cbiAgICB0b3RhbFByaWNlPzogUHJpY2U7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBSZXR1cm5SZXF1ZXN0RW50cnkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFJldHVyblJlcXVlc3RFbnRyeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJFbnRyeX0gW29yZGVyRW50cnldXG4gICAgICovXG4gICAgb3JkZXJFbnRyeT86IE9yZGVyRW50cnk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbZXhwZWN0ZWRRdWFudGl0eV1cbiAgICAgKi9cbiAgICBleHBlY3RlZFF1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbcmVmdW5kQW1vdW50XVxuICAgICAqL1xuICAgIHJlZnVuZEFtb3VudD86IFByaWNlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUGF5bWVudERldGFpbHNMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQYXltZW50RGV0YWlsc0xpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BheW1lbnREZXRhaWxzW119IFtwYXltZW50c11cbiAgICAgKi9cbiAgICBwYXltZW50cz86IFBheW1lbnREZXRhaWxzW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQb2ludE9mU2VydmljZVN0b2NrLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQb2ludE9mU2VydmljZVN0b2NrIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBZGRyZXNzfSBbYWRkcmVzc11cbiAgICAgKi9cbiAgICBhZGRyZXNzPzogQWRkcmVzcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkaXNwbGF5TmFtZV1cbiAgICAgKi9cbiAgICBkaXNwbGF5TmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtkaXN0YW5jZUttXVxuICAgICAqL1xuICAgIGRpc3RhbmNlS20/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7eyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBzdHJpbmcgfX0gW2ZlYXR1cmVzXVxuICAgICAqL1xuICAgIGZlYXR1cmVzPzogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmb3JtYXR0ZWREaXN0YW5jZV1cbiAgICAgKi9cbiAgICBmb3JtYXR0ZWREaXN0YW5jZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtHZW9Qb2ludH0gW2dlb1BvaW50XVxuICAgICAqL1xuICAgIGdlb1BvaW50PzogR2VvUG9pbnQ7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7SW1hZ2V9IFttYXBJY29uXVxuICAgICAqL1xuICAgIG1hcEljb24/OiBJbWFnZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3BlbmluZ1NjaGVkdWxlfSBbb3BlbmluZ0hvdXJzXVxuICAgICAqL1xuICAgIG9wZW5pbmdIb3Vycz86IE9wZW5pbmdTY2hlZHVsZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTdG9ja30gW3N0b2NrSW5mb11cbiAgICAgKi9cbiAgICBzdG9ja0luZm8/OiBTdG9jaztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdG9yZUNvbnRlbnRdXG4gICAgICovXG4gICAgc3RvcmVDb250ZW50Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ltYWdlW119IFtzdG9yZUltYWdlc11cbiAgICAgKi9cbiAgICBzdG9yZUltYWdlcz86IEltYWdlW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdXJsXVxuICAgICAqL1xuICAgIHVybD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb2R1Y3RFeHByZXNzVXBkYXRlRWxlbWVudC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEV4cHJlc3NVcGRhdGVFbGVtZW50IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjYXRhbG9nSWRdXG4gICAgICovXG4gICAgY2F0YWxvZ0lkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NhdGFsb2dWZXJzaW9uXVxuICAgICAqL1xuICAgIGNhdGFsb2dWZXJzaW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb2R1Y3RFeHByZXNzVXBkYXRlRWxlbWVudExpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RFeHByZXNzVXBkYXRlRWxlbWVudExpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb2R1Y3RFeHByZXNzVXBkYXRlRWxlbWVudFtdfSBbcHJvZHVjdEV4cHJlc3NVcGRhdGVFbGVtZW50c11cbiAgICAgKi9cbiAgICBwcm9kdWN0RXhwcmVzc1VwZGF0ZUVsZW1lbnRzPzogUHJvZHVjdEV4cHJlc3NVcGRhdGVFbGVtZW50W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9kdWN0TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdExpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NhdGFsb2ddXG4gICAgICovXG4gICAgY2F0YWxvZz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtjdXJyZW50UGFnZV1cbiAgICAgKi9cbiAgICBjdXJyZW50UGFnZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9kdWN0W119IFtwcm9kdWN0c11cbiAgICAgKi9cbiAgICBwcm9kdWN0cz86IFByb2R1Y3RbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbFBhZ2VDb3VudF1cbiAgICAgKi9cbiAgICB0b3RhbFBhZ2VDb3VudD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbFByb2R1Y3RDb3VudF1cbiAgICAgKi9cbiAgICB0b3RhbFByb2R1Y3RDb3VudD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt2ZXJzaW9uXVxuICAgICAqL1xuICAgIHZlcnNpb24/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9kdWN0UmVmZXJlbmNlTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdFJlZmVyZW5jZUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb2R1Y3RSZWZlcmVuY2VbXX0gW3JlZmVyZW5jZXNdXG4gICAgICovXG4gICAgcmVmZXJlbmNlcz86IFByb2R1Y3RSZWZlcmVuY2VbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFNwZWxsaW5nU3VnZ2VzdGlvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU3BlbGxpbmdTdWdnZXN0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtxdWVyeV1cbiAgICAgKi9cbiAgICBxdWVyeT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdWdnZXN0aW9uXVxuICAgICAqL1xuICAgIHN1Z2dlc3Rpb24/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9kdWN0U2VhcmNoUGFnZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdFNlYXJjaFBhZ2Uge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0JyZWFkY3J1bWJbXX0gW2JyZWFkY3J1bWJzXVxuICAgICAqL1xuICAgIGJyZWFkY3J1bWJzPzogQnJlYWRjcnVtYltdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NhdGVnb3J5Q29kZV1cbiAgICAgKi9cbiAgICBjYXRlZ29yeUNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U2VhcmNoU3RhdGV9IFtjdXJyZW50UXVlcnldXG4gICAgICovXG4gICAgY3VycmVudFF1ZXJ5PzogU2VhcmNoU3RhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RmFjZXRbXX0gW2ZhY2V0c11cbiAgICAgKi9cbiAgICBmYWNldHM/OiBGYWNldFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2ZyZWVUZXh0U2VhcmNoXVxuICAgICAqL1xuICAgIGZyZWVUZXh0U2VhcmNoPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2tleXdvcmRSZWRpcmVjdFVybF1cbiAgICAgKi9cbiAgICBrZXl3b3JkUmVkaXJlY3RVcmw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UGFnaW5hdGlvbk1vZGVsfSBbcGFnaW5hdGlvbl1cbiAgICAgKi9cbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbk1vZGVsO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb2R1Y3RbXX0gW3Byb2R1Y3RzXVxuICAgICAqL1xuICAgIHByb2R1Y3RzPzogUHJvZHVjdFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NvcnRNb2RlbFtdfSBbc29ydHNdXG4gICAgICovXG4gICAgc29ydHM/OiBTb3J0TW9kZWxbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTcGVsbGluZ1N1Z2dlc3Rpb259IFtzcGVsbGluZ1N1Z2dlc3Rpb25dXG4gICAgICovXG4gICAgc3BlbGxpbmdTdWdnZXN0aW9uPzogU3BlbGxpbmdTdWdnZXN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvbW90aW9uTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvbW90aW9uTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uW119IFtwcm9tb3Rpb25zXVxuICAgICAqL1xuICAgIHByb21vdGlvbnM/OiBQcm9tb3Rpb25bXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb21vdGlvblJlc3VsdExpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb21vdGlvblJlc3VsdExpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvblJlc3VsdFtdfSBbcHJvbW90aW9uc11cbiAgICAgKi9cbiAgICBwcm9tb3Rpb25zPzogUHJvbW90aW9uUmVzdWx0W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBSZXZpZXdMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBSZXZpZXdMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtSZXZpZXdbXX0gW3Jldmlld3NdXG4gICAgICovXG4gICAgcmV2aWV3cz86IFJldmlld1tdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU2F2ZUNhcnRSZXN1bHQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFNhdmVDYXJ0UmVzdWx0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXJ0fSBbc2F2ZWRDYXJ0RGF0YV1cbiAgICAgKi9cbiAgICBzYXZlZENhcnREYXRhPzogQ2FydDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFN0b3JlRmluZGVyU2VhcmNoUGFnZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU3RvcmVGaW5kZXJTZWFyY2hQYWdlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtib3VuZEVhc3RMb25naXR1ZGVdXG4gICAgICovXG4gICAgYm91bmRFYXN0TG9uZ2l0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2JvdW5kTm9ydGhMYXRpdHVkZV1cbiAgICAgKi9cbiAgICBib3VuZE5vcnRoTGF0aXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbYm91bmRTb3V0aExhdGl0dWRlXVxuICAgICAqL1xuICAgIGJvdW5kU291dGhMYXRpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtib3VuZFdlc3RMb25naXR1ZGVdXG4gICAgICovXG4gICAgYm91bmRXZXN0TG9uZ2l0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2xvY2F0aW9uVGV4dF1cbiAgICAgKi9cbiAgICBsb2NhdGlvblRleHQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UGFnaW5hdGlvbk1vZGVsfSBbcGFnaW5hdGlvbl1cbiAgICAgKi9cbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbk1vZGVsO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NvcnRNb2RlbFtdfSBbc29ydHNdXG4gICAgICovXG4gICAgc29ydHM/OiBTb3J0TW9kZWxbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtzb3VyY2VMYXRpdHVkZV1cbiAgICAgKi9cbiAgICBzb3VyY2VMYXRpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtzb3VyY2VMb25naXR1ZGVdXG4gICAgICovXG4gICAgc291cmNlTG9uZ2l0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BvaW50T2ZTZXJ2aWNlW119IFtzdG9yZXNdXG4gICAgICovXG4gICAgc3RvcmVzPzogUG9pbnRPZlNlcnZpY2VbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFN0b3JlRmluZGVyU3RvY2tTZWFyY2hQYWdlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTdG9yZUZpbmRlclN0b2NrU2VhcmNoUGFnZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbYm91bmRFYXN0TG9uZ2l0dWRlXVxuICAgICAqL1xuICAgIGJvdW5kRWFzdExvbmdpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtib3VuZE5vcnRoTGF0aXR1ZGVdXG4gICAgICovXG4gICAgYm91bmROb3J0aExhdGl0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2JvdW5kU291dGhMYXRpdHVkZV1cbiAgICAgKi9cbiAgICBib3VuZFNvdXRoTGF0aXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbYm91bmRXZXN0TG9uZ2l0dWRlXVxuICAgICAqL1xuICAgIGJvdW5kV2VzdExvbmdpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtsb2NhdGlvblRleHRdXG4gICAgICovXG4gICAgbG9jYXRpb25UZXh0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BhZ2luYXRpb25Nb2RlbH0gW3BhZ2luYXRpb25dXG4gICAgICovXG4gICAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb25Nb2RlbDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9kdWN0fSBbcHJvZHVjdF1cbiAgICAgKi9cbiAgICBwcm9kdWN0PzogUHJvZHVjdDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTb3J0TW9kZWxbXX0gW3NvcnRzXVxuICAgICAqL1xuICAgIHNvcnRzPzogU29ydE1vZGVsW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbc291cmNlTGF0aXR1ZGVdXG4gICAgICovXG4gICAgc291cmNlTGF0aXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbc291cmNlTG9uZ2l0dWRlXVxuICAgICAqL1xuICAgIHNvdXJjZUxvbmdpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQb2ludE9mU2VydmljZVN0b2NrW119IFtzdG9yZXNdXG4gICAgICovXG4gICAgc3RvcmVzPzogUG9pbnRPZlNlcnZpY2VTdG9ja1tdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU3VnZ2VzdGlvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU3VnZ2VzdGlvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdmFsdWVdXG4gICAgICovXG4gICAgdmFsdWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBTdWdnZXN0aW9uTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU3VnZ2VzdGlvbkxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1N1Z2dlc3Rpb25bXX0gW3N1Z2dlc3Rpb25zXVxuICAgICAqL1xuICAgIHN1Z2dlc3Rpb25zPzogU3VnZ2VzdGlvbltdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVGl0bGUuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFRpdGxlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVGl0bGVMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBUaXRsZUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1RpdGxlW119IFt0aXRsZXNdXG4gICAgICovXG4gICAgdGl0bGVzPzogVGl0bGVbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFVzZXJHcm91cC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVXNlckdyb3VwIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmluY2lwYWxbXX0gW21lbWJlcnNdXG4gICAgICovXG4gICAgbWVtYmVycz86IFByaW5jaXBhbFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW21lbWJlcnNDb3VudF1cbiAgICAgKi9cbiAgICBtZW1iZXJzQ291bnQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1VzZXJHcm91cFtdfSBbc3ViR3JvdXBzXVxuICAgICAqL1xuICAgIHN1Ykdyb3Vwcz86IFVzZXJHcm91cFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VpZF1cbiAgICAgKi9cbiAgICB1aWQ/OiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFN0b3JlQ291bnQge1xuICAgIGNvdW50PzogbnVtYmVyO1xuICAgIGlzb0NvZGU/OiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICB0eXBlPzogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBTdG9yZUNvdW50TGlzdCB7XG4gICAgY291bnRyaWVzQW5kUmVnaW9uc1N0b3JlQ291bnQ/OiBTdG9yZUNvdW50W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBWb3VjaGVyTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVm91Y2hlckxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZvdWNoZXJbXX0gW3ZvdWNoZXJzXVxuICAgICAqL1xuICAgIHZvdWNoZXJzPzogVm91Y2hlcltdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBQcmljZVR5cGUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQlVZJywgJ0ZST00nXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IFByaWNlVHlwZSA9IDxQcmljZVR5cGU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBQcmljZVR5cGUge1xuICAgIEJVWSA9ICdCVVknLFxuICAgIEZST00gPSAnRlJPTScsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEltYWdlVHlwZS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdQUklNQVJZJywgJ0dBTExFUlknXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEltYWdlVHlwZSA9IDxJbWFnZVR5cGU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBJbWFnZVR5cGUge1xuICAgIFBSSU1BUlkgPSAnUFJJTUFSWScsXG4gICAgR0FMTEVSWSA9ICdHQUxMRVJZJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzID0gPEZpZWxkcz5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkcyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczEgPSA8RmllbGRzMT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczEge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczIuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyID0gPEZpZWxkczI+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMyIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMyA9IDxGaWVsZHMzPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczQgPSA8RmllbGRzND5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1ID0gPEZpZWxkczU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM1IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM2LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNiA9IDxGaWVsZHM2Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgUGFnZVR5cGUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQ29udGVudFBhZ2UnLCAnUHJvZHVjdFBhZ2UnLCAnQ2F0ZWdvcnlQYWdlJyxcbiAgICogJ0NhdGFsb2dQYWdlJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBQYWdlVHlwZSA9IDxQYWdlVHlwZT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIFBhZ2VUeXBlIHtcbiAgICBDT05URU5UX1BBR0UgPSAnQ29udGVudFBhZ2UnLFxuICAgIFBST0RVQ1RfUEFHRSA9ICdQcm9kdWN0UGFnZScsXG4gICAgQ0FURUdPUllfUEFHRSA9ICdDYXRlZ29yeVBhZ2UnLFxuICAgIENBVEFMT0dfUEFHRSA9ICdDYXRhbG9nUGFnZScsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczcuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM3ID0gPEZpZWxkczc+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM3IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM4LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzOCA9IDxGaWVsZHM4Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzOCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzOS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczkgPSA8RmllbGRzOT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczkge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczEwLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMTAgPSA8RmllbGRzMTA+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxMCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMTEuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMxMSA9IDxGaWVsZHMxMT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczExIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMxMi5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczEyID0gPEZpZWxkczEyPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMTIge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczEzLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMTMgPSA8RmllbGRzMTM+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxMyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMTQuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMxNCA9IDxGaWVsZHMxND5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczE0IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMxNS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczE1ID0gPEZpZWxkczE1Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMTUge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczE2LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMTYgPSA8RmllbGRzMTY+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxNiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgU29ydEVudW0uXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBTb3J0RW51bSA9IDxTb3J0RW51bT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIFNvcnRFbnVtIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMxNy5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczE3ID0gPEZpZWxkczE3Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMTcge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczE4LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMTggPSA8RmllbGRzMTg+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxOCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMTkuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMxOSA9IDxGaWVsZHMxOT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczE5IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyMC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczIwID0gPEZpZWxkczIwPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMjAge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczIxLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMjEgPSA8RmllbGRzMjE+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMyMSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMjIuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyMiA9IDxGaWVsZHMyMj5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczIyIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyMy5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczIzID0gPEZpZWxkczIzPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMjMge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczI0LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMjQgPSA8RmllbGRzMjQ+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMyNCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMjUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyNSA9IDxGaWVsZHMyNT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczI1IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyNi5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczI2ID0gPEZpZWxkczI2Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMjYge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczI3LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMjcgPSA8RmllbGRzMjc+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMyNyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMjguXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyOCA9IDxGaWVsZHMyOD5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczI4IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyOS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczI5ID0gPEZpZWxkczI5Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMjkge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczMwLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMzAgPSA8RmllbGRzMzA+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMzMCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMzEuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMzMSA9IDxGaWVsZHMzMT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczMxIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzMi5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczMyID0gPEZpZWxkczMyPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMzIge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczMzLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMzMgPSA8RmllbGRzMzM+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMzMyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMzQuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMzNCA9IDxGaWVsZHMzND5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczM0IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzNS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczM1ID0gPEZpZWxkczM1Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMzUge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczM2LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMzYgPSA8RmllbGRzMzY+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMzNiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMzcuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMzNyA9IDxGaWVsZHMzNz5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczM3IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzOC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczM4ID0gPEZpZWxkczM4Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMzgge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczM5LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMzkgPSA8RmllbGRzMzk+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMzOSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNDAuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0MCA9IDxGaWVsZHM0MD5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQwIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM0MS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczQxID0gPEZpZWxkczQxPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNDEge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczQyLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNDIgPSA8RmllbGRzNDI+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM0MiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNDMuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0MyA9IDxGaWVsZHM0Mz5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQzIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM0NC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczQ0ID0gPEZpZWxkczQ0Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNDQge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczQ1LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNDUgPSA8RmllbGRzNDU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM0NSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNDYuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0NiA9IDxGaWVsZHM0Nj5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQ2IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM0Ny5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczQ3ID0gPEZpZWxkczQ3Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNDcge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczQ4LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNDggPSA8RmllbGRzNDg+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM0OCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNDkuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0OSA9IDxGaWVsZHM0OT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQ5IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1MC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczUwID0gPEZpZWxkczUwPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNTAge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczUxLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNTEgPSA8RmllbGRzNTE+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM1MSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNTIuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1MiA9IDxGaWVsZHM1Mj5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczUyIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1My5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczUzID0gPEZpZWxkczUzPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNTMge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczU0LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNTQgPSA8RmllbGRzNTQ+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM1NCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNTUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1NSA9IDxGaWVsZHM1NT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczU1IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1Ni5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczU2ID0gPEZpZWxkczU2Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNTYge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczU3LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNTcgPSA8RmllbGRzNTc+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM1NyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNTguXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1OCA9IDxGaWVsZHM1OD5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczU4IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1OS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczU5ID0gPEZpZWxkczU5Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNTkge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczYwLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNjAgPSA8RmllbGRzNjA+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM2MCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNjEuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM2MSA9IDxGaWVsZHM2MT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczYxIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBUeXBlLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ2FsbCcsICdwcm9kdWN0JywgJ29yZGVyJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBUeXBlID0gPFR5cGU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBUeXBlIHtcbiAgICBBbGwgPSAnYWxsJyxcbiAgICBQcm9kdWN0ID0gJ3Byb2R1Y3QnLFxuICAgIE9yZGVyID0gJ29yZGVyJyxcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQW5vbnltb3VzQ29uc2VudCB7XG4gICAgdGVtcGxhdGVDb2RlPzogc3RyaW5nO1xuICAgIHZlcnNpb24/OiBudW1iZXI7XG4gICAgY29uc2VudFN0YXRlPzogQ09OU0VOVF9TVEFUVVM7XG4gIH1cblxuICBleHBvcnQgZW51bSBDT05TRU5UX1NUQVRVUyB7XG4gICAgQU5PTllNT1VTX0NPTlNFTlRfR0lWRU4gPSAnR0lWRU4nLFxuICAgIEFOT05ZTU9VU19DT05TRU5UX1dJVEhEUkFXTiA9ICdXSVRIRFJBV04nLFxuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBDb25zZW50VGVtcGxhdGUge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgdmVyc2lvbj86IG51bWJlcjtcbiAgICBjdXJyZW50Q29uc2VudD86IENvbnNlbnQ7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIENvbnNlbnQge1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgY29uc2VudEdpdmVuRGF0ZT86IERhdGU7XG4gICAgY29uc2VudFdpdGhkcmF3bkRhdGU/OiBEYXRlO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBDb25zZW50VGVtcGxhdGVMaXN0IHtcbiAgICBjb25zZW50VGVtcGxhdGVzPzogQ29uc2VudFRlbXBsYXRlW107XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEJhc2VTaXRlcyB7XG4gICAgYmFzZVNpdGVzPzogQmFzZVNpdGVbXTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQmFzZVNpdGUge1xuICAgIGNoYW5uZWw/OiBzdHJpbmc7XG4gICAgZGVmYXVsdExhbmd1YWdlPzogTGFuZ3VhZ2U7XG4gICAgZGVmYXVsdFByZXZpZXdDYXRhbG9nSWQ/OiBzdHJpbmc7XG4gICAgZGVmYXVsdFByZXZpZXdDYXRlZ29yeUNvZGU/OiBzdHJpbmc7XG4gICAgZGVmYXVsdFByZXZpZXdQcm9kdWN0Q29kZT86IHN0cmluZztcbiAgICBsb2NhbGU/OiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICB0aGVtZT86IHN0cmluZztcbiAgICB1aWQ/OiBzdHJpbmc7XG4gICAgc3RvcmVzPzogQmFzZVN0b3JlW107XG4gICAgdXJsUGF0dGVybnM/OiBzdHJpbmdbXTtcbiAgICB1cmxFbmNvZGluZ0F0dHJpYnV0ZXM/OiBzdHJpbmdbXTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQmFzZVN0b3JlIHtcbiAgICBjdXJyZW5jaWVzPzogQ3VycmVuY3lbXTtcbiAgICBkZWZhdWx0Q3VycmVuY3k/OiBDdXJyZW5jeTtcbiAgICBsYW5ndWFnZXM/OiBMYW5ndWFnZVtdO1xuICAgIGRlZmF1bHRMYW5ndWFnZT86IExhbmd1YWdlO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0SW50ZXJlc3RFbnRyeSB7XG4gICAgaW50ZXJlc3RUeXBlPzogTm90aWZpY2F0aW9uVHlwZTtcbiAgICBkYXRlQWRkZWQ/OiBzdHJpbmc7XG4gICAgZXhwaXJhdGlvbkRhdGU/OiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RJbnRlcmVzdEVudHJ5UmVsYXRpb24ge1xuICAgIHByb2R1Y3Q/OiBQcm9kdWN0O1xuICAgIHByb2R1Y3RJbnRlcmVzdEVudHJ5PzogUHJvZHVjdEludGVyZXN0RW50cnlbXTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0IHtcbiAgICByZXN1bHRzPzogUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvbltdO1xuICAgIHNvcnRzPzogU29ydFtdO1xuICAgIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uO1xuICB9XG5cbiAgZXhwb3J0IGVudW0gTm90aWZpY2F0aW9uVHlwZSB7XG4gICAgQkFDS19JTl9TVE9DSyA9ICdCQUNLX0lOX1NUT0NLJyxcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQnVkZ2V0IHtcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIGJ1ZGdldD86IG51bWJlcjtcbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIGN1cnJlbmN5PzogQ3VycmVuY3k7XG4gICAgZW5kRGF0ZT86IHN0cmluZztcbiAgICBzdGFydERhdGU/OiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBvcmdVbml0PzogQjJCVW5pdDtcbiAgICBjb3N0Q2VudGVycz86IENvc3RDZW50ZXJbXTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQnVkZ2V0c0xpc3Qge1xuICAgIGJ1ZGdldHM/OiBCdWRnZXRbXTtcbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbk1vZGVsO1xuICAgIHNvcnRzPzogU29ydE1vZGVsW107XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIENvc3RDZW50ZXIge1xuICAgIGFjdGl2ZT86IHN0cmluZztcbiAgICBhY3RpdmVGbGFnPzogYm9vbGVhbjtcbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIGN1cnJlbmN5PzogQ3VycmVuY3k7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBvcmlnaW5hbENvZGU/OiBzdHJpbmc7XG4gICAgdW5pdD86IEIyQlVuaXQ7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIENvc3RDZW50ZXJzTGlzdCB7XG4gICAgY29zdENlbnRlcnM6IENvc3RDZW50ZXJbXTtcbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbk1vZGVsO1xuICAgIHNvcnRzPzogU29ydE1vZGVsW107XG4gIH1cblxuICAvLyBUT0RPKCM4ODc4KTogV2hpY2ggbW9kZWxzIHdlIGNhbiByZW1vdmUgZnJvbSBoZXJlP1xuICBleHBvcnQgaW50ZXJmYWNlIE9yZ1VuaXRVc2VyR3JvdXAge1xuICAgIG1lbWJlcnM/OiBCMkJVc2VyW107XG4gICAgbWVtYmVyc0NvdW4/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBvcmdVbml0PzogQjJCVW5pdDtcbiAgICBwZXJtaXNzaW9ucz86IFBlcm1pc3Npb25bXTtcbiAgICByb2xlcz86IGFueTtcbiAgICBzZWxlY3RlZD86IGJvb2xlYW47XG4gICAgc3ViR3JvdXBzPzogYW55O1xuICAgIHVpZD86IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3JnVW5pdFVzZXJHcm91cExpc3Qge1xuICAgIG9yZ1VuaXRVc2VyR3JvdXBzOiBPcmdVbml0VXNlckdyb3VwW107XG4gICAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb25Nb2RlbDtcbiAgICBzb3J0cz86IFNvcnRNb2RlbFtdO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBCMkJVbml0Tm9kZSB7XG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICBjaGlsZHJlbj86IEIyQlVuaXROb2RlW107XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBwYXJlbnQ/OiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEIyQlVuaXROb2RlTGlzdCB7XG4gICAgdW5pdE5vZGVzPzogQjJCVW5pdE5vZGVbXTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQjJCVXNlciBleHRlbmRzIFVzZXIge1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgYXBwcm92ZXJzPzogW107XG4gICAgb3JnVW5pdD86IEIyQlVuaXQ7XG4gICAgcm9sZXM/OiBzdHJpbmdbXTtcbiAgICBzZWxlY3RlZD86IGJvb2xlYW47XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIE9yZ1VuaXRVc2VyTGlzdCB7XG4gICAgdXNlcnM6IEIyQlVzZXJbXTtcbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbk1vZGVsO1xuICAgIHNvcnRzPzogU29ydE1vZGVsW107XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEIyQkFwcHJvdmFsUHJvY2VzcyB7XG4gICAgY29kZT86IHN0cmluZztcbiAgICBuYW1lPzogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBCMkJBcHByb3ZhbFByb2Nlc3NMaXN0IHtcbiAgICBhcHByb3ZhbFByb2Nlc3Nlcz86IEIyQkFwcHJvdmFsUHJvY2Vzc1tdO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBCMkJVbml0IHtcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIGFkZHJlc3Nlcz86IEFkZHJlc3NbXTtcbiAgICB1aWQ/OiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBwYXJlbnRPcmdVbml0PzogUGFydGlhbDxCMkJVbml0PjtcbiAgICBhcHByb3ZhbFByb2Nlc3M/OiBCMkJBcHByb3ZhbFByb2Nlc3M7XG4gICAgYWRtaW5pc3RyYXRvcnM/OiBCMkJVc2VyW107XG4gICAgYXBwcm92ZXJzPzogQjJCVXNlcltdO1xuICAgIGN1c3RvbWVycz86IEIyQlVzZXJbXTtcbiAgICBtYW5hZ2Vycz86IEIyQlVzZXJbXTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXJBcHByb3ZhbFBlcm1pc3Npb25UeXBlIHtcbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIE9yZGVyQXBwcm92YWxQZXJtaXNzaW9uVHlwZUxpc3Qge1xuICAgIG9yZGVyQXBwcm92YWxQZXJtaXNzaW9uVHlwZXM/OiBPcmRlckFwcHJvdmFsUGVybWlzc2lvblR5cGVbXTtcbiAgfVxuXG4gIGV4cG9ydCBlbnVtIFBlcmlvZCB7XG4gICAgREFZID0gJ0RBWScsXG4gICAgV0VFSyA9ICdXRUVLJyxcbiAgICBNT05USCA9ICdNT05USCcsXG4gICAgUVVBUlRFUiA9ICdRVUFSVEVSJyxcbiAgICBZRUFSID0gJ1lFQVInLFxuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uIHtcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgY3VycmVuY3k/OiBDdXJyZW5jeTtcbiAgICBvcmRlckFwcHJvdmFsUGVybWlzc2lvblR5cGU/OiBPcmRlckFwcHJvdmFsUGVybWlzc2lvblR5cGU7XG4gICAgb3JnVW5pdD86IEIyQlVuaXROb2RlO1xuICAgIHBlcmlvZFJhbmdlPzogUGVyaW9kO1xuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgICB0cmVzaG9sZD86IG51bWJlcjtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbnNMaXN0IHtcbiAgICBvcmRlckFwcHJvdmFsUGVybWlzc2lvbnM/OiBQZXJtaXNzaW9uW107XG4gICAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb25Nb2RlbDtcbiAgICBzb3J0cz86IFNvcnRNb2RlbFtdO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBSZXBsZW5pc2htZW50T3JkZXIge1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgYXBwbGllZE9yZGVyUHJvbW90aW9ucz86IFByb21vdGlvblJlc3VsdFtdO1xuICAgIGFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucz86IFByb21vdGlvblJlc3VsdFtdO1xuICAgIGFwcGxpZWRWb3VjaGVycz86IFZvdWNoZXJbXTtcbiAgICBjYWxjdWxhdGVkPzogYm9vbGVhbjtcbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIGNvc3RDZW50ZXI/OiBDb3N0Q2VudGVyO1xuICAgIGRlbGl2ZXJ5QWRkcmVzcz86IEFkZHJlc3M7XG4gICAgZGVsaXZlcnlDb3N0PzogUHJpY2U7XG4gICAgZGVsaXZlcnlJdGVtc1F1YW50aXR5PzogbnVtYmVyO1xuICAgIGRlbGl2ZXJ5TW9kZT86IERlbGl2ZXJ5TW9kZTtcbiAgICBkZWxpdmVyeU9yZGVyR3JvdXBzPzogRGVsaXZlcnlPcmRlckVudHJ5R3JvdXBbXTtcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICBlbnRyaWVzPzogT3JkZXJFbnRyeVtdO1xuICAgIGV4cGlyYXRpb25UaW1lPzogc3RyaW5nO1xuICAgIGZpcnN0RGF0ZT86IHN0cmluZztcbiAgICBndWlkPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgbmV0PzogYm9vbGVhbjtcbiAgICBvcmRlckRpc2NvdW50cz86IFByaWNlO1xuICAgIHBheW1lbnRJbmZvPzogUGF5bWVudERldGFpbHM7XG4gICAgcGF5bWVudFN0YXR1cz86IHN0cmluZztcbiAgICBwYXltZW50VHlwZT86IFBheW1lbnRUeXBlO1xuICAgIHBpY2t1cEl0ZW1zUXVhbnRpdHk/OiBudW1iZXI7XG4gICAgcGlja3VwT3JkZXJHcm91cHM/OiBQaWNrdXBPcmRlckVudHJ5R3JvdXBbXTtcbiAgICBwb3RlbnRpYWxPcmRlclByb21vdGlvbnM/OiBQcm9tb3Rpb25SZXN1bHRbXTtcbiAgICBwb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucz86IFByb21vdGlvblJlc3VsdFtdO1xuICAgIHByb2R1Y3REaXNjb3VudHM/OiBQcmljZTtcbiAgICBwdXJjaGFzZU9yZGVyTnVtYmVyPzogc3RyaW5nO1xuICAgIHJlcGxlbmlzaG1lbnRPcmRlckNvZGU/OiBzdHJpbmc7XG4gICAgc2F2ZVRpbWU/OiBzdHJpbmc7XG4gICAgc2F2ZWRCeT86IFByaW5jaXBhbDtcbiAgICBzaXRlPzogc3RyaW5nO1xuICAgIHN0b3JlPzogc3RyaW5nO1xuICAgIHN1YlRvdGFsPzogUHJpY2U7XG4gICAgdG90YWxEaXNjb3VudHM/OiBQcmljZTtcbiAgICB0b3RhbEl0ZW1zPzogbnVtYmVyO1xuICAgIHRvdGFsUHJpY2U/OiBQcmljZTtcbiAgICB0b3RhbFByaWNlV2l0aFRheD86IFByaWNlO1xuICAgIHRvdGFsVGF4PzogUHJpY2U7XG4gICAgdG90YWxVbml0Q291bnQ/OiBudW1iZXI7XG4gICAgdHJpZ2dlcj86IFRyaWdnZXI7XG4gICAgdXNlcj86IFByaW5jaXBhbDtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgUmVwbGVuaXNobWVudE9yZGVyTGlzdCB7XG4gICAgcmVwbGVuaXNobWVudE9yZGVycz86IFJlcGxlbmlzaG1lbnRPcmRlcltdO1xuICAgIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uTW9kZWw7XG4gICAgc29ydHM/OiBTb3J0TW9kZWxbXTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgVHJpZ2dlciB7XG4gICAgYWN0aXZhdGlvblRpbWU/OiBzdHJpbmc7XG4gICAgZGlzcGxheVRpbWVUYWJsZT86IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgU2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybSB7XG4gICAgZGF5c09mV2Vlaz86IERheXNPZldlZWtbXTtcbiAgICBudGhEYXlPZk1vbnRoPzogc3RyaW5nO1xuICAgIG51bWJlck9mRGF5cz86IHN0cmluZztcbiAgICBudW1iZXJPZldlZWtzPzogc3RyaW5nO1xuICAgIHJlY3VycmVuY2VQZXJpb2Q/OiBzdHJpbmc7XG4gICAgcmVwbGVuaXNobWVudFN0YXJ0RGF0ZT86IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBlbnVtIERheXNPZldlZWsge1xuICAgIE1PTkRBWSA9ICdNT05EQVknLFxuICAgIFRVRVNEQVkgPSAnVFVFU0RBWScsXG4gICAgV0VETkVTREFZID0gJ1dFRE5FU0RBWScsXG4gICAgVEhVUlNEQVkgPSAnVEhVUlNEQVknLFxuICAgIEZSSURBWSA9ICdGUklEQVknLFxuICAgIFNBVFVSREFZID0gJ1NBVFVSREFZJyxcbiAgICBTVU5EQVkgPSAnU1VOREFZJyxcbiAgfVxuXG4gIGV4cG9ydCBlbnVtIE9yZGVyQXBwcm92YWxEZWNpc2lvblZhbHVlIHtcbiAgICBBUFBST1ZFID0gJ0FQUFJPVkUnLFxuICAgIFJFSkVDVCA9ICdSRUpFQ1QnLFxuICB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXJBcHByb3ZhbERlY2lzaW9uIHtcbiAgICBkZWNpc2lvbj86IE9yZGVyQXBwcm92YWxEZWNpc2lvblZhbHVlO1xuICAgIGNvbW1lbnQ/OiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIE9yZGVyQXBwcm92YWxSZWNvcmQge1xuICAgIGFwcHJvdmVyPzogUHJpbmNpcGFsO1xuICAgIGNvbW1lbnRzPzogc3RyaW5nO1xuICAgIHBlcm1pc3Npb25UeXBlcz86IE9yZGVyQXBwcm92YWxQZXJtaXNzaW9uVHlwZVtdO1xuICAgIHN0YXR1c0Rpc3BsYXk/OiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIE9yZGVyQXBwcm92YWwge1xuICAgIGFwcHJvdmFsRGVjaXNpb25SZXF1aXJlZD86IGJvb2xlYW47XG4gICAgY29kZT86IHN0cmluZztcbiAgICBjdXN0b21lck9yZGVyQXBwcm92YWxSZWNvcmRzPzogT3JkZXJBcHByb3ZhbFJlY29yZFtdO1xuICAgIG1lcmNoYW50T3JkZXJBcHByb3ZhbFJlY29yZHM/OiBPcmRlckFwcHJvdmFsUmVjb3JkW107XG4gICAgb3JkZXI/OiBPcmRlcjtcbiAgICB0cmlnZ2VyPzogVHJpZ2dlcjtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXJBcHByb3ZhbHNMaXN0IHtcbiAgICBvcmRlckFwcHJvdmFscz86IE9yZGVyQXBwcm92YWxbXTtcbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbk1vZGVsO1xuICAgIHNvcnRzPzogU29ydE1vZGVsW107XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIENhcnRNb2RpZmljYXRpb25MaXN0IHtcbiAgICBjYXJ0TW9kaWZpY2F0aW9ucz86IENhcnRNb2RpZmljYXRpb25bXTtcbiAgfVxufVxuIl19