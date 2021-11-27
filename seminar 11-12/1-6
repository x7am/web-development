//задание 1
let city1 = {}
city1.name ='ГородN';
city1.population = 10000000;

//задание 2
let city2 = {}
city2.name = 'ГородM'
city2.population = 1e6

//задание 3
city1.getName = function(){
    return this.name;
}
city2.getName = function(){
    return this.name;
}
console.log(city1.getName(), city2.getName());

//задание 4
city1.exportStr = function(){
    return `name=${this.name}\npopulation=${this.population}\n`;
}
city2.exportStr = function(){
    return `name=${this.name}\npopulation=${this.population}\n`;
}
console.log(city1.exportStr(), city2.exportStr());

//задание 5
function getObj(){
    return this;
}
city1.getCity = getObj;
city2.getCity = getObj;
console.log(city1.getCity().getName(),city1.getCity().population)
console.log(city2.getCity().getName(),city2.getCity().population)

//заданиие 6
let obj = {
    method1:function(){
        return this
    },
    method2:function(){
        return this
    },
    method3:function(){
        console.log('метод3')
    }
    
}
obj.method1().method2().method3()
