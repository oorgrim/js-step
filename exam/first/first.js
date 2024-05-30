const card = document.querySelectorAll('.card');
const box = document.getElementById('box');
const boxImg = document.querySelector('.boxImg');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex;

let showBox = (index) => {
    box.style.display = 'flex'
    boxImg.src = card[index].style.backgroundImage.slice(5, -2)
    currentIndex = index
}

const hideBox = () => {
    box.style.display = 'none'
}

const showNextImg = () => {
    currentIndex = (currentIndex + 1) % card.length
    showBox(currentIndex)
}

const showPrevImg = () => {
    currentIndex = (currentIndex-1+card.length)%card.length
    showBox(currentIndex)
}

card.forEach((card, index) => {
    card.addEventListener('click', () => showBox(index))
});

closeBtn.addEventListener('click', hideBox)
nextBtn.addEventListener('click', showNextImg)
prevBtn.addEventListener('click', showPrevImg)

box.addEventListener('click', (e) => {
    if (e.target === box || e.target === closeBtn) {
        hideBox();
    }
})