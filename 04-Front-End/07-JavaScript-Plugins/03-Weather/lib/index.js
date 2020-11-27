// TODO: Write your JS code in here

const cityForm = document.getElementById("city-form");

const displayWeather = (e) => {
  e.preventDefault();
  const searchWord = document.querySelector('form input:first-child').value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchWord}&appid=35298746992ee2d96956bb13aa5307ee&units=imperial`;
  const cityParagraph = document.getElementById('city-paragraph');
  const degreesParagraph = document.getElementById("degrees");
  const degreesIconParagraph = document.getElementById('icon');
  degreesIconParagraph.innerHTML = '';
  const descriptionParagraph = document.getElementById("weather-description");
  cityParagraph.innerText = `Weather in ${searchWord}`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const degreesUrl = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
      degreesIconParagraph.insertAdjacentHTML('afterbegin', degreesUrl);
      degreesParagraph.innerText = Math.round(data.main.temp);
      descriptionParagraph.innerText = data.weather[0].description
  });
};

cityForm.addEventListener('submit', displayWeather);
