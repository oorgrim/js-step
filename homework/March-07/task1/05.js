let dollars = +prompt('введите сумму в долларах:')
let valuta = prompt('введите валюту, в которую хотите перевести: eur, uan, azn:')
const eur = 0.921206
const azn = 1.7
const uan = 7.22

if (valuta == 'eur' || valuta == 'EUR') {
    let res = dollars * eur
    console.log(`${dollars} долларов в евро = ${res} евро`)
}
else if (valuta == 'azn' || valuta == 'AZN') {
    let res = dollars * azn
    console.log(`${dollars} долларов в AZN = ${res} AZN`)
}
else if (valuta == 'uan' || valuta == 'UAN') {
    let res = dollars * uan
    console.log(`${dollars} долларов в UAN = ${res} UAN`)
}