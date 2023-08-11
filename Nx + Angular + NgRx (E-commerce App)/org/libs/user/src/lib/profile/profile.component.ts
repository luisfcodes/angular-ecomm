import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../store/user.service';
import { toSignal, toObservable } from '@angular/core/rxjs-interop'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'org-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  mySignal = signal(0)
  transformedSignalIntoObservable = toObservable(this.mySignal) // toObservable is a function that converts a Signal into an Observable

  user = toSignal(this.userService.getUser()) // toSignal is a function that converts an Observable into a Signal

  fullName = computed(() => `${this.user()?.name.firstname} ${this.user()?.name.lastname}`) // computed receives a callback function that returns a value of the Signal

  profileForm!: FormGroup

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      id: [this.user()?.id, Validators.required],
      email: this.user()?.email,
      phone: this.user()?.phone,
      address: this.fb.group({
        city: ['', Validators.required],
        street: this.user()?.address.street,
        number: this.user()?.address.number,
        zipcode: this.user()?.address.zipcode,
        geolocation: this.fb.group({
          lat: ['', Validators.required],
          long: ['', Validators.required],
        })
      }),
    })
  }
}
