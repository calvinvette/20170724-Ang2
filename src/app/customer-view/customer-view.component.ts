import {Component, Input, OnInit} from "@angular/core";
import {Customer} from "../customer-table/Customer";
import {CustomerService} from "../customer-service/customer.service";

@Component({
  selector: 'customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  private _customer: Customer;

  constructor(private customerService: CustomerService) {
    console.log("CustomerView CTOR");
    console.log(this.customerService);
  }

  ngOnInit() {
    console.log("CustomerView OnInit");
  }


  get customer(): Customer {
    return this._customer;
  }

  @Input()
  set customer(value: Customer) {
    this._customer = value;
  }

}
