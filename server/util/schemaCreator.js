import { azureSaveBlob } from '../azureStorage/azureSaveBlob.js';

export const createNewSchema = async (userId, schemaName, data) => {
  try {
    const schemaFile = `${schemaName}_${userId}.js`;

    const preparedData = data;

    await azureSaveBlob(userId, preparedData, schemaFile);

    return {
      success: true,
      message: 'Schema created successfully',
    };
  } catch (error) {
    console.error('Error creating schema file:', error);
    throw error;
  }
};
