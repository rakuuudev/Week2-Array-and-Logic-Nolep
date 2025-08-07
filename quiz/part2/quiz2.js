function angkaPalindrome(num) {
   for (let i = num + 1; ; i++) {
      let str = i.toString();
      let reversedNum = str.split('').reverse().join('');
      if (str === reversedNum) {
         return i;
      }
   }
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001