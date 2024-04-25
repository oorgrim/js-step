let number = prompt("Введите число:")
let shift = parseInt(prompt("На сколько цифр его сдвинуть?"))
let shiftedNumber = ""

if (shift < 0) {
    shift = number.length - Math.abs(shift) % number.length
}

for (let i = 0; i < number.length; i++) {
    let newIndex = (i + shift) % number.length
    shiftedNumber += number[newIndex]
}

console.log("Результат сдвига: " + shiftedNumber)