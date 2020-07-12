import { Component, OnInit, OnChanges } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.service';
import { SliderModel } from 'src/app/core/models/slider.model';
import { BrandModel } from 'src/app/core/models/brand.model';
import { WishlistManager } from 'src/app/core/managers/wishlist.manager';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit , OnChanges {

  slider: SliderModel[];
  brands: BrandModel[];
  collections;
  recents;
  favorites: Product[];
  constructor(private homeServive: HomeService , private wishlistManager :WishlistManager ) { }

  ngOnInit(): void {
    this.getContent();
    this.getRecentlyViewed();
    this.getHomeCollection();
    this. getWishlist();
  }

  
  getWishlist() {
    this.wishlistManager.getWishlist().subscribe(res => 
      {
       
      this.favorites = res;
      console.log("wishh");
      console.log(this.favorites);
      }
    );
  }
  getContent() {
    this.homeServive.getHomeContent().subscribe(res => {
      this.slider = res.slider;
      this.brands = res.brands;
      console.log(this.brands);
      console.log(this.slider);
    });
   
  }

  getRecentlyViewed() {
    this.homeServive.getRecentlyViewed().subscribe(res =>
      { this.recents= res.recents ;
        console.log(this.recents);
      });
      
  }

  getHomeCollection() {
    this.homeServive.getHomeCollections().subscribe(res =>
      { this.collections = res;
    console.log(this.collections);
  });
}
  ngOnChanges(changes){
    console.log(changes);
  }
}
