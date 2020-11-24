const displayAlertOnButtonClick = () => {
  // TODO: Select the big green button
  const button = document.querySelector(".btn");
  const putAlert = () => alert('Thank you!');

  // TODO: Bind the `click` event to the button
  button.addEventListener('click', putAlert);

// TODO: On click, display `Thank you!` in a JavaScript alert!
};


displayAlertOnButtonClick(); // Do not remove!
