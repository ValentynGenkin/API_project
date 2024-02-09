export const handleObject = (index, currentObj, newObj, updateObj) => {
  let data = [...currentObj];
  data[index] = newObj;
  updateObj(data);
};
