////testing private and public properties. 
function testClass(){
    var privatevaribale = "this is private variable.";
    this.publicvariable = "this is a public variable";

     function testMethod(){
        return "this is a test method"
    }

    console.log("hello");
    // return {
    //     privatevaribale:privatevaribale
    // }
};

//testClass();

// console.log("private", testClass.privatevaribale);
// console.log("public", testClass.publicvariable);
// console.log("public method.", testClass.testMethod());



function person(firstName,lastName){

    var privateV = "private variable.";
    this.FirstName = firstName;
    this.LastName = lastName;

    this.getName=function(){
        return this.FirstName + " "+ this.LastName;
    }
}

//instance members; they are called on function not on object.
person.staticperson = "classVariable";
person.staticMetod = function(){

    console.log("static method:" , this.staticperson);
}


person.prototype.personName = "Robo2";
var pobj1 = new person("rama","krishna");
var pobj2 = new person("Hare","Rama");
pobj1.personName = "Robo3";


console.log(person.privateV);
console.log(person.staticperson);
console.log("person.personName", person.personName);//gives undefind, since personName is an object method.
person.staticMetod();

console.log(pobj1.FirstName);
console.log(pobj1.LastName);
console.log(pobj1.personName);
console.log("static ", pobj1.staticperson);
//pobj1.staticMetod();//gives an error, since static method is not on the object.



console.log(pobj2.FirstName);
console.log(pobj2.LastName);
console.log(pobj2.personName);
console.log("static ", pobj2.staticperson);
//pobj2.staticMetod(); //gives an error, since static method is not on the object. 


