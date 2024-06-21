var employee = {
    empId: 1,
    gender: 'man',
    name: 'Grant'
};
var worker = {
    name: 'not your business',
    department: 'IT',
    gender: 'attack helicopter'
};
console.log(employee.gender);
console.log(worker);
var Employee = /** @class */ (function () {
    function Employee(name, gender, empId) {
        this.name = name;
        this.name = gender;
        this.empId = empId;
    }
    return Employee;
}());
var employeed = new Employee('Namee', 'Tank', 213);
console.log(employeed);
var kisim = {
    id: 412,
    name: 'grant',
    email: 'jkdsajkhdh@gmail.com',
    phone: '4325436543'
};
console.log(kisim);
var musterim = {
    name: 'grant',
    email: 'jkdsajkhdh@gmail.com',
    phone: '4325436543',
    credit: 32121
};
console.log(musterim);
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    if (typeof a === 'string' && typeof b === 'string')
        return a.concat(b);
    throw new Error('Types are not matching sir !');
}
console.log(add(3, 4));
console.log(add('3', '3'));
add(3, '4');
