import {constants} from './constants'
let AbsentDays: number = 0;
let hrs : number = 0;
let cal : number = 0;
let totalhrs : number= 0;
var showTotal: number =0;
var total160:any = 0;
var firstFullTime : any = 0;
let first: any = 0;
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
        firstFullTimeWage(wages: Array<number>):number{
           
           first =  wages.find(function(wages1)
           { return  wages1 == 80;});
           
         return first;
        }
        
        EmpWage(): void{
            var i =0;
            let wages :Array<number> = [];
            let wagesArray : any= [];
            // let allWageDetails = {};
            while(i<20 ){
            var checkfor = this.attCheck();
            console.log("");
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
                
                showTotal = showTotal + wages[i];
                let obj : {
                    Day: number,
                    WorkHR : number,
                    Wage: number
                } = {
                    Day: i+1,
                    WorkHR: hrs,
                    Wage: cal
                }
                console.log(obj)
                wagesArray.push(obj);
                i++;
            }
            console.log("\n\n Days: "+ i + " Hours: "+totalhrs);
            console.log("Absent Days: "+AbsentDays);
            
            console.log("Wage is: "+wages);
            console.log("Total Wages is :Rs. "+showTotal );

            // filter function
            total160 = wages.filter(wages =>{ return  wages == 80;});
            console.log("Only Full Time Days: " + total160.length);
            console.log("Total Wages is :Rs. "+ total160);
            
            // console.log("Array of object: "+ wagesArray)


            // find function
            firstFullTime = this.firstFullTimeWage(wages);
            console.log("First full Time occured at actual postion: "+ (wages.indexOf(firstFullTime)+1));
            // allWageObject():Object {
                
               
              
        
        }
        

}

// extend class
let id1:number;
let name1 : string;
let salary1: number;
const EmployeePayrollData = class {
    constructor(id:number, name:string, salary:number) {
        id1 = id;
        name1 = name;
        salary1 = salary;
    }

    eId():number {
        return id1
    }
    eName():string {
        return name1;
    }
    eSalary():number {
        return salary1;
    }
};


let gender1:string;
let startDate1:string;
class NewEmployeePayrollData extends EmployeePayrollData {
    // constructor(id=0, name='User', salary=0, gender='female', startDate='10 Aug 2021') {
    constructor(id:number,name:string,salary:number, gender:string, startdate:string) {
        super(id,name,salary);
        gender1 = gender;
        startDate1 = startdate;
    }

    geteGender():string {
        return gender1;
    }
    geteStartDate(): string {
        return startDate1;
    }

  
};

const newObj = new NewEmployeePayrollData(1, 'New Employee', 1600, 'male', '20 Jul 2021');

console.log('New Employee details:');
console.log(`Name: ${newObj.eName()}, ID: ${newObj.eId()}, Salary: ${newObj.eSalary()}, Gender: ${newObj.geteGender()}, Start date: ${newObj.geteStartDate()}`);

// end

let emp = new Employee();

