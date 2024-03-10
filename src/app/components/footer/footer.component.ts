import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommonShareService } from '../../service/common-share.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  footerColor: any;
  constructor(private sharedService: CommonShareService) {
    this.sharedService.data$.subscribe((data) => {
      this.footerColor = data;
    });
  }
}
