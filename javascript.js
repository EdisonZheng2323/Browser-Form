function validateSubmit(){
  const form = document.querySelector("#form");
  const email = document.querySelector("#email");
  const country = document.querySelector("#country");
  const zipcode = document.querySelector("#zipcode");
  const password = document.querySelector("#password");
  const confirm = document.querySelector("#confirm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(email.validity.valueMissing || email.validity.typeMismatch || country.validity.valueMissing || country.validity.typeMismatch || zipcode.validity.valueMissing || zipcode.validity.typeMismatch || password.validity.valueMissing || password.validity.typeMismatch || confirm.validity.valueMissing || confirm.validity.typeMismatch){
      console.log("Fix your errors!");
    }
    else{
      console.log("High five!");
    }
  })
}

function validation(){
  const email = document.querySelector("#email");
  const country = document.querySelector("#country");
  const zipcode = document.querySelector("#zipcode");
  const password = document.querySelector("#password");
  const confirm = document.querySelector("#confirm");
  email.addEventListener("blur", () => {
    if(email.validity.typeMismatch  || email.validity.valueMissing){
      email.setCustomValidity("I am expecting an email!");
      email.reportValidity();
    }
    else{
      email.setCustomValidity("");
    }
  })
  country.addEventListener("blur", () => {
    if(country.validity.typeMismatch  || country.validity.valueMissing){
      country.setCustomValidity("I am expecting a country!");
      country.reportValidity();
    }
    else{
      country.setCustomValidity("");
    }
  })
  zipcode.addEventListener("blur", () => {
    if(zipcode.validity.typeMismatch  || zipcode.validity.valueMissing){
      zipcode.setCustomValidity("I am expecting a zipcode!");
      zipcode.reportValidity();
    }
    else{
      zipcode.setCustomValidity("");
    }
  })
  password.addEventListener("blur", () => {
    if(password.validity.typeMismatch  || password.validity.valueMissing){
      password.setCustomValidity("I am expecting a passowrd!");
      password.reportValidity();
    }
    else{
      password.setCustomValidity("");
    }
  })
  confirm.addEventListener("blur", () => {
    if(confirm.validity.typeMismatch  || confirm.validity.valueMissing){
      confirm.setCustomValidity("I am expecting the same password!");
      confirm.reportValidity();
    }
    else{
      confirm.setCustomValidity("");
    }
  })
}

validation();
validateSubmit();

