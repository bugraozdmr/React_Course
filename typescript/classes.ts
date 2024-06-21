class Person{
    // readonly okunurdu ancak dışardan değiştirilemezdi !* ASP'deki gibi readonly context :D
    private id:number;
    private firstName:string;
    private lastName:string;

    constructor(id:number,firstName:string,lastName:string){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
    }

    getFullName = ():string => {
        return `${this.id} - ${this.firstName} - ${this.lastName}`
    }
}

class Employee extends Person{
    constructor(id:number,firstName:string,lastName:string){
        super(id,firstName,lastName);
    }
}

let kisiBilgi = new Person(43,'Grant','Wick');

console.log(kisiBilgi.getFullName());


let newEmp = new Employee(13,'Polat','Alemdar');
console.log(newEmp.getFullName());

class Circle {
    constructor(){
        // her obje oluşmada artar değer this.pi olsaydı public pi olsaydı sadece objede bir artarda ilk oluşturmada
        Circle.pi ++;
    }

    // static ulaşılır
    static pi:number = 3.14;

    static hesapla(yaricap:number,customPi?:number){
        return customPi === undefined ? this.pi * yaricap * yaricap : customPi * yaricap * yaricap;
    }
}


console.log(Circle.pi);
console.log(Circle.hesapla(4));
console.log(Circle.hesapla(4,10));

abstract class Depertment{
    constructor(public name:string){}

    // bu alt sınıfta kesin kullanılmak zorunda
    abstract printMeeting():void;
}

class AccountingDepartment extends Depertment{
    
    constructor(){
        super('accounting and auditing')
    }

    printMeeting(): void {
        console.log('Method not implemented.');
    }
}

let depertment = new AccountingDepartment();

depertment.printMeeting();


interface dog{
    shitCount: number,
    name : string,
    age? : number
}

function gelNAme(doggi : dog){
    if(doggi.age){
        return `${doggi.name} (${doggi.age}) shits ${doggi.shitCount} times`    
    }

    return `${doggi.name} shits ${doggi.shitCount} times`
}

let doggi : dog = {
    shitCount : 421,
    name : 'Doberman',
    age: 3
}

console.log(gelNAme(doggi));

class Doggo implements dog{
    shitCount: number;
    name: string;

}

interface StringFormatter{
    (str:string,isUpper:boolean):string
}

let format : StringFormatter = function ( str:string,isUpper:boolean ){
    return isUpper ? str.toUpperCase() : str.toLocaleLowerCase();
}

console.log(format('AnnAni',true));