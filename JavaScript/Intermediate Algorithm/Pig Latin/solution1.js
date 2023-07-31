function translatePigLatin(str) {
    // Create variables to be used
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    // Check if the string starts with a vowel
    if (vowels.includes(str[0])) {
        return str + 'way';
    } else {
        // Iterate the string for checking the first vowel
        for (let i = 0; i < str.length; i++) {
            // Check if the character is a vowel
            if (vowels.includes(str[i])) {
                // Move consonants to the end and add 'ay
                return str.slice(i) + str.slice(0, i) + 'ay';
            }
        }
        // If no vowel found, add 'ay' at the end
        return str + 'ay';
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