const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validEamil = false;
let validName = false;
let validphone = false;
$("#failed").hide();
$("#success").hide();
name.addEventListener("blur", () => {
  let regex = /^[A-Za-z]([0-9a-zA-Z]){3,10}$/;
  let str = name.value;
  if (regex.test(str)) {
    name.classList.remove("is-invalid");
    validName = true;
  } else {
    name.classList.add("is-invalid");
    validName = false;
  }
});

email.addEventListener("blur", () => {
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  if (regex.test(str)) {
    email.classList.remove("is-invalid");
    validEamil = true;
  } else {
    email.classList.add("is-invalid");
    validEamil = false;
  }
});

phone.addEventListener("blur", () => {
  let regex = /([0-9]){10}$/;
  let str = phone.value;
  if (regex.test(str)) {
    phone.classList.remove("is-invalid");
    validphone = true;
  } else {
    phone.classList.add("is-invalid");
    validphone = false;
  }
});

let submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (validEamil && validName && validphone) {
    let success = document.getElementById("success");
    success.classList.add("show");
    failed.classList.remove("show");
    $("#failed").hide();
    $("#success").show();
  } else {
    let failed = document.getElementById("failed");
    failed.classList.add("show");
    success.classList.remove("show");
    $("#failed").show();
    $("#success").hide();
  }
});
