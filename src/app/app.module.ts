import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './cards/product-card/product-card.component';
import { ProfileCardComponent } from './cards/profile-card/profile-card.component';
import { WarehouseCardsComponent } from './cards/warehouse-cards/warehouse-cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';
import { WareHousesComponent } from './ware-houses/ware-houses.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotpassComponent,
    DashboardComponent,
    NavbarComponent,
    UserProfilesComponent,
    ProfileCardComponent,
    ProductsComponent,
    ProductCardComponent,
    WareHousesComponent,
    WarehouseCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
