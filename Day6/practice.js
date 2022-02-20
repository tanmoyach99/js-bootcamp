let age = 6;

while (age < 8) {
  console.log("you are eligible for job");
  age++;
}

// you are eligible for job
// you are eligible for job

//console.log runs 2 time.... because,,, when it enters the loop it got the condition true it run the code,, after that its increment its value. and age value becomes 7 and after second iteration it becomes after printing the code. after that it get the condition false

///infinite loop with

while (age > 10) {
  console.log("it wll run infinite times");
  age++;
}

for (let num = 0; num < 10; num++) {
  //   console.log("i won't repeat the code");
}
// it outputed the result 10 times

//loop in array format
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += i;
}
console.log(sum);

let i = 0;

while (i < arr.length) {
  console.log(arr[i]);
  sum += i;
  i++;
}
console.log(sum);

/////////////////////////////////////////////////////////////
// for of loop

for (let p of arr) {
  sum += p;
}
console.log(sum);

const details = {
  name: "Tanmoy Acharjeee",
  age: "26",
  job: "web developer",
  language: "Bengali",
};

for (key in details) {
  console.log(key);
  console.log(details[key]);
}
// for of loop or for loop or while loop can't work upon an obj
// in Object you have to use (for in loop)
