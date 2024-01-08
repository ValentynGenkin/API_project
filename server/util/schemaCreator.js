import { mkdir, writeFile } from 'fs/promises';

export const createNewSchema = async (userId, schemaName, data) => {
  try {
    const folderPath = `./db/models/modelsCreatedByUsers/${userId}`;
    const filePath = `${folderPath}/${schemaName}.js`;

    await mkdir(folderPath, { recursive: true });

    const schemaData = `
    import mongoose from 'mongoose';

    const ${userId}Schema = new mongoose.Schema({

      ${data}
      
    });
    const userId = mongoose.model("${userId}", ${userId}Schema);

    export default ${userId}Schema;
    `;

    await writeFile(filePath, schemaData, 'utf-8');
  } catch (error) {
    console.error('Error creating schema file:', error);
    throw error;
  }
};
