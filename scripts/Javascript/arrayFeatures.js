//push, pop, shift, unshift, slice, splice, sort, search, indexOf, lastIndexOf.


//we can use arrays to create stacks and queus.


//stack (push/pop)

var ratings = [];

ratings.push(1,4);
ratings.push(5,7,9);



console.log(ratings.toString()); //1,4,5,7,9

console.log(ratings.pop())//9: the last element

console.log(ratings.toString()); //1,4,5,7,9
console.log(ratings.length); //4



ratings.push(null, undefined,NaN);

console.log(ratings.toString());

ratings.reverse();
console.log(ratings.toString());
console.log(ratings.pop());
console.log(ratings.toString());


var ratings1 = [];
console.log(ratings1.pop());


//queue.

var ratings2 = [2,8,9];
ratings2.unshift(4,8); //used to add the the values to the front of the array!
console.log(ratings2.toString()); //[2,8,9,4,8]
console.log(ratings2.shift()); // 2 : pull the first value from the array!.
console.log(ratings2.toString()); //[8,9,4,8]
//XXXX: ratings2.Add(10,400); //we are not having any function called add.


console.log(ratings2.unshift(4,6)); //[4,6,8,9,4,8] // 4 and 6 are added to the starting of the array!
console.log(ratings2.toString()); //[4,6,8,9,4,8]

console.log(ratings2.shift()); //4 : takes out the first element of the array
console.log(ratings2.toString()); //[6,8,9,4,8]

console.log(ratings2.shift()); // 6
console.log(ratings2.toString()); //[8,9,4,8]

//Concat Function
//concat : it will concatane two arrays and produces a new array!
//the original array will not be affected.

var ratings3 = [5,8,7,2];
var ratings4 = [4,3,8,1];
var ratings5 = [4,3,8,1];

var carray = ratings3.concat(ratings4);

console.log(ratings3); //[5,8,7,2];
console.log(ratings4); //[4,3,8,1];
console.log(carray); // [5,8,7,2,4,3,8,1];


var ratings3 = [5,8,7,2];
var ratings4 = [4,3,8,1];
var ratings5 = [1,2,3,5];

var carray = ratings3.concat(ratings4, ratings5,12,80, [09,89]);

console.log(ratings3); //[5,8,7,2];
console.log(ratings4); //[4,3,8,1];
console.log(ratings5); //[1,2,3,5];
console.log(carray); // [5,8,7,2,4,3,8,1,1,2,3,5, 12,80,9,89];


//SLICE Function.
//this function will give you the sliced array(portion of the array).
//slice(n) //gives array from the index n
//slince(n,m) //gives array starting from the index n and before the index m.
//the inputs to this function are the indexes
//the original array will not be affected.

var sarray = [1,2,3,4,5,6,7];
console.log(sarray.toString());
console.log(sarray.slice(1)); //[2,3,4,5,6]//will give you a sliced array by removing the elements before that index.
console.log(sarray.slice(2)); //[3,4,5,6]//will give you a sliced array by removing the elements before that index.
//and start a new array from that index
console.log(sarray.slice(2,4)); //[3,4]//Will give you a sliced array which are from index 2 and before index 4
console.log(sarray.slice(2,5)); //[3,4,5]//Will give you a sliced array which are from index 2 and before index 4
console.log(sarray.slice(2,sarray.length)); //[3,4,5,6]//Will give you a sliced array which are from index 2 and before index 6
console.log(sarray.toString());

console.log(sarray.slice(-3)); // [5,6,7]
//when we pass negative index, it will take the last 3 items from the array



//SPLICE Function.
// it will not create a new function.
//it will modify the original array.
// it will deletes the items from the said index to said number of values.
//splice(i,n) //i is the index and n is the number of elements to delete

var sparray = [1,2, "str3","str4", "str5","str6"];
//console.log(sparray.splice(2,2)); // ["str3","str4"] 
//console.log(sparray.splice(0,1)); // [1] 
//console.log(sparray.splice(0,3)); // [1,2, "str3"] 
console.log(sparray.splice(2,3)); // ["str3","str4", "str5"] 
console.log(sparray); //[1,2,"str6"];


//the splice function is also used to update and insert elements in the array.

var sparray1 = [1,2,3,4,5,];

console.log(sparray1.splice(3,0,99))//: it will return nothing, since we are not deleting anything.[]
//0 specifies, nothing to be deleted. 99 is inserted at index 3.
console.log(sparray1); //[1,2,3,99,4,5];

var sparray1 = [1,2,3,4,5,];

console.log(sparray1.splice(3,1,99))//: [4]
//1 specifies, that one element to be deleted so 4 is deleted. 99 is inserted at index 3.
console.log(sparray1); //[1,2,3,99,5];

var sparray1 = [1,2,3,4,5,];
console.log(sparray1.splice(3,1,99, 200))//: [4]
//1 specifies, that one element to be deleted so 4 is deleted 99 and 200 are inserted from index 3.
console.log(sparray1); //[1,2,3,99,200,5];


var sparray1 = [1,2,3,4,5,];
console.log(sparray1.splice(-3,2,99, 200))//: [3,4]
//-3 takes elements from the end, it took 2 elemens and two elements are inserted.
console.log(sparray1); //[1,2,99,200,5];


//REVERSE Function

var rarray = [1,2,3,4];

console.log(rarray.reverse());
console.log(rarray)

//SORT function.

var rarray1 = [1,4,8,3];
console.log(rarray1);  // [1,4,8,3];
console.log(rarray1.sort()); // [1,3,4,8];
console.log(rarray1) // [1,3,4,8];



//Sort function gives wrong results, since it uses string sorting 
var rarray2 = [1,4,8,3,22,56,77];
console.log(rarray2); //[1,4,8,3,22,56,77];
console.log(rarray2.sort()); //[1,22, 3,4,56,77, 8];
console.log(rarray2) //[1,22, 3,4,56,77, 8];

//to rectify this problem use the following sort function.

//Sort function gives wrong results, since it uses string sorting 
var rarray2 = [1,4,8,3,22,56,77 , 44.88, "str10",false];
console.log(rarray2); //[1,4,8,3,22,56,77];
console.log(rarray2.sort(function(value1, value2){
        return value1 - value2;
    })); //[1, 3, 4, 8,22,56,77];
console.log(rarray2) //[1, 3, 4, 8,22,56,77];


//IndexOf function!.
//it is going to return the index of the specified value.
//if multiple values are present, it will return the first index.
//if an item does not exists, it is going to return -1

var iarray = [1,3,3,8,6,4,NaN,null,undefined];

console.log(iarray.indexOf(4));//5
console.log(iarray.indexOf(3));//1
console.log(iarray.indexOf(30));//-1
console.log(iarray.indexOf(null));//7
console.log(iarray.indexOf(undefined));//8
console.log(iarray.indexOf(NaN));//-1
console.log(iarray.indexOf('3'));//-1 ://no string convesion to number is done in this context.

console.log(iarray);

//lastIndex of 
//if there are multiple instance of  element in the array
//this function returns the last index of the element in that array.

var liarray = [1,2,3,4,1,1,8];
console.log(liarray.lastIndexOf(1));//5
console.log(liarray.lastIndexOf(8));//6










