import mongoose from 'mongoose';
import User from '../../db/models/userModel.js';
import { comparePassword } from '../../util/comparePassword.js';
import { verifyToken } from '../../util/verifyToken.js';
import { checkLastCharacter } from '../../util/lastCharacterCheck.js';
import { deleteBlob } from '../../azureStorage/deleteBlob.js';

export const deleteSchema = async (req, res) => {
  try {
    const token = req.cookies.customer_access;

    if (!token) {
      return res.status(403).json({
        success: false,
        msg: 'Token not provided',
      });
    }

    const { password } = req.body;

    if (!password) {
      return res.status(401).json({
        success: false,
        msg: 'Password missing',
      });
    }

    const id = await verifyToken(token);

    if (!id) {
      return res.status(403).json({
        success: false,
        msg: 'Invalid or expired token',
      });
    }

    const user = await User.findOne({ _id: id }).select('+password');

    if (!user || !comparePassword(password, user.password)) {
      return res.status(401).json({
        success: false,
        msg: 'Invalid password.',
      });
    }

    await deleteBlob(id, user.schemaName);

    await User.updateOne(
      { _id: id },
      {
        $unset: {
          schemaName: '',
          endpointName: '',
          schemaStructure: '',
          schemaUrl: '',
        },
      },
    );

    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();

    const collectionExists = collections.some(
      (collection) => collection.name === checkLastCharacter(id),
    );

    if (collectionExists) {
      await mongoose.connection.collection(checkLastCharacter(id)).drop();
    }

    return res.status(200).json({
      success: true,
      msg: 'API deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting schema file:', error);
    return res.status(500).json({
      msg: 'Internal Server Error',
      error: error.message,
    });
  }
};
