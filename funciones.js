console.log("Esta es una calculadora");

let inputNum1 = document.getElementById("num1");
let inputNum2 = document.getElementById("num2");
let inputResult = document.getElementById("result");

let btnSum = document.getElementById("sum");
let btnRest = document.getElementById("rest");
let btnDiv = document.getElementById("div");
let btnMult = document.getElementById("mult");

const sum = (a,b) => a+b;
const rest = (a,b) => a-b;
const div = (a,b) => a/b;
const mult = (a,b) => a*b;

const suma = () => {
    let num1 = parseFloat(inputNum1.value)
    let num2= parseFloat(inputNum2.value)
    inputResult.value = sum(num1, num2)
}
const resta = () => {
    inputResult.value = rest(inputNum1.value, inputNum2.value)
}
const division = () => {
    inputResult.value = div(inputNum1.value, inputNum2.value)
}
const multiplicacion = () => {
    inputResult.value = mult(inputNum1.value, inputNum2.value)
}

btnSum.addEventListener("click", suma);
btnRest.addEventListener("click", resta);
btnDiv.addEventListener("click", division);
btnMult.addEventListener("click", multiplicacion);