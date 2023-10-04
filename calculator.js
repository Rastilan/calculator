let num1 = "";
let num2 = "";
let op = "";
let answer = 0;

function insNum(x){
    
    op === "" ? num1 += "" + x : num2 += "" + x;
    document.getElementById("display").innerHTML = num1 + op + num2;

}

function insOp(y){
    num1 === "" ? console.log("Num1 needs to be set first!") : op === "" ? op = y : calculate(y);
    document.getElementById("display").innerHTML = num1 + op + num2;

}

function calculate(){
    switch (op) {
        case "+":
            if(num2 == ""){ break; }
            answer = parseFloat(num1) + parseFloat(num2);
            num1 = String(answer);
            num2 = String("");
            document.getElementById("display").innerHTML = answer;
            break;
        case "-":
            if(num2 == ""){ break; }
            answer = parseFloat(num1) - parseFloat(num2);
            num1 = String(answer);
            num2 = String("");
            document.getElementById("display").innerHTML = answer;
            break;
        case "/":
            if(num2 == ""){ break; }
            if(num2 == 0){ alert("Do Not Divide By 0!"); doClear(); break; }
            answer = parseFloat(num1) / parseFloat(num2);
            num1 = String(answer);
            num2 = String("");
            document.getElementById("display").innerHTML = answer;
            break;
        case "X":
            if(num2 == ""){ break; }
            answer = parseFloat(num1) * parseFloat(num2);
            num1 = String(answer);
            num2 = String("");
            document.getElementById("display").innerHTML = answer;
            break;
        
        default:
            console.log("default ran");
            break;
    }
    
    
    
}
function addPeriod() {
    op === "" ? num1 += "." : num2 += ".";

}
function doClear() {
    num1 = "";
    num2 = "";
    op = "";
    answer = 0;
    document.getElementById("display").innerHTML = answer;
}
