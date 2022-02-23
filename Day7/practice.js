//object is key value pair

const myObj = {
  name: "Tanmoy Acharjee",
  age: 26,
  job: "web developer",
  employed: true,
};

console.log(myObj);
console.log(myObj.name);
console.log(myObj["age"]);

const valueObj = "age";

console.log(myObj[valueObj]);

const myObj1 = {
  name: "mango",
  color: "yellow",
  category: "langra",
  totalDetails: function () {
    console.log(
      `this ${myObj1.name} is ${myObj1.category} category fruit. this is ${myObj1.color} `
    );
  },
};
myObj1.totalDetails();

const myObj2 = {
  name: "mango",
  color: "yellow",
  category: "langra",
  totalDetails: function () {
    console.log(
      `this ${this.name} is ${this.category} category fruit. this is ${this.color} `
    );
  },
};
myObj2.totalDetails(); // if a function is ina obj. this is called method. you can use thsi function as a method

//////////////////////////////////////////////////////////////////////////////////

/////factory function//////////////////

function product() {
  return {
    name: "sneakers",
    price: 1000,
    isAvailable: true,
    productDesc() {
      return `${this.name}-$${this.price}`;
    },
  };
}
console.log(product());
console.log(product().name);
//{
//   name: 'sneakers',
//   price: 1000,
//   isAvailable: true,
//   productDesc: [Function: productDesc]
// }

function product1(name, price, isAvailable) {
  return {
    name,
    price,
    isAvailable,
    productDesc() {
      return `${this.name}-$${this.price}`;
    },
  };
} ///if key value is same,, you have mention  the name without declaring both key and value...
const shoeObj = product1("shirt", 100, true);
console.log(shoeObj);

/////constructor function/////////////////

function Product(name, price) {
  this.name = name;
  this.price = price;
  this.productDesc = function () {
    return `${this.name}-$${this.price}`;
  };
  return this;
}
//in constructor function this will be used as an empty obj

const prd = new Product("shirt", 60);
console.log(prd);
console.log(prd.name);
console.log(prd.price);
//in constructor function you have to call it with a "new keyword"

///copy by value vs copy by reference////////////

const a = 5;
const b = a;
console.log(a, b);
// in primitive typr you can copy by value

const obj1 = { value: 10 };
const obj2 = obj1;
console.log(obj1, obj2);

obj1.value = 1000;
console.log(obj1, obj2);
//in reference type you can copy by reference

///pass by value vs pass by reference

let x = 10;
function passByValue(x) {
  x = 20;
}

console.log(passByValue(x));
console.log(x);

let ob = { value: 10 };

function passByRef(obj) {
  obj.value = 30;
}
console.log(passByRef(ob));
console.log(ob);


