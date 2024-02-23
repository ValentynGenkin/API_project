export const checkLastCharacter = (inputString) => {
  const lastCharacter = inputString.charAt(inputString.length - 1);

  if (!isNaN(parseInt(lastCharacter))) {
    return inputString;
  } else {
    return `${inputString}s`;
  }
};
