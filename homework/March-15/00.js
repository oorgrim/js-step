
function getNums(num1, num2) {
    if (num1 < num2) {
        console.log(-1)
    }
    else if (num1 > num2) {
        console.log(1)
    }
    else if (num1 = num2) {
        console.log(0)
    }
}

getNums(+prompt('Введите первое число: '), +prompt('Введите второе число:'))