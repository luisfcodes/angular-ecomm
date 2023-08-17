import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { productActions } from '@org/commom/store';
import { productFeature } from '@org/commom/store';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { Product } from '@org/commom/store';
import { cartActions } from '@org/commom/store';

@Component({
  selector: 'org-product',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() set categoryName(categoryName: string) {
    if (categoryName) {
      this.store.dispatch(productActions.loadProductByCategory({ category: categoryName }));
    } else {
      this.store.dispatch(productActions.loadProduct());
    }
  }
  // @Input() test!: string; Testing data from appRoutes

  products$ = this.store.select(productFeature.selectProducts);

  constructor(private readonly store: Store) {}

  addToCart(product: Product) {
    this.store.dispatch(cartActions.addProductToCart({ product }));
  }

}
