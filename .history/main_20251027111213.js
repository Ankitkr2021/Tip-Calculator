const btnE1 = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");


function calculateTotal() {
    const billValue = billInput;
    const tipValue = tipInput;
    console.log(billValue);
}

btnE1.addEventListener("click", calculateTotal)