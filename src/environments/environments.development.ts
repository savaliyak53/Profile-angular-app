export const StrongPasswordRegx: RegExp =
  /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

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
};

export const activeLink = 'active';
