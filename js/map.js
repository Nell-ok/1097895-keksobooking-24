import { setFormDisabled, setFormActive, inputAddress } from './form.js';
import { createOffers } from './data.js';
import { createPopup } from './popup.js';

const similarOffers = createOffers();

setFormDisabled();

const mapCanvas = L.map('map-canvas')
  .on('load', () => {
    setFormActive();
    inputAddress.value = 'Lat: 35.6895, Lng: 139.692';
  })
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(mapCanvas);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(mapCanvas);

mainPinMarker.on('moveend', (evt) => {
  const coordinateObject = evt.target.getLatLng();
  const latitudeCoordinate = coordinateObject.lat.toFixed(5);
  const longitudeCoordinate = coordinateObject.lat.toFixed(5);
  inputAddress.value = `Lat: ${latitudeCoordinate}, Lng: ${longitudeCoordinate}`;
});

similarOffers.forEach((offer) => {
  const pinIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  const pinMarker = L.marker(
    {
      lat: offer.location.lat,
      lng: offer.location.lng,
    },
    {
      icon: pinIcon,
    },
  );

  pinMarker
    .addTo(mapCanvas)
    .bindPopup(createPopup(offer));
});
