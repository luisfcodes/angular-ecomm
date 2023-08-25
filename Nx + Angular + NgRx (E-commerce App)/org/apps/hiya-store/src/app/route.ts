import { Routes } from "@angular/router";

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./test.component').then(m => m.TestComponent)
  },
  {
    path: 'product',
    loadComponent: () => import('@org/hiya-store/product').then(m => m.HiyaStoreProductComponent)
  }
]
