const txt = require("../readtxt");

let input = txt("./day4.txt");
let arr = input.split("\n");

const part1 = () => {
  let winList = arr[0].split(",");
    let winCount = [];
    let wonRec = [];
  const bingoCard = [];
  const chunkSize = 6;
  for (let i = 2; i < arr.length; i += chunkSize) {
    const tempArray = arr.slice(i, i + chunkSize);
    const tempIntArray = tempArray.map((data) => {
      const preFil = data.split(" ");
      const result = preFil.filter((noEmpty) => noEmpty !== "");
      if (result.length > 0) {
        return result;
      }
    });
    const bingoRow = tempIntArray.filter((data) => {
      return data !== undefined;
    });
    bingoCard.push(bingoRow);
  }
  let flip = 'x'

  for (let i = 0; i < winList.length; i++) {
    for (let j = 0; j < bingoCard.length; j++) {
        //j = card
        for(let p = 0; p < bingoCard[j].length;p++){
            //p = card row
            for(let o = 0; o < bingoCard[j][p].length;o++){
                //o = number in row
                if(bingoCard[j][p][o] === winList[i]){
                    bingoCard[j][p][o] = 'x';
                }
            }
            const trans = bingoCard[j][0].map((_, colIndex) => bingoCard[j].map(row => row[colIndex]));
            if(flip === 'x'){
                console.log(bingoCard[j])
                console.log(trans)
                flip = 'o';
            }
            if(bingoCard[j][p].every((data)=>{return data === 'x'}) || trans[p].every((data)=>{return data === 'x'})){
                // console.log(bingoCard.length);
                if(wonRec.indexOf(j) == '-1'){
                    wonRec.push(j)
                } else {
                    winCount.push(bingoCard[j]);
                    if(wonRec.length === bingoCard.length){
                        console.log(wonRec.sort(function(a, b) {
                            return a - b;
                          }))
                        console.log(winList[i]);
                        // console.log(winCount);
                        console.log(bingoCard[59])
                        // console.log(bingoCard[j]);
                        return 
                    }
                }
            }
        }
    }
  }
//   console.log(bingoCard);
};

part1();
