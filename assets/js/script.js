var submitbtn=document.getElementById("submit");
var name=document.getElementById("name");
var text=document.getElementById("text");
var email=document.getElementById("email");
var number=document.getElementById("number");

submitbtn.addEventListener("click",function(){
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
    }
})
