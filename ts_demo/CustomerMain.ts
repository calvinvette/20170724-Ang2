import {Customer} from "../src/app/customer-table/Customer";


let harry: Customer = new Customer();


harry.customerId = 1234;
harry.firstName = "Harry";
harry.lastName = "Potter";
harry.phoneNumber = "+1 44 0206 131-1031";
harry.email = "harry.potter@hogwarts.ac.uk";

console.log(harry.firstName);

let hermione: Customer = new Customer(1341,
  "Hermione", "Granger", "+1 44 0206 391-1411", "hermione.granger@hogwarts.ac.uk",
"No Home Address");

console.log(hermione.toString());





