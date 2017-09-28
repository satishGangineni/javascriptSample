// <, <=, >, >=


console.log("alpha" < "beta");//true

//comparing Uppercase letters yeilds different results.

console.log("alpha" < "alph");//false : since alpha will come after alpha

console.log("alpha" > "beta");//false

//comparing Uppercase letters and lower case letters yeilds different results.


console.log("Alpha" < "beta") //true


console.log("Beta" < "alpha") //true:

//point to rememeber, we are comparing the ASCII values of a string. 
//So capital letters are going to come first, since the capital ASCII values are first.


console.log("Beta".toLowerCase() < "alpha".toLowerCase()) //false:


//in numeric context strings are are parsed to numbers and compared.

console.log('42'<55) //true

console.log('42.99'<55) //true

//when comparing both the strings it will not converts them to numbers it will compare the string.

console.log(42< 145) //true

console.log("42"< "145") //false: 
//the above is false since we are working on strings and in string comparasion 4 comes after 1. so it yeilds false.


console.log(5==NaN) //false
console.log(5<NaN) //false
console.log(5>NaN) //false

console.log(5<null) //false
console.log(5<{}) //false
console.log(undefined<{}) //false


