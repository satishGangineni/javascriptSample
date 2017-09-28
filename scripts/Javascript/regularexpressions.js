//regular expressions search for patterns in a text.
//they can get very complicated.
//patterns are case sensitive.

var pattern = new RegExp("am","g");
var pattern1 = /am/g;


var stext = "I am sam";


console.log(pattern instanceof RegExp); //true
console.log(pattern1 instanceof RegExp); //true

console.log(pattern.test(stext)); //true
console.log(pattern1.test(stext)); //true

var pattern = new RegExp("bam");
var pattern1 = /bam/;

var stext = "I am sam dam/nbam";

console.log(pattern.test(stext)); //false
console.log(pattern1.test(stext)); //false