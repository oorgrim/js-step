let arr = 0
document.querySelector("#btn1").onclick = () => {
    let ans1 = document.getElementById('ans1')
    let ans4 = document.getElementById('ans4')
    if(ans1.checked){
        arr += 1
    }
    if(ans4.checked){
        arr += 1
    }
    document.getElementById('text').innerHTML = `Result is ${arr}`    
}
