let n = 1000
let num = 0
while (true) {
    if ((n / 2) > 50) {
        n = n / 2
        num++
    }
    else break
}

console.log('Результат: ', n)
console.log('Всего итареций: ', num)
