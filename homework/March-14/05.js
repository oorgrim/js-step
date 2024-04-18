let countPositive = 0
let countNegative = 0
let countNull = 0 //это нули, я просто не подумала про null
let countEven = 0
let countOdd = 0
let userInput
let i = 0

while (i < 10) {
    userInput = parseInt(prompt("Введите число:"))
    
    if (userInput > 0) {
        countPositive++
    }
    else if (userInput < 0) {
        countNegative++
    }
    else {
        countNull++
    }

    if (userInput % 2 === 0) {
        countEven++
    }
    else {
        countOdd++
    }

    i++
}

console.log(`Положительных чисел: ${countPositive}`)
console.log(`Отрицательных чисел: ${countNegative}`)
console.log(`Нулей: ${countNull}`)
console.log(`Четных чисел: ${countEven}`)
console.log(`Нечетных чисел: ${countOdd}`)
