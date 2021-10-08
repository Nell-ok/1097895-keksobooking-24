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

function getRandomArrayElement(elements) {
  return elements[returnRandomNumber(0, elements.length - 1)];
}

function shuffleArray(array) {
  const copyArray = array.slice();
  for (let i = copyArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copyArray[i];
    copyArray[i] = copyArray[j];
    copyArray[j] = temp;
  }
  copyArray.length = returnRandomNumber(0, copyArray.length);
  return copyArray;
}

export {returnRandomNumber, returnRandomFractionalNumber, getRandomArrayElement, shuffleArray};
