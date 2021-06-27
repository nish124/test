import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewCustomerDetailComponent } from './view-customer-detail/view-customer-detail.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import {ViewcustomerdetailsService} from './view-customer-detail/viewcustomerdetails.service'
import { from } from 'rxjs';
import { DemoComponent } from './demo/demo.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCustomerComponent,
    ViewCustomerDetailComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ViewcustomerdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
