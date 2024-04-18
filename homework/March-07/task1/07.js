let length = +prompt("Введите длину окружности:")
let p = +prompt("Введите периметр квадрата:")

let radius = length / (2 * Math.PI)

let side = p / 4

if (2 * radius <= side) {
    console.log("может поместиться в  квадрат")
}
else {
    console.log("не может поместиться в  квадрат")
}