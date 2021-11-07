const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const WIDTH_PHOTO = 45;
const HEIGHT_PHOTO = 40;
const adFormAvatarInput = document.querySelector('[name="avatar"]');
const adFormAvatarPicture = document.querySelector('.ad-form-header__preview img');
const adFormImagesInput = document.querySelector('[name="images"]');
const adFormPhoto = document.querySelector('.ad-form__photo');
const adFormPhotoCard = document.createElement('img');
adFormPhoto.appendChild(adFormPhotoCard);
adFormPhotoCard.width = WIDTH_PHOTO;
adFormPhotoCard.height = HEIGHT_PHOTO;

const onInputChange = (input, picture) => {
  input.addEventListener('change', () => {
    const fileChange = input.files[0];
    const fileName = fileChange.name.toLowerCase();
    const nameMatches = FILE_TYPES.some((fileType) => fileName.endsWith(fileType));

    if (nameMatches) {
      picture.src = URL.createObjectURL(fileChange);
    }
  });
};

onInputChange(adFormAvatarInput, adFormAvatarPicture);

onInputChange(adFormImagesInput, adFormPhotoCard);
