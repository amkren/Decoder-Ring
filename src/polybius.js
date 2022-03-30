// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const letters = {
      11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e',
      12: 'f', 22: 'g', 32: 'h', 42: '(i/j)', 52: 'k',
      13: 'l', 23: 'm', 33: 'n', 43: 'o', 53: 'p',
      14: 'q', 24: 'r', 34: 's', 44: 't', 54: 'u',
      15: 'v', 25: 'w', 35: 'x', 45: 'y', 55: 'z'
    };
    input = input.toLowerCase();
    let result = "";

    //if the input is not a string, return false
    if(typeof input !== "string") return result = false;

    //if encode is true
    if(encode){
      //for all the characters in the input
      for(let characters in input){
        //each character is assigned the value of the index it is currently in in the input
        const character = input[characters];

        //if the character is a space, add it to the result, and continue
        if(character === ' '){
          result += character;
          continue;
        }

        //since i and j are the same value, assign the result of 42 to both, and continue
        if(character === 'i' || character === 'j'){
          result += 42;
          continue;
        }

      //if the current character matches up with a value in the letters object, assign that character to the result string
        for(let values in letters){
          if(character === letters[values]) {
            result += values;
          }
        }
      }
    } else {
        //if decoding, the number must be even to correctly decode
        for(let numbers in input){
          let ensureEven = input.split(" ");

          for(let value in ensureEven){
            if(ensureEven[value].length%2 != 0){ //if the remainder of being divided by two is not 0
              return result = false; //the sequence of numbers cannot be decoded
            }
          }

          const numbersToWord = `${input[0]}${input[1]}` ;//holds the value of the first and second index of the current sequence

          if(input[0] === " ") { //if there is a space in the input, add the space to the decoded message
            result += input[0];
            input = input.slice(1); //then move on to the next sequence of numbers
            continue;
        }

        for(let values in letters){
          if(numbersToWord === values) result += letters[values];
        }
        input = input.slice(2);
      }
    }

    return result; //return the final string
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
