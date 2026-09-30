"use strict";


// ==========================
// GET HTML ELEMENTS
// ==========================

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const jobTitle = document.getElementById("jobTitle");
const locationInput = document.getElementById("location");

const continueBtn = document.getElementById("continueBtn");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const backBtn2 = document.getElementById("backBtn2");
const nextBtn2 = document.getElementById("nextBtn2");

const submitBtn = document.getElementById("submitBtn");
const startAgainBtn = document.getElementById("startAgainBtn");


// STEPS

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");
const successStep = document.getElementById("successStep");


// ERRORS

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const jobTitleError = document.getElementById("jobTitleError");
const locationError = document.getElementById("locationError");


// PROGRESS

const progressBar = document.getElementById("progressBar");
const stepText = document.getElementById("stepText");


// REVIEW

const reviewFirstName = document.getElementById("reviewFirstName");
const reviewLastName = document.getElementById("reviewLastName");
const reviewJobTitle = document.getElementById("reviewJobTitle");
const reviewLocation = document.getElementById("reviewLocation");


// EDIT BUTTONS

const editFirstName = document.getElementById("editFirstName");
const editLastName = document.getElementById("editLastName");
const editJobTitle = document.getElementById("editJobTitle");
const editLocation = document.getElementById("editLocation");


// ==========================
// UPDATE REVIEW
// ==========================

function updateReview() {
  reviewFirstName.textContent = firstName.value || "Not provided";
  reviewLastName.textContent = lastName.value || "Not provided";
  reviewJobTitle.textContent = jobTitle.value || "Not provided";
  reviewLocation.textContent = locationInput.value || "Not provided";

}
function updateProgress(text, width) {
  stepText.textContent = text;
  progressBar.style.width = width;
}
function showStep(currentStep, previousStep) {
  currentStep.classList.remove("active");
  previousStep.classList.add("active");
}
function isEmpty(input) {
  return input.value.trim() === "";
}

// ==========================
// STEP 1 → STEP 2
// ==========================

continueBtn.addEventListener("click", function () {

  let isValid = true;


  if (isEmpty(firstName)) {

    firstNameError.textContent =
      "Please enter your first name.";

    firstName.classList.add("input-error");

    isValid = false;

  }


  if (isEmpty(lastName)) {
    lastNameError.textContent =
      "Please enter your last name.";

    lastName.classList.add("input-error");

    isValid = false;

  }


  if (isValid) {

    showStep(step1, step2);

    updateProgress("Step 2 of 4", "50%");

  }

});


// ==========================
// CLEAR STEP 1 ERRORS
// ==========================

firstName.addEventListener("input", function () {

  if (firstName.value.trim() !== "") {

    firstNameError.textContent = "";
    firstName.classList.remove("input-error");

  }

});


lastName.addEventListener("input", function () {

  if (lastName.value.trim() !== "") {

    lastNameError.textContent = "";
    lastName.classList.remove("input-error");

  }

});


// ==========================
// STEP 2 → STEP 1
// ==========================

backBtn.addEventListener("click", function () {

  showStep(step2, step1);

  stepText.textContent = "Step 1 of 4";
  progressBar.style.width = "25%";

});


// ==========================
// STEP 2 → STEP 3
// ==========================

nextBtn.addEventListener("click", function () {

if (isEmpty(jobTitle)) {
    jobTitleError.textContent =
      "Please enter your job title.";

    jobTitle.classList.add("input-error");

  } else{
    showStep(step2, step3);
    updateProgress("Step 3 of 4", "75%");
  }
});


// ==========================
// CLEAR JOB TITLE ERROR
// ==========================

jobTitle.addEventListener("input", function () {

  if (jobTitle.value.trim() !== "") {

    jobTitleError.textContent = "";
    jobTitle.classList.remove("input-error");

  }

});


// ==========================
// STEP 3 → STEP 2
// ==========================

backBtn2.addEventListener("click", function () {

  showStep(step3, step2);
  progressBar.style.width = "50%";

});


// ==========================
// STEP 3 → STEP 4
// ==========================

nextBtn2.addEventListener("click", function () {

  if (isEmpty(jobTitle)) {

    locationError.textContent =
      "Please enter your location.";

    locationInput.classList.add("input-error");

  } else{
  showStep(step3, step4);

  updateReview();

  updateProgress("Step 4 of 4", "100%");
  }
});


// ==========================
// CLEAR LOCATION ERROR
// ==========================

locationInput.addEventListener("input", function () {

  if (locationInput.value.trim() !== "") {

    locationError.textContent = "";
    locationInput.classList.remove("input-error");

  }

});


// ==========================
// EDIT FIRST NAME
// ==========================
editFirstName.addEventListener("click", function () {
  showStep(step4, step1);
  updateProgress("Step 1 of 4", "25%");
});


// ==========================
// EDIT LAST NAME
// ==========================

editLastName.addEventListener("click", function () {

   showStep(step4, step1);
  updateProgress("Step 1 of 4", "25%");

});


// ==========================
// EDIT JOB TITLE
// ==========================

editJobTitle.addEventListener("click", function () {
  showStep(step4, step2);
  progressBar.style.width = "50%";

});


// ==========================
// EDIT LOCATION
// ==========================

editLocation.addEventListener("click", function () {

  showStep(step4, step3);
  progressBar.style.width = "75%";

});


// ==========================
// SUBMIT
// ==========================

submitBtn.addEventListener("click", function () {
  showStep(step4, successStep);
  updateProgress("Complete", "100%");
});

// ==========================
// START AGAIN
// ==========================

startAgainBtn.addEventListener("click", function () {

  // Clear inputs

  firstName.value = "";
  lastName.value = "";
  jobTitle.value = "";
  locationInput.value = "";


  // Clear errors

  firstNameError.textContent = "";
  lastNameError.textContent = "";
  jobTitleError.textContent = "";
  locationError.textContent = "";


  // Remove error styling

  firstName.classList.remove("input-error");
  lastName.classList.remove("input-error");
  jobTitle.classList.remove("input-error");
  locationInput.classList.remove("input-error");
showStep(successStep, step1);
updateProgress("Step 1 of 4", "25%");

});