var em=document.getElementById('exampleInputEmail1');
var pwd=document.getElementById('exampleInputPassword1');
var err1=document.getElementById('err1');
var err2=document.getElementById('err2');
var nm=document.getElementById("exampleInputnumber");

function validate(){
    let isEmailValid = validateem();
    let isPasswordValid = validatepwd();
    let isPhoneValid = validatenm();
    
    return isEmailValid && isPasswordValid && isPhoneValid;
}

function validateem(){
    let regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(regEx.test(em.value)){
        err1.innerText="Valid Email";
        err1.style.color="green";
        return true;
    }
    if(em.value.trim()==""){
        err1.innerText="E mail field cannot be empty";
        return false;
    }
    else{
        err1.innerText="Invalid Email";
        err1.style.color="red";
        return false;
    }
}

function validatepwd() {
    let pwdregEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (pwdregEx.test(pwd.value)) {
        return true;
    }
    if (pwd.value.trim() === "") {
        err2.innerText = "Password field cannot be empty";
        err2.style.color = "red";
        return false;
    } 
    if (pwd.value.length >= 12) {
        err2.innerText = "Strong";
        err2.style.color = "green";
        return true;
    } else if (pwd.value.length >= 10) {
        err2.innerText = "Medium";
        err2.style.color = "orange";
        return true;
    } else if (pwd.value.length >= 8) {
        err2.innerText = "Weak";
        err2.style.color = "red";
        return true;
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
