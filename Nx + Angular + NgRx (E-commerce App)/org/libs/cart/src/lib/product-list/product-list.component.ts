import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@org/commom/store';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'org-product-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  columnsToDisplay = ['title', 'price', 'category', 'actions'];

  @Input() products: Product[] = [];
  @Output() deleteProduct = new EventEmitter<Product>();

  delete(product: Product) {
    this.deleteProduct.emit(product);
  }
}
