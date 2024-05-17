function* square_gen(nums) {
    for (let num of nums) {
        yield num**2
    }
}
function sum_of_squares(numbers) {
    let sum = 0
    for (let square of square_gen(numbers)) {
        sum+=square
    }
    return sum
}
let numbers = [1, 2, 3, 4, 5]
let res = sum_of_squares(numbers)
console.log(res)