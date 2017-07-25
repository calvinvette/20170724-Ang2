import {Component, OnInit, Version} from '@angular/core';
import {Customer} from "./customer-table/Customer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '700 Wellington';
  public tempCustomer: Customer = new Customer(1341,
    "Neville",
    "Longbottom",
    "+1 44 0206 391-1551",
    "Neville.Longbottom@hogwarts.ac.uk",
    "");

  /*
   */
  constructor(// version: Version
  ) {
    console.log("In CTOR");
    //console.log(version.major);
  }

  ngOnInit() {
    console.log("I have been initted....");
  }
}
