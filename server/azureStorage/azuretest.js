import dotenv from 'dotenv';
import { BlobServiceClient } from '@azure/storage-blob';

dotenv.config();
export const azureSaveBlob = async (blob, schemaFile) => {
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

    // Get a block blob client
    const blockBlobClient = containerClient.getBlockBlobClient(schemaFile);

    // Display blob name and url
    console.log(
      `\nUploading to Azure storage as blob\n\tname: ${schemaFile}:\n\tURL: ${blockBlobClient.url}`,
    );

    const uploadBlobResponse = await blockBlobClient.upload(blob, blob.length);
    console.log(
      `Blob was uploaded successfully. requestId: ${uploadBlobResponse.requestId}`,
    );
  } catch (error) {
    console.error(error);
  }
};
