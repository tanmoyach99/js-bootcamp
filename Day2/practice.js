//***************lecture 7****************************

let productName = "Milk";
console.log(productName, typeof productName); //Milk string

productName = "Coffee";
console.log(productName, typeof productName); //Coffee string

productName = true;
console.log(productName, typeof productName); //true boolean

productName = 88;
console.log(productName, typeof productName); //88 number

// this entire thing called dynamic typing. because we are not declaring the dta type. Instead js on its own knows the data type and executes it accordingly

//****************lecture8 & 9****************

// reference Data type--- Array, Object, Function
//Array is a collection of data

const profile = ["Tanmoy", "acharjee", 26, "Web Developer", true];
console.log(profile[1]); //acharjee

const details = profile[0] + " " + profile[1];
console.log(details); //Tanmoy Acharjee

//overwriting the values in profile--------------->
profile[4] = false;
console.log(profile); //[ 'Tanmoy', 'acharjee', 26, 'Web Developer', false ]

//Adding the extra value in array----------->
profile[5] = "Programming";
console.log(profile); //[ 'Tanmoy', 'acharjee', 26, 'Web Developer', false, 'Programming' ]

//length of an array -------------->
console.log(profile.length); //6

//*************lecture11 & lecture12************** */
/*************************************** */

//object

const profileDemo = {
  firstName: "Tanmoy",
  lastName: "Acharjee",
  age: 26,
  profession: "Software Engineer",
};

//accessing the data of object----------->

let firstName = profileDemo.firstName;
console.log(firstName); //tanmoy

// adding a properties in obj--------->
profileDemo.fatherName = "Anjan acharjee";
console.log(profileDemo);
/*{
  firstName: 'Tanmoy',
  lastName: 'Acharjee',
  age: 26,
  profession: 'Software Engineer',
  fatherName: 'Anjan acharjee'
} */

const someObj = {};

var prop = "color";
someObj[prop] = "red";

console.log(someObj);


