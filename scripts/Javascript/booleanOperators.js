//!, &&, || ( not, and , or ) operators.
var value1 = false
console.log(!value1); //true.


var value2 = true
console.log(!value2); //false.



var value3 = 0
console.log(!value3); //true.
//0 is considered as false.

var value3 = ""
console.log(!value3); //true.
//an emplty space is evaluates to false.


var value4 = 90
console.log(!value4); //false.
//any positive value other than 0 is considered as true.


var value3 = ""
console.log(!value3); //true.
//an emplty space is evaluates to false.


var value3 = " "
console.log(!value3); //false.
//a string with a space is evaluates to true

var value3 = "A"
console.log(!value3); //false.
//a string  is evaluates to true.


var value3 = new Object()
console.log(!value3); //false.
//a new object is evaluates to true.

var value3 = null
console.log(!value3); //true.
//null is evaluated to false.

var value3 = undefined;
console.log(!value3); //true.
//undefined is evaluated to false

var value3 = NaN;
console.log(!value3); //true.
//NaN is evaluated to false.


var value5 = -90
console.log(!value5); //false.
//negative value is also evaluated to true.

//AND OR Operators


//AND (&&)


var testobj = {
    name: 'test'
}

var value6 = testobj && 99;
console.log(value6) //99


var testobj = {
    name: 'test'
}

var value6 = testobj && 0;
console.log(value6) //0

//usually 0 represants false, but in this case it is going to return 0

var testobj1 = {
    name: 'test1'
}

var testobj2 = {
    name: 'test2'
}

var value7 = testobj1 && testobj2;
console.log(value7) //testobj2


var value8 = testobj2 && testobj1;
console.log(value8) //testobj1

//if javascript finds the first object as the operand the and symbol returns the second operand.

var value9 = true && testobj1;
console.log(value9) //testobj1

//if the first operand is true, it's always going to return the seond operandi,e  testobj1 

var value9 = false && testobj22;
console.log(value9) //false

//if the first operand is false, it always returns false. it will not evaluate the second operand, 
//even it is not defined.


//if any of the operand is null it is going to return null.
var value9 = null && 99;
console.log(value9) //null


var value9 = testobj1 && null;
console.log(value9) //null


//if any of the operand is null it is going to return undefined.
var value9 = undefined && 99;
console.log(value9) //undefined


var value9 = "testobj1" && undefined;
console.log(value9) //undefined


//if any of the operand is NaN it is going to return NaN.
var value9 = NaN && 99;
console.log(value9) //NaN


var value9 = "testobj1" && NaN;
console.log(value9) //NaN


// OR Operator
// ============

//if the first operand is true it will not look for the second operand even it will not evaluate the second
//operand it will simply return the first operand.

//if the first operand is false, it will simply return the second object.

console.log("OR Operation!")
var value10 = true || true;

console.log(value10);

console.log(true || false); //true

console.log(false || true); //true

console.log(false || false); //false

console.log(null || false); //false

console.log(false || null); //null

console.log(true || null); //true

console.log(null || true); //true

console.log(true || null); //true

console.log(null || true); //true

console.log(true || variable000); //true

//If the first operand is true it will not look for the second operand even it will not evaluate the second
//Operand it will simply return the first operand.


console.log(null || 'i am here!'); //seconnd operand.
console.log(false || 'i am second!'); //seconnd operand.
console.log(undefined || 'i am second operand!'); //seconnd operand.
console.log(false || undefined); //undefined.
console.log(false || null); //null

var orObj = {
    name:'orObject'
};


var orObj1 = {
    name:'orObject1'
};


console.log(orObj || false); //orObj

console.log(false || orObj); //orObj

console.log(orObj1 || orObj); //orObj1
//in javascript if the first operand is an object object is returned.

console.log(99 || orObj); //99
console.log(0 || orObj); //orObj
console.log('' || orObj); //orObj
console.log('  ' || orObj); //'  ' //empty space is returned.
console.log('PROD' || orObj); //'  ' //empty space is returned.

console.log('' && 'Value') // ''(empty spave) is returned, in this case '' is treated as false.
console.log(' ' && 'Value') //Value is returned, in this case ' ' is treated as true.
console.log("END!")







