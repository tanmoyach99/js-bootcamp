const num = 5;
const num2 = "5";

// console.log(num == num2); //true...beacuse its only check value
// console.log(num === num2); //false,, its checks value as welle as type

////////////////////////////////////////////////////////

const productPrice = 100;
let freeShipping = false;
let homeDelivery = false;

// if (productPrice >= 100) {
//   freeShipping = true;
//   homeDelivery = false;
// } else if (productPrice >= 60) {
//   freeShipping = false;
//   homeDelivery = true;
// } else {
//   freeShipping = false;
//   homeDelivery = false;
// }

// *********ternary operator**********

freeShipping = productPrice >= 100 ? true : false; //true
homeDelivery = productPrice >= 60 && productPrice < 99 ? true : false; //false

console.log(freeShipping, homeDelivery);

freeShipping = productPrice > 100 ? true : false; //false
homeDelivery = productPrice >= 60 || productPrice < 99 ? true : false; //true

console.log(freeShipping, homeDelivery);

const valueNum = 10;
console.log(!valueNum); //false  valueNUm is always true value  whether logical not turns into false value

console.log(Boolean(valueNum)); //true

//falsy values

console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(false)); //false
console.log(Boolean("")); //false
console.log(Boolean(0)); //false

// other than that all are truthy values

// without assigning values any kind of variable will be a falsy values

////////switch operators-------------------------------------->>>>>>>
let pPrice = 100;
switch (pPrice) {
  case 100:
    freeShipping = true;
    homeDelivery = false;
    break;
  case 90:
    freeShipping = false;
    homeDelivery = true;
    break;
  default:
    freeShipping = false;
    homeDelivery = false;
}
// console.log(freeShipping, homeDelivery);

pPrice = 100;

console.log(freeShipping, homeDelivery);
