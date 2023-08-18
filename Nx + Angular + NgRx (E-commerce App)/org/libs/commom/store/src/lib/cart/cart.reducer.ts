import { createReducer, on } from "@ngrx/store";
import { cartActions, Cart } from "./cart.action";

export interface CartState {
  cart: Cart[];
  currentCart: Cart;
  error: string;
}

const initialState: CartState = {
  cart: [],
  currentCart: {
    id: 0,
    userId: 0,
    date: new Date(),
    products: [],
    productDetails: []
  },
  error: ''
}

export const cartReducer = createReducer(
  initialState,
  on(cartActions.cartSuccess, (state, action) => ({
    ...state,
    cart: action.cart,
    error: ''
  })),
  on(cartActions.cartFailure, (state, action) => ({
    ...state,
    cart: [],
    error: action.error
  })),
  on(cartActions.cartByIdSuccess, (state, action) => ({
    ...state,
    currentCart: action.cart,
    error: ''
  })),
  on(cartActions.cartByIdFailure, (state, action) => ({
    ...state,
    currentCart: initialState.currentCart,
    error: action.error
  })),
  on(cartActions.addProductToCart, (state, action) => {

    let product = []

    if (state.currentCart.products.filter((p) => p.productId === action.product.id).length > 0) {
      product = state.currentCart.products.map((p) => {
        if (p.productId === action.product.id) {
          return {
            ...p,
            quantity: p.quantity + 1
          }
        }
        return p
      })
    } else {
      product = [
        ...state.currentCart.products,
        {
          productId: action.product.id,
          quantity: 1
        }
      ]
    }

    return {
      ...state,
      cart: [...state.cart],
      error: '',
      currentCart: {
        ...state.currentCart,
        products: product
      }
    }
  })
)
