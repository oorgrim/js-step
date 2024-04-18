function convToSeconds(hours, minutes, seconds) {
    minutes = minutes || 0 // если нет, установить 0 
    seconds = seconds || 0

    let total = hours* 3600 + minutes * 60 + seconds
    return total
}

console.log(convToSeconds(2,57, 10))
console.log(convToSeconds(0, 17))
console.log(convToSeconds(10))