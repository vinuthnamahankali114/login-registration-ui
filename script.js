function toggleLogin() {
    let pass = document.getElementById("loginPass");

    if(pass.type === "password"){
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}

function validateForm() {

    let password =
        document.getElementById("password").value;

    let confirm =
        document.getElementById("confirm").value;

    if(password !== confirm){
        alert("Passwords do not match");
        return;
    }

    alert("Registration Successful");
}

document.querySelector(".btn-primary").addEventListener("click", function() {
    alert("Login Successful!");
});