function returnRandomNumber(from, to) {
  if (to <= from) {
    return false;
  }

  return Math.floor(Math.random() * (to - from + 1)) + from;
}

returnRandomNumber(10, 100);

function returnRandomFractionalNumber(from, to, numberOfCharacters) {
  if (to <= from) {
    return false;
  }

  const randomNumber = Math.random() * (to - from + 1) + from;
  return randomNumber.toFixed(numberOfCharacters);
}

returnRandomFractionalNumber(10, 100, 1);
