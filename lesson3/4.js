let res = ''
f(1); // Воскресенье
//f(2); // Понедельник
//f(8); // Error: parameter should be in the range of 1 to 7
//f('1'); // Error: parameter type is not a Number
function f(i) {
    if (typeof i === "number") {
        switch (i) {
            case 1:
                res = 'Воскресенье'
                break
            case 2:
                res = 'Понедельник'
                break
            case 3:
                res = 'Вторник'
                break
            case 4:
                res = 'Среда'
                break
            case 5:
                res = 'Четверг'
                break
            case 6:
                res = 'Пятница'
                break
            case 7:
                res = 'Суббота'
                break
            default:
                throw new ('Error: parameter should be in the range of 1 to 7')
                break
        }
    } else throw new ('Error: parameter type is not a Number')

    return console.log(res)
}