import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    HttpClientModule,
  ],
})
export class AppComponent implements OnInit {
  title = 'newProject';
  isLoading: boolean = false;
  router: Router = inject(Router);

  ngOnInit(): void {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.isLoading = true;
      }
      if (routerEvent instanceof NavigationEnd) {
        this.isLoading = false;
      }
      if (routerEvent instanceof NavigationCancel) {
        this.isLoading = false;
      }
      if (routerEvent instanceof NavigationError) {
        this.isLoading = false;
      }
    });
  }
}
