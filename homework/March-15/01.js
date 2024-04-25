function getFactorial(n) {
    if (n === 0|| n=== 1) {
        return 1
    }
    else {
        return n * getFactorial(n-1)
    }
}
    
console.log(getFactorial(+prompt('введите число:')))