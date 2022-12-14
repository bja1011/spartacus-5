import { MemoizedSelector } from '@ngrx/store';
import { Product } from '../../../model/product.model';
import { StateUtils } from '../../../state/utils/index';
import { EntityScopedLoaderState } from '../../../state/utils/scoped-loader/scoped-loader.state';
import { StateWithProduct } from '../product-state';
export declare const getProductState: MemoizedSelector<StateWithProduct, EntityScopedLoaderState<Product>>;
export declare const getSelectedProductStateFactory: (code: string, scope?: string) => MemoizedSelector<StateWithProduct, StateUtils.LoaderState<Product>>;
export declare const getSelectedProductFactory: (code: string, scope?: string) => MemoizedSelector<StateWithProduct, Product>;
export declare const getSelectedProductLoadingFactory: (code: string, scope?: string) => MemoizedSelector<StateWithProduct, boolean>;
export declare const getSelectedProductSuccessFactory: (code: string, scope?: string) => MemoizedSelector<StateWithProduct, boolean>;
export declare const getSelectedProductErrorFactory: (code: string, scope?: string) => MemoizedSelector<StateWithProduct, boolean>;
export declare const getAllProductCodes: MemoizedSelector<StateWithProduct, string[]>;
