import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CategoryService, getCategoriesActions, selectCategories } from '@org/category';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MainNavComponent, CommonModule],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'luisfcodes-workspace';

  // categories$ = inject(CategoryService).getCategories();
  categories$ = this.store.select(selectCategories);

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(getCategoriesActions());
  }
}
