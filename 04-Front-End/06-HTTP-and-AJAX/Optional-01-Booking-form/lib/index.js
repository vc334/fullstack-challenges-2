// TODO: write your code here!
const minus = document.querySelector(".actions .incrementer:first-child");
console.log(minus);
const incrementer = document.querySelector(".actions .incrementer:last-child");
console.log(minus);
counter = document.getElementById("counter");
const valueForm = document.getElementById("price-input");
const fixedValue = valueForm.value;
const submitButton = document.getElementById("submit");

const updateSubmitButtonValue = (count) => {
  submitButton.value = `Pay ${count.toString() / 100}€`;
}

const valueFormDisabled = () => {
  valueForm.disabled = false;
}

const increaseCounter = () => {
  const currentCount = Number.parseInt(counter.dataset.count, 10);
  const newCount = currentCount + 1
  counter.innerText = newCount;
  counter.dataset.count = newCount.toString();
  valueForm.value = fixedValue * newCount;
  updateSubmitButtonValue(valueForm.value);
  if (newCount > 1) {
    valueForm.disabled = false;
    submitButton.disabled = false;
  }
};

const decreaseCounter = () => {
  const currentCount = Number.parseInt(counter.dataset.count, 10);

  if (currentCount === 2) {
    const newCount = currentCount - 1
  counter.innerText = newCount;
  counter.dataset.count = newCount.toString();
  valueForm.value = fixedValue * newCount;
  valueForm.disabled = true;
  updateSubmitButtonValue(valueForm.value);
  submitButton.disabled = true;
  } else if (currentCount > 1) {
    const newCount = currentCount - 1
  counter.innerText = newCount;
  counter.dataset.count = newCount.toString();
  valueForm.value = fixedValue * newCount;
  valueForm.disabled = false;
  updateSubmitButtonValue(valueForm.value);
  }
};

minus.addEventListener("click", decreaseCounter);
incrementer.addEventListener("click", increaseCounter);
