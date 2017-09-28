


console.log(parseInt(123)) //123
console.log(parseInt('b123')) //NaN
console.log(parseInt('123b567')) //123 . it will take the number till the character 'b' and ignores the rest.
console.log(parseInt('345.78')) //345 : it will not round the number gives the number before the decimal.
console.log(parseInt(' ')) //NaN



console.log("parse float value.");

console.log(parseFloat(123.45)) //123.45
console.log(parseFloat('b33')) //NaN
console.log(parseFloat('123b.33')) //123



//isFinite
//this method used to verify whether the number is a finite value or infinite value.
console.log(isFinite(43)) //true
console.log(isFinite(43/0)) //false
console.log(isFinite(Number.POSITVE_INFINITY)) //false : it is an infinite value.


//encodeURI

console.log(encodeURI("\\start\\"));

console.log(encodeURI('%5Cstart%5C'));

console.log(decodeURI('%255Cstart%255C'));

console.log(decodeURI('%5Cstart%5C'));

//eval
var fooval = "fooddd";
var escript = "console.log(fooval)";
eval(escript);


//Math object.

console.log(Math.PI)//3.14.......

console.log(Math.ceil(40.1))//41 : it will raise the integer to the next highest integer.
console.log(Math.floor(40.9))//40 :  it will floors to it's before number
console.log(Math.floor(40))//40 :  it will floors to it's before number
console.log(Math.abs(-12))//12 : returns absolute value.


console.log(Math.trunc(50.55))//50 : it will truncate the decimal part and returns the integer part


console.log(Math.max(12,-12,9,"88", 87.56)) //88 : math function implicitly converts values to integer
console.log(Math.min(12,-12,9,"88", 87.56)) //-12 : math function implicitly converts values to integer

console.log(Math.pow(10,2)) //100 : pow is used to raise a number to it's exponent
console.log(Math.random()) //returns random number between 0 and 1

console.log(Math.sqrt(81)) //9
console.log(Math.sqrt(-81)) //NaN



//String object.

var tstr = "My String"
console.log(tstr.charAt(3))//returns 'S' 
console.log(tstr.concat(' lives!'))//"My String lives!";
console.log(tstr)//"My String";
console.log(tstr.includes(" "))//true : since the string includes "
console.log(tstr.endsWith("ing"))//true 
console.log(tstr.indexOf("M"))//0 
console.log(tstr.indexOf("Z"))//-1, if it does not find the char returns -1.
var tstr = "Some String"
console.log(tstr.lastIndexOf("S"))//5


console.log(tstr.substr(1,3)) //ome; starting from the said index, it will retrieve the number of characters.
console.log(tstr.substring(1,3)) //om; it will work with the indexes, starting index and the ending index is not included,

console.log(tstr.slice(1,3))//om  /retrives string between two indexes and the last index is not included.
console.log(tstr.slice(3,6))//e S  /retrives string between two indexes and the 
console.log(tstr.slice(3))//e String  /retrives string from a said index to the end of string.
console.log(tstr.slice(3))//e String  /retrives string from a said index to the end of string.

console.log(tstr.slice(-5))//tring retrives from last index, the number of chars

//splits an string into an array
console.log(tstr.split(' '))//["some","string"]
console.log(tstr.split(' ')[1])//"some"


//arguments

var myfunc = function(){

    console.log("arguments " + arguments.length);
}

myfunc(1,2,3,4,5); //5


var fwrapper = function(){

    try {
        var x = 100;  
        throw new Error('error occured')      
    } 
    catch (e) {
        console.log(e.name + ", "+  e.message) ;
    }
    finally
    {
        console.log('finally is executed!');
    }
}

fwrapper();









