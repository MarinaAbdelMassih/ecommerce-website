import { Component, OnInit, OnChanges , Input} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { WishlistManager } from 'src/app/core/managers/wishlist.manager';
import { ProductService } from 'src/app/core/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { ProductCollection } from 'src/app/core/models/product-collection.model';
import { SharedModule } from '../../../shared/shared.module';

import{ QuickViewComponent} from '../quick-view/quick-view.component';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit , OnChanges {

  showQty = false;
  quantity = 1;
  public product: Product;
  public relatedProducts: Array<Product>;

  constructor(public dialog:MatDialog ,
    private wishlistManager: WishlistManager,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
   
    private router: Router ) { }

  showDetails()
  {
    this.dialog.open(QuickViewComponent, {
      width: '70vw',
      maxWidth: '70vw',
     
    })
  }
  ngOnInit(): void {
    this.getProduct();
    this.getRelatedProducts();
  }
  
  
  setQuantity(count) {
    this.quantity = count;
   
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
  
  ngOnChanges(changes){
    console.log(changes);
  }

}
