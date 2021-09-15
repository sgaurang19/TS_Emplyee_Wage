import {constants} from './constants'

class Employee{
    constructor(){
        // welcome message
        this.welcomeMsg()
    }
    welcomeMsg():void {
        console.log("|*** Welcome to Empolyee Wage Computation ***|");

    }
        // For attandace check
        attCheck(): number{
            let checkfor = Math.floor((Math.random() *10 ) % 3);
            return checkfor;
        }
        // for full time work
        fullTime(): number{
            constants.hrs = constants.FULL_TIME_HR;
            return constants.hrs;
        }
        // for part time work
        partTime(): number{
            constants.hrs = constants.PART_TIME_HR;
            return constants.hrs;
        }
        EmpWage(): void{
            var i =0;

            var checkfor = this.attCheck();
            switch (checkfor) {
                case 1: //for full time
                    console.log("Day "+i+ " Present For Full Time")
                    constants.hrs = this.fullTime();
                    break;
                case 0: //for part time
                console.log("Day "+i+ " Present For Part Time")
                constants.hrs = this.partTime();
                    break;
                default:
                    constants.hrs = 0;
                    console.log("Day "+i+ " Absent")
                    constants.AbsentDays += 1;
                    break;
                }
             
                constants.cal = constants.cal + constants.hrs * constants.WAGEPERHR;
              
         
            console.log("Wage is: "+ constants.cal);
        }
}
let emp = new Employee();
emp.welcomeMsg();