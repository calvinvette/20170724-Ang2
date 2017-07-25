import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../customer-table/Customer";

@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  private _customer: Customer;
  constructor() { }

  ngOnInit() {
  }

  get customer(): Customer {
    return this._customer;
  }

  @Input()
  set customer(value: Customer) {
    this._customer = value;
  }
}
