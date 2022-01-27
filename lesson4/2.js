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
const arr1=[]
let i,item=0;

function filter(arr, callback) {
       if (typeof(callback)=='function'){
             if (Array.isArray(arr)){
                for (i = 0; i < arr.length; i ++) {
                     callback(arr[i], i, arr);
                  }
            } else throw new Error("not a array")
        }else throw new Error ("not a function")
      };

filter(arr, function(item, i, arr) {
        if (item>1){
          arr1.push(item)
        return arr1}
      }
);
console.log(arr1)
