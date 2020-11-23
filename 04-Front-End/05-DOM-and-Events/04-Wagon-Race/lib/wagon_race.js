// TODO: write your code here
// moving the board

const move = (player) => {
  const wagon = document.querySelector(`#player${player}-race td.active`)
  console.log(wagon);
  if (wagon.nextElementSibling) {
    wagon.classList.remove("active");
    wagon.nextElementSibling.classList.add("active")
  } else {
    alert(`Player ${player} wins! Play again?`)
    window.location.reload();
  }
};


//moving the key

const moveWagons = (e) => {
  if (e.key === 'q') {
    move(1);
    console.log(e);
  } else if (e.key === 'p') {
    move(2);
    console.log(e);
  }
};

document.addEventListener("keyup", moveWagons);
