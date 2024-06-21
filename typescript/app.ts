let age:number = 29;
let firstname:string = 'Grant';
let lastname:string = 'Wick';
let isUpdated: boolean = true;


function display(id:any,name:string){
    console.log('Id :' + id + ', Name : '+ name);
}

//display(age,firstname);

let updatedStr:string = `${firstname} - ${lastname}`;

// console.log(updatedStr);

// Aynılar
// let names: string[] = ['Grant','Polat','Memati'];
let names: Array<string> = ['Grant','Polat','Memati'];
// console.log(names);


// let arrrr: string[string | number] = ['Grant','Polat','Memati'];
let arrr: Array<string | number> = ['Grant','Polat','Memati',234,12];
//console.log(arrr);


// TUPLE -------
let instructor : [number,string] = [1,'Grant'];
let user:[number,string,boolean];

user = [1,'Alex',true];

//console.log(user);
//console.log(user[2]);

let employee:[number,string][];

employee = [[1,'Steve'],[2,'Alex'],[3,'Enderman']];

//console.log(employee);


// OBJECT ------
type Person = {
    firstName : string,
    lastName : string,
    age : number,
    jobTitle : string
};

//let instructor2 : object;
let instructor2 :Person;

instructor2 = {
    firstName:'Grant',
    lastName : 'Wick',
    age : 22,
    jobTitle : 'IT'
}

//console.log(instructor2);
// burda hata almamak için tipleri belirtilen bir obje oluşturulmalı
//console.log(instructor2.age);

let person2 : {
    firstName : string,
    lastName : string,
    age : number,
    jobTitle : string
};

person2 = {
    firstName:'Alex',
    lastName : 'Wick',
    age : 22,
    jobTitle : 'IT'
};

//console.log(person2);


// ENUM -----
enum Media{
    Newspaper=1,
    Newsletter,
    Magazine,
    Book
};

//console.log(Media.Newspaper);

enum PrintMedia{
    Newspaper= 'Newspaper',
    Newsletter = 'Newsletter',
    Magazine = 'Magazine',
    Book = 'Book'
};

//console.log(PrintMedia.Magazine);
//console.log(PrintMedia['Magazine']);
//console.log(Media[2]);


// Union -----
let code : string|number|boolean = '123';
//console.log(code);

// Any ------
let smth:any = 'hello';
smth = 56;
smth = true;

let smth2:any[] = ['sdsad',231,true];

// void ----

function sayHello():void{
    console.log('Hello!');
}

//sayHello();

// Never ----
// bir şey dönmez ! SADECE HATA MESAJI
function throwError(errorMsg: string):never{
    throw new Error(errorMsg);
}

//throwError('ezik');

let something : void = undefined;
// let none : never = undefined HATA



// TYPE INTERFACE ----

function increment(counter:number):number{
    return counter;
}

//console.log(increment(34));



// TYPE ASSERTION

let code2 : any = 213;
let empcode = <number>code2;

//console.log(typeof(empcode));

interface Emp{
    name : string,
    code : number
};

// CAsTIng
let employeeee = <Emp>{};
employeeee.name = 'Ahmet';
employeeee.code = 22132;

//console.log(employeeee)


// if Else ****

// console.log(5>3 && console.log(312)); js'de çalışıyor ama ts'de yok

// Switch CASE ******

let day:number = 0

/*switch(day){
    case 0:
        console.log('pazar');
        break;
    default:
        console.log('hasda');
        break
}
*/
// for *******

/*for(let i=0;i<10;i++){
    console.log(i);
}*/

let arrra:number[] = [1,23,2,4,56,6,7];

/*for(let i=0;i<arrra.length;i++){
    console.log(arrra[i]);
}*/

// değeri verir
/*for(let item of arrra){
    console.log(item);
}*/

// indexi verir verir
/*for(let item in arrra){
    console.log(item);
}*/


// WHILE *******

// FUNCTIONS ******

// c? olsa'da olur olmasada -- yoksa undefined oluyor zaten
function carpim(a:number,b:number,c?:number):number{
    if(typeof(c) !== 'undefined'){
        return a*b*c;
    }
    return a*b;
}


//console.log(carpim(3,3));
//console.log(carpim(3,4,5));



let carpim2 = (a:number,b:number,c?:number):number => {
    if(typeof(c) !== 'undefined'){
        return a*b*c;
    }
    return a*b;
}

//console.log(carpim2(3,3));
//console.log(carpim2(3,4,5));

// REST PARAMATERS ******
function tootla(...numbers:number[]):number{
    let total = 0;
    numbers.forEach((num) => total+= num);
    return total;
}

//console.log(tootla(10,20,30,40,50,1,23,412,124,3252,532,1));


let his = (message:string,...names:string[]):void => {
    names.forEach((name) => {console.log(`${message} ${name}`)});

    console.log(names.join(','));
}

his('F$Ck you','Ali','Mehmet','Polat');