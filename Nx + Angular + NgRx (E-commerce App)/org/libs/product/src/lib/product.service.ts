import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './store/product.action';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  getProductByCategory(category: string) {
    return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`);
  }
}
