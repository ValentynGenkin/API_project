import { createNewSchema } from '../../util/schemaCreator.js';
import { verifyToken } from '../../util/verifyToken.js';

export const createSchema = async (req, res) => {
  try {
    const token = req.cookies?.customer_access;
    const { schemaName, data } = req.body;

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

    if (!schemaName || !data) {
      return res.status(400).json({
        msg: 'Missing required fields',
      });
    }

    if (typeof schemaName === 'string') {
      await createNewSchema(id.id, schemaName, data);
    }
    return res.status(200).json({
      mgs: 'Schema created',
      schema: data,
    });
  } catch (error) {
    console.error('Error creating schema', error);
    return res.status(500).json({
      msg: 'Internal Server Error',
      error: error.message,
    });
  }
};
