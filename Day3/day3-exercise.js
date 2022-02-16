// **********************exercise1*******************************

function profileDetails(fullName, age, job, futureGoal, interest) {
  return `I am ${fullName}. I am ${age} years old. I'm a ${job}. My future goal is ${futureGoal}. I love ${interest}.`;
}

const profile1 = profileDetails(
  "John Smith",
  25,
  "Web developer",
  "Blockchain developer",
  "Data Mining"
);

console.log(profile1);
// I am John Smith. I am 25 years old. I'm a Web developer. My future goal is Blockchain developer. I love Data Mining.

// *****************exercise2*******************

const movies = [
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

const m = movies[6];

const movieDetails = ` ${m.title} was released in 1996. It is a ${m.language} ${m.category} film. It was ver much loved by the people. It Got the huge ${m.rating} rating in "IMDB".`;

console.log(movieDetails);
//  Forrest Gump was released in 1996. It is a English Drama Comedy film. It was ver much loved by the people. It Got the huge 4 rating in "IMDB".
