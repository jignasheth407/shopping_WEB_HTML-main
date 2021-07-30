import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/site/home/home.component';
import {ProductComponent} from './components/site/product/product.component';
import {CollectionComponent} from './components/site/collection/collection.component';
import {ContactComponent} from './components/site/contact/contact.component';
import {WishlistComponent} from './components/site/wishlist/wishlist.component';
import {ShopComponent} from './components/site/shop/shop.component';
import {ComparisionComponent} from './components/site/comparision/comparision.component';
import {CheckoutComponent} from './components/site/checkout/checkout.component';
import {AccountComponent} from './components/site/account/account.component';
import {CartComponent} from './components/site/cart/cart.component';
import {CustomerprofilepageComponent} from './components/site/customerprofilepage/customerprofilepage.component';
import {SliderhomeComponent} from './components/site/sliderhome/sliderhome.component';
import { BlogComponent } from './components/site/blog/blog.component';
import { ErrorComponent } from './components/site/error/error.component';
import { BloglistComponent } from './components/site/bloglist/bloglist.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'collection', component:CollectionComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'wishlist', component: WishlistComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'comparision', component: ComparisionComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'account', component: AccountComponent},
  { path: 'cart', component: CartComponent},
  { path: 'customerprofile', component:CustomerprofilepageComponent},
  { path: 'sliderhome', component:SliderhomeComponent},
  { path: 'blog', component:BlogComponent},
  { path: 'bloglist', component:BloglistComponent},
  {path:'**',component:ErrorComponent}

  
   

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
