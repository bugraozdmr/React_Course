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