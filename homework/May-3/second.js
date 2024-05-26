function func() {
    let key = "XZwDQPNIdwMZh2SCB4oTYfdVqGnuYWs9KNJysHNj" // млй ключ
    let url = "https://api.nasa.gov/planetary/apod?api_key=" + key
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url, true)
    xhr.onreadystatechange = function () {
        if (xhr.readyState==4 && xhr.status==200) {
            let data = JSON.parse(xhr.responseText)
            document.getElementById("image").src = data.url
            document.getElementById("desc").textContent = data.explanation
        }
    }
    xhr.send()
}
window.onload = func

