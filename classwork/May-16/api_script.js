let input = document.querySelector('#city');
let btn = document.querySelector('#btn');
let img = document.querySelector('.pict');
let city = document.querySelector('.city');
let temp = document.querySelector('.temp');

let sunny_pict = 'img/sunny.gif';
let clouds_pict = 'img/clouds.gif';
let rain_pict = 'img/rain.gif';
let snow_pict = 'img/clouds.gif';

let API_KEY = 'cc2d757656721c7838f819f150c7f7e6';



btn.addEventListener('click', async function(){
    let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_KEY}`;

    let res = await fetch(API_URL);
    let data = await res.json();
    if ('main' in data) {
        console.log(data);
        city.textContent = `В городе: ${input.value}`
        if ('snow' in data) {
            img.src = snow_pict
        }
        else if ('rain' in data) {
            img.src = rain_pict
        }
        else if (data.clouds.all > 40) {
            img.src = clouds_pict
        }
        else {
            img.src = sunny_pict
        }
        temp.textContent = `Температура: ${Math.round(data.main.temp - 273)} C`
    }
    else {
        alert('Такого города нет')
    }
    
} )