let purchase = parseFloat(prompt("введите сумму покупки:"))

let discount = 0

if (purchase >= 200 && purchase < 300) {
    discount = 0.03
} else if (purchase >= 300 && purchase < 500) {
    discount = 0.05
} else if (purchase >= 500) {
    discount = 0.07
}

let discountt = purchase * discount
let total = purchase - discountt

total = Math.round(total * 100) / 100

console.log("сумма к оплате со скидкой: " + total)
