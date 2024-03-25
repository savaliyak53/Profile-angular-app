import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { IProducts } from '../../type';
import { GridImagesComponent } from '../../components/grid-images/grid-images.component';
import { routerHref } from '../../../../../../environments/environments.development';

@Component({
  selector: 'app-show-images',
  standalone: true,
  imports: [GridImagesComponent],
  templateUrl: './show-images.component.html',
  styleUrl: './show-images.component.css',
})
export class ShowImagesComponent implements OnInit {
  products: IProducts;
  link: string = routerHref.showList;

  searchPlaceholeder: string = '';
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((items) => {
      this.products = items;
    });
  }
}
