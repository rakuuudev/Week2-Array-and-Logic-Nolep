function palindrome (kata) {
    let reversePalindrom = kata.split('').reverse().join('');
    for (let i = 0; i < kata.length; i++) {
        if (kata === reversePalindrom) {
            return true;
        } else {
            return false;
        }
        
    }
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false