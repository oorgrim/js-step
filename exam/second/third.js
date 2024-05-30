document.addEventListener('DOMContentLoaded', function() {
    const billAmountInput = document.getElementById('billAmount');
    const tipPercentageSelect = document.getElementById('tipPercentage');
    const calculateButton = document.getElementById('calculate');
    const totalAmountDiv = document.getElementById('totalAmount');

    calculateButton.addEventListener('click', function() {
        const billAmount = parseFloat(billAmountInput.value);
        const tipPercentage = parseFloat(tipPercentageSelect.value);

        if (isNaN(billAmount) || billAmount <= 0) {
            totalAmountDiv.textContent = 'Please enter a valid bill amount';
            return;
        }

        const tipAmount = billAmount * tipPercentage;
        const totalAmount = billAmount + tipAmount;

        totalAmountDiv.textContent = `Total amount with tip: $${totalAmount.toFixed(2)}`;
    });
});
