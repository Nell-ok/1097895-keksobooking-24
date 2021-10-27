const createPopup = (newItem) => {
  const templateCard = document.querySelector('#card').content;
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
  const popupFeatures = newPopup.querySelector('.popup__features');
  const featureList = popupFeatures.querySelectorAll('.popup__feature');
  const popupPhotos = newPopup.querySelector('.popup__photos');
  const photoElement = popupPhotos.querySelector('.popup__photo');
  const popupFragment = document.createDocumentFragment();

  const captionsOfType = {
    palace: 'Дворец для palace',
    flat: 'Квартира для flat',
    house: 'Дом для house',
    bungalow: 'Бунгало для bungalow',
    hotel: 'Отель для hotel',
  };

  const newFeatures = newItem.offer.features;
  const newPhotosArray = newItem.offer.photos;

  for (let i = 0; i < newPhotosArray.length; i++) {
    const newPhotoElement = document.createElement('img');
    newPhotoElement.classList.add('popup__photo');
    newPhotoElement.src = newPhotosArray[i];
    newPhotoElement.alt = 'Фотография жилья';
    newPhotoElement.width = 45;
    newPhotoElement.height = 40;
    popupFragment.appendChild(newPhotoElement);
  }

  popupPhotos.appendChild(popupFragment);
  photoElement.remove();

  const getCaption = (name) => captionsOfType[name];

  featureList.forEach((item) => {
    const isNecessary = newFeatures.some((feature) => item.classList.contains(`popup__feature--${feature}`));
    if (!isNecessary) {
      item.remove();
    }
  });

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
