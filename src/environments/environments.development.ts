export const StrongPasswordRegx: RegExp =
  /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

const crudSubRoute = {
  movieShows: {
    showImage: 'shows-images',
    movieImage: 'movies-images',
    showList: 'shows',
    movieList: 'movies',
    newShow: 'shows/0',
    newMovies: 'movies/0',
  },
  generic: {
    continentsList: 'continents',
    countriesList: 'countries',
    citiesList: 'cities',
    newContinent: 'continents/0',
    newCountry: 'countries/0',
    newCity: 'cities/0',
  },
};

export const routerHref = {
  home: 'home', //abosolute path
  about: 'about', //abosolute path
  contact: 'contact', //absolute path
  gitHub: 'https://github.com/savaliyak53',
  signUp: 'signup', //abosolute path
  logIn: 'login', //abosolute path
  user: 'user', // absolute path
  landingPage: 'landing-page', //relative path bcoz child route
  crud: 'crud', // absolute path
  ...crudSubRoute.movieShows,
  ...crudSubRoute.generic,
};

export const activeLink = 'active';
