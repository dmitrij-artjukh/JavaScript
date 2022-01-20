console.log(f(2))//8
f('Content')
function f(a) {
    if (typeof a === 'number') {
        return Math.pow(a, 3);
    } else throw new Error('Error:parameter type is not a Number');
}