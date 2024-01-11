import path from 'path';
import { mkdir, writeFile, copyFile, readFile } from 'fs/promises';

export const endpointsCreator = async (endpointName, userId) => {
  const sampleFilePath = './routes/routsCreatedByUsers/sample/sample.js';
  const newFilePath = `./routes/routsCreatedByUsers/${userId}/${userId}.js`;
  const wordToReplace = 'name';
  const newWord = endpointName;

  try {
    await mkdir(path.dirname(newFilePath), { recursive: true });

    await copyFile(sampleFilePath, newFilePath);

    const fileContent = await readFile(newFilePath, 'utf-8');
    const updatedContent = fileContent.replace(
      new RegExp(wordToReplace, 'g'),
      newWord,
    );
    await writeFile(newFilePath, updatedContent, 'utf-8');

    return {
      success: true,
      message: 'Endpoints created successfully',
    };
  } catch (error) {
    console.error('Error creating endpoints file:', error);
    throw error;
  }
};
