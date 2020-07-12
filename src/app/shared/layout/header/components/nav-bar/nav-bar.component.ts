import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router';
//import { CartManager } from 'src/app/core/managers/cart.manager';
import { CartManager } from '../../../../../core/managers/cart.manager';
import { LocalStorage } from '../../../../../core/helpers/localStorage';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  faSearch = faSearch ;
  faUser = faUser ;
  faShoppingCart = faShoppingCart ;
  faHeart = faHeart ;
  constructor( private router: Router, 
    public cartManager: CartManager ,
  public LocalStorage: LocalStorage) { }

  ngOnInit(): void {
    this.cartManager.getCart();
  }

  goToCart() {
    if (this.cartManager.cartItems.value.length) {
      this.router.navigateByUrl('cart');
    }
  }

  
  onSearch(keyword) {
    this.router.navigateByUrl(`products/search/${keyword}`);
  }

}
