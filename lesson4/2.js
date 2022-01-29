// ####Задача 2

// Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// ```javascript
// const arr = [1,2,3];
// filter(arr, function(item, i, arr) {});
// ```



const arr = [1,2,3];
let results=[]
let i;

function filter(arr, callback) {
       if (typeof(callback)=='function'){
             if (Array.isArray(arr)){
                 for (i = 0; i < arr.length; i = i + 1) {
                    if (callback( arr[i], i, arr)) {
                      results.push(arr[i]);
                    }
                  }
                  return results;
                 
            } else throw new Error("parameter type should be an array")
        }else throw new Error ("parameter type should be an function")
      };


      const data = filter(arr, function(item, i, arr) {
        return item>1;
      });
console.log(data);