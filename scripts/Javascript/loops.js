var lineitem = {
    product : 'phones',
    quandity : 4,
    price: 30.5
}

//for .. in Loop.
for (var field in lineitem){
	console.log(field + " : " + lineitem[field]); 
}


//Case Sensitive.

function submitOrder(){

    console.log("Order Submitted.");
}

//submitorder(); //gives an not defined error. since it is case sensitive.

var submit2 = 001;

console.log(submit2);
