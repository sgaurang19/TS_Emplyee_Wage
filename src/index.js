var Employee = /** @class */ (function () {
    function Employee() {
        // welcome message
        this.welcomeMsg();
    }
    Employee.prototype.welcomeMsg = function () {
        console.log("|*** Welcome to Empolyee Wage Computation ***|");
    };
    return Employee;
}());
var emp = new Employee();
emp.welcomeMsg();
