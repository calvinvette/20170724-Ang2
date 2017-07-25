import {Component, Input, OnInit} from "@angular/core";
import {Customer} from "../customer-table/Customer";

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  private _customer: Customer;

  constructor() {
  }

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
