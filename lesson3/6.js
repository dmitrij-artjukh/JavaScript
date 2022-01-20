// isEven(3); // false
// isEven(4); // true
// isEven('Content'); // Error: parameter type is not a Number
function isEven(a) {
    if (typeof a === 'number') {
        return res = (a % 2 == 0) ? true : false
    } else throw new Error('parameter type is not a Number')
}

console.log(isEven(3))
