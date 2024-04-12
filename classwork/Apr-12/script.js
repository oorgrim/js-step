let mainForm = document.forms.main
let mainForm2 = document.forms[1]
console.log(mainForm, mainForm2)

let input = mainForm.nameInput
console.log(input)

let placeholder = input.placeholder
console.log(placeholder)

input.addEventListener('focus', function() {
    input.placeholder = ''
})

input.addEventListener('blur', function() {
    input.placeholder = ''
})

input.addEventListener('click', function() {
    input.placeholder = 'введите ваше имя:'
})

let tbtn = mainForm.tbtn
tbtn.addEventListener('click', function() {
    tbtn = ' '
})