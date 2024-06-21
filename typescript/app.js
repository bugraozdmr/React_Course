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
// ENUM -----
var Media;
(function (Media) {
    Media[Media["Newspaper"] = 1] = "Newspaper";
    Media[Media["Newsletter"] = 2] = "Newsletter";
    Media[Media["Magazine"] = 3] = "Magazine";
    Media[Media["Book"] = 4] = "Book";
})(Media || (Media = {}));
;
//console.log(Media.Newspaper);
var PrintMedia;
(function (PrintMedia) {
    PrintMedia["Newspaper"] = "Newspaper";
    PrintMedia["Newsletter"] = "Newsletter";
    PrintMedia["Magazine"] = "Magazine";
    PrintMedia["Book"] = "Book";
})(PrintMedia || (PrintMedia = {}));
;
//console.log(PrintMedia.Magazine);
//console.log(PrintMedia['Magazine']);
//console.log(Media[2]);
// Union -----
var code = '123';
//console.log(code);
// Any ------
var smth = 'hello';
smth = 56;
smth = true;
var smth2 = ['sdsad', 231, true];
// void ----
function sayHello() {
    console.log('Hello!');
}
//sayHello();
// Never ----
// bir şey dönmez ! SADECE HATA MESAJI
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
//throwError('ezik');
var something = undefined;
// let none : never = undefined HATA
// TYPE INTERFACE ----
function increment(counter) {
    return counter;
}
//console.log(increment(34));
// TYPE ASSERTION
var code2 = 213;
var empcode = code2;
;
// CAsTIng
var employeeee = {};
employeeee.name = 'Ahmet';
employeeee.code = 22132;
//console.log(employeeee)
// if Else ****
// console.log(5>3 && console.log(312)); js'de çalışıyor ama ts'de yok
// Switch CASE ******
var day = 0;
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
var arrra = [1, 23, 2, 4, 56, 6, 7];
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
function carpim(a, b, c) {
    if (typeof (c) !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
//console.log(carpim(3,3));
//console.log(carpim(3,4,5));
var carpim2 = function (a, b, c) {
    if (typeof (c) !== 'undefined') {
        return a * b * c;
    }
    return a * b;
};
//console.log(carpim2(3,3));
//console.log(carpim2(3,4,5));
// REST PARAMATERS ******
function tootla() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
//console.log(tootla(10,20,30,40,50,1,23,412,124,3252,532,1));
var his = function (message) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    names.forEach(function (name) { console.log("".concat(message, " ").concat(name)); });
    console.log(names.join(','));
};
his('F$Ck you', 'Ali', 'Mehmet', 'Polat');
