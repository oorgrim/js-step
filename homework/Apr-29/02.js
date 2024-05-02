let arr1 = [7, 2, 4, 1, 9, 1, 2]
let arr2 = [3, 1, 2, 7, 4, 5, 9]

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
        console.log(`элементыы на месте ${i} = ${arr1[i]}`)
    } 
    else if (arr1[i] > arr2[i]) {
        console.log(`элемент в первом массиве > второго ${i}: ${arr1[i]} > ${arr2[i]}`);
    } 
    else {
        console.log(`элемент во втором массиве > первого  ${i}: ${arr2[i]} > ${arr1[i]}`)
    }
}