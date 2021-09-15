"use strict";
exports.__esModule = true;
var constants_1 = require("./constants");
var AbsentDays = 0;
var hrs = 0;
var cal = 0;
var totalhrs = 10;
var Employee = /** @class */ (function () {
    function Employee() {
        // welcome message
        this.welcomeMsg();
    }
    Employee.prototype.welcomeMsg = function () {
        console.log("|*** Welcome to Empolyee Wage Computation ***|");
        this.EmpWage();
    };
    // For attandace check
    Employee.prototype.attCheck = function () {
        var checkfor = Math.floor((Math.random() * 10) % 3);
        return checkfor;
    };
    // for full time work
    Employee.prototype.fullTime = function () {
        hrs = constants_1.constants.FULL_TIME_HR;
        return hrs;
    };
    // for part time work
    Employee.prototype.partTime = function () {
        hrs = constants_1.constants.PART_TIME_HR;
        return hrs;
    };
    Employee.prototype.EmpWage = function () {
        var i = 0;
        while (i < 20) {
            var checkfor = this.attCheck();
            switch (checkfor) {
                case 1: //for full time
                    console.log("Day " + i + " Present For Full Time");
                    hrs = this.fullTime();
                    break;
                case 0: //for part time
                    console.log("Day " + i + " Present For Part Time");
                    hrs = this.partTime();
                    break;
                default:
                    hrs = 0;
                    console.log("Day " + i + " Absent");
                    AbsentDays += 1;
                    break;
            }
            // constants.totalhrs = constants.totalhrs >= 160 ?  break : constants.totalhrs += constants.hrs;
            if (totalhrs == 160) {
                break;
            }
            else {
                totalhrs += hrs;
            }
            cal = cal + hrs * constants_1.constants.WAGEPERHR;
            i++;
            cal = cal + hrs * constants_1.constants.WAGEPERHR;
        }
        console.log("Days: " + i + "  Hours: " + totalhrs);
        console.log("Absent Days: " + AbsentDays);
        console.log("Wage is: " + cal);
    };
    return Employee;
}());
var emp = new Employee();
emp.welcomeMsg();
