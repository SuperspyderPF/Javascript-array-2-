const numbers = [1,3,5,76,33]
const sum = numbers.reduce((accumulator, currentValue)=> {
    return accumulator + currentValue
}, 0)
alert(sum)