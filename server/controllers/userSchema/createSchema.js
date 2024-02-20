import User from '../../db/models/userModel.js';
import { createNewSchema } from '../../util/schemaCreator.js';
import { verifyToken } from '../../util/verifyToken.js';

export const createSchema = async (req, res) => {
  try {
    const token = req.cookies.customer_access;
    const { schemaName, data } = req.body;
    if (!token) {
      return res.status(403).json({
        success: false,
        msg: 'Token not provided',
      });
    }

    const id = await verifyToken(token);

    if (!id) {
      return res.status(403).json({
        success: false,
        msg: 'Invalid or expired token',
      });
    }

    if (!schemaName || !data) {
      return res.status(400).json({
        success: false,
        msg: 'Missing required fields',
      });
    }

    await createNewSchema(id, schemaName, data);

    await User.updateOne(
      { _id: id },
      { $set: { schemaName: schemaName, schemaStructure: data } },
    );

    return res.status(200).json({
      success: true,
      mgs: 'Schema created',
    });
  } catch (error) {
    console.error('Error creating schema', error);
    return res.status(500).json({
      msg: 'Internal Server Error',
      error: error.message,
    });
  }
};
