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
    Employee.prototype.EmpWage = function () {
        var i = 0;
        var checkfor = this.attCheck();
        switch (checkfor) {
            case 1: //for full time
                console.log("Day " + i + " Present For Full Time");
                constants_1.constants.hrs = this.fullTime();
                break;
            case 0: //for part time
                console.log("Day " + i + " Present For Part Time");
                constants_1.constants.hrs = this.partTime();
                break;
            default:
                constants_1.constants.hrs = 0;
                console.log("Day " + i + " Absent");
                constants_1.constants.AbsentDays += 1;
                break;
        }
        constants_1.constants.cal = constants_1.constants.cal + constants_1.constants.hrs * constants_1.constants.WAGEPERHR;
        console.log("Wage is: " + constants_1.constants.cal);
    };
    return Employee;
}());
var emp = new Employee();
emp.welcomeMsg();
