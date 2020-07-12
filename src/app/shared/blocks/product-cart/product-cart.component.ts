import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { faChevronLeft, faChevronRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import { ProductCollection } from 'src/app/core/models/product-collection.model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {

 // @Input() collection;
  @Input() collection: ProductCollection;

  @Input() title;

  ngOnInit(): void {}
}
