// Display input values
function dis(val) { 
    document.getElementById("result").value += val;
} 

// Function to solve the expression
function solve() { 
    let x = document.getElementById("result").value;

    // Replace ^ operator with the exponentiation operator
    if (x.includes('^')) {
        let parts = x.split('^');
        x = `${parts[0]} ** ${parts[1]}`;
    }

    let y = eval(x); 
    document.getElementById("result").value = y;
} 

// Clear the entire display
function clr() { 
    document.getElementById("result").value = ""; 
} 

// Clear the last digit
function clearLastDigit() {
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
    if (document.getElementById("result").value === '') {
        document.getElementById("result").value = '0';
    }
}

// Square root function
function squareRoot() {
    let currentValue = document.getElementById("result").value;
    if (currentValue) {
        let result = Math.sqrt(parseFloat(currentValue));
        document.getElementById("result").value = result;
    }
}

// Function to raise a number to a power
function power(base, exponent) {
    return Math.pow(base, exponent);
}



