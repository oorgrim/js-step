function calc() {
    let num1 = parseFloat(document.getElementById('num1').value)
    let num2 = parseFloat(document.getElementById('num2').value)
    let sign = document.getElementById('sign').value

    let res
    switch (sign) {
        case '+':
            res = num1 + num2
            break
        case '-':
            res = num1 - num2
            break
        case '*':
            res = num1 * num2
            break
        case '/':
            res = num1 / num2
            break
        default:
            res = "ошибка"
    }

    document.getElementById('result').textContent = `Результат: ${res}`
}