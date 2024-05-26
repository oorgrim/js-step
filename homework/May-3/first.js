function get_quote(callback) {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api.quotable.io/random", true)
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = JSON.parse(xhr.responseText)
            callback(response.content) //фукнция обратного вызова
        }
    };
    xhr.send()
}

function pechat(text, elementId, delay) {  // типо печатная машинка
    let k = 0
    function type() {
        if (k < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(k)
            k++
            setTimeout(type, delay)
        }
    }
    type()
}

get_quote(function(quote) {
    pechat(quote, 'quote', 100)
})