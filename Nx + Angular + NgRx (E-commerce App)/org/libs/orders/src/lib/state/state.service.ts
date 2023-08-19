import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface OrderStatus {
  id: number;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class StateService extends ComponentStore<OrderStatus> {

  constructor() {
    super({ id: 0, status: '' });
  }

  readonly status$ = this.select((state) => state.status);

  readonly updateStatus = this.updater((state, status: string) => {
    return { ...state, status };
  })
}
