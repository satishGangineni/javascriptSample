


var obj1 = {

    name : 'Jack'
}

var obj2 = obj1;


obj2.name = 'jill';


console.log(obj2.name); //jill
console.log(obj1.name); //jill


var obj4 = {
    name : 'mahesh chandra'
}

function updateName(localvar){
    localvar.name = "mahesh kumar";
} 


updateName(obj4);


console.log(obj4.name); //mahesh kumar.
//the name is going to change. even though we are calling it a local variable, we are passing the reference 
//to the function, so when the value is changed it is going to change the original object.
//functions can modify reference types



//arrays are reference types.

var arr1 = [11,22,44];
arr2 = arr1;

arr2[0] = 55;

console.log(arr1 instanceof Array);

console.log(arr1[0]) //55;

var arr3 = ["string" , 22, false];

for(let item in arr3){
    console.log(arr3[item]);
}

console.log( typeof arr3);

console.log( arr3 instanceof Array);



//second type of declaring an array

var arr5 =  new Array(10,11,12,13);

for(let item in arr5){
    console.log(arr5[item]);
}

//Third way of declaring an array
var arr5 =   Array(22,33,44,55);

console.log(typeof arr5);//object.

console.log(arr5 instanceof Array);//true.

for(let item in arr5){
    console.log(arr5[item]);
}

//index/subscript.

//we can access the elements in an array using indexes.
//the index is going to start from 0
console.log(arr5[0]);
console.log(arr5[3]);
console.log(arr5[4]); //undefined. when we try to access a member that does not exists it will return undefined.
//It is very much difference from other programming languages, where they will be throwing errors.

console.log(arr5.length);


var arr6 =  new Array(5)// in this case you are initializng an array with size 5.
console.log(arr6.length)//5

var arr7 =  new Array("5")// in this case an array with size 1 is initialized
console.log(arr7.length)//1


var arr8 = [];

console.log(arr8.length) //0

var arr9 = ["one", "two"];
//we can modify the lenght of an array.


arr9[2] = "three";

console.log(arr9.length);
arr9[3] = "four";
console.log(arr9.length);

arr9[9] = "nine";

//arr9.length = 10;

//for(let i=0;i<15;i++){
 for(let i=0;i<arr9.length;i++){

    console.log("index: " + i + " Value: " +  arr9[i]);
}


function printarray(locArray){

    for(let index in locArray){
        console.log("index: " + index + " Value: " +  locArray[index]);
    }

}

printarray(arr9);



arr9.length = 15;//
//when we increase the length of an array. the array is stretched to the set length.

//we can increment the lenght of an array or we can decrement the length of an array.

var arr10 = ["one","two","three"];

arr10.length = 2;

console.log(arr10[2]);//undefined: since we have decremented the length to 2, the thrid item becomes null;


var arr11 = ["one", 2, false];

arr11[5] = "five";

console.log(arr11.toString()); //one,2,false;

//it will show the comma seperated values string.

console.log(arr11.valueOf());//["one",2,false];

console.log(arr11.join("|"));//one|2|false;


// Arrays can be used as stacks and Queues
// =======================================





