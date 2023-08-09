import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { productActions } from '../store/product.action';
import { selectProducts, selectProductsByCategory } from '../store/product.selector';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'org-product',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() categoryName!: string;
  // @Input() test!: string; Testing data from appRoutes

  products$ = this.categoryName ? this.store.select(selectProductsByCategory(this.categoryName)) : this.store.select(selectProducts);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(productActions.loadProduct())
  }
}
