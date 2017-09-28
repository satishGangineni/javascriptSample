

//this is a constructor, called as a prototype.
function Person(first, last, age, eyecolor){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    //var hairColor;
    
}

Person.prototype.nationality = "english";

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");


Person.firstName = "radhe";
console.log(Person);
console.log(myFather);
console.log(Person.prototype);
console.log("Person ", Person.firstName);
console.log("Person nationality ", Person.nationality);

console.log("Father ",myFather.firstName);
console.log("Mother ",myMother.firstName);

console.log("Father nationality",myFather.nationality);
console.log("Mother nationality",myMother.nationality);


console.log("foo is", foo()); // ERROR! foo wasn't loaded yet
function foo() { return 5; } 
