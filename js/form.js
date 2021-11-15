import { showMessageSuccess, showMessageError, closeMessageSuccess, closeMessageError } from './tooltip.js';
import { initMap } from './map.js';
import { sendData } from './api.js';
import { removePictures } from './avatar.js';

const MIN_LENGTH_TITLE = 30;
const MAX_LENGTH_TITLE = 100;
const MAX_PRICE = 1000000;
const NUMBER_ROOMS = 100;
const DEFAULT_MIN_PRICE = 1000;

const minPriceOnType = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const inputTitle = document.querySelector('[name="title"]');
const inputPrice = document.querySelector('[name="price"]');
const inputAddress = document.querySelector('[name="address"]');
const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('.ad-form__element');
const adFormHeaderElement = adForm.querySelector('.ad-form-header');
const adFormButtonSubmit = document.querySelector('.ad-form__submit');
const adFormButtonReset = document.querySelector('.ad-form__reset');
const mapFilter = document.querySelector('.map__filters');
const mapFilterElements = mapFilter.querySelectorAll('.map__filter');
const mapFeatures = mapFilter.querySelector('.map__features');
const selectRooms = document.querySelector('[name="rooms"]');
const selectCapacity = document.querySelector('[name="capacity"]');
const selectType = document.querySelector('[name="type"]');
const selectTimein = document.querySelector('[name="timein"]');
const selectTimeout = document.querySelector('[name="timeout"]');

const adFormDisable = () => {
  adForm.setAttribute('disabled', 'disabled');
  adForm.classList.add('ad-form--disabled');
  for (const adFormElement of adFormElements) {
    adFormElement.setAttribute('disabled', 'disabled');
    adFormElement.classList.add('ad-form__element--disabled');
  }
  adFormHeaderElement.setAttribute('disabled', 'disabled');
  adFormHeaderElement.classList.add('ad-form-header--disabled');
};

const mapFilterDisable = () => {
  mapFilter.setAttribute('disabled', 'disabled');
  mapFilter.classList.add('map__filters--disabled');
  for (const mapFilterElement of mapFilterElements) {
    mapFilterElement.setAttribute('disabled', 'disabled');
    mapFilterElement.classList.add('map__filter--disabled');
  }
};

const mapFeaturesDisable = () => {
  mapFeatures.setAttribute('disabled', 'disabled');
  mapFeatures.classList.add('map__features--disabled');
};

const setFormDisabled = () => {
  adFormDisable();
  mapFilterDisable();
  mapFeaturesDisable();
};

const adFormActivate = () => {
  adForm.removeAttribute('disabled', 'disabled');
  adForm.classList.remove('ad-form--disabled');
  for (const adFormElement of adFormElements) {
    adFormElement.removeAttribute('disabled', 'disabled');
    adFormElement.classList.remove('ad-form__element--disabled');
  }
  adFormHeaderElement.removeAttribute('disabled', 'disabled');
  adFormHeaderElement.classList.remove('ad-form-header--disabled');
};

const mapFilterActivate = () => {
  mapFilter.removeAttribute('disabled', 'disabled');
  mapFilter.classList.remove('map__filters--disabled');
  for (const mapFilterElement of mapFilterElements) {
    mapFilterElement.removeAttribute('disabled', 'disabled');
    mapFilterElement.classList.remove('map__filter--disabled');
  }
};

const mapFeaturesActivate = () => {
  mapFeatures.removeAttribute('disabled', 'disabled');
  mapFeatures.classList.remove('map__features--disabled');
};

const setFilterActive = () => {
  mapFilterActivate();
  mapFeaturesActivate();
};

inputTitle.addEventListener('input', () => {
  const valueLength = inputTitle.value.length;
  if (valueLength < MIN_LENGTH_TITLE) {
    inputTitle.setCustomValidity(`Еще ${MIN_LENGTH_TITLE - valueLength} симв.`);
  } else if (valueLength > MAX_LENGTH_TITLE) {
    inputTitle.setCustomValidity(`Удалите лишние ${valueLength - MAX_LENGTH_TITLE} симв.`);
  } else {
    inputTitle.setCustomValidity('');
  }
  inputTitle.reportValidity();
});

inputPrice.addEventListener('input', () => {
  const valuePrice = inputPrice.value;
  inputPrice.setCustomValidity('');
  if (valuePrice > MAX_PRICE) {
    inputPrice.setCustomValidity(`Максимальное значение ${MAX_PRICE}`);
  }
  inputPrice.reportValidity();
});

selectType.addEventListener('change', () => {
  const minPrice = minPriceOnType[selectType.value];
  inputPrice.setAttribute('placeholder', minPrice);
  inputPrice.setAttribute('min', minPrice);
});

selectTimein.addEventListener('change', () => {
  selectTimeout.value = selectTimein.value;
});

selectTimeout.addEventListener('change', () => {
  selectTimein.value = selectTimeout.value;
});

const onRoomsCapacityChange = () => {
  const valueRoom = +selectRooms.value;
  const valueCapacity = +selectCapacity.value;
  if ((valueRoom !== NUMBER_ROOMS && valueCapacity !== 0) && (valueRoom < valueCapacity)) {
    selectRooms.setCustomValidity('Количество комнат не соответствует количеству гостей');
  } else if (valueRoom === NUMBER_ROOMS && valueCapacity !== 0 || valueCapacity === 0 && valueRoom !== NUMBER_ROOMS) {
    selectRooms.setCustomValidity('Не для гостей');
  } else {
    selectRooms.setCustomValidity('');
  }
  selectRooms.reportValidity();
};

selectRooms.addEventListener('change', onRoomsCapacityChange);
selectCapacity.addEventListener('change', onRoomsCapacityChange);

adFormButtonSubmit.addEventListener('click', () => {
  onRoomsCapacityChange();
});

const resetInputPrice = () => {
  inputPrice.setAttribute('placeholder', DEFAULT_MIN_PRICE);
  inputPrice.setAttribute('min', DEFAULT_MIN_PRICE);
};

adFormButtonReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  adForm.reset();
  resetInputPrice();
  mapFilter.reset();
  removePictures();
  initMap();
});

const setAdFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => {
        evt.target.reset();
        resetInputPrice();
        mapFilter.reset();
        removePictures();
        initMap();
        showMessageSuccess();
        closeMessageSuccess();
      },
      () => {
        showMessageError();
        closeMessageError();
      },
      new FormData(evt.target),
    );
  });
};

setAdFormSubmit();

export { setFormDisabled, adFormActivate, setFilterActive, inputAddress, mapFilter };
