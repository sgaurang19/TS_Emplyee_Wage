"use strict";
exports.__esModule = true;
var constants_1 = require("./constants");
var AbsentDays = 0;
var hrs = 0;
var cal = 0;
var totalhrs = 10;
var showTotal = 0;
var Employee = /** @class */ (function () {
    function Employee() {
        // welcome message
        this.welcomeMsg();
    }
    Employee.prototype.welcomeMsg = function () {
        console.log("|**** Welcome to Empolyee Wage Computation ****|");
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
        var wages = [];
        while (i < 20) {
            var checkfor = this.attCheck();
            switch (checkfor) {
                case 1: //for full time
                    console.log("Day " + (i + 1) + " Present For Full Time");
                    hrs = this.fullTime();
                    break;
                case 0: //for part time
                    console.log("Day " + (i + 1) + " Present For Part Time");
                    hrs = this.partTime();
                    break;
                default:
                    hrs = 0;
                    console.log("Day " + (i + 1) + " Absent");
                    AbsentDays += 1;
                    break;
            }
            if (totalhrs == 160) {
                break;
            }
            else {
                totalhrs += hrs;
            }
            cal = (hrs * constants_1.constants.WAGEPERHR);
            wages.push(cal);
            console.log("Your Wage for Day " + (i + 1) + " is : " + wages[i]);
            console.log("");
            showTotal = showTotal + wages[i];
            i++;
        }
        console.log("Days: " + i + " Hours: " + totalhrs);
        console.log("Absent Days: " + AbsentDays);
        console.log("Wage is: " + wages);
        console.log("Total Wages is :Rs. " + showTotal);
    };
    return Employee;
}());
var emp = new Employee();
emp.welcomeMsg();
