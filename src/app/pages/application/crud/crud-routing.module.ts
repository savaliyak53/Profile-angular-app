import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud.component';
import { MovieImagesComponent } from './pages/movie-images/movie-images.component';

const routes: Routes = [
  {
    path: '',
    component: CrudComponent,
    children: [
      {
        path: 'movie-images',
        component: MovieImagesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudRoutingModule {}
