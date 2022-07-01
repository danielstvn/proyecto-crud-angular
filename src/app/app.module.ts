import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { UserRegisterComponent } from './logistic/user-register/user-register.component';
import { ShippingPlanComponent } from './logistic/shipping-plan/shipping-plan.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowCellarPortsComponent } from './cellar_ports/show-cellar-ports/show-cellar-ports.component';
import { IndexShippingComponent } from './shipping/index-shipping/index-shipping.component';
import { ShowShippingComponent } from './shipping/show-shipping/show-shipping.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    UserRegisterComponent,
    ShippingPlanComponent,

    ShowCellarPortsComponent,
     IndexShippingComponent,
     ShowShippingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
