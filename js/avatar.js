const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const WIDTH_PHOTO = 45;
const HEIGHT_PHOTO = 40;
const DEFAULT_URL_AVATAR = 'img/muffin-grey.svg';
const adFormAvatarInput = document.querySelector('[name="avatar"]');
const adFormAvatarPicture = document.querySelector('.ad-form-header__preview img');
const adFormImagesInput = document.querySelector('[name="images"]');
const adFormPhoto = document.querySelector('.ad-form__photo');
const adFormPhotoCard = document.createElement('img');

adFormAvatarInput.addEventListener('change', () => {
  const fileChange = adFormAvatarInput.files[0];
  const fileName = fileChange.name.toLowerCase();
  const nameMatches = FILE_TYPES.some((fileType) => fileName.endsWith(fileType));

  if (nameMatches) {
    adFormAvatarPicture.src = URL.createObjectURL(fileChange);
  }
});

adFormImagesInput.addEventListener('change', () => {
  const fileChange = adFormImagesInput.files[0];
  const fileName = fileChange.name.toLowerCase();
  const nameMatches = FILE_TYPES.some((fileType) => fileName.endsWith(fileType));

  if (nameMatches) {
    adFormPhoto.appendChild(adFormPhotoCard);
    adFormPhotoCard.width = WIDTH_PHOTO;
    adFormPhotoCard.height = HEIGHT_PHOTO;
    adFormPhotoCard.src = URL.createObjectURL(fileChange);
  }
});

const removePictures = () => {
  if (adFormPhotoCard.src !== '') {
    adFormPhoto.removeChild(adFormPhotoCard);
  }
  adFormAvatarPicture.src = DEFAULT_URL_AVATAR;
};

export { removePictures };
