"use strict";
exports.__esModule = true;
var constants_1 = require("./constants");
var Employee = /** @class */ (function () {
    function Employee() {
        // welcome message
        this.welcomeMsg();
    }
    Employee.prototype.welcomeMsg = function () {
        console.log("|*** Welcome to Empolyee Wage Computation ***|");
    };
    // For attandace check
    Employee.prototype.attCheck = function () {
        var checkfor = Math.floor((Math.random() * 10) % 3);
        return checkfor;
    };
    // for full time work
    Employee.prototype.fullTime = function () {
        constants_1.constants.hrs = constants_1.constants.FULL_TIME_HR;
        return constants_1.constants.hrs;
    };
    // for part time work
    Employee.prototype.partTime = function () {
        constants_1.constants.hrs = constants_1.constants.PART_TIME_HR;
        return constants_1.constants.hrs;
    };
    return Employee;
}());
var emp = new Employee();
emp.welcomeMsg();
