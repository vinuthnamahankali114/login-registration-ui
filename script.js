// Register Password Toggle
function togglePassword() {

    let password = document.getElementById("password");

    if(password){

        if(password.type === "password"){
            password.type = "text";
        }
        else{
            password.type = "password";
        }

    }
}

// Login Password Toggle
function togglelogin() {

    let pass = document.getElementById("loginPass");

    if(pass.type === "password"){
        pass.type = "text";
    }
    else{
        pass.type = "password";
    }

}

// Live Password Validation
const passwordField = document.getElementById("password");

if(passwordField){

    passwordField.addEventListener("keyup", function(){

        let password = passwordField.value;

        const length = document.getElementById("length");
        const upper = document.getElementById("upper");
        const lower = document.getElementById("lower");
        const number = document.getElementById("number");

        if(length)
            length.classList.toggle("valid", password.length >= 6);

        if(upper)
            upper.classList.toggle("valid", /[A-Z]/.test(password));

        if(lower)
            lower.classList.toggle("valid", /[a-z]/.test(password));

        if(number)
            number.classList.toggle("valid", /[0-9]/.test(password));

    });

}

// Registration Validation
function validateForm(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if(name === "" || email === "" || password === "" || confirm === ""){
        alert("Please fill all fields!");
        return;
    }

    if(password.length < 6){
        alert("Password must be at least 6 characters!");
        return;
    }

    if(!/[A-Z]/.test(password)){
        alert("Password must contain an uppercase letter!");
        return;
    }

    if(!/[a-z]/.test(password)){
        alert("Password must contain a lowercase letter!");
        return;
    }

    if(!/[0-9]/.test(password)){
        alert("Password must contain a number!");
        return;
    }

    if(password !== confirm){
        alert("Passwords do not match!");
        return;
    }

    alert("Registration Successful! ✅");

    window.location.href = "index.html";

}

// Login Validation
function login(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("loginPass").value;

    if(email.trim() === "" || password.trim() === ""){
        alert("Please fill all fields!");
        return;
    }

    alert("Login Successful! ✅");

}
