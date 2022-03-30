// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here

    input = input.toLowerCase(); //keeps input from differentiating between capital and lowercase
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let resultString = ""; //holds the result of the final string
    let indexOfShift = 0; //holds the index of the current letter in the loop

    //if the shift is nothing, too big, or too small, return false
    if(shift === 0 || shift > 25 || shift < -25){
      return false;
    }

    for(let characters in input){
      character = input[characters];

      //if the character from the input is not a real letter, ignore the encoding/decoding and add it to the result
      if(letters.indexOf(character) === -1){
        resultString += character;
        continue;
      }

      //employ a find to match up the letter with their new shifted letter
      letters.find(letter => {
        if(letter === character) {
        //find the indexOfShift by adding or subtracting the "shift" value and assigning that value to the indexOfShift variable
        //if encoding is true, add the shift value. if encoding is false, subtract the shift value
          encode ? indexOfShift = letters.indexOf(letter) + shift : indexOfShift = letters.indexOf(letter) - shift;

        //if the new index reaches the end of the alphabet, wrap around to beginning
          if(indexOfShift >= 26){
            indexOfShift -= 26;
          } else if(indexOfShift <= -1){ //if the new index reaches past the beginning of the alphabet, wrap around to the end
            indexOfShift += 26;
          }

          resultString += letters[indexOfShift];
        }
      })
    }

    return resultString; //return the encoded or decoded string
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
