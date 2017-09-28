
// includes example of types,  undefined, null 


var num1;

var num2 = null;

var res = 45*num1;  //gives NaN
var res1 = 45/num1;  //gives NaN
var res3 = 45/num2;  //gives infinity.
var res4 = 45*num2; //gives 0



var res6 = NaN;
//console.log(res6);


//NaN checking.
// console.log(isNaN(null));   //false
// console.log(isNaN(undefined)); //true
// console.log(isNaN(NaN));  //true
// console.log(isNaN(0)); //false
// console.log(isNaN(5.0)); //false



// if( res6 == Number.NaN){
//     console.log("Wow it is a NaN!!");
// }

// if(isNaN(res6)){
//     console.log("it is a NaN!!");
// }



// console.log(res);
// console.log(res1);
// console.log(res3);
// console.log(res4);



//Boolean

var b1 = Boolean("");
var b2 = Boolean("Hello");

// console.log(b1); //false: there is no content.
// console.log(b2); //true: there is content.

// console.log(Boolean(6)); //true: there is content.
// console.log(Boolean(0)); //false: 0 always evaluate as false.
// console.log(Boolean(-8)); //true: there is content.

// console.log(Boolean(undefined)); //false

// console.log(Boolean(null)); //false


var b6 = !!99;

console.log(b6); //true
console.log(typeof b6); //boolean


//undefined examples

var var1;

console.log(var1); //undefined.
console.log(typeof var1); //undefined.


//null examples.

var var2 = null;

console.log(var2); //null.
console.log(typeof var2); //object.

var var3;

console.log(var3); // will declare a variable. 

