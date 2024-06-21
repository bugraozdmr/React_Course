var age = 29;
var firstname = 'Grant';
var lastname = 'Wick';
var isUpdated = true;
function display(id, name) {
    console.log('Id :' + id + ', Name : ' + name);
}
//display(age,firstname);
var updatedStr = "".concat(firstname, " - ").concat(lastname);
// console.log(updatedStr);
// Aynılar
// let names: string[] = ['Grant','Polat','Memati'];
var names = ['Grant', 'Polat', 'Memati'];
// console.log(names);
// let arrrr: string[string | number] = ['Grant','Polat','Memati'];
var arrr = ['Grant', 'Polat', 'Memati', 234, 12];
//console.log(arrr);
// TUPLE -------
var instructor = [1, 'Grant'];
var user;
user = [1, 'Alex', true];
//console.log(user);
//console.log(user[2]);
var employee;
employee = [[1, 'Steve'], [2, 'Alex'], [3, 'Enderman']];
//let instructor2 : object;
var instructor2;
instructor2 = {
    firstName: 'Grant',
    lastName: 'Wick',
    age: 22,
    jobTitle: 'IT'
};
//console.log(instructor2);
// burda hata almamak için tipleri belirtilen bir obje oluşturulmalı
//console.log(instructor2.age);
var person2;
person2 = {
    firstName: 'Alex',
    lastName: 'Wick',
    age: 22,
    jobTitle: 'IT'
};
//console.log(person2);
