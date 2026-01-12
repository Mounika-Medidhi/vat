let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
    document.getElementById("vat").innerText = "0.00";
    document.getElementById("total").innerText = "0.00";
}

function removeLast() {
    display.value = display.value.slice(0, -1);
}

function validateInput(input) {
    // Allow only numbers and one decimal point
    input.value = input.value.replace(/[^0-9.]/g, "");

    // Prevent multiple dots
    if ((input.value.match(/\./g) || []).length > 1) {
        input.value = input.value.slice(0, -1);
    }
}

function calculateVAT() {
    const amount = parseFloat(display.value);
    const rate = document.getElementById("country").value;

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }

    const vat = amount * rate;
    const total = amount + vat;

    document.getElementById("vat").innerText = vat.toFixed(2);
    document.getElementById("total").innerText = total.toFixed(2);
}
