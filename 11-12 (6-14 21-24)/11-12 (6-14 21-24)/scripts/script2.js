console.log("№15");

function Card(from, to){
    this.from = from,
    this.to = to,

    this.show = function(){
        return `${this.from} - ${this.to}`;
    }
} 
let c1 = new Card("Екатеринбург", "Москва");
console.log(c1.show());


console.log("№16");
class Human{
    constructor(name, age, height){
        this.name = name,
        this.age = age,
        this.height = height
    }
    getInfo() {
        return `${this.name}, ${this.age}, ${this.height}`;
    }
    get firstName() {
        return this.name
      }
}
let humans = [
    new Human("Коля", 23, 180),
    new Human("Даша", 19, 170),
    new Human("Ваня", 18, 192),
    new Human("Петя", 45, 178),
    new Human("Вася", 34, 197),
    new Human("Джони", 40, 168),
    new Human("Катя", 37, 160),
    new Human("Петя", 29, 200),
    new Human("Соня", 21, 172),
    new Human("Женя", 25, 175)];
for (let human of humans)
    console.log(human.getInfo());



console.log("№17");
humans =[
    new Human('Коля',23,180),
    new Human('Даша',19,170),
    new Human('Ваня',18,192),
    new Human('Петя',45,178),
    new Human('Вася',34,197),
    new Human('Джони',40,168),
    new Human('Катя',37,160),
    new Human('Петя',29,200),
    new Human('Соня', 21,172),
    new Human('Женя',25,175)
];

function sortByName(array) {
    return array.sort(function compare(num1, num2){
        return (num1.name > num2.name) ? 1 : -1
    });
}
function sortByHeight(array) {
    return array.sort(function compare(num1, num2){
        return(num1.height < num2.height) ? 1 : -1
    });
}
console.log(sortByHeight(humans));




console.log("№18");
let dl1 =new Date(2045, 0, 1,00, 00);
console.log(dl1);

console.log("№19");
function secondsAgo(Time) {
    return Math.round((new Date().getTime() / 1000)) - Time;
}
console.log(secondsAgo(1/01/1970));

console.log("№20");
function getDays(Month, Year) {
    return 32 - new Date(Year, (Month-1), 32).getDate();
 }
console.log(getDays(2,2002));

