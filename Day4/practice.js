1 + 2;
console.log(1 + 2);

let a = 10;
let b = 3;

let result = a % b;

console.log(result); //1

a = 20;
b = 10;

let result1 = a + b; //30
let result2 = a * b; //200
let result3 = a / b; //2
let result4 = a - b; //10

console.log(result1, result2, result3, result4);
//30 200 2 10

let a1 = (a += 10); // a=20------>   a=a+10=>a=20+10=30---------> a=30;
let a2 = (a -= 10); //a=30-------->  a=a-10=>a=30-20=20---------->a=20
let a3 = (a /= 10); //a=20---------> a=a/10=>a=20/10=2------------>a=2
let a4 = (a *= 10); //a=2----------->a=a*10=>a=2*10=20------------->a=20
console.log(a1, a2, a3, a4); //30,20,2,10
++a; //pre increment;
console.log(a); //a=20--->21 now
a++; //post increment
console.log(a); //a=21---->22 now

a--; //post decrement
console.log(a); //21
--a; //pre decrement
console.log("a", a); //20

// operand

let x = 100;
// console.log(++x);//101
// console.log(x++);//100

console.log(x > a); //x=100,a=20, so 100>20 true
console.log(x < a); //x=100,a=20, so 100<20 false

console.log(x <= a); //false
console.log(x >= a); //true
console.log(x != a); // x and a is not equal... so true
console.log(x == a); //false a nad a is not equal so false
