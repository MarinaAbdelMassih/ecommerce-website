import { Component, OnInit ,  Input , Output , EventEmitter} from '@angular/core';
import { ProductCollection } from '../../../../core/models/product-collection.model';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CartManager } from 'src/app/core/managers/cart.manager';
import { WishlistManager } from 'src/app/core/managers/wishlist.manager';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() collection: ProductCollection;

  faHeart = faHeart;
  showQty = false;
  quantity = 1;
  @Input() product;
  @Input() wishlist;

  @Input() categories: Category;
  @Output() hideMenu: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router, private cartManager: CartManager, private wishlistManager: WishlistManager) { }


  ngOnInit() {
  }

  
  viewCategory() {
    this.hideMenu.emit();
  }
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

}
