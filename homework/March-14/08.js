let daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
let index = 0

do {
    console.log (daysOfWeek[index] + ". Хотите увидеть следующий день?")
    index = (index + 1) % daysOfWeek.length
} while (confirm("Хотите увидеть следующий день?"))