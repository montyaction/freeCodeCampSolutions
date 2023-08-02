function translatePigLatin(str) {
    return str
      .replace(/^[aeiou]\w*/, "$&way")
      .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
  }
  
// Test cases
console.log(translatePigLatin("california")); // Output: aliforniacay.
console.log(translatePigLatin("paragraphs")); // Output: aragraphspay.
console.log(translatePigLatin("glove")); // Output: oveglay.
console.log(translatePigLatin("algorithm")); // Output: algorithmway.
console.log(translatePigLatin("eight")); // Output: eightway.
console.log(translatePigLatin("schwartz")); // Output: artzschway.
console.log(translatePigLatin("rhythm")); // Output: rhythmay