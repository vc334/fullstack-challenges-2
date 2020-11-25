const batch = 345; // change to your own batch id
const baseUrl = "https://wagon-chat.herokuapp.com/";

// Your turn to code!

const sendButton = document.querySelector("#comment-form input.btn")
const refreshButton = document.querySelector("#refresh");

const messageList = document.querySelector(".list-unstyled");

const getMessages = () => {
  messageList.innerHTML = '';
  fetch(`${baseUrl}${batch}/messages`)
    .then(response => response.json())
    .then((data) => {
      data.messages.forEach((message) => {
        const minutesAgo = Math.floor((new Date - new Date(message["created_at"])) / 60000);
        const newMessage = `<li>${message.content} by ${message.author} ${minutesAgo} minutes ago</li>`
        messageList.insertAdjacentHTML('afterbegin', newMessage);
      });
    });
};

const sendMessage = (e) => {
  e.preventDefault();
  const userComment = document.getElementById("your-message");
  const userName = document.getElementById("your-name");

  const userMessage = {};
  userMessage.author = userName.value;
  userMessage.content = userComment.value;

  fetch(`${baseUrl}${batch}/messages`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userMessage)
  })
    .then(reponse => reponse.json())
    .then((data) => {
      console.log(data);
        getMessages();
    });
};

sendButton.addEventListener("click", sendMessage);
refreshButton.addEventListener("click", getMessages);

setInterval(getMessages, 4000);

