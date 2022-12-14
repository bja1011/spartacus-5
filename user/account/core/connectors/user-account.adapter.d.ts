import { Observable } from 'rxjs';
import { User } from '@spartacus/user/account/root';
export declare abstract class UserAccountAdapter {
    abstract load(userId: string): Observable<User>;
}
