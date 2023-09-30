import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CartService } from './services/cart.service';
import { OrderService } from './services/order.service';
import { AdminService } from './services/admin.service';
import { ProductsService } from './services/products.service';
import { CategoryService } from './services/category.service';
import { AuthServiceService } from './services/auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignComponent,
    HomeComponent,
    AdminComponent,
    CartPageComponent,
    ShippingComponent,
    ViewOrdersComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [CartService,OrderService,AdminService,ProductsService,CategoryService,AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
