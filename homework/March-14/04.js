let number = +prompt("Введите число:")
let count = 0

while (number !== 0) {
    count++
    number = Math.floor(number / 10)
}

console.log("Количество цифр в числе: " + count)