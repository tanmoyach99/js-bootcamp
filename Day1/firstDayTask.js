const detailsOfKarim = "Karim is  a bad boy";
console.log("details of karim", detailsOfKarim, typeof detailsOfKarim);

const details2 = ' Karim is a  "bad " Boy';
console.log(details2);

const num4 = 43; //it is a number primitive data type beacause its not under single or double quotation
// you can add multiply  substract divide  this number
console.log(num4 + num4); //86

const num5 = "43"; // its a string primitive data type beacause its  under single or double quotation
//you cant add or substarct with this number

console.log(num5 + num5); //4343 ...it is behaving like a string..whereas we expected to be it 86.instead we get 4343.because,its a string primitive data type

/* so we can conclude that num4 and num5 is slightly different*/

const nameDetails = "I am Tanmoy.";
const ageDetails = " I am 26 yrs old.";
const prof = "I am a web developer. ";
const love = 'I love "javascript".';
const totalDetails = nameDetails + ageDetails + prof + love;
console.log(totalDetails); //I am Tanmoy. I am 26 yrs old.I am a web developer. I love "javascript".
