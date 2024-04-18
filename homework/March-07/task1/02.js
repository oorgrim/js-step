var num = prompt("введите трехзначное число:")
var digit1 = num[0]
var digit2 = num[1]
var digit3 = num[2]

if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
    console.log("в числе есть одинаковые цифры")
}
else {
    console.log("в числе нет одинаковых цифр")
}
