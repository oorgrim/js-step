let shouldContinue

do {
    let num1 = parseFloat(prompt("Введите первое число:"))
    let num2 = parseFloat(prompt("Введите второе число:"))
    let operator = prompt("Введите оператор (+, -, *, /):")
    let result

    switch (operator) {
        case "+":
            result = num1 + num2
            break
        case "-":
            result = num1 - num2
            break
        case "*":
            result = num1 * num2
            break
        case "/":
            result = num1 / num2
            break
        default:
            console.log("ошибка")
            continue
    }

    console.log(`Результат:  ${result}`);
    shouldContinue = confirm("Хотите  еще один пример?")
} while (shouldContinue)
