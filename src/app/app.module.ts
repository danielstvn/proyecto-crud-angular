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

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './pipe/filter_client/filter.pipe';
import { FilterShippingPipe } from './pipe/filter_shipping/filter-shipping.pipe';
import { FiltercellarPortsPipe } from './pipe/filter_cellarPorts/filtercellar-ports.pipe';


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
     FilterPipe,
     FilterShippingPipe,
     FiltercellarPortsPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
