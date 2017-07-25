import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import {CustomerService} from "./customer-service/customer.service";

@NgModule({
  declarations: [
    AppComponent,
    CustomerTableComponent,
    CustomerViewComponent,
    CustomerFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
