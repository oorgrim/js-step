let request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    let countries = JSON.parse(this.responseText);
    countries.forEach(country => {
      const name = country.name.common;
      const population = country.population;
      const location = country.region;
      const flag = country.flags.png;

      console.log("Name:", name);
      console.log("Population:", population);
      console.log("Location:", location);
      console.log("Flag:", flag);
      console.log("----------------------------------");
    });
  } else {
    console.error('Error:', this.statusText);
  }
};

request.open('GET', 'https://restcountries.com/v3.1/all');
request.send();
