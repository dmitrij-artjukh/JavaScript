// ####Задача 3

// Создать имплементацию функции `every`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// ```javascript
// const arr = [1,-2,3];
 
//every(arr, function(item, i, arr) {});

const arr = [1,-2,3];
function every(arr, callback) {
    if (typeof(callback)=='function'){
          if (Array.isArray(arr)){
             for (i = 0; i < arr.length; i ++) {
                       if (!callback(arr[i],i,arr)){
                           return false;
         }  
       }
       return true
         } else throw new Error("parameter type should be an array")
     }else throw new Error ("parameter type should be an function")
   };


   const data = every(arr, function(item, i, arr) {
     return item >0   });
console.log(data);
           