import { BlobClient, BlobServiceClient } from '@azure/storage-blob';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export async function importModuleFromBlob(blobUrl, userId) {
  try {
    const AZURE_STORAGE_CONNECTION_STRING =
      process.env.AZURE_STORAGE_CONNECTION_STRING;

    const blobServiceClient = BlobServiceClient.fromConnectionString(
      AZURE_STORAGE_CONNECTION_STRING,
    );

    const blobClient = new BlobClient(blobUrl, blobServiceClient.pipeline);

    const downloadResponse = await blobClient.download();
    const codeText = await streamToString(downloadResponse.readableStreamBody);

    const schemaFromBlob = new mongoose.Schema(JSON.parse(codeText), {
      strict: 'throw',
      versionKey: false,
      capped: { size: 1048576, max: 1000 },
    });

    const id = {};

    try {
      id[userId] = mongoose.model(userId.toString());
    } catch (e) {
      id[userId] = mongoose.model(userId.toString(), schemaFromBlob);
    }

    return id[userId];
  } catch (error) {
    console.error('Model import error', error.message);
    throw error;
  }
}

async function streamToString(readableStream) {
  const chunks = [];
  for await (const chunk of readableStream) {
    chunks.push(chunk.toString());
  }
  return chunks.join('');
}
