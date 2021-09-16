import {constants} from './constants'
let AbsentDays: number = 0;
let hrs : number = 0;
let cal : number = 0;
let totalhrs : number= 10;
var showTotal: number =0;
var total160:any = 0;
var firstFullTime : any = 0;
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
            let wages = [];
            while(i<20 ){
            var checkfor = this.attCheck();
            switch (checkfor) {
                case 1: //for full time
                    console.log("Day "+(i+1)+ " Present For Full Time")
                    hrs = this.fullTime();
                    break;
                case 0: //for part time
                console.log("Day "+(i+1)+ " Present For Part Time")
                hrs = this.partTime();
                    break;
                default:
                    hrs = 0;
                    console.log("Day "+(i+1)+ " Absent")
                    AbsentDays += 1;
                    break;
                }
                if(totalhrs==160){
                    break;
                }
                else{
                    totalhrs += hrs;
                }
                cal = (hrs * constants.WAGEPERHR);
                wages.push(cal);
                console.log("Your Wage for Day "+(i+1)+" is : "+wages[i]);
                console.log("");
                showTotal = showTotal + wages[i];
                i++;
            }
            console.log("Days: "+ i + " Hours: "+totalhrs);
            console.log("Absent Days: "+AbsentDays);
            
            console.log("Wage is: "+wages);
            console.log("Total Wages is :Rs. "+showTotal );

            // filter function
            total160 = wages.filter(wages =>{ return  wages == 160;});
            console.log("Only Full Time Days: " + total160.length);
            console.log("Total Wages is :Rs. "+ total160);


            // find function
            // firstFullTime = wages.find(wages =>{ return  wages == 160;});
            // console.log("First full Time occured at actual postion: "+ (wages.indexOf(firstFullTime)+1));
        }
        

}
let emp = new Employee();
emp.welcomeMsg();