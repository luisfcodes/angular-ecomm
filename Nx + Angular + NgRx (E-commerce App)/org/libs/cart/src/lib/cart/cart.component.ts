import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { cartActions } from '@org/commom/store'
import { userCartSelector } from '@org/commom/store'
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from '@org/commom/store';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'org-cart',
  standalone: true,
  imports: [CommonModule, ProductListComponent, MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  cart$ = this.store.select(userCartSelector)

  constructor(
    private readonly store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(cartActions.loadCartById({ id: 1 }))
  }

  delete(product: Product){
    console.log(product)
  }

  checkout(){
    this.router.navigate(['/checkout'])
  }
}
