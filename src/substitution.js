// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    //if the alphabet is not given, or if its length is not 26 characters, return false
    if(!alphabet || alphabet.length !== 26) return false;

    const americanAlphabet = "abcdefghijklmnopqrstuvwxyz"; //holds the american alphabet
    input = input.toLowerCase(); //ignore any capitilization

    let result = "";

    const verify = []; //will hold given alphabet, and verify there are no duplicates
    for (let letters in alphabet){
      verify.push(alphabet[letters]);
    }
    //if there are duplicate values in the verify array, return false
    let duplicate = verify.some((letter, verified) => verify.indexOf(letter) !== verified);

    if(duplicate) return false;

    for(let characters in input){
      const character = input[characters];
      const fakeCode = alphabet.indexOf(character);
      const real = americanAlphabet.indexOf(character);

      if(alphabet.indexOf(character) === -1){ //if the character is anything but a letter, 
        //push it to the result, and continue
        result += character;
        continue;
      }
      //if being encoded, convert americanAlphabet to fakeCode, otherwise vice versa
      result += encode ? alphabet[real] : americanAlphabet[fakeCode];
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
