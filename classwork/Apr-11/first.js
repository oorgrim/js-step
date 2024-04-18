let div = document.getElementById('box')

div.addEventListener('mousemove', function(event) {
    let X = event.clientX
    let Y = event.clientY
    
    div.style.left = X + 'px'
    div.style.top = Y + 'px'
})
