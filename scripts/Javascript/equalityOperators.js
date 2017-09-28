//==,!=,===,!== euality operator, not equal to, identically equal to , not identically equal to.

console.log(true==true);//true.

console.log(true==1);//true.

console.log(true==2);//false

//In a numeric context true is converted to 1 and compared, in the above case
//1==2 is false.    


console.log(false==0);//true
//In a numeric context, false is converted to 0 by javascript so the above condition evaluates to true.

console.log(false==1);//false

console.log(false=='');//true


if(false == '') //true //when equality comparision ''(empty space) is treated as false.
    console.log("true")
else
    console.log("false");

if(false == '  ') //true //when equality comparision ' '(empty space) is treated as false.
    console.log("true")
else
    console.log("false");

if(false == 'ABC') //false 
    console.log("true")
else
    console.log("false");

if(true == 'ABC') //falsee : in comparision value ABC also not true
    console.log("true")
else
    console.log("falsee");


if('ABC' == 'ABC') //true 
    console.log("true")
else
    console.log("falsee");


//numeric comparisions.


console.log(42=="42")//true
//in numeric context, the string value "42" is parsed and compared.


console.log(NaN==NaN)//false
//NaN is a data type and it is actually a number.

console.log(NaN===NaN)//false
//NaN is a data type and it is actually a number.
//console.log("Not a number");

var obj = {
    valueOf: function name() {
        return 40;
    }
}

var obj1 = {
    toString: function name() {
        return 40;
    }
}

var obj2 = {
    otherFunction: function name() {
        return 40;
    }
}

console.log(40==obj); //true
//in a numeric context, when comparing the object to an numeric it will call the valueOf function on the object.
//if it does not find the valueOf function it will look of toString function.
console.log(40==obj1);  //true
console.log(40==obj2);  //false

console.log(40 === obj); //false, in equality condition this evaluates to false.


var objA = {
    name: "tiger"
}

var objB = {
    
    name: "tiger"
}

console.log(objA==objB) //false
console.log(objA===objB) //false
//even though objects are having exact same properties, the object comparision 
//results to false, since each object has it's own memory space despite having same properties.

console.log(objA==objB) //true.

//whe we compare objects, it is going to compare the pointers

objC = objB;

console.log(objC==objB);//true


console.log(55==="55") //false : === means both type and value should be same.
//so that above results false

console.log(55===55) //true : === means both type and value should be same.
//so that above results true


console.log(false===0) //false


console.log(null==0)//false

console.log(null==false)//false

console.log(null==undefined)//true: when we use "double equal to" null is equal to undefined.

console.log(null===undefined)//false: when we use "triple equal to" null is not equal to undefined.


console.log(55!==""undefined"")//false: when we use "triple equal to" null is not equal to undefined.


console.log("a"=="a");//true

console.log("a"=="A");//false