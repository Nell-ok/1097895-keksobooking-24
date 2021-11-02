import { mapFilter } from './form.js';
const DEFAULT_VALUE = 'any';
const selectHousingType = document.querySelector('[name="housing-type"]');
/*const selectHousingPrice = document.querySelector('[name="housing-price"]');*/
const selectHousingRooms = document.querySelector('[name="housing-rooms"]');
const selectHousingGuests = document.querySelector('[name="housing-guests"]');

/*const housingPrice = {
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
};*/

const onElementChange = (element) => {
  mapFilter.addEventListener('change', () => {
    const valueElement = element.value;
    return valueElement;
  });
};

const onHousingTypeChange = () => {
  onElementChange(selectHousingType);
};

/*const onHousingPriceChange = () => {
  onElementChange(selectHousingPrice);
};*/

const onHousingRoomsChange = () => {
  onElementChange(selectHousingRooms);
};

const onHousingGuestsChange = () => {
  onElementChange(selectHousingGuests);
};

const comparesTypeOffers = (array) => {
  if (array.offer.type === onHousingTypeChange() || DEFAULT_VALUE) {
    return true;
  }
};

const comparesRoomsOffers = (array) => {
  if (array.offer.rooms === onHousingRoomsChange() || DEFAULT_VALUE) {
    return true;
  }
};

const comparesGuestsOffers = (array) => {
  if (array.offer.guests === onHousingGuestsChange() || DEFAULT_VALUE) {
    return true;
  }
};

/*const comparesPriceOffers = (array) => {
  if (array.offer.price >= housingPrice[onHousingPriceChange()].from && array.offer.price < housingPrice[onHousingPriceChange()].to) {
    return true;
  }
};*/

const comparesValuesOffers = (array) => {
  if (comparesTypeOffers(array) && comparesRoomsOffers(array) && comparesGuestsOffers(array)/* && comparesPriceOffers(array)*/) {
    return true;
  }
};

export { comparesValuesOffers };
