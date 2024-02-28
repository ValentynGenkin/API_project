import dotenv from 'dotenv';
import { BlobServiceClient } from '@azure/storage-blob';
import User from '../db/models/userModel.js';

dotenv.config();
export const azureSaveBlob = async (id, blob, schemaFile) => {
  try {
    const AZURE_STORAGE_CONNECTION_STRING =
      process.env.AZURE_STORAGE_CONNECTION_STRING;

    if (!AZURE_STORAGE_CONNECTION_STRING) {
      throw Error('Azure Storage Connection string not found');
    }

    const blobServiceClient = BlobServiceClient.fromConnectionString(
      AZURE_STORAGE_CONNECTION_STRING,
    );

    const containerName = 'schemascreatedbyusers';

    const containerClient = blobServiceClient.getContainerClient(containerName);

    const exists = await containerClient.exists();

    if (!exists) {
      await containerClient.exists();
    }

    const blockBlobClient = containerClient.getBlockBlobClient(schemaFile);

    await blockBlobClient.upload(blob, blob.length);

    await User.updateOne(
      { _id: id },
      { $set: { schemaUrl: blockBlobClient.url } },
    );
  } catch (error) {
    console.error(error);
  }
};
