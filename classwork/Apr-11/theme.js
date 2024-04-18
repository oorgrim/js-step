let button = document.getElementById('btn')

// function showMessage() {
//     console.log('Hello!')
// }

// button.onclick = function() {
//     console.log('World')
// }

// addEventListener
// button.addEventListener('click', function(){
//     console.log('World!')
// })

// button.addEventListener('click', function(){
//     console.log('hello world!')
// })

// код который ниже, помогает сделать так чтобы не каждый раз при нажатии на кнопкуу отображался текст
// button.addEventListener('click', function showMessage(){
//     console.log('hello world!')
//     button.removeEventListener('click', showMessage)
// })

// button.addEventListener('click', function(event){
//     console.log(event.type)
//     console.log(event.target) // какой родитель тега
//     console.log(event)
//     console.log(event.clientX)
//     console.log(event.clientY)
// })

let div = document.getElementById('container')
let p = document.getElementById('p')

// div.addEventListener('mouseenter', function() {
//     div.innerText = 'Курсор внутри блока'
// })

// div.addEventListener('mouseout', function() {
//     div.innerText = 'Курсор за блоком'
// })


div.addEventListener('mouseenter', function() {
    p.innerText = 'Курсор внутри блока'
})

div.addEventListener('mouseout', function() {
    p.innerText = 'Курсор за блоком'
})