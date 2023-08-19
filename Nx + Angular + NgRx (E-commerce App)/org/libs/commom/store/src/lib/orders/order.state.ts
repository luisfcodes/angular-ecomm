import { createFeature, createReducer, on } from "@ngrx/store";
import { Order } from "./order.interface";
import { orderActions } from "./order.action";

interface OrderState {
  orders: Order[];
  error: string;
}

const initialState: OrderState = {
  orders: [],
  error: '',
}

const orderReducer = createReducer(
  initialState,
  on(orderActions.placeOrder, (state, action) => ({
    ...state,
    orders: [...state.orders, action.order]
  })
  )
)

export const orderFeature = createFeature({
  name: 'order',
  reducer: orderReducer,
  extraSelectors: ({ selectOrders, selectError}) => ({
    selectOrders,
    selectError
  })
})
