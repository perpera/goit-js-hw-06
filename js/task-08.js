"use strict";
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (!emailInput.value || !passwordInput.value) {
    alert("ALl fields must be filled in.");
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(formData);

    loginForm.reset();
  }
});
