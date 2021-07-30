import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/site/home/home.component';
import { ProductComponent } from './components/site/product/product.component';
import { CollectionComponent } from './components/site/collection/collection.component';
import { ContactComponent } from './components/site/contact/contact.component';
import { ShopComponent } from './components/site/shop/shop.component';
import { WishlistComponent } from './components/site/wishlist/wishlist.component';
import { AccountComponent } from './components/site/account/account.component';
import { CheckoutComponent } from './components/site/checkout/checkout.component';
import { ComparisionComponent } from './components/site/comparision/comparision.component';
import { CustomerprofilepageComponent } from './components/site/customerprofilepage/customerprofilepage.component';
import { CartComponent } from './components/site/cart/cart.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderhomeComponent } from './components/site/sliderhome/sliderhome.component';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsModule } from '@angular/google-maps';
import { BlogComponent } from './components/site/blog/blog.component';
import { ErrorComponent } from './components/site/error/error.component';
import { BloglistComponent } from './components/site/bloglist/bloglist.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    CollectionComponent,
    ContactComponent,
    ShopComponent,
    WishlistComponent,
    AccountComponent,
    CheckoutComponent,
    ComparisionComponent,
    CustomerprofilepageComponent,
    CartComponent,
    SliderhomeComponent,
    BlogComponent,
    ErrorComponent,
    BloglistComponent,
    
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    AppRoutingModule,
    SlickCarouselModule,
    IvyCarouselModule,
    NgbModule,
    CarouselModule
    // NgbCarouselConfig 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
