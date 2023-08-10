import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { LoginService } from './store/login.service';

export const loginGuard: CanMatchFn = () => {
  const isLoggedIn = inject(LoginService).isLoggedIn;
  const router = inject(Router);

  if (!isLoggedIn) {
    return router.navigate(['/login']);
  }

  return true;
};
