import { mkdir, writeFile } from 'fs/promises';

export const createNewSchema = async (userId, schemaName, data) => {
  try {
    const folderPath = `./db/models/modelsCreatedByUsers/${userId}`;
    const filePath = `${folderPath}/${schemaName}.js`;

    await mkdir(folderPath, { recursive: true });
    const preparedData = data.replace(/["']/g, '');

    const schemaData = `
    import mongoose from 'mongoose';

    const Schema${schemaName} = new mongoose.Schema(

      ${preparedData}
      , { versionKey: false ,
        capped: {
        size: 1048576, 
        max: 1000 
      } }
    );
    const id_${userId} = mongoose.model("${userId}", Schema${schemaName});

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
