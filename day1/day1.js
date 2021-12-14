const txt = require("../readtxt");

const partOne = () => {
  let counter = 0;
  let input = txt("./day1.txt");
  let arr = input.split("\n");
  arr.reduce((prev, curr) => {
    if (prev > curr) {
      return curr;
    } else {
      counter++;
      return curr;
    }
  });
  console.log(counter);
};

// partOne()

const partTwo = () => {
  let input = txt("./day1.txt");

  let arr = input.split("\n");

  let intArr = arr.map((t) => {
    return parseInt(t);
  });

  let counter = 0;
  for (let i = 0; i < intArr.length - 3; i++) {
    let curr = intArr[i] + intArr[i + 1] + intArr[i + 2];
    let next = intArr[i + 1] + intArr[i + 2] + intArr[i + 3];
    console.log(curr, next);
    if (next > curr) {
      //increased
      counter++;
    }
  }
  console.log(counter);
};

partTwo();
