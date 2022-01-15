let num1 = "";
let num2 = "";
let op = "";
let answer = 0;

function insNum(x){
    op === "" ? num1 += "" + x : num2 += "" + x;
console.log("num1: " + num1);
console.log("num2: " + num2);
}

function insOp(y){
    num1 === "" ? console.log("Num1 needs to be set first!") : op === "" ? op = y : calculate(y);;
    
    console.log(op);

}

function calculate(){
    switch (op) {
        case "plus":
            answer = parseFloat(num1) + parseFloat(num2);
            num1 = answer;
            num2 = 0;
            document.getElementsByClassName("display")
            break;
        case "minus":
            answer = parseFloat(num1) - parseFloat(num2);
            num1 = answer;
            num2 = 0;
            break;
        case "divide":
            if(num2 == 0){ alert("Do Not Divide By 0!"); break; }
            answer = parseFloat(num1) / parseFloat(num2);
            num1 = answer;
            num2 = 0;
            break;
        case "multiply":
            answer = parseFloat(num1) * parseFloat(num2);
            num1 = answer;
            num2 = "";
            break;
        default:
            break;
    }
    document.getElementsByClassName("display").innerHTML = answer;
    
}
function addPeriod() {
    op === "" ? num1 += "." : num2 += ".";

}
function doClear() {
    num1 = "";
    num2 = "";
    op = "";
    answer = 0;
    console.log("num1: " + num1 + " num2: " + num2 + " op: " + op + " answer: " + answer); 
}
