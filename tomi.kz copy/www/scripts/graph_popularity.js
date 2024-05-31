let ctx = document.getElementById('popularityChart').getContext('2d')
let popularityChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [2010, 2012, 2014, 2016, 2018, 2020, 2022, 2024],
        datasets: [{
            label: 'популярность (%)',
            data: [10, 20, 35, 50, 65, 80, 90, 95],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.1
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'год'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'популярность (%)'
                },
                beginAtZero: true,
                max: 100
            }
        }
    }
})
