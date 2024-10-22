const firstName = document.querySelector(".input-name");
const lastName = document.querySelector(".input-Lname");
const email = document.querySelector("#input-email");
const enquiryCheck = document.querySelector("#ge");
const supportCheck = document.querySelector("#su");
const message = document.querySelector("#text");
const finalCheck = document.querySelector("#final");
const btn = document.querySelector("#btn");
const notificationDiv = document.querySelector(".notification");

// Input validation listeners for real-time updates
const namePattern = /^[A-Za-z\s]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

// First Name Validation
firstName.addEventListener("input", function () {
  if (namePattern.test(firstName.value.trim())) {
    firstName.style.borderColor = "Green";
    firstName.style.backgroundColor = "rgb(203, 246, 203)";
    document.querySelector("#display1").style.display = "none";
  } else {
    firstName.style.borderColor = "red";
    document.querySelector("#display1").style.display = "block";
  }
});

// Last Name Validation
lastName.addEventListener("input", function () {
  if (namePattern.test(lastName.value.trim())) {
    lastName.style.borderColor = "green";
    lastName.style.backgroundColor = "rgb(203, 246, 203)";
    document.querySelector("#display2").style.display = "none";
  } else {
    lastName.style.borderColor = "red";
    document.querySelector("#display2").style.display = "block";
  }
});

// Email Validation
email.addEventListener("input", function () {
  if (emailPattern.test(email.value.trim())) {
    email.style.borderColor = "green";
    email.style.backgroundColor = "rgb(203, 246, 203)";
    document.querySelector("#display3").style.display = "none";
  } else {
    email.style.borderColor = "red";
    document.querySelector("#display3").style.display = "block";
  }
});

// Message Validation
message.addEventListener("input", function () {
  if (namePattern.test(message.value.trim())) {
    message.style.borderColor = "green";
    message.style.backgroundColor = "rgb(203, 246, 203)";
    document.querySelector("#display5").style.display = "none";
  } else {
    message.style.borderColor = "red";
    document.querySelector("#display5").style.display = "block";
  }
});

// Checkbox Validation
finalCheck.addEventListener("change", function () {
  if (finalCheck.checked) {
    document.querySelector("#display6").style.display = "none";
  }
});

// Add event listeners to both checkboxes
// Add event listeners to both checkboxes
enquiryCheck.addEventListener("change", function () {
  if (enquiryCheck.checked) {
    supportCheck.checked = false; // Uncheck Support
  }
  checkCheckboxes();
});

supportCheck.addEventListener("change", function () {
  if (supportCheck.checked) {
    enquiryCheck.checked = false; // Uncheck Enquiry
  }
  checkCheckboxes();
});

// Function to check the state of checkboxes
function checkCheckboxes() {
  const display4 = document.querySelector("#display4");
  if (enquiryCheck.checked || supportCheck.checked) {
    display4.style.display = "none";
  } else {
    display4.style.display = "block"; // Show error if neither is checked
  }
}

// Button click to trigger final validation
btn.addEventListener("click", function (event) {
  event.preventDefault();
  let allFieldsFilled = true;

  // Validate first name
  if (!namePattern.test(firstName.value.trim())) {
    firstName.style.borderColor = "red";
    document.querySelector("#display1").style.display = "block";
    allFieldsFilled = false;
  }

  // Validate last name
  if (!namePattern.test(lastName.value.trim())) {
    lastName.style.borderColor = "red";
    document.querySelector("#display2").style.display = "block";
    allFieldsFilled = false;
  }

  // Validate email
  if (!emailPattern.test(email.value.trim())) {
    email.style.borderColor = "red";
    document.querySelector("#display3").style.display = "block";
    allFieldsFilled = false;
  }

  // Validate checkboxes
  if (!enquiryCheck.checked && !supportCheck.checked) {
    document.querySelector("#display4").style.display = "block";
    allFieldsFilled = false;
  }

  // Validate message field
  if (message.value.trim() === "") {
    message.style.borderColor = "red";
    document.querySelector("#display5").style.display = "block";
    allFieldsFilled = false;
  }

  // Validate final checkbox
  if (!finalCheck.checked) {
    document.querySelector("#display6").style.display = "block";
    allFieldsFilled = false;
  }

  // If all fields are filled correctly, show the notification div
  if (allFieldsFilled) {
    notificationDiv.style.display = "block"; // Show the notification

    // Hide the notification after 4 seconds
    setTimeout(function () {
      notificationDiv.style.display = "none";
    }, 4000);
  }
  resetField();
});

function resetField() {
  firstName.value = ""; // Reset the input field value
  firstName.style.borderColor = "";
  firstName.style.backgroundColor = ""; // Reset the border color
  lastName.value = "";
  lastName.style.borderColor = "";
  lastName.style.backgroundColor = "";
  email.value = "";
  email.style.borderColor = "";
  email.style.backgroundColor = "";
  message.value = "";
  message.style.borderColor = "";
  message.style.backgroundColor = "";
  enquiryCheck.checked = false; // Uncheck the enquiry checkbox
  supportCheck.checked = false;
  finalCheck.checked = false;
}
