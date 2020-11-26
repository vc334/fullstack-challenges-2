// TODO: Write your JS code in here
import { injectMap } from '../src/plugins/init_mapboxgl';

const submitButton = document.getElementById("submit");


const getGeocode = (e) => {
  e.preventDefault();
  const userInput = document.getElementById("searchField").value;
  const apiKey = 'pk.eyJ1IjoidmMzMzQiLCJhIjoiY2s3eTRscDR3MDNlMzNtbXE3YTgyc2k4ZCJ9.yE3hRYWeb32-d9nKkO6KNQ';
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${userInput}.json?access_token=${apiKey}`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const lat = data.features[0].center[1];
      const lon = data.features[0].center[0];
      const coordinates = {"lon": lon, "lat": lat };
      injectMap(coordinates);
    })
}

submitButton.addEventListener('click', getGeocode);
