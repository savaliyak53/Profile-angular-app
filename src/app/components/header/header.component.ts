import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { CommonShareService } from '../../service/common-share.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  footerColor: string = 'default';

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
