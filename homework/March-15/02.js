function getIntoOne(num1, num2, num3) {
    let num1_conv = String(num1)
    let num2_conv = String(num2)
    let num3_conv = String(num3)
    let result = num1_conv + num2_conv + num3_conv
    return result
}

let number1 = +prompt('Введите первое число:')
let number2 = +prompt('Введите второе число:')
let number3 = +prompt('Введите третье число:')

console.log(getIntoOne(number1, number2, number3))