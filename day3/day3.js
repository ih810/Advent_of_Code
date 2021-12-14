const txt = require("../readtxt");

let input = txt("./day3.txt");
let arr = input.split("\n");

// const part1 = () => {
//   const counter = new Array(12).fill(0);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < 12; j++) {
//       if (arr[i][j] === "1") {
//         counter[j]++;
//       }
//     }
//   }
//   console.log(counter)
//   for (let a = 0; a < 12; a++) {
//     if (counter[a] >= 500) {
//       counter[a] = "1";
//     } else {
//       counter[a] = "0";
//     }
//   }
//   console.log(counter.join(""));
//   let gama = parseInt(counter.join(""), 2);
//   const bitflip = (v, digits) => {
//     return ~v & (Math.pow(2, digits) - 1);
//   };
//   let epsilon = bitflip(gama, 12)
//   console.log(gama);
//   console.log(epsilon);
//   console.log(gama * epsilon);
// };
// part1();

const part2 = () => {
    let turn = 0;
    const oxyRating = (oxArr, turn) => {
        const recurseArr = [];
        let oxCounter = 0; 
        if(oxArr.length === 1){
            console.log(oxArr)
            return oxArr
        }
        for(let i = 0; i<oxArr.length; i++){
            if(oxArr[i][turn] === '1'){
                oxCounter++
            }
        }
        for(let j=0; j<oxArr.length; j++){
            if(oxCounter >= oxArr.length/2){
                if(oxArr[j][turn] === '1'){
                    recurseArr.push(oxArr[j])
                } 
            } else {
                if(oxArr[j][turn] === '0'){
                    recurseArr.push(oxArr[j])
                }
            }
        }
        turn ++
        return oxyRating(recurseArr, turn)
    }
    const coRating = (coArr, turn) => {
        const recurseArr = [];
        let coCounter = 0; 

        if(coArr.length === 1){
            console.log(coArr)
            return coArr
        }
        for(let i = 0; i<coArr.length; i++){
            if(coArr[i][turn] === '1'){
                coCounter++
            }
        }
        for(let j=0; j<coArr.length; j++){
            if(coCounter < coArr.length/2){
                if(coArr[j][turn] === '1'){
                    recurseArr.push(coArr[j])
                } 
            } else {
                if(coArr[j][turn] === '0'){
                    recurseArr.push(coArr[j])
                }
            }
        }
        turn ++
        return coRating(recurseArr, turn)
    }
    let oxLvlBin = oxyRating(arr, 0);
    let coLvlBin = coRating(arr, 0);
    let oxLvlDec = parseInt(oxLvlBin[0], 2);
    let coLvlDec = parseInt(coLvlBin[0], 2);
    console.log(oxLvlDec, coLvlDec)
    console.log(oxLvlDec*coLvlDec)
}

part2()