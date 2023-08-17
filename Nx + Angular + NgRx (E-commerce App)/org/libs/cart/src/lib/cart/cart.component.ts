import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { cartActions } from '../store/cart.action'
import { userCartSelector } from '../store/cart.selector'
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from '@org/product';

@Component({
  selector: 'org-cart',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  cart$ = this.store.select(userCartSelector)

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(cartActions.loadCartById({id: 1}))
  }

  delete(product: Product){
    console.log(product)
  }
}
