import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../store/login.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { userActions } from '../../../../commom/store/src/lib/user/user.action';
import { userFeature } from '@org/commom/store';
import { cartActions } from '@org/commom/store';

@Component({
  selector: 'org-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl('mor_2314', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('83r5^_', { nonNullable: true, validators: [Validators.required, Validators.minLength(5), Validators.maxLength(16)] }),
  })

  constructor(
    private loginService: LoginService,
    private router: Router,
    private store: Store
  ) { }

  login() {
    if (this.loginForm.value.username && this.loginForm.value.password) {
      this.loginService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe({
        next: () => {
          this.loginService.isLoggedIn = true;
          this.store.dispatch(userActions.loadUserProfile({ id: 2 }))
          this.store.dispatch(cartActions.loadCartById({id: 1}))
          this.store.select(userFeature.selectUser).subscribe({
            next: (res) => {
              console.log(res)
            }
          })
          this.router.navigate(['/product'])
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }
}
