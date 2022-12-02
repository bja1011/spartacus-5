import { LoaderState } from '../loader/loader-state';
import { EntityState } from '../entity/entity-state';
export interface ScopedLoaderState<T> {
    [scope: string]: LoaderState<T>;
}
export declare type EntityScopedLoaderState<T> = EntityState<ScopedLoaderState<T>>;
