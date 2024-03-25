import { Component } from '@angular/core';
import { IMovieShowList } from './type';
import { routerHref } from '../../../../environments/environments.development';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
})
export class CrudComponent {
  movieShowToggle: boolean = true;
  handleMovieShow() {
    this.movieShowToggle = !this.movieShowToggle;
  }

  genericToggle: boolean = false;
  handleGenric() {
    this.genericToggle = !this.genericToggle;
  }

  movieShowList: IMovieShowList[] = [
    {
      id: 1,
      url: routerHref.showImage,
      icon: ' fa-solid fa-store',
      name: ' All Products',
    },
    {
      id: 2,
      url: routerHref.movieImage,
      icon: 'fas fa-film me-2',
      name: 'Movies Image',
    },
    {
      id: 3,
      url: routerHref.showList,
      icon: 'fas fa-desktop me-2',
      name: 'Shows List',
    },
    {
      id: 4,
      url: routerHref.movieList,
      icon: 'fas fa-film me-2',
      name: 'Movie List',
    },
    {
      id: 5,
      url: routerHref.newShow,
      icon: 'fas fa-desktop me-2',
      name: 'New Show',
    },
    {
      id: 6,
      url: routerHref.newMovies,
      icon: 'fas fa-desktop me-2',
      name: 'New movies',
    },
  ];

  Generics: IMovieShowList[] = [
    {
      id: 1,
      url: routerHref.continentsList,
      icon: 'fas fa-globe me-2',
      name: 'Continents List',
    },
    {
      id: 2,
      url: routerHref.countriesList,
      icon: 'far fa-flag me-2',
      name: 'Countries List',
    },
    {
      id: 3,
      url: routerHref.citiesList,
      icon: 'fas fa-city me-2',
      name: 'Cities List',
    },
    {
      id: 4,
      url: routerHref.newContinent,
      icon: 'fas fa-globe me-2',
      name: 'New Continent',
    },
    {
      id: 5,
      url: routerHref.newCountry,
      icon: 'far fa-flag me-2',
      name: 'New Country',
    },
    {
      id: 6,
      url: routerHref.newCity,
      icon: 'fas fa-city me-2',
      name: 'New City',
    },
  ];
}
