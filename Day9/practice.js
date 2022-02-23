function myFunc(name, age, job) {
  console.log(arguments);
  for (const property of arguments) {
    console.log(property);
  }
  return `my name is ${name} and i am ${age}. I am ${job}`;
}
const details = myFunc("tonu", 26, "web-developer");

console.log(details);

//rest operator................................................................

function product(name, ...property) {
  console.log(property);
  console.log(name);
  return `${name} $${property[0]}`;
}

const pd = product("shirt", 26, 30, 90);

console.log(pd);

//default paramenter

function restaurant(name, place, food, category = "chinise") {
  console.log(name, place, food, category);
}

restaurant("cuisine", "raozan", "biriyani");

//evolution of function to

function add(num1, num2) {
  return num1 + num2;
}
const result = add(18, 12);
console.log(result);

const multiply = function (num1, num2) {
  return Math.pow(num1, num2);
};
console.log(multiply(2, 10)); ///1024

//arrow function to

const max = (num1, ...rest) => Math.max(num1, ...rest);
console.log(max(12, 34, 56, 78, 81));

//this with arrow function

const prd = {
  name: "mobile",
  brand: "apple",
  price: 120000,
  showInfo() {
    return `${this.name}-$${this.price}`; //here this indicates to its parent object
  },
  showBrand: () => {
    console.log(this);
    return `${this.name}-${this.brand}`; //here is this not bind to this object.instead it refers to window object
  },
};
const info = prd.showInfo();
console.log(info); //mobile-$120000

const brandInfo = prd.showBrand();
console.log(brandInfo); //undefined-undefined

// const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// const product20 = ["shirt", 20, 0, true];

// const [name, price, ...rest] = product20;
// console.log(name, price, rest);

// function restaurant22({ name, place, category }) {
//   console.log(name, place, category);
// }

const food = {
  name: "rice",
  place: "raozan",
  category: "bangla",
};

// restaurant22(food);

const { name, ...others } = { ...food }; //spread and destructuring and rest

// restaurantleft side three dots is rest operatorsa
// on the other hand right side of three dots is spread operator

console.log(name, others);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// first class function

function demo() {
  console.log("this is demo function");
}
demo(); //function is  abject

const demo1 = () => {
  return console.log("hi there!!");
};

demo1();

const prd1 = {
  name: "mobile",
  brand: "apple",
  price: 120000,
  showInfo() {
    return `${this.name}-$${this.price}`; //here this indicates to its parent object
  },
  showBrand: () => {
    console.log(this);
    return `${this.name}-${this.brand}`; //here is this not bind to this object.instead it refers to window object
  },
  showObj() {
    //here is a function returning an object
    return {
      name: this.name,
      brand: this.brand,
      price: this.price,
      category: "electronics",
      color: "red",
    };
  },
  showFunc() {
    //here is  a function returning a function which returns a obj
    return this.showObj();
  },
};

const obj22 = prd1.showFunc();
console.log(obj22);
