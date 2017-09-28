
//"use strict";
var a;
a = 100;
//var v;
var printVal$ = function (i){

console.log("your have passed "+i);

};

var num = 10 

function test() { 
   var num = 100 
   console.log("value of num in test() "+num) 
};


function Lettest() { 
   //var num = 100; 
   let num = 100;
   console.log("value of num in test() "+num) 
   { 
      console.log("Inner Block begins") 
      let num = 200; 
      //console.log("value of num : "+num)  
      //var num = 300; 
      console.log("value of num using let : "+num)  
   } 
}

function ConstTest(){


  // console.log("oops it is not declared. " + y );
    {
        const myconst = 90;
        console.log("constant value is ", myconst);
        var x=100;
        console.log("x value is " + x);
    }

    {
        const myconst = 95;
        console.log("constant value is ", myconst);
        //var x=100;
        console.log("x value is " + x);
    }

    var y=200;
    //var myconst = 100;
    //myconst = 200;
    //myconst = 90;
   // console.log("constant value is ", myconst);

}

function loopTest()
{

    for(var i=0;i<5;i++)
    {

        if(i==2)
            continue;
        if(i==3)
            break;
        console.log("value of i is"+ i);
    }
}


function RestTest(x,y=10,...params)
{

    console.log(" Value of x " + x);
    console.log(" Value of Y " + y);

    console.log(" the params length " + params.length);

    params.forEach(function(element) {
        console.log(element);
    }, this);
}
 

function DefaultValueTest( x, y=10 )
{
   console.log("sum of x and y is ", x+y, y+x );
}



var f = function(x,y){
    console.log("this is an anonymous function !");
};


//parametarized annonymous function.
var mulfunc = function(x,y){
    return x*y;
}


function calmul()
{

    var value = mulfunc(20,30);
    console.log("value of multiplication", value);

}


//recursive functions.
function factorial(num)
{

    if(num<=0)
    return 1;
    else
    {
       return  num*factorial(num-1);
    }
}

//Annonymous recursive function.
(function() { 
   var msg = "Hello World from annonymous recursive function !" ;
   console.log(msg)
})()


var lambdafunction = (x,y)=>{ x=x+10; return x*y };

var lambdaExpression = (x,y) => x*y;

var lda = ()=> 50*5;

var ldbsingleParameter = y=>y*4;


//IIFE : immediately invoked function expressions.

// (()=>{

//         (()=>{

//             var x = 400;
//             console.log("the variable x is hidden inside this function",x);

//         })();
//     console.log("the variable x is not accessible in side this function.");
// })();

//Generators:

function* getColors(){

    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'blue';
    yield 'green';
    yield 'violet';
    yield 'white';
   
}

var generateColors = ()=> {

    for(let color of getColors())
    {
        console.log(color);
    }
}
//generateColors();


var ask = function*()
{
   var name =  yield "first statement";
   var age =  yield "second statement";
   return name + " "+ age;

}

var callAskfunction = ()=>{
var it = ask('firstParameter');

console.log(it.next('secondParameter'));
console.log(it.next('thirdParameter'));
console.log(it.next('fourthParameter'));
}


callAskfunction();

//console.log('colors ');
//Execution of the functions..

//console.log(200);
//console.log(a);
var t1;
t1="string value";
//printVal$(t1);

t1 = 200;
//printVal$(t1);

console.log("hello program");
//printVal$(500);
//console.log("the let value is "+ ab);

//Global Scope and Local Scope;;
//console.log("value of num outside test() "+num) 
//test();



//Let scope test.
//Lettest();


//Constnt test.
//ConstTest();

//loops test
//loopTest();

//REST params test.
//RestTest(1);
//RestTest(1,2,3);
//RestTest(1,3,'abc');

//default value for function parameter.
//DefaultValueTest(10);

//anonymous function or function expression.
//f();

//parametrized annonymous function.
//calmul();

//recursive functions
//console.log("recursion value is ", factorial(1));

//lambda function
// x = lambdafunction(10,20);
// console.log("lambda function value", x);

// y = lambdaExpression(5,7);

// console.log("lambda expression value is ", y);

// z = lambdaExpression(8,7);

// console.log("lambda expression value is ", z);

// console.log("value of lamba ", lda());

// console.log("value of single valued lamba expression. ", ldbsingleParameter(7));
