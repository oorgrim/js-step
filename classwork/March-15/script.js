// function showMessage(num1, num2){
//     let sum = num1 + num2;
//     console.log(`сумма всех чисел равна ${sum}`)
// }

// showMessage(+prompt(''), 10)
// showMessage(17, 10)
// showMessage(true, true)

// function showMessage(num1=1, num2=2){
//     let sum = num1 + num2;
//     console.log(`сумма всех чисел равна ${sum}`)
// }

// showMessage()

// let showMessage2 = function(){
//     console.log('hello world')
// }
// showMessage2()

// let showMessage3 = () => console.log('hello')
// showMessage()



// function sum(num1, nm2) {
//     num1=+prompt('введите 1 число')
//     num2=+prompt('введите 2 число')
//     let sum = num1 + num2;
//     console.log(`сумма всех чисел равна ${sum}`)
// }
// sum()


// function calcSum(num1, num2, more, less) {
//     let sum = num1 + num2
//     if (sum >= 10) {
//         more()
//     }
//     else {
//         less()
//     }
// }

// function showMore(){
//     console.log('число больше 10')
// }


// function showLess(){
//     console.log('число меньше 10')
// }

// calcSum(11  , 9, showLess, showLess)

// function showMessage(num1, num2) {
//     let sum  = num1 + num2
//     return sum
// }

// ket 

// function calcSum(num1, num2) {
//     let sum = 1;
//     for(let i = 0; i < num2; i++) {
//         sum = sum * num1
//     }
//     return sum
// }
// console.log(calcSum(5, 7))


// 1

// function get_min() {
//     num1 = +prompt('введите 1 число')
//     num2 = +prompt('введите 2 число')
//     min = Math.min(num1, num2)
//     console.log(min)
// }
// get_min()

// 2

// function get_sub() {
//     num = +prompt('введите  число')
//     sup = +prompt('введите  степень')
//     result = num ** sup
//     console.log(result)
// }
// get_sub()


// 3

// function calc(num1, num2, sign) {
//     switch(sign) {
//         case '+':
//             return num1 + num2
//             break
            
//         case '-':
//             return num1 - num2
//             break
            
//         case '*':
//             return num1 * num2
//             break
            
//         case '/':
//             return num1 / num2
//             break
//         default:
//             return 'айошка матрешка'
//     }
// }
// calc(1, 3, '+')

// 4

// function simple(num) {
// //     for (let i = 1; i <= 100; i++) {
// //     if (i % num == 0) {
// //         console.log(i)
// //     }
// // }
// }
// simple(7)

// 5

// function table(num) {
//     for (let i = 1; i <= 10; i++) {
//         let result = num * i;
//         console.log(`${num} * ${i} = ${result}`);
//     }
// }

// table(7);

// 6

function percent(num1, num2) {
    if (num1/num2 == 0)
    res = num1 % num2
    console.log(res)
}
percent(1, 2)

// 7