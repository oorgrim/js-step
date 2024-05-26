let od_lv = [3,6,9,10]
let al_as = [5,6,7,9]
sessionStorage.setItem('od_lv',od_lv)
sessionStorage.setItem('al_as',al_as)
document.querySelector('#search').onclick = () => {
    let d = document.getElementById('directions')
    let text = d.options[d.selectedIndex].text
    sessionStorage.setItem('direction',text)
    let seats = []
    let signed_seats = document.getElementById('signed_seats')
    let seat1 = document.getElementById('seat1').checked
    let seat3 = document.getElementById('seat3').checked
    let seat5 = document.getElementById('seat5').checked
    let seat7 = document.getElementById('seat7').checked
    let seat9 = document.getElementById('seat9').checked
    let seat2 = document.getElementById('seat2').checked
    let seat4 = document.getElementById('seat4').checked
    let seat6 = document.getElementById('seat6').checked
    let seat8 = document.getElementById('seat8').checked
    let seat10 = document.getElementById('seat10').checked
    let tot_price = document.getElementById('tot_price')
    let value = d.options[d.selectedIndex].value
    if(value==='od_lv'){
        if(seat1){
            if(od_lv.includes(1)===false){
                seats.push(1)
                signed_seats.style.display = 'none'
            }
            else{
                signed_seats.style.display = 'block'
                signed_seats.innerHTML = 'seat 1 is booked'
            }
        }
        if(seat2){
            if(od_lv.includes(2)===false){
                seats.push(2)
                signed_seats.style.display = 'none'
            }
            else{
                signed_seats.style.display = 'block'
                signed_seats.innerHTML = 'seat 2 is booked'
            }
        }
        if(seat3){
            if(od_lv.includes(3)===false){
                seats.push(3)
                signed_seats.style.display = 'none'
            }
            else{
                signed_seats.style.display = 'block'
                signed_seats.innerHTML = 'seat 3 is booked'
            }
        }
        if(seat4){
            if(od_lv.includes(4)===false){
                seats.push(4)
                signed_seats.style.display = 'none'
            }
            else{
                signed_seats.style.display = 'block'
                signed_seats.innerHTML = 'seat 4 is booked'
            }
        }
        if(seat5){
            if(od_lv.includes(5)===false){
                seats.push(5)
                signed_seats.style.display = 'none'
            }
            else{
                signed_seats.style.display = 'block'
                signed_seats.innerHTML = 'seat 5 is booked'
            }
        }
        if(seat6){
            if(od_lv.includes(6)===false){
                seats.push(6)
                signed_seats.style.display = 'none'
            }
            else{
                signed_seats.style.display = 'block'
                signed_seats.innerHTML = 'seat 6 is booked'
            }
        }
        if(seat7){
            if(od_lv.includes(7)===false){
                seats.push(7)
                signed_seats.style.display = 'none'
            }
            else{
                signed_seats.style.display = 'block'
                signed_seats.innerHTML = 'seat 7 is booked'
            }
        }
        if(seat8){
            if(od_lv.includes(8)===false){
                seats.push(8)
                signed_seats.style.display = 'none'
            }
            else{
                signed_seats.style.display = 'block'
                signed_seats.innerHTML = 'seat 8 is booked'
            }
        }
        if(seat9){
            if(od_lv.includes(9)===false){
                seats.push(9)
                signed_seats.style.display = 'none'
            }
            else{
                signed_seats.style.display = 'block'
                signed_seats.innerHTML = 'seat 9 is booked'
            }
        }
        if(seat10){
            if(od_lv.includes(10)===false){
                seats.push(10)
                signed_seats.style.display = 'none'
            }
            else{
                signed_seats.style.display = 'block'
                signed_seats.innerHTML = 'seat 10 is booked'
            }
        }
        sessionStorage.setItem('seats',seats)
    }
    if(value==='al_as'){
        if(seat1){
            if(al_as.includes(1)===false){
                seats.push(1)
                signed_seats.style.display = 'none'
            }
            else{
                signed_seats.style.display = 'block'
                signed_seats.innerHTML = 'seat 1 is booked'
            }
        }
        if(seat2){
            if(al_as.includes(2)===false){
                seats.push(2)
                signed_seats.style.display = 'none'
            }
            else{
                signed_seats.style.display = 'block'
                signed_seats.innerHTML = 'seat 2 is booked'
            }
        }
        if(seat3){
            if(al_as.includes(3)===false){
                seats.push(3)
                signed_seats.style.display = 'none'
            }
            else{
                signed_seats.style.display = 'block'
                signed_seats.innerHTML = 'seat 3 is booked'
            }
        }
        if(seat4){
            if(al_as.includes(4)===false){
                seats.push(4)
                signed_seats.style.display = 'none'
            }
            else{
                signed_seats.style.display = 'block'
                signed_seats.innerHTML = 'seat 4 is booked'
            }
        }
        if(seat5){
            if(al_as.includes(5)===false){
                seats.push(5)
                signed_seats.style.display = 'none'
            }
            else{
                signed_seats.style.display = 'block'
                signed_seats.innerHTML = 'seat 5 is booked'
            }
        }
        if(seat6){
            if(al_as.includes(6)===false){
                seats.push(6)
                signed_seats.style.display = 'none'
            }
            else{
                signed_seats.style.display = 'block'
                signed_seats.innerHTML = 'seat 6 is booked'
            }
        }
        if(seat7){
            if(al_as.includes(7)===false){
                seats.push(7)
                signed_seats.style.display = 'none'
            }
            else{
                signed_seats.style.display = 'block'
                signed_seats.innerHTML = 'seat 7 is booked'
            }
        }
        if(seat8){
            if(al_as.includes(8)===false){
                seats.push(8)
                signed_seats.style.display = 'none'
            }
            else{
                signed_seats.style.display = 'block'
                signed_seats.innerHTML = 'seat 8 is booked'
            }
        }
        if(seat9){
            if(al_as.includes(9)===false){
                seats.push(9)
                signed_seats.style.display = 'none'
            }
            else{
                signed_seats.style.display = 'block'
                signed_seats.innerHTML = 'seat 9 is booked'
            }
        }
        if(seat10){
            if(al_as.includes(10)===false){
                seats.push(10)
                signed_seats.style.display = 'none'
            }
            else{
                signed_seats.style.display = 'block'
                signed_seats.innerHTML = 'seat 10 is booked'
            }
        }
        sessionStorage.setItem('seats',seats)
    }
    let leng = sessionStorage.getItem('seats').split(',').length
    tot_price.innerHTML = `${50*leng}$`
}
document.querySelector('#book_btn').onclick = () => {
    let seats = sessionStorage.getItem('seats').split(',')
    let res_direction1 = document.getElementById('res_direction1')
    let res_date1 = document.getElementById('res_date1')
    let res_seat1 = document.getElementById('res_seat1')
    let res_direction2 = document.getElementById('res_direction2')
    let res_date2 = document.getElementById('res_date2')
    let res_seat2 = document.getElementById('res_seat2')
    let direction = sessionStorage.getItem('direction')
    let date = document.getElementById('date').value
    res_direction1.innerHTML = direction
    res_date1.innerHTML = date
    res_seat1.innerHTML = seats[0]
    res_direction2.innerHTML = direction
    res_date2.innerHTML = date
    res_seat2.innerHTML = seats[1]
}




