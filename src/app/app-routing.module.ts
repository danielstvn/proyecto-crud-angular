import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShippingPlanComponent } from './logistic/shipping-plan/shipping-plan.component';
import { UserRegisterComponent } from './logistic/user-register/user-register.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'user_register', component:UserRegisterComponent},
  {path:'user_register/shipping_plan', component:ShippingPlanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
