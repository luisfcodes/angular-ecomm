import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { Cart, cartActions } from "./cart.action";
import { CartService } from "./cart.service";

export const loadCart = createEffect(
  (actions$ = inject(Actions), cartService = inject(CartService)) => {
    return actions$.pipe(
      ofType(cartActions.loadCart),
      exhaustMap(() =>
        cartService.getCart().pipe(
          map((cart: Cart[]) =>
            cartActions.cartSuccess({ cart }),
          ),
          catchError((error) => of(cartActions.cartFailure({ error })))
        )
      )
    );
  },
  { functional: true }
);

export const loadCartById = createEffect(
  (actions$ = inject(Actions), cartService = inject(CartService)) => {
    return actions$.pipe(
      ofType(cartActions.loadCartById),
      exhaustMap(({ id }) =>
        cartService.getCartById(id).pipe(
          map((cart: Cart) =>
            cartActions.cartByIdSuccess({ cart }),
          ),
          catchError((error) => of(cartActions.cartByIdFailure({ error })))
        )
      )
    );
  },
  { functional: true }
);
