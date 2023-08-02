function fixString(str, before, after) {
    // Find index where before is an string
    let index  = str.indexOf(before);

    // Check to see if the first letter is uppercase or not
    if (str[index] === str[index].toUpperCase()) {
        // Change the after word to be capitalized before we use it.
        after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
        // Change the after word to be uncapitalized acroding to be before we use it.
        after = after.charAt(0).toLowerCase() + after.slice(1);
    }

    return str.replace(before, after);
}
// Test case
console.log(fixString("Let us go to the store", "store", "mall")); // Output: Let us go to the mall.
console.log(fixString("He is Sleeping on the couch", "Sleeping", "sitting")); // Output: He is Sitting on the couch.
console.log(fixString("I think we should look up there", "up", "Down")); // Output: I think we should look down there.
console.log(fixString("This has a spellngi error", "spellngi", "spelling")); // Output: This has a spelling error.
console.log(fixString("His name is Tom", "Tom", "john")); // Output: His name is John.
console.log(fixString("Let us get back to more Coding", "Coding", "algorithms")); // Output: Let us get back to more Algorithms.