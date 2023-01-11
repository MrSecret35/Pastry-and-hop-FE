import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent} from "./core/authentication/registration/registration.component";
import {LoginComponent} from "./core/authentication/login/login.component";
import {PastryShopComponent} from "./user/pastry-shop/pastry-shop/pastry-shop.component";
import {MapComponent} from "./user/map/map.component";
import {CatalogueComponent} from "./user/pastry-shop/catalogue/catalogue.component";
import {SweetComponent} from "./user/pastry-shop/sweet/sweet.component";
import {CatalogueManagerComponent} from "./manager/catalogue-manager/catalogue-manager.component";
import {OrderComponent} from "./manager/order/order.component";

const routes: Routes = [
  /* core/authentication */
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'registration',
    component:RegistrationComponent,
  },
  /* user */
  {
    path:'catalogue',
    component:CatalogueComponent,
  },
  {
    path:'map',
    component:MapComponent,
  },
  {
    path:'party-shop',
    component:PastryShopComponent,
  },
  {
    path:'sweet',
    component:SweetComponent,
  },
  /* manager */
  {
    path:'manager-catalogue',
    component:CatalogueManagerComponent,
  },
  {
    path:'order',
    component:OrderComponent,
  },
  /* default */
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "login",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
