function getRandomNumber(items:number[]):number{
    let randomIndex = Math.floor(Math.random()*items.length);
    return items[randomIndex];
}

function getRandomName(names:string[]):string{
    let randomIndex = Math.floor(Math.random()*names.length);
    return names[randomIndex];
}


let numbers = [2,312,3,213,21,31];
let names = ['ayse','mehmet','ali'];

console.log(getRandomNumber(numbers));
console.log(getRandomName(names));


function getRandomElement<T>(items:T[]):T{
    let randomIndex = Math.floor(Math.random()*items.length);
    return items[randomIndex];
}

console.log(getRandomElement<string>(names));
console.log(getRandomElement<number>(numbers));


// object olacak zorunlu demek
function merge<U extends object,V extends object>(obj1:U,obj2:V){
    // spread ne var ne yok basar senin girmene gerek yok
    return{
        ...obj1,
        ...obj2
    }
}

let person = merge(
    {name:'Grant'},
    {age:20}
);

console.log(person);

interface Months<U,V>{
    key:U;
    value:V;
}

let month : Months<number,string> = {
    key : 1,
    value : 'January'
}
console.log(month);


interface Collection<T> {
    add(o:T):void;
    remove(o:T):void
}

class List<T> implements Collection<T>{
    private items: T[] = [];
    
    add(o: T): void {
        this.items.push(o);
    }
    remove(o: T): void {
        let index = this.items.indexOf(o);
        if(index > -1 ){
            this.items.splice(index,1);
        }
    }

    public getItems():void{
        console.log(this.items);
    }
}

let list = new List<number>;

for(let i = 0 ;i<10;i++){
    list.add(i);
}

list.getItems();

list.remove(1);
list.getItems();

