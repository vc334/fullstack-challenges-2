const baseUrl = 'http://localhost:4567/';

const startNewSession = () => {
  const newSessionUrlSuffix = '/sessions'
  fetch(`${baseUrl}${newSessionUrlSuffix}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    })
};

window.addEventListener('load', () => {console.log('hi!')});

