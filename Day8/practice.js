//copying object

const obj_1 = {
  name: "Tanmoy Acharjee",
  age: 26,
  job: "web developer",
  employed: true,
};

let obj_2 = {};

// for (let key in obj_1) {
//   console.log(obj_1[key]);
//   obj_2[key] = obj_1[key];
// }

// console.log("2nd obj..............", obj_2);

const obj_3 = Object.assign({ name: "tonu" }, obj_1);

console.log(obj_3);

const obj_4 = { ...obj_1, hobby: "ghumano" };
console.log(obj_4);

///Function is a object

//Math object
console.log(Math.PI); //3.141592653589793
console.log(Math.round(Math.random())); //0
console.log(Math.round(Math.random() * 10));
console.log(Math.ceil(Math.PI)); //4 //pi value is 3.14 thats why highest value of this 3.something is 4
console.log(Math.floor(Math.PI)); //3
console.log(Math.trunc(4.9)); //4.9 integar part is 4
console.log(Math.sign(-4)); // -1 because negative value
console.log(Math.sign(4)); //1 because positive value
console.log(Math.sign(0)); //0 because null value
console.log(Math.pow(4, 2)); //it basically used for powers of math. 1st value is base and second value power. thats why 4^2 =16
console.log(Math.sqrt(16)); //4...16"s root is 4
console.log(Math.abs(-7.9)); //7.9 this function return the absolute value
console.log(Math.min(1, -99, 9, 8, 7, 6, 190)); //-99 ..because it returns the minimum value
console.log(Math.max(1, -99, 9, 8, 7, 6, 190)); //190 it returns the maximum value

//Date object
let date = new Date();
console.log(date);

date = new Date(2021, 1, 1);
console.log(date);
//js counts the month from 0
const d = new Date(2018, 11, 24, 10, 33, 30, 0); //2018-12-24T04:33:30.000Z
//browser returns this---------------> Mon Dec 24 2018 10:33:30 GMT+0600 (Bangladesh Standard Time) {}
console.log(d.toString()); //Mon Dec 24 2018 10:33:30 GMT+0600 (Bangladesh Standard Time)
console.log(d.toDateString()); //Mon Dec 24 2018
//Date Object
