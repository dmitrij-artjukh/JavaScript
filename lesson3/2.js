let sum = 0
f(1, 2, 3); // 6
//f(1, 1, 1, 1, 1, 1, 1, 1); // 8
//f(1, 2, 's', 4); // Error: all parameters type should be a Number

function f() {
    for (i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            sum += arguments[i]
        } else throw new Error('Error: all parameters type should be a Number')
    }
}
console.log(sum)
