import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { LandingPageComponent } from './pages/application/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'landing-page',
    component: LandingPageComponent,
  },

  {
    path: 'about',
    loadChildren: () =>
      import('../app/pages/about/about.routes').then((routes) => routes.routes),
  },
];
