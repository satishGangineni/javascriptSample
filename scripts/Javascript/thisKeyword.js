
console.log(typeof this);//object.

console.log(this);//object.
//this refers to an object. and the object depends on the context that is called.
//when it is in the global scope, this refers to window object. 
//when it is inside a function This refer to the current function.


//console.log(this===window)//true, if we are running this on the browser.


var name = "Global object";

console.log(this.name);//"Global object";
//if you run this in the browser you get the global object, where as if you run this in 
//a node server you are getting undefined.


var funcExpression = function(){
    //console.log(this===window);
}

funcExpression();//if we are calling this function in a browser. it will return true

var nObj =  new funcExpression();


console.log(nObj);
console.log(typeof nObj);
console.log(typeof funcExpression);
console.log(nObj.namer);
//console.log(nObj ===window);


var tObj = {
  
  name : "test object",
  printName : function(){
    console.log(this);
    //console.log(this===window)//prints false, since it is a function on a different object.
  }
  
}

tObj.printName(); //when the printName is called on the object tObj, this keyword is assigned to tObj.


var tObj2 = {

name : "test object2",
tfunction : function(){
    var ifunction = function(){
        console.log(this); //: displays "window"
        //console.log(this===window); //: displays "true".
    }
    ifunction(); //this function does not have any object attatched,so that will be attached to the window or the global object. 
}

}

tObj2.tfunction();



var address = function(line1){
    this.line1 = line1;
}

address.__proto__.updateAddress = function(){
    console.log(this)// this will print out address object.
}

address.updateAddress(); //this will print out address object.



// Calling Functions  call and apply
// ====================


var updateEmployee = function(name){
    
    console.log(this);
    console.log(name);

}

//updateEmployee.call();
//updateEmployee.call({name:'ali baba'}); // updateEmployee {name:'ali baba'};

var nameObj = {name:'ali baba'};
//updateEmployee.call(nameObj); // pass an varible to the call method.
//updateEmployee.call(nameObj,'Rajesh'); // along with the object, we can pass values to the variables

var updateEmployee = function(name, age){
    
    console.log(this);
    console.log(name + " " + age);

}

updateEmployee.call(nameObj,"sirish","50"); // we can pass the arguments as a comma seperated list.

updateEmployee.apply(nameObj); // pass an varible to the call method.
//both apply and call behaves the same way.
//the only difference is apply can pass the variable as an array as below.

updateEmployee.apply(nameObj, ["sirish","50"]); // we can pass the arguments as a comma seperated list.
//apply function will break the parameters and pass them to the function call.





// Closures
// ========


var incrementFunction = function(){

    var i = 1;
    return function(){
        return i++;
    }
}

var increment = incrementFunction();

console.log(increment())
console.log(increment())
console.log(increment());

//the increment function is the closure and it points to the inside function.
//we will see the closures in event handlers, and timers more.



// IIFE is a function that gets executed immediately.



(function (){
    console.log("IIFE function")
})();


(function (){
    console.log("IIFE function")
}());


//either of the above definitions are same

(function(){

    var employeeName = "harsh bogle";
})();

//console.log(employeeName);  error : employeeName is not defined.
//EmployeeName is defined in the IIFE's scope. this way it will not pollute the global name space. 
//we can have as many number of variables defined in IIFE. 


var app = {};

(function(globalVariable){
    globalVariable.Name = "smartflow";
})(app);

console.log(app.Name);


+function(){
    var employeeName = "sahasra";
    console.log(employeeName);
}();


-function(){
    var employeeName = "sahasra -";
    console.log(employeeName);
}();


!function(){
    var employeeName = "sahasra !";
    console.log(employeeName);
}();

//console.log(employeeName); //: error, shows employeeName is undefined.




// Recursion
// ==========.

// Recursion is the ability of a function to call itself.

var orgChart = {
   name : 'Nagesh', subOrdinates :[ 
      {  name : 'Narasimha', subOrdinates :[ 
                { name : 'Sandeep', subOrdinates :[
                    { name : 'Rajeeb', subOrdinates :[] }
                    ]
                },
               { name : 'Mohan', subOrdinates :[] }
            ]},

      { name : 'Vamshi', subOrdinates :[
               { name : 'Dheerendra', subOrdinates :[] },
               { name : 'Srinivas', subOrdinates :[] }

            ] }
    ]

};


var wsChart = {
   name : 'Nagesh', subOrdinates :[ 
      {  name : 'Narasimha', subOrdinates :[ 
                { name : 'Sandeep', subOrdinates :[ ] } 
            ]
      } ]
 };

var printChart = function(topEmployee){

    console.log(topEmployee.name)
    for(subordinate in topEmployee.subOrdinates){
        let emp = topEmployee.subOrdinates[subordinate];
        printChart(emp);
    }
}

//printChart(orgChart);


// var orgPrintChart = printChart;
// printChart = null;
// orgPrintChart(orgChart);//Error: printChart is not a function.
//it throws an error because we have made printchart to null.
//in order to overcome this we have to use the below technique by naming the function as well.


var printChart = function printChart(topEmployee){

    console.log(topEmployee.name)
    for(subordinate in topEmployee.subOrdinates){
        let emp = topEmployee.subOrdinates[subordinate];
        printChart(emp);
    }
}

var orgPrintChart = printChart;
printChart = null;
orgPrintChart(orgChart);//executes with out an error.









