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

// Login validation and AJAX request
async function validateLogin() {
    const email = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if (!email || !password) {
        alert("Please fill in both fields.");
        return;
    }

    const res = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (data.token) {
        alert('Login successful!');
        localStorage.setItem('token', data.token);
    } else {
        alert(data.msg);
    }
}

// Registration validation and AJAX request
async function validateRegister() {
    const firstname = document.getElementById("register-firstname").value;
    const lastname = document.getElementById("register-lastname").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    if (!firstname || !lastname || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    const res = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstname, lastname, email, password })
    });

    const data = await res.json();
    alert(data.msg);
}
