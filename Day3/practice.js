/**************lecture15,lecture16,lecture17,lecture18*****************/

function profile(firstName, lastName, age, job, goal) {
  let profileDetails = `My name is ${firstName} ${lastName} and I'm ${age}. I am a ${job}. I want to be a ${goal} next.`;

  console.log(profileDetails);
}

profile("tanmoy", "acharjee", 26, "web developer", "Blockchain_developer");
// My name is tanmoy acharjee and I'm 26. I am a web developer. I want to be a Blockchain_developer next.

profile("tanmoy", "acharjee", 26, "web developer");
// My name is tanmoy acharjee and I'm 26. I am a web developer. I want to be a undefined next.

// if we not pass an argument it will be undefined

//we can pass the default valueof parameter like below this one

function profile2(firstName, lastName, age, job, goal = "data scientist") {
  let profileDetails = `My name is ${firstName} ${lastName} and I'm ${age}. I am a ${job}. I want to be a ${goal} next.`;

  console.log(profileDetails);
}

profile2("tanmoy", "acharjee", 26, "web developer");
// My name is tanmoy acharjee and I'm 26. I am a web developer. I want to be a data scientist next.

//just look at he result. if we not pass an argument it will accept the default value of parameter

profile2("tanmoy", "acharjee", 26, "web developer", "MAANG Engineer");
// My name is tanmoy acharjee and I'm 26. I am a web developer. I want to be a MAANG Engineer next.

//if we pass the argument it will accept that the argument value

// ****************return keyword****************************

function profile3(firstName, lastName, age, job, goal = "data scientist") {
  let profileDetails = `My name is ${firstName} ${lastName} and I'm ${age}. I am a ${job}. I want to be a ${goal} next.`;
  return profileDetails;
}

const totalProfileDetails = profile3(
  "John",
  "Smith",
  26,
  "Digital Marketer",
  "Web Developer"
);

console.log(totalProfileDetails);
// My name is John Smith and I'm 26. I am a Digital Marketer. I want to be a Web Developer next.

console.log(
  profile3("John", "Smilga", 26, "Digital Marketer", "softwareEngineer")
);

// My name is John Smilga and I'm 26. I am a Digital Marketer. I want to be a softwareEngineer next.

// you can declare a function in that style too
const profile4 = function (
  firstName,
  lastName,
  age,
  job,
  goal = "data scientist"
) {
  let profileDetails = `My name is ${firstName} ${lastName} and I'm ${age}. I am a ${job}. I want to be a ${goal} next.`;
  return profileDetails;
};
console.log(
  profile4("Johnas", "Smile", 268, "web designer", "softwareEngineer")
);
// My name is Johnas Smile and I'm 268. I am a web designer. I want to be a softwareEngineer next
