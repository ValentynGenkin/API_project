import { v4 as uuid } from 'uuid';
import User from '../db/models/userModel.js';

export const createNewUser = async (req, res) => {
  const APIkey = uuid();

  try {
    const { firstName, lastName, email, password, birthday, phone } = req.body;

    if (!firstName || !lastName || !email || !password || !birthday || !phone) {
      return res.status(400).json({
        msg: 'Missing required fields',
        fields: {
          firstName: 'name',
          lastName: 'last name',
          email: 'e-mail',
          password: 'password',
          birthday: 'yyyy-mm-dd',
          phone: 'phone number',
        },
      });
    }

    const emailCheck = await User.findOne({ email: email });

    if (emailCheck) {
      return res.status(400).json({
        msg: 'Used email already registered',
      });
    } else {
      const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        birthday,
        phone,
        APIkey,
      });

      const userObject = user.toObject();

      delete userObject.password;

      return res.status(201).json({
        msg: 'new user created',
        user: userObject,
      });
    }
  } catch (error) {
    console.error('Error creating user', error);
    return res.status(500).json({
      msg: 'Internal Server Error',
    });
  }
};
