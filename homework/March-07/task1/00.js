let age = +prompt('введите свой возраст:')

if (age >= 0 && age < 2) {
    console.log('вы ребенок')
}
if (age >= 2 && age < 12) {
    console.log('вы все еще ребенок')
}
else if (age >= 12 && age < 18) {
    console.log('вы подросток')
}
else if (age >= 18 && age < 60) {
    console.log('вы взрослый')
}
if (age >= 60 && age < 130) {
    console.log('вы пенсионер')
}