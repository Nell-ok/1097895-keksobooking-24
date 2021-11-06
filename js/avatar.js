const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const adFormAvatarInput = document.querySelector('[name="avatar"]');
const adFormAvatarPicture = document.querySelector('.ad-form-header__preview img');
const adFormImagesInput = document.querySelector('[name="images"]');
const adFormPhoto = document.querySelector('.ad-form__photo');

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
    const adFormPhotoCard = document.createElement('img');
    adFormPhoto.appendChild(adFormPhotoCard);
    adFormPhotoCard.width = 45;
    adFormPhotoCard.height = 40;
    adFormPhotoCard.src = URL.createObjectURL(fileChange);
  }
});
