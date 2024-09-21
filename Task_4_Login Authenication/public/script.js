document.getElementById('toggle-form').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('auth-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('form-title').textContent = 'Sign Up Form'; // Change title to Sign Up
});

document.getElementById('toggle-form-login').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('auth-form').style.display = 'block';
    document.getElementById('form-title').textContent = 'Login Form'; // Change title to Login
});
