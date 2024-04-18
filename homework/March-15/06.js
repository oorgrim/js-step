function getTime(hours, minutes, seconds) {
    if (minutes === undefined) {
        minutes = '00'
    }
    else if (minutes < 10) {
        minutes = '0' + minutes
    }

    if (seconds === undefined) {
        seconds = '00'
    }
    else if (seconds < 10) {
        seconds = '0' + seconds
    }

    if (hours < 10) {
        hours = '0' + hours
    }

    return hours + ':' + minutes + ':' + seconds
}

console.log(getTime(12, 45, 55))
console.log(getTime(17))
console.log(getTime(13, 57))