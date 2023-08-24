import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductActions, ProductService } from './state/product.service';
import { RxActionFactory } from '@rx-angular/state/actions';
import { tap } from 'rxjs';
import { Account, Client, ID, Databases } from 'appwrite';
import { AppWriteService } from '@org/app-write';

@Component({
  selector: 'org-hiya-store-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hiya-store-product.component.html',
  styleUrls: ['./hiya-store-product.component.css'],
  providers: [ProductService, RxActionFactory]
})
export class HiyaStoreProductComponent implements OnInit {

  product$ = this.productState.select();
  actions = this.factory.create();
  products$ = this.actions.addProduct$.pipe(
    tap((product) => {
      console.log('product', product);
    })
  );

  // client = new Client();

  constructor(
    private productState: ProductService,
    private factory: RxActionFactory<ProductActions>,
    private appWriteService: AppWriteService
  ) {
    this.productState.set({
      id: '1',
      name: 'Product 1',
      description: 'Product 1 description',
      price: 100,
      imageUrl: 'https://picsum.photos/200',
      quantity: 1
    });

    // this.client
    //   .setEndpoint('https://cloud.appwrite.io/v1')
    //   .setProject('64e79d99b5e911b60004');

  }

  ngOnInit(): void {
    const account = new Account(this.appWriteService.client);

    // account.create(ID.unique(), 'luisfcodes@example.com', 'password', 'John Doe')
    //   .then(response => {
    //     console.log(response);
    //   }, error => {
    //     console.log(error);
    //   })

    const db = new Databases(this.appWriteService.client)
    db.createDocument('64e79ecba4cbbd19c7d0', '64e7cbbd736536c1cf09', ID.unique(), {
      name: 'Product 1',
      // description: 'Product 1 description',
      // price: 100,
      // imageUrl: 'https://picsum.photos/200',
      // quantity: 1

    })
  }

  addProduct() {
    this.actions.addProduct({
      id: '2',
      name: 'Product 2',
      description: 'Product 2 description',
      price: 200,
      imageUrl: 'https://picsum.photos/200',
      quantity: 1
    })
  }
}
