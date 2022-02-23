const age = 14;

if (age < 10) {
  console.log("stay home under your mom supervision");
} else if (age >= 10 && age < 15) {
  console.log("try to gain knowledge frrom autside of your home");
} else if (age >= 15 && age < 18) {
  console.log("peapare to cast vote");
} else if (age > 18) {
  console.log("cast vote");
} else {
  console.log("you are out of range");
}
// this part is very tricky.......
switch (age) {
  case age < 10 && age:
    console.log("stay home under your mom supervision");
    break;
  case age >= 10 && age < 15 && age:
    console.log("try to gain knowledge frrom autside of your home");
    break;
  case age >= 15 && age < 18 && age:
    console.log("prepare to cast your vote");
    break;
  case age > 18 && age:
    console.log(" cast vote");
    break;
  default:
    console.log("you are out of range");
}
