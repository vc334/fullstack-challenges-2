import mapboxgl from 'mapbox-gl';

const injectMap = (coordinates) => {
  const coords = [coordinates.lon, coordinates.lat];

mapboxgl.accessToken = 'pk.eyJ1IjoidmMzMzQiLCJhIjoiY2s3eTRscDR3MDNlMzNtbXE3YTgyc2k4ZCJ9.yE3hRYWeb32-d9nKkO6KNQ';

const mapDiv = document.getElementById('map');
mapDiv.innerHTML = '';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: coords,
  zoom: 12
});

new mapboxgl.Marker()
  .setLngLat(coords)
  .addTo(map);

};

export { injectMap };
