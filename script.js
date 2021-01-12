'use strict';
let gender;

function errorStatus(iconClass, spanClass, elementId, errorType){
    document.querySelector('.'+iconClass).classList.remove('fa-check-square-o');
    document.querySelector('.'+spanClass).textContent=errorType;
    document.querySelector('.'+spanClass).classList.add('fa', 'fa-exclamation-triangle');
    if(elementId!='gender')
        document.getElementById(elementId).style.boxShadow = '0 0 4px 0 Red';
}

function validStatus(iconClass, spanClass, elementId){
    document.querySelector('.'+spanClass).textContent="";
    document.querySelector('.'+spanClass).classList.remove('fa', 'fa-exclamation-triangle');
    document.querySelector('.'+iconClass).classList.add('fa-check-square-o');
    if(elementId!='gender')
        document.getElementById(elementId).style.boxShadow = '0 0 4px 0 #00cc44';
}

document.querySelector('.check').addEventListener('click', function(){
    const namePattern = /^[a-zA-Z]*$/;
    const phonePattern = /^[0-9]*$/;
    const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const phoneNo = document.getElementById('phno');
    const email = document.getElementById('email');
    const address = document.getElementById('address');
    const radioGender = document.getElementsByName('gender');
    for(let i = 0; i < radioGender.length; i++)
        if(radioGender[i].checked)
            gender = radioGender[i].value;

    //first name validation        
    if(!firstName.value)
        errorStatus('ifname','fname-span','fname','Required');
    else if(!namePattern.test(firstName.value))
        errorStatus('ifname','fname-span','fname','Only Alphabets Accepted');
    else
        validStatus('ifname','fname-span','fname');

    //last name validation 
    if(!lastName.value)
        errorStatus('ilname','lname-span','lname','Required');
    else if(!namePattern.test(lastName.value))
        errorStatus('ilname','lname-span','lname','Only Alphabets Accepted');
    else
        validStatus('ilname','lname-span','lname');

    //phone no validation 
    if(!phoneNo.value)
        errorStatus('ic','phno-span','phno','Required');
    else if(!phonePattern.test(phoneNo.value))
        errorStatus('ic','phno-span','phno','Invalid Format');
    else if(phoneNo.value.length>10 || phoneNo.value.length<10)
        errorStatus('ic','phno-span','phno','Length Should be 10 digit');
    else
        validStatus('ic','phno-span','phno');
    
    //gender validation
    if(!gender)
        errorStatus('igender','gender-span','gender','Required');
    else
        validStatus('igender','gender-span','gender');

    //email validation
    if(!email.value)
        errorStatus('iemail','email-span','email','Required');
    else if(!emailPattern.test(email.value))
        errorStatus('iemail','email-span','email','Ivalid Format');
    else
        validStatus('iemail','email-span','email');

    //address validation
    if(!address.value)
        errorStatus('iaddress','addr-span','address','Required');
    else
        validStatus('iaddress','addr-span','address');
});

document.querySelector('.cancel').addEventListener('click', function(){
    window.location.reload();
});