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

const closeMessage = (element) => {
  const onDocumentKeydown = document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      element.remove();
      document.removeEventListener('keydown', onDocumentKeydown);
    }
  });
  const onDocumentClick = document.body.addEventListener('click', () => {
    element.remove();
    document.body.removeEventListener('click', onDocumentClick);
  });
};

const showMessageSuccess = () => {
  showMessage(newSuccessElement);
};

const showMessageError = () => {
  showMessage(newErrorElement);
};

const closeMessageSuccess = () => {
  closeMessage(newSuccessElement);
};

const closeMessageError = () => {
  newErrorButton.addEventListener('click', () => {
    newErrorElement.remove();
  });
  closeMessage(newErrorElement);
};

export { showMessageSuccess, showMessageError, closeMessageSuccess, closeMessageError };
