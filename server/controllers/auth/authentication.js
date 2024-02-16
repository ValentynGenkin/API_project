import dotenv from 'dotenv';
import { verifyToken } from '../../util/verifyToken.js';
import User from '../../db/models/userModel.js';

dotenv.config();

export const authentication = async (req, res) => {
  try {
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
    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({
        success: false,
        msg: 'User not found',
      });
    }

    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.error('Authentication error', error);
    return res.status(500).json({
      msg: 'Internal Server Error',
      error: error.message,
    });
  }
};
