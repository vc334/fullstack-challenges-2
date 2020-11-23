/* eslint-disable no-multiple-empty-lines */

const hasNewMessage = () => Math.random() <= 0.2;
// TODO: return true with a probability of 20%.

const sample = array => array[Math.floor(Math.random() * array.length)];

const newMessage = () => {
  // TODO: return a random message as an object with two keys, subject and sender
  const sender = ["Victor", "Buddy", "Natalia", "Betty"];
  const subjects = ["It's your bday", "Buddy is happy", "Tomorrow is a holiday", "Save $10 today"];

  return {
    sender: sample(sender),
    subject: sample(subjects),
  };
};

const appendMessageToDom = (message) => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
  const line = `<div class="row message unread">
      <div class="col-3">${message["sender"]}</div>
      <div class="col-9">${message.subject}</div>
    </div>`;

  document.getElementById("inbox").insertAdjacentHTML('afterbegin', line);
};

const updateCounter = () => {
  const counter = document.getElementById("count");
  const unread = document.querySelectorAll(".unread").length;
  counter.innerText = `(${unread})`;
  document.title = `(${unread}) fake inbox`;
}

const refresh = () => {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
  if (hasNewMessage) {
    appendMessageToDom(newMessage());
    updateCounter();
  }
};








// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

module.exports = { hasNewMessage, newMessage };
