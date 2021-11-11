const NEW_PHOTO_WIDTH = 45;
const NEW_PHOTO_HEIGHT = 40;
const templateCard = document.querySelector('#card').content;

const createPopup = (newItem) => {
  const popupElement = templateCard.querySelector('.popup');
  const newPopup = popupElement.cloneNode(true);
  const titleElement = newPopup.querySelector('.popup__title');
  const addressElement = newPopup.querySelector('.popup__text--address');
  const priceElement = newPopup.querySelector('.popup__text--price');
  const typeElement = newPopup.querySelector('.popup__type');
  const capacityElement = newPopup.querySelector('.popup__text--capacity');
  const timeElement = newPopup.querySelector('.popup__text--time');
  const descriptionElement = newPopup.querySelector('.popup__description');
  const avatarElement = newPopup.querySelector('.popup__avatar');
  const featuresList = newPopup.querySelector('.popup__features');
  const featureElements = featuresList.querySelectorAll('.popup__feature');
  const photosList = newPopup.querySelector('.popup__photos');
  const photoElement = photosList.querySelector('.popup__photo');
  const popupFragment = document.createDocumentFragment();

  const newFeatures = newItem.offer.features;
  const newPhotos = newItem.offer.photos;

  const captionsOfType = {
    palace: 'Дворец',
    flat: 'Квартира',
    house: 'Дом',
    bungalow: 'Бунгало',
    hotel: 'Отель',
  };

  const getCaption = (name) => captionsOfType[name];

  if (!newPhotos) {
    photosList.remove();
  } else {
    newPhotos.forEach((newPhotoElement, item) => {
      newPhotoElement = document.createElement('img');
      newPhotoElement.classList.add('popup__photo');
      newPhotoElement.src = newPhotos[item];
      newPhotoElement.alt = 'Фотография жилья';
      newPhotoElement.width = NEW_PHOTO_WIDTH;
      newPhotoElement.height = NEW_PHOTO_HEIGHT;
      popupFragment.appendChild(newPhotoElement);
    });

    photosList.appendChild(popupFragment);
    photoElement.remove();
  }

  if (!newFeatures) {
    featureElements.remove;
    return;
  }
  {
    featureElements.forEach((item) => {
      const isNecessary = newFeatures.some((feature) => item.classList.contains(`popup__feature--${feature}`));
      if (!isNecessary) {
        item.remove();
      }
    });
  }

  newItem.offer.title ? titleElement.textContent = newItem.offer.title : titleElement.remove();
  newItem.offer.address ? addressElement.textContent = newItem.offer.address : addressElement.remove();
  newItem.offer.price ? priceElement.textContent = `${newItem.offer.price} ₽/ночь` : priceElement.remove();
  newItem.offer.type ? typeElement.textContent = getCaption(newItem.offer.type) : typeElement.remove();
  newItem.offer.rooms || newItem.offer.guests ? capacityElement.textContent = `${newItem.offer.rooms} комнаты для ${newItem.offer.guests} гостей` : capacityElement.remove();
  newItem.offer.checkin || newItem.offer.checkout ? timeElement.textContent = `Заезд после ${newItem.offer.checkin}, выезд до ${newItem.offer.checkout}` : timeElement.remove();
  newItem.offer.description ? descriptionElement.textContent = newItem.offer.description : descriptionElement.remove();
  newItem.author.avatar ? avatarElement.src = newItem.author.avatar : avatarElement.remove();

  return newPopup;
};

export { createPopup };
