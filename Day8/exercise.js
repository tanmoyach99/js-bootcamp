function max(a, b) {
  a > b ? console.log(a) : console.log(b);
}
max(223, 115); //223
max(234, 345); //345

///////////////////////////////////////////////////////////
function showNum(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

showNum(20);

/////////////////////////////////////////////////////////////

function showSum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  console.log(sum);
}
showSum(10);

/////////////////////////////////////////////////////////////
function calcAverage(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < 60) {
      console.log("f");
    } else if (arr[i] > 60 && arr[i] < 70) {
      console.log("d");
    } else if (arr[i] > 70 && arr[i] < 80) {
      console.log("c");
    } else if (arr[i] > 80 && arr[i] < 90) {
      console.log("b");
    } else {
      console.log("a");
    }
  }
}
calcAverage([55, 65, 75, 85, 95]);

/////////////////////////////////////////////////////////////

const movie = {
  title: "ahmed",
  release: 2018,
  rating: 4.5,
  director: "bolla",
};

function showProp(movieData) {
  for (key in movieData) {
    if (typeof movieData[key] == "string") {
      console.log(movieData[key]);
    }
  }
}

showProp(movie);
