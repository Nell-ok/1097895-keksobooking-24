const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const WIDTH_PHOTO = 45;
const HEIGHT_PHOTO = 40;
const DEFAULT_URL_AVATAR = 'img/muffin-grey.svg';
const adFormAvatarInput = document.querySelector('[name="avatar"]');
const adFormAvatarPicture = document.querySelector('.ad-form-header__preview img');
const adFormImagesInput = document.querySelector('[name="images"]');
const adFormPhoto = document.querySelector('.ad-form__photo');
const adFormPhotoCard = document.createElement('img');

const onInputChange = (input, picture) => {
  input.addEventListener('change', () => {
    const fileChange = input.files[0];
    const fileName = fileChange.name.toLowerCase();
    const nameMatches = FILE_TYPES.some((fileType) => fileName.endsWith(fileType));

    if (nameMatches) {
      adFormPhoto.appendChild(adFormPhotoCard);
      picture.width = WIDTH_PHOTO;
      picture.height = HEIGHT_PHOTO;
      picture.src = URL.createObjectURL(fileChange);
    }
  });
};

const removePictures = () => {
  adFormPhoto.removeChild(adFormPhotoCard);
  adFormAvatarPicture.src = DEFAULT_URL_AVATAR;
};

onInputChange(adFormAvatarInput, adFormAvatarPicture);

onInputChange(adFormImagesInput, adFormPhotoCard);

export { removePictures };
