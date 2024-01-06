import User from '../../db/models/userModel.js';
import { comparePassword } from '../../util/comparePassword.js';
import { verifyToken } from '../../util/verifyToken.js';

export const deleteUser = async (req, res) => {
  try {
    const { password } = req.body;

    const token = req.cookies?.customer_access;

    if (!token) {
      return res.status(403).json({
        msg: 'Token not provided',
      });
    }

    const id = verifyToken(token);

    if (!id) {
      return res.status(403).json({
        msg: 'Invalid or expired token',
      });
    }

    if (!password) {
      return res.status(400).json({
        msg: 'Password required',
      });
    }

    const user = await User.findOne({ _id: id.id }).select('+password');

    if (!user) {
      return res.status(404).json({
        msg: 'User not found',
      });
    }

    if (!comparePassword(password, user.password)) {
      return res.status(400).json({
        msg: 'Invalid password',
      });
    } else {
      await User.deleteOne({ _id: id.id });
    }

    return res
      .status(200)
      .clearCookie('customer_access')
      .json({
        msg: `User with id: ${id.id} deleted`,
      });
  } catch (error) {
    console.error('User deletion error', error);
    return res.status(500).json({
      msg: 'Internal Server Error',
      error: error.message,
    });
  }
};
