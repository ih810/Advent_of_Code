const txt = require("../readtxt");

let input = txt("./day2.txt");
let arr = input.split("\n");

const part1 = () => {
  let horizontalPos = 0;
  let depthPos = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i].charAt(0) === "f") {
      //forward
      console.log("f", parseInt(arr[i].charAt(8)));
      horizontalPos += parseInt(arr[i].charAt(8));
    } else if (arr[i].charAt(0) === "u") {
      //up
      console.log("u", parseInt(arr[i].charAt(3)));
      depthPos -= parseInt(arr[i].charAt(3));
    } else if (arr[i].charAt(0) === "d") {
      //down
      console.log("d", parseInt(arr[i].charAt(5)));
      depthPos += parseInt(arr[i].charAt(5));
    }
  }
  console.log(horizontalPos * depthPos);
};

// part1();

const part2 = () => {
  let horizontalPos = 0;
  let dephPos = 0;
  let aim = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i].charAt(0) === "f") {
      //forward
      value = parseInt(arr[i].charAt(8));
      horizontalPos += value;
      dephPos += aim*value;
    } else if (arr[i].charAt(0) === "u") {
      //up
      value = parseInt(arr[i].charAt(3));
      aim -= value;
    } else if (arr[i].charAt(0) === "d") {
      //down
      value = parseInt(arr[i].charAt(5));
      aim += value;
    }
  }
  console.log(horizontalPos * dephPos);
};

part2();
