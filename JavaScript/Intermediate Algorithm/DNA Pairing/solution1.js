function pairElement(str) {
    let arr = [];

    for (let i = 0; i < str.length; i++) {
      let base = '';

      if (str[i] === 'A') {
        base = 'T';
      } else if (str[i] === 'T') {
        base = 'A';
      } else if (str[i] === 'C') {
        base = 'G';
      } else {
        base = 'C';
      }

      arr.push([str[i], base]);
    }
    return arr;
  }
  
  console.log(pairElement("ATCGA"));