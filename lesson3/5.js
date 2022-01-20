const oldArr = [1, 2, -4, 3, -9, -1, 7]
let newArr = []
function isPositive(i) {
    if (typeof i === 'number') {
        return (i > 0) ? true : false
    } else throw new ('Error: parameter type is not a Number')
}

for (i of oldArr) {
    if (isPositive(i) === true) {
        newArr.push(i)
    }
}
console.log(newArr)