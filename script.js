
let display = document.getElementById('display');
let buttons = document.querySelectorAll ('button');




function appendToDisplay(input){
    display.value += input;
}


function clearDisplay(){
    display.value = '';
}


function del(){
    display.value = display.value.substring(0, display.value.length - 1);
}


function calculateResult(){
        try{
            let result = Number(eval(display.value));

            if (result === Infinity || result === -Infinity || result === undefined || isNaN(result) ) {
                display.value = 'Error : Invalid input!';
            }
            else {
                display.value = result;
            }
        } catch(error){
            display.value = 'Error : Invalid input!';
        }
    }

function switchTheme() {
    let themeCss = document.getElementById('theme');

    if (themeCss.getAttribute('href') === 'styletheme1.css') {
        themeCss.setAttribute('href' , 'styletheme2.css');
    } else {
        themeCss.setAttribute('href' , 'styletheme1.css')
    }
}






