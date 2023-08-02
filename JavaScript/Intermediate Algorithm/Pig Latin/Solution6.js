function translatePigLatin(str, charPos = 0) {
    return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
      ? str + (charPos === 0 ? 'way' : 'ay')
      : charPos === str.length
        ? str + 'ay'
        : translatePigLatin(str.slice(1) + str[0], charPos + 1);
  }

  // Test cases
console.log(translatePigLatin("california")); // Output: aliforniacay.
console.log(translatePigLatin("paragraphs")); // Output: aragraphspay.
console.log(translatePigLatin("glove")); // Output: oveglay.
console.log(translatePigLatin("algorithm")); // Output: algorithmway.
console.log(translatePigLatin("eight")); // Output: eightway.
console.log(translatePigLatin("schwartz")); // Output: artzschway.
console.log(translatePigLatin("rhythm")); // Output: rhythmay