// ####Задача 7

// Код ниже получает из массива строк новый массив, содержащий их длины:

// ```javascript
var arr = ['abcd', 'abcde', 'ab', 'abc'];

var arrLength = [];
for (var i = 0; i < arr.length; i++) {
arrLength[i] = arr[i].length;
}

console.log( arrLength ); // 4,5,2,3
// ```
