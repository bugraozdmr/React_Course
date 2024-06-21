var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(id, firstName, lastName) {
        var _this = this;
        this.getFullName = function () {
            return "".concat(_this.id, " - ").concat(_this.firstName, " - ").concat(_this.lastName);
        };
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, firstName, lastName) {
        return _super.call(this, id, firstName, lastName) || this;
    }
    return Employee;
}(Person));
var kisiBilgi = new Person(43, 'Grant', 'Wick');
console.log(kisiBilgi.getFullName());
var newEmp = new Employee(13, 'Polat', 'Alemdar');
console.log(newEmp.getFullName());
var Circle = /** @class */ (function () {
    function Circle() {
        // her obje oluşmada artar değer this.pi olsaydı public pi olsaydı sadece objede bir artarda ilk oluşturmada
        Circle.pi++;
    }
    Circle.hesapla = function (yaricap, customPi) {
        return customPi === undefined ? this.pi * yaricap * yaricap : customPi * yaricap * yaricap;
    };
    // static ulaşılır
    Circle.pi = 3.14;
    return Circle;
}());
console.log(Circle.pi);
console.log(Circle.hesapla(4));
console.log(Circle.hesapla(4, 10));
var Depertment = /** @class */ (function () {
    function Depertment(name) {
        this.name = name;
    }
    return Depertment;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'accounting and auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('Method not implemented.');
    };
    return AccountingDepartment;
}(Depertment));
var depertment = new AccountingDepartment();
depertment.printMeeting();
function gelNAme(doggi) {
    if (doggi.age) {
        return "".concat(doggi.name, " (").concat(doggi.age, ") shits ").concat(doggi.shitCount, " times");
    }
    return "".concat(doggi.name, " shits ").concat(doggi.shitCount, " times");
}
var doggi = {
    shitCount: 421,
    name: 'Doberman',
    age: 3
};
console.log(gelNAme(doggi));
var Doggo = /** @class */ (function () {
    function Doggo() {
    }
    return Doggo;
}());
var format = function (str, isUpper) {
    return isUpper ? str.toUpperCase() : str.toLocaleLowerCase();
};
console.log(format('AnnAni', true));
