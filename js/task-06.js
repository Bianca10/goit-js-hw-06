const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", function () {
  const inputValue = validationInput.value;
  const expectedLength = parseInt(validationInput.getAttribute("data-length"));

  validationInput.classList.remove("valid", "invalid");

  if (inputValue.length === expectedLength) {
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.add("invalid");
  }
});
