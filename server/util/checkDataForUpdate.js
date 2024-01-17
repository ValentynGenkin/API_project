export const checkDataForUpdate = (schema, newData) => {
  return Object.keys(newData).every((key) => Object.keys(schema).includes(key));
};
