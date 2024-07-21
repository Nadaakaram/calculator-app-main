
let display = document.getElementById('display');
console.log(display);

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
        display.value = display.value + " = " + eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    }
}