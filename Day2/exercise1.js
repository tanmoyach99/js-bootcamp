//**************exercise1****************

let profileDetails = [];

profileDetails = ["Tanmoy", 26, "Web Developer", '"Javascript"'];

const fullProfile =
  "I am " +
  profileDetails[0] +
  " and " +
  profileDetails[1] +
  ". I'm a " +
  profileDetails[2] +
  ". I love " +
  profileDetails[3];

console.log(fullProfile); //I am Tanmoy and 26. I'm a Web Developer. I love "Javascript"

//**************exercise2****************
let profile = {};

profile.name = "Tanmoy Acharjee";
profile.age = 26;
profile.job = "Web Developer";
profile.salary = 65000;
profile.futureGoal = "Blockchain Developer";
profile.favLanguage = '"Javascript"';

console.log(profile); /*{
  name: 'Tanmoy Acharjee',
  age: 26,
  job: 'Web Developer',
  salary: 65000,
  futureGoal: 'Blockchain Developer',
  favLanguage: 'Javascript'
}*/

// let fullDetails = `My Name is ${profile.name} and ${profile.age}. I'm a ${profile.job}. I love "${profile.favLanguage}" `;  //Method1

let fullDetails =
  "My Name is " +
  profile.name +
  " and " +
  profile.age +
  ". I'm a " +
  profile.job +
  ". I love " +
  profile.favLanguage +
  ".";

console.log(fullDetails); //My Name is Tanmoy Acharjee and 26. I'm a Web Developer. I love "Javascript"

// const profileDetails={
//     name: "Tanmoy Acharjee",
//     age:26,
//     job:"Web developer",
//     salary: 65000,
//     futureGoal: "BlockChain Developer",
//     favLanguage: '"Javascript"'

// }
