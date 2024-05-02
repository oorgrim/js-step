class Planet {
    constructor(area, temperature, life, name) {
        this.area = area
        this.temperature = temperature
        this.life = life
        this.name = name
    }

    inf() {
        console.log(`название: ${this.name}`)
        console.log(`площадь: ${this.area}`)
        console.log(`температура: ${this.temperature}`)
        console.log(`есть ли жизнь: ${this.life ? "Да" : "Нет"}`)
    }
}

let mercury = new Planet(74840, 350, false, "Меркурий")
let venus = new Planet(460237, 460, false, "Венера")
let earth = new Planet(510072000, 15, true, "Земля")
let mars = new Planet(144798, -63, true, "Марс")
let jupiter = new Planet(614200000, -110, false, "Юпитер")
let saturn = new Planet(427000000, -140, false, "Сатурн")
let uranus = new Planet(80850000, -195, false, "Уран")
let neptune = new Planet(76180000, -200, false, "Нептун")

mercury.inf()
venus.inf()
earth.inf()
mars.inf()
jupiter.inf()
saturn.inf()
uranus.inf()
neptune.inf()
