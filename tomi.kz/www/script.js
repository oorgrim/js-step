function caesarCipher(text, shift) {
    return text.replace(/[а-яёА-ЯЁ]/g, function(char) { //первач и последняя буквы
        var code = char.charCodeAt(0)
        var offset = code>= 1040 && code <= 1071 ? 1040 : code >= 1072 && code <= 1103 ? 1072 : code
        return String.fromCharCode(((code - offset + shift) % 32) + offset)
    })
}

function atbashCipher(text) {
    return text.replace(/[а-яА-Я]/g, function(char) {
        var code = char.charCodeAt(0)
        var base =code>= 1040 && code <= 1071 ? 1040: code >= 1072 && code <= 1103 ? 1072 : code
        return String.fromCharCode((31 -(code-base)) +base)
    });
}

function binaryCipher(text) {
    return text.split('').map(function(char) {
        return char.charCodeAt(0).toString(2)
    }).join(' ')
}

function morseCipher(text) {
    var morseAlphabet = {
        'а': '.-', 'б': '-...', 'в': '.--', 'г': '--.', 'д': '-..', 'е': '.', 'ё': '.', 'ж': '...-', 'з': '--..',
        'и': '..', 'й': '.---', 'к': '-.-', 'л': '.-..', 'м': '--', 'н': '-.', 'о': '---', 'п': '.--.', 'р': '.-.',
        'с': '...', 'т': '-', 'у': '..-', 'ф': '..-.', 'х': '....', 'ц': '-.-.', 'ч': '---.', 'ш': '----', 'щ': '--.-',
        'ъ': '.--.-', 'ы': '-.--', 'ь': '-..-', 'э': '..-..', 'ю': '..--', 'я': '.-.-', ' ': '/'
    };
    return text.toLowerCase().split('').map(function(char) {
        return morseAlphabet[char] || ''
    }).join(' ')
}


function zashifr() {
    var textInput = document.getElementById('textInput').value;
    var enc = document.querySelector('input[name="enc"]:checked').value;
    var output = ''

    switch(enc) {
        case 'caesar':
            var shift = parseInt(prompt("Введите сдвиг (это число от 1 и до 31):"))
            output = caesarCipher(textInput, shift)
            break
        case 'atbash':
            output = atbashCipher(textInput)
            break
        case 'binary':
            output = binaryCipher(textInput)
            break
        case 'morse':
            output = morseCipher(textInput)
            break
        default:
            output = 'Выбериыте метод шифрования'
    }
    document.getElementById('outputText').value = output;
}




let virus_cont = document.getElementById('cardContainerWrap');

virus_cont.addEventListener('mousemove', (e) => {
    const rect = virus_cont.getBoundingClientRect();
    const x = e.pageX - rect.left;
    const y = e.pageY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    const rotateX = deltaY * 5; // Увеличьте или уменьшите значение для более сильного эффекта
    const rotateY = deltaX * -5; // Увеличьте или уменьшите значение для более сильного эффекта

    virus_cont.querySelector('.moving_card').style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    virus_cont.querySelector('.content-box').style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
});

virus_cont.addEventListener('mouseleave', () => {
    virus_cont.querySelector('.moving_card').style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
    virus_cont.querySelector('.content-box').style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
});
