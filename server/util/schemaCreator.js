import { mkdir, writeFile } from 'fs/promises';

export const createNewSchema = async (userId, schemaName, data) => {
  try {
    const folderPath = `./db/models/modelsCreatedByUsers/${userId}`;
    const filePath = `${folderPath}/${schemaName}.js`;

    await mkdir(folderPath, { recursive: true });
    const dataToSTring = JSON.stringify(data);
    const preparedData = dataToSTring.replace(/["']/g, '');

    const schemaData = `
    import mongoose from 'mongoose';

    const ${schemaName}Schema = new mongoose.Schema(

      ${preparedData}
      , { versionKey: false }
    );
    const id_${userId} = mongoose.model("${userId}", ${schemaName}Schema);

    export default id_${userId};
    `;

    await writeFile(filePath, schemaData, 'utf-8');

    return {
      success: true,
      message: 'Schema created successfully',
    };
  } catch (error) {
    console.error('Error creating schema file:', error);
    throw error;
  }
};
