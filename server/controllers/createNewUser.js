import { v4 as uuid } from 'uuid';
import User from '../db/models/userModel.js';

export const createNewUser = (req, res) => {
  const { name, lastName, email, password, berthDay, phone } = req.body;
  if (name && lastName && email && password && berthDay && phone) {
    const user = {
      name,
      lastName,
      email,
      password,
      berthDay,
      phone,
      API_key: uuid,
    };
  }
};
