import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AddressComponent } from './components/address/address.component';
import { OrdersComponent } from './components/orders/orders.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngmaterialModule } from '../angmaterial/angmaterial.module';
import { FilterPipe } from './pipes/filter.pipe';
import { CartButtonComponent } from './cart-button/cart-button.component';
import { ItemDisplayComponent } from './item-display/item-display.component';
import { ProductsDisplayComponent } from './products-display/products-display.component';






@NgModule({
  declarations: [
    SideNavbarComponent,
    UserProfileComponent,
    AddressComponent,
    OrdersComponent,
    TrackingComponent,
    CartButtonComponent,
    ItemDisplayComponent,ProductsDisplayComponent,
   
    FilterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AngmaterialModule,
    NgbModule
  ],providers:[],
  exports:[SideNavbarComponent,OrdersComponent,UserProfileComponent,TrackingComponent]
})
export class UserModule { }
