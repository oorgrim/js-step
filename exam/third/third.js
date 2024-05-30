
document.addEventListener('DOMContentLoaded', function() {
    let apiKey = '6cadb76f84bc1c6ab09d0da7'  // я зарегалась и взяла ключик
    let apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
    let amountInp = document.getElementById('amount')
    let fromSelect = document.getElementById('from')
    let toSelect = document.getElementById('to')
    let convert = document.getElementById('convert')
    let res = document.getElementById('res')
    let cuurRate = {}  //курс валют

    async function fetchCurrencyRates() {
        try {
            let response = await fetch(apiUrl)
            let data = await response.json()
            cuurRate = data.conversion_rates
            func()
        }
        catch (error) {
            console.error('ошибка:', error)
        }
    }

    function func() {
        const currencies = Object.keys(cuurRate)
        currencies.forEach(currency => {
            const optionFrom = document.createElement('option')
            optionFrom.value = currency
            optionFrom.textContent = currency
            fromSelect.appendChild(optionFrom)

            const optionTo = document.createElement('option')
            optionTo.value = currency
            optionTo.textContent = currency
            toSelect.appendChild(optionTo)
        })

    }

    convert.addEventListener('click', () => {
        const amount = parseFloat(amountInp.value)
        const from = fromSelect.value
        const to = toSelect.value
        if(isNaN(amount)){
            res.textContent= 'вы ничего не ввели'
            return
        }
        let convRate = cuurRate[to]/cuurRate[from]  // коэф. конвертации
        const convertedAmount = (amount*convRate).toFixed(2)  // пееревела и округлила
        res.textContent = `${amount} ${from} = ${convertedAmount} ${to}`  // отформатировала
    })

    fetchCurrencyRates()
})