function fixString(str, before, after) {
    // Check if first character of argument "before" is a capital or
    // lowercase letter and change the first character of argument "after" to match the case
    if (/^[A-Z]/.test(before)) {
        after = after[0].toUpperCase() + after.substring(1)
    } else {
        after = after[0].toLowerCase() + after.substring(1)
    }

    // return string with argument "before" replaced by argument "after" (with correct case)
    return str.replace(before, after);
}

// Test case
console.log(fixString("Let us go to the store", "store", "mall")); // Output: Let us go to the mall.
console.log(fixString("He is Sleeping on the couch", "Sleeping", "sitting")); // Output: He is Sitting on the couch.
console.log(fixString("I think we should look up there", "up", "Down")); // Output: I think we should look down there.
console.log(fixString("This has a spellngi error", "spellngi", "spelling")); // Output: This has a spelling error.
console.log(fixString("His name is Tom", "Tom", "john")); // Output: His name is John.
console.log(fixString("Let us get back to more Coding", "Coding", "algorithms")); // Output: Let us get back to more Algorithms.