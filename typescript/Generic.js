var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function getRandomNumber(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
function getRandomName(names) {
    var randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}
var numbers = [2, 312, 3, 213, 21, 31];
var names = ['ayse', 'mehmet', 'ali'];
console.log(getRandomNumber(numbers));
console.log(getRandomName(names));
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
console.log(getRandomElement(names));
console.log(getRandomElement(numbers));
// object olacak zorunlu demek
function merge(obj1, obj2) {
    // spread ne var ne yok basar senin girmene gerek yok
    return __assign(__assign({}, obj1), obj2);
}
var person = merge({ name: 'Grant' }, { age: 20 });
console.log(person);
var month = {
    key: 1,
    value: 'January'
};
console.log(month);
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.add = function (o) {
        this.items.push(o);
    };
    List.prototype.remove = function (o) {
        var index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    };
    List.prototype.getItems = function () {
        console.log(this.items);
    };
    return List;
}());
var list = new List;
for (var i = 0; i < 10; i++) {
    list.add(i);
}
list.getItems();
list.remove(1);
list.getItems();
