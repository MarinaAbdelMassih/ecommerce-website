import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {

  
 
  public product: Product;
  public relatedProducts: Array<Product>;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.getProduct();
    this.getRelatedProducts();
  }

  
  getProduct() {
    this.productService.getProduct(this.activatedRoute.snapshot.url[1].path).subscribe((res) => {
      this.product = res;
      console.log("helloo");
      
    });
  }

  getRelatedProducts() {
    this.productService.getRelatedProducts(this.activatedRoute.snapshot.url[1].path).subscribe((res) => {
      this.relatedProducts = res;
      console.log(this.relatedProducts);
    });
  }
}
