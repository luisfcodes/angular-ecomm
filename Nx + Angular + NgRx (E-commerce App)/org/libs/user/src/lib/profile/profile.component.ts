import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '@org/commom/store';
import { toSignal, toObservable } from '@angular/core/rxjs-interop'
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { User } from '@org/commom/store';
import { Store } from '@ngrx/store';
import { userFeature } from '@org/commom/store';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'org-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  mySignal = signal(0)

  transformedSignalIntoObservable = toObservable(this.mySignal) // toObservable is a function that converts a Signal into an Observable

  user = toSignal(this.userService.getUser()) // toSignal is a function that converts an Observable into a Signal

  fullName = computed(() => `${this.user()?.name.firstname} ${this.user()?.name.lastname}`) // computed receives a callback function that returns a value of the Signal

  profile$ = this.store.select(userFeature.selectUser)

  profileForm!: FormGroup

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private store: Store,
    public auth: AuthService
  ) { }

  get address(){
    return this.profileForm.get('address') as FormArray
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      id: [{value: '', disabled: true}, Validators.required],
      email: ['', Validators.required],
      phone: [''],
      name: this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
      }),
      address: this.fb.group({
        city: ['', Validators.required],
        street: [''],
        number: [''],
        zipcode: [''],
        geolocation: this.fb.group({
          lat: ['', Validators.required],
          long: ['', Validators.required],
        })
      }),
      // address: this.fb.array([
      //   this.addAddress()
      // ]),
    })

    this.loadProfile()
  }

  loadProfile() {
    // this.userService.getUser().subscribe((user: User) => {
    //   this.profileForm.patchValue(user)
    // })
    this.profile$.subscribe({
      next: (user: User | undefined) => {
        this.profileForm.patchValue(user || {})
      }
    })
  }

  addAddress() {
    return this.fb.group({
      city: ['', Validators.required],
      street: [''],
      number: [''],
      zipcode: [''],
      geolocation: this.fb.group({
        lat: ['', Validators.required],
        long: ['', Validators.required],
      })
    })
  }

  addControl(){
    this.address.push(this.addAddress())
  }

  updateProfile(){
    this.userService.updateUser(this.profileForm.getRawValue()).subscribe((user: User) => {
      console.log(user)
    })
  }
}
