// ДЕСТРУКТУРИЗАЦИЯ

// let array = [1, 2, 3, 4, 5]
// let index1 = array[0] // 1
// // let [a, b, c] = array
// let [,,,a, b, c] = array
// let [other a, b, c] = array  // other с середины
// // console.log(a, b, c);
// console.log(a, b);


// function calcSum(a, b) {
//     let newArray = [
//         a + b,
//         a - b,
//         a * b,
//         a / b
//     ]
//     return newArray;
// }
// let [a, b, c, d] = calcSum(4, 5)
// // console.log(calcSum(4, 5));
// console.log(a, b, c, d);

// let obj = {name: "obi Wan", secNamme: "Kenobi"}


// let array = [1, 2, 3, 4, 5]
// let iterator = array[Symbol.iterator]() // спец метод который по всем элементам проходит
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


// *************
// let array = [1, 2, 3, 4, 5]
// console.log(...array);  // вытащить сразу все значения js

// let array = [1, 2, 3, 4, 5]
// let array2 = [4, 5, 6, 7, 8]
// let allArray = array.concat(array2)
// let allArray2 = [...array, ...array2]
// // console.log(...array);
// console.log(allArray, allArray2);



// let obj = {
//     name: 'Alex',
//     age: 30,
//     isWorrl: false
// }
// console.log({...obj});


// reduce 

// let array = [1, 2, 3, 4, 5]
// let sum = array.reduce((a, i)=> a + i, 0) // a - аккумулятор, 0 - число, с котрого начинается отсчет
// console.log(sum)


// rest - оставшиеся элементы сохраняет себе

// function calcSum(a, b, ...other) {
//     console.log(other)
//     let sum = a + b + other.reduce((a, i)=> a + i, 0)
//     return sum
//     // let sum = array.reduce((a, i)=> a + i, 0)
// }

// let array = [1, 2, 3, 4, 5, 6, 7]
// console.log(calcSum(...array))


     
// let [a, ...o] = array
// console.log(o);

// function* gen(a, b) {
//     let sum = a + b;
//     yield sum
//     yield sum += b;
//     yield sum += b;
//     yield sum  + b;
// }
// let g = gen(2, 3);
// console.log(g.next()); // value = 5, fone = false
// console.log(g.next()); // value = 8, fone = false
// console.log(g.next()); // value = 11, fone = false
// console.log(g.next()); // value = 14, fone = true



// СОЕДИНЕНИЕ ОБЪЕКТОВ

// function createMenu(...other) {
//     return other.reduce((connected, currentItem) => {
//         if (typeof currentItem === 'object' && currentItem.name && currentItem.price) {
//             connected[currentItem.name] = currentItem.price
//         }
//         return connected
//     }, {});
// }

// const a1 = { name: "а", price: 77 }
// const a2 = { name: "аа", price: 5765 }
// const a3 = { name: "ааа", price: 423 }

// const connected = createMenu(a1, a2, a3)
// console.log(connected)


// ВТОРОЙ ВИД СОЕДИНЕНИЯ ОБЪЕКТОВ


// let salad = { name: 'Салат', price: 5};
// let pasta = { name: 'Паста', price: 40};
// let pizza = { name: 'Пицца', price: 20};

// function createMenu(...items) {
//     console.log(...items);
//     let menuItems = Object.fromEntries(items.map(item => [item.name, item.price]))
//     return menuItems
// }

// let menu = createMenu(salad, pasta, pizza)
// console.log(menu);


// третье задание

let db =  [
    {name: 'имя', age: 25, email: 'gmail@gmail.com'}
]

let [namee, agee, emaill] = db
console.log(namee, agee, emaill);