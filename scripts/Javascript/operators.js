// Additions.
// =========

// console.log((5.3+3.1).toFixed(2));

// var addition = 5.3+3.111;
// console.log(addition.toFixed(2)); 

//Additions!

console.log("500"+"300");  //500300
console.log(5000+undefined);  //NaN
console.log("5000"+undefined); //5000undefined
console.log(5000*undefined); // Nan


console.log(5000+null) //result is 5000 since javascript treats null as no value.
console.log("PRD"+null) //result is PRDnull 


console.log(5000+NaN) //result is NaN : javascript does not know how to do this so it will result NaN.
console.log("Ramoji"+NaN) //result is RamojiNaN


// substractions
// =============.

console.log("Substractions!");

console.log("500"-"200"); //300 
console.log("500"-"PROD"); //NaN
console.log("PROD"-"200"); //NaN
console.log("PROD"-"VARI"); //NaN 
console.log("500"- undefined); //NaN 
console.log("500"-null); //500 
console.log("500"-NaN); //NaN 
console.log("500"-""); //500
console.log("500" - "  "); //500






//Multiplication.

console.log("Multiplication!");

console.log(1.1*1.1);  //1.2100000001

console.log((1.1*1.1).toFixed(2)); //1.21 (a rounded value to two decimals).

console.log("1.1"*"1.1"); //1.2100000001

console.log(1.1*NaN); //NaN

console.log(1.1*"PROD-1"); //NaN

console.log("PROD-2"*"PROD-1");//NaN

console.log(1.1*undefined);//NaN

console.log(1.1*null); //0

console.log(1.1*Infinity); //Infinity


var numobj = {
    valueOf : function() {return 400},
    number:100
}

console.log(4*numobj);//1600


//Division!

console.log("\"Division!\"");
console.log(9/0) //Infinity!
//Usaully, in other languages it will throw an divided by 0 exception, but in javascript it will throw Infinity.
console.log(-9/0)//-Infinity

console.log("9"/"3")//3
console.log("9"/3)//3
console.log(9/"3")//3

console.log(9/"PROD")//NaN
console.log("PROD"/"PROD")//NaN
console.log(undefined/2)//NaN
console.log(2/undefined)//NaN
console.log(undefined/undefined)//NaN
console.log(null/undefined)//NaN
console.log(undefined/null)//NaN
console.log(undefined/NaN)//NaN
console.log(NaN/NaN)//NaN
console.log(null/null)//NaN

//Modulus (modulus means reminder!)

console.log("\"Modulus\"");

console.log(9%3); //0
console.log(9%4); //1
console.log("9"%"4"); //1
console.log("9"%4); //1
console.log(9%"4"); //1


//Unary Operators

console.log("\"Unary Operators!\"");


var level = 5;
++level;
console.log(level); //6



var level = 5;
level ++;
console.log(level); //6



var level = 5;
var nextLevel;
nextLevel = ++level;
console.log(nextLevel); //6



var level = 5;
var nextLevel;
nextLevel = level++;
console.log(nextLevel); //5


var level = 5;
var nextLevel = 10;
nextLevel = nextLevel * ++level;
console.log(nextLevel); //60


var level = 5;
var nextLevel = 10;
nextLevel = nextLevel * level++;
console.log(nextLevel); //50



//Decrement
var level = 5;
var nextLevel;
nextLevel = --level;
console.log(nextLevel); //4



var level = 5;
var nextLevel;
nextLevel = level--;
console.log(nextLevel); //5


var level = 5;
var nextLevel = 10;
nextLevel = nextLevel * --level;
console.log(nextLevel); //40


var level = 5;
var nextLevel = 10;
nextLevel = nextLevel * level--;
console.log(nextLevel); //50
console.log(level); //4


var level1;
console.log(++level1); //NaN
//we are trying to increment a undefined (not initialized). in numeric context it will treat as undefined.
//and the result is a NaN

var level2 = null;
console.log(++level2); //1
//when using ++, in numberic context, null is treated as 0 and then while using pre increment operator.
//it will incremented by 1 and the result is 1.

var level3=8;
var nextLeve3 = 15;
level3 += nextLeve3;
console.log(level3);//23
console.log(level3); //23


var level4=8;
var nextLeve4 = 15;
level4 =+ nextLeve4;
console.log(level4); //15
console.log(level4); //15


var level5=8;
level5++;
console.log(level5); //9

var value1 =5;
value1 = +value1;
console.log(value1) //5

var value1 = -5;
value1 = +value1;
console.log(value1) //5



var decrement1 = 10;
decrement1-=4;
console.log(decrement1)//6


var decrement2 = 10;
decrementLevel2 = 15;
decrementLevel2 -= decrement2;
console.log(decrementLevel2)//5
console.log(decrement2)//10


var value8 = 5;
value8 = -value8;
console.log(value8) //-5 it flips the sign.

var value9 = -5;
value9 = -value9;
console.log(value9) //5 //it flips the sign.

