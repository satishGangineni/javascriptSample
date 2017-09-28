
'use strict'
var obj1=  new Object()//this is a constructor function.

obj1.name = "ram kumar";
obj1["age"] ="55";
obj1.calculateAge = function(){
        return "age";
}

console.log(obj1);
console.log(obj1.name);
console.log(obj1["age"]); //if the property name is stored in a variable, we will use the variable name 
//inside the brackets.

var field = "age";
console.log(obj1[field]);
console.log(obj1.calculateAge());


//another way of creating an object

var obj2= {}; //json notation.
//it will create a empty object.
obj2.name = "hello";


//contains name and value pairs.
var obj3 = {

    key: "value1",
    key2 : 33,
    func1: function(){

    },
    roles : ["admin", "dev"]
};


//array of objects.

var arr1 = [
    {name:"ram"},{name:"rahim"},{name:"akhbar"}
]

console.log(arr1[0].name);


//defineProperty, defineProperties method.

var task = {};

Object.defineProperty(task, "text", {
    value: "install a software",    
    writable : true, //used to set a readonly property., //default is false
    enumerable: true //specifies whether it can be used in enumeration or not. //default is false.
});

task._dueDate = undefined;

//getter and setter functions.
Object.defineProperty(task, "dueDate", {

    //writable:true, //, we can not set both writable and accessors to any attribute.
    //enumerable : true   
    get : function(){
        return this._dueDate
    },
     enumerable : true,
    set : function(value){
        this._dueDate = value;
    }
} )


Object.defineProperties(task,{
    "field3" :{
        value : "i am field3",
        enumerable : true
    },
    "field4" :{
        value : "i am field4",
        enumerable : true
    },

})

//defineProperty is available on the Object, it accepts different parameters.
//first is the object on which we are creatig the property.
//second is the property name
//third is the configuration object, which contains properties like value and so on..

//console.log(task.text);



task.text +=  " modifying.." 
//use strict mode to raise an error when setting the read only property.
//the default value for writable property is false, i,e when using defineProperty the properties are read only.
//you need to set them writable true 

//console.log(task.text);
task.dueDate = "10/10/2015";

for(let i in task){
    console.log(task[i]);
}


//console.log(task.dueDate)

//define property method allows to use getters and setters functions.


//if you want to see the object's property description, use the below function.

var tdesc = Object.getOwnPropertyDescriptor(task,"text");
console.log(tdesc);


