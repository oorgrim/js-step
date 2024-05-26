let gr1 = {
    stud1:1,
    stud2:1,
    stud3:0
};
let gr2 = {
    stud1:0,
    stud2:0,
    stud3:1
};
sessionStorage.setItem('gr1',JSON.stringify(gr1))
sessionStorage.setItem('gr2',JSON.stringify(gr2))

let a = document.querySelector('#class_btn').onclick = () => {
    let topic = document.getElementById('topic').value;
    let stud_check1 = document.getElementById('stud_id1').checked;
    let stud_check2 = document.getElementById('stud_id2').checked;
    let stud_check3 = document.getElementById('stud_id3').checked;
    let gr3 = {
        stud1:0,
        stud2:0,
        stud3:0
    };
    if(stud_check1 === true){
        gr3.stud1 = 1
    }
    if(stud_check2 === true){
        gr3.stud2 = 1
    }
    if(stud_check3 === true){
        gr3.stud3 = 1
    }
    sessionStorage.setItem('gr3',JSON.stringify(gr3))
    sessionStorage.setItem('gr3_topic',topic)
    // console.log(sessionStorage.getItem('gr3'))
}
document.querySelector('#gr_btn').onclick = () => {
    let g = document.getElementById('groups')
    let text = g.options[g.selectedIndex].value
    const gr3_data = JSON.parse(sessionStorage.getItem('gr3'))
    const gr1_data = JSON.parse(sessionStorage.getItem('gr1'))
    const gr2_data = JSON.parse(sessionStorage.getItem('gr2'))
    let gr3_topic = sessionStorage.getItem('gr3_topic')
    let Topic_class = document.getElementById('Topic_class')
    let result_pres1 = document.getElementById('result_pres1')
    let result_pres2 = document.getElementById('result_pres2')
    let result_pres3 = document.getElementById('result_pres3')
    let result = document.getElementById('result')
    if(text === 'group1'){
        if(gr1_data.stud1 === 1){
            result_pres1.innerHTML = 'Present'
        }else{
            result_pres1.innerHTML = 'Absent'
        }
        if(gr1_data.stud2 === 1){
            result_pres2.innerHTML = 'Present'
        }else{
            result_pres2.innerHTML = 'Absent'
        }
        if(gr1_data.stud3 === 1){
            result_pres3.innerHTML = 'Present'
        }else{
            result_pres3.innerHTML = 'Absent'
        }
    }
    if(text === 'group2'){
        if(gr2_data.stud1 === 1){
            result_pres1.innerHTML = 'Present'
        }else{
            result_pres1.innerHTML = 'Absent'
        }
        if(gr2_data.stud2 === 1){
            result_pres2.innerHTML = 'Present'
        }else{
            result_pres2.innerHTML = 'Absent'
        }
        if(gr2_data.stud3 === 1){
            result_pres3.innerHTML = 'Present'
        }else{
            result_pres3.innerHTML = 'Absent'
        }
    }
    if(text === 'group3'){
        if(gr3_data.stud1 === 1){
            result_pres1.innerHTML = 'Present'
        }else{
            result_pres1.innerHTML = 'Absent'
        }
        if(gr3_data.stud2 === 1){
            result_pres2.innerHTML = 'Present'
        }else{
            result_pres2.innerHTML = 'Absent'
        }
        if(gr3_data.stud3 === 1){
            result_pres3.innerHTML = 'Present'
        }else{
            result_pres3.innerHTML = 'Absent'
        }
    }
    Topic_class.innerHTML = gr3_topic
    result.style.display = 'block'
}