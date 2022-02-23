//////
//this //////////////////////////////////////////////////////////////////////

//rule1:--------->this insight method.... object

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
/////here this refers to the obj called myObj2

//rule2: this in a constructor function refers it to a new empty obj. this obj created by calling a constructor function

//such as-------------------->
function Product(name, price) {
  this.name = name;
  this.price = price;
  this.productDesc = function () {
    return `${this.name}-$${this.price}`;
  };
  console.log("this is---->", this); //this is----> Product {
  //   name: 'shirt',
  //   price: 60,
  //   productDesc: [Function (anonymous)]
  // }
  return this;
}
//in constructor function this will be used as an empty obj

const prd = new Product("shirt", 60);
console.log(prd);
console.log(prd.name);
console.log(prd.price);

//rule3:-------------> otherwise this always indicates (window object)

function sayHi() {
  console.log(this);
}
console.log(sayHi);
