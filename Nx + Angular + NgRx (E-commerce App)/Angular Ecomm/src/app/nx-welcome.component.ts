import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-ecomm-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: '<h1>Welcome to Angular Ecomm NX!</h1>',
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
