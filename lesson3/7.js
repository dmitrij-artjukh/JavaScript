let myArr = []
//getDivisors(12); // [1, 2, 3, 4, 6, 12]
//getDivisors('Content'); // Error: parameter type is not a Number
//getDivisors(0); // Error: parameter can't be a 0

function getDivisors(a) {
    if (typeof a === "number") {
        if (a != 0) {
            if (a > 0) {
                for (b = 1; b <= a; b++) {
                    res = a % b
                    if (res === 0) {
                        myArr.push(b)
                    }
                } return myArr
            }
        } else throw new Error(": parameter can't be a 0'")
    } else throw new Error('parameter type is not a Number')
}
console.log(myArr)