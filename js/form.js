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
