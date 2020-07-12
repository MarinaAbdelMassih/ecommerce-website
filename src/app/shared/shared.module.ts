import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './material/material.module';
import { NgxBootstrapModule } from './material/ngx-bootstrap.module';
import { FooterComponent } from './layout/footer/footer.component';
import { FloatCartComponent } from './blocks/float-cart/float-cart.component';
import { ProductCartComponent } from './blocks/product-cart/product-cart.component';
import { BrandsComponent } from '../pages/brands/brands.component';
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { ContactUsComponent } from '../pages/contact-us/contact-us.component';
import { ShippingDeliveryComponent } from '../pages/shipping-delivery/shipping-delivery.component';
import { AuthComponent } from '../pages/auth/auth.component';
import { BreadcrumbsComponent } from './blocks/breadcrumbs/breadcrumbs.component';
import { StepperComponent } from './blocks/stepper/stepper.component';
import { PaginatorComponent } from './blocks/paginator/paginator.component';
import { ProductItemComponent } from './blocks/product-item/product-item.component';
import { ForgotPasswordComponent } from '../pages/forgot-password/forgot-password/forgot-password.component';
import { PrivacyPolicyComponent } from '../pages/privacy-policy/privacy-policy.component';
import { FourPartComponent } from '../pages/home/components/four-part/four-part.component';
import { NewArrivalComponent} from '../pages/home/components/new-arrival/new-arrival.component';
import { ProductComponent } from '../pages/home/components/product/product.component';
import { WishlistComponent } from '../pages/profile/wishlist/wishlist.component';
import { RatingComponent } from '../pages/products/products-details/rating/rating.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    FooterComponent,
    FloatCartComponent,
    ProductCartComponent,
    AuthComponent,
    AboutUsComponent,
    BrandsComponent,
    ContactUsComponent,
    ShippingDeliveryComponent,
    PrivacyPolicyComponent,
    ForgotPasswordComponent,
    BreadcrumbsComponent,
    PaginatorComponent,
    StepperComponent,
    ProductItemComponent,
    FourPartComponent,
    ProductComponent,
    RatingComponent,
    NewArrivalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxBootstrapModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule,
    ToastrModule.forRoot() ,  TranslateModule
  ],
  exports: [
    MaterialModule,
    NgxBootstrapModule,
    FontAwesomeModule,
    FooterComponent,
    ProductCartComponent,
    BreadcrumbsComponent,
    PaginatorComponent,
    ProductComponent,
    StepperComponent,
    ProductItemComponent,
    ReactiveFormsModule,
    FourPartComponent,
    RatingComponent,
    NewArrivalComponent ,  TranslateModule
  ]
})
export class SharedModule {}
