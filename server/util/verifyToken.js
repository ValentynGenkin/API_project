import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const verifyToken = (token) => {
  const { JWT_SECRET_KEY } = process.env;

  const result = jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return false;
    }

    return { id: decoded.id };
  });

  return result;
};
