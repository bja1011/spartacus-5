import { CsAgentAuthService } from '@spartacus/asm/root';
import { AuthService, WindowRef } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class AsmComponentService {
    protected authService: AuthService;
    protected csAgentAuthService: CsAgentAuthService;
    protected winRef: WindowRef;
    constructor(authService: AuthService, csAgentAuthService: CsAgentAuthService, winRef: WindowRef);
    logoutCustomerSupportAgentAndCustomer(): void;
    logoutCustomer(): void;
    isCustomerEmulationSessionInProgress(): Observable<boolean>;
    /**
     * We're currently only removing the persisted storage in the browser
     * to ensure the ASM experience isn't loaded on the next visit. There are a few
     * optimizations we could think of:
     * - drop the `asm` parameter from the URL, in case it's still there
     * - remove the generated UI from the DOM (outlets currently do not support this)
     */
    unload(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AsmComponentService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AsmComponentService>;
}
