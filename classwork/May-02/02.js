document.getElementById('textForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let inputText = document.getElementById('inputText').value
    let fontSize = document.getElementById('fontSize').value
    let fontColor = document.getElementById('fontColor').value
    let isBold = document.getElementById('boldCheckbox').checked
    let isItalic = document.getElementById('italicCheckbox').checked
    let isUnderline = document.getElementById('underlineCheckbox').checked

    const styledTextElement = document.getElementById('styledText')
    styledTextElement.innerHTML = inputText
    styledTextElement.style.fontSize = fontSize + 'px'
    styledTextElement.style.color = fontColor
    styledTextElement.style.fontWeight = isBold ? 'bold' : 'normal'
    styledTextElement.style.fontStyle = isItalic ? 'italic' : 'normal'
    styledTextElement.style.textDecoration = isUnderline ? 'underline' : 'none'
});
