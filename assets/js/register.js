


var login = document.getElementById("login");
var register = document.getElementById('register');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');
var emailField = document.getElementById('emailL');
var passwordField = document.getElementById('passwordL');

function validateEmail(emailValidate) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailValidate).toLowerCase());
}

login.addEventListener('click', function() {
    var emailValidate=emailField.value;
    passwordField= passwordField.value;
    if(!validateEmail(emailValidate)){
        emailField.style.borderColor = "red";
        alert("Email is not valid");
        return;
    }
    else{
        console.log("Email is valid");
    }
    if(passwordField.length<6){
        passwordField.style.borderColor = "red";
        alert("Password is too short");
    }
    
    console.log('login');
});

register.addEventListener('click', function() {
    console.log('register');
});
