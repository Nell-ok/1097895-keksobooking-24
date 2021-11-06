/*import { mapFilter } from './form.js';*/

const DEFAULT_VALUE = 'any';
const selectHousingType = document.querySelector('[name="housing-type"]');
const selectHousingPrice = document.querySelector('[name="housing-price"]');
const selectHousingRooms = document.querySelector('[name="housing-rooms"]');
const selectHousingGuests = document.querySelector('[name="housing-guests"]');

const housingPrice = {
  low: {
    from: 0,
    to: 10000,
  },
  middle: {
    from: 10000,
    to: 50000,
  },
  high: {
    from: 50000,
    to: Infinity,
  },
};

const comparesTypeOffers = (object) => selectHousingType.value === DEFAULT_VALUE || object.offer.type === selectHousingType.value;

const comparesRoomsOffers = (object) => selectHousingRooms.value === DEFAULT_VALUE || object.offer.rooms.toString() === selectHousingRooms.value;

const comparesGuestsOffers = (object) => selectHousingGuests.value === DEFAULT_VALUE || object.offer.guests.toString() === selectHousingGuests.value;

const comparesPriceOffers = (object) => selectHousingPrice.value === DEFAULT_VALUE || object.offer.price >= housingPrice[selectHousingPrice.value].from && object.offer.price < housingPrice[selectHousingPrice.value].to;

const comparesFeaturesOffers = (object) => {
  let isSimilar = true;
  const mapFeaturesElements = document.querySelectorAll('[name="features"]:checked');
  for (let i = 0; i < mapFeaturesElements.length; i++) {
    if (object.offer.features.length === 0 || object.offer.features.indexOf(mapFeaturesElements[i].value) === -1) {
      isSimilar = false;
    }
  }
  return isSimilar;
};

const comparesValuesOffers = (object) => comparesTypeOffers(object) && comparesRoomsOffers(object) && comparesGuestsOffers(object) && comparesPriceOffers(object) && comparesFeaturesOffers(object);


export { comparesValuesOffers };
