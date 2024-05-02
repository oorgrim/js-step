let nums = []

for (let i = 0; i < 5; i++) {
    let input = prompt("Введите число:")
    let number = parseFloat(input)
    nums.push(number)
}
console.log("массив: " + nums)
let sum = nums.reduce((total, num) => total + num, 0)
let average = sum/nums.length

console.log(`Сумма значений: ${sum}`)
console.log(`Среднее значение: ${average}`)