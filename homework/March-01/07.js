let summ = +prompt('введите сумму денег:')
const price_1 = +prompt('введите цену за одну шоколадку:')
let res = Math.floor(summ / price_1)
let ost = summ - (res * price_1); 

console.log(`вы можете купить ${res} шоколадок и у вас останется ${ost} сдачи`);
