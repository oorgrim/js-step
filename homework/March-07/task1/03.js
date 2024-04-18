let year = parseInt(prompt("введите год:"))

if ((year % 400 === 0)|| (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`год ${year} високосный`)
}
else {
    console.log(`год ${year} не високосный`)
}