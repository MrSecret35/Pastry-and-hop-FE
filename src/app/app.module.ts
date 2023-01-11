import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/authentication/login/login.component';
import { RegistrationComponent } from './core/authentication/registration/registration.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { MapComponent } from './user/map/map.component';
import { CatalogueComponent } from './user/pastry-shop/catalogue/catalogue.component';
import { SweetComponent } from './user/pastry-shop/sweet/sweet.component';
import { OrderComponent } from './manager/order/order.component';
import {PastryShopComponent} from "./user/pastry-shop/pastry-shop/pastry-shop.component";
import { CatalogueManagerComponent } from './manager/catalogue-manager/catalogue-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    NavbarComponent,
    MapComponent,
    PastryShopComponent,
    CatalogueComponent,
    SweetComponent,
    OrderComponent,
    CatalogueManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
