import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { loadProducts, productFeature, loadProductsByCategory } from '@org/product';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full',
  },
  {
    path: 'product',
    loadComponent: () => import('@org/product').then((m) => m.ProductComponent),
    providers: [
      provideState(productFeature),
      provideEffects({loadProducts, loadProductsByCategory})
    ],
  },
  {
    path: 'product/:categoryName',
    loadComponent: () => import('@org/product').then((m) => m.ProductComponent),
    data: {test: 'Testing data from appRoutes'},
    providers: [
      provideState(productFeature),
      provideEffects({loadProducts, loadProductsByCategory})
    ],
  },
];
