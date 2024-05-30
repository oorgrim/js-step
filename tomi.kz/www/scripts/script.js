fetch('infections.json')
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    const infectionSelect = document.getElementById('infectionSelect');
    const countrySelect = document.getElementById('countrySelect');
    const uniqueInfections = new Set();
    const uniqueCountries = new Set();

    // Добавление уникальных названий инфекций и стран в Set
    data.forEach(item => {
        uniqueInfections.add(item.infection_name);
        uniqueCountries.add(item.country);
    });

    // Создание списка опций на основе уникальных значений из Set
    uniqueInfections.forEach(infection_name => {
        const option = document.createElement('option');
        option.textContent = infection_name;
        infectionSelect.appendChild(option);
    });

    uniqueCountries.forEach(country => {
        const option = document.createElement('option');
        option.textContent = country;
        countrySelect.appendChild(option);
    });
})
.catch(error => console.error('Ошибка загрузки данных:', error));
