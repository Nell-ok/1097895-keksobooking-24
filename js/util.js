const ALERT_INDEX = 100;
const ALERT_POSITION = 'absolute';
const ALERT_PADDING = '10px 3px';
const ALERT_FONT_SIZE = '30px';
const ALERT_TEXT_ALIGN = 'center';
const ALERT_BACKGROUND_COLOR = 'red';
const ALERT_SHOW_TIME = 5000;

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = ALERT_INDEX;
  alertContainer.style.position = ALERT_POSITION;
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = ALERT_PADDING;
  alertContainer.style.fontSize = ALERT_FONT_SIZE;
  alertContainer.style.textAlign = ALERT_TEXT_ALIGN;
  alertContainer.style.backgroundColor = ALERT_BACKGROUND_COLOR;

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { showAlert, isEscapeKey };
