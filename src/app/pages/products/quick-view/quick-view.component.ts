import { Component, OnInit , Input } from '@angular/core';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faFacebook ,faTwitter ,faInstagram} from '@fortawesome/free-brands-svg-icons';
import { Product } from 'src/app/core/models/product.model';

declare var $:any;

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {

  faArrowRight = faArrowRight;
  faHeart = faHeart ;
  faFacebook = faFacebook ;
  faTwitter = faTwitter ;
  faInstagram = faInstagram ;
  @Input() product: Product;
  constructor() { }

  ngOnInit(): void {
       
$(".item1").click(function(){
  let srcimg= $(this).attr("src");
  $("#mainnimg1").attr("src",srcimg);
}) ;
  
  }

}
