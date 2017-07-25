export class Customer {
  private _customerId: number = -1;
  private _firstName: string;
  private _lastName: string;
  private _phoneNumber: string;
  private _email: string;

  constructor(customerId: number = -1,
              firstName: string = null,
              lastName: string = null,
              phoneNumber: string = null,
              email: string = null,
              private _homeAddress: string = null   // don't need getter/setter for this one
  ) {
    this.customerId = customerId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;

  }

  get customerId(): number {
    return this._customerId;
  }

  // @Min(0)
  set customerId(value: number) {
    if (value <= 0) {
      console.log("Bad CustomerID! Should be greater than 0!");
      return;
    }
    this._customerId = value;
  }

  get firstName(): string {
    // console.log("in fn getter");
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get homeAddress(): string {
    return this._homeAddress;
  }

  set homeAddress(value: string) {
    this._homeAddress = value;
  }

  toString() {
    return "Customer: #" + this.customerId + ": " + this.firstName + " " + this.lastName;
  }
}
