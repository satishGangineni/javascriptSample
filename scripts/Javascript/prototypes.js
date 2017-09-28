
var project = {

    name : 'quicknav'
}

//console.log(project.foo()); //foo is not a function.
//since the function is not declared in the object.

console.log(project.toString()); //[object Object].

//even the toString method is not declared on the object, it does not thrown an error.
//the toString function is defined on the prototype 

console.log(typeof Object.prototype)
//where Object is a constructor function.


console.log(typeof Object.prototype.toString)//function


console.log(project.prototype)//undefined.
//we do not have access to prototype of an object.

console.log(project.__proto__)//object.
console.log(project.__proto__.toString)//object

console.log(project.__proto__ === Object.prototype)//object

//when we creaet any object using new Object() or {} Json notation. a new object is created from the Object's 
//constructor function. and the new objects's protype property is set to the object's prototype object.
//this is how inheritance works in javascript.


//Object.create() and prototype.
//when we want control over the prototypes. i,e if you want to create your own prototype object and define properties.
//we have to use Object.create() method.


var protoObj = {
    name : 'common Name'
}

var newObj =  Object.create(protoObj);
//the create function has the first parameter it is called prototype, whatever the object we pass that object
//will be set to the newly created object's prototype.

//the above Object.create method creates a new object.
console.log(newObj);
console.log(newObj.name);//common Name
//the above statement shows the prototype chaining.
//the name property is not belongs to the newly created object, so it looks in to the 
//objects prototype object

console.log(typeof newObj.toString)
//the toString function actually found using prototype chaining it found on the protoObj's prototype
console.log(newObj.__proto__ === Object.prototype)//false

console.log(newObj.__proto__.__proto__ === Object.prototype)//true

console.log(newObj.__proto__ === protoObj)//true


var newObj1 =  Object.create(null);
console.log(typeof newObj1.toString) //undefined, since we set the prototype to null
//and for this object there is not prototype has set.


//important functions on Object.prototype

//hasOwnProperty method:

//hasOwnProperty method verifies whether the property exsists on the object or not.

var myobj = {

    name : "I am Linga",
    getName : function(){
        return this.name;
    }
}


console.log(myobj.getName());
console.log(myobj.hasOwnProperty("name")); // true
console.log(myobj.hasOwnProperty("getName")); //true
console.log(myobj.hasOwnProperty("toString")); //false

console.log(myobj.__proto__.hasOwnProperty("toString")); //true


//isPrototpyeOf funtion

//to verifty the object is the protype of another object

var protoObj = {
    name : 'common Name'
}

var newObj =  Object.create(protoObj);

//protoObj is a prototype of newObj.

console.log(protoObj.isPrototypeOf(newObj)) //true
//it returns true since protoObj is a prototype of newObj

var nobj = new Object();
nobj.name = "new object";

console.log(Object.prototype.isPrototypeOf(nobj))//true

//since the prototype object is prototype of any newly created object.


//in operator


// var protoObj = {
//     name : 'common Name'
// }

// var newObj =  Object.create(protoObj);

// console.log(("name" in newObj);


