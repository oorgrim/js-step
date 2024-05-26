function create_time(hours, minutes, seconds) {
    return { hours, minutes, seconds }
}

function print_time(time) {
    let hours = String(time.hours).padStart(2, '0') // падстарт для дополнения стрки с начала
    let minutes = String(time.minutes).padStart(2, '0')
    let seconds = String(time.seconds).padStart(2, '0')
    console.log(`${hours}:${minutes}:${seconds}`) //  отформатировала
}

function add_seconds(time, seconds) {
    time.seconds+=seconds
    while (time.seconds >= 60) {
        time.seconds-=60
        time.minutes+=1
    }
    while (time.seconds<0) {
        time.seconds += 60
        time.minutes -= 1
    }
    add_minutes(time, 0) // обновила
}

function add_minutes(time,minutes) {
    time.minutes += minutes
    while (time.minutes >= 60) {
        time.minutes -= 60
        time.hours += 1
    }
    while (time.minutes<0) {
        time.minutes += 60
        time.hours -= 1
    }
    add_hours(time, 0) 
}

function add_hours(time, hours) {
    time.hours += hours
    while (time.hours >= 24) {
        time.hours -= 24
    }
    while (time.hours < 0) {
        time.hours += 24
    }
}

const time = create_time(20, 30, 45)
print_time(time)

add_seconds(time, 30)
print_time(time)

add_minutes(time, 60)
print_time(time)

add_hours(time, 5)
print_time(time)
