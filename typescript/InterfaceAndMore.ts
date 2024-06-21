interface IPerson {
    name:string;
    gender:string;
}

interface IEmployee extends IPerson{
    empId:number;
}

interface IWorker extends IPerson{
    department:string;
}

let employee : IEmployee = {
    empId : 1,
    gender : 'man',
    name : 'Grant'
}

let worker : IWorker = {
    name : 'not your business',
    department : 'IT',
    gender : 'attack helicopter'
}

console.log(employee.gender);
console.log(worker);


class Employee implements IPerson{
    name: string;
    gender: string;
    empId : number;
    
    constructor(name:string,gender:string,empId : number){
        this.name = name;
        this.name = gender;
        this.empId = empId;
    }
}

let employeed = new Employee('Namee','Tank',213);

console.log(employeed);


interface BusinessPartner{
    name:string;
    credit:number;
}

interface Identity{
    name:string;
    id:number;
}

interface Contact{
    email:string;
    phone:string;
}

// ikisinede sahip oldu
type Employeew = Identity & Contact;

let kisim:Employeew = {
    id:412,
    name:'grant',
    email:'jkdsajkhdh@gmail.com',
    phone:'4325436543'
};

console.log(kisim);

type Customer = BusinessPartner & Contact;

let musterim:Customer = {
    name:'grant',
    email:'jkdsajkhdh@gmail.com',
    phone:'4325436543',
    credit:32121
};

console.log(musterim);


type tip = string | number;

function add(a: tip,b : tip){
    if(typeof a === 'number' && typeof b === 'number') return a+b;

    if(typeof a === 'string' && typeof b === 'string') return a.concat(b);

    throw new Error('Types are not matching sir !');
}

console.log(add(3,4));
console.log(add('3','3'));
add(3,'4');