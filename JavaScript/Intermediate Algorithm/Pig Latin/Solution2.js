function translatePigLatin(str) {
    // Create variable to be used
    // let pigLatin = "";
    let regex = /[aeiou]/gi;

    // Check if the first character is a vowel
    if (str[0].match(regex)) {
        return str + "way";
    } else if (str.match(regex) === null) {
        // Check if the string contains only consonants
        return str + "ay";
    } else {
        // Find how many consonants before the first vowel.
        let vowelIndice = str.indexOf(str.match(regex)[0]);

        // Take the string from the first vowel to the last char
        // then add the consonants that were previously omitted and add the ending.
        return str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
    }
}

// Test cases
console.log(translatePigLatin("california")); // Output: aliforniacay.
console.log(translatePigLatin("paragraphs")); // Output: aragraphspay.
console.log(translatePigLatin("glove")); // Output: oveglay.
console.log(translatePigLatin("algorithm")); // Output: algorithmway.
console.log(translatePigLatin("eight")); // Output: eightway.
console.log(translatePigLatin("schwartz")); // Output: artzschway.
console.log(translatePigLatin("rhythm")); // Output: rhythmay