const exercise13 = require("./exercise-13");

function exercise12() {
  // Exercise 12
  //
  // Write a program that generates a list of all prime numbers from 1 and 200.
  // Prime numbers have exactly two factors.
  // A prime number is a number that is ONLY divisible by 1 and itself.
  //
  // 6 -> NOT prime (2 * 3)// 1. Code runs as you type: edit message
let msg = 'hello world'

// 2. Files import automatically: uncomment this
// msg = capitalize(msg)

$('#header')
  .html(msg)
  // 3. Smart autocomplete: type .fadeIn('slow')
  // after .fadeOut('slow')
  .fadeOut(1000)
  
console.log({ myMessage: msg })
  // 7 -> PRIME (can only be divided by 1 and 7, no other numbers)
  // 12 -> NOT prime (3 * 4, 2 * 6)
  // 37 -> PRIME ()
  //
  //
  // EXPECTED OUTPUT: [2, 3, 5, 7, 11, 13, ...]
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  let output = [];
  for (let i = 2; i <= 200; i++){
    let notPrime = false;
    for (let j = 2; j <= i; j++){
      if (i % j === 0 && j !== i){
        notPrime = true
      }
    }
    if (notPrime === false){
      output.push(i);
    }
  }
  console.log(output);

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
// yarn test exercise-12

module.exports = exercise12;
