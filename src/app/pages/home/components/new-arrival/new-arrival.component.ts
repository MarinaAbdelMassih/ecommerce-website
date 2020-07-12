import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductCollection } from '../../../../core/models/product-collection.model';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CartManager } from 'src/app/core/managers/cart.manager';
import { WishlistManager } from 'src/app/core/managers/wishlist.manager';

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.scss']
})
export class NewArrivalComponent implements OnInit , OnChanges {

  @Input() collection;
  
 

  faHeart = faHeart;
  showQty = false;
  quantity = 1;
  @Input() product;
  @Input() wishlist;

  constructor(private router: Router, private cartManager: CartManager, private wishlistManager: WishlistManager) { }


  ngOnInit() {
  }

  /*
  
  goToProduct(product) {
    this.router.navigateByUrl(`product/${product.slug}`);
  }

  addToCart() {
    this.cartManager.addToCart([{ id: this.product.id, qty: this.quantity }]);
  }

  setQuantity(count) {
    this.quantity = count;
    this.addToCart();
  }


  toggleFavorite() {
    if (this.product.favourite) {
      this.wishlistManager.removeFromWishlist(this.product);
    } else {
      this.wishlistManager.addToWishlist(this.product);
    }
  }
  */
  ngOnChanges(changes){
    console.log(changes);
  }
}
