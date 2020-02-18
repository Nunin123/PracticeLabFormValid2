function validateForm() {
    var login = validateLogin();
    var password = validatePassword();
    var confirmPass = confirmPass();
    var email = validateEmail();

    if (login == false && password == false && confirmPass == false && email == false) {
        alert("Registration failed!");
        return false;
    } else {
        alert("You are now registered! Data saved.");
        return true;
    }
}

function validateLogin() {
    if (document.getElementById("login").value == '') {
        document.getElementById("login").style.backgroundColor = "pink";
        return false;
    } else {
        document.getElementById("login").style.backgroundColor = "lightgreen";
        return true;
    }
}

function validatePassword(){
    if (document.getElementById("pass").value == '') {
        document.getElementById("pass").style.backgroundColor = "pink";
    } else {
        document.getElementById("pass").style.backgroundColor = "lightgreen";
    }
}

function confirmPass() {
    if (document.getElementById("confirmPass").value != document.getElementById("pass").value) {
        document.getElementById("wrongPass").innerHTML = "Passwords are not the same";
        document.getElementById("confirmPass").style.backgroundColor = "pink";
        return false;
    } else {
        document.getElementById("wrongPass").innerHTML = '';
        document.getElementById("confirmPass").style.backgroundColor = "lightgreen";
        return true;
    }
}

function validateEmail() {
    var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!pattern.test(document.getElementById("email").value)) {
        document.getElementById("email").style.backgroundColor = "pink";
        document.getElementById("wrongEmail").innerHTML = "Mail is wrong";
        return false;
    }
    else {
        document.getElementById("email").style.backgroundColor = "lightgreen";
        document.getElementById("wrongEmail").innerHTML = "";
        return true;
    }
}

function passwordSec() {
    if (document.getElementById("pass").value.length == 0) {
        document.getElementById("security").innerHTML = "";
    } else if (document.getElementById("pass").value.length >=1 && document.getElementById("pass").value.length <=5) {
        document.getElementById("security").innerHTML = "Weak";
    } else if (document.getElementById("pass").value.length >=6 && document.getElementById("pass").value.length <=9) {
        document.getElementById("security").innerHTML = "Medium";
    } else {
        document.getElementById("security").innerHTML = "Strong";
    }
}