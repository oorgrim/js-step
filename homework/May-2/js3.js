document.querySelector("#btn").onclick = () => {
    let text = document.getElementById('text').value
    let result = document.getElementById('result')
    result.innerText = text
    result.style.display = 'block'
    let bold = document.getElementById('Bold')
    let under = document.getElementById('Underline')
    let italic = document.getElementById('Italics')
    let left = document.getElementById('Left')
    let right = document.getElementById('Right')
    let just = document.getElementById('Justify')
    if(bold.checked){
        result.style.fontWeight = 400
    }
    if(under.checked){
        result.style.textDecoration = 'underline'
    }
    if(italic.checked){
        result.style.fontStyle = 'italic'
    }
    if(left.checked){
        result.style.textAlign = 'left'
    }
    if(right.checked){
        result.style.textAlign = 'right'

    }
    if(just.checked){
        result.style.textAlign = 'justify'
    }
}