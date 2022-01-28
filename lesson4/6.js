// ####Задача 6

// Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
// - Третий параметр обязателен и может принимать только строку или число

// ```javascript
 const arr = [1,2,3,'w'];
 const acc = 0;
 let arr1=[]
 let results=acc
// reduceRight(arr, function(acc, item, i, arr) {}, acc);
// ```arr.length

function reduce(arr, callback) {
    
    if (typeof(callback)=='function'){
          if (Array.isArray(arr)){
            arr1=arr.reverse ()
            for (i = 0; i <arr1.length ; i++) {
              
                callback( arr1[i], i, arr1) 
               }
               return results;
             
         } else throw new Error("not a array")
     }else throw new Error ("not a function")
   };

   const data = reduce(arr, function(item, i, arr, acc) {
  
     return results=results+item;
   });
console.log(data); 
