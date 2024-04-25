var day = parseInt(prompt("введите день:"))
var month = parseInt(prompt("введите месяц числом:"))
var year = parseInt(prompt("введите год:"))

var is_visokosn = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)

var days_in_month

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10:
        days_in_month = 31
        break
    case 4: case 6: case 9: case 11:
        days_in_month = 30
        break
    case 2:
        days_in_month = is_visokosn ? 29 : 28
        break
    default:
        days_in_month = -1 // неверн 
}

if (day < 1 || day > days_in_month || month < 1 || month > 12 || isNaN(day) || isNaN(month) || isNaN(year)) {
    console.log("неккортектная дата!")
}
else {
    day++  
    if (day > days_in_month) {
        day = 1
        month++
        if (month > 12) {
            month = 1
            year++
        }
        is_visokosn = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
        switch (month) {
            case 1: case 3: case 5: case 7: case 8: case 10:
                days_in_month = 31
                break
            case 4: case 6: case 9: case 11:
                days_in_month = 30
                break
            case 2:
                days_in_month = is_visokosn ? 29 : 28;
                break
            default:
                days_in_month = -1 // неверно
        }
    }

    console.log(`cледующая дата: ${day}.${month}.${year}`)
}