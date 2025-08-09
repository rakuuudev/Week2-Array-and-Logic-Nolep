function pasanganTerbesar(num) {
    let str = num.toString();
    let numBig = 0;
    
    for (let i = 0; i < str.length - 1; i++) {
        let largestNum = parseInt(str[i] * 1 + str[i+1]);
        
        if (largestNum > numBig) {
            numBig = largestNum;
        }
    }
    
    return numBig;
}
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99


