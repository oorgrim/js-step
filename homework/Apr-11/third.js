function changeColor(book) {
    var books = document.querySelectorAll('#booklist li')
    books.forEach(function(item) {
        if (item===book) {
            if (item.style.backgroundColor === 'orange') {
                item.style.backgroundColor = ''
            }
            else {
                item.style.backgroundColor = 'orange'
            }
        }
        else {
            item.style.backgroundColor = ''
        }
    })
}