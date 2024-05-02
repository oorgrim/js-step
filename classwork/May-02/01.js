document.getElementById('test').addEventListener('submit', function(event) {
    event.preventDefault()
    
    let correct = 0
    // let ocorrect = 
    // [
        
    // ]

    let ans1 = document.querySelector('input[name="q1"]:checked') //чекд для радио/чекбоксов
    let ans2 = document.querySelector('input[name="q2"]:checked') 

    if (ans1 && ans1.value === "a") {
        correct++
    }

    if (ans2 && ans2.value === "a") {
        correct++
    }

    document.getElementById('result').innerHTML = 'Количество правильных ответов: ' + correct
})
