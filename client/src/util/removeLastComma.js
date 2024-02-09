export const removeLastComma = (str) => {
  if (str.trim().slice(-1) === ',') {
    return str.slice(0, -1);
  } else {
    return str;
  }
};
