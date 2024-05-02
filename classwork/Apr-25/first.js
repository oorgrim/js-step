let array = [
    [1, 2, 3],
    ['a','b', 'c'],
    ['game', 'age', 'gender']
]

let obj = { 
    name: 'Alex',
    age: 20,
    isStudent: true
}
let entr= Object.entries(obj)
let entrArr= Object.fromEntries(array)
console.log(entr, entrArr);

let map = new Map(Object.entries(obj))
    map
        .set('hello', 'world')
        .set(NaN, 'NaN')
        .set('hello', 'world')
console.log(map)

for(let value of map.values){
    console.log(value)
}

for(let value of map.keys){
    console.log(key)
}

map.forEach((key, val, m)=>{
    console.log(key)
}) // ключи значения и сама карта


/////////////
// let array = [1,1,1,1,1,1,1,5,7,7,7,7]
// let set = new Set(array)