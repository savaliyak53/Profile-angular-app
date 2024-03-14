import { Component } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { CommonShareService } from '../../service/common-share.service';
import { CommonModule } from '@angular/common';
import {
  routerHref,
  activeLink,
} from '../../../environments/environments.development';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  footerColor: string = 'default';
  home: string = routerHref.home;
  about: string = routerHref.about;
  contact: string = routerHref.contact;
  github: string = routerHref.gitHub;
  signup: string = routerHref.signUp;
  login: string = routerHref.logIn;
  activeLink: string = activeLink;

  constructor(private router: Router, private commonShare: CommonShareService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/landing-page') {
          this.footerColor = 'landing-page';
          this.commonShare.setData(this.footerColor);
        }
        if (event.url !== '/landing-page') {
          this.footerColor = 'default';
          this.commonShare.setData(this.footerColor);
        }
      }
    });
  }
}
