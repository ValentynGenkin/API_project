import dotenv from 'dotenv';
import * as jose from 'jose';

dotenv.config();

export const verifyToken = async (token) => {
  try {
    const { ENCRYPTION_KEY } = process.env;

    const secret = jose.base64url.decode(ENCRYPTION_KEY);
    const { payload: userObj } = await jose.jwtDecrypt(token, secret);

    return userObj.id;
  } catch (error) {
    console.error('JWT Token error', error.message);
    throw error;
  }
};
