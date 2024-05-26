document.querySelector('#btn').onclick = () => {
    let s = document.getElementById('selecting')
    let text = s.options[s.selectedIndex].text
    let quan = document.getElementById('quan').value
    let name = document.getElementById('name').value
    let address = document.getElementById('address').value
    let date = document.getElementById('date').value
    let comment = document.getElementById('comment').value
    let nameing = document.getElementById('nameing')
    let specs = document.getElementById('specs')
    let result = document.getElementById('result')
    nameing.innerHTML = `${name},thanks for the order!`
    specs.innerHTML = `Book "${text}" in quantity of: ${quan} will be delivered on ${date} to ${address}`
    result.style.display = 'block'
}