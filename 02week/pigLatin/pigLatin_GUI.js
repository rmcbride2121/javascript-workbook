'use strict';

function pigLatin() {
    let newWord = document.getElementById('input').value;
    newWord = newWord.trim().toLowerCase();
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize vowel index to 0
    let vowelIndex = 0;
    let finish;

    if (vowels.includes(newWord[0])) {
            // If first letter is a vowel
            finish = newWord + "yay";
          } else {
            // If the first letter isn't a vowel i.e is a consonant
            for (let char of newWord) {
              // Loop through until the first vowel is found
              if (vowels.includes(char)) {
                // Store the index at which the first vowel exists
                vowelIndex = newWord.indexOf(char);
                break;
              }
            }
            // Compose final string
            finish = newWord.slice(vowelIndex) + newWord.slice(0, vowelIndex) + "ay";
          }
    document.getElementById('text').innerHTML = finish;
}



  
