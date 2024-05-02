let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function isEven(number) {
    return number % 2 === 0
}

let evenNums = arr1.filter(isEven)

console.log(`Массив из четных чисел: ${evenNums}`)