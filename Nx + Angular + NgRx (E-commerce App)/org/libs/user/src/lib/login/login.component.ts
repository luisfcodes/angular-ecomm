import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../store/login.service';
import { Router } from '@angular/router';

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
    username: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    password: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.minLength(5), Validators.maxLength(16)]}),
  })

  constructor(private loginService: LoginService, private router: Router) { }

  login(){
    if(this.loginForm.value.username && this.loginForm.value.password){
      this.loginService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe({
        next: (res) => {
          console.log(res)
          this.loginService.isLoggedIn = true;
          this.router.navigate(['/product'])
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }
}
