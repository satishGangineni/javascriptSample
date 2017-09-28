//BOM: browser object model.

 console.log("*****BOM And DOM*****");

console.log(window.screenLeft + " " + window.screenTop); //1,1

console.log(window.innerWidth + " " + window.outerWidth); //1189,1201

//one more commonly used function is open

window.open("http://google.com", "_blank");

// var i1 = setInterval(
//   function(){
//     let scs = new Date().getSeconds()
//     console.log(scs);
//     if(scs===10)
//       clearInterval(i1) //clears the interval
//   },
//     1000
//   );



 var i1 = setTimeout(
  function(){
    let scs = new Date().getSeconds()
    console.log(scs);
         
  },
    1000
  );

  clearTimeout(i1) ;


//   //Sysem dialogs
//   ===============

alert("Hello World!");


if(confirm("Do You Want To Delete Everything!"))
{
  alert("you have asked for it!");

}
else
{
  alert("May be next time!");
  
}

//Prompts a dialog to capture the user input.

var name = prompt("give your name");
console.log(name);

if(name == null || name ==undefined)
  alert('it is null');

if(name ==='')
  alert('it is blank');



// Location object
// =====================

console.log(location.href); //retrieves the uri of the browser.
console.log(location.host);
console.log(location.port);


location.assign("https://google.com");

//Document Object.
// ===============


//Document Object.
var article1 = document.getElementById('angular1');
console.log(article1);

var article2 = document.getElementsByClassName('articleCls');
console.log(article2);


var article3 = document.getElementById('para1');
console.log(article3);

var article4 = document.getElementById('savebtn');
console.log(article4);

console.log(article2[0].getAttribute("id"));

console.log(article2[0].setAttribute("class", "testClass"));

var paras = document.getElementsByTagName("P");
console.log(paras);



//Query Selectors

console.log("Query Selectors..");
var article5 = document.querySelector("article"); //it will retrive the article element

//if there are multiple elements it will pick up the first element in the array.
console.log(article5);


//if you want to retrieve an element with id use #symbole

var article6 = document.querySelector("#angular1"); //it will retrive the article element
console.log(article6);


//if we want to retrieve elements with a class name use '.' symbol
var article7 = document.querySelector(".pCls"); //
console.log(article7);


//if there are multiple elements with the class name and if you want to retrive
//all of them use querySelectorAll();
var article8 = document.querySelectorAll(".pCls"); //
console.log(article8);
