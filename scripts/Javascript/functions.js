//function variable or function expression
//there is a type called function in javascript.


var funcExpression = function(){
	console.log(funcExpression);
};

console.log(typeof funcExpression);

var funcExpression1 = function functionExpression2() {
	throw ("error has occured"); //see the stack trace! when it is called.
};

//funcExpression1();


//Constructor functions!.

console.log(typeof Object) //function

//The Object is actually an constructor function.
//by convention, the constructor funtions begin with Upper Case letter.

function Employee(name){
	this.name = name; //this refer to the current object.
	this.age = 90;
	this.printName = function(){
		console.log( "instance " + this.name);
	}
}

var emp = new Employee("ram guru");//this looks like a class constructor.
console.log(emp.name);
console.log(emp.age);

console.log(typeof emp);
console.log(emp);



var emp1 = {name:"arjun reddy", age:60};
console.log(emp1);

// Employee.prototype.printName = function()
// {
// 	console.log(this.name);
// }



var e1 =  new Employee("emp1");
var e2 =  new Employee("emp2");

Employee.prototype.printName = function()
{
	console.log(this.name);
}

console.log(e1 === e2);//false
console.log(e1.__proto__ === e2.__proto__);//true, both shares the same prototype.
//if we add any function to the prototype it is accessible to all other object types.

console.log("prototype");
console.log(e1.prototype === e2.prototype);//true, 
//we can refer the prototype with "prototype"  instead of __proto__ for the Constructor functions.
 
console.log(e1.__proto__ === Object.prototype);//false. since both object types are different. 

var e3 = {name:"emp3"};
console.log(e3.__proto__ === Object.prototype);//true. 
console.log(Employee.prototype === Object.prototype);//false.
console.log(Employee.prototype == e1.__proto__) ; 


e1.printName(); //"instance emp1
e2.printName(); //"instance emp2

console.log(e1.printName === e2.printName) ;  //false


