document.addEventListener('DOMContentLoaded', function() {
    let billInp = document.getElementById('bill')
    let tip = document.getElementById('tipPercentage')
    let calculate = document.getElementById('calculate')
    let total = document.getElementById('total')

    calculate.addEventListener('click', function() {
        let billamount = parseFloat(billInp.value)
        let tipPercent = parseFloat(tip.value)

        if (isNaN(billamount)||billamount<=0){
            total.textContent='введите сумму'
            return
        }

        let tipAmount = billamount * tipPercent;
        let totalAmount = billamount + tipAmount;

        total.textContent = `итоговая сумма: $${totalAmount.toFixed(2)}`  // отформатироваала и округлила
    })
})