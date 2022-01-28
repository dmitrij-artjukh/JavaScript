// ####Задача 3

// Создать имплементацию функции `every`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию

// ```javascript
 const arr = [1,2,3];
 let l=0;
// every(arr, function(item, i, arr) {});
// ```
// const every =  function (arr, callback) {
//     if (typeof(callback)=='function'){
//           if (Array.isArray(arr)){
//              for (i = 0; i < arr.length; i ++) {
//               callback(arr[i], i, arr);
//               if (arr[i]<0){
//                  return false
//                } 
//               }                   
//               return true     
//            } else throw new Error("not a array")
//      }else throw new Error ("not a function")
//    };

//  console.log (every(arr, function(item, i, arr) {
   
//   }));
 
function every(arr, callback){
  if (typeof(callback)=='function'){
               if (Array.isArray(arr)){
                  for (i = 0; i < arr.length; i ++) {
                       if (callback(arr[i], i, arr)){return true}   
                  }     
                } else throw new Error("not a array")
          }else throw new Error ("not a function")
         return false
        };
     
console.log (every(arr, function(item, i, arr) {
                 item<0
             }));
           