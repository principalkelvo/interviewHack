const people = [{
    userName: "admin@interviewhack.com",
    password: "adminHack",
}, ];
var user = {};


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

login.addEventListener('click', function () {
    var emailValidate = emailField.value;
    passwordValidate = passwordField.value;

    // console.log(passwordField.length)

    if (!validateEmail(emailValidate)) {
        emailField.style.borderColor = "red";
        alert("Email is not valid");
    } else {
        console.log("Email is valid");
    }
    if (passwordValidate.length < 6) {
        passwordField.style.borderColor = "red";
        alert("Password is too short");
        return;
    } else {
        console.log("Password is valid");
    }

    for (var i = 0; i < people.length; i++) {
        if (people[i].userName == emailValidate && people[i].password == passwordValidate) {
            alert("Login Successful");
            window.location.href = "../../index.html";
        }
        else {
            emailField.style.borderColor = "red";
            passwordField.style.borderColor = "red";

            console.log(people)

            alert("Please register first");
            // window.location.href = "../pages/register.html";

        }
    }

    console.log('login');
})

register.addEventListener('click', function () {
    var emailValidate = email.value;
    var passwordValidate = password.value;
    var password2Validate = password2.value;
    if (!validateEmail(emailValidate)) {
        emailField.style.borderColor = "red";
        alert("Email is not valid");
    } else {
        console.log("Email is valid");
    }
    if (passwordValidate.length < 6) {
        password.style.borderColor = "red";
        alert("Password is too short");
        return;
    } else if (passwordValidate != password2Validate) {
        password2.style.borderColor = "red";
        alert("Password does not match");
        return;
    } else if (passwordValidate == password2Validate) {
        console.log("Password is valid");
    }

    // validate email 
    for (var i = 0; i < people.length; i++) {
        if (people[i].userName == emailValidate) {
            alert("Email already exists");
        } else {
            console.log("Email is invalid");
        }

    }

    // add new user to people array
    for (var i = 0; i < people.length; i++)
    {if (people[i].userName != emailValidate) {
        let newUser = {
            userName: emailValidate,
            password: passwordValidate,
        }
        people.push(newUser);
        alert("Registration Successful");
    }
}
});