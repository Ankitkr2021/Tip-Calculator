const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const total = document.getElementById("total");
const calculate = document.getElementById("calculate");


function calculateTotal() {
    console.log(bill + tip);
}

calculate.addEventListener("click", calculateTotal)