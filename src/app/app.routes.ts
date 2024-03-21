import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { LandingPageComponent } from './pages/application/landing-page/landing-page.component';
import { UserComponent } from './pages/user/user.component';
import { routerHref } from '../environments/environments.development';
import { authGuard } from './auth.guard';
import { UserServiceService } from './service/user/user-service.service';
import { inject } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: routerHref.home, pathMatch: 'full' },
  { path: routerHref.contact, component: ContactComponent },
  {
    path: routerHref.home,
    component: HomeComponent,
  },

  {
    path: routerHref.about,
    loadChildren: () =>
      import('../app/pages/about/about.routes').then((routes) => routes.routes),
  },

  //canDeActivedRoute
  {
    path: routerHref.signUp,
    component: SignupComponent,
    canDeactivate: [
      (comp: SignupComponent) => {
        return comp.resetForm();
      },
    ], //false lock the route
  },

  { path: routerHref.logIn, component: LoginComponent },

  //resolve Route
  {
    path: routerHref.user,
    component: UserComponent,
  },

  //canActive
  {
    path: routerHref.crud,
    loadChildren: () =>
      import('./pages/application/crud/crud.module').then(
        (mod) => mod.CrudModule
      ),
    canActivate: [authGuard],
  },

  // child route
  {
    path: routerHref.home,
    canActivateChild: [() => false],
    children: [
      { path: routerHref.landingPage, component: LandingPageComponent },
    ],
  },
];
