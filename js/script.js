function validateForm() {
    var login = validateLogin();
    var password = validatePassword();
    var email = validateEmail();

    if (login == true && password == true && email == true) {
        alert("You are now registered! Data saved.");
        return true;
    } else {
        alert("Registration failed!");
        return false;
    }
}

function validateLogin() {
    var logName = document.getElementById("login");
    
    if (logName.value == '') {
        logName.style.backgroundColor = "pink";
        return false;
    } else {
        logName.style.backgroundColor = "lightgreen";
        return true;
    }
}

function validatePassword() {
    var pass1 = document.getElementById("pass");
    var pass2 = document.getElementById("confirmPass");

    if (pass2.value != pass1.value) {
        pass2.style.backgroundColor = "pink"
        document.getElementById("wrongPass").innerHTML = "Passwords are not the same";
        return false;
    } else {
        pass2.style.backgroundColor = "lightgreen"
        document.getElementById("wrongPass").innerHTML = '';
        return true;
    }
}

function changeColor(){
    var firstPass = document.getElementById("pass");

    if (firstPass.value == '') {
       firstPass.style.backgroundColor = "pink";
    } else {
        firstPass.style.backgroundColor = "lightgreen";
    }
}

function validateEmail() {
    var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var mail = document.getElementById("email");

    if (!mail.value.match(pattern)) {
        mail.style.backgroundColor = "pink";
        document.getElementById("wrongEmail").innerHTML = "Mail is wrong";
        return false;
    }
    else {
        mail.style.backgroundColor = "lightgreen";
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