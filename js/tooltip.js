const templateSuccess = document.querySelector('#success').content;
const templateError = document.querySelector('#error').content;
const successElement = templateSuccess.querySelector('.success');
const errorElement = templateError.querySelector('.error');
const newSuccessElement = successElement.cloneNode(true);
const newErrorElement = errorElement.cloneNode(true);
const errorButton = newErrorElement.querySelector('.error__button');

const showMessageSuccess = () => {
  document.body.appendChild(newSuccessElement);
  newSuccessElement.classList.add('active');
};

const showMessageError = () => {
  document.body.appendChild(newErrorElement);
  newErrorElement.classList.add('active');
};

const closeMessageSuccess = () => {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      newSuccessElement.remove();
    }
  });
  document.body.addEventListener('click', () => {
    newSuccessElement.remove();
  });
};

const closeMessageError = () => {
  errorButton.addEventListener('click', () => {
    newErrorElement.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      newErrorElement.remove();
    }
  });
  document.body.addEventListener('click', () => {
    newErrorElement.remove();
  });
};

export { showMessageSuccess, showMessageError, closeMessageSuccess, closeMessageError };
