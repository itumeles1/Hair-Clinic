function validateContactForm() {
  // Get the form inputs
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  // Get the error message elements
  var nameError = document.getElementById("name-error");
  var emailError = document.getElementById("email-error");
  var messageError = document.getElementById("message-error");

  // Validate the name input
  if (nameInput.value === "") {
    nameError.textContent = "Please enter your name";
  } else {
    nameError.textContent = "";
  }

  // Validate the email input
  if (emailInput.value === "") {
    emailError.textContent = "Please enter your email address";
  } else if (!isValidEmail(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address";
  } else {
    emailError.textContent = "";
  }

  // Validate the message input
  if (messageInput.value === "") {
    messageError.textContent = "Please enter your message";
  } else {
    messageError.textContent = "";
  }
}

function isValidEmail(email) {
  // Regular expression for email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
