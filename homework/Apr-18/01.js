document.querySelector('#btn').onclick = () => {
    let Name = document.getElementById('Name').value
    let Type = document.getElementById('Type').value
    let Code = document.getElementById('Code').value
    let user = document.getElementById('user')
    let username = document.getElementById('username')
    let usertype = document.getElementById('usertype')
    let usercolor = document.getElementById('usercolor')
    regex = new RegExp('[!@#$%^&*()_+-=]')
    regex2 = new RegExp('[#]')
    if(regex.test(Name) === true){
        document.getElementById('error1').style.display = 'block'
    }
    else{
        document.getElementById('error1').style.display = 'none'
        if(Code.split(',').length===3 && Type === 'RGB'){
            document.getElementById('error2').style.display = 'none'
            username.innerText = Name
            usertype.innerText = Type
            usercolor.innerText = Code
            user.style.backgroundColor = `rgb(${Code})`
            user.style.display = 'block'
        }
        else if(Code.split(',').length !== 3 && Type === 'RGB'){
            user.style.display = 'none'
            document.getElementById('error2').innerText = 'RGB code must match the pattern [0-255], [0-255], [0-255]'
            document.getElementById('error2').style.display = 'block'
        }
        if(Code.split(',').length===4 && Type === 'RGBA'){
            document.getElementById('error2').style.display = 'none'
            username.innerText = Name
            usertype.innerText = Type
            usercolor.innerText = Code
            user.style.backgroundColor = `rgb(${Code})`
            user.style.display = 'block'
        }
        else if(Code.split(',').length!==4 && Type === 'RGBA'){
            user.style.display = 'none'
            document.getElementById('error2').innerText = 'RGBA code must match the pattern [0-255], [0-255], [0-255], [0-1]'
            document.getElementById('error2').style.display = 'block'
        }
        if(regex2.test(Code) === true && Type === 'HEX'){
            document.getElementById('error2').style.display = 'none'
            username.innerText = Name
            usertype.innerText = Type
            usercolor.innerText = Code
            user.style.backgroundColor = `rgb(${Code})`
            user.style.display = 'block'
            
        }
        else if(regex2.test(Code) === false && Type === 'HEX'){
            user.style.display = 'none'
            document.getElementById('error2').innerText = 'HEX code must match the pattern #XXXXXX'
            document.getElementById('error2').style.display = 'block'
        }
    }
}