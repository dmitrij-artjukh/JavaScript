// ###Задача 9

// Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями. 
//Первым параметром функция принимает значение, которым заполнять массив, 
//а вторым — сколько элементов должно быть в массиве.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только число, строку, объект, массив
// - Второй параметр обязателен и может принимать только число
arr=[]
//let a,b=
// ```javascript
 arrayFill('x',5); // [x,x,x,x,x]
// ```
function arrayFill(a, b){
arr=new Array(b)
arr.fill('x')
console.log(arr)
}