import {Component, OnInit} from '@angular/core';
import {Customer} from "./Customer";
import {CustomerService} from "../customer-service/customer.service";

@Component({
  selector: 'customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {
  private _selectedCustomer: Customer; //
  private _editSelectedCustomer: boolean = false;

  private _customers: Customer[] = [];

  constructor(private customerService: CustomerService ) {
    console.log(this.customerService);
    console.log(this.customerService.customers);
    this.customers = this.customerService.customers;
  }

  ngOnInit() {
  }

  selectCustomer(cust: Customer) {
    this.selectedCustomer = cust;
  }


  get selectedCustomer(): Customer {
    return this._selectedCustomer;
  }

  set selectedCustomer(value: Customer) {
    this._selectedCustomer = value;
  }

  get customers(): Customer[] {
    return this._customers;
  }

  set customers(value: Customer[]) {
    this._customers = value;
  }

  get editSelectedCustomer(): boolean {
    return this._editSelectedCustomer;
  }

  set editSelectedCustomer(value: boolean) {
    this._editSelectedCustomer = value;
  }
}
