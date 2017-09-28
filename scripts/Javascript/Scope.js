//Global scope, function scope, blocked scope.




var product_id = "PRD-3988";


console.log(product_id);
//console.log(window.productid); //if we are using a browser;
//console.log(global);
console.log(global[product_id]); //if we are using a nodeJS;


product_id1 = "PRD-0909";

updateproduct = function(){
    product_id1 = "updated the product";
    product_id2 = "global scope in function!"; //a global variable is created in the global namespace.
}

updateproduct();
// console.log(product_id1);
// console.log(product_id2);


var description = "global scope descrition";

var updatedescription = function(){
	var description = "function scope description";
    console.log(description);
    //console.log(this.description);
}

//updatedescription();
//console.log(description); // prints "global scope descrition";


//blocked scope.

var blockfunction = function(){

var parr = ['a','b','c','d'];

    for(var i in parr){
        let item = "blocked item";
        console.log(i);
    }
        //console.log(item);
}();






