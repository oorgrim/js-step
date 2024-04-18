let number = prompt("Введите пятизначное число:")

let digit1 = number[0]
let digit2 = number[1]
let digit3 = number[3]
let digit4 = number[4]

if (digit1 === digit4 && digit2 === digit3) {
    console.log(`число ${number} это палиндромо`);
}
else {
    console.log(`число ${number} не является палиндромом`);
}