import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import * as jose from 'jose';

const userSchema = new mongoose.Schema(
  {
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
      unique: true,
    },
    birthday: {
      type: Date,
      required: [true, 'Check date format'],
    },
    password: {
      type: String,
      minlength: [6, 'Please enter a valid password'],
      required: [true, 'Please enter a valid password'],
      select: false,
    },
    APIkey: {
      type: String,
      required: true,
    },
    endpointName: {
      type: String,
      require: false,
    },
    schemaName: {
      type: String,
      require: false,
    },
    schemaStructure: {
      type: String,
      require: false,
    },
  },
  { versionKey: false },
);

userSchema.methods.createJWTToken = async function () {
  const { ENCRYPTION_KEY, JWT_EXPIRE } = process.env;

  if (!ENCRYPTION_KEY || !JWT_EXPIRE) {
    throw new Error('JWT configuration is incomplete');
  }

  try {
    const userObj = {
      id: this._id,
    };

    const secret = jose.base64url.decode(ENCRYPTION_KEY);

    const jwt = await new jose.EncryptJWT(userObj)
      .setProtectedHeader({ alg: 'dir', enc: 'A128CBC-HS256' })
      .setExpirationTime(JWT_EXPIRE)
      .encrypt(secret);

    return jwt;
  } catch (error) {
    console.error('Error creating JWT token:', error);
    throw new Error('Failed to create JWT token');
  }
};

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
