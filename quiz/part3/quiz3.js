function tentukanDeretAritmatika(arr) {
    let arithmetic = [];
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 1) {
            arithmetic.push(arr[i + 1] - arr[i]);   
        }
    }
    return arithmetic.every((value, index, array) => {
        return value === array[0];
    });
}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false


