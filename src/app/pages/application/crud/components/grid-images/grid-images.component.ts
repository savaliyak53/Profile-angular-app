import { Component, Input, OnDestroy } from '@angular/core';
import { IProducts, product } from '../../type';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-images',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-images.component.html',
  styleUrl: './grid-images.component.css',
})
export class GridImagesComponent {
  @Input() items: product[];
  @Input() link: string;

  constructor(private router: Router) {}

  selectItem(id: any): void {
    this.router.navigate(['/crud/' + this.link, id]);
  }
}
