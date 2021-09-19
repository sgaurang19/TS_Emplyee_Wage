"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var constants_1 = require("./constants");
var AbsentDays = 0;
var hrs = 0;
var cal = 0;
var totalhrs = 0;
var showTotal = 0;
var total160 = 0;
var firstFullTime = 0;
var first = 0;
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
    Employee.prototype.firstFullTimeWage = function (wages) {
        first = wages.find(function (wages1) { return wages1 == 80; });
        return first;
    };
    Employee.prototype.EmpWage = function () {
        var i = 0;
        var wages = [];
        var wagesArray = [];
        // let allWageDetails = {};
        while (i < 20) {
            var checkfor = this.attCheck();
            console.log("");
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
            showTotal = showTotal + wages[i];
            var obj = {
                Day: i + 1,
                WorkHR: hrs,
                Wage: cal
            };
            console.log(obj);
            wagesArray.push(obj);
            i++;
        }
        console.log("\n\n Days: " + i + " Hours: " + totalhrs);
        console.log("Absent Days: " + AbsentDays);
        console.log("Wage is: " + wages);
        console.log("Total Wages is :Rs. " + showTotal);
        // filter function
        total160 = wages.filter(function (wages) { return wages == 80; });
        console.log("Only Full Time Days: " + total160.length);
        console.log("Total Wages is :Rs. " + total160);
        // console.log("Array of object: "+ wagesArray)
        // find function
        firstFullTime = this.firstFullTimeWage(wages);
        console.log("First full Time occured at actual postion: " + (wages.indexOf(firstFullTime) + 1));
        // allWageObject():Object {
    };
    return Employee;
}());
// extend class
var id1;
var name1;
var salary1;
var EmployeePayrollData = /** @class */ (function () {
    function class_1(id, name, salary) {
        id1 = id;
        name1 = name;
        salary1 = salary;
    }
    class_1.prototype.eId = function () {
        return id1;
    };
    class_1.prototype.eName = function () {
        return name1;
    };
    class_1.prototype.eSalary = function () {
        return salary1;
    };
    return class_1;
}());
var gender1;
var startDate1;
var NewEmployeePayrollData = /** @class */ (function (_super) {
    __extends(NewEmployeePayrollData, _super);
    // constructor(id=0, name='User', salary=0, gender='female', startDate='10 Aug 2021') {
    function NewEmployeePayrollData(id, name, salary, gender, startdate) {
        var _this = _super.call(this, id, name, salary) || this;
        gender1 = gender;
        startDate1 = startdate;
        return _this;
    }
    NewEmployeePayrollData.prototype.geteGender = function () {
        return gender1;
    };
    NewEmployeePayrollData.prototype.geteStartDate = function () {
        return startDate1;
    };
    return NewEmployeePayrollData;
}(EmployeePayrollData));
;
var newObj = new NewEmployeePayrollData(1, 'New Employee', 1600, 'male', '20 Jul 2021');
console.log('New Employee details:');
console.log("Name: " + newObj.eName() + ", ID: " + newObj.eId() + ", Salary: " + newObj.eSalary() + ", Gender: " + newObj.geteGender() + ", Start date: " + newObj.geteStartDate());
// end
var emp = new Employee();
