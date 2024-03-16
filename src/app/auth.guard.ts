import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { routerHref } from '../environments/environments.development';
import { RedirectService } from './service/redirect/redirect.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const token = localStorage.getItem('token');
  const router = inject(Router);
  const redirect = inject(RedirectService);

  if (token) {
    return true;
  } else {
    redirect.setRedirectUrl(state.url);
    router.navigateByUrl(routerHref.logIn);
    return false;
  }
};
