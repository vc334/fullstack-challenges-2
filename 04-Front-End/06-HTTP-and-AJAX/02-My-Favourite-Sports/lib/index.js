// TODO: write your code here!
const boxes = document.querySelectorAll(".clickable");
console.log(boxes);

const toggle = (e) => {
  e.currentTarget.classList.toggle("active");
};

const listenerEvent = (box) => {
  box.addEventListener('click', toggle);
};

boxes.forEach(listenerEvent);
