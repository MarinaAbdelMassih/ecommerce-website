import { Component, OnInit, Input } from '@angular/core';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/core/models/product.model';
import { CartManager } from 'src/app/core/managers/cart.manager';


import {faFacebook ,faTwitter ,faInstagram} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  faHeart = faHeart;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram ;
  @Input() product: Product;
  quantity = 1;
  sizes;
  colors;
  currentSize;
  currentColor;

  constructor(private cartManager: CartManager) { }


  ngOnInit(): void {}
  
  ngOnChanges(changes) {
    if (changes.product.currentValue) {
      const product = changes.product.currentValue;
      if (product.variants.length) {
        this.colors = product.variants.find(variant => variant.key === 'colors').values;
        this.sizes = product.variants.find(variant => variant.key === 'sizes').values;
        this.currentColor = this.colors[0];
        this.currentSize = this.sizes[0];
      }
    }
  }

  addToCart() {
    let id;
    if (this.product.variants.length) {
      this.product.variantProducts.map(product => {
        if (
          product.variantCode.findIndex(size => size === this.currentSize.value) > -1
          && product.variantCode.findIndex(color => color === this.currentColor.value) > -1
        ) {
          const variant = product;
          id = variant.id;
          return;
        }
      });
    } else {
      id = this.product.id;
    }
    this.cartManager.addToCart([{ id, qty: this.quantity }]);
  }

  setQuantity(count) {
    this.quantity = count;
  }

  variantChanged(type, value) {
    if (type === 'size') {
      this.currentSize = value;
    } else if (type === 'color') {
      this.currentColor = value;
    }
  }

}


