const btnE1 = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");


function calculateTotal() {
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    console.log(billValue + tipValue);
}

btnE1.addEventListener("click", calculateTotal)