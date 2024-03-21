import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  CanDeactivateFn,
} from '@angular/router';
import { routerHref } from '../environments/environments.development';
import { RedirectService } from './service/redirect/redirect.service';
import { ContactComponent } from './pages/contact/contact.component';

// function
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
    redirect.setRedirectUrl(state.url, state);
    router.navigateByUrl(routerHref.logIn);
    return false;
  }
};

// export const authDeactive: CanDeactivateFn = (
//   component: ContactComponent,
//   currentRoute: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot,
//   nextState: RouterStateSnapshot
// ) => {
//   return false;
// };
