let number = prompt("введите трехзначное число:");

    let digit1 = Math.floor(number / 100)
    let digit2 = Math.floor((number % 100) / 10)
    let digit3 = number % 10
    let reversedNumber = digit3 * 100 + digit2 * 10 + digit1 
    console.log("число наоборот:", reversedNumber)