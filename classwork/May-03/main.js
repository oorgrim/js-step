// let obj = {
//     name: 'Alex',
//     age: 25,
//     email: 'alex02@mail.ru'
// }
// console.log(obj);
// // let obj2 = JSON.stringify(obj)
// let obj2 = JSON.stringify(obj, null, 30)
// console.log(obj2);
// let obj3 = JSON.parse(obj2)
// console.log(obj3);

// let request = new XMLHttpRequest();
// request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Almaty&units=metric&APPID=b03a2cfad336d11bd9140ffd92074504');
// request.send();

// https://api.github.com/users/oorgrim

// let request = new XMLHttpRequest();
// request.open('GET', 'https://api.github.com/users/oorgrim');
// request.send();


    const request = new XMLHttpRequest();

    request.open("GET", "https://api.github.com/users/oorgrim")

    request.onload = () => {
        console.log(request);
    }
    request.send() 

    // set amount set interval