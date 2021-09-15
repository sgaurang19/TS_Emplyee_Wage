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
    
}
let emp = new Employee();
emp.welcomeMsg();