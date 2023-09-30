import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShippingComponent } from './shipping/shipping.component';
import { SignComponent } from './sign/sign.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';

const routes: Routes = [
 
  {path:"login",component:LoginComponent},
  {path:"signUp",component:SignComponent},
  {path:"home/:id",component:HomeComponent},
  {path:"admin",component:AdminComponent},
  {path:"cart/:id",component:CartPageComponent},
  {path:"shipping/:id",component:ShippingComponent},
  {path:"viewOrders/:id",component:ViewOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
