function fearNotLetter(str) {
    let currCharCode = str.charCodeAt(0);
    let missing =undefined;

    str.split('').forEach(letter => {
        if (letter.charCodeAt(0) === currCharCode) {
            currCharCode++;
        } else {
            missing = String.fromCharCode(currCharCode);
        }
    });

    return missing;
}
  
  // test here
console.log(fearNotLetter("abce"));