import {Injectable} from '@angular/core';
import {Customer} from "../customer-table/Customer";

@Injectable()
export class CustomerService {
  private _customers: Customer[] = [];

  constructor() {
    this.customers.push(
      new Customer(1341,
        "Harry",
        "Potter",
        "+1 44 0206 391-1093",
        "harry.potter@hogwarts.ac.uk",
        "#4 Privet Dr, Cupboard under the Stair")
    );
    this.customers.push(
      new Customer(1342,
        "Ronald",
        "Weasley",
        "+1 44 0206 391-1003",
        "ron.weasley@hogwarts.ac.uk",
        "No Home Address")
    );
    this.customers.push(
      new Customer(1343,
        "Hermione",
        "Granger",
        "+1 44 0206 391-1411",
        "hermione.granger@hogwarts.ac.uk",
        "No Home Address")
    );
    this.customers.push(
      new Customer(1344,
        "Neville",
        "Longbottom",
        "+1 44 0206 391-1551",
        "Neville.Longbottom@hogwarts.ac.uk",
        "")
    );

  }

  get customers(): Customer[] {
    return this._customers;
  }

  set customers(value: Customer[]) {
    this._customers = value;
  }
}
