const btnE1 = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalTip = document.getElementById("total")

function calculateTotal() {
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100);
    console.log(totalValue);
    totalTip.innerText = calculateTotal()
}

btnE1.addEventListener("click", calculateTotal)