import {createOffers} from './data.js';
import {mapCanvasElement} from './map.js';

const templateCard = document.querySelector('#card').content;
const popup = templateCard.querySelector('.popup');

const CAPTIONS = {
  palace: 'Дворец для palace',
  flat: 'Квартира для flat',
  house: 'Дом для house',
  bungalow: 'Бунгало для bungalow',
  hotel: 'Отель для hotel',
};

const similarOffers = createOffers();

similarOffers.forEach((newItem) => {
  const newPopup = popup.cloneNode(true);
  const popupFeatures = newPopup.querySelector('.popup__features');
  const featureList = popupFeatures.querySelectorAll('.popup__feature');
  const newFeatures = newItem.offer.features;

  const getCaption = (name) => CAPTIONS[name];

  featureList.forEach((item) => {
    const isNecessary = newFeatures.some((feature) => item.classList.contains(`popup__feature--${feature}`));
    if(!isNecessary) {
      item.remove();
    }
  });

  newPopup.querySelector('.popup__title').textContent = newItem.offer.title;
  newPopup.querySelector('.popup__text--address').textContent = newItem.offer.addres;
  newPopup.querySelector('.popup__text--price').textContent = `${newItem.offer.price} ₽/ночь`;
  newPopup.querySelector('.popup__type').textContent = getCaption(newItem.offer.type);
  newPopup.querySelector('.popup__text--capacity').textContent = `${newItem.offer.rooms} комнаты для ${newItem.offer.guests} гостей`;
  newPopup.querySelector('.popup__text--time').textContent = `Заезд после ${newItem.offer.checkin}, выезд до ${newItem.offer.checkout}`;
  newPopup.querySelector('.popup__description').textContent = newItem.offer.description;
  newPopup.querySelector('.popup__photo').src = newItem.offer.photos;
  newPopup.querySelector('.popup__avatar').src = newItem.author;

  mapCanvasElement.appendChild(newPopup);
});
