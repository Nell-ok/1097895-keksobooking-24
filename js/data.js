import {returnRandomNumber, returnRandomFractionalNumber, getRandomArrayElement, shuffleArray} from './util.js';

const AVATARS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const TITLES = ['Сдам жилье!', 'Сдам помещение.', 'Сдам в аренду дом.'];
const LAT_LATITUDE = 35.65000;
const LAT_LONGITUDE = 35.70000;
const LNG_LATITUDE = 139.70000;
const LNG_LONGITUDE = 139.80000;
const BIGEST_NUMBER = 5;
const MIN_PRICE = 1000;
const MAX_PRICE = 10000;
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const MIN_ROOMS = 1;
const MAX_ROOMS = 5;
const MIN_GUESTS = 1;
const MAX_GUESTS = 10;
const TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = ['Отличный ремонт по индивидуальному проекту.', 'С видом на море!', 'Школа в шаговой доступности.'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const LENGTH_NEW_ARRAY = 10;

const createOffer = () => {
  const latFractionalNamber = returnRandomFractionalNumber(LAT_LATITUDE, LAT_LONGITUDE, BIGEST_NUMBER);
  const lngFractionalNamber = returnRandomFractionalNumber(LNG_LATITUDE, LNG_LONGITUDE, BIGEST_NUMBER);
  return {
    author: `img/avatars/user${AVATARS[returnRandomNumber(0, AVATARS.length - 1)]}.png`,
    offer: {
      title: getRandomArrayElement(TITLES),
      addres: `${latFractionalNamber}, ${lngFractionalNamber}`,
      price: returnRandomNumber(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(TYPES),
      rooms: returnRandomNumber(MIN_ROOMS, MAX_ROOMS),
      guests: returnRandomNumber(MIN_GUESTS, MAX_GUESTS),
      checkin: getRandomArrayElement(TIME),
      checkout: getRandomArrayElement(TIME),
      features: shuffleArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: shuffleArray(PHOTOS),
    },
    location: {
      lat: latFractionalNamber,
      lng: lngFractionalNamber,
    },
  };
};

const createOffers = () => new Array(LENGTH_NEW_ARRAY).fill(null).map(() => createOffer());

export {createOffers};
