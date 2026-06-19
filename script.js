// Show / Hide Password
function togglePassword() {
    let password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

// Live Password Validation
let passwordField = document.getElementById("password");

passwordField.addEventListener("keyup", function () {

    let password = passwordField.value;

    document.getElementById("length").classList.toggle(
        "valid",
        password.length >= 6
    );

    document.getElementById("upper").classList.toggle(
        "valid",
        /[A-Z]/.test(password)
    );

    document.getElementById("lower").classList.toggle(
        "valid",
        /[a-z]/.test(password)
    );

    document.getElementById("number").classList.toggle(
        "valid",
        /[0-9]/.test(password)
    );
});

// Register Validation
function validateForm() {

    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        return;
    }

    if (!/[A-Z]/.test(password)) {
        alert("Password must contain an uppercase letter!");
        return;
    }

    if (!/[a-z]/.test(password)) {
        alert("Password must contain a lowercase letter!");
        return;
    }

    if (!/[0-9]/.test(password)) {
        alert("Password must contain a number!");
        return;
    }

    if (password !== confirm) {
        alert("Passwords do not match!");
        return;
    }

    alert("Registration Successful! ✅");
}

// Login Button
function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("loginPass").value;

    if (email === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }

    alert("Login Successful! ✅");
}
