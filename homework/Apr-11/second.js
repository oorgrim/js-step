let lights = document.querySelectorAll('.light')
let currentIndex = 0

function changeColor() {
    lights[currentIndex].style.opacity = '0.2' //непрозрачность для эффеекта        
    currentIndex= (currentIndex + 1)% lights.length //переключение
    lights[currentIndex].style.opacity = '1' //непрозрачность для следцющего
}
