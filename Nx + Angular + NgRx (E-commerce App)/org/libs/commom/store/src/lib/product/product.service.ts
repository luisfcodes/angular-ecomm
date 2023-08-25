import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { ID } from 'appwrite';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = 'https://cloud.appwrite.io/v1';
  databaseId = '64e79ecba4cbbd19c7d0';
  collectionId = '64e7cbbd736536c1cf09';
  projectId = '64e79d99b5e911b60004';

  header = new HttpHeaders().set('X-Appwrite-Project', this.projectId);

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  getProductByCategory(category: string) {
    return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`);
  }

  addProduct(product: Product) {
    const { name, description, imageUrl, price, quantity } = product

    return this.http.post<Product>(
      `${this.BASE_URL}/databases/${this.databaseId}/collections/${this.collectionId}/documents`,
      {
        documentId: ID.unique(),
        data:
        {
          name,
          description,
          imageUrl,
          price,
          quantity
        }
      },
      {
        headers: this.header
      }
    );
  }
}
