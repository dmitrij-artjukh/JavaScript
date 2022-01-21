let myArr = []
getDivisors(12); // [1, 2, 3, 4, 6, 12]
//getDivisors('Content'); // Error: parameter type is not a Number
//getDivisors(0); // Error: parameter can't be a 0

function isPositive(i) {
    if (typeof i === 'number') {
        if (i != 0) {
            return (i > 0) ? true : false
        } else throw new Error("parameter can't be a 0")
    } else throw new ('Error: parameter type is not a Number')
}


function getDivisors(a) {
    if (isPositive(a)) {
        for (b = 1; b <= a; b++) {
            res = a % b
            if (res === 0) {
                myArr.push(b)
            }
        }
        return myArr
    }
}

console.log(myArr)