var em=document.getElementById('exampleInputEmail1');
var pwd=document.getElementById('exampleInputPassword1');
var err1=document.getElementById('err1');
var err2=document.getElementById('err2');
var nm=document.getElementById("exampleInputnumber");


function validateem() {
    if(em.value.trim() ==""){
        err1.innerText = "Please fill this part";
        err1.style.color="red";
        return false;
    } 
}

function validatepwd(){
    if(pwd.value.trim()==""){
        err2.innerText = "Please fill this part";
        err2.style.color="red";
        return false;
    }
    else if (pwd.value.length >= 12 ) {
        err2.innerText = "Strong";
        err2.style.color = "green";
        return true;
    } 
    else if (pwd.value.length == 10 || pwd.value.length == 11) {
        err2.innerText = "Medium";
        err2.style.color = "orange";
        return true;
    } 
    else if (pwd.value.length >= 8) {
        err2.innerText = "Weak";
        err2.style.color = "red";
        return true;
    }
    else{
        err2.innerText = "Check your password";
        err2.style.color = "red";
    } 
}

function validatenm(){
    const phonePattern = /^(?:\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})$/;
    if(phonePattern.test(nm.value)){
        err3.innerText="Valid Phone Number";
        err3.style.color="green";
        return true;
    }
    if(nm.value.trim() ==""){
        err3.innerText="Phone Number cannot be empty";
        err3.style.color="red";
        return false;
    }
    else{
        err3.innerText="Inalid Phone Number";
        err3.style.color="red";
        return false;
    }
}

function validate(){
    let regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let pwdregEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let phonePattern = /^(?:\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})$/;
    if (regEx.test(em.value) && pwdregEx.test(pwd.value) && phonePattern.test(nm.value)){
        return true;
    }
    else{
        alert("Fill the form correctly");
        return false;
    }
}
