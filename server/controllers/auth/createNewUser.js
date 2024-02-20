import { v4 as uuid } from 'uuid';
import User from '../../db/models/userModel.js';

export const createNewUser = async (req, res) => {
  const APIkey = uuid();

  try {
    const { firstName, lastName, email, password, birthday } = req.body;

    if (!firstName || !lastName || !email || !password || !birthday) {
      return res.status(400).json({
        success: false,
        msg: 'Missing required fields',
        fields: {
          firstName: 'name',
          lastName: 'last name',
          email: 'e-mail',
          password: 'password',
          birthday: 'yyyy-mm-dd',
        },
      });
    }

    const emailCheck = await User.findOne({ email: email });

    if (emailCheck) {
      return res.status(400).json({
        success: false,
        msg: 'Used email already registered',
      });
    } else {
      const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        birthday,
        APIkey,
      });

      const token = await user.createJWTToken();

      return res
        .status(201)
        .cookie('customer_access', token, {
          httpOnly: true,
          expires: new Date(
            Date.now() + parseInt(process.env.JWE_EXPIRE_TIME) * 1000,
          ),
          secure: false,
        })
        .json({ success: true });
    }
  } catch (error) {
    console.error('Error creating user', error);
    return res.status(500).json({
      msg: 'Internal Server Error',
      error: error.message,
    });
  }
};
