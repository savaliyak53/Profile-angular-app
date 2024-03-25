import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-movie-images',
  standalone: true,
  imports: [],
  templateUrl: './movie-images.component.html',
  styleUrl: './movie-images.component.css',
})
export class MovieImagesComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getAllProduct()
      .pipe(delay(100))
      .subscribe((items) => {
        console.log(items, 'items');
      });
  }
}
