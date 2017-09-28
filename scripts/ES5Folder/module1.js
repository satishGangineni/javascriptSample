//export  myname = name; 
"use strict";

function display_message() { 
   console.log("display message - Hello World") 
}

var myname = "hello i am name";


class iClass
{
    static imethod() {
        console.log("I am a i method");
    }

    constructor(rollno, age) {
        this.Rollno = rollno,
        this.Age = age;
    }
    printrollno() {
        console.log("your rollno is {0} and age is {1} ",this.Rollno, this.Age);
    }
}

exports.iClass = iClass, exports.display_message = display_message, exports.myname = myname;

//# sourceMappingURL=module1.js.map