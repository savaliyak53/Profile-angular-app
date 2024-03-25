import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud.component';
import { MovieImagesComponent } from './pages/movie-images/movie-images.component';
import { routerHref } from '../../../../environments/environments.development';
import { ShowImagesComponent } from './pages/show-images/show-images.component';
import { ContinentsComponent } from './pages/continents/continents.component';
import { ContinentsFormComponent } from './pages/continents-form/continents-form.component';
import { ContriesComponent } from './pages/contries/contries.component';
import { CountriesFormComponent } from './pages/countries-form/countries-form.component';
import { CitiesComponent } from './pages/cities/cities.component';
import { CitiesFormComponent } from './pages/cities-form/cities-form.component';
import { ShowComponent } from './pages/show/show.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ShowFormComponent } from './pages/show-form/show-form.component';
import { MoviesFormComponent } from './pages/movies-form/movies-form.component';

const routes: Routes = [
  {
    path: '',
    component: CrudComponent,
    children: [
      {
        path: '',
        component: ShowImagesComponent,
      },
      {
        path: routerHref.movieImage,
        component: MovieImagesComponent,
      },
      {
        path: routerHref.showImage,
        component: ShowImagesComponent,
      },
      {
        path: routerHref.continentsList,
        component: ContinentsComponent,
      },
      {
        path: 'continents/:id',
        component: ContinentsFormComponent,
      },
      {
        path: routerHref.countriesList,
        component: ContriesComponent,
      },
      {
        path: 'countries/:id',
        component: CountriesFormComponent,
      },
      {
        path: routerHref.citiesList,
        component: CitiesComponent,
      },
      {
        path: 'cities/:id',
        component: CitiesFormComponent,
      },
      {
        path: routerHref.showList,
        component: ShowComponent,
      },
      {
        path: routerHref.movieList,
        component: MoviesComponent,
      },
      {
        path: 'shows/:id',
        component: ShowFormComponent,
      },
      {
        path: 'movies/:id',
        component: MoviesFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudRoutingModule {}
