fetch('infections.json')
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    const infectionGroupSelect = document.getElementById('infectionGroupSelect');
    const regionSelect = document.getElementById('regionSelect');
    const citySelect = document.getElementById('citySelect');
    const branchProfSelect = document.getElementById('branchProfSelect');
    const infLocSelect = document.getElementById('infLocSelect');
    const clinMatSelect = document.getElementById('clinMatSelect');
    const periodSelect = document.getElementById('periodSelect');
    const ageSelect = document.getElementById('ageSelect');
    const microorgGroupSelect = document.getElementById('microorgGroupSelect');
    const microorgNameSelect = document.getElementById('microorgNameSelect');
    
    const uniqueInfGroup = new Set();
    const uniqueRegions = new Set();
    const uniqueCity = new Set();
    const uniqueBranchProf = new Set();
    const uniqueInfLoc = new Set();
    const uniqueClinMat = new Set();
    const uniquePeriod = new Set();
    const uniqueAge = new Set();
    const uniqueMicrooorgGroup = new Set();
    const uniqueMicrooorgName = new Set();

    // Добавление уникальных названий инфекций и стран в Set
    data.forEach(item => {
        uniqueInfGroup.add(item.infection_group);
        uniqueRegions.add(item.region);
        uniqueCity.add(item.city);
        uniqueBranchProf.add(item.branch_profile);
        uniqueInfLoc.add(item.infection_localization);
        uniqueClinMat.add(item.clin_material);
        uniquePeriod.add(item.period);
        uniqueAge.add(item.age);
        uniqueMicrooorgGroup.add(item.microorg_group);
        uniqueMicrooorgName.add(item.microorg_name);
    });

    // Преобразование Set в массив и сортировка
    const sortedInfGroup = Array.from(uniqueInfGroup).sort();
    const sortedRegions = Array.from(uniqueRegions).sort();
    const sortedCity = Array.from(uniqueCity).sort();
    const sortedBranchProf = Array.from(uniqueBranchProf).sort();
    const sortedInfLoc = Array.from(uniqueInfLoc).sort();
    const sortedClinMat = Array.from(uniqueClinMat).sort();
    const sortedPeriod = Array.from(uniquePeriod).sort();
    const sortedAge = Array.from(uniqueAge).sort();
    const sortedMicrooorgGroup = Array.from(uniqueMicrooorgGroup).sort();
    const sortedMicrooorgName = Array.from(uniqueMicrooorgName).sort();

    // Создание списка опций на основе уникальных значений из массива
    sortedInfGroup.forEach(infection_group => {
        const option = document.createElement('option');
        option.textContent = infection_group;
        infectionGroupSelect.appendChild(option);
    });

    sortedRegions.forEach(region => {
        const option = document.createElement('option');
        option.textContent = region;
        regionSelect.appendChild(option);
    });

    sortedCity.forEach(city => {
        const option = document.createElement('option');
        option.textContent = city;
        citySelect.appendChild(option);
    });

    sortedBranchProf.forEach(branch_profile => {
        const option = document.createElement('option');
        option.textContent = branch_profile;
        branchProfSelect.appendChild(option);
    });

    sortedInfLoc.forEach(infection_localization => {
        const option = document.createElement('option');
        option.textContent = infection_localization;
        infLocSelect.appendChild(option);
    });

    sortedClinMat.forEach(clin_material => {
        const option = document.createElement('option');
        option.textContent = clin_material;
        clinMatSelect.appendChild(option);
    });

    sortedPeriod.forEach(period => {
        const option = document.createElement('option');
        option.textContent = period;
        periodSelect.appendChild(option);
    });

    sortedAge.forEach(age => {
        const option = document.createElement('option');
        option.textContent = age;
        ageSelect.appendChild(option);
    });

    sortedMicrooorgGroup.forEach(microorg_group => {
        const option = document.createElement('option');
        option.textContent = microorg_group;
        microorgGroupSelect.appendChild(option);
    });

    sortedMicrooorgName.forEach(microorg_name => {
        const option = document.createElement('option');
        option.textContent = microorg_name;
        microorgNameSelect.appendChild(option);
    });
})
.catch(error => console.error('Ошибка загрузки данных:', error));
