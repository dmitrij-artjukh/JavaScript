let res = 0
f(9, 3, 2); // 3
//f('s', 9, 3) // Error: all parameters type should be a Number
function f(...tmp) {
    for (i = 0; i < 3; i++) {
        if (typeof tmp[i] === 'number') {
            res = ((tmp[0] - tmp[1]) / tmp[2]);
        } else throw new Error('// Error: all parameters type should be a Number')
    }
    return console.log(res)
}
