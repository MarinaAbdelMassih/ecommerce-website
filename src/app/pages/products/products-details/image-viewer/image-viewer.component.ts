import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { WishlistManager } from 'src/app/core/managers/wishlist.manager';
import { Product } from 'src/app/core/models/product.model';
 declare var $:any;
@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit , OnChanges{

  @Input() product: Product;
  currentImage;
  constructor( ) { }

 
  selectImage(img) {
    this.currentImage = img;
  }

  ngOnInit(): void {
     
$(".item").click(function(){
  let srcimg= $(this).attr("src");
  $("#mainnimg").attr("[src]",srcimg);
}) ;
  }

  
  ngOnChanges(changes) {
    if (changes.product.currentValue) {
      this.currentImage = changes.product.currentValue.images[0];
    }
  }
}
