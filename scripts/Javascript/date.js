//date and time

var dt = new Date();
//it will return the current local date and time.
//Mon Aug 28 2017 19:15:28 GMT+0530 (India Standard Time)
//GMT refers to the greenwitch mean time /UTC


console.log(dt);




//if the date is invalid it returns "invalid date"

console.log(new Date("asdfasd")); //Invalid date
console.log(new Date(undefined)); //Invalid date
