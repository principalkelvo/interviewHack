const people = [
    {
        userName: "admin@interviewhack.com",
        password: "adminHack",
    },
];


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

    // console.log(passwordField.length)

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
        return;
    }else{
        console.log("Password is valid");
    }

    for(var i=0;i<people.length;i++){
        if(people[i].userName==emailValidate && people[i].password==passwordField){
            alert("Login Successful");
            window.location.href = "../../index.html";
        }else{
            emailField.style.borderColor = "red";
            passwordField.style.borderColor = "red";    
            alert("Login Failed");
            // window.location.href = "../pages/register.html";

        }
    }
    
    console.log('login');
})

register.addEventListener('click', function() {
    var emailValidate=emailField.value;
    if(!validateEmail(emailValidate)){
        emailField.style.borderColor = "red";
        alert("Email is not valid");
        return;
    }
    else{
        console.log("Email is valid");
    }
    console.log('register');
});
