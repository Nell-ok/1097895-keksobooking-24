const MIN_LENGTH_TITLE = 30;
const MAX_LENGTH_TITLE = 100;
const MAX_PRICE = 1000000;
const inputTitle = document.querySelector('[name="title"]');
const inputPrice = document.querySelector('[name="price"]');

const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('.ad-form__element');
const adFormHeaderElement = adForm.querySelector('.ad-form-header');
const mapFilter = document.querySelector('.map__filters');
const mapFilterElements = mapFilter.querySelectorAll('.map__filter');
const mapFeaturesFilter = mapFilter.querySelector('.map__features');

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

setFormDisabled();
setFormActive();

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

const selectRooms = document.querySelector('[name="rooms"]');
const selectCapacity = document.querySelector('[name="capacity"]');

selectRooms.addEventListener('change', () => {
  if(selectRooms.options[0].selected) {
    selectCapacity.options[0].setAttribute('disabled', 'disabled');
    selectCapacity.options[1].setAttribute('disabled', 'disabled');
    selectCapacity.options[3].setAttribute('disabled', 'disabled');
    selectCapacity.options[2].removeAttribute('disabled', 'disabled');
  } else if(selectRooms.options[1].selected) {
    selectCapacity.options[0].setAttribute('disabled', 'disabled');
    selectCapacity.options[1].removeAttribute('disabled', 'disabled');
    selectCapacity.options[3].setAttribute('disabled', 'disabled');
    selectCapacity.options[2].removeAttribute('disabled', 'disabled');
  } else if(selectRooms.options[2].selected) {
    selectCapacity.options[0].removeAttribute('disabled', 'disabled');
    selectCapacity.options[1].removeAttribute('disabled', 'disabled');
    selectCapacity.options[3].setAttribute('disabled', 'disabled');
    selectCapacity.options[2].removeAttribute('disabled', 'disabled');
  } else if(selectRooms.options[3].selected) {
    selectCapacity.options[3].removeAttribute('disabled', 'disabled');
    selectCapacity.options[0].setAttribute('disabled', 'disabled');
    selectCapacity.options[2].setAttribute('disabled', 'disabled');
    selectCapacity.options[1].setAttribute('disabled', 'disabled');
  }
});

/*const createDependency = (roomElement, capacityElement) => {
  const valueRoom = +roomElement.value;
  for (let j = 0; j < capacityElement.options.length; j++) {
    const valueCapacity = +capacityElement.options[j].value;
    if (valueRoom !== 0 && valueCapacity !== 100 && valueRoom > valueCapacity) {
      roomElement.setCustomValidity('Количество комнат не соответствует количеству гостей');
    } else if (valueRoom !== 0 && valueCapacity === 100) {
      roomElement.setCustomValidity('Не для гостей');
    } else {
      roomElement.setCustomValidity('');
    }
  }
  roomElement.reportValidity();
};

selectRooms.addEventListener('change', createDependency(selectRooms, selectCapacity));
selectCapacity.addEventListener('change', createDependency(selectRooms, selectCapacity));*/
