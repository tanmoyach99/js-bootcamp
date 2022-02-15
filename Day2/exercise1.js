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

console.log(profile);
// {
//   name: 'Tanmoy Acharjee',
//   age: 26,
//   job: 'Web Developer',
//   salary: 65000,
//   futureGoal: 'Blockchain Developer',
//   favLanguage: '"Javascript"'
// }

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

// ************exercise3****************************
var someObj = {};

someObj._name = "John Smith"; //valid
someObj.age = 26; // valid

var prop = "color";
someObj[prop] = "red"; //valid

//   someObj.123=true //Invalid

//***************exercise4****************************

const Movies = [
  {
    id: 1,
    title: "Dhaka Attack",
    rating: 4,
    category: "thriller",
    language: "Bengali",
  },
  {
    id: 2,
    title: "Bangalore Days",
    rating: 5,
    category: "Drama",
    language: "Malayalam",
  },
  {
    id: 3,
    title: "Assalamu Alaikum Beijing",
    rating: 4,
    category: "Romance",
    language: "Korean",
  },
  {
    id: 4,
    title: "Jai Bhim",
    rating: 5,
    category: " suspense thriller",
    language: "Tamilalam",
  },
  {
    id: 5,
    title: "AynaBaji",
    rating: 4,
    category: "thriller",
    language: "Bengali",
  },
  {
    id: 6,
    title: "Shashank Redemption",
    rating: 5,
    category: "thriller",
    language: "English",
  },
  {
    id: 7,
    title: "Forrest Gump",
    rating: 4,
    category: "Drama Comedy",
    language: "English",
  },
  {
    id: 8,
    title: "K.G.F",
    rating: 4,
    category: "Commercial Drama",
    language: "Telegu",
  },
  {
    id: 9,
    title: "Oggatonama",
    rating: 4,
    category: "thriller Drama",
    language: "Bengali",
  },
  {
    id: 10,
    title: "Dipu Number 2",
    rating: 4,
    category: "thriller",
    language: "Bengali",
  },
];

const m = Movies[9];

const movieDetails =
  m.title +
  " was released in 1996. It is a  " +
  m.language +
  " " +
  m.category +
  " fim. It was ver much loved by the people. It Got the huge " +
  m.rating +
  ".";

console.log(movieDetails);
