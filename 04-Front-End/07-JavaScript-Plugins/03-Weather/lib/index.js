// TODO: Write your JS code in here
import { initSelect2 } from '../src/plugins/init_select2';

const displayWeather = (locationAndUrl) => {

  const cityParagraph = document.getElementById('city-paragraph');
  const degreesParagraph = document.getElementById("degrees");
  const degreesIconParagraph = document.getElementById('icon');
  degreesIconParagraph.innerHTML = '';
  const descriptionParagraph = document.getElementById("weather-description");

  // need to fix this.
  cityParagraph.innerText = `Weather in ${locationAndUrl.displayableLocation}`;
  fetch(locationAndUrl.url)
    .then(response => response.json())
    .then((data) => {
      const degreesUrl = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
      degreesIconParagraph.insertAdjacentHTML('afterbegin', degreesUrl);
      degreesParagraph.innerText = Math.round(data.main.temp);
      descriptionParagraph.innerText = data.weather[0].description
  });

};

const getCurrentLocation = (e) => {
  e.preventDefault();
  navigator.geolocation.getCurrentPosition((data) => {
  const lat = data.coords.latitude;
  const lon = data.coords.longitude;
  const displayableLocation = `${lat}, ${lon}`
  const getCurrentLocationUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=35298746992ee2d96956bb13aa5307ee&units=imperial`;
  const locationAndUrl = {"displayableLocation": displayableLocation, "url": getCurrentLocationUrl};
  displayWeather(locationAndUrl)

});
};

const getLocationUrl = document.getElementById('current-location');

getLocationUrl.addEventListener('click', getCurrentLocation);

//

initSelect2();

const cityForm = document.getElementById("city-form");

const selectWeather = (e) => {
  e.preventDefault();
  const searchWord = document.querySelector('form select').value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchWord}&appid=35298746992ee2d96956bb13aa5307ee&units=imperial`;

  displayWeather({"displayableLocation": searchWord, "url": url});
};

cityForm.addEventListener('submit', selectWeather);
