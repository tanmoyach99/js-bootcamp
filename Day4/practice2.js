let a = "10";
let b = 10;
console.log(a == b); //true... because its only check value not its type. so being the two kinds of data type with the same value

console.log(a === b); //false... because its check the value as well as its type. here a is the string type whether b is number type. so, being the same value a===b is false

const x = 10;
const y = 10;
console.log(x === y); //true...x and y has the same value and at the same time they are the same dat type . thats why its return true.
// *********point to be noted*********, when "===" return true "==" will always return true

// logical operators

const m = 20;
console.log(m < 100 && m === 20); //true. beacuse m is less than 100 and mis equal ton 20

console.log(m < 100 && m === 200); //false... mis less than 100 and m is not equal to 100.
// basically ""and"" opertors check if the all conditions true

console.log(m < 100 || m === 200); //true ..because one condition is true
//basically or operators check if any one condition is true
