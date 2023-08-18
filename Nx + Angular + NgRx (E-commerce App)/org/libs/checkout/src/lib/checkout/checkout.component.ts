import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Store } from '@ngrx/store';
import { userCartSelector } from '@org/commom/store';
import { TotalAmountPipe } from '../total-amount.pipe';

@Component({
  selector: 'org-checkout',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    TotalAmountPipe
  ],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;

  cart$ = this.store.select(userCartSelector)

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      creditCartNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      creditCartExpiration: ['', Validators.required],
      creditCartCVV: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      nameOnCard: ['', Validators.required],
    });
  }

  placeOrder(cartId: number){
    console.log('Placing order for cart id: ', cartId)
  }
}
