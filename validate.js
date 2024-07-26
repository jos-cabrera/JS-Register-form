const email = document.getElementById("email");
const password = document.getElementById("password");
const retypePassword = document.getElementById("retype-password");
const error = document.getElementById("error");

function resetErrorStyles() {
  email.style.borderColor = "rgb(129, 129, 129)";
  password.style.borderColor = "rgb(129, 129, 129)";
  retypePassword.style.borderColor = "rgb(129, 129, 129)";
  error.innerHTML = "";
}

email.addEventListener("input", resetErrorStyles);
password.addEventListener("input", resetErrorStyles);
retypePassword.addEventListener("input", resetErrorStyles);

function verifyForm() {
  return verifyEmail() && verifyPassword();
}

function verifyEmail() {
  let emailRegex = /^\w+@\w+\.[a-z]+/;

  if (!emailRegex.test(email.value)) {
    email.style.borderColor = "rgb(226, 33, 33)";
    error.innerHTML = "Email format: user@mail.domain";
    return false;
  } else {
    email.style.borderColor = "rgb(129, 129, 129)";
    return true;
  }
}

function verifyPassword() {
  if (password.value.length < 4) {
    password.style.borderColor = "rgb(226, 33, 33)";
    error.innerHTML = "Minimum password length: 4";
    return false;
  } else if (password.value != retypePassword.value) {
    password.style.borderColor = "rgb(226, 33, 33)";
    retypePassword.style.borderColor = "rgb(226, 33, 33)";
    error.innerHTML = "Passwords don't match";
    return false;
  } else {
    password.style.borderColor = "rgb(129, 129, 129)";
    retypePassword.style.borderColor = "rgb(129, 129, 129)";
    return true;
  }
}
