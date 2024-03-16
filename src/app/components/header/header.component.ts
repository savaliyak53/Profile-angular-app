import { Component, OnInit } from '@angular/core';
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
import { LoginService } from '../../service/login/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  footerColor: string = 'default';
  home: string = routerHref.home;
  about: string = routerHref.about;
  contact: string = routerHref.contact;
  github: string = routerHref.gitHub;
  signup: string = routerHref.signUp;
  login: string = routerHref.logIn;
  activeLink: string = activeLink;
  token: boolean | undefined;

  constructor(
    private router: Router,
    private commonShare: CommonShareService,
    private loginService: LoginService
  ) {
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

  ngOnInit(): void {
    this.token = this.loginService.isAuthenticated();
  }

  onLogOut() {
    this.loginService.logout();
    this.token = undefined;
    this.router.navigate([routerHref.home]);
  }
}
