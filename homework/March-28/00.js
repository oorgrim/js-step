class Musician {
    constructor(psevd, name, concertPrice) {
        this.psevd = psevd
        this.name = name
        this.concertPrice = concertPrice
        this.performances = 0
    }

    getConcertAmount(money) {
        this.performances = Math.floor(money / this.concertPrice)
        return this.performances
    }

    printInf() {
        console.log(`псевдоним: ${this.psevd}`)
        console.log(`имя: ${this.name}`)
        console.log(`цена концерта: ${this.concertPrice}`)
        console.log(`кол-во выступлений: ${this.performances}`)
    }
}

let musician1 = new Musician("The Weeknd", "Эйбел Макконен Тесфайе", 70000)
let money = 100000