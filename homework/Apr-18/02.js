let circle = document.getElementById('circle')
let square = document.getElementById('square')
let holst = document.getElementById('holst')
getColor = document.querySelector('#btn').onclick = () => {
    let color_pallete = document.getElementById('color_pallete').value
    return color_pallete
}
function func_square(e){
    let mouseX = e.clientX
    let mouseY = e.clientY
    let square2 = document.createElement('div')
    square2.setAttribute('id','square')
    document.body.appendChild(square2)
    square2.style.position = 'absolute'
    square2.style.backgroundColor = getColor()
    square2.style.left = mouseX - square2.offsetWidth/2 + 'px'
    square2.style.top = mouseY - square2.offsetHeight/2 + 'px'
}
function func_circle(e){
    let mouseX = e.clientX
    let mouseY = e.clientY
    let circle2 = document.createElement('div')
    circle2.setAttribute('id','circle')
    document.body.appendChild(circle2)
    circle2.style.position = 'absolute'
    circle2.style.backgroundColor = getColor()
    circle2.style.left = mouseX - circle2.offsetWidth/2 + 'px'
    circle2.style.top = mouseY - circle2.offsetHeight/2 + 'px'
}
document.querySelector('#square').onclick = () => {
    square.style.backgroundColor = 'rgb(204,204,204)'
    holst.addEventListener('click',func_square)
    
}
document.querySelector('#square').ondblclick = () => {
    square.style.backgroundColor = 'gray'
    holst.removeEventListener('click',func_square)
    
}
document.querySelector('#circle').onclick = () => {
    circle.style.backgroundColor = 'rgb(204,204,204)'
    holst.addEventListener('click',func_circle)
    
}
document.querySelector('#circle').ondblclick = () => {
    circle.style.backgroundColor = 'gray'
    holst.removeEventListener('click',func_circle)
    
}



