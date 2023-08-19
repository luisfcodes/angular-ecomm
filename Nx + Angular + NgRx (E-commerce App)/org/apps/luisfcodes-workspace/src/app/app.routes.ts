import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { cartFeature, loadCart, loadCartById, orderFeature } from '@org/commom/store';
import { loadProducts, productFeature, loadProductsByCategory } from '@org/commom/store';

//eslint-disable-next-line
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
      provideState(cartFeature),
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
      provideEffects({ loadCart, loadCartById })
    ],
  },
  {
    path: 'profile',
    loadComponent: () => import('@org/user').then((m) => m.ProfileComponent),
    canMatch: [loginGuard],
  },
  {
    path: 'orders',
    loadComponent: () => import('@org/orders').then((m) => m.OrdersComponent),
  },
  {
    path: 'checkout',
    loadComponent: () => import('@org/checkout').then((m) => m.CheckoutComponent),
    providers: [
      provideState(orderFeature),
    ]
  }
];
