function timeDiff(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
    const totalSeconds1 = convToSeconds(hours1, minutes1, seconds1)
    const totalSeconds2 = convToSeconds(hours2, minutes2, seconds2)

    let diffSeconds = Math.abs(totalSeconds1 - totalSeconds2)

    const hours = Math.floor(diffSeconds / 3600)
    const minutes = Math.floor((diffSeconds % 3600) / 60)
    const seconds = diffSeconds%60

    const formattedH = hours < 10 ? '0' + hours : hours
    const formattedMin = minutes < 10 ? '0' + minutes : minutes
    const formattedSec = seconds < 10 ? '0' + seconds : seconds

    return `${formattedH}:${formattedMin}:${formattedSec}`
}

function convToSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds
}
console.log(timeDiff(13, 40, 25, 10, 15, 30))