// ####Задача 5

// Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
// - Третий параметр обязателен и может принимать только строку или число

// ```javascript
// const arr = [1,2,3];
/// const acc = 0;
// reduce(arr, function(acc, item, i, arr) {}, acc);
const arr = [1,2,3];
const acc = 0;
let results=acc
let i;

function reduce(arr, callback) {
   
       if (typeof(callback)=='function'){
             if (Array.isArray(arr)){
                for (i = 0; i < arr.length; i ++) {
                   callback( arr[i], i, arr) 
                  }
                  return results;
                
            } else throw new Error("not a array")
        }else throw new Error ("not a function")
      };


      const data = reduce(arr, function(item, i, arr,) {
        return results=results+item;
      },acc);
console.log(data);