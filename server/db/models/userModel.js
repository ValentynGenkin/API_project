import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, 'try another email'],
  },
  phone: {
    type: String,
    required: false,
  },
  birthday: {
    type: Date,
    required: false,
  },
  password: {
    type: String,
    minlength: [6, 'Please enter a valid password'],
    required: [true, 'Please enter a valid password'],
    select: false,
  },
});

userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('User', userSchema);

export default User;
