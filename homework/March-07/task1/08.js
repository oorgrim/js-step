let score = 0

let question1 = prompt("2 + 2 * 2? \nA. 8 \nB. 6 \nC. 10").toUpperCase()
let question2 = prompt("Назовите столицу Казахстана\nA. Астана\nB. Алматы\nC. Шымкент").toUpperCase()
let question3 = prompt("Ca это... \nA. Стронций\nB. Калий\nC. Кальций").toUpperCase()

if (question1 === "B") {
    score += 2
}
if (question2 === "A") {
    score += 2
}
if (question3 === "C") {
    score += 2
}

console.log("Вы набрали " + score + " баллов")