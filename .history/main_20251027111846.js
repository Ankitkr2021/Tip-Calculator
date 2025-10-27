const btnE1 = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalTip = document.getElementById("total")

function calculateTotal() {
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    console.log(Number(billValue) + Number(tipValue));
}

totalTip.innerHTML(calculateTotal);
btnE1.addEventListener("click", calculateTotal)