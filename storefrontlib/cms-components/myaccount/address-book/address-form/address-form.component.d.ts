import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Address, AddressValidation, Country, GlobalMessageService, Region, Title, TranslationService, UserAddressService, UserService } from '@spartacus/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { LaunchDialogService } from '../../../../layout';
import * as i0 from "@angular/core";
export declare class AddressFormComponent implements OnInit, OnDestroy {
    protected fb: UntypedFormBuilder;
    protected userService: UserService;
    protected userAddressService: UserAddressService;
    protected globalMessageService: GlobalMessageService;
    protected translation: TranslationService;
    protected launchDialogService: LaunchDialogService;
    countries$: Observable<Country[]>;
    titles$: Observable<Title[]>;
    regions$: Observable<Region[]>;
    selectedCountry$: BehaviorSubject<string>;
    addresses$: Observable<Address[]>;
    addressData: Address;
    actionBtnLabel: string;
    cancelBtnLabel: string;
    setAsDefaultField: boolean;
    showTitleCode: boolean;
    showCancelBtn: boolean;
    submitAddress: EventEmitter<any>;
    backToAddress: EventEmitter<any>;
    element: ElementRef;
    subscription: Subscription;
    addressForm: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder, userService: UserService, userAddressService: UserAddressService, globalMessageService: GlobalMessageService, translation: TranslationService, launchDialogService: LaunchDialogService);
    ngOnInit(): void;
    getTitles(): Observable<Title[]>;
    protected handleAddressVerificationResults(results: AddressValidation): void;
    countrySelected(country: Country | undefined): void;
    regionSelected(region: Region): void;
    toggleDefaultAddress(): void;
    back(): void;
    verifyAddress(): void;
    openSuggestedAddress(results: AddressValidation): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddressFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddressFormComponent, "cx-address-form", never, { "addressData": "addressData"; "actionBtnLabel": "actionBtnLabel"; "cancelBtnLabel": "cancelBtnLabel"; "setAsDefaultField": "setAsDefaultField"; "showTitleCode": "showTitleCode"; "showCancelBtn": "showCancelBtn"; }, { "submitAddress": "submitAddress"; "backToAddress": "backToAddress"; }, never, never, false>;
}
