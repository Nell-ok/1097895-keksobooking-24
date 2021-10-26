const MIN_LENGTH_TITLE = 30;
const MAX_LENGTH_TITLE = 100;
const MAX_PRICE = 1000000;
const NUMBER_ROOMS = 100;

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
const mapFilter = document.querySelector('.map__filters');
const mapFilterElements = mapFilter.querySelectorAll('.map__filter');
const mapFeaturesFilter = mapFilter.querySelector('.map__features');

const adFormButton = document.querySelector('.ad-form__submit');
const selectRooms = document.querySelector('[name="rooms"]');
const selectCapacity = document.querySelector('[name="capacity"]');
const selectType = document.querySelector('[name="type"]');
const selectTimein = document.querySelector('[name="timein"]');
const selectTimeout = document.querySelector('[name="timeout"]');


const setFormDisabled = () => {
  adForm.setAttribute('disabled', 'disabled');
  adForm.classList.add('ad-form--disabled');
  for (const adFormElement of adFormElements) {
    adFormElement.setAttribute('disabled', 'disabled');
    adFormElement.classList.add('ad-form__element--disabled');
  }
  adFormHeaderElement.setAttribute('disabled', 'disabled');
  adFormHeaderElement.classList.add('ad-form-header--disabled');
  mapFilter.setAttribute('disabled', 'disabled');
  mapFilter.classList.add('map__filters--disabled');
  for (const mapFilterElement of mapFilterElements) {
    mapFilterElement.setAttribute('disabled', 'disabled');
    mapFilterElement.classList.add('map__filter--disabled');
  }
  mapFeaturesFilter.setAttribute('disabled', 'disabled');
  mapFeaturesFilter.classList.add('map__features--disabled');
};

const setFormActive = () => {
  adForm.removeAttribute('disabled', 'disabled');
  adForm.classList.remove('ad-form--disabled');
  for (const adFormElement of adFormElements) {
    adFormElement.removeAttribute('disabled', 'disabled');
    adFormElement.classList.remove('ad-form__element--disabled');
  }
  adFormHeaderElement.removeAttribute('disabled', 'disabled');
  adFormHeaderElement.classList.remove('ad-form-header--disabled');
  mapFilter.removeAttribute('disabled', 'disabled');
  mapFilter.classList.remove('map__filters--disabled');
  for (const mapFilterElement of mapFilterElements) {
    mapFilterElement.removeAttribute('disabled', 'disabled');
    mapFilterElement.classList.remove('map__filter--disabled');
  }
  mapFeaturesFilter.removeAttribute('disabled', 'disabled');
  mapFeaturesFilter.classList.remove('map__features--disabled');
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
  if (valuePrice > MAX_PRICE) {
    inputPrice.setCustomValidity(`Максимальное значение ${MAX_PRICE}`);
  } else {
    inputPrice.setCustomValidity('');
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

adFormButton.addEventListener('click', () => {
  onRoomsCapacityChange();
});

export { setFormDisabled, setFormActive, inputAddress };
