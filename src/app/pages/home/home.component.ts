import { Component, OnInit, inject } from '@angular/core';
import { environment } from '../../../environments/environments';
import { _Application } from './home';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  activeRouter: ActivatedRoute = inject(ActivatedRoute);
  queryparam: string | undefined;
  name: string = environment.application.name;
  angular: string = environment.application.angular;
  bootstrap: string = environment.application.bootstrap;
  fontawesome: string = environment.application.fontawesome;

  ngOnInit(): void {
    this.activeRouter.queryParams.subscribe((data) => {
      this.queryparam = data['product'];
    });
  }

  items = [
    {
      icon: 'fa-solid fa-file-lines',
      name: 'Landing Page',
      description: 'Css linear-gradient',
      link: 'landing-page', //relative route for it make it child route of parent
    },
    {
      icon: 'fa-brands fa-readme',
      name: 'CRUD',
      description: 'Create Read Update',
      link: '/crud',
    },
    {
      icon: 'fa-solid fa-address-card',
      name: 'Images Cards',
      description: 'Cascade Cards',
      link: 'cards', //Absolute route path
    },
    {
      icon: 'fa-brands fa-bootstrap',
      name: 'bootstrap',
      description: 'UI and components',
      link: '/bootstrap',
    },
    {
      icon: 'fa-sharp fa-solid fa-newspaper',
      name: 'News',
      description: 'Trailers and youtube',
      link: '/news',
    },
    {
      icon: 'fa-solid fa-chart-simple',
      name: 'Boxoffice',
      description: 'Movies boxoffice',
      link: '/boxoffice',
    },
    {
      icon: 'fa-solid fa-blender-phone',
      name: 'Services',
      description: 'angular Services',
      link: '/services',
    },
    {
      icon: 'fa-solid fa-screwdriver-wrench',
      name: 'Components',
      description: 'Angular components',
      link: '/components',
    },
    {
      icon: 'fa-solid fa-network-wired',
      name: 'HttpClient',
      description: 'Httpclient library',
      link: '/httpclient',
    },
    {
      icon: 'fa-regular fa-rectangle-list',
      name: 'forms',
      description: 'Reactive & Template',
      link: '/forms',
    },
    {
      icon: 'fa-regular fa-window-restore',
      name: 'Modal',
      description: 'Modal with bootstrap',
      link: '/modal',
    },
    {
      icon: 'fa-solid fa-spell-check',
      name: 'Prism',
      description: 'Syntax highlighter',
      link: '/prism',
    },
    {
      icon: 'fa-regular fa-comment-dots',
      name: 'Prettyjson',
      description: 'JSON formatter',
      link: '/prettyjson',
    },
    {
      icon: 'fa-solid fa-place-of-worship',
      name: 'Dynamic component',
      description: 'Using in model',
      link: '/user',
    },
  ];
}
