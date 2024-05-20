document.querySelector('#btn').onclick = () =>{
    let name = document.getElementById('input_name').value
    let message = document.getElementById('input_message').value
    let inp_name = document.getElementById('inp_name')
    let inp_message = document.getElementById('inp_message')
    let time = document.getElementById('time2')
    let message2 = document.getElementById('message2')
    let dt = new Date()
    inp_name.innerHTML = name
    inp_message.innerHTML = message
    time.innerHTML = `${dt.getHours()}:${dt.getMinutes()} ${dt.getDay()}.${dt.getMonth()}.${dt.getFullYear()}`
    message2.style.display = 'block'
}