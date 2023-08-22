import { Component } from '@angular/core';
import { HiyaStoreProductComponent } from '@org/hiya-store/product';

@Component({
  standalone: true,
  imports: [HiyaStoreProductComponent],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
}
