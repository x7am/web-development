console.log("№1")
let city1 = {};
city1.name = "ГородN";
city1.population = 10000000;
console.log(`Название ${city1.name}, население ${city1.population}`);

console.log("№2")
let city2 = {name: "Город M", population: 1e6};
console.log(`Название ${city2.name}, население ${city2.population}`);

console.log("№3")
function getName(){
    return this.name
};
city1.getName = getName;
city2.getName = getName;

console.log(city1.getName());
console.log(city2.getName());


console.log("№4")
function exportStr(){
    return `name=${this.name}\npopulation=${this.population}\n` };
city1.exportStr = exportStr;
city2.exportStr = exportStr;

console.log(city1.exportStr());
console.log(city2.exportStr());


console.log("№5")
function getObj() { 
    return this
};
city1.getCity = getObj;
city2.getCity = getObj;
 
console.log(city1.getCity().getName());
console.log(city2.getCity().getName());