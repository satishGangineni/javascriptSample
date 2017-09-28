var tstr = "my name is alaxander";
var searchString = 'name';
var rex = new RegExp(searchString, "g" );

//var res = rex.exec(tstr); //returns 'name' if finds

var res = rex.test(tstr); //returns true or false if finds

console.log("result of the regular exprssion " , res);


// var str = "Javascript is an interesting scripting language"; 
// var re = new RegExp( "script", "g" ); 
// var result = re.exec(str); 
// console.log("Test 1 - returned value : " +  result)

