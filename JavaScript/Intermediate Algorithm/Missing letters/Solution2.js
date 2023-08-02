function fearNotLetter(str) {
   if (str.length === 0) return undefined;

   const startIndex = str.charCodeAt(0) - 'a'.charCodeAt(0);
   console.log(startIndex);
  }
  
  
  console.log(fearNotLetter("abce"));