// let str1 = Number("14");
// let num = String(88);
// // console.log(str1 + num, str1 - num)
// console.log(typeof(str1), typeof(num))

// const p = 3.14;
// console.log(p)

// let a = "Hello world!"
// alert(a)


// let $name = prompt('Введите ваше имя:')
// // let $name = +prompt('Введите ваше имя:') поставить + перед промпт - указать, что это число.

// console.log(typeof($name))

// let $age = +prompt('Введите ваш возраст: ')
// console.log(typeof($age))

// let $year = +prompt('Введите ваш год рождения: ')
// let $age = 2024 - $year
// console.log($age)


// 1

// let $num = +prompt("Введите число:")
// let $res = $num**2
// alert($res)

// 2

// let $num1 = +prompt("Введите первоее число:")
// let $num2 = +prompt("Введите второе число:")
// let $sr_ar = ($num1 + $num2)/2
// alert($sr_ar)

// 3

// let $a = +prompt("Введите длину стороны квадрата:");
// let $s = $a**2;
// alert($s)

// 4

// let $km = +prompt("Введите километры:");
// const $miles = $km * 0.621371
// alert($miles)

// 5

// let $num1 = +prompt("Введите первое число:")
// let $num2 = +prompt("Введите второе число:")

// let $sum = $num1 + $num2
// let $proizv = $num1 * $num2
// let $minus = $num1 - $num2
// let $delenie = $num1 / $num2

// console.log($sum, $proizv, $minus, $delenie)

// 6

// let $a = +prompt("Введите а:");
// let $b = +prompt("Введите b:");
// let $x = (0 - $b) / $a;
// let $formula = $a * $x + $b
// alert($x)

// 7

// let $current_hours = +prompt("Введите часы:")
// let $current_minutes = +prompt("Введите минуты:")
// $ost_hours = 23 - $current_hours
// $ost_minutes = 60 - $current_minutes
// $ost_time = $ost_hours * 60 + $ost_minutes
// console.log("до следующего дня осталось: ", $ost_hours, $ost_minutes)

// 8

// $num = prompt("Введите трехзначное число:")
// $num2 = ($num % 100)/10
// alert(Math.round($num2))

// 9

// let $num = prompt("Введите пятизначное число:")
// let $first_digit = $num[0]
// let $last_digit = $num % 10
// let $res = $last_digit 
// alert($res)

// 10

// let $sales = +prompt("Введите общую сумму продаж:")
// let $salary = 250 + 0.1*$sales
// alert($salary)



// let number = prompt("Введите число:")
// let symbol = prompt("Введите символ:")
// let res = symbol + number.slice(1)
// alert(res)

// HW

// 1

// let name = prompt("Введите свое имя:")
// let $res = `Привет, ${name}`
// alert($res)

// 2

let num = +prompt("");
if(a % 2 == 0) {
    alert("Четное")
}
else {
    alert("Нечетное")
}