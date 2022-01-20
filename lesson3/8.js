let i = 0

f([1, 2, 3]);
// 1
// 2
// 3
//f(1, 2, 3) // Error: parameter type should be an array
//f('Content') // Error: parameter type should be an array
//f([]) // Error: parameter can't be an empty

function f(tmp) {
    if (Array.isArray(tmp) == true) {

        if (i < 3) {
            if (tmp.length !== 0) {
                rem = tmp.splice(0, 1)
                console.log(rem)
                i++
                f(tmp)
            } else throw new Error("parameter can't be an empty")
        }

    } else throw new Error("Error: parameter type should be an array")

}
