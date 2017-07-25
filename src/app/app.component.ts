import {Component, OnInit, Version} from '@angular/core';
import {Customer} from "./customer-table/Customer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '700 Wellington';

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
