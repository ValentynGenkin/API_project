import bcrypt from 'bcryptjs';
import User from '../db/models/userModel.js';

export const login = async (req, res) => {
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

  return res.status(200).json({ userObject });
};
