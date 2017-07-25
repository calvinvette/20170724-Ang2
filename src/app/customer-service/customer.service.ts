import {Injectable, OnInit} from '@angular/core';
import {Customer} from "../customer-table/Customer";
import {ICustomerService} from "./ICustomerService";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from 'rxjs';


@Injectable()
export class CustomerService implements OnInit, ICustomerService {
  private _customers: Customer[] = [];

  constructor(private http: Http) {

    console.log("In CustomerServiceCTOR");
    // this.customers.push(
    //   new Customer(1341,
    //     "Harry",
    //     "Potter",
    //     "+1 44 0206 391-1093",
    //     "harry.potter@hogwarts.ac.uk",
    //     "#4 Privet Dr, Cupboard under the Stair")
    // );
    // this.customers.push(
    //   new Customer(1342,
    //     "Ronald",
    //     "Weasley",
    //     "+1 44 0206 391-1003",
    //     "ron.weasley@hogwarts.ac.uk",
    //     "No Home Address")
    // );
    // this.customers.push(
    //   new Customer(1343,
    //     "Hermione",
    //     "Granger",
    //     "+1 44 0206 391-1411",
    //     "hermione.granger@hogwarts.ac.uk",
    //     "No Home Address")
    // );
    // this.customers.push(
    //   new Customer(1344,
    //     "Neville",
    //     "Longbottom",
    //     "+1 44 0206 391-1551",
    //     "Neville.Longbottom@hogwarts.ac.uk",
    //     "")
    // );

  }

  ngOnInit() {
    // This isn't a component... Won't get called
    console.log("In CustomerService OnInit");
  }

  private extractData(res: Response) {
    let body: any;
    body = res.json(); // we'll need to beef up error handling here.
    return body;
  }

  private handleError(err: Response | any) {
    let errMsg: string;
    if (err instanceof  Response) {
      const body = err.json();
      const errObj = body.error;
      errMsg = `${err.status} - ${err.statusText} ${errObj}`;
    }
    return Observable.throw(errMsg);
  }


  findById(customerId: number): Observable<Customer> {
    return null;
  }

  findAll(): Observable<Customer[]> {
    return this.http.get('http://localhost:1701/api/customers', new RequestOptions({
      headers: new Headers({
        'Accept' : 'application/json'
      })
    })).map((res) => res.json())
      .catch(this.handleError);
  }

  insert(customer: Customer): Observable<Customer> {
    return null;
  }

  update(customer: Customer): Observable<Customer> {
    return null;
  }

  delete(customer: Customer): Observable<Customer> {
    return null;
  }

  get customers(): Customer[] {
    return this._customers;
  }

  set customers(value: Customer[]) {
    this._customers = value;
  }
}
