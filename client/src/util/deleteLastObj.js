export const deleteLastItem = (obj, setObj) => {
  const updatedArray = [...obj];
  updatedArray.pop();
  setObj(updatedArray);
};
