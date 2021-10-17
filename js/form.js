const adForm = document.querySelector('.ad-form');
const adFormElement = adForm.querySelector('.ad-form__element');
const adFormHeaderElement = adForm.querySelector('.ad-form-header');
const mapFilter = document.querySelector('.map__filters');
const mapElementFilter = mapFilter.querySelector('.map__filter');
const mapFeaturesFilter = mapFilter.querySelector('.map__features');

const setFormDisabled = () => {
  adForm.setAttribute('disabled', 'disabled');
  adForm.classList.add('ad-form--disabled');
  adFormElement.setAttribute('disabled', 'disabled');
  adFormElement.classList.add('ad-form__element--disabled');
  adFormHeaderElement.setAttribute('disabled', 'disabled');
  adFormHeaderElement.classList.add('ad-form-header--disabled');
  mapFilter.setAttribute('disabled', 'disabled');
  mapFilter.classList.add('map__filters--disabled');
  mapElementFilter.setAttribute('disabled', 'disabled');
  mapElementFilter.classList.add('map__filter--disabled');
  mapFeaturesFilter.setAttribute('disabled', 'disabled');
  mapFeaturesFilter.classList.add('map__features--disabled');
};

const setFormActive = () => {
  adForm.removeAttribute('disabled', 'disabled');
  adForm.classList.remove('ad-form--disabled');
  adFormElement.removeAttribute('disabled', 'disabled');
  adFormElement.classList.remove('ad-form__element--disabled');
  adFormHeaderElement.removeAttribute('disabled', 'disabled');
  adFormHeaderElement.classList.remove('ad-form-header--disabled');
  mapFilter.removeAttribute('disabled', 'disabled');
  mapFilter.classList.remove('map__filters--disabled');
  mapElementFilter.removeAttribute('disabled', 'disabled');
  mapElementFilter.classList.remove('map__filter--disabled');
  mapFeaturesFilter.removeAttribute('disabled', 'disabled');
  mapFeaturesFilter.classList.remove('map__features--disabled');
};

setFormDisabled();
setFormActive();
