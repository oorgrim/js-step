
// let array = [1,1,1,1,1,1,1,5,7,7,7,7]
// let set = new Set(array)
// // console.log(set);
// set
// .add(4, 5, 6, 10)
// .add('true')

// set.add(4, 5, 10, 9)

// console.log(set.entries());

// map обширный способ работать с обхектами
// узнавать скок объекторв внутри, ухзнатаь ключи  , объекты 
// set делает уникальное
// не позыоляет данныам дублироватьяс
// не set a add 

// в weakset Только обхекты
// но чаще исп только просто мап и сэт

// test match replace

// !!!test!!!

// let str = 'hello world hello'
// let pattern = /he/
// let find = pattern.test(str)
// console.log(find)

// !!!match!!!

// let str = 'hello world hello'
// let pattern = /he/g
// let find = str.match(pattern)
// console.log(find)


let str = 'hello world hello'
let pattern = /world/g
let replace = /JavaScript/
let find = str.match(pattern, replace)
console.log(find)


let str2 = '2024 - 10 - 10'
// let pattern2 = /\d{4} - \d{2} - \d{2}/
let pattern2 = /(\d{4} - \d{2}) - (\d{2})/
let match = str2.match(pattern2)
console.log(match[0])
console.log(match[1])
console.log(match[2])
console.log(match[3])