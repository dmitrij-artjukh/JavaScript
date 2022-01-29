// ####Задача 1

// Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// ```javascript
// const arr = [1,2,3];
//forEach(arr, function(item, i, arr) {});
const arr = [1,2,3];
let i,item=0;

function foreach(arr, callback) {
       if (typeof(callback)=='function'){
             if (Array.isArray(arr)){
                for (i = 0; i < arr.length; i ++) {
                     callback(arr[i], i, arr);
                  }
            } else throw new Error("parameter type should be an array")
        }else throw new Error ("parameter type should be an function")
      };

foreach(arr, function(item, i, arr) {
  console.log( item , i ,  arr)
 });