function create_fract(numerator, denominator) { // numerator числитель, denomentator знаменатель и фракшн дробь
    return {numerator, denominator }
}

function add_fract(fract1, fract2) {
    let numerator = fract1.numerator*fract2.denominator + fract2.numerator * fract1.denominator
    let denominator = fract1.denominator*fract2.denominator
    return simpl_fract(create_fract(numerator, denominator))
}

function minus_fract(fract1, fract2) {
    let numerator = fract1.numerator * fract2.denominator - fract2.numerator * fract1.denominator
    let denominator = fract1.denominator * fract2.denominator
    return simpl_fract(create_fract(numerator, denominator))
}

function umn_fract(fract1, fract2) {
    let numerator = fract1.numerator * fract2.numerator
    let denominator = fract1.denominator * fract2.denominator
    return simpl_fract(create_fract(numerator, denominator))
}

function divide_fract(fract1, fract2) {
    let numerator = fract1.numerator * fract2.denominator
    let denominator = fract1.denominator * fract2.numerator
    return simpl_fract(create_fract(numerator, denominator))
}

function func(a,b) {
    while (b!==0) {
        let t = b
        b = a % b
        a = t
    }
    return a
}

function simpl_fract(fract) {
    let greatest_divisor = func(fract.numerator, fract.denominator)
    return {
        numerator: fract.numerator/greatest_divisor,
        denominator: fract.denominator/greatest_divisor
    }
}

let fract1 = create_fract(1, 7)
let fract2 = create_fract(9, 1)
let sum = add_fract(fract1, fract2)
let difference = minus_fract(fract1, fract2)
let res_umn = umn_fract(fract1, fract2)
let quotient = divide_fract(fract1, fract2)
console.log('сложение:', sum)

console.log('вычитание:', difference)
console.log('умножение:', res_umn)
console.log('деление:', quotient)