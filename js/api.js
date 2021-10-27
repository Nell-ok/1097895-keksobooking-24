import { createOffers } from './map.js';

fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((offers) => {
    createOffers(offers);
  });
