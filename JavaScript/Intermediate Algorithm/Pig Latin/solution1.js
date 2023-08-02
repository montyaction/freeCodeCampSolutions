function translatePigLatin(str) {
    // Create variables to be used
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    // Check if the string starts with a vowel
    if (vowels.includes(str[0])) {
        return str + 'way';
    } else {
        // Find the index of the first vowel (if any)
        let firstVowelIndex = - 1;
        for (let i = 0; i < str.length; i++) {
            if (vowels.includes(str[i])) {
                firstVowelIndex = i;
                break;
            }
        }
        // If there's no vowel in the word, move all consonants to the end
        if (firstVowelIndex === -1) {
            return str + 'ay';
        }

        // Move consonants before the first vowel to the end and add 'ay'
        return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + 'ay';
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