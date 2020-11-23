// TODO: Validate this form
const allInputs = document.querySelectorAll(".form-control");
const allInputsArr = Array.from(allInputs);
const checkbox = document.getElementById("tos");
const btn = document.querySelector("button");

const filled = input => input.value;
const allFilled = () => allInputsArr.every(filled);



const enableButton = () => {
  const checkTheBox = checkbox.checked;
  if (allFilled() && checkTheBox) {
    btn.disabled = false;
  }
}

allInputs.forEach((input) => {
  input.addEventListener("blur", enableButton);
});

checkbox.addEventListener("click", enableButton);
