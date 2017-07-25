import {Component, OnInit} from '@angular/core';
import {Customer} from "./Customer";

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {
  private _selectedCustomer: Customer = new Customer();

  private _customers: Customer[] = [];

  constructor() {
    this._customers.push(
      new Customer(1341,
        "Harry",
        "Potter",
        "+1 44 0206 391-1093",
        "harry.potter@hogwarts.ac.uk",
        "#4 Privet Dr, Cupboard under the Stair")
    );
    this._customers.push(
      new Customer(1341,
        "Ronald",
        "Weasley",
        "+1 44 0206 391-1003",
        "ron.weasley@hogwarts.ac.uk",
        "No Home Address")
    );
    this._customers.push(
      new Customer(1341,
        "Hermione",
        "Granger",
        "+1 44 0206 391-1411",
        "hermione.granger@hogwarts.ac.uk",
        "No Home Address")
    );
  }

  ngOnInit() {
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
}
