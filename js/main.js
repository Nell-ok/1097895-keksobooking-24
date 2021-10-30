import './popup.js';
import { createOffers } from './map.js';
import { getData } from './api.js';
import { setAdFormSubmit } from './form.js';
import './tooltip.js';

getData((offers) => {
  createOffers(offers);
});

setAdFormSubmit();
