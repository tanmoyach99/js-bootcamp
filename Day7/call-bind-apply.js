////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//call------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>
function sayHi() {
  console.log(this);
}

// console.log(sayHi());

sayHi.call("samim");

//call can define this keyword...which its indicate to!!!
function age(age, job) {
  return `${this}!!your age is ${age}.you are a ${job}`;
}
age.call("tanmoy", 26, "developer");

//apply---------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>

age.apply("tanmoy", [26, "mati khata"]);

//apply has to pass the argument in array

///bind------------------------------>>>>>>>>>>>>>>>>>>>>>>>//************"bind can define this object"

const d = age.bind("tonu"); //this is call function referencing. when a function is assigned under avariable. this is called function referencing
console.log(d(26, "goru chorano"));

//fuction expression
const say = function (age, job) {
  return `${this}!!your age is ${age}.your job is ${job}`;
}.bind("tanmoy");

console.log(say(26, "ghumano"));
