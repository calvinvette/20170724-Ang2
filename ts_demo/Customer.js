"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = (function () {
    function Customer(customerId, firstName, lastName, phoneNumber, email, _homeAddress // don't need getter/setter for this one
    ) {
        if (customerId === void 0) { customerId = -1; }
        if (firstName === void 0) { firstName = null; }
        if (lastName === void 0) { lastName = null; }
        if (phoneNumber === void 0) { phoneNumber = null; }
        if (email === void 0) { email = null; }
        if (_homeAddress === void 0) { _homeAddress = null; } // don't need getter/setter for this one
        this._homeAddress = _homeAddress; // don't need getter/setter for this one
        this._customerId = -1;
        this.customerId = customerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    Object.defineProperty(Customer.prototype, "customerId", {
        get: function () {
            return this._customerId;
        },
        // @Min(0)
        set: function (value) {
            if (value <= 0) {
                console.log("Bad CustomerID! Should be greater than 0!");
                return;
            }
            this._customerId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            console.log("in fn getter");
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "phoneNumber", {
        get: function () {
            return this._phoneNumber;
        },
        set: function (value) {
            this._phoneNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "homeAddress", {
        get: function () {
            return this._homeAddress;
        },
        set: function (value) {
            this._homeAddress = value;
        },
        enumerable: true,
        configurable: true
    });
    Customer.prototype.toString = function () {
        return "Customer: #" + this.customerId + ": " + this.firstName + " " + this.lastName;
    };
    return Customer;
}());
exports.Customer = Customer;
