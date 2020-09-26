function exercise11() {
  // Exercise 11
  //
  // Write a program that creates a string that represents an 8×8 grid,
  // using newline characters to separate lines. At each position of the grid
  // there is either an "_" or a "#" character. The characters should form a chessboard.
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  
let count = 0;
for (let i = 0; i < 4; i++){
let string = ''
  if (count % 2 === 0){
    for (let j = 0; j < 8; j++){
      if (j % 2 === 0){
        string = string + '#'
      } else {
        string = string + '_'
      }
    } 
  }
console.log(string)          
  count++;
  if (count % 2 !== 0){
    let string = ''
    for (let j = 0; j < 8; j++){
      if (j % 2 === 0){
        string = string + '_'
      } else {
        string = string + '#'
      }
    }
  count++;         
console.log(string)          
  }
}
    // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-11

module.exports = exercise11;
