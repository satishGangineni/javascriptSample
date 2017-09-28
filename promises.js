
//Passing functions as parameters to another functions.
function notifyAll(fnmsg,fnemail)
{
    console.log("notification started");
    setTimeout(function() {
        notify(fnmsg,fnemail);
    }, 100);

    console.log("notification will be finish in a minute!");
}

function notify(fnmsg,fnemail){

    console.log("begin notifying all!");
    fnmsg();
    fnemail();
    console.log("End notifying all!");
}

messaging = function(){

    console.log("messaging all");
} 

emailing = function(){

    console.log("emailing all!");
} 

//notifyAll(messaging,emailing);

// function asynctest()
// {
//     setTimeout(function() {   
//         console.log("one");   
//         setTimeout(function() {   
//             console.log("two");   
//             setTimeout(function() {   
//                 console.log("three");   
//             }, 1000);   
//         }, 1000);   
//     }, 1000);   
// }

//asynctest();
   

//Promise example.

//it will return a promise
//getsum(resolve,reject)
function getsum(ip1,ip2){

    var isNegitive = (ip1,ip2)=> ip1+ip2<0;

    var retpromise = new Promise(sumpromise);
    console.log("begin calculating the sum!");

    return retpromise;

    function sumpromise(fresolve,freject){

        setTimeout(function() {
            //if(!isNegitive(ip1,ip2)){
                fresolve(ip1+ip2)
            //}
           // else{
                //freject("rejected the sum!");
            //}
            
        }, 2000);
        
    }

}

getsum(10,30).then(
sumSuccess,
sumerror
);



var sumSuccess = function(sum){
    console.log("the sum of two numbers  " , sum);
}

var sumerror = function(error){
    console.log("error is  ", error);
}