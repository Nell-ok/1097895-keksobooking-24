import { showAlert } from './util.js';

const SERVER_GET = 'https://24.javascript.pages.academy/keksobooking/data';
const SERVER_POST = 'https://24.javascript.pages.academy/keksobooking';

const getData = (onSuccess) => {
  fetch(SERVER_GET)
    .then((response) => response.json())
    .then((offers) => {
      onSuccess(offers);
    })
    .catch(() => {
      showAlert('ОШИБКА!');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SERVER_POST,
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    response.ok ? onSuccess() : onFail();
  })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };
