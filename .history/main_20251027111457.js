const btnE1 = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");


function calculateTotal() {
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const total = billValue ++ tipValue;
    console.log(total);
}

btnE1.addEventListener("click", calculateTotal)