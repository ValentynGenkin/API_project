import bcrypt from 'bcryptjs';
import User from '../db/models/userModel.js';
import dotenv from 'dotenv';

dotenv.config();

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const comparePassword = (password, hashedPassword) => {
      return bcrypt.compareSync(password, hashedPassword);
    };

    if (!email || !password) {
      return res.status(400).json({
        msg: 'Check email and/or password',
      });
    }

    const user = await User.findOne({ email: email }).select('+password');
    if (!user || !comparePassword(password, user.password)) {
      return res.status(401).json({
        msg: 'Invalid username or password.',
      });
    }

    const userObject = user.toObject();
    delete userObject.password;

    const token = await user.createJWTToken();

    return res
      .status(200)
      .cookie('customer_access', token, {
        httpOnly: true,
        expires: new Date(Date.now() + parseInt(process.env.JWT_COOKIE) * 1000),
        secure: false,
      })
      .json({ userObject });
  } catch (error) {
    console.error('Login error', error);
    return res.status(500).json({
      msg: 'Internal Server Error',
      error: error.message,
    });
  }
};
