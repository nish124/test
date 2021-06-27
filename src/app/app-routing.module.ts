import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewCustomerDetailComponent } from './view-customer-detail/view-customer-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"home",component:HomeComponent },
  {path:"addcustomerdetails",component:AddCustomerComponent},
  {path:"viewcustomerdetails",component:ViewCustomerDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
