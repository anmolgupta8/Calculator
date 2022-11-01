var display = document.getElementById('display');
var buttons = document.querySelectorAll('button');
var displayText = "";
for(let button of buttons){
    button.addEventListener('click', function(event){
        buttonText = event.target.innerText;
        if(buttonText == 'AC'){
            display.value = "";
            displayText = "";
        }
        else if(buttonText == '+/-'){
            if(displayText.charAt(0) == '-'){
                let temp1 = displayText.substring(1);
                displayText = temp1;
                display.value = displayText;
            }
            else{
                let temp2 = "-" + displayText;
                displayText = temp2;
                display.value = displayText;
            }
        }
        else if(buttonText == '='){
            let perIdx = -1;
            for(let i=0;i<displayText.length;i++){
                if(displayText.charAt(i) == '%'){
                    perIdx = i;
                    break;
                }
            }
            if(perIdx != -1){
                let op1 = eval(displayText.substring(0,perIdx));
                let op2 = eval(displayText.substring(perIdx+1));
                display.value = (op1/100)*op2;
            }
            else display.value = eval(displayText);
        }
        else{
            displayText+=buttonText;
            display.value = displayText;
        }
    });
}