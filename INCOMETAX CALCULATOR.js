const button = document.querySelector('.button')
button.addEventListener("click", calculate());
function calculate() {
const income = Number(document.querySelector("#income").value);
37
console.log(income)
// let gst = document.getElementById("gst").value;
let tax = 0.0;
let net_income = 0.0;
if (income <= 250000) {
tax = 0;
} else if (income <= 500000) {
tax = (income - 250000) * 0.05;
} else if (income <= 750000) {
tax = 12500 + (income - 500000) * 0.1;
} else if (income <= 1000000) {
tax = 37500 + (income - 750000) * 0.15;
} else if (income <= 1250000) {
tax = 75000 + (income - 1000000) * 0.2;
} else if (income <= 1500000) {
tax = 125000 + (income - 1250000) * 0.25;
} else {
tax = 187500 + (income - 1500000) * 0.3;
}
net_income = income + tax;
// let gst_amount = (gst / 100) * net_income;
// let total_income = net_income + gst_amount;
document.getElementById("result").innerHTML =
"<br>Tax Amount: " +
tax +
"<br>Total inclusive Tax : " +
net_income.toFixed(2);
}