import User from '../../db/models/userModel.js';
import { checkFolderExistence } from '../../util/checkFolderExistence.js';
import { comparePassword } from '../../util/comparePassword.js';
import { verifyToken } from '../../util/verifyToken.js';
import { rm } from 'fs/promises';
import mongoose from 'mongoose';
import { checkLastCharacter } from '../../util/lastCharacterCheck.js';

export const deleteUser = async (req, res) => {
  try {
    const { password } = req.body;

    const token = req.cookies?.customer_access;

    if (!token) {
      return res.status(403).json({
        success: false,
        msg: 'Token not provided',
      });
    }

    const id = await verifyToken(token);

    if (!id) {
      return res.status(403).json({
        success: false,
        msg: 'Invalid or expired token',
      });
    }

    if (!password) {
      return res.status(400).json({
        success: false,
        msg: 'Password required',
      });
    }

    const user = await User.findOne({ _id: id }).select('+password');

    if (!user || !comparePassword(password, user.password)) {
      return res.status(401).json({
        success: false,
        msg: 'Invalid password.',
      });
    }

    const folderExists = await checkFolderExistence(
      `./db/models/modelsCreatedByUsers/${id}`,
    );

    if (folderExists) {
      await rm(`./db/models/modelsCreatedByUsers/${id}`, {
        recursive: true,
      });
    }

    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();

    const collectionExists = collections.some(
      (collection) => collection.name === checkLastCharacter(id),
    );

    if (collectionExists) {
      await mongoose.connection.collection(checkLastCharacter(id)).drop();
    }

    await User.deleteOne({ _id: id });

    return res
      .status(200)
      .clearCookie('customer_access')
      .json({
        success: true,
        msg: `API and user with id: ${id.id} deleted`,
      });
  } catch (error) {
    console.error('User deletion error', error);
    return res.status(500).json({
      msg: 'Internal Server Error',
      error: error.message,
    });
  }
};
