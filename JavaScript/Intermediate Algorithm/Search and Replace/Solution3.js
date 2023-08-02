function fixString(str, before, after) {
    // create a function that will change the casing of any number of letter in parameter "target" matching parameter "source"
    function applyCasing(source, target) {
        // split the source and targer string to array of letters
        let targerArr = target.split("");
        let sourceArr = source.split("");

        // iterate through all the items of souceArr and targetArr arr arrays till loop hits the end of shortest array
        for (let i = 0; i < Math.min(targerArr.length, sourceArr.length); i++) {
            // find out the casing of every letter from sourceArr using regular expression
            // if sourceArr[i] is upper case then convert targerArr[i] to upper case
            if (/[A-Z]/.test(sourceArr[i])) {
                targerArr[i] = targerArr[i].toUpperCase();
            } else {
                // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
                targerArr[i] = targerArr[i].toLowerCase();
            }
        }
        // join modified targetArr to string and return
        return targerArr.join("");
    }
    // replace "before" with "after" with "before" -casing
    return str.replace(before, applyCasing(before, after));
}

// Test case
console.log(fixString("Let us go to the store", "store", "mall")); // Output: Let us go to the mall.
console.log(fixString("He is Sleeping on the couch", "Sleeping", "sitting")); // Output: He is Sitting on the couch.
console.log(fixString("I think we should look up there", "up", "Down")); // Output: I think we should look down there.
console.log(fixString("This has a spellngi error", "spellngi", "spelling")); // Output: This has a spelling error.
console.log(fixString("His name is Tom", "Tom", "john")); // Output: His name is John.
console.log(fixString("Let us get back to more Coding", "Coding", "algorithms")); // Output: Let us get back to more Algorithms.