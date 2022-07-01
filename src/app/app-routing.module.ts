import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCellarPortsComponent } from './cellar_ports/show-cellar-ports/show-cellar-ports.component';

import { HomeComponent } from './home/home.component';
import { ShippingPlanComponent } from './logistic/shipping-plan/shipping-plan.component';
import { UserRegisterComponent } from './logistic/user-register/user-register.component';
import { IndexShippingComponent } from './shipping/index-shipping/index-shipping.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'user_register', component:UserRegisterComponent},
  {path:'user_register/shipping_plan', component:ShippingPlanComponent},
  {path:'cellar_ports', component:ShowCellarPortsComponent},
  {path:'shipping',component:IndexShippingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
