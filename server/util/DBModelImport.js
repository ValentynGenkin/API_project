export const DBModelImport = async (userId, schemaName) => {
  try {
    const model = await import(
      `../db/models/modelsCreatedByUsers/${userId}/${schemaName}.js`
    );
    return model;
  } catch (error) {
    console.error('Model import error', error.message);
    throw error;
  }
};
