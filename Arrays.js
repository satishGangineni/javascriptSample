//objects


var obj1 = {

    key1:"value1",
    key2:"value2",
    func1:function(){return "i am a function";}

}


//object constructor.
var obj3 = new Object();


obj3.key1 = "value3.1"
obj3.key2 = "value3.2"

var obj4 = obj3;

var name="krishna";
var obj2 = {name};


//function constructor

function myfunctionOBject()
{
    var name1 = "function object";
    this.fname = "fname property."
}

var roles = {

    role:"Administrator",
    printRole: function(){
        console.log("Role is: ", this.role)
    }
}


//object's create method.
var adminrole = Object.create(roles);

adminrole.role="Admin";
//adminrole.printRole();


var superRole = Object.create(roles);

superRole.role="supervisior";
//superRole.printRole();



//Concat obj
var concatObj1= {name:"test_one",roll:"admin"};
var concatObj2= {name:"test_tw0",dept:"Science"};

var concatobj = Object.assign({},concatObj1,concatObj2);

// console.log("name of concatobj", concatobj.name);
// console.log("roll of concatobj", concatobj.roll);
// console.log("dept of concatobj", concatobj.dept);

//Comparing objects.
//objects are referene types.

var objc1= {name:"raja"};
var objc2= {name:"raja"};
var objc3=objc1;
objc3.name = "coolie raja";

// console.log(objc1==objc2);
// console.log(objc1==objc3);

//object destructuring.

var emp = { name: 'John', Id: 3 } 
var {Id} = emp 
//console.log(Id) 
//console.log(Id)


//arrays:

var testarr = [1,2.3,"test string", false];

//second way of declaring an array.
var names = new Array("Mary","Tom","Jack","Jill","Mary"); 

console.log("first element", testarr[0]);
console.log("second element", testarr[1]);
console.log("third element", testarr[2]);
console.log("fourth element", testarr[3]);

// for(let c=0;c<names.length;c++)
// {
//     console.log("values of array ", names[c]);
// }
//console.log("valud of c ", c);

console.log("element of a string function.!");
names.forEach((element)=> {
    console.log(element);
});

//find
var felement = names.find( (x) => x ==="Mary"); 
console.log("type of element ", typeof(felement));
console.log("element value", felement );

//filter
var felementarr = names.filter( (x) => x ==="Mary"); 

console.log("type of element ", typeof(felementarr));
//console.log("element value", felementarr );
felementarr.forEach( (x)=>console.log(x) );

felementarr[1] = "mary1";

//function that prints array.
var printarray = (arr, title)=> { 
    if(title){
        console.log(title);
    };
    arr.forEach((x)=>console.log(x)); 
}

// console.log("First array");
// printarray(names);
// console.log("second array");
// printarray(felementarr);

var spreadarray = names.entries();


//printarray(spreadarray,"the spready array");
// console.log([...spreadarray]);
// console.log([...names]);
// console.log(...[names]);


// //using for loop to travse through arrays.

// var numsarr = [1001,1002,1003,1004]; 
// for(let j in numsarr) { 
//     console.log(j) 
//    console.log(numsarr[j]) 
// }

// console.log("joined array ",numsarr.join())
// console.log("joined array ",names.join())


//map.
// var upperNames = names.map((x)=>x.toUpperCase());
// printarray(upperNames);


//boolean x;
// string y="asdfasdfasd";

// console.log("boolean value is ", y);
//console.log("is this number", Number.NaN);
//Number.isNaN(44)==

//console.log("key1 of obj1", obj1.key1);
//console.log("value of name in obj2", obj2.name);

//console.log("key1 of obj3 ", obj3.key1);
//console.log("value of name in obj3 ", obj3.key2);


//console.log("key1 of obj4 ", obj4.key1);
//console.log("value of name in obj4 ", obj4.key2);

var myfunc = new myfunctionOBject();
var myfunc2 = new myfunctionOBject();

myfunc2.fname = "This is first Name";
myfunc2.lname = "this is last name";


// console.log("name of myfunctionOBject ", myfunc.name1);
// console.log("fname of myfunctionOBject ", myfunc.fname);
// console.log("fname of myfunctionOBject2 ", myfunc2.fname);

// console.log("lname of myfunctionOBject ", myfunc.lname);
// console.log("lname of myfunctionOBject2 ", myfunc2.lname);

