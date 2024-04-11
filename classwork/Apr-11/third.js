// let container = document.getElementById('container').addEventListener('click', function() {
let container = document.getElementById('container')
let close = document.getElementById('close').addEventListener('click', function(){
    container.style.display =  'none'
})

let button = document.getElementById('btn').addEventListener('click', function(){
    container.style.display = 'block'
})