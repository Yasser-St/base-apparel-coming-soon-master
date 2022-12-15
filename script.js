// Varaibles
const inputEmail   = document.querySelector("#email");
const errorMessage = document.querySelector("#error-message");
const errorSign    = document.querySelector("#error-sign");
const submitBtn    = document.querySelector("#submit-btn");

// validation function

submitBtn.addEventListener("click",()=> {

  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(inputEmail.value.match(mailformat)){
    document.forms['form1'].submit();
    
  }else if(inputEmail.value === ""){
    errorSign.style.display ="block";
    inputEmail.style.borderColor = "#f96262";
    errorMessage.innerText = "Whoops! It looks like you forgot to add your email";
    
  }else{
    errorMessage.innerText = "Please provide a valid email address";
    errorSign.style.display ="block";
    inputEmail.style.borderColor = "#f96262";
  }


});