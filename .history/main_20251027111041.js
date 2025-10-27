const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const calculate = document.getElementById("calculate");


function calculateTotal() {
    const billValue = billInput;
    const tipValue = tipInput;
    console.log(billValue + tipValue);
}

calculate.addEventListener("click", calculateTotal)