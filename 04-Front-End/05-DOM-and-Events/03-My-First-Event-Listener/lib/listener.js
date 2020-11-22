// TODO: React to a click on the button!
const button = document.querySelector("#clickme");
const audio = new Audio('sound.mp3');

button.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.target);
  console.log(e.currentTarget);
  e.target.classList.add("disabled");
  e.target.innerText = "Bingo!";
  audio.play();
});
