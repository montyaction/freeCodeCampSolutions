function fearNotLetter(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let startIndex  = alphabet.indexOf(str[0]);
  
    for (let i = 0; i < str.length; i++) {
  
      if (str[i] !== alphabet[startIndex]) {
        return alphabet[startIndex]
      }
      startIndex++;
    }
    return undefined;
}
  
  console.log(fearNotLetter("stvwx"));