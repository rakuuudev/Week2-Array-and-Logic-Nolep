function tentukanDeretGeometri(arr) {
 let geometry = [];
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 1) {
            geometry.push(arr[i + 1] / arr[i]); 
        }
    }
    return geometry.every((value, index, array) => {
        return value === array[0];
    });
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false

//FUNCTION tentukanDeretGeometri(arr) 
//variabel dengan array kosong
//for i = 0 terus dan  i lebih kecil dari panjang array
//kemudian i akan selalu bertambah sesuai panjang array tsb
//jika i lebih kecil dari panjang array dikurang 1
//maka variabel geometry menerima nilai hasil deret 