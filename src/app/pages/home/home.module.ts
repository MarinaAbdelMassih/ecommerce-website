import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SliderComponent } from './components/slider/slider.component';
import { ConcernComponent } from './components/concern/concern.component';
import { SharedModule } from '../../shared/shared.module';
import {FourPartComponent} from './components/four-part/four-part.component';
import {MenWomenComponent} from './components/men-women/men-women.component';
import { NewArrivalComponent } from './components/new-arrival/new-arrival.component';
import { ProductComponent } from './components/product/product.component';
import { SalesComponent } from './components/sales/sales.component';

//import { CategoriesService } from '../../../../../core/services/categories.service';


@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    ConcernComponent ,
    //, ProductComponent,
   // FourPartComponent , NewArrivalComponent 
    MenWomenComponent  , SalesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, 
    SharedModule
  ],
  exports: [
    SharedModule 
  ]
})
export class HomeModule { }
