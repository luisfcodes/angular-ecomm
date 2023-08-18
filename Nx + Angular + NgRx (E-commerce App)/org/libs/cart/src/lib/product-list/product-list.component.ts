import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@org/commom/store';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'org-product-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  columnsToDisplay = ['title', 'price', 'quantity' , 'category', 'total_price', 'actions' ];

  @Input() products: Product[] = [];
  @Output() deleteProduct = new EventEmitter<Product>();

  delete(product: Product) {
    this.deleteProduct.emit(product);
  }
}
