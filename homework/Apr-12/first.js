function removeNums(input) {
    let inputValue = input.value

    let value = ''
    for (let i = 0; i < inputValue.length; i++) {
        if (isNaN(parseInt(inputValue[i]))) { // добавить если не цифра
            value += inputValue[i]
        }
    }
    input.value = value
}