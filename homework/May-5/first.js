let car = {
    proizv: "Toyota",
    model: "rav4",
    year: 2024, //  я не знаю год , я только этот вид вспомнила 
    avg_speed: 80 // км/ч
};

function car_inf(car) {
    console.log(`производитель: ${car.proizv}`)
    console.log(`модель: ${car.model}`)
    console.log(`год выпуска: ${car.year}`)
    console.log(`средняя скорость: ${car.avg_speed} км/ч`)
}

function count_time(car, distance) {
    let travel_time = distance / car.avg_speed
    let breaks = Math.floor(travel_time / 4) 
    let total_time = travel_time + breaks

    console.log(`чтобы преодолеть расстояние ${distance} км нужно около ${total_time.toFixed(2)}ч с перерываами`)
}

car_inf(car)
count_time(car, 1000)