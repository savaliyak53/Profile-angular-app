import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { IProduct, IProducts } from '../../type';
import { GridImagesComponent } from '../../components/grid-images/grid-images.component';
import { routerHref } from '../../../../../../environments/environments.development';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-show-images',
  standalone: true,
  imports: [GridImagesComponent, SearchBarComponent],
  templateUrl: './show-images.component.html',
  styleUrl: './show-images.component.css',
})
export class ShowImagesComponent implements OnInit {
  products: IProduct[];
  link: string = routerHref.showList;
  searchPlaceholeder: string = 'Search';
  searched: string;
  itemsCount: number;
  totleProduct: IProduct[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    if (!this.searched) {
      this.productService.getAllProduct().subscribe((items: IProducts) => {
        this.products = items?.products;
        this.totleProduct = items?.products;
        this.itemsCount = items?.products.length;
      });
    }
  }

  OnSearch(event) {
    if (event) {
      this.products = this.totleProduct.filter((items) => {
        return (
          items.brand.toLowerCase().startsWith(event.toLowerCase()) ||
          items.category
            .toLocaleLowerCase()
            .startsWith(event.toLocaleLowerCase()) ||
          items.description
            .toLocaleLowerCase()
            .startsWith(event.toLocaleLowerCase())
        );
      });
    } else {
      this.products = this.totleProduct;
    }
  }
}
