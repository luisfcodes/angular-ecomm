import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '@org/commom/store';

@Pipe({
  name: 'totalAmount',
  standalone: true,
})
export class TotalAmountPipe implements PipeTransform {
  transform(products: Product[]): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(
      products.reduce((acc, product) => acc + product.price * product.quantity, 0)
    )
  }
}
