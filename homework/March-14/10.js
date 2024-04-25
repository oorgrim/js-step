let min = 0
let max = 100
let guess

console.log("Загадайте число от 0 до 100")

while (true) {
    guess = Math.floor((min + max) / 2);
    let answer = prompt(`Ваше число > ${guess}, < ${guess} или == ${guess}? (Введите '>', '<' или '=')`)

    if (answer === '>') {
        min = guess + 1
    }
    else if (answer === '<') {
        max = guess - 1
    }
    else if (answer === '=') {
        console.log(`Ваше число: ${guess}.`)
        break
    }
    else {
        console.log("ввведите корректно!")
    }
}