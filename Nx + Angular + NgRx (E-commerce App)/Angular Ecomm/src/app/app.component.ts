import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomeComponent } from '@angular-ecomm/home'

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, HomeComponent],
  selector: 'angular-ecomm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-ecomm';
}
