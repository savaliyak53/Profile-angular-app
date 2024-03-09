import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { SkillComponent } from './skill/skill.component';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    ExperienceComponent,
    SkillComponent,
  ],
})
export class AboutComponent {
  dependencies = {
    frontend: [
      { name: 'Angular 17.2.3' },
      { name: 'Angular CLI 17.2.2' },
      { name: 'Angular SSR 17.2.2' },
      { name: 'Bootstrap 5.3.3' },
      { name: 'Font Awesome 6.5.1' },
    ],
    backend: [
      { name: 'Node.js 18.17.1' },
      { name: 'Express 4.18.2' },
      { name: 'pg-promise 11.5.4' },
    ],
  };
}
