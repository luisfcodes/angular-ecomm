import { Injectable } from '@angular/core';
import { Product } from './product';
import { RxState } from '@rx-angular/state';
import { RxActionFactory } from '@rx-angular/state/actions';

export interface ProductActions {
  addProduct: Product | Product[];

  // reloadProduct: boolean;
  // deleteProduct: Product;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService extends RxState<Product> {

  constructor(private actionsFactory: RxActionFactory<ProductActions>) {
    super();
    // this.actionsFactory.create();
  }
}
