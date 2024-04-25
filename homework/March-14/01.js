let start = +prompt("Введите начало диапазона:")
let end = +prompt("Введите конец диапазона:")
let sum = 0

for (let i = start; i <= end; i++) {
    sum += i
}

console.log(`Сумма чисел от ${start} до ${end} равна ${sum}`)