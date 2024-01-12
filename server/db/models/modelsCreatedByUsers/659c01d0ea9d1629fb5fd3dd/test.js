import mongoose from 'mongoose';

const testSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
});
const id_659c01d0ea9d1629fb5fd3dd = mongoose.model(
  '659c01d0ea9d1629fb5fd3dd',
  testSchema,
);

export default id_659c01d0ea9d1629fb5fd3dd;
