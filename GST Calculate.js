function calculate() {
    // Get amount and GST rate
    var amount = parseFloat(document.getElementById("amount").value);
    var number = parseFloat(document.getElementById("number").value);
    // Calculate GST amount and total amount
    var gstAmount = amount * number;
    var totalAmount = amount + gstAmount;
    // Update the result
    document.getElementById("result").textContent = amount.toFixed(2);
    document.getElementById("gstAmount").textContent = gstAmount.toFixed(2);
    document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
    }