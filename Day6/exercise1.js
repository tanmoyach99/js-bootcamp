// const num = 1;

// while (num <= 10) {
//   console.log(num);
//   num += 2;
// }
//program will crash...beacause assignment to constatnt variable

let num = 1;

while (num <= 10) {
  console.log(num);
  num += 2;
}
// 1st iteration: 1 is less then 10.it logs 1 and it incremented by2. so the num value is 3.
//2nd iteration: 3 is less then 10.it logs 3 and it incremented by2. so the num value is 5.
//3rd iteration: 5 is less then 10.it logs 5 and it incremented by2. so the num value is 7.
//4th iteration: 7 is less then 10.it logs 7 and it incremented by2. so the num value is 9.
//5th iteration: 9 is less then 10.it logs 9 and it incremented by2. so the num value is 11.
//6th iteration: 11 is not less than or equal to 10 . so it won"t enter the loop. so the loop work ends here.
//final output is 1 3 5 7 9

///////////////////////////////////////////////////////////////

let num1 = 1;

while (num1 <= 20) {
  if (num1 % 4 === 0) {
    console.log(num1);
  }
  num1++;
}

//output is 4 8 12 16 20;

//modulus is working for remainders. so when the remainders will be 0. it will show the output. so mathematically every 4 multiples upto 20 will show the output

// let number = 100;

// while (number < 150) {
//   console.log(number + 1);
//   number--;
// }

//  it is an infinite loop. because when number is decremented it will be never exceed the 150. so it will run infinitely.

////exerecise 4////////////////////////////////////////////////////////////////////////////
// even with for loop
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// even with while loop
let numEven = 0;
while (numEven <= 100) {
  if (numEven % 2 === 0) {
    console.log(numEven);
  }
  numEven++;
}

//odd with for loop
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
//odd with while loop
let numOdd = 0;
while (numOdd <= 100) {
  if (numOdd % 2 === 1) {
    console.log(numOdd);
  }
  numOdd++;
}

////////////////////exercise5////////////////////////////////

let str = "";

for (let i = 1; i <= 6; i++) {
  for (let j = 0; j < i; j++) {
    str += "$";
  }
  str += "\n";
}
console.log(str);
// $
// $$
// $$$
// $$$$
// $$$$$
// $$$$$$

//////////////////////////////////////////////////
//fizz-buzz problem
let fizz = 0;
let buzz = 0;
let fizzbuzz = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
    fizzbuzz++;
  } else if (i % 3 === 0) {
    console.log("fizz");
    fizz++;
    continue;
  } else if (i % 5 === 0) {
    console.log("buzz");
    buzz++;
  } else {
    console.log(i);
  }
}

console.log(fizz, buzz, fizzbuzz++);
