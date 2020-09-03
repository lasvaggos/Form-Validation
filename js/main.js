// Animations
const signUp = document.getElementById("sign-up");
const signIn = document.getElementById("sign-in");
const container = document.getElementById("container");

signUp.addEventListener("click", () =>
  container.classList.add("right-panel-active")
);

signIn.addEventListener("click", () =>
  container.classList.remove("right-panel-active")
);

// Form Validation
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const confPass = document.getElementById("confirm-pass");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
  checkLength(username, 3, 15);
  checkLength(pass, 6, 25);
});

function checkInputs() {
  // Get Values
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passValue = pass.value.trim();
  const confPassValue = confPass.value.trim();

  // Username
  if (usernameValue === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }

  // Email
  if (emailValue === "") {
    showError(email, "Email is required");
  } else if (!isEmail(emailValue)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }

  // Password
  if (passValue === "") {
    showError(pass, "Password cannot be blank");
  } else {
    showSuccess(pass);
  }

  // Confirm Password
  if (confPassValue === "") {
    showError(confPass, "Confirm password cannot be blank");
  } else if (passValue !== confPassValue) {
    showError(confPass, "Passwords does not match");
  } else {
    showSuccess(confPass);
  }
}

// ERROR
function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  formControl.className = "form-control error";
  small.innerText = message;
}

// SUCCESS
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// IS EMAIL
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// GET FIELDNAME
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// CHECK LENGTH
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}
