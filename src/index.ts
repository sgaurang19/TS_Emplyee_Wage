import {constants} from './constants'
let AbsentDays: number = 0;
let hrs : number = 0;
let cal : number = 0;
let totalhrs : number= 10;
class Employee{
    constructor(){
        // welcome message
        this.welcomeMsg()
    }
    welcomeMsg():void {
        console.log("|**** Welcome to Empolyee Wage Computation ****|");
        this.EmpWage()
    }
        // For attandace check
        attCheck(): number{
            let checkfor = Math.floor((Math.random() *10 ) % 3);
            return checkfor;
        }
        // for full time work
        fullTime(): number{
            hrs = constants.FULL_TIME_HR;
            return hrs;
        }
        // for part time work
        partTime(): number{
            hrs = constants.PART_TIME_HR;
            return hrs;
        }
        EmpWage(): void{
            var i =0;
            while(i<20 ){
            var checkfor = this.attCheck();
            switch (checkfor) {
                case 1: //for full time
                    console.log("Day "+i+ " Present For Full Time")
                    hrs = this.fullTime();
                    break;
                case 0: //for part time
                console.log("Day "+i+ " Present For Part Time")
                hrs = this.partTime();
                    break;
                default:
                    hrs = 0;
                    console.log("Day "+i+ " Absent")
                    AbsentDays += 1;
                    break;
                }
                console.log(totalhrs)
                // constants.totalhrs = constants.totalhrs >= 160 ?  break : constants.totalhrs += constants.hrs;
                if(totalhrs >= constants.WORKING_HRS){
                    break;
                }
                else{
                    totalhrs += hrs;
                
                cal = cal + hrs * constants.WAGEPERHR;
                i++;
             
                cal = cal + hrs * constants.WAGEPERHR;
                }
              
            }
            console.log(`Days: ${i}  Hours: ${totalhrs}` );
            console.log(`Absent Days: ${AbsentDays}`);
            console.log(`Wage is: ${cal}`);
        }
        

}
let emp = new Employee();
emp.welcomeMsg();