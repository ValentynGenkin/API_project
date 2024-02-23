import User from '../../db/models/userModel.js';
import { verifyToken } from '../../util/verifyToken.js';
import { v4 as uuid } from 'uuid';

export const newApiKey = async (req, res) => {
  const APIkey = uuid();
  try {
    const token = req.cookies.customer_access;

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

    await User.updateOne({ _id: id }, { $set: { APIkey: APIkey } });

    return res.status(200).json({
      success: true,
      mgs: 'APIkey updated',
    });
  } catch (error) {
    console.error('Error creating schema', error);
    return res.status(500).json({
      msg: 'Internal Server Error',
      error: error.message,
    });
  }
};
