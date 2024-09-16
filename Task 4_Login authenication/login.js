// Toggle the mobile menu
function myMenuFunction() {
    var menu = document.getElementById("navMenu");
    menu.classList.toggle("responsive");
}

// Switch between login and register forms
function showLogin() {
    document.getElementById("login-container").style.display = "block";
    document.getElementById("register-container").style.display = "none";
}

function showRegister() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("register-container").style.display = "block";
}

// Basic login validation
function validateLogin() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if (username === "" || password === "") {
        alert("Please fill in both fields.");
        return false;
    }

    alert("Login successful!");
    return true;
}

// Basic registration validation
function validateRegister() {
    const firstname = document.getElementById("register-firstname").value;
    const lastname = document.getElementById("register-lastname").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    if (firstname === "" || lastname === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }

    alert("Registration successful!");
    return true;
}
