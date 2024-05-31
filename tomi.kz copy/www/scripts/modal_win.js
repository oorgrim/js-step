let modal1 = document.getElementById("modal1")
let modal2 = document.getElementById("modal2")
let btn1 = document.getElementById("openModal1Btn")
let btn2 = document.getElementById("openModal2Btn")
let close1 = modal1.querySelector(".close")
let close2 = modal2.querySelector(".close")

btn1.onclick = function() {
    modal1.style.display = "block"
}

btn2.onclick = function() {
    modal2.style.display = "block"
}

close1.onclick = function() {
    modal1.style.display = "none"
}

close2.onclick = function() {
    modal2.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none"
    }
    if (event.target == modal2) {
        modal2.style.display = "none"
    }
}

let modal = document.getElementById("modal")
let btn = document.getElementById("openModalBtn")
let span = document.getElementsByClassName("close")[0]

btn.onclick = function() {
  modal.style.display = "block"
}
span.onclick = function() {
  modal.style.display = "none"
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}