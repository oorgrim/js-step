let num1 = +prompt("Введите первое число:")
let num2 = +prompt("Введите второе число:")
let a

for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        a = i
    }
}
console.log(`НОД равен ${a}`)