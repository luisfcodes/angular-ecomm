import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from './store/cart.action';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {}

  getCart() {
    return this.http.get<Cart[]>('https://fakestoreapi.com/carts');
  }
}
