let request = new XMLHttpRequest()
let wrapper = document.getElementById('wrapper');
    

request.onreadystatechange = function() {
    let countries = JSON.parse(this.responseText)
    countries.forEach(country => {
        // this.country = country
        // this.name = namee
        // this.population = population
        // this.s = s
        // this.flag = flag
        // this.flag_desc = flag_desc
        let namee = country.name.common
        let population = country.population
        let loc = country.region
        let flag = country.flags.png
        let maps = country.maps
        // let flag_desc = country.flag_desc
        
        console.log('Name:', namee)
        console.log('population:', population)
        console.log('loc:', loc)
        console.log('flag:', flag)
        console.log('maps:', maps)
        // console.log('flag_desc:', flag_desc)

        let country_web = document.createElement('div')
        let name_country_web = document.createElement('h2')
        name_country_web.textContent = 'name: ' + namee
        let population_web = document.createElement('p')
        population_web.textContent = 'ppopulation: ' + population
        let loc_web = document.createElement('p')
        loc_web.textContent = 'l0ocation: ' + loc
        let flag_web = document.createElement('img')
        flag_web.src = flag
        let maps_link = document.createElement('a')
        maps_link.textContent = 'показать на картк'
        maps_link.href = maps

        country_web.appendChild(name_country_web)
        country_web.appendChild(population_web)
        country_web.appendChild(loc_web)
        country_web.appendChild(flag_web)
        country_web.appendChild(maps_link)
        wrapper.appendChild(country_web)

    });
    
    
  }

request.open('GET', 'https://restcountries.com/v3.1/all');
request.send();