function secondsConv(seconds) {
    let hours = Math.floor(seconds / 3600)
    let remainingSeconds = seconds % 3600
    let minutes = Math.floor(remainingSeconds / 60)
    let remainingSeconds2 = remainingSeconds % 60

    return `${hours}:${minutes}:${remainingSeconds2}`
}
console.log(secondsConv(360))