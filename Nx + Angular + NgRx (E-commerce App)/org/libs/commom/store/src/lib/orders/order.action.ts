import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Order } from "./order.interface";

export const orderActions = createActionGroup({
  source: 'Order',
  events: {
    loadOrders: emptyProps(),
    placeOrder: props<{ order: Order }>(),
  }
})
