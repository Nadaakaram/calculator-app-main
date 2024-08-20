
let display = document.getElementById('display');
let buttons = document.querySelectorAll ('button');



const operation = ['+' , '-', '/' , '*' , '='];














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

            if (result === Infinity || result === -Infinity || result === undefined ) {
                display.value = 'Error : Invalid input!';
            }
            if (display.value === Nan) {
                display.value = 'Error : Invalid input!';
            }
            else {
                display.value = result;
            }
        } catch(error){
            display.value = 'Error : Invalid input!';
        }
    }





