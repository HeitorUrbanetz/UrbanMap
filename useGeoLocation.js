'use strict';

navigator.geolocation.watchPosition(render);

function render(pos) {
  let lat = pos.coords.latitude;
  let lon = pos.coords.longitude;
  let map = L.mapbox.map('map', 'examples.map-20v6611k').setView([lat, lon], 8);

  L.mapbox
    .markerLayer({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [lon, lat],
      },
      properties: {
        title: 'Current Location',
        description: lat.toString() + ', ' + lon.String(),

        'marker-size': 'large',
        'marker-color': '#f0a',
      },
    })
    .addTo(map);
}
