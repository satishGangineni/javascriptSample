//Compound assignment operator.

total = 6;
total+=4;

console.log(total)//10.



total = 6;
total -=4;

console.log(total)//2.


total = 6;
total *=4;

console.log(total)//24.


total = 16;
total /=4;

console.log(total)//4.



total = 16;
total %=3;

console.log(total)//1


//Operator precedence

total = 4;
total *= 3 + 1;

console.log(total)//16
//in the operator precedence *= has less precedence than + symobl.
//so the addition will execute first then the *=. so the answer is 4*4.


//, (comma operator).. used to declare multiple varibales.

var par1=99, par2=20;



