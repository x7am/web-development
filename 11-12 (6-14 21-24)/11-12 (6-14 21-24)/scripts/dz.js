/*6-14  21-...*/

console.log("№6");

let obj = {
    method1: function() {
    return this},
    method2: function() {
    return this},
    method3: function() {
       return 'метод3';
    }
  }
obj.method1().method2().method3();
console.log(obj.method1().method2().method3());



console.log("№7");
let d1 = [45,78,10,3];
d1[7]=100;
console.log(d1);
console.log(d1[6],d1[7]);



console.log("№8");
let d2 = [45,78,10,3];
let sum2=0;
for(let i = 0; i < d2.length; i++){
    sum2 += d2[i];
    }
console.log(sum2);



console.log("№9");
let d3 = [45,78,10,3];
d3[7]=100;
let sum3=0;
for(let i in d3){
    sum3 = sum3+d3[i];
    }
console.log(sum3);



console.log("№10");
let d4 = [45,78,10,3];
d1[7]=100;
function my (arr) {
    return arr.sort(function compare(num1, num2){
        return (num1.name > num2.name) ? 1 : -1
    });
}
for(let i = 0; i < d2.length; i++){
    let a = d4[i];
    let b = d4[i+1];
    function my (a, b) {
    return a > b ? -1 : b > a ? 1 : -1;
    }
}
console.log(d4.sort(my));


console.log("№11");
let d5 = [];
  for(let i=0; i<3; i++) {
    d5[i]=[]
    for(let j=0; j<4; j++) {
      d5[i][j] = 5;
      }
    }
console.log(d5);


console.log("№12");
class Vector {
    constructor(x, y) {
      this.x = x
      this.y = y
    }
    plus(point) {
      return new Vector(this.x + point.x, this.y + point.y)
    }
    minus(point) {
      return new Vector(this.x - point.x, this.y - point.y)
    }
    get length() {
      return Math.sqrt(this.x * this.x + this.y * this.y)
    }
  }  
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(5, 5).minus(new Vector(2, 3)));
console.log(new Vector(3, 5).length);

/*function Vector(x, y) {
    this.x = x;
    this.y = y;
      
    Vector.prototype.plus = function(vector) {
         return new Vector (this.x + vector.x, this.y + vector.y); 
       }      
    Vector.prototype.minus = function(vector) {
         return new Vector (this.x - vector.x, this.y - vector.y);
       }
     }
    Object.defineProperty(Vector.prototype, "length", {
       get: function() {
         return Math.sqrt(this.x * this.x + this.y * this.y);
       }
     });
*/



console.log("№13");

function repeat(string, times) {
	var result = "";
	for (var i = 0; i < times; ++i)
		result += string;
	return result;
}
function TextCell(text) {
	this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
	return this.text.reduce(function(width, line) {
		return Math.max(width, line.length);
	}, 0);
};
TextCell.prototype.minHeight = function() {
	return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
	var result = [];

	for (var i = 0; i < height; ++i) {
		var line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));
	}
	return result;
};

const StretchCell = function(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
  } 
  StretchCell.prototype.minWidth = function() {
    return Math.max(this.inner.minWidth(), this.width);
  }
  StretchCell.prototype.minHeight = function() {
    return Math.max(this.inner.minHeight(), this.height);
  }
  StretchCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height);
  }

let sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// ? 3
console.log(sc.minHeight());
// ? 2
console.log(sc.draw(3, 2));
// ? ["abc", "   "]



console.log("№14");

function ArraySeq(data) {
    this.position = -1;
    this.data = data;
  }
  function logFive(seq) {
    for (var i = 0; i < 5; i++) {
      if (!seq.next()) {
        break;
      }
      console.log(seq.curr()); 
    }
  }
  ArraySeq.prototype.next = function () {
    if (this.position >= this.data.length - 1) {
      return false;
    }
    this.position++;
    return true;
  }
  ArraySeq.prototype.curr = function () {
    return this.data[this.position];
  } 
  function RangeSeq(from, to) {
    this.position = from - 1;
    this.to = to;
  }
  RangeSeq.prototype.next = function () {
    if (this.position >= this.to) {
      return false;
    }
    this.position++;
    return true;
  }
  
  RangeSeq.prototype.curr = function () {
    return this.position;
  } 
  logFive(new ArraySeq([1, 2])); 
  // → 1
  // → 2
  logFive(new RangeSeq(100, 1000)); 
  // → 100
  // → 101
  // → 102
  // → 103
  // → 104





console.log("№21");
  function calendar(id, year, month) {
    let elem = document.getElementById(id);
    let mon = month - 1; 
    let d = new Date(year, mon);
  
    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }
    while(d.getMonth() == mon) {
      table += '<td>'+d.getDate()+'</td>';
      if (getDay(d) % 7 == 6) { 
        table += '</tr><tr>';
      }
      d.setDate(d.getDate()+1);
    }

    if (getDay(d) != 0) {
      for (var i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }
    table += '</tr></table>';
    elem.innerHTML = table;
  }
  
  function getDay(date) { 
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
  }
  
calendar("calendar", 2021, 12)





console.log("№22");
Number.prototype.isOdd = function(num){
    return (num % 2) == 1;
  }
    console.log(Number.prototype.isOdd(3));


console.log("№23");

let construktor = {
    method1: function() {
            console.log("Первое звено"); 
            return this;
         },
    method2: function() {
        console.log("Второе звено"); 
            return this;},
    method3: function() {
        console.log("Третье звено"); 
            return this;},
    }
console.log(construktor.method1().method2().method3());


console.log("№24");
function Unit(x, y){
  this.x = x;
  this.y = y;
}

Unit.prototype = {
  get X() {return this.x;},
  get Y() {return this.y;},
  set X(val) {this.x=val;},
  set Y(val) {this.y=val;}
}

function Fighter(power){
  this.power = power;
}

Fighter.prototype = Unit.prototype;
Fighter.prototype += {
  get power() {return power;},
  set power(val) {this.power = val;}
}

f = new Fighter(8);
f.X = 4;
f.Y = 5;
console.log(f.Y);

