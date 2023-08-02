function pairElement(str) {
    const pairs = [];
    for (let i = 0; i < str.length; i++) {
        const base = str[i];
        const pair = base === 'A' ? 'T' : base === 'T' ? 'A' : base === 'C' ? 'G' : 'C';
        pairs.push([base, pair]);
    }
    return pairs;
}

console.log(pairElement('GCG'));
console.log(pairElement('ATCGA'));
console.log(pairElement('TTGAG'));
console.log(pairElement('CTCTA'));