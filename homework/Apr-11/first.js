function moveBall(event) {
    var ball = document.getElementById('ball')
    ball.style.left = event.clientX - ball.offsetWidth / 2 + 'px'
    ball.style.top = event.clientY - ball.offsetHeight / 2 + 'px'
}