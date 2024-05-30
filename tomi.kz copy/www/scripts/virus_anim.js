const container = document.getElementById('cardContainerWrap');

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    const skewX = deltaX * 15;
    const skewY = deltaY * 15;

    container.querySelector('.moving_card').style.transform = `skew(${skewY}deg, ${skewX}deg)`;
    container.querySelector('.content-box').style.transform = `translateZ(20px) skew(${skewY}deg, ${skewX}deg)`;
});

container.addEventListener('mouseleave', () => {
    container.querySelector('.moving_card').style.transform = 'skew(0deg, 0deg)';
    container.querySelector('.content-box').style.transform = 'translateZ(0) skew(0deg, 0deg)';
});
    