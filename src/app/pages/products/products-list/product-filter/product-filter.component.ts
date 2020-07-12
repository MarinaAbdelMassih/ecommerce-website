import { Component, OnInit, Input } from '@angular/core';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';

import { CategoriesService } from 'src/app/core/services/categories.service';
import { BrandsService } from 'src/app/core/services/brands.service';
import { Category } from 'src/app/core/models/category.model';


@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  faHeart = faHeart ;
  faEye = faEye ;
  faShoppingCart = faShoppingCart ;
  currentCategory: string;
  products;
  navigationSubscription;
  noResults = false;
  searchPage: boolean;
  brandsPage: boolean;
  @Input() categories: Category;
  constructor(  private categoriesService: CategoriesService,
    private productService: ProductService,
    private brandsService: BrandsService,
    private activatedRoute: ActivatedRoute,
    public router: Router)
     { }

  ngOnInit(): void {
  }

  goToProduct(product) {
    this.router.navigateByUrl(`product/${product.slug}`);
  }
  
  getProducts() {
    this.categoriesService.getCategoryProducts(this.activatedRoute.snapshot.url[1].path).subscribe((res) => {
      this.products = res;
      console.log("yarbbbb");
      console.log(this.products);

    });
    this.currentCategory = window.history.state.category?.name || 'Products';
  }

  getBrandProducts() {
    this.brandsService.getBrandProducts(this.activatedRoute.snapshot.url[2].path).subscribe((res) => {
      this.products = res;
      if (!this.products || this.products.length === 0) {
        this.noResults = true;
      }
    });
    this.currentCategory = window.history.state.brand?.name || 'Brand';
  }

  searchProducts() {
    this.products = [];
    this.currentCategory = 'Search';
    this.productService.searchProducts(this.activatedRoute.snapshot.url[2].path).subscribe((res) => {
      this.products = res;
      if (res.products?.length === 0 || !this.products || this.products.length === 0) {
        this.noResults = true;
      }
    });
  }

}
