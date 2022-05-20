var submitbtn=document.getElementById("submit");
var name=document.getElementById("name");
var text=document.getElementById("text");
var email=document.getElementById("email");
var number=document.getElementById("number");

function validateEmail(emailValidate) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailValidate).toLowerCase());
}

submitbtn.addEventListener("click",function(){

    var emailValidate = email.value;
    if (!validateEmail(emailValidate)) {
        email.style.borderColor = "red";
        alert("Email is not valid");
    } else {
        console.log("Email is valid");
    }
    if (name.value.length < 3) {
        name.style.borderColor = "red";
        alert("Name is too short");
        return;
    } else {
        console.log("Name is valid");
    }
    if(name.value==""){
        alert("Please enter your name");
    }
    else if(text.value==""){
        alert("Please enter your message");
    }
    else if(email.value==""){
        alert("Please enter your email");
    }
    else if(number.value==""){
        alert("Please enter your number");
    }
    else{
    alert("Thank you for your feedback!");
    window.location.href="../../index.html"
    }
})
