import { BlobServiceClient } from '@azure/storage-blob';
import dotenv from 'dotenv';

dotenv.config();

export async function deleteBlob(userId, schemaName) {
  try {
    const AZURE_STORAGE_CONNECTION_STRING =
      process.env.AZURE_STORAGE_CONNECTION_STRING;

    const blobServiceClient = BlobServiceClient.fromConnectionString(
      AZURE_STORAGE_CONNECTION_STRING,
    );

    const containerName = process.env.AZURE_CONTAINER;

    const containerClient = blobServiceClient.getContainerClient(containerName);

    const blobName = `${schemaName}_${userId}.js`;

    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    await blockBlobClient.deleteIfExists();
  } catch (error) {
    console.error('Delete error', error.message);
    throw error;
  }
}
