import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { cartFeature, loadCart } from '@org/cart';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { loadProducts, productFeature, loadProductsByCategory } from '@org/product';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { loginGuard } from '@org/user'

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('@org/user').then((m) => m.LoginComponent),
  },
  {
    path: 'product',
    loadComponent: () => import('@org/product').then((m) => m.ProductComponent),
    providers: [
      provideState(productFeature),
      provideEffects({loadProducts, loadProductsByCategory})
    ],
    canMatch: [loginGuard],
  },
  {
    path: 'product/:categoryName',
    loadComponent: () => import('@org/product').then((m) => m.ProductComponent),
    data: {test: 'Testing data from appRoutes'},
    providers: [
      provideState(productFeature),
      provideEffects({loadProducts, loadProductsByCategory})
    ],
    canMatch: [loginGuard],
  },
  {
    path: 'cart',
    loadComponent: () => import('@org/cart').then((m) => m.CartComponent),
    providers: [
      provideState(cartFeature),
      provideEffects({ loadCart })
    ],
  },
];
