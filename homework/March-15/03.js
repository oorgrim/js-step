function calc(height, width) {
    if (width === undefined) { // если нету
        return height * height
    } else {
        return height * width
    }
}

console.log(calc(7))
console.log(calc(4, 11))
