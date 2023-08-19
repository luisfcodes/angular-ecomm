import { Component, Input, OnInit, booleanAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'org-orders-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {
  @Input({ required: true}) category!: string;

  //eslint-disable-next-line @angular-eslint/no-input-rename
  @Input({ transform: (value: number) => (value ? 'Delivered' : 'Shipped') }) isCategory!: string;

  @Input({ transform: booleanAttribute}) isValid = false;

  // @Input() set category(category: string) {
  //   if (category !== '') {
  //     console.log('Category is: ', category);
  //   } else {
  //     throw new Error('Category is required');
  //   }
  // }

  ngOnInit(): void {
    console.log('Category is: ', this.isCategory);
  }

}
