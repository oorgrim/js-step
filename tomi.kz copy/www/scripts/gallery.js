let card = document.querySelectorAll('.card')
let box = document.getElementById('box')
let boxImg = document.querySelector('.boxImg')
let closeBtn = document.querySelector('.close')
let prevBtn = document.querySelector('.prev')
let nextBtn = document.querySelector('.next')
let currentIndex

let showBox = (index) => {
    box.style.display = 'flex'
    boxImg.src = card[index].style.backgroundImage.slice(5, -2)
    currentIndex = index
}
let hideBox = () => {
    box.style.display = 'none'
}
let showNextImg = () => {
    currentIndex = (currentIndex + 1) % card.length
    showBox(currentIndex)
}
let showPrevImg = () => {
    currentIndex = (currentIndex-1+card.length)%card.length
    showBox(currentIndex)
}
card.forEach((card, index) => {
    card.addEventListener('click', () => showBox(index))
})
closeBtn.addEventListener('click', hideBox)
nextBtn.addEventListener('click', showNextImg)
prevBtn.addEventListener('click', showPrevImg)

box.addEventListener('click', (e) => {
    if (e.target === box || e.target===closeBtn) {
        hideBox();
    }
})