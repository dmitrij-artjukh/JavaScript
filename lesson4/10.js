// ####Задача 10

// Создать имплементацию функции `reverse`,
// которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.

// Функция должна содержать проверки:

// - Первый параметр обязателен и может принимать только массив
// - Генерировать ошибку если был передан пустой массив

// ```javascript
 const arr = [3,2,1];
 //const arr=[]
 const arr1=[]
 reverse(arr); // [1,2,3]
// ```
function reverse(arr){
            if (Array.isArray(arr)){
                if (arr.length !== 0) {
                     l=arr.length
                    for (i=0;i<arr.length;i++)
                    {l--
                        for (n=0;n<arr.length;n++){
                         arr1[i]=arr[l]
                        }
                    }
                } else throw new Error("parameter can't be an empty")         
            return console.log (arr1)
            } else throw new Error ('parameter type should be an array')
}
