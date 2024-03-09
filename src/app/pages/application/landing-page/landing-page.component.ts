import { Component } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  cards: { id: number; name: string; discription: string; url: string }[] = [
    {
      id: 1,
      name: 'Bootstrap',
      discription: 'How to use Buttons, Alerts, Pagination, Tables, Collapses',
      url: '/bootstrap',
    },
    {
      id: 2,
      name: 'Services',
      discription: 'Use services to view a playlist and a youtube player',
      url: '/services',
    },
    {
      id: 3,
      name: 'Components',
      discription: 'Channel component with Input, Output and Event Emitter',
      url: '/components',
    },
    {
      id: 4,
      name: 'Httpclient',
      discription: 'Use an external API with HttpClient Module',
      url: '/httpclient',
    },
    {
      id: 5,
      name: 'Forms',
      discription: 'Select Template Driven Forms or Reactive Forms',
      url: '/forms',
    },
    {
      id: 6,
      name: 'Modal',
      discription: 'Create Modal with service and without jquery',
      url: '/modal',
    },
    {
      id: 7,
      name: 'CURD',
      discription: 'Create and Use API Rest',
      url: '/crud',
    },
  ];
}
