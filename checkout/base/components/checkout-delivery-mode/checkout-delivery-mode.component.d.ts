import { OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DeliveryMode } from '@spartacus/cart/base/root';
import { CheckoutDeliveryModesFacade } from '@spartacus/checkout/base/root';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { CheckoutConfigService } from '../services/checkout-config.service';
import { CheckoutStepService } from '../services/checkout-step.service';
import * as i0 from "@angular/core";
export declare class CheckoutDeliveryModeComponent implements OnInit, OnDestroy {
    protected fb: UntypedFormBuilder;
    protected checkoutConfigService: CheckoutConfigService;
    protected activatedRoute: ActivatedRoute;
    protected checkoutStepService: CheckoutStepService;
    protected checkoutDeliveryModesFacade: CheckoutDeliveryModesFacade;
    protected subscriptions: Subscription;
    protected busy$: BehaviorSubject<boolean>;
    selectedDeliveryModeCode$: Observable<string | undefined>;
    supportedDeliveryModes$: Observable<DeliveryMode[]>;
    backBtnText: string;
    mode: UntypedFormGroup;
    isUpdating$: Observable<boolean>;
    get deliveryModeInvalid(): boolean;
    constructor(fb: UntypedFormBuilder, checkoutConfigService: CheckoutConfigService, activatedRoute: ActivatedRoute, checkoutStepService: CheckoutStepService, checkoutDeliveryModesFacade: CheckoutDeliveryModesFacade);
    ngOnInit(): void;
    changeMode(code: string): void;
    next(): void;
    back(): void;
    getAriaChecked(code: string): boolean;
    protected onSuccess(): void;
    protected onError(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckoutDeliveryModeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckoutDeliveryModeComponent, "cx-delivery-mode", never, {}, {}, never, never, false>;
}
