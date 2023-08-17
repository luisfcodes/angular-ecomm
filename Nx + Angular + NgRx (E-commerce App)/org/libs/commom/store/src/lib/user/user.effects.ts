import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { userActions } from "./user.action";
import { UserService } from "./user.service";
import { User } from "./user.interface";

export const loadUserProfile = createEffect(
  (actions$ = inject(Actions), userService = inject(UserService)) => {
    return actions$.pipe(
      ofType(userActions.loadUserProfile),
      exhaustMap(({ id }) =>
        userService.getUserById(id).pipe(
          map((user: User) =>
            userActions.loadUserProfileSuccess({ user }),
          ),
          catchError((error) => of(userActions.loadUserProfileFailure({ error })))
        )
      )
    );
  },
  { functional: true }
);
