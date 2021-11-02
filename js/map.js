import { setFormDisabled, setFormActive, inputAddress } from './form.js';
import { createPopup } from './popup.js';
import { getData } from './api.js';
import { comparesValuesOffers } from './filter.js';

const LATITUDE_COORDINATE = 35.6895;
const LONGITUDE_COORDINATE = 139.692;
const NUMBER_CHARACTERS_COORDINATE = 5;
const MAP_ZOOM = 10;
const MAIN_PIN_SIZE = [52, 52];
const MAIN_PIN_ANCHOR = [26, 52];
const PIN_SIZE = [40, 40];
const PIN_ANCHOR = [20, 40];
const SIMILAR_OFFER_COUNT = 10;

setFormDisabled();

const mapCanvas = L.map('map-canvas')
  .on('load', () => {
    setFormActive();
    inputAddress.value = `Lat: ${LATITUDE_COORDINATE}, Lng: ${LONGITUDE_COORDINATE}`;
  })
  .setView({
    lat: LATITUDE_COORDINATE,
    lng: LONGITUDE_COORDINATE,
  }, MAP_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(mapCanvas);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: MAIN_PIN_SIZE,
  iconAnchor: MAIN_PIN_ANCHOR,
});

const mainPinMarker = L.marker(
  {
    lat: LATITUDE_COORDINATE,
    lng: LONGITUDE_COORDINATE,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(mapCanvas);

mainPinMarker.on('moveend', (evt) => {
  const coordinateObject = evt.target.getLatLng();
  const latitudeCoordinate = coordinateObject.lat.toFixed(NUMBER_CHARACTERS_COORDINATE);
  const longitudeCoordinate = coordinateObject.lat.toFixed(NUMBER_CHARACTERS_COORDINATE);
  inputAddress.value = `Lat: ${latitudeCoordinate}, Lng: ${longitudeCoordinate}`;
});

const pinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: PIN_SIZE,
  iconAnchor: PIN_ANCHOR,
});

const layerGroup = L.layerGroup().addTo(mapCanvas);

const createOffers = (similarOffers) => {
  similarOffers.filter(comparesValuesOffers)
    .slice(0, SIMILAR_OFFER_COUNT)
    .forEach((offer) => {
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
        .addTo(layerGroup)
        .bindPopup(createPopup(offer));
    });
};

const initMap = () => {
  layerGroup.clearLayers();
  getData((offers) => {
    createOffers(offers);
  });
  mapCanvas.setView({
    lat: LATITUDE_COORDINATE,
    lng: LONGITUDE_COORDINATE,
  }, MAP_ZOOM);

  inputAddress.value = `Lat: ${LATITUDE_COORDINATE}, Lng: ${LONGITUDE_COORDINATE}`;

  mainPinMarker.setLatLng({
    lat: LATITUDE_COORDINATE,
    lng: LONGITUDE_COORDINATE,
  });
};

export { createOffers, initMap, SIMILAR_OFFER_COUNT };
