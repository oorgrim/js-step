// // window.addEventListener('scroll', function() {
// //     let scrollY = this.window.pageXOffset || documentElement.scrollY 
// //     let layer = this.document.getElementById('layer')
// //     layer.style.transform = translateY(+scroll*0.5 + 'px')
// // })

// window.addEventListener('scroll', function() {
//     // let scrollY = window.pageXOffset || this.document.documentElement.scrollY;
//     // let layer = document.getElementById('layer')
//     // layer.style.transform = translateY(+scroll*0.5 + 'px')
//     var scrollTop = this.window.pageYOffset || this.document.documentElement.scrollTop;
//     var parallaxLayer = document.querySelector('.layer');
//     parallaxLayer.style.transform = 'translateY(' + scrollTop * 0.5 + 'px';
// })

window.addEventListener('scroll', function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var parallaxLayer = document.querySelector('.layer');
    parallaxLayer.style.transform = 'translateY(' + scrollTop * 0.5 + 'px)'; 
});
