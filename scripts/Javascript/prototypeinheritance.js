
'use strict'


var arr = ["blue","green","yellow","red"];

Object.defineProperty(Array.prototype,"last",{
    get:function(){
        return this[this.length-1];
    }
});



var arr2 = ["one","two","three","four"];

console.log(arr.last);
console.log(arr2.last);
//console.log(arr2);
// console.log(arr2.__proto__);
// console.log(Array.prototype);


//Array is just a constructor function.

var cat = {name:"flyffy", age:3, color:"white"};

console.log(cat);
console.log(cat.__proto__);

var func = function(){
}


console.log(func.prototype);


function Animal(voice){
    this.voice = voice || "Grunt!!!";
}

Animal.prototype.speak = function(){
    console.log(this.voice);
}


function Dog(name, color){
    Animal.call(this,"BowBOwBOw!!!");
    this.name = name;
    this.color = color;
}

Dog.prototype = Object.create(Animal.prototype);
//Dog.prototype.constructor = Dog;

console.log(Dog.prototype);
var d1 = new Dog("Emmy","brown");
console.log(d1.__proto__);
console.log(d1.__proto__.__proto__);
//d1.speak();
console.log(d1);

console.log(Dog.prototype ===Animal.prototype)


