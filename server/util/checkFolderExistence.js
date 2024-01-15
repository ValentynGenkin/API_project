import { access, constants } from 'fs/promises';

export const checkFolderExistence = async (folderPath) => {
  try {
    await access(folderPath, constants.F_OK);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return false;
    } else {
      console.error(`Error reading fs:`, error.message);
      throw error;
    }
  }
};
