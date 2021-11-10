import { isEscapeKey } from './util.js';

const templateSuccess = document.querySelector('#success').content;
const templateError = document.querySelector('#error').content;
const successElement = templateSuccess.querySelector('.success');
const errorElement = templateError.querySelector('.error');
const newSuccessElement = successElement.cloneNode(true);
const newErrorElement = errorElement.cloneNode(true);
const newErrorButton = newErrorElement.querySelector('.error__button');

const showMessage = (element) => {
  document.body.appendChild(element);
  element.classList.add('active');
};

const setCloseMessage = (element) => {
  const closeMessage = () => {
    element.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
  };
  function onDocumentKeydown(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeMessage(element);
    }
  }
  document.addEventListener('keydown', onDocumentKeydown);

  function onBodyClick() {
    closeMessage(element);
  }
  document.body.addEventListener('click', onBodyClick);
};

const showMessageSuccess = () => {
  showMessage(newSuccessElement);
};

const showMessageError = () => {
  showMessage(newErrorElement);
};

const closeMessageSuccess = () => {
  setCloseMessage(newSuccessElement);
};

const closeMessageError = () => {
  newErrorButton.addEventListener('click', () => {
    newErrorElement.remove();
  });
  setCloseMessage(newErrorElement);
};

export { showMessageSuccess, showMessageError, closeMessageSuccess, closeMessageError };
