function returnRandomNumber(from, to) {
  if (from < 0 || to <= from) {
    return false;
  }

  return Math.floor(Math.random() * (to - from + 1)) + from;
}

returnRandomNumber(10, 100);

function returnRandomFractionalNumber(from, to, numberOfCharacters) {
  if (from < 0 || to <= from) {
    return false;
  }

  const randomNumber = Math.random() * (to - from + 1) + from;
  return randomNumber.toFixed(numberOfCharacters);
}

returnRandomFractionalNumber(10, 100, 1);

const AVATARS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const PRICES = [1000, 2000, 3000, 4000];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const ROOMS = [1, 2, 3, 4, 5];
const GUESTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const createOffer = () => {
  const latFractionalNamber = returnRandomFractionalNumber(35.65000, 35.70000, 5);
  const lngFractionalNamber = returnRandomFractionalNumber(139.70000, 139.80000, 5);
  return {
    author: `img/avatars/user${AVATARS[returnRandomNumber(0, AVATARS.length - 1)]}.png`,
    offer: {
      title: 'Сдам жилье!',
      addres: `${latFractionalNamber}, ${lngFractionalNamber}`,
      price: PRICES[returnRandomNumber(0, PRICES.length - 1)],
      type: TYPES[returnRandomNumber(0, TYPES.length - 1)],
      rooms: ROOMS[returnRandomNumber(0, ROOMS.length - 1)],
      guests: GUESTS[returnRandomNumber(0, GUESTS.length - 1)],
      checkin: TIME[returnRandomNumber(0, TIME.length - 1)],
      checkout: TIME[returnRandomNumber(0, TIME.length - 1)],
      features () {
        const maxLength = FEATURES.length;
        const lengthNewFeatures = returnRandomNumber(1, maxLength);
        return Array.from({length: lengthNewFeatures}, FEATURES[returnRandomNumber(0, FEATURES.length - 1)]);
      },
      description: 'Отличный ремонт по индивидуальному проекту.',
      photos () {
        const maxLength = PHOTOS.length;
        const lengthNewFeatures = returnRandomNumber(1, maxLength);
        return Array.from({length: lengthNewFeatures}, PHOTOS[returnRandomNumber(0, PHOTOS.length - 1)]);
      },
    },
    location: {
      lat: latFractionalNamber,
      lng: lngFractionalNamber,
    },
  };
};

const similarOffer = Array.from({length: 10}, createOffer);

similarOffer();
