import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { LandingPageComponent } from './pages/application/landing-page/landing-page.component';
import { UserComponent } from './pages/user/user.component';
import { routerHref } from '../environments/environments.development';
import { CrudComponent } from './pages/application/crud/crud.component';

export const routes: Routes = [
  { path: '', redirectTo: routerHref.home, pathMatch: 'full' },
  { path: routerHref.home, component: HomeComponent },
  { path: routerHref.contact, component: ContactComponent },
  { path: routerHref.signUp, component: SignupComponent },
  { path: routerHref.logIn, component: LoginComponent },
  { path: routerHref.user, component: UserComponent },
  {
    path: routerHref.crud,
    loadChildren: () =>
      import('./pages/application/crud/crud.module').then(
        (mod) => mod.CrudModule
      ),
  },

  {
    path: routerHref.about,
    loadChildren: () =>
      import('../app/pages/about/about.routes').then((routes) => routes.routes),
  },

  // child route
  {
    path: routerHref.home,
    children: [
      { path: routerHref.landingPage, component: LandingPageComponent },
    ],
  },
];
