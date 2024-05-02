function addMsg(message) {
    var messagesList = document.getElementById('messages');
    var li = document.createElement('li');
    li.textContent = message;
    messagesList.appendChild(li);
}

document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var nameInput = document.getElementById('nameInput');
    var messageInput = document.getElementById('messageInput');

    var name = nameInput.value.trim();
    var message = messageInput.value.trim();

    if (message !== '' && name !== '') {
        addMsg(name);
        addMsg(message);
        messageInput.value = ''; 
        nameInput.value = ''; 
    }
    else {
        alert('введите соощение'); 
    }
})
