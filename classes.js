

class polygon
{
    //int width=10;
    //int height=30;
    constructor(a, b)
    {
        this.width =a;
        this.height=b;
    }
    print()
    {
        console.log("value of height", this.height);
        console.log("value of width", this.width)
    }

    printList(list)
    {
        for(let a of list)
        {
            console.log(a);

        }        
    }

}

var polObj = new polygon(10,20);
polObj.print();
polObj.printList(['ddd','aaa','ddd'])

class staticExample
{
    //var x=100;
    //static member;
    static method1()
    {
       //var x=100;
       console.log("value of the member",x++);
    }
}

// staticExample.method1();
// staticExample.method1();
// staticExample.method1();

function someFunction()
{
    console.log("this is some function!");
    function childFunction(){
        console.log("child function!");
    }
    var cf = childFunction;
}

someFunction.talk = ()=>console.log("hello you are talking.");
//someFunction();
someFunction.talk();
//someFunction.cf();

var objsomeFunction = new someFunction();
//console.log(objsomeFunction.childFunction())
//console.log(objsomeFunction);
//objsomeFunction();
//objsomeFunction.talk();


function User(firstName){
    this.FirstName = firstName;
    this.getUserName = ()=>"always " + this.FirstName + ',' + this.LastName;
}

User.prototype.LastName = "AlwaysLast";
User.prototype.getName = function(){
    return this.FirstName+ ", "+ this.LastName
};

User.prototype.getCName =()=>{
    return this.FirstName+ ", "+ this.LastName;
};

let myuser = new User("Rambabu");
// console.log(myuser.getName());
// console.log(myuser.getUserName());
// console.log(myuser.getCName());
// console.log(myuser.FirstName);
// console.log(myuser.LastName);

//getters and setters.
class UserClass
{

   get country() {  return "India" };
    constructor(firstName,lastName)
    {
        this._FirstName = firstName;
        this.LastName = lastName;
       
    }

    set FirstName(value){
        this._FirstName = value;
    }

    get FirstName()
    {
        return this._FirstName;
    }

    getName(){

        return this.FirstName +" "+ this.LastName;
    }
}

let uclass = new UserClass("levi","seibence");
 //UserClass.prototype.country = "India";
// console.log(uclass.getName());
// console.log(uclass._FirstName);
// console.log(uclass.FirstName);
// console.log(uclass.country);


var fexrpression = function fdeclaration(firstName,lastName){

    this.FirstName = firstName;
    this.LastName = lastName;

    getName = function(){

        return firstName + "," + lastName;
    }
   
}

var f1 = new fexrpression("first","last");
//var f2 = new fdeclaration("firstd","lastd");
//console.log(f1.getName());

//class factory.
var objfactory = function(country){

    return class {
        get Country(){
            return country;
        }
        constructor(firstName,lastName)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
        }
        getName() {
            return this.FirstName+ ", "+this.LastName;
        }
    }
}

//class factory example.

// var AusClass = objfactory("Australia");
// var ausObj = new AusClass("ausFirst","ausLast");
// console.log(ausObj.Country);
// console.log(ausObj.getName());


// var usaClass = objfactory("USA");
// var usaObj = new usaClass("usaFirst","usaLast");
// console.log(usaObj.Country);
// console.log(usaObj.getName());



//Class Inheritance.

class shape
{

    constructor(area)
    {
        this.Area = area;
    }

    getArea()
    {
        var somefunc = ()=> this.Area;
        return somefunc();
    }
}
    
class circle extends shape
{
    // constructor(name)
    // {
    //     this.Name = name;
    // }

    get Name(){
        return this.name;
    }
    set Name(value){
        this.name = value;
    }

    getCircleArea()
    {
        return this.getArea();
    }

    getCircleName()
    {
        return this.name;
    }

}

// var _shape = new shape(200);
// console.log("area ", _shape.getArea() );

var _circle = new circle(800);

// console.log("area of a circle !", _circle.getArea() );

// console.log("area of a circle from GetCircleArea method!", _circle.getCircleArea() );
//  _circle.name = "panjagutta circle."
// console.log("Name of a circle!", _circle.getCircleName() );

// console.log("name of a shape !", _shape.name);

//multilevel inheritance.

class smallCircle extends circle
{

    methodA(){

        return "Method A";
    }

    methodA(param1){

        return "Method A with Param1" + param1;
    }

}

// scObj = new smallCircle(900);
// console.log("sCircle area !" , scObj.getCircleArea());
//  scObj.name = "ameerpet circle."
// console.log("Name of a small circle!", scObj.getCircleName() );
// console.log("methodA", scObj.methodA("ddddd"));


//Method overriding.

class parentPrint
{

    printme(){

        return "print parent";
    }

}

//printme is overriden.
class childprint extends parentPrint
{
   printme(){
       //super refer to the immediate parent.
        console.log(super.printme());
        return "print Child";
    }

}

// objp = new parentPrint();
// console.log(objp.printme())


objc = new childprint();
console.log(objc.printme())
